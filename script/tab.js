// let hasClass = (ele, str) => ele.className.trim().split(/ +/).indexOf(str) >= 0;

// let addClass = (ele, str) => {
//     let isExist = hasClass(ele, str);
//     if (isExist) return;
//     ele.className += ` ${str}`;
// };

// let removeClass = (ele, str) => {
//     let isExist = hasClass(ele, str);
//     if (!isExist) return;
//     let ary = ele.className.trim().split(/ +/);
//     ary = ary.filter(item => item !== str);
//     ele.className = ary.join(' ');
// };

// // 获取元素
// let tabBox = document.querySelector('#tabBox'),
//     // option = tabBox.querySelector('.option'),
//     /**
//      * querySelectorAll: 是从但钱上下文的所有后代元素中按照选择器规则
//      * 进行筛选（而当前需求只是子级筛选）
//      */
//     childAry = [].slice.call(tabBox.children),
//     option = null,
//     conList = null,
//     optionList = null;

// option = childAry.filter(item => hasClass(item, 'option'));
// option = option.length > 0 ? option[0] : null;
// optionList = [].filter.call(option.children, item => item.tagName === 'LI');
// conList = childAry.filter(item => hasClass(item, 'con'));

// console.log(conList);

// //给获取的li绑定事件
// let lastIndex = 0; // 上一个选择的下标
// optionList.forEach((item, index) => {
//     item.onmouseover = function anonymous() {
//         if (lastIndex === index) return;
//         // this : 当前操作的li
//         // index : 当前操作li的下标
//         addClass(this, 'active');
//         removeClass(optionList[lastIndex], 'active');

//         addClass(conList[index], 'active');
//         removeClass(conList[lastIndex], 'active');
        
//         lastIndex = index;
//     };
// });