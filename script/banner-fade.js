$(function () {
    let bannerRender = (function () {
        let $container = $('#container'),
            $wrapper = $container.children('.wrapper'),
            $focus = $container.children('.focus'),
            $arrowLeft = $container.children('.arrowLeft'),
            $arrowRight = $container.children('.arrowRight'),
            $sideList = null,
            $focusList = null;

    let queryData = function queryData() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url : 'json/carousel.json',
                method : 'get',
                dataType : 'json',
                async : true,
                // success : data => {
                //     resolve(data);
                // },
                // error : msg => {
                //     // msg存储了失败的信息
                //     reject(msg);
                // }
                // 另一种写法
                success : resolve,
                error : reject
            });
        });
    };

    let changeSlide = function changeSlide() {
        /**
         *  1.让当前的zIndex = 1， 并且让上一个在zIndex= 0（作业是为了保证不管结构是靠前还是靠后，
         * 始终当前这个都是层级最高的，也是优先展示的）
         *  2.让当前的实现渐进的效果（opacity从0到1）
         *  3.当前最高已经渐进（动画结束），再让上一个透明度为0（下一次展示它时，是从0渐进）
         *  4.让当前的下标变为下一次对应上一次下标
         */
        let $cur = $slideList.eq(_index),
            $last = $slideList.eq(_lastIndex);
        $cur.css('zIndex', 1);
        $last.css('zIndex', 0);
        $cur.stop().animate({ opacity : 1 }, _speed, () => {
            $last.css({
                opacity : 0
            });
            _lastIndex = _index;
        });
        changeFocus();
    }

    let bindHTML = function bindHTML(data) {
        let strSlide = ``,
            strFocus = ``;
        $.each(data, (index, item) => {
            let {img, title} = item;
            strSlide += `<div class="slide"><img src="${img}" alt=${title}></div>`;
            strFocus += `<li class="${index === 0 ? 'active' : ''}"></li>`;
            console.log(data);
        });
        $wrapper.html(strSlide);
        $focus.html(strFocus);

        $slideList = $wrapper.find('.slide');
        $focusList = $focus.find('li');
    }

    let _index = 0, // 当前slide的下标
        _lastIndex = 0, // 上一次slide的下标
        _timer = null,
        _interval = 1000,
        _speed = 200;

    let autoMove = function autoMove() {
        _index ++;

        // 边界判断
        if (_index >= $slideList.length) {
            _index = 0;
        }

        changeSlide();
        
    };

    let changeFocus = function changeFocus() {
        $focusList.eq(_index).addClass('active');
        $focusList.eq(_lastIndex).removeClass('active');

        // $focusList.each((index, item) => {
        //     if (index === _index) {
        //         $(item).addClass('active');
        //     }
        //     else {
        //         $(item).removeClass('active');
        //     }
        // });
    };

    let handleMouse = function handleMouse() {
        $container.on('mouseenter', () => {
            clearInterval(_timer);
            $arrowLeft.add($arrowRight).css('display', 'block'); // add是在一个JQ集合中增加一些新的元素（获取新的JQ对象），类似两个集合合并
        }).on('mouseleave', () => {
            _timer = setInterval(autoMove, _interval);
            $arrowLeft.add($arrowRight).css('display', 'none');
        });
    }

    let handleArrow = function handleArrow() {
        $arrowRight.on('click', autoMove);
        $arrowLeft.on('click', () => {
            _index --;
            if (_index < 0) {
                _index = $slideList.length - 1;
            }
            changeSlide();
        });
    }

    return {
        init : function init() {
            let promise = queryData();
            promise.then(data => {
                // 获取数据成功后处理的事情
                bindHTML(data);
                _timer = setInterval(autoMove, _interval);
                handleMouse();
                handleArrow();
            });
        }
    };
    })();
    bannerRender.init();
});