/**
 * 封装插件
 *  1.每一次调用插件都是独立的，互不影响；
 *  2.一些常用方法还要是公用的；
 * 调取一次插件就是创建一个独立的实例，里面很多信息是互不干扰的，但一些操作方法
 * 还是共同调取一个即可（这套机制就是我们构造函数模式中类和实例的机制），所以插
 * 件、组件类库、框架的封装一般都是基于oop完成的；
 *  3.封装插件的目的：可以更多的适配各种需求、让用户使用起来方便，因此插件封装
 * 的核心与难点都在于细节的思考和处理，而不应该局限到各种模式或者装B的代码中；
 */



/**
 * 一个优秀的插件是尽可能支持更多的配置项（大部分配置项都有默认值）
 * 支持扩展，让用户在自己的插件中扩展方法
 */
//  new Banner({
//       /**
//        * ele : #container,  //操作哪个容器（选择器）
//        * data : [],  // 需要绑定的数据
//        * url : '',  // 获取数据的api地址（插件内部帮我们获取数据）
//        * isArrow : true, // 是否支持左右切换
//        * isFocus : true, // 是否支持焦点切换
//        * isAuto : true,  // 是否支持自动切换
//        * defaultIndex : 0,  // 默认展示第几张
//        * interval : 3000,  // 多久切换一次
//        * speed : 200,  // 切换的速度
//        * moveEnd : () => {},  // 切换完成后处理的事情
//        * ...
//        */
//  });

~function () {
    class Banner {
        constructor(options = {}) {
            //options是传进来的配置项 (结构赋值并给更多的配置项设置默认值)
            let {
                ele,
                url,
                isArrow = true,
                isAuto = true,
                isFocus = true,
                defaultIndex = 0,
                interval = 3000,
                speed = 200,
                moveEnd
            } = options;

            // 把所有的配置项信息都挂在到实例上（以后在原型的任何方法中都能调取这些属性获取值）
            ['ele', 'url', 'isArrow', 'isAuto', 'isFocus', 'defaultIndex', 'interval', 'speed', 'moveEnd'].forEach(item => {
                this[item] = eval(item);
            });

            // 获取需要的元素，挂载到实例上
            // 获取后续需要操作的元素对象或者元素集合
            this.container = document.querySelector(ele);
            this.wrapper = this.container.querySelector('.wrapper');
            this.focus = this.container.querySelector('.focus');
            this.arrowLeft = this.container.querySelector('.arrowLeft');
            this.arrowRight = this.container.querySelector('.arrowRight');
            this.slideList = null;
            this.stepIndex = defaultIndex;
            this.focusList = null;

            // 轮播图运动的基础参数
            this.stepIndex = defaultIndex;  // 步长
            this.autoTimer = null;  // 自动轮播的定时器

            // 调取init开启轮播图
            this.init();
        }

        // Banner的主入口（在init中规划方法的执行顺序）
        init() {
            let {isAuto, interval} = this;
            let promise = this.queryData();
            promise.then(() => {
                this.bindHTML();
            }).then(() => {
                if (isAuto) {
                    this.autoTimer = setInterval(() => {
                        this.autoMove();
                    }, interval);
                }
            });
        }

        // 数据获取
        queryData() {
            let {url} = this;
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('get', url);// 第三个参数不写是异步
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        // 把获取的数据也挂在到实例上了
                        this.data = JSON.parse(xhr.responseText);
                        resolve();
                    }
                };
                xhr.send(null);
            });
        }

        // 数据绑定
        bindHTML() {
            let {data, wrapper, focus} = this;
            let strSlide = ``,
                strFocus = ``;
            data.forEach((item, index) => {
                let {img = 'img/info.png', title = '嘿嘿嘿'} = item;
                strSlide += `<div class="slide">
                            <img src="${img}" alt="${title}">
                        </div>`;
                // ES6模板字符串中${}存放的是JS表达式，但是需要表达式有返回值
                strFocus += `<li class = "${index === 0 ? 'active' : ''}"></li>`;
            });

        wrapper.innerHTML = strSlide;
        focus.innerHTML = strFocus;

        // 获取所有的slide
        this.slideList = wrapper.querySelectorAll('.slide');
        this.focusList = focus.querySelectorAll('li');
        
        /**
         *  把现有的第一张克隆一份放到容器的末尾（由于querySelectorAll无DOM映射，
         * 新增加一个原有集合中还是之前的slide，故重新获取一遍）
         */
        wrapper.appendChild(this.slideList[0].cloneNode(true));
        this.slideList = wrapper.querySelectorAll('.slide');

        //根据slide的个数动态计算wrapper的宽度
        utils.css(this.wrapper, 'width', this.slideList.length * 1000);
        }

        // 自动轮播
        autoMove() {
            this.stepIndex ++;
    
            if (this.stepIndex >= this.slideList.length) {
                // stepIndex = 0;
                /**
                 *  说明再往后切换没有了（选择展示的是克隆的第一张），
                 * 此时我们让wrapper立即回到真实第一张的位置（left ： 0），
                 * 然后stepIndex - 1（这样可以切换到第二张）
                 */
                utils.css(this.wrapper, 'left', 0);
                this.stepIndex = 1;
            }
    
            // 基于自主封装animate实现切换动画
            /**
             * 200是从当前切换到下一张的动画时间 
             */
            animate(this.wrapper, {
                left : -this.stepIndex * 1000
            }, this.speed); 
    
            // 每一次运动完成需要让焦点跟着切换
            this.changeFocus();
        };

        // 焦点对齐
        changeFocus() {
            // 当轮播图运动到最后一张（克隆的第一张，我们需要让第一个li[索引0]有选中的样式）
            let tempIndex = this.stepIndex;
            tempIndex === this.slideList.length - 1 ? tempIndex = 0 : null;
            [].forEach.call(this.focusList, (item, index) => {
                item.className = index === tempIndex ? 'active' : '';
            });
        };

    }
    window.Banner = Banner;
}();