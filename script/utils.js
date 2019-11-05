let utils = (function () {
    let getCss = function (ele, attr) {
      if ('getComputedStyle' in window) {
        let val = window.getComputedStyle(ele, null)[attr];
        let reg = /^-?\d+(.\d+)?(px|rem|em|pt)$/i;
        reg.test(val) ? val = parseFloat(val) : null;
  
        return val;
  
      }
      throw new SyntaxError('浏览器版本过低，请更新！');
       
    }; // 获取元素样式
    let setCss = function (ele, attr, val) {
      /**
       * 细节处理：
       *  1.如果需要考虑IE 6-8兼容，透明度这个样式在低版本浏览器中不是opacity，而是filter（两套都设置）
       *  2.如果val值没有带单位，我们就根据情况设置px单位
       * （加单位的样式属性：width，height，padding/margin的上下左右，font-size，top，left，right，left...）
       *  用户传递的val值是没有单位的
       */
      if (attr == 'opacity') { 
        ele.style.opacity = val;
        ele.style.filter = `alpha(opacity=${value * 100})`;
        return;
      }
    
      if (!isNaN(val)) {
        // 如果结果是false，说明val是纯数字，没单位
        let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
        reg.test(attr) ? val += 'px' : null;
      }
    
      ele['style'][attr] = val;
    }; // 设置元素样式
    let setGroupCss = function (ele, options = {}) {
      //便利传递的options，有多少键值对，就循环多少次，每一次都调取setCss方法注意设置即可
      for (let attr in options) {
        if (!options.hasOwnProperty(attr)) { break; }
        /**
         * options : 传递进来的需要修改的样式对象（集合）
         * attr : 每一次便利到的集合中的某一项（要操作的样式属性名）
         * options[attr] : 传递的要操作的样式属性值
         */
        setCss(ele, attr, options[attr]);
      }
    };
    let css = function (...arg) {
      let len = arg.length,
          second = arg[1],
          fn = getCss;
      len >= 3 ? fn = setCss : null;
      len == 2 && (second instanceof Object) ? fn = setGroupCss : null;
      return fn(...arg);
    }; // css操作汇总
    // offset : 获取当前元素距离body的偏移量（左、上偏移）
    let offset = function (el) {
      // 1.先获取当前元素本身的左、上偏移
      let curTop = ele.offsetTop,
          curLeft = ele.offsetLeft,
          p = ele.offsetParent;
      // 2.累加父参照物的边框和偏移（一直向上找，找到body位置，每当找到一个父参照物，都把它的边框的偏移累加）
      //tag-name 获取当前元素的标签名（大写的）
      while ((p.tagName !== 'BODY') ){
        curLeft += p.offsetLeft;
        curLeft += p.clientLeft;
        curTop += p.offsetTop;
        curTop += p.clientTop;
        p = p.offsetParent;
      }
      return {
        top : curTop,
        left : curLeft
      };
    };
    //操作浏览器盒子模型属性的方法
    let winHandle = function (attr, value) {
      if (value !== 'undefined') {
        document.documentElement[attr] = value;
        document.body[attr] = value;
        return;
      }
      return document.documentElement[attr] || document.body[attr];
    };
    return {
      css : css, // ES6中可直接写css
      offset : offset,
      winHandle : winHandle
    };
  })();
  