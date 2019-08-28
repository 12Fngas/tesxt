// var a = 12;
// var b = a;
// console.log(a);

// var arr1 = [12, 23];
// var arr2 = arr1;
// arr2.push(100);
// console.log(arr1);

// function sum () 
// {
//     var total = null;
//     for (var i = 0; i < arguments.length; i++)
//     {
//         var item = arguments[i];
//         item = parseFloat(item);
//         if (!isNaN(item))
//         {
//             total += item;
//         }
//     }
//     return total;
// }

// console.log(sum(12, 23 ,'34', 'AA'));





// f = function () {
//     return true;
// }

// g = function () {
//     return false;
// }

// ~function () 
// {
//     if ( g() & [] == ![] ) 
//     {
//         f = function () { return false; };
//         function g () { return true; }
//     }

// }();

// console.log(f());
// console.log(g());





// if (1 === 2)
// {
//     console.log(fn);
//     function fn ()
//     {
//         console.log('ok');
//     }
// }

// console.log(fn);



// fn();
// function fn () { console.log(1); }
// fn();
// function fn () { console.log(2); }
// fn();
// var fn = 100;
// fn();
// function fn () { console.log(3); }
// fn();
// function fn () { console.log(4); }
// fn();


// b = 12;
// console.log(b);
// a = 12;
// console.log(a);
// let a = 13;
// console.log(a);


// let a = 10,
//     b = 10;

// let fn = function () 
// {
//     console.log(a, b);
//     let a = b = 20;
//     console.log(a, b);
// };
// fn();
// console.log(a, b);



// var a = 10;
// if (true)
// {
//     console.log(a);
//     let a = 10;
// }

// console.log(typeof a);
// let a = 10;
// //换下一行试试~~
// //var a = 10;



// var a = 12,
//     b = 13,
//     c = 14;

// function fn (a)
// {
//     console.log(a, b, c); // => 12, undefined, 14
//     var b = c = a = 20;
//     console.log(a, b, c); // => 20, 20, 20
// }

// fn(a);
// console.log(a, b, c); // => 12, 13, 20





// var arr = [12, 23];
// function fn (arr)
// {
//     console.log(arr); // => 12，23
//     arr[0] = 100;
//     arr = [100];
//     arr[0] = 0;
//     console.log(arr); // => 0
// }
// fn(arr);
// console.log(arr); // => 100, 23



// var a = 12;
// function fn () 
// {
//         console.log(arguments.callee.caller);
// }
// function sum ()
// {
//     var a = 120;
//     fn ();
// }
// function aa ()
// {
//     fn();
// }
// sum();



// var n = 10;
// function fn () 
// {
//     var n = 20;
//     function f ()
//     {
//         n++;
//         console.log(n);
//     }
//     f();
//     return f;
// }
// var x = fn(); // 21
// x(); // 22
// x(); // 23
// console.log(n); // 10




// var i = 1;
// function fn (i) 
// {
//     return function (n)
//     {
//         console.log(n + (++i));
//     }
// }
// var f = fn(2);
// f(3); // 6
// fn(5)(6); // 12
// fn(7)(8); // 16
// f(4); // 8



// // 闭包：函数执行形成一个私有作用域，保护里面的私有变量不受外界干扰
// //闭包：柯理化函数
// function fn ()
// {
//     return function ()
//     {
        
//     }
// }

// //闭包：惰性函数
// var utils = (function ()
// {
//     return {


//     }
// }
// )();

// //JQ方式：把需要暴露的方法抛到全局
// (function ()
// {
//     function jQuery()
//     {

//     }
//     window.jQuery = window.$ = jQuery;
// }
// )();
// $();
// jQuery();

// //Zepto方式：基于return把需要供外部使用的方法暴露出去
// var Zepto = (function ()
// {
//     //.....
//     return {
//         xxx : function () {}
//     };
// })();
// Zepto.xxx();



// var list = document.getElementsByTagName('li');
// for (var i = 0; i < list.length; i++)
// {
//     /* 方法1： 自定义属性
//     list[i].idx = i;
//     list[i].onmouseover = function ()
//     {
//         console.log(this.idx);
//     }
//     */
    
//     /* 方法2： 闭包
//     (function (i)
//     {
//         list[i].onmouseover = function ()
//         {
//             console.log(i);
//         };
//     }) (i);
//     */

//     /* 方法3：ES6 let
//     for (let i = 0; i < list.length; i++)
//     */
// };



// 单例设计模式（singleton pattern）

// 1.表现形式
// var obj = {
//     name : 'xxx',
//     age : 18
// };
// 在单例设计模式中，obj不仅是对象名，它被称为“命名空间[namespace]“，
// 把描述事物的属性存放到明明空间中，对个命名空间独立分开，互不冲突

// 2.作用：把描述同一件事物的属性和特征进行“分组、归类”（存储在同一个堆内存空间中），
// 因此避免了全局变量之间的冲突和污染
// var pattern1 = {name : 'xxx'};
// var pattern2 = {name : 'xxx'};

// 3.单例设计模式命名的由来
// 每个命名空间都是JS中Object这个基类的实例，而实例之间是互相独立互不干扰的，
// 所以我们称它为”单例（单独的实例）“

// 高级单例模式：
// var namespace = (function ()
// {
//     function fn1() {}
//     function fn2() {}
//     return {
//         fn1 : fn1,
//         fn2 : fn2
//     };
// })();




// var n = 2;
// var obj = {
//     n : 3,
//     fn : (function (n)
//     {
//         n *= 2;
//         this.n += 2;
//         var n = 5;
//         return function (m)
//         {
//             this.n *= 2;
//             console.log(m + (++n));
//         }
//     }) (n)
// };
// var fn = obj.fn;
// fn(3);
// obj.fn(3);
// console.log(n, obj.n);

// this
// 1.给当前元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的this是当前操作的元素对象
// oBox.onclick = function ()
// {
//     // this === oBox
// }

// 2.普通函数执行，函数中的this取决于执行的主体，谁执行的，this就是谁（执行主体：方法执行，
// 看方法名前面是否有‘点’，有的话，点前面是谁this就是谁，没有this是window）
// function fn ()
// {
//     console.log(1);
// }
// var obj = {fn : fn};
// obj.fn(); // ==> 1

// 自执行函数执行，其this为window
// ~function ()
// {
//     // this === window
// }();




模块化开发
  1.团队协作开发的时候，会把产品按照功能板块进行划分，每一个功能
  板块有专人负责开发
  2.把各个板块之间公用的部门进行提取封装，后期在想实现这些功能，
  直接调用引用即可（模块封装）

var weatherRender = (function ()
{
    var fn = function () {};
    // ...
    return {
        init : function () 
        {
            fn();
        }
    };
})();
weatherRender.init();