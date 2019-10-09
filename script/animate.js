
~function () {
  // 准备操作css样式的方法 getCss / setCss / setGroupCss / css
  let utils = (function () {
    // 获取样式
    let getCss = function (ele, attr) {
      let val = null,
          reg = /^-?\d+(\.\d+)?(px|rem|em)?$/;
      if ('getComputedStyle' in window) {
        val = window.getComputedStyle(ele)[attr];
        
        if (reg.test(val)) {
          val = parseFloat(val);
        }
      }
      return val;
    };

    // 设置样式
    let setCss = function (ele, attr, value) {
      if (!isNaN(value)) {
        if (!/^(opacity|zIndex)$/.test(attr)) {
          value += 'px';
        }
      }
      ele['style'][attr] = value;
    };

    // 批量设置样式
    let setGroupCss = function (ele, options) {
      for (let attr in options) {
        if (options.hasOwnProperty(attr)) {
          setCss(ele, attr, options[attr]);
        }
      }
    };

    // 合并为一个
    let css = function (...arg) {
      let len = arg.length,
          fn = getCss;
      if (len >= 3) {
        fn = setCss;
      }
      if (len === 2 && typeof arg[1] === 'object') {
        fn = setGroupCss;
      }
      return fn(...arg);
    };
    return {css};
  })();

  // effect : 准备运动的公式
  let effect = {
    Linear : function (t, b, c, d) {
      return t / d * c + b;
    },
  };

  // 封装动画库
  window.animate = function (ele, target = {}, duration = 1000) {
    // 1.基于target计算出begin / change
    let begin = {},
        change = {},
        time = 0;
    for (let attr in target) {
      if (target.hasOwnProperty(attr)) {
        begin[attr] = utils.css(ele, attr);
        change[attr] = target[attr] - begin[attr];
      }
    }

    // 2.实现动画
    let animateTimer = setInterval(function () {
      time += 17;

      // 边界判断
      if (time >= duration) {
        utils.css(ele, target);
        clearInterval(animateTimer);
        return;
      }

      // 依托target计算出每个方向的当前位置
      let cur = {};
      for (let attr in target) {
        if (target.hasOwnProperty(attr)) {
          cur[attr] = effect.Linear(time, begin[attr], change[attr], duration);
        }
      }
      utils.css(ele, cur);
    }, 17);
  };
}();

