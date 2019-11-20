/**
 * 插件封装：
 *  1.体现了封装的思想
 *  2.尽可能让用户操作简单，但可以实现非常完善的效果（支持更多种业务可能）
 */

~function (){
    class TabPlugin {
        constructor (container, options = {}) {
            // 第一个参数必传，并且是元素对象，若不匹配则抛出异常，终止执行
            if (typeof container === 'undefined' || container.nodeType !== 1) {
                throw new SyntaxError(' 第一个参数必传，并且是元素对象');
            }

            /**
             * 参数初始化（初始化配置项）: 把处理好的配置项尽可能挂到当前类的实例上，
             * 成为实例的私有属性，这样不仅在公共或者私有方法中直接可以获取使用而且
             * 也保证每一个实例间属性不冲突
             */
            // let {
            //     lastIndex = 0,
            //     eventType = 'mouseover',
            //     customPageClass = 'option',
            //     customContentClass = 'con',
            //     changeEnd
            // } = options; 
            // ['lastIndex', 'eventType', 'customPageClass', 
            // 'customContentClass', 'changeEnd'].forEach(item => {
            //     this[item] = eval('item'); // 挂载：把每一项当做实例的私有属性设置（把属性挂载到实例上）
            // });

            // 挂载方法二：
            let _default = {
                lastIndex : 0,
                eventType : 'mouseover',
                customPageClass : 'option',
                customContentClass : 'con',
                changeEnd : null
            };
            for (let attr in options) {
                if (options.hasOwnProperty(attr)) {
                    _default[attr] = options[attr];
                }
            }
            for (let attr in _default) {
                if (_default.hasOwnProperty(attr)) {
                    this[attr] = _default[attr];
                }
            }

            // 把获取的元素也挂载到实例上
            this.container = container;
            let childs = [...container.children],
                option = null;
            option = childs.find(item => this.hasClass(item, this.customPageClass));
            this.optionList = option ? [...option.children] : [];
            this.conList = childs.filter(item => this.hasClass(item, this.customContentClass));

            this.changeTab();
        }
        /**
         * 把公共方法挂载到类的原型上
         */

        hasClass(ele, str) {
            return ele.className.trim().split(/ +/).indexOf(str) >= 0;
        }

        addClass(ele, str) {
            /**
             * hasClass()不能直接调取，要基于实例调（或者直接基于类来调）
             * 方法1： TabPlugin.prototype.hasClass()
             * 方法2： this.hasClass()
             */
            if (this.hasOwnProperty(ele, str)) return;
            ele.className += ` ${str}`;
        }

        removeClass(ele, str) {
            if (!this.hasClass(ele, str)) return;
            let ary = ele.className.trim().split(/ +/);
            ary = ary.filter(item => item !== str);
            ele.className = ary.join(' ');
        }

        changeTab() {
            this.optionList.forEach((item, index) => {
                // this ： 实例
                let _this = this;
                item[`on${this.eventType}`] = function anonymous() {
                    // this : 当前操作的li
                    if (_this.lastIndex === index) return;
                    // this : 当前操作的li
                    // index : 当前操作li的下标
                    _this.addClass(this, 'active');
                    _this.removeClass(_this.optionList[_this.lastIndex], 'active');
            
                    _this.addClass(_this.conList[index], 'active');
                    _this.removeClass(_this.conList[_this.lastIndex], 'active');
                    
                    _this.lastIndex = index;
                };
            });
        }
    }
        
    window.TabPlugin = TabPlugin;  
    console.log(TabPlugin);  
}();

/**
 * 不确定项：
 *  1.哪个容器实现选项卡
 *  2.默认选中项（参考值：0   第一个选中）
 *  3.切换的事件类型（参考值： mouseover 鼠标滑过切换）
 *  4.可以自定义页卡区域的样式类和内容区域的样式类（参考值： option/con）
 *  5.支持钩子函数（生命周期函数）例如：我们可以支持切换完成后做生命事，你
 * 只需要传递一个回调函数，在内部插件每一次切换完成后，把回调函数执行
 *  ......
 */