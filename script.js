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

// function fn (x, y) {
//     var arg = arguments;
//     arg[0] = 100;
//     console.log(x);
//     y = 200;
//     console.log(arg[1]);
//     arg[1] = 300;
//     console.log(y);
//     /*
//     arguments和形参的映射机制建立在函数执行偶形参赋值的一瞬间，此时能建立映射机制的则建立，不能的
//     不管怎么操作都无法再建立了
//     */
// }
// fn(10);

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
*/




// var foo = 'hello';
// (function (foo) {
//     console.log(foo);
//     var foo = foo || "world";
//     console.log(foo);
// })(foo);
// console.log(foo);

// function fn (x) {
//     // if (typeof x === 'undefined') {
//     //     x = 0;
//     // }
//     x = x || 0;
//     /*
//     这种赋值方式没有上面if严谨（if这种是没传值才会赋值默认值，|| 这种是不传值
//     或者传递的值是假，都让它等于0）
//     */
// }
// fn(false);

// function fn (callback) {
//     // if (typeof callback === 'function') {
//     //     callback();
//     // }
//     callback && callback();
//     /*
//     上面if判断的简写版（不严谨）：默认callback要不然就传函数，要不然就不传
//     */
// }




// var a = 9;
// function fn () {
//     a = 0;
//     return function (b) {
//         return b + a++;
//     }
// }
// var f = fn(); // a = 0
// console.log(f(5)); // 5
// console.log(fn()(5)); // 5
// console.log(f(5)); // 6
// console.log(a); // 2


// var arr = [1, 2, 3, 4];
// function fn (arr) {
//     arr[0] = 0;
//     arr = [0];
//     arr[0] = 100;
//     return arr;
// }
// var res = fn(arr); // res = [100]
// console.log(arr); // arr[0, 2, 3, 4]
// console.log(res);


// function fn (i) {
//     return function (n) {
//         console.log(n + (i++));
//     }
// }
// var f = fn(10); // i = 10
// f(20); // 30
// fn(20)(40); // 60
// fn(30)(50); // 80
// f(30); //41


// var num = 10;
// var obj = {num : 20};
// obj.fn = (function (num) {
//     this.num = num * 3; // window.num = 60
//     num ++;             // num 21
//     return function (n) {
//         this.num += n;
//         num ++;
//         console.log(num);
//     }
// })(obj.num);
// var fn = obj.fn;
// fn(5); // window.num = 60 + 5 = 65,  num = 22
// obj.fn(10); // obj.num = 30, num = 11, 
// console.log(num, obj.num);



// function Fn () {
//     this.x = 100;
//     this.y = 200;
//     this.getX = function () {
//         console.log(this.x);
//     }
// }
// Fn.prototype.getX = function () {
//     console.log(this.x);
// }
// Fn.prototype.getY = function () {
//     console.log(this.y);
// }
// var f1 = new Fn;
// var f2 = new Fn;
// console.log(f1.getX === f2.getX); // false
// console.log(f1.getY === f2.getY); // true
// console.log(f1.__proto__.getY === Fn.prototype.getY); // true
// console.log(f1.__proto__.getX === f2.getX); // false
// console.log(f1.getX === Fn.prototype.getX); // false
// console.log(f1.constructor); // Fn
// console.log(Fn.prototype.__proto__.constructor); // Object
// f1.getX(); // 100
// f1.__proto__.getX(); // undefined
// f2.getY(); // 200
// Fn.prototype.getY(); // undefined



// var fullName = 'language';
// var obj = {
//     fullName : 'javascript',
//     prop : {
//         getFullName : function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName()); // undefined
// var test = obj.prop.getFullName;
// console.log(test()); // language


// var name = 'window';
// var Tom = {
//     name : 'Tom',
//     show : function () {
//         console.log(this.name);
//     },
//     wait : function () {
//         var fun = this.show;
//         fun();
//     }
// };
// Tom.wait(); 




// function fun () {
//     this.a = 0;
//     this.b = function () {
//         alert(this.a);
//     }
// }
// fun.prototype = {
//     b : function () {
//         this.a = 20;
//         alert(this.a);
//     },
//     c : function () {
//         this.a = 30;
//         alert(this.a);
//     }
// };
// fun.prototype = {
//     d : function () {
//         this.a = 100;
//         alert(this.a);
//     }
// };
// var my_fun = new fun();
// my_fun.b(); // 0
// my_fun.c(); // 30
/**
 * 在实际开发中，根据需要，会重定向类的原型（让类的原型指向增加开辟的堆内存）
 * 【存在的问题】
 * 1.增加开辟的堆内存中没有constructor属性，导致类的原型构造函数缺失（解决：
 * 增加手动在堆内存中增加constructor属性）
 * 2.当原型重定向后，浏览器默认开辟的那个原型会被释放掉，如果之前存储了一些方法
 * 和属性，则会丢失（所以：内置类的原型不允许重定向）
 */




//  function Fn () {
//      var n = 10;
//      this.m = 20;
//      this.aa = function () {
//          console.log(this.m)
//     }
//  }
//  Fn.prototype.bb = function () {
//      console.log(this.n)
// };
//  var f1 = new Fn;
//  Fn.prototype = {
//     aa : function () {
//         console.log(this.m + 10);
//     }
//  }
//  var f2 = new Fn;
//  console.log(f1.constructor); // Fn
//  console.log(f2.constructor); // Object
//  f1.bb();  // undefined
//  f1.aa(); // 20
//  f2.bb(); // not a function
//  f2.aa(); // 30
//  f2.__proto__.aa(); // 30




// var arr = [1, 1, 2, 2, 2, 3];
// Array.prototype.dupRemove = function () {
//     var obj = {};
//     for (var i = 0; i < this.length; i++) {
//         var item = this[i];
//         if (obj.hasOwnProperty(item)) {
//             this[i] = this[this.length - 1];
//             this.length --;
//             i --;
//         }
//         else {
//             obj[item] = item;
//         }
//     }
//     obj = null;
//     return this;
// }

// arr.dupRemove();
// console.log(arr);


// 函数的3种角色： 普通函数、普通对象、类
// function Fn () {
//   var n = 10;
//   this.m = 100;
// }
// Fn.prototype.aa = function () {
//   console.log('aa');
// }
// Fn.bb = function () {
//   console.log('bb');
// }
// Fn();
// var f = new Fn;
// console.log(f.n);
// console.log(f.m);
// f.aa();
// console.log(f.bb);




// function Foo () {
//   getName = function () {
//     console.log(1);
//   }
//   return this;
// }
// Foo.getName = function () {
//   console.log(2);
// }
// Foo.prototype.getName = function () {
//   console.log(3);
// }
// var getName = function () {
//   console.log(4);
// }
// function getName () {
//   console.log(5);
// }
// Foo.getName(); 
// getName();  
// Foo().getName();  
// getName();  

// new Foo.getName(); 
// new Foo().getName(); 
// new new Foo().getName(); 
 



// let fn = function () {
//   console.log(this.name);
// }
// let obj = {
//   name : 'OBJ',
//   fn : fn
// };
// let oo = {name : 'oo'};
// fn.call(oo);
// obj.fn();

/**
 * call
 * fn.call: 当前实例（函数fn）通过原型链找到Function.prototype上的call
 * 方法
 * fn.call()：把找到的call方法执行
 * 
 * 当call方法执行的时候
 * => 先把要操作函数中的this关键字变为call方法第一个传递的实参值
 * => 把call方法第二以及第二个以后的实参获取到
 * => 把要操作的函数执行，并且把第二个以后传进来的实参传给函数
 * 
 */

//  Function.prototype.myCall = function () {
//   let param1 = arguments[0],
//        paramOther = []; // 把arg中第二以及第二以后的实参获取到
//   // this : fn 当前要操作的函数（函数类的一个实例）
//   // 把fn中的this关键字修改为param1
//   // 把fn执行，把paramOther分别传递给fn
//   // this（paramOther）
//  }
//  fn.call(obj);

// function fn1 () {console.log(1);}
// function fn2 () {console.log(2);}
// fn1.call(fn2);
// fn1.call.call(fn2);
// Function.prototype.call(fn1);
// Function.prototype.call.call(fn1);


// let fn = function (a, b) {
//   console.log(this,a, b);
// }
// let obj = {name : "OBJ"};
// fn.call(10,20);
// fn.call();
// fn.call(null);
// fn.call(undefined);

/**
 * call中的细节
 *   1.非严格模式下，如果参数不传，或者第一个传递的是null、undefined，this都指向window
 *   2.在严格模式下，第一个参数是谁，this就指向谁（包括 null / undefined），不传this就是undefined
 * 
 * apply： 和call基本一样，区别在于传参方式
 *   fn.call(obj, 10, 20);
 *   fn.apply(obj, [10, 20]) apply把需要传递给fn的参数放到一个数组（或者类数组）中传递进去，
 * 虽然写的是一个数组，但相当于给fn一个个传递
 * 
 * bind： 语法和call一样，区别在于是立即执行还是等待执行
 *   fn.call(obj, 10, 20) 改变fn中的this，并且把fn立即执行
 *   fn.bind(obj, 10, 20) 改变fn中的this，此时fn没有执行（不兼容IE6-8）
 * 
 * 需求：点击的时候执行fn，让fn中的this是obj
 * 
 *   document.onclick = fn; // this : document
 *   document.onclick = fn.call(obj); // 虽然this确实改为obj了，但是绑定的时候
 * 就把fn执行了（call是立即执行函数），点击的时候执行的是fn的返回值undefined
 * 
 *   document.onclick = fn.bind(obj); // bind把fn中的this预处理为obj，此时
 * 并没有执行，当点击的时候才会把fn执行
 */






// 需求一：获取数组中的最大（最小）值
//   方法一：先排序，第0项就是目标值

// let arr = [1,5,3,2,6,1,2,3,5];
// let max = arr.sort(function (a, b) {
//   return a - b;
// })[0];

//   方法二：假设法

// let max = arr[0];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// [12,13,14].toString(); // => "12,13,14"
// eval("12,13,14"); // => 14

// // 1.eval : 把字符串转换为JS表达式
// eval("1+2"); // => 3

// 2.括号表达式（小括号的应用）
/**
 *   用小括号抱起来，里面有很多项（每一项用逗号分隔），最好只获取最后一项的内容（但是
 * 会把其他的项也都过一遍
 */

//  (function () {
//    console.log(1);
//  },function () {
//    console.log(2);
//  }
//  )();

//  let a = 1 === 1 ? (12,23,34) : null;
//  console.log(a);

 //不建议过多使用括号表达式，因为会改变this
// let fn = function () {console.log(this);};
// let obj = {fn : fn};
// (fn, obj.fn)(); // 执行的是obj.fn，但方法中的this是window而不是obj

// 方法3：
// eval("Math.max("+arr.toString()+")");

// 方法4：
// Math.max.apply(null, arr);
// 利用了apply的特征：虽放的是一个数组，但执行方法的时候，也是将数组中每一项
// 依次传给数组

// 方法5：ES6 展开运算符
// Math.max(...arr);



// let arr = [12, 23, 34];
// /**
//  * let a = arr[0];
//  * let b = arr[1];
//  * let c = arr[2];
//  */
// let [a, b, c] = arr;
// /**
//  * 让等号左边出现和右边相同的数据结构，左边可以创建一些变量，快速获取到右侧对应位置的值（解构赋值）
//  */
// let [a] = arr; // a = 12;
// let [a, , c];  // a = 12, c = 34

// 需求：获取第一项，把剩下的项作为一个数组返回
// let arr = [12, 23, 34];
// let [a, ...b] = arr; // a = 12, b = [23, 34]
/**
 * ...在此称为剩余运算符：除了前面意外的项，都放在一个数组中
 * 剩余运算符处于解构中的最后的位置
 */

//  let arr = [12];
//  let [a, b = 0] = arr;
 /**
  * 如果当前变量对应结构中的这一项没有值，变量用默认值
  */

  // 现实中一般针对数组或者对象进行结构赋值
  // let obj = {
  //   name : 'xxx', 
  //   age : 25, 
  //   gender : 0
  // };
  // let {name, age} = obj;
  // // 对象结构赋值默认情况下要求： 左侧变量名和对象中的属性名一致才可以

  // console.log(name, age);


  // let {age : ageAA} = obj;
  // console.log(age); // undefined
  // console.log(ageAA); // 25 给结构的属性名起别名，作为变量

  // let {friend = 0} = obj;
  // console.log(friend); // 0 给不存在的属性设置默认值

  // let fn = function ({
  //   name = 'xxx', age = 0
  // } = {}) {
  //   /**
  //    * 把传递的对象解构了（不传递值，默认为空对象；现在传递对象或者不传递，
  //    * 形参接收到的都是对象），解构的时候，可以把传递进来对象中，如果某个
  //    * 属性不存在，我们赋值默认值
  //    */
  //   console.log(name, age);
  // };
  // fn({name : 'aaa', age : 25});

  // let value = {
  //   name : 'xxx',
  //   age : 25,
  //   score : [12, 23, 34, 45]
  // };
  // /**
  //  * a = 'xxx'
  //  * b = 12
  //  * c = [23, 34, 45]
  //  */
  // let {name : a, age : [b, ...c]} = value;




  /**
   *  "..."在ES6语法中，有三种含义
   *   1.剩余运算符
   *   2.拓展运算符
   *   3.展开运算符
   */

// let arr = [12, 23, 34];
// let [...arg] = arr; // arr.slice(0)  克隆数组

// function fn (context, ...arg) {
//   // 获取传递值中的第一个和剩下的
//   console.log(context, arg);
//   // arg是一个数组 / arguments是类数组
// }
// fn(obj, 10, 20);

// function sum (...arg) {
//   /**
//    * 传递几个实参，arg就存储多少个，此时的arg和arguments一样，区别是前者是数组
//    * 后者是类数组。
//    */
// }

// let arr = [12, 23, 34];
// let fn = function (a, b, c) {
//   console.log(a, b, c);
// }
// Math.max(...arr);
// fn(...arr); // 把数组中每一项分别传给函数，用展开运算符展开即可。

// let obj = {name : 'xxx', age : 20};
// let newObj = {...obj, gender : 0}; // 把原有对象展开（克隆）放到新对象中

// let arr = [12, 23];
// let newArr = [...arr, 100];

// 去掉最大数以及最小数，后求平均数
// 方法1：
// let arr = [123,512,333,1,0];
// arr.sort(function (a, b) {
//   return a - b;
// });
// arr.pop();
// arr.shift();
// function getAverage (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return (sum / arr.length).toFixed(2);
  
// }
// console.log(getAverage(arr));

// 方法2：
// let fn = function () {
//   /**
//    * 把arg类数组转换为数组arr（克隆一份类数组，存储到数组中）
//    * 借用Array.prototype.slice方法
//    */
//   let arr = [].slice.call(arguments, 0);
//   /**
//    * 类数组借用数组原型上的方法执行，实现相关操作（借用slice实现把类数组转换为数组）
//    * 前提：类数组和数组类似，都用length和下标（字符串符合此前提，可以这样搞）
//    */

//   arr.sort(function (a, b) {
//     return a -b;
//   }).pop();
//   arr.shift();
  
//   return (eval(arr.join('+')) / arr.length).toFixed(2);
// }

// fn(1,2,3,4);

// 三种类数组克隆为数组的方法：
// let arr = [].slice.call(arguments, 0);
//     arr = [...arguments];
//     arr = Array.from(arguments);




// let fn = (x, y) => {

// };
// fn(10, 20);

// fn = x => {
//   // 只有一个形参，小括号可省略
// };
// fn(10);

// fn = (x = 0, y = 0) => x + y; // 函数体内只有一句，并且是return，大括号可省略（形参设置默认值）
// console.log(fn(10, 20));

// fn = x => y => x + y; // 等价于：
// fn = function (x) {
//   return function (y)
//   {
//     return x + y;
//   }
// } 

// // 箭头函数中没有arguments
// fn = (...arg) => {
//   console.log(arguments); // arguments is not defined
//   console.log(arg); // 可用剩余运算符代替，而且arg是数组
// }
// fn(10, 20, 30, 40);

// // 箭头函数中没有自己的执行主体（this），它的this都是集成上下文中的this
// let obj = {
//   fn : (function () {
//     // this : window
//     return  () => {
//       console.log(this);
//     }
//   })()
// };
// obj.fn();
/**
 * this是window，不是obj。箭头函数执行和是否有点，点前面是谁都没关系，因为它没有自己的执行主体，而是找
 * 上下文中的this来使用
 */


// let navBox = document.getElementsByTagName('nav'),
//     clickLi = document.getElementsByClassName('clickLi'),
//     mainBox = document.getElementById('main'),
//     productLi = document.getElementsByClassName('proLi');


// (function () {
//   let productData = null;
//   let xhr = new XMLHttpRequest;
//   xhr.open('get', 'data.json', false);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       productData = xhr.responseText;
//     }
//   };
//   xhr.send(null);
//   productData = JSON.parse(productData);


//   let str = ``;
//   for (let i = 0; i < productData.length; i++) {
//     let {
//       title,
//       img = 'img.jpg',
//       price,
//       time,
//       hot
//     } = productData[i];

//     str += `<li class="proLi"
//               data-price="${price}"
//               data-time="${time}"
//               data-hot="${hot}"  >
//               <img src="${img}" alt="">
//               <p>${title}</p>
//               <p>￥${price}</p>
//           </li>`;
//   }
//   mainBox.innerHTML += str;
// })();

// (function () {
  
//   let sortList = function () {
    
//     let productArr = [].slice.call(productLi);
//     let attrArr = ['data-time','data-price','data-hot'];

//     productArr.sort((a, b) => {

//       let aP = a.getAttribute(attrArr[this.idx]),
//           bP = b.getAttribute(attrArr[this.idx]);
//       if (this.idx === 0) {
//         aP = aP.replace(/-/g, '');
//         bP = bP.replace(/-/g, '');
//       }
//       return (bP - aP) * this.flag;
//     });
    
//     for (let i = 0; i < productArr.length; i++) {
//       let curLi = productArr[i];
//       mainBox.appendChild(curLi);
//     }
//   };

//   for (let i = 0; i < productLi.length; i++) {
//     let curLink = productLi[i];
//     curLink.idx = i;
//     curLink.flag = -1;
    
//     curLink.onclick = function () {
//       this.flag *= -1;
//       sortList.call(this);
//     }
//   }
// })();


/**
 * 正则：是一个用来处理字符串的规则
 *   1.正则只能用来处理字符串
 *   2.处理一般包括两方面：
 *     A：验证当前字符串是否符合某个规则（正则匹配）
 *     B：把一个字符串中符合规则的字符获取到（正则捕获）
 * 
 * 学习正则就是学习如何编写规则，每个正则由两部分组成：
 *   1.元字符
 *   2.修饰符
 */

 // 1.创建正则的两种方式
//  let reg1 = /^\d+$/g; // 字面量方式
//  let reg2 = new RegExp("^\\d+$", "g");

 //2.正则两个斜杠之间抱起来的都是‘元字符’，斜杠后面出现的都是‘修饰符’ 
 /**
  * 常用修饰符：
  *       i  ignoreCase  忽略大小写匹配
  *       m  multiline  多行匹配
  *       g  global  全局匹配
  * 
  * 常用元字符：
  *    [特殊元字符]
  *       \d  0~9之间的一个数字
  *       \D  非0~9之间的任意字符
  *       \w  "数字、字母、下划线"中的任意一个 => \[0-9a-zA-Z_]\ 等价于\w
  *       \s  匹配任意一个空白字符（包括\t制表符[TAB键盘四个空格]）
  *       \b  匹配边界符 ‘zhu’ （z左边和u右边就是边界） 'zhu-feng'（z左边、u右边、f左边、g右边是边界）
  *       \n  匹配一个换行符
  *       \  转移字符（把一个普通字符转义为特殊的字符，例如：\d，把有特殊含义的转换为普通意思，例如：\. 此处的点就不是任意字符，而是一个小数点）
  *       .  不仅仅是小数点，而是代表除了\n意外的任意字符
  *       ^  以某个元字符开头
  *       $  以某个元字符结尾
  *    [量词元字符：让其左边的元字符出现多少次]
  *       * 出现零到多次
  *       ？ 出现零到一次
  *       + 出现一到多次
  *       {n} 出现n次
  *       {n,} 出现n到多次
  *       {n,m} 出现n到m次
  *    [普通元字符]
  *       只要在正则中出现的元字符（在基于字面方式创建），除了特殊和有两次意义的意外，其余的都是普通元字符
  */





/**
 * 中括号的一些细节
 *  [xyz]
 *  [^xyz]
 *  [a-z]
 *  [^a-z]
 *  
 * 1.中括号中出现的元字符一般都是代表本身含义的
 * 2.中括号中出现的两位数，不是两位数，而是两个不同的数字中的任意一个
 */

//  let reg = /^.$/; //  一个正则设置了^和$，那么代表的含义其实就是只能是xxx
//  console.log(reg.test('n'));   // true
//  console.log(reg.test('1'));   // true
//  console.log(reg.test('\n'));  // false
//  console.log(reg.test('nn'));  // false (只能是一位)


// reg = /^.+$/;
// console.log(reg.test('...')); //=> true

// reg = /^[.]$/;
// console.log(reg.test('...')); // => true

// reg = /^[\d]+$/; // \d在这里依然是0~9中的一个数字
// console.log(reg.test('0')); // true
// console.log(reg.test('d')); // false

// reg = /\d+/; // 不加^$代表字符串中只要包含xxx即可

// reg = /^[18]$/;
// console.log(reg.test('18')); // false (只能是1或者8)

// reg = /^[12-65]$/; // 只能是1或者2~6或者5
// console.log(reg.test('13')); // false 

// /* 需求：18~65之间
//     18~19 1[89]
//     20~59 [2-5]\d
//     60~65 6[0-5]
// */
// reg = /^((1[89])|(2-5)\d|(6[0-5]))$/;

// /**
//  * 需求：匹配”[object AAA]“
//  */

// reg = /^\[object .+\]$/;




// /**
//  * []分组的作用
//  *  1.改变默认的优先级
//  *  2.分组捕获
//  *  3.分组引用
//  */

//  reg = /^18|19$/;
//  console.log(reg.test('18'));  // true
//  console.log(reg.test('19'));  // true
//  console.log(reg.test('1819'));  // true
//  console.log(reg.test('189'));  // true
//  console.log(reg.test('181'));  // true
//  console.log(reg.test('819'));  // true
//  console.log(reg.test('119'));  // true

//  reg = /^([a-z])([a-z])\2\1$/; // 分组引用：正则中出现的/1和第一个分组出现一样的内容
//  console.log(reg.test('oppo'));
//  console.log(reg.test('poop'));

//  /**
//   * 匹配身份证号码
//   */

//   reg = /^\d{17}(\d|X)$/; // 简单：只能匹配是否符合格式，不能提取身份证中的信息
//  /**
//   * 130828199012040617
//   * 130828  地域
//   * 19901204  出生年月
//   * 0617  倒数第二位：奇数男，偶数女
//   */

//   reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}\d(?:\d|X)$/;
//   console.log(reg.exec('130828199012040617')); // 分组捕获
  /**
   * exec实现的是正则捕获，捕获的结果是一个数组：
   *  [
   *    "130828199012040617", 
   *    "130828", 
   *    "1990", 
   *    "12", 
   *    "04", 
   *    "7", 
   *    index: 0, 
   *    input: "130828199012040617", 
   *    groups: undefined
   * ]
   * 如果不匹配，捕获的结果是null。捕获的时候不仅把大正则匹配的信息捕获到，
   * 并且每一个小分组中的内容也捕获到了（分组捕获）
   * 
   * 
   * 正则捕获使用的是正则中的exec方法
   *  1.如果可以匹配获取的结果是一个数组，如果不能匹配获取的结果是null
   *  2.如果我们只在匹配的时候，想要获取大正则中的部分信息，我们可以把这部分使用
   * 小括号包起来，形成一个分组，这样在捕获的时候，不仅可以把大正则配的信息捕获到
   * ，而且还单独的把小分组匹配的部分信息也捕获到了（分组捕获）
   *  3.有时候写小分组不是为了捕获信息，只是为了改变优先级或者进行分组引用，此时
   * 我们可以在分组的前面加上”?:“
   */




   /**
    * 有效数字
    *  1.正数 负数 零
    *  2.小数 整数
    *  -12.4
    *  -12
    *  12
    *  12.4
    *  0
    *  +2
    *  -2
    *  +0
    *  -0
    *  0.5
    *  非有效数字
    *  02.4
    *  2.
    * 
    * 分析规则：
    *  1.可以出现+ / -号：可以没有，也可以有一个
    *  2.整数 0 12 9： 一位或者多为数字，一位0~9，多位数字不能以0开头
    *  3.小数部分：可能有可能没有，有小数点后面至少要跟一位数字
    */

    // reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;

    // /**
    //  * 电话（手机）号码
    //  * 1. 11位数字
    //  * 2. 以1开头
    //  */

    //  reg = /^1\d{10}$/;

    /**
     * 中文姓名
     *  1.中文汉字 {\u4E00-\u9FA5}
     *  2.尼古拉斯.赵四
     */

    //  reg = /^[\u4E00-\u9FA5]{2,}(.[\u4E000-\u9FA5]{2,})?$/;

    /**
     * 邮箱
     * ****@**.**.**
     */

    //  reg = /^\w+((-\w)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*(\.[A-Za-z0-9]+)$/;




  /**
   * 正则捕获：把一个字符串中和正则匹配的部分获取到
   * [正则]
   *  exec
   *  test
   * [字符串]
   *  replace
   *  split
   *  match
   *  .... 
   */


  /**
   * 基于exec可以实现正则的捕获
   *  1.如果当前正则和字符串不匹配，捕获的结果是null
   *  2.如果匹配，捕获的结果是一个数组
   *    0：大正则捕获的内容
   *    index：正则捕获的起始
   *    ......
   *  3.执行一次exec只能捕获到第一个和正则匹配的内容，其余匹配的内容还没有捕获到，
   * 执行多次，也没用 => “正则的捕获有懒惰性：只能捕获到第一个匹配的内容，剩余内容
   * 捕获不到”
   */

  // str = 'zhufeng2018peixun2019';
  // reg = /\d+/;
  // console.log(reg.exec('zhufengpeixun')); // => null

  // /**
  //  * 解决正则捕获的懒惰性，我们需要加全局修饰符g（这是唯一方案，如果不加g，就不能把全部匹配的捕获到）
  //  */

  // str = 'zhufeng2018peixun2019';
  // reg = /\d+/g;
  // console.log(reg.lastIndex); // => 0
  // console.log(reg.exec(str)); // => ['2018']
  // console.log(reg.lastIndex); // => 11
  // console.log(reg.exec(str)); // => ['2019']
  // console.log(reg.lastIndex); // => 21
  // console.log(reg.exec(str)); // => null
  // console.log(reg.lastIndex); // => 0
  // console.log(reg.exec(str)); // => ['2018]

  // let str = 'abc2018def2019ghi2020jkl2021';
  // let reg = /\d+/g;
  // RegExp.prototype.myExecAll = function ( str ) {
  //   // this: reg当前操作的正则
  //   // str: 我们要捕获的字符串
  //   // 执行exec开始捕获，具体捕获多少次不定，当时一直到捕获不到内容（null）为止，期间把捕获到的内容存到数组中
  //   // 为了防止死循环，先验证正则是否加g，没有加只把第一次捕获的结果返回即可
  //   if (!this.global) {
  //     return this.exec( str );
  //   }
  //   let arr = [];
  //   let execItem = this.exec( str );
  //   while (execItem) {
  //     arr.push( execItem[0] );
  //     execItem = this.exec( str );
  //   }
  //   return arr;
  // };
  // console.log(reg.myExecAll(str));




// let str = 'abc{2018}def{2019}ghi{2020}jkl{2021}';
// let reg = /\{(?:\d+)\}/g; // 大括号特殊含义：{n}出现的次数

// console.log(reg.exec(str)); // ['{2018}','2018']
// /**
//  * 正则捕获的时候，如果存在分组，捕获时不仅把大正则匹配到的字符捕获到（数组第一项），
//  * 而且把小分组匹配的内容也单独抽取出来（数组的第二项开始就是小分组捕获的内容）：“分组捕获”
//  * 而/\{(?:\d+)\}/g 中的?: 是用来阻止分组捕获内容的（只匹配不捕获）
//  */

// console.log(str.match(reg)); // ["{2018}", "{2019}", "{2020}", "{2021}"]
// /**
//  * match方法也由局限性：若正则设置了g，基于match捕获的内容只有大正则匹配，小分组的内容
//  * 没有单独抽离出来（不设置g的情况和执行exec一样）
//  */

/**
 * 正则捕获的贪婪性：每次捕获时，总是捕获匹配到的最长内容
 * 例如： '2' 符合 \d+ ‘2018’ 也符合 \d+, 但捕获的是最长的'2018'
 *  */
// let str = 'abc2018def2019';
// let reg = /\d+?/g;
// /**
//  * 把问号放到量词元字符后，代表的就不是出现0次或1次了，而是取消捕获的贪婪性
//  */
// console.log(reg.exec(str)); // ['2']

/**
 * ?在正则中的作用
 *  1.量词元字符：出现0次或1次
 *   /-?/ 让减号出现1次或者不出现
 *  2.取消贪婪性
 *   /\d+?/ 捕获时只捕获最短匹配的内容
 *  3.?: 只匹配不捕获
 *  4.?= 正向预查
 *  5.?! 负向预查
 */




// let str = 'abc2018def2019';
// let reg = /\d+/g;
// console.log(reg.test(str)); // true
// console.log(reg.lastIndex); // 7
// //基于test进行匹配，若设置了g，test匹配也相当于捕获，修改了lastIndex的值
// console.log(reg.exec(str)); // ['2019']

// let str = 'abc2018def2019';
// let reg = /\d+/g;
// console.log(reg.exec(str)); // ['2018']
// console.log(reg.exec('abc2018def2019')); // ['2019']
// /**
//  * 虽然捕获的不是同一个字符串，但正则是同一个，上一次正则处理的时候修改了它的lastIndex,
//  * 也会对下一次匹配的新字符串产生影响
//  */

// let str = 'abc2018def2019';
// let reg = /\d+/g;
// console.log(reg.test(str)); // true
// console.log(RegExp.$1); // '2018'
// /**
//  * $1: 把上一次匹配（test/exec）到的结果获取到，获取的是第一个小分组匹配的内容，大正则匹配的内容
//  * 无法获取。它是一个全局的值，浏览器中$1只有一个，其他的正则操作也会覆盖整个值，所以没啥用
//  */
// console.log(reg.test(str)); // true
// console.log(RegExp.$1); // '2019'
// console.log(reg.test(str)); // false
// console.log(RegExp.$1); // '2019'
// console.log(reg.test(str)); // true
// console.log(RegExp.$1); // '2018'

/**
 * replace: 实现正则捕获的方法（本身是字符串替换）
 */

//  let str = 'abc2018abc2019';
//  str = str.replace('abc', 'abcabc');
//  console.log(str); // 'abcabc2018abc2019'
//  str = str.replace('abc', 'abcabc');
//  console.log(str); // 'abcabcabc2018abc2019'
//  // 真实项目中很多需求不用正则，无法替换

//  str = str.replace(/abc/g, 'abcabc');
//  console.log(str); // 'abcabc018abcabc2019'

//  //     replace 原理
//  let str = 'abc{val:2018}abc{val:2019}',
//      reg = /\{val:(\d+)\}/g;
//   str = str.replace(reg, '@');
/**
 * 用reg正则和str字符串进行匹配，匹配几次就替换几次。每次都是把当前”大正则“匹配的结果
 * 用第二个传递的字符串替换掉了
 */
//   console.log(str);

// str = str.replace(reg, '$1');
// /**
//  * $1不是拿这个字符串替换掉大正则匹配的内容，此处的$1代表第一个分组匹配的内容，
//  * 等价于RegExp.$1
//  */
// console.log(str); // 'abc2018abc2019'

/**
 *  1.reg 和 str 匹配多少次，函数就被出发执行多少次，而且传递了一些参数信息值
 *  2.每次arg中存储的信息，和执行exec捕获的信息相似（内置原理：每一次正则匹配到的结果，
 * 都把函数执行，然后基于exec把本次匹配的信息捕获到，然后把捕获的信息传递给这个函数。）
 *  3.每一次函数中返回的是啥，就把当前大正则匹配的内容替换成啥
 */

//  str = str.replace(reg, function (...arg) {
//   console.log(arg);
//   return 'AA'
//  });
//  console.log(str);

/**
 * 时间字符串格式化
 * "2018/4/30 17:50:23"  =>  "04-30 17:50"
 */

//  // 简单处理
//  let str = "2018/4/30 17:50:23",
//      ary = str.split(/(?:\/| |:)/g);
//  let [, month, day, hours, minutes] = ary,
//      result = `${month}-${day} ${hours}:${minutes}`;
//   console.log(result);

// let str = "2018/4/30 17:50:23";
// // 1.获取时间字符串中的所有数字
// let ary = str.match(/\d+/g).map(function (item) {
//   return item < 10 ? '0' + item : item;
// });
// /**
//  * map相对于forEach多了返回值，函数中return是啥，就把当前数组中迭代的这一项替换成啥
//  */
// console.log(ary);
// // 2.指定最后想要的时间格式，基于数组中的内容，拼接好
// let template = '{0}年{1}月{2}日 {3}时{4}分{5}秒';
// template = template.replace(/\{(\d)\}/g, function (...arg) {
//   let [, index] = arg;
//   return ary[index];
// });
// console.log(template);

// 时间字符串格式化
String.prototype.myFormaTime = function (template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
  let ary = this.match(/\d+/g).map(function (item) {
    return item < 10 ? '0' + item : item;
  });
  return template.replace(/\{(\d)\}/g, function (...[, index]) {
    return ary[index] || '00';
  });

};
let str = "2018/4/30 17:50:23";
console.log(str.myFormaTime('{1}月{2}日 {3}时{4}分{5}秒'));