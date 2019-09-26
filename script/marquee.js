let wrapper = document.querySelector('.wrapper');
// 1.把wrapper中原有的li克隆一份放到容器末尾

/** 方法1：
let wrapperList = wrapper.querySelectorAll('li');
let frag = document.createDocumentFragment();
[].forEach.call(wrapperList, function (item) {
    frag.appendChild(item.cloneNode(true));
})
wrapper.appendChild(frag);
frag = null;
*/

// 方法2 ：
wrapper.innerHTML += wrapper.innerHTML;

//克隆完成后修改wrapper的宽度（内容变多了）
utils.css(wrapper, 'width', utils.css(wrapper, 'width') * 2);

/**
 * 实现JS动画
 *  让wrapper每间隔一段时间（最有动画时间是13-17ms）在原有的left值基础上
 * 减去步长（想动画快点，步长就大点）
 */


 // JS中的定时器：间隔1000毫秒执行一次这个方法，直到手动清除为止
 setInterval(function () {
    // 获取当前wrapper的left值,再减去步长，把最新的left赋值给元素
    let curL = utils.css(wrapper, 'left');
    utils.css(wrapper, {
        left : curL -= 2
    });
    
    //实现无缝：当ul距离marqueeBox的左偏移是整个wrapper一半宽度，就让wrapper立即运动到left为0的位置
    if (Math.abs(wrapper.offsetLeft) >= utils.css(wrapper, 'width') / 2) {
        utils.css(wrapper, 'left', 0);
    }
}, 17);