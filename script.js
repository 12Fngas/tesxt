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




// 模块化开发
//   1.团队协作开发的时候，会把产品按照功能板块进行划分，每一个功能
//   板块有专人负责开发
//   2.把各个板块之间公用的部门进行提取封装，后期在想实现这些功能，
//   直接调用引用即可（模块封装）

// var weatherRender = (function ()
// {
//     var fn = function () {};
//     // ...
//     return {
//         init : function () 
//         {
//             fn();
//         }
//     };
// })();
// weatherRender.init();



// 工厂模式（Factory Pattern）
//   1.把实现相同功能的代码进行”封装“，以此来实现”批量生产“（后期想要实现这个功能，我们只需要
//   执行函数即可）
//   2.”低耦合，高内聚“：减少页面中的冗余代码，提高代码的重复使用率

// function createPerson (name, age)
// {
//     var obj = {};
//     obj.name = name;
//     obj.age = age;
//     return obj;
// }



// 基于构造函数穿件自定义类（constructor）
//   1.在普通函数执行的基础上”new xxx”，这样就不是普通函数执行了，而是构造函数执行，当前的函数
// 名称为“类名”，接受的返回结果是当前类的一个实例
  
//   2.自己创建的类名，最好第一个单词首字母大写

//   3.这种构造函数设计模式执行，主要用于组件、类库、插件、框架等的封装，平时编写业务逻辑一般
// 不这样处理

// function Fn ()
// {

// }
// var f1 = new Fn();
// var f2 = new Fn();
// //f1与f2都是Fn类的实例，但各独自分开，互不影响
// console.log(f);

// var obj1 = {}; // obj1是Object的一个实例
// var obj2 = {}; // obj2也是Object的一个实例

// JS中创建值有两种方式：
//   1.字面量表达式
//   2.构造函数模式

// var obj = {};
// var obj2 = new Object();

// 不管是哪一种方式创造出来的都是Object类的实例，而实例之间是独立分开的，所以 var xxx = {} 这种
// 模式就是JS中的单例模式

// 基本数据类型基于两种不同的模式创建出来的值不一样！
// 基于字面量方式创建出来的值是基本类型值
// 基于构造函数创建出来的值是引用类型

// var num1 = 12;
// var num2 = new Number(12);
// console.log(typeof num1); // ==> "number"
// console.log(typeof num2); // ==> "object"




// 【构造函数执行独有】：在JS代码自上而下执行之前，首先在当前形成的私有栈中创建一个对象
// （创建一个堆内存：暂时不存储任何东西），并且让函数中的执行主体（this）指向一个新的堆内存
// （this === 创建的对象）； 代码执行完成，把之前创建的堆内存地址返回（浏览器默认返回）

// function Fn (name, age)
// {
//     var n = 10;
//     this.name = name;
//     this.age = age;
// }

// var f1 = new Fn('xxx', 20);
// var f2 = new Fn('aaa', 30);

// console.log(f1 === f2);
// console.log(f1.age);
// console.log(f2.name);
// console.log('name' in f1);
// console.log(f1.n);




// function Fn ()
// {
//     var n = 10;
//     this.m = n;
//     // return 'xxx';
//     // return;  // 只写return是结束代码执行，不会覆盖实例
//     return {xxx : 123}; 
// }
// var f = new Fn(); // new Fn; 在构造函数执行的时候，如果Fn不需要传递实参，我们可以省略小括号，还是创建实例
// console.log(f);

//   1.构造函数执行，不写return，浏览器会默认返回创建的实例，没有受到影响
//   2.如果返回的是引用值，则会把默认返回的实例覆盖，此时接收到的结果就不再是当前类的实例了
//   3.构造函数执行的时候，尽量减少return的使用，防止覆盖实例

// //instanof : 检测某一个实例是否隶属于这个类
// console.log(f instanceof Fn); // true
// console.log(f instanceof Array); // false
// console.log(f instanceof Object); // true (万物皆对象)

// // in : 检测当前对象是否存在某个属性（不管当前这个属性是对象的私有属性还是公有属性，只要有结果就是true）
// console.log('m' in f); // true
// console.log('n' in f); // false
// console.log('toString' in f); // true  toString是它的共有属性

// // hasOwnProperty : 检测当前属性是否为对象的私有属性（不仅要有这个属性，并且必须还是私有的才可以）
// console.log(f.hasOwnProperty('m')); // true
// console.log(f.hasOwnProperty('n')); // false
// console.log(f.hasOwnProperty('toString')); // false 

// 思考题：编写一个方法hasPubProperty，检测当前属性是否为对象的公有属性，和hasOwnProperty对应

// function hasPubProperty (obj, attr)
// {
//     if (attr in obj)
//     {
//         if (obj.hasOwnProperty(attr) === false)
//         {
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     }
//     return false;
// }




//   1.所有的函数数据类型天生自带一个属性：prototype（原型），这个属性的值是一个对象，
// 浏览器会默认给它开辟一个堆内存
//   2.在浏览器给prototype开辟的堆内存中有一个天生自带的属性：constructor，这个属性
// 存储的值是当前函数本身
//   3.每个对象都有一个—— __proto__ 的属性，这个属性指向当前实例所属类的prototype
// （如果不能确定它是谁的实例，都是Object的实例）

//   原型链：
//   他是一种基于__proto__向上查找的机制。当我们操作实例的某个属性或者方法的时候，首先
// 找自己空间中私有的属性或方法：
//   1.找到了，则结束查找，使用自己私有的即可
//   2.没有找到，则基于__proto__找所属类的prototype，如果找到就用这个公有的，如果
// 没有找到，基于原型上的__proto__继续向上查找，直到找到Object




// var a = 4;
// function b (x, y, a)
// {
//     console.log(a);
//     arguments[2] = 10;
//     // arguments : 函数内置的实参几何，不管是否设置形参，传递的实参值在这个集合中都存在
//     /*
    
//     arguments
//     {
//         0 : 1,
//         1 : 2,
//         2 : 3
//         length : 3
//         callee : 函数本身
//     }

//     在JS非严格模式下，函数中的形参变量和arguments存在映射机制
//     第一个形参变量值修改为100，那么arg[0]的值也跟着修改为100
//     arg[1]的值修改为200，那么第二个形参变量y的值也会跟着变为200

//     */ 
//     console.log(a);
// }
// a = b(1, 2, 3);
// console.log(a); // b()函数执行没有返回值，所以a == undefined

function fn (x, y) {
    var arg = arguments;
    arg[0] = 100;
    console.log(x);
    y = 200;
    console.log(arg[1]);
    arg[1] = 300;
    console.log(y);
    /*
    arguments和形参的映射机制建立在函数执行偶形参赋值的一瞬间，此时能建立映射机制的则建立，不能的
    不管怎么操作都无法再建立了
    */
}
fn(10);

/*严格模式
  在当前作用于的“第一行”添加“use strict”即可，这样在当前作用于中就开启了JS的严格模式

  JS文件第一行：
  "use strict" // 这个JS文件全局都开启了严格模式（只对当前这个JS文件的代码生效，下一个
  JS文件需要开启严格模式，第一行还需要再次编写）

  function fn () {
      "use strict" // 只在当前作用于使用严格模式
  }

  1.严格模式下不能使用arguments.callee
  2.严格模式下arguments和形参没有映射机制
  3.严格模式下对象不允许属性重名
  4.严格模式下，函数执行，若没有明确指定执行的主题（函数前面没有点），不像非严格模式下，统一交给window，
  而是让this指向undefined