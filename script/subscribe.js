(function(window) {
        class Subscribe {
            constructor () {
                // 创建一个容器（每个实例都有独立的容器，管理自己的方法）
                this.pond = [];
    
            }
    
            // 向计划表（pond池子）中增加方法：去重
            // fn : 要增加的方法
            add (fn) {
                let pond = this.pond,
                    isExist = false;
                pond.forEach(item => item === fn ? isExist = true : null);
                !isExist ? pond.push(fn) : null;
            }
    
            // 从计划表（pond池子）中移除方法
            remove (fn) {
                let pond = this.pond;
                pond.forEach((item, index) => {
                    if (item === fn) {
                        // pond.splice(index, 1);// 用splice删除，会数组塌陷
                        pond[index] = null;
                    }
                });
            }
    
            // 通知计划表中的方法依次执行
            // 如果传递参数信息了，把这些参数一次赋值给执行的每一个方法
            fire (...arg) {
                let pond = this.pond;
                pond.forEach((item, index) => {
                    // remove机制处理了，此时item不一定都是函数了，有可能是null
                    // 是null不执行，要删掉
                    for (let i = 0; i < pond.length; i++) {
                        let item = pond[i];
                        if (item === null) {
                            pond.splice(i, 1);
                            i--;
                            continue;
                        }
                        item(...arg);
                    }
                });
            }
        }
        window.Subscribe = Subscribe;
    })(window);