!(function () {
    if (typeof Subscribe === 'undefined') {
        throw new ReferenceError("can't find Subscribe");
    }
    class Drag extends Subscribe{
        constructor (ele) {
            super();
            // this : drag的实例
            // this.pond = []  this.add()  this.remove()  this.fire()  都已继承

            // init parameters
            this.ele = ele;
            ['strX', 'strY', 'strL', 'strT', 'curL', 'curT'].forEach(item => {
                this[item] = null;
            });

            //subscribe
            this.subDown = new Subscribe;
            this.subMove = new Subscribe;

            //drageStart
            this.DOWN = this.down.bind(this);
            this.ele.addEventListener('mousedown', this.DOWN);
        }   

        down (ev) {
            let ele = this.ele;
            this.strX = ev.clientX;
            this.strY = ev.clientY;
            this.strL = ele.offsetLeft; // 应该是获取left和top样式值
            this.strT = ele.offsetTop;

            this.MOVE = this.move.bind(this);
            this.UP = this.up.bind(this);
            document.addEventListener('mousemove', this.MOVE);
            document.addEventListener('mouseup', this.UP);

            this.subDown.fire(ele, ev);
        }

        move (ev) {
            let ele = this.ele;
            this.curL = ev.clientX - this.strX + this.strL;
            this.curT = ev.clientY - this.strY + this.strT;
            ele.style.left = this.curL + 'px';
            ele.style.top = this.curT + 'px';

            this.subMove.fire(ele, ev);
        }

        up (ev) {
            document.removeEventListener('mousemove',this.MOVE);
            document.removeEventListener('mouseup',this.UP);
            this.fire(this.ele, ev); 
            /**
             *  继承方式的好处：自雷的实例可以直接调取父类的方法,也继承了父类实例的一些私有属性，
             * 用的时候不用单独创建父类实例，直接基于子类实例即可.
             */
        }
    }


    window.Drag = Drag;
})();