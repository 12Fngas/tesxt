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
// String.prototype.myFormaTime = function (template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
//   let ary = this.match(/\d+/g).map(function (item) {
//     return item < 10 ? '0' + item : item;
//   });
//   return template.replace(/\{(\d)\}/g, function (...[, index]) {
//     return ary[index] || '00';
//   });

// };
// let str = "2018/4/30 17:50:23";
// console.log(str.myFormaTime('{1}月{2}日 {3}时{4}分{5}秒'));





// if('m' in window) {
//   var m = m && 12;
// }
// console.log(m);

// let n = 20;
// if (!('n' in window)) {
//   let n = n + 30;
// }
// console.log(n);

// let n = 10,
//     m = 20;
// (function (n, m) {
//   let arg = arguments;
//   arg[0] = n || 100;
//   arg[1] = m || 200;
//   console.log(n, m);
// })(m);
// console.log(n, m);

// let ary = [12, 23, 34, 45];
// (function (ary) {
//   ary.pop();
//   ary = ary.slice(0);
//   ary.shift();
//   console.log(ary);
// })(ary);
// console.log(ary);




// let i = 0;
// let fn = function (n) {
//   i += 2;
//   return function (m) {
//     i += (++n) + (m--);
//     console.log(i);
//   }
// };
// let f = fn(2);
// f(3);
// fn(2)(3);
// f(4);
// console.log(i);




/**
 * 操作DOM的属性和方法
 *  [获取元素或元素集合]
 *    getElementById
 *      -> 上下文只能是document（只有document这个实例的原型链上才能找到这个方法）
 *      -> ID重复了获取第一个
 *      -> IE 6-7 会把表单元素的name当做id使用
 *    getElementsByTagName
 *      -> 获取当前上下文中，所有子孙中标签名叫做xxx的元素
 *    getElementsByClassName
 *      -> IE6-8不兼容
 *    getElementsByName
 *       -> IE浏览器中只对表单元素的name起作用
 *       -> 上下文也只能是document
 *    querySelector
 *    querySelectorAll
 *       -> 不兼容IE 6-8
 *       -> 没有DOM映射
 *    document.documentElement
 *    document.body
 *    document.head
 *    ......
 * 
 *    [描述节点和节点之间关系的属性]
 *      元素节点  1  大写标签名  null
 *      文本节点  3  #text     文本内容
 *      注释节点  8  #comment  注释内容
 *      文档节点  9  #document null
 * 
 *    childNodes: 所有子节点
 *    children: 所有元素子节点（IE 6-8中会把注释当做元素节点）
 *    parentNode
 *    previousSibling / previousElementSibling
 *    firstChild
 *    lastChild
 * 
 *    [动态操作DOM]
 *      createElement
 *      createDocumentFragment
 *      appendChild
 *      insertBefore
 *      cloneNode(true / false)
 *      removeChild
 *      set / get / removeAttribute
 * 
 *    [散]
 *      xxx.style.xxx = xxx 设置行内样式
 *      xxx.style.xxx 获取行内样式
 * 
 *      xxx.className = 'xxx'
 * 
 *      xxx.onclick = function ....
 * 
 *      ......
 * 
 * 
 * 
 *  JS盒子模型属性
 *    在JS中通过相关的属性可以获取（设置）元素的样式信息，
 * 这些属性就是盒子模型属性（基本上都是有关于样式的）
 * 
 *    client
 *      top
 *      left
 *      width
 *      height
 * 
 *    offset
 *      top
 *      left
 *      width
 *      height
 *      parent
 * 
 *    scroll
 *      top
 *      left
 *      width
 *      height
 */





 /**
  * client Top / Left / Width / Height
  *   1.clientWidth & clientHeight : 获取当前元素可视区域的
  * 宽高(内容的宽高 + 左右/上下的padding)。 和内容是否溢出无关
  * （和是否设置了overflow : hidden也无关），就是我们自己设定的
  * 内容宽高 + padding
  *
  *   获取当前页面一屏幕（可视区域）的宽、高
  *   document.documentElement.clientWidth || document.body.clientWidth
  *   document.documentElement.clientHeight || document.body.clientHeight
  * 
  *   2.clientTop & clientLeft : 获取（上 / 左）边框的宽度
  *   
  *   3.offsetWidth & offsetHeight : 在client的基础上加上border （内容是否溢出无关）
  * 
  *   4.scrollWidth & scrollHeight : 真实内容的宽高（不一定是自己设定的值，因为可能会内容溢出，
  * 有内容溢出的情况下，需要把溢出的内容也算上） + 左/上 padding，而且是一个约等值 (没有内容溢出和client
  * 一样) ========> 不同浏览器下，或者是否设置overflow : hidden，都会对最后结果产生影响，所以这个值
  * 仅供参考，属于约等值
  * 
  *   获取当前页面一屏幕（真实区域）的宽、高
  *   document.documentElement.scrollWidth || document.body.scrollWidth
  *   document.documentElement.scrollHeight || document.body.scrollHeight
  */





  /**
   * 通过JS盒模型属性获取值的特点
   *  1.获取的都是数字，不带单位
   *  2.获取的都是整数，没有小数（一般会四舍五入，尤其是获取的偏移量）
   *  3.获取的结果都是复合样式值（好几个元素的样式组合在一起的值），如果只想获取单一样式值（只想获取padding），
   * 我们的盒子模型属性就操作不了了（真实中，有时我们就是是需要获取组合的值来完成一些操作）
   *  
   */

   /**
    * [获取元素具体的某个样式值]
    *   1.[元素].style.xxx 操作获取 （只能获取所有写在元素行内的样式）
    *   2.获取当前元素所有经过浏览器计算的样式
    *     经过计算的样式：是要当前元素可以在页面中呈现（或浏览器渲染它了），那么它的样式是被计算过的
    *     不管当前样式写在哪，不管你是否写了（浏览器会给元素设置一些默认样式）
    * 
    *   标准浏览器（IE9+）
    *     window.getComputedStyle([元素],[伪类，一般写null]);
    *  获取到当前元素所有被浏览器计算过的样式（对象）
    *   
    *   IE 6-8
    *     [元素].currentStyle 获取经过计算的样式
    */

    /**
     * getCss : 获取当前元素某一个样式属性值
     * @param
     *  ele[object] : 当前要操作的元素
     *  attr[string] : 要获取的样式属性名
     */

//      let getCss = function (ele, attr) {
//        if ('getComputedStyle' in window) {
//          let val = window.getComputedStyle(ele, null)[attr];
//          let reg = /^-?\d+(.\d+)?(px|rem|em|pt)$/i;
//          reg.test(val) ? val = parseFloat(val) : null;

//          return val;

//        }
//        throw new SyntaxError('浏览器版本过低，请更新！');
        
//      };



// /**
//  * 
//  * 设置当前元素的某一个具体样式的属性值
//  * JS中给元素设置样式只有两种
//  *  1.设置元素的样式类名（前提：样式类以及对应的样式已经处理完成）
//  *  2.通过行内样式设置 xxx.style.xxx = xxx
//  */
// let setCss = function (ele, attr, val) {
//   /**
//    * 细节处理：
//    *  1.如果需要考虑IE 6-8兼容，透明度这个样式在低版本浏览器中不是opacity，而是filter（两套都设置）
//    *  2.如果val值没有带单位，我们就根据情况设置px单位
//    * （加单位的样式属性：width，height，padding/margin的上下左右，font-size，top，left，right，left...）
//    *  用户传递的val值是没有单位的
//    */
//   if (attr == 'opacity') { 
//     ele.style.opacity = val;
//     ele.style.filter = `alpha(opacity=${value * 100})`;
//     return;
//   }

//   if (!isNaN(val)) {
//     // 如果结果是false，说明val是纯数字，没单位
//     let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
//     reg.test(attr) ? val += 'px' : null;
//   }

//   ele['style'][attr] = val;
// };

// let setGroupCss = function (ele, options = {}) {
//   //便利传递的options，有多少键值对，就循环多少次，每一次都调取setCss方法注意设置即可
//   for (let attr in options) {
//     if (!options.hasOwnProperty(attr)) { break; }
//     /**
//      * options : 传递进来的需要修改的样式对象（集合）
//      * attr : 每一次便利到的集合中的某一项（要操作的样式属性名）
//      * options[attr] : 传递的要操作的样式属性值
//      */
//     setCss(ele, attr, options[attr]);
//   }
// };
// setGroupCss(outer, {
//   width : 400,
//   height : 400,
//   padding : 30
// });




// let css = function (...arg) {
//   // arg : 传递的实参集合
//   let len = arg.length;
//   if (len >= 3) {
//     // 单一设置： setCss
//     setCss(...arg); // 另一种方法： setCss.apply(null, arg);
//     return;
//   }
//   if (len == 2 && typeof arg[1] === 'object' && arg[1] !== null) {
//     // 传递两个参数，第二个参数是一个对象（不是null），说明要批量设置
//     setGroupCss(...arg);
//     return;
//   }
//   return getCss(...arg);
// };

// //第二种css写法：
// let css = function (...arg) {
//   let len = arg.length,
//       second = arg[1],
//       fn = getCss;
//   len >= 3 ? fn = setCss : null;
//   len == 2 && (second instanceof Object) ? fn = setGroupCss : null;
//   return fn(...arg);
// };

// 公共方法库： 项目常用方法，都可封装到这里
// let utils = (function () {
//   let getCss = function (ele, attr) {
//     if ('getComputedStyle' in window) {
//       let val = window.getComputedStyle(ele, null)[attr];
//       let reg = /^-?\d+(.\d+)?(px|rem|em|pt)$/i;
//       reg.test(val) ? val = parseFloat(val) : null;

//       return val;

//     }
//     throw new SyntaxError('浏览器版本过低，请更新！');
     
//   }; // 获取元素样式
//   let setCss = function (ele, attr, val) {
//     /**
//      * 细节处理：
//      *  1.如果需要考虑IE 6-8兼容，透明度这个样式在低版本浏览器中不是opacity，而是filter（两套都设置）
//      *  2.如果val值没有带单位，我们就根据情况设置px单位
//      * （加单位的样式属性：width，height，padding/margin的上下左右，font-size，top，left，right，left...）
//      *  用户传递的val值是没有单位的
//      */
//     if (attr == 'opacity') { 
//       ele.style.opacity = val;
//       ele.style.filter = `alpha(opacity=${value * 100})`;
//       return;
//     }
  
//     if (!isNaN(val)) {
//       // 如果结果是false，说明val是纯数字，没单位
//       let reg = /^(width|height|fontSize|((margin|padding)?(top|left|right|bottom)?))$/i;
//       reg.test(attr) ? val += 'px' : null;
//     }
  
//     ele['style'][attr] = val;
//   }; // 设置元素样式
//   let setGroupCss = function (ele, options = {}) {
//     //便利传递的options，有多少键值对，就循环多少次，每一次都调取setCss方法注意设置即可
//     for (let attr in options) {
//       if (!options.hasOwnProperty(attr)) { break; }
//       /**
//        * options : 传递进来的需要修改的样式对象（集合）
//        * attr : 每一次便利到的集合中的某一项（要操作的样式属性名）
//        * options[attr] : 传递的要操作的样式属性值
//        */
//       setCss(ele, attr, options[attr]);
//     }
//   };
//   let css = function (...arg) {
//     let len = arg.length,
//         second = arg[1],
//         fn = getCss;
//     len >= 3 ? fn = setCss : null;
//     len == 2 && (second instanceof Object) ? fn = setGroupCss : null;
//     return fn(...arg);
//   }; // css操作汇总
//   // offset : 获取当前元素距离body的偏移量（左、上偏移）
//   let offset = function (el) {
//     // 1.先获取当前元素本身的左、上偏移
//     let curTop = ele.offsetTop,
//         curLeft = ele.offsetLeft,
//         p = ele.offsetParent;
//     // 2.累加父参照物的边框和偏移（一直向上找，找到body位置，每当找到一个父参照物，都把它的边框的偏移累加）
//     //tag-name 获取当前元素的标签名（大写的）
//     while ((p.tagName !== 'BODY') ){
//       curLeft += p.offsetLeft;
//       curLeft += p.clientLeft;
//       curTop += p.offsetTop;
//       curTop += p.clientTop;
//       p = p.offsetParent;
//     }
//     return {
//       top : curTop,
//       left : curLeft
//     };
//   };
//   //操作浏览器盒子模型属性的方法
//   let winHandle = function (attr, value) {
//     if (value !== 'undefined') {
//       document.documentElement[attr] = value;
//       document.body[attr] = value;
//       return;
//     }
//     return document.documentElement[attr] || document.body[attr];
//   };
//   return {
//     css : css, // ES6中可直接写css
//     offset : offset,
//     winHandle : winHandle
//   };
// })();




/**
 * offsetParent
 * 
 * offsetTop / offsetLeft : 获取当前盒子距离其父级参照物的偏移量（上偏移 / 左偏移）,当前盒子的外边框开始，
 * 到父级的内边框
 * 
 *  "参照物"：同一平面中，元素的父级参照物和结构没有必然联系，默认他们的父级参照物都是body（当前平面
 * 最外层的盒子）body的父级参照物是null。
 *  "参照物"可以改变： 构建出不同的平面即可（使用zIndex，但是这个属性只对定位有作用），所以改变元素的
 * 定位（position: relative / absolute / fixed）可以改变其父级参照物。
 */

// utils.css(outer, {position : 'relative'});
// // 把outer脱离原有的平面，独立出一个新的平面，后代元素的父级参照物都会以它为参考
// console.log(center.offsetParent); // outer
// console.log(inner.offsetParent); // outer
// console.log(outer.offsetParent); // body

// utils.css(inner, {position: 'absolute'});
// console.log(center.offsetParent); // inner
// console.log(inner.offsetParent); // outer
// console.log(outer.offsetParent); // body
// console.log(document.body.offsetParent); // null




/**
 * scrollTop / scrollLeft : 滚动条卷去的宽度、高度
 *  最小卷去值： 0
 *  最大卷去值： 真实页面的高度 减去 屏幕的高度（document.documentElement.scrollHeight - document.documentElement.clientHeight）
 * 
 * 在JS盒子模型13个属性中，只有scrollTop / Left是”可读写“属性，其余都是”只读“属性
 * 
 *  操作浏览器的盒子模型属性，我们一般都要写两套，用来兼容各种模式下的浏览器
 */

//  console.log(utils.winHandle('scrollTop'));





// let wrapper = document.querySelector('.wrapper');
// // 1.把wrapper中原有的li克隆一份放到容器末尾

// /** 方法1：
// let wrapperList = wrapper.querySelectorAll('li');
// let frag = document.createDocumentFragment();
// [].forEach.call(wrapperList, function (item) {
//     frag.appendChild(item.cloneNode(true));
// })
// wrapper.appendChild(frag);
// frag = null;
// */

// // 方法2 ：
// wrapper.innerHTML += wrapper.innerHTML;

// //克隆完成后修改wrapper的宽度（内容变多了）
// utils.css(wrapper, 'width', utils.css(wrapper, 'width') * 2);

// /**
//  * 实现JS动画
//  *  让wrapper每间隔一段时间（最有动画时间是13-17ms）在原有的left值基础上
//  * 减去步长（想动画快点，步长就大点）
//  */


//  // JS中的定时器：间隔1000毫秒执行一次这个方法，直到手动清除为止
//  setInterval(function () {
//     // 获取当前wrapper的left值,再减去步长，把最新的left赋值给元素
//     let curL = utils.css(wrapper, 'left');
//     utils.css(wrapper, {
//         left : curL -= 2
//     });
    
//     //实现无缝：当ul距离marqueeBox的左偏移是整个wrapper一半宽度，就让wrapper立即运动到left为0的位置
//     if (Math.abs(wrapper.offsetLeft) >= utils.css(wrapper, 'width') / 2) {
//         utils.css(wrapper, 'left', 0);
//     }
// }, 17);




/**
 * 类库、插件、UI组件、框架
 *  1.类库： JQ / Zepto 。。。 提供一些真实项目中常用的方法，任何项目都可以把类库导入
 * 进来，调取里面的方法实现自己需要的业务逻辑。
 * 
 *  2.插件： 具备一定业务功能，例如，封装轮播图插件、选项卡插件、模态框插件等（插件规定
 * 了当前这个功能的样式结构，把实现功能的JS进行封装，以后想实现这个功能直接导入插件即可）
 * 例如 swiper / iscroll / jquery-dialog / jquery-drag / jquery-datepicker / 
 * Echarts ... 
 * 
 *  3.UI组件： 把结构、CSS、JS全部封装好，想实现功能直接导入进来即可（偶尔需要自行修改）
 * 例如： bootsrap ... 
 * 
 *  4.框架：具备一定的编程思想，要求我们按照框架的思想开发，一般框架中提供了常用的类库方法，
 * 提供了强大的插件功能，有的也提供了强大的UI组件...
 * React(React native) / Vue / Angular / Backbone / Sea.js / Require.js
 * 
 * 
 * JQuery是一个非常优秀的JS“类库”
 *  基于原生JS封装的一个类库，提供了很多的方法，而且这些方法是兼容所有浏览器的
 * 
 * JQ版本：
 *  v1（常用）1.8.3  1.9.3  1.11.3
 *  v2 
 *  v3
 * 
 */




//  (function () {
//   var version = '1.11.3';
//     jQuery = function (selector, context) {
//       return new jQuery.fn.init(selector, context);
//       /**
//        *  创建了init这个类的实例，也相当于创建了jQuery这个类的实例（因为
//        * 在后面，让init.prototype = jQuery.prototype）
//        */
//     };

//   /**
//    * jQuery是一个类，在它的原型上提供了很多的属性和方法，供JQ的实例调用
//    */
//   jQuery.fn = jQuery.prototype = {
//     jquery : version,
//     constructor : jQuery,
//     // ...
//   };

  // 给JQ原型上增加extend方法，同时把JQ当做一个普通对象，给这个对象设置了一个私有方法
  /**
   *  JQ是一个类（也是一个普通对象）：函数的两种角色，JQ是一个类库，提供了很多方法，这些方法
   * 有两部分：
   *    1.放到JQ原型上（jQuery.fn / jQuery.prototype），这里面的方法是供JQ实例调取使用的
   *    2.把JQ当做一个普通对象，在对象上设置一些私有属性和方法，这类方法以后要调用，直接jQuery.xxx()即可
   */

//   jQuery.extend = jQuery.fn.extend = function () {
//     //extend是把一个对象中的属性和方法扩展到指定的对象上
//   };

//   jQuery.extend({
//     isFunction : function (obj) {},
//     isArray : function () {},
//     //...
//   });
//   //jQuery:{extend:..., isFunction:..., isArray:...}

//   jQuery.fn.extend({
//     //find: ...
//   });
//   //jQuery.prototype: {..., find:...}

//   var init = jQuery.fn.init = function (selector, context) {
//   }

//   init.prototype = jQuery.fn;
//     /**
//      * 把init当做一个类，但是让这个类的原型指向了jQuery.prototype(init这个类的实例最后找到的也是jQuery
//      * 这个类的原型上的方法 ： init的实例也是jQuery的实例 )
//      */
  
//      window.jQuery = window.$ = jQuery;
//  })();

//  $().filter(); // 创建一个jQuery实例，可以调用JQ.fn中的方法
//  $.isFunction(); // 把JQ当做一个普通对象，直接使用对象上扩展的私有属性和方法（这些方法和实例没关系）

 
//  let Fn = function () {
//    return  new Fn.prototype.init();
//  };
// Fn.prototype.init = function () {
//   // ...
// }
// Fn.prototype.init.prototype = Fn.prototype;
// let f = Fn(); // 不加new创建Fn实例




/** JQ选择器： 基于各种选择器创建一个JQ实例（JQ对象）
 *  1.selector 选择器的类型（一般都是字符串，但是支持函数或者元素对象）
 *  2.context 基于选择器获取原色时指定的上下文（默认document）
 * 
 * JQ对象 ：一个类数组结构（JQ实例），这个类数组集合中包含了获取到的元素
 */

// console.log($('.tabBox'));
// /**
//  * JQ对象（类数组） -> JQ实例
//  *  0： div.tabBox
//  *  length: 1
//  *  context: document
//  *  selector: '.tabBox'
//  *  __proto__: jQuery.prototype
//  *    add
//  *    ...
//  *    __proto__: Object.prototype
//  *      hasOwnProperty
//  *      ...
//  */

// console.log($('.tabBox li'));
// /**
//  * JQ对象（类数组） -> JQ实例
//  *  0： li
//  *  1： li
//  *  2： li
//  *  length: 3
//  *  context: document
//  *  selector: '.tabBox li'
//  *  __proto__: jQuery.prototype
//  *    add
//  *    ...
//  *    __proto__: Object.prototype
//  *      hasOwnProperty
//  *      ...
//  */

/**
 * 获取页面中的元素对象
 *  1.基于原生JS提供的属性和方法获取 -> 原生JS对象
 *    可以调用内置的JS属性和方法
 *      className
 *      onclick
 *      ...
 *  2.基于JQ选择器获取 -> JQ对象
 *    可以调取JQ原型上提供的属性和方法
 *      add
 *      find
 *      ...
 * 
 *  把JQ对象和原生JS对象之间相互的转换
 *    [JQ -> 原生JS]
 *      JQ对象是一个类数组集合，集合中每个下标对应的都是原生JS对象，我们基于下标获取即可
 *        let $tbBox = $('tabBox'); 变量名以$开头，代表基于JQ选择器获取的结果
 * 
 *      let tabBox = $tabBox[0];  // JS对象
 *      let tabBox = $tabBox.get(0);  // JS对象
 *      let tabBox = $tabBox.eq(0);  // JQ对象
 * 
 *    [原生JS -> JQ]
 *      let tabBox = document.querySelector('.tab');
 * 
 *    $(tabBox); // 直接使用选择器把原生JS对象包裹起来，就会把JS转换为JQ对象
 */

 /**
  * 分析选择器源码，我们发现selector传递的值支持三种类型
  *   1.string  基于选择器获取元素
  *   2.元素对象  selector.nodeType 把JS对象转换为JQ对象
  *   3.函数  把传递的函数执行，把JQ当做实参传给函数: selector(jQuery)
  */

//  $(function ($) {
//   // $ : 传递进来的jQuery
//  });

// $ = '哈哈'; // $(); // Uncaught TypeError : $ is not a function
// jQuery(function ($) {
//   //  $是私有变量，外部无法改变
// });

// jQuery(function () {
//   // 函数肯定会执行，但会在页面的HTML结构加载完成后再执行，并形成闭包
//   // 写自己的代码
// });



// /**
//  * JQ选择器的selector可以是字符串，字符串这种格式也有两种
//  *  1.选择器
//  *  2.HTML中关村拼接的结构： 把拼接好的HTML字符串转换为JQ对象，然后可以基于appendTo
//  * 等方法追加到页面中
//  */
// $('<div id="AA"></div>').appendTo(document.body);

// /**
//  * each : JQ的eahc方法是用来进行遍历的（类似数组的forEach）
//  *  [可遍历内容]
//  *    1.数组
//  *    2.对象
//  *    3.类数组（JQ对象）
//  *    ...
//  *  [三种each]
//  *    1.给jQuery设置的私有属性 $.each()
//  *    2.给实例设置的共有属性  $([selector]).each()
//  *    3.内置的each
//  */
// $.each([1, 2, 3], function (index, item) {
//   //参数顺序和内置forEach相反
//   console.log(index, item)
// });

// $.each({
//   //原理就是 for in 循环
//   name : 'xxx',
//   age : 2,
//   0 : 100
// }, function (key, value) {
//   console.log(key, value);
// });

// $('.tabBox li').each(function (index, item) {
//   // 非箭头函数： this === item，当前遍历的这一项（原生JS对象）
//   // $(this)把当前遍历的这一项转换为JQ对象
//   $(this).on('click', function () {
//     //给每一个遍历的li都绑定一个点击事件
//     //this : 当前点击的li（原生JS对象 ）
//     $(this).css({
//       color : 'red'
//     });
//   });
// });

// $('.tabBox li').click(function () {
//   /**
//    * 获取的JQ集合中有3个，我们此处给3个li都绑定了点击事件（JQ在调取click
//    * 时，会默认把集合进行each遍历，把每一项都绑定
//    */
// });

// $.noConflict(); // $ === undefined
// // 转让$的使用权

// jQuery.noConflict(true); // jQuery === undefined
// let abc = jQuery.noConflict(true); // 返回值赋值给一个变量，此时这变量是新的JQ代言人
// // 深度转让： 把jQuery这名字也转让出去




// $.ajax({
//   url : 'data.json',
//   method : 'GET',
//   dataType : 'json',
//   async : false,
//   success : function (result) {
//     console.log(result);
//   }
// });

// var someText = document.createElement('div');
// var ulBox = document.getElementsByClassName('list-box');
// var liS = ulBox[0].getElementsByTagName('li');

// for (let i = 0; i < liS.length; i++)
// {
//   console.log(liS[i].outerText + '\n');
// }
// someText.appendChild('body');




// 当HTML结构都加载完成执行函数
// $(function ($) {
//   $('.tabBox>.header>li').on('click', function () {
//     let index = $(this).index();
//     $(this).addClass('active')
//       .siblings().removeClass('active')
//       .parent().nextAll()
//       .eq(index).addClass('active')
//       .siblings('div').removeClass('active');
//   });
// });




// $(function () {
//   //HTML结构加载完后，才执行此闭包内代码

//   //1.获取数据
//   /**
//    * 真实项目中，我们第一页加载完成，当用户下拉到底部，开始获取第二页的内容。
//    * 服务器端会给我们提供一个API获取数据的地址，并要求客户端把获取的是第几页
//    * 的内容传递给服务器，服务器依照这个原理把对应不同的数据返回（分页技术）
//    */

//    let page = 0,
//        imgData = null;
//        isRun = false;
//    let queryData = function () {
//      page ++;
//      $.ajax({
//         url : `json/waterFall.json?page=${page}`,
//         method : 'GET',
//         async : false,
//         dataType : 'json',
//         success : function (result) {
//           imgData = result;
//         }
//      });
//    };
//    queryData();



//    // 2.数据绑定

//    //传递一个对象进来，发挥对应的结构字符串
//   //  let queryHTML = ({id, pic, link, title} = {}) => {
//   //    if (typeof id === 'undefined') {
//   //      return '';
//   //    }
//   //   return `<a href="${link}">
//   //     <div><img src="${pic}"></div>
//   //     <span>${title}</span>
//   //   </a>`;
//   //  };
//   let bindHTML = function () {
//     let $boxList = $('.flowBox>li');

//     for (let i = 0; i < imgData.length; i += 3) {
//      /**
//       *  分别获取每三个为一组，一组中的三个内容（存在的隐形风险：当前数据
//       * 长度不是3的倍数，那么最后一次循环的时候，三个钟的某一个会不存在获取
//       * 的item值是undefined）
//       */
//     //  let item1 = imgData[i],
//     //      item2 = imgData[i + 1],
//     //      item3 = imgData[i + 2];
//       /**
//        * 我们接下来要把获取的item一次插入到每一个li中，但是绝对不是按照顺序插入，
//        * 我们需要先按照每一个li的现有高度给li进行排序（小到大），按照最新的顺序依次
//        * 插入即可
//        */
//         $boxList.sort(function (a, b) {
//           return $(a).outerHeight() - $(b).outerHeight();
//         }).each(function (index, curLi) {

//           let item = imgData[i + index];
//           if (!item) return;
//           let {id, pic, link, title} = item;
//           $(`<a href="${link}">
//             <div><img src="${pic}"></div>
//             <span>${title}</span>
//             </a>`).appendTo($(curLi));
//         });
//         // if (item1) { boxList[0].innerHTML += queryHTML(item1); }
//         // if (item2) { boxList[1].innerHTML += queryHTML(item2); }
//         // if (item3) { boxList[2].innerHTML += queryHTML(item3); }
//     }

//     isRun = false;
//   };
//   bindHTML();


//   // 3.当滚动到页面底部的时候，加载下一页的更多数据

//   $(window).on('scroll', function () {
//     let winH = $(window).outerHeight(),
//         pageH = document.documentElement.srollHeight || document.body.scrollHeight,
//         scrollT = $(window).scrollTop();

//         /**
//          * 卷去高度 大于 真实高度 - 屏幕高度：距离底下还有100px，我们让其开始加载
//          */
//         if ((scrollT + 100) >= (pageH - winH)) {
//           /**
//            * 隐性问题：同一个滚动操作会被触发N次，需要做“重复操作限定”
//            */
//           if (isRun) return;
//           isRun = true;

//           if (page > 5) {
//             alert('没有更多数据');
//             return;
//           }

//           queryData();
//           bindHTML();
//           console.log(page);
//         }
//   });
// });




/*
	1.ES6新语法
    - let / const
    	和ES5的var区别
        1.let不存在变量提升机制（不允许在声明前使用）
        2.let不允许重复声明
        3.在全局作用域中给予let声明的变量不是window的一个属性，和他没关系
        4.typeof 未被声明的变量 => 不是undefined而是报错（暂时性死区）
        5.let会形成块级作用域（类似于私有作用域，大部分大括号都会形成块作用域）
   		...
        
   	- 解构赋值
    
    - "..."拓展，剩余，展开运算符
    
    - 箭头函数
    	和普通函数的区别
        1.没有arguments，但是可以基于...arg获取实参集合（结果是一个数组）
        2.没有自己的this，箭头函数中的this是上下文中的this
        
    - ES6中的模板字符串
    
    - Promise （async / await）
    - class (ES6中创建类)
    - iterator (for of 循环)
    - Map / Set
    
    
    2.重排（回流）、重绘
    	1.什么是重排和重绘、为什么他们耗性能：
        浏览器渲染一个页面的时候是按照“先创建DOM树 —>加载CSS -> 生成渲染树render tree 
        -> 将渲染树交给浏览器（GPU）绘制”，如果后期我们修改了元素的样式（没有改变大小和
        位置），浏览器会把当前元素重生成渲染树，然后重新渲染，这个机制是重绘，但是一旦元素
        的位置或者大小等发生改变，浏览器就要从DOM树重新计算渲染，这个机制是回流（重排），
        无论是重排还是重绘，都非常耗性能。
        
        2.解决方案
    	1.需要动态项页面追加元素的时候，基于文档碎片或先把需要增加的所有元素拼接成字符串，
        最后同意进行增加
        2.读写分离 -> 把同意修改样式都放到一起执行，新版浏览器都有一个增加检测的机制，如果
        发现下面紧挨着的操作也是修改元素的样式，会把所有修改的事先存起来，直到遇到非修改
        样式的操作，会把之前存储的同意执行，只引发一次回流和重绘。
        当然还有其他办法，这些是最常注意的。
*/





/*
	对面向对象的理解
    [JS本身就是面向对象编程的]
    JS就是基于面向对象（OOP）编程思想开发出来的语言，学习JS就是在学习JS中的类和实例，
    例如： 数组是Array的实例、对象是Object的实例、函数是Function的实例...在这些内置的
    原型上有很多公共的属性和方法，这些方法可以被实例调用，学JS就是学这些方法...
    
    [面向对象真实项目的应用]
    平时的业务逻辑开发，我没有可以使用类的方式来做，只有在一些组件或者插件封装的时候才会
    基于构造函数和原型链使用类和实例完成。例如：我之前封装过一些Tab选项卡、轮播图、模态
    框、表单验证等插件，就是这样处理的（我之前看了一些类库和插件的原码，也都是基于面向对象
    封装的）
    
    [面向对象中的一些语法和特点]
    没信心就是基于class或者function创建一个类，执行的时候new执行创建一个实例，这样实例就可以
    调取类提供的方法，想要基于面向对象进行插件封装，必须掌握关于类的继承、封装和多态，封装
    就是提供公共的方法、JS中没有严格意义的多态，不能进行方法的重写，常用的继承方式很多，例如：
    原型继承、call继承、计生组合继承、ES6中的继承等，有些方式会存在一些问题，我项目中后来都是
    基于class中的extend实现继承的。
    
*/




/*

var point = {
	x : 10,
    y : 20,
    moveTo : function (x, y) {
    	var moveX = function (x) {
        	this.x = x;
        }
    	var moveY = function (y) {
        	this.y = y;
        }
        moveX(x);
        moveY(y);
    }
};
point.moveTo(100, 200);
console.log(point.x, point.y);



JS中的this汇总
	this:当前方法执行的主体（谁执行这个方法，this就是谁，所以this和当前方法在哪
创建或者在哪执行都没有必然关系）

	1.给元素的某个时间绑定方法，方法中的this都是当前操作的元素本身
	document.body.onclick = function () {
		// this : body
	}

	2.函数执行，看函数前面是否有点，有的话，点前面是谁this就是谁，若没有，this就是window
（在JS严格模式下，没有点this就是undefined）

    let fn = function () {
    	console.log(this.name);
    };
    let obj = {
    	name : 'abc',
        fn : fn
    };
    fn(); // this : widow
    obj.fn() // this : obj

	3.构造函数执行，方法中的this一般都是当前类的实例
    let fn = function () {
    	this.x = 100; // this : f
    };
    let f = new fn();
    
    4.箭头函数中没有自己的this，this是上下文中this
    let obj = {
    	fn : function () {
        	setTimeout( () => {
            	// this : obj
            }, 1000);
        }
    };
	obj.fn();
    
    5.在小括号表达式中，会影响this的指向
    let obj = {
    	fn : function () {
        	console.log(this);
        }
    };
    obj.fn(); // this : obj
    ;(12, obj.fn)(); // this : window
    
    6.使用call、apply、bind可以改变this指向
    fn.call(obj); // this : obj
    fn.call(12); // this : 12
    fn.call(); // this : window
    //非严格模式下call、apply、bind第一个参数不写或者写null和undefined，this都是window
    //严格模式下写谁this就是谁，不写是undefined
    
    
    
    
    
var n = 2;
function a() {
	var n = 3;
	function b (m) {
		alert(++n + m);
	}
	b(4);
	return b;
}
var c = a(5);
c(6);
alert(n);

谈下你对作用域链和原型链的理解
	作用域链：
	函数执行会形成一个私有的作用域，形参和当前私有作用域中声明的变都是私有变量，
当前的私有作用域有自我保护机制，私有变量和外界是没有关系的，但如果私有作用域中
遇到一个非私有的变量，则向它的上级作用域找，如果还不是上级作用域私有的，则继续
向上查找一直找到window位置。这种变量一层层向上查找的机制就是“作用域链机制”。

	原型链：
    也是一种查找机制，实例首先在自己的私有属性中查找，如果不是私有属性，基于__proto__
    向所属的原型上进行查找，如果再找不到，则继续基于__proto__向上查找，一直找到Objec.prototype
    
    

面向对象：类的继承、封装和多态
	[封装]
    把实现一个功能的JS代码进行封装。目的：“低耦合高内聚”
    
    [多态]
    重载：
    方法名相同，参数的个数或者类型不同，此时名字相同的方法叫做方法的重载
(后台语言的重载)，JS中不存在重载
	重写：
    子类重写父类的方法
    
    [继承]
    子类继承父类的属性和方法
    1.原型继承：让子类的原型指向父类的一个实例
    function A () {
    	this.x = 100;
    }
    A.prototype = {
    	constructor : A,
        getX : function () {
        	cosole.log(this.x);
        },
    };
    function B () {
    	this.y = 200;
    }
    B.prototype = new A();
    let f = new B();
    //存在问题：父类的公、私属性，全变为子类的共有属性；子类原型上的成员会被覆盖
    
    2.call继承：把父类A作为普通函数执行，让A中的this变为B的实例，相当于给B的实例
增加一些属性和方法。(弊端：把父类A当做普通函数执行，和父类原型没啥关系，仅仅是把A中的
私有属性变为子类B实例的私有属性而已，A原型上的共有属性和B及它的实例没关系)
	function A () {
    	this.x = 100;
    }
    A.prototype = {'constructor' : A....};
    function B () {
    	A.call(this);
        this.y = 200;
    }
    let f = new B();
    
    3.寄生组合继承：A的私有变为B的私有，A的共有变为B的共有
    function A () {
    	this.x = 100;
    }
    A.prototype = {
    	constructor : a,
        getX : function () { console.log(this.x); }
    };
    function B () {
    	A.call(this);
        this.y = 200;
    }
    //B.prototype = A.prototype; // 不建议这样处理，因为能修改父类A原型，会导致A的其他实例受影响
    B.prototype = Object.create(A.prototype);
    let f = new B();
    
    4.ES6中class类实现继承
    ...
*/




/**
 * ES6中的类和继承
 *  1.ES6中穿件类是有自己标准语法的
 * (这种语法创建的类只能new执行，不能作普通函数执行)
 */

//  class Fn {
//    // Fn是类名，没有小括号
//    constructor (n, m) {
//      // 等价于ES5类的构造体
//      this.x = n;
//      this.y = m;
//    }

//    // 给Fn的原型上设置方法(只能设置方法，不能设置属性)
//    getX () {
//     console.log(this.x);
//    } 

//    // 把Fn当做普通对象设置私有方法（和实例没关系），同样也只能设置方法，不能写属性
//    // 相当于 Fn.AA = function () {}
//    static AA () {
//      // ...
//    }
//  }

// class Fn2 extends Fn { // extends类似实现了原型继承
//   constructor () {
//     super(); // super类似实现了call继承：super相当于把Fn1的constructor执行，并让方法中的this是Fn2的实例
//     this.y = 200;
//   }
//   getY () {
//     console.log(this.y);
//   }
// }

//  Fn.prototype.BB = 100; // 公有属性在这写
//  let f = new Fn(10, 20);





/**
 * 有个insertBefore方法，请写一个insertAfter方法
 */

//  function insertAfter (newEle, originEle) {
//    // newEle : 新插入的元素
//    // originEle : 指定的老元素
//    let next = originEle.nextElementSibling; // 老元素的下一个兄弟
//    let parent = originEle.parentNode; // 老元素的父级
//    if (next) { // 如果有下一个兄弟元素则...
//     parent.insertBefore(newEle, next);
//    }
//    else { // 否则直接为父级元素追加新元素
//     parent.appendChild(newEle);
//    }
//  }

//  let link = document.createElement('a');
//  let p2 = document.getElementsByClassName('p2')[0];
//  console.log(p2);
//  insertAfter(link, p2);




/*
动画
	1.CSS3动画
    + transition 过渡动画
    + animation 帧动画
    + transform	是变形不是动画（经常依托某种动画让元素在一定时间内实现变形效果）
	
    2.JS动画
    + 定时器
    + reuestAnimationFrame(JS中的帧动画)
    + 所谓的canvas动画是JS基于定时器完成（canvas是一个HTML标签，可以理解为一个画布
我们可以基于JS在画布上绘制出图像和效果）

	3.flash动画（action script）
*/

// 需求：让box盒子从屏幕最左变运动到最右边（修改box的left值就好）
// let minL = 0,
//   maxL = document.documentElement.clientWidth - box.offsetWidth,
//   box = document.getElementById("box");

// 固定步长的匀速运动；
/*
let step = 10;
	autoTimer = setInterval(() => {
    	//用左偏移临时代替left值得
        let curL = box.offsetLeft;
        curl += step
            
        //固定步长的情况左边界判断：先加步长再判断，如果超边界，直接运动到末尾
        if (curL >= maxL) {
        	box.style.left = maxL + 'px';
            clearInterval(autoTimer);
            return;
        }
        box.style.left = curL + 'px';
    }, 17); // 13 / 17ms 的动画执行时间比较好（浏览器不卡）
*/

//固定时间的匀速运动：
// let duration = 1000, // 总时间
// 	interval = 17, // 频率：多长时间迈一步
// 	begin = 0, // 起始位置
// 	target = maxL,
// 	change = target - begin, // 总距离：目标值(target) - 起始值(begin)
// 	time = 0; //已经运动的时间
// let autoTimer = setInterval(() => {
// 	// 根据公式计算出当前盒子应有的位置
//     time += interval; // time += 17
//     let curL = time / duration * change + begin;
//     box.style.left = curL + 'px';
//     if (time > duration) {
//     	// 当前运动时间超过总时间： 到达边界
//         box.style.left = target + 'px';
//         clearInterval(autoTimer);
//         return;
//     }
    
// }, setInterval);

// 1.第一种思路：步长 = 总距离 / 总时间*频率，剩下变为固定步长的匀速运动
// 2.在JS中基于定时器完成动画，不论是固定步长还是固定时间，只要算出当前盒子
//应该运动的位置即可（新的位置信息）

/*

t: time 当前运动的时间
d: duration 总时间
b: begin 起始位置
c: change 总距离 （target - begin）

t/d: 当前已经运动的时间 / 总时间 = 当前动画完成的百分比
t/d*c 当前动画完成的百分比*总距离 = 当前已经走的距离
t/d*c+b 当前走的距离+盒子起始距离 = 当前盒子应该有的位置
*/



/*
规定时间内的多方向匀速运动
	time 当前运动时间
    duration 总时间
    
    记录每一个方向的起始位置、目标值、总距离
    begin 起始位置
    target 目标位置
    change 总距离
*/
// let time = 0,
// 	duration = 1000;
// let begin = {
// 	left : 0,
//     top : 0
// };
// let target = {
// 	left : documet.documetElement.clientWidth - box.offsetWidth,
//   top : documet.documetElement.clientHeight - box.offsetHeight
// };
// /* 方法1：
// let change = {
// 	left : target['left'] - begin['left'];
//     top : target['top'] - begin['top'];
// };
// */

// //方法2：
// //根据目标值计算出当前元素每一个运动方向的总距离
// let change = {};
// for (let attr in target) {
// 	if (target.hasOwnProperty(attr)) {
//     	change[attr] = target[attr] - begin[attr];
//     }
// }

// let animateTimer = setInterval(() => {
//   time += 17;
//   if (time >= duration) {
//     clearInterval(animateTimer);
//     for (let key in cur) {
//       if (cur.hasOwnProperty(key)) {
//         box.style[key] = cur[key] + 'px';
//       }
//     }
//     return;
//   }
//   // 根据目标值中的方向，基于公式计算出每一个方向的当前位置
//   let cur = {};
//   for (let attr in target) {
//     if (target.hasOwnProperty(attr)) {
//         cur[attr] = time / duration * change[attr] + begin[attr];
//     }
//   }
  
// });



 
/*
动画
	1.CSS3动画
    + transition 过渡动画
    + animation 帧动画
    + transform	是变形不是动画（经常依托某种动画让元素在一定时间内实现变形效果）
	
    2.JS动画
    + 定时器
    + reuestAnimationFrame(JS中的帧动画)
    + 所谓的canvas动画是JS基于定时器完成（canvas是一个HTML标签，可以理解为一个画布
我们可以基于JS在画布上绘制出图像和效果）

	3.flash动画（action script）
*/

// 需求：让box盒子从屏幕最左变运动到最右边（修改box的left值就好）
// let minL = 0,
// 	maxL = document.documentElement.clientWidth - box.offsetWidth;

// 固定步长的匀速运动；
/*
let step = 10;
	autoTimer = setInterval(() => {
    	//用左偏移临时代替left值得
        let curL = box.offsetLeft;
        curl += step
            
        //固定步长的情况左边界判断：先加步长再判断，如果超边界，直接运动到末尾
        if (curL >= maxL) {
        	box.style.left = maxL + 'px';
            clearInterval(autoTimer);
            return;
        }
        box.style.left = curL + 'px';
    }, 17); // 13 / 17ms 的动画执行时间比较好（浏览器不卡）
*/

//固定时间的匀速运动：
// let duration = 1000, // 总时间
// 	interval = 17, // 频率：多长时间迈一步
// 	begin = 0, // 起始位置
// 	target = maxL,
// 	change = target - begin, // 总距离：目标值(target) - 起始值(begin)
// 	time = 0; //已经运动的时间
// let autoTimer = setInterval(() => {
// 	// 根据公式计算出当前盒子应有的位置
//     time += interval; // time += 17
//     let curL = time / duration * change + begin;
//     box.style.left = curL + 'px';
//     if (time > duration) {
//     	// 当前运动时间超过总时间： 到达边界
//         box.style.left = target + 'px';
//         clearInterval(autoTimer);
//         return;
//     }
    
// }, setInterval);

// 1.第一种思路：步长 = 总距离 / 总时间*频率，剩下变为固定步长的匀速运动
// 2.在JS中基于定时器完成动画，不论是固定步长还是固定时间，只要算出当前盒子
//应该运动的位置即可（新的位置信息）

/*

t: time 当前运动的时间
d: duration 总时间
b: begin 起始位置
c: change 总距离 （target - begin）

t/d: 当前已经运动的时间 / 总时间 = 当前动画完成的百分比
t/d*c 当前动画完成的百分比*总距离 = 当前已经走的距离
t/d*c+b 当前走的距离+盒子起始距离 = 当前盒子应该有的位置
*/



/*
规定时间内的多方向匀速运动
	time 当前运动时间
    duration 总时间
    
    记录每一个方向的起始位置、目标值、总距离
    begin 起始位置
    target 目标位置
    change 总距离
*/
// let time = 0,
// 	duration = 1000;
// let begin = {
// 	left : 0,
//     top : 0
// };
// let target = {
// 	left : documet.documetElement.clientWidth - box.offsetWidth,
//     top : documet.documetElement.clientHeight - box.offsetHeight
// };
/* 方法1：
let change = {
	left : target['left'] - begin['left'];
    top : target['top'] - begin['top'];
};
*/

//方法2：
//根据目标值计算出当前元素每一个运动方向的总距离
// let change = {};
// for (let attr in target) {
// 	if (target.hasOwnProperty(attr)) {
//     	change[attr] = target[attr] - begin[attr];
//     }
// }



//  $(function ($) {
//   let $container = $(".container"),
//       $imgList = null;

//   // 1.绑定数据
//   (function () {
//     let str = ``;
//     for (let i = 0; i < 100; i++) {
//       let ranNum = Math.round(Math.random() * 4 + 1);
//       str += `<div class="imgBox">
//                 <img src="" alt="" src="" data-src="img/phoneImg/${ranNum}.jpg"> 
//               </div>`;
//     }
//     $container.html(str);
//     $imgList = $container.find('img');
//   })();

//   // 2.加载真实的图片
//   let lazyImg = function (curImg) {
//     let $curImg = $(curImg),
//         trueImg = $curImg.attr('data-src');
//     let tempImg = new Image();
//     tempImg.onload = function () {
//       //结束当前正在运行的动画，执行fade-in，让图片300ms内逐渐显示出来
//       $curImg.attr('src', trueImg).stop().fadeIn(300);

//       tempImg = null;

//       // 图片加载成功后，设置一个自定义属性存储，当前图片已经加载了，后期不需要重复的加载
//       curImg.isLoad = true;
//     };
//     tempImg.src = trueImg;
    
//   }

//   // computedImg : 计算哪张图片可以加载了
//   let computedImg = function () {
//     // 观察所有图片中谁能加载了，就执行lazyImg让其加载即可
//     $imgList.each(function (index, curImg) {
//       // A : 当前图片所在盒子的底边距离body偏移
//       // B : 当前浏览器底边距离body偏移
//       let $curImg = $(curImg),
//           $imgBox = $curImg.parent(),
//           A = $imgBox.offset().top + $imgBox.outerHeight(),
//           B = document.documentElement.scrollTop + document.documentElement.clientHeight;
//       if (A <= B) {
//         //代表图片所在盒子呈现在视野中，开始加载真实的图片
//         if (curImg.isLoad) {
//           // 当前图片如果已经加载过来，不再重复加载
//           return;
//         }
//         lazyImg(curImg);
//       }
//     });
//   };

//   $(window).on('load scroll', computedImg);;
//  });




/**
 * 定时器：设定一个定时器，并且设定了等到的时间，当到达执行的时间，浏览器会把对应的方法执行
 * 
 * [常用定时器]
 *  setTimeout([function], [interval])
 *  setInterval([function], [interval])
 *    [function] : 到达时间后执行的方法（设置定时器的时候方法没有执行，到时间浏览器帮我们执行）
 *    [interval] : 时间因子（需要等待的时间 ： ms）
 * 
 *  setTimeout是执行一次的定时器，setInterval是可执行多次的定时器
 * 
 *  // 轮循定时器：每间隔interval这么长时间，都会把设定的方法重新执行一次，直到定时器被清除
 * 
 *  // 清除定时器
 *  // clearTimeout / clearInterval ：这两个方法中的任何一个都可以清除用任何方法创建的定时器
 *    1.设置定时器会有一个返回值，这个值是一个数字，属于定时器的编号，代表当前是第几个定时器
 * （不管是基于setTimeout还是setInterval创建定时器，这个编号会累加）
 *    2.clearTimeout（[序号]） / clearInterval（[序号]）
 * 
 */




 /**
  * JS中的同步编程和一部编程
  *   同步编程：人物是按照顺序一次处理，当前这件事没有彻底做完，下件事是执行不了的
  *   异步编程：当前这件事没有彻底做完，需要等待一段时间才能继续处理，此时我们不等，继续执行下面的任务
  * 当后面的任务完成后，再去把没有彻底完成的事情完成
  * 
  * JS中的异步编程：
  *   1.所有的事件绑定都是异步编程
  *   2.所有的定时器都是异步编程
  *   3.ajax中一般都使用异步编程处理
  *   4.回调函数也算是异步编程
  */

  // 定时器设定一个时间，到达时间后不一定执行（如果当前还有其他的同步任务正在处理，那么到时间了也得等着）
//  let n = 0;
//  setTimeout(() => {
//    console.log(++n);
//  }, 1000);
//  console.log(n);
//  while (1) {
//   // 死循环
//  }

/**
 * 浏览器是如何规划同步异步机制的
 *  1.浏览器是多线程的，JS是单线程的（浏览器之歌JS执行分配一个线程）单线程的特点：一次只能处理一件事
 * 进程：每一个应用程序都可以理解为一个进程（浏览器打开一个页面，就相当于开辟一个进程），在一个程序中
 * （进程中）我们经常会同时干很多事情，此时我们可以分配多个线程去同时完成多项任务
 * 
 *  2.JS在单线程中实现异步的机制，主要依赖于浏览器的任务队列完成的。浏览器中有两个任务队列（主任务队列、
 * 等待任务队列）
 *    在主任务队列自上而下执行的时候，如果遇到一个异步操作任务，没有立即执行，而是把它放到任务队列中排队；
 *    当主任务队列完成后才会到等待任务队列中进行查找（主任务队列完不成，不管等待任务队列中是否有到达时间的，
 * 都不处理，继续等待主任务队列完成，因为JS是单线程的[一次只能处理一件事情]）；
 *    等待任务队列中谁达到条件了（如果有很多都达到条件了，谁先达到的，就先处理谁），就把这个任务重新放到主任务
 * 队列中去执行，把这个任务执行完，再去等待中找。。。。
 */

//  setTimeout(() => {
//    console.log(1);
//  }, 20);

//  console.log(2);

//  setTimeout(() => {
//   console.log(3);
//  }, 10);

//  setTimeout(() => {
//   console.log(4);
//  }, 100);

//  for (let i = 0; i < 9000000; i++) {

//  }

//  console.log(5);
//  // 2 5 3 1 4


// let n = 0;
// setTimeout(() => {
//   console.log(++n);
// }, 0);
// /**
//  * 定时器时间因子设置为零也不是立即执行，每个浏览器都有自己最小的等待和反应时间（谷歌：5-6  IE：10-13），
//  * 所以写0还是异步编程
//  */

// console.log(n);




/**
 * Promise : ES6中新增加的类（new Promise），为了管理JS中的异步编程的，所以我们也把它称为“Promise设计模式”
 */

 // 三个状态： pending（准备：初始化成功，开始执行异步的任务） / fulfilled（成功） / rejected（失败）
// new Promise(() => {
//   /**
//    * 执行一个异步的任务（new Promise的时候，创建Promise的一个实例，立即会把当前函数体中的异步操作执行）；
//    * Promise是同步的，它可以管理异步操作
//    */
//   setTimeout(() => {

//   }, 1000);
//   console.log(1); // 先输出1
// }).then();

// console.log(2); // 再输出2

// new Promise((resolve, reject) => {
//   //resolve : 当异步操作执行成功，我们执行resolve方法
//   //rejuect : 当异步操作执行失败，我们执行reject方法
//   setTimeout(() => {
//     resolve(100);
//   }, 1000);
// }).then(() => {
//   console.log('ok');
// }, () => {
//   console.log('no');
// });

// let val = null;
// new Promise((resolve, reject) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('get', 'json/data.json', true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       val = xhr.responseText;
//       resolve(val);
//     }
//     if (xhr.status !== 200) {
//       reject();
//     }
//   };
//   xhr.send(null);
// }).then((res) => {
//   console.log(res);
//   return 100;
// }, () => {
//   console.log('error');
// }).then((res) => {
//   // 当第一个then中的函数执行完，会执行第二个
//   console.log(res);
// }).then(() => {
//   // 当第二个then中的函数执行完，会执行第三个
// });





// Animate动画库
// ~function () {
//   // 准备操作css样式的方法 getCss / setCss / setGroupCss / css
//   let utils = (function () {
//     // 获取样式
//     let getCss = function (ele, attr) {
//       let val = null,
//           reg = /^-?\d+(\.\d+)?(px|rem|em)?$/;
//       if ('getComputedStyle' in window) {
//         val = window.getComputedStyle(ele)[attr];
        
//         if (reg.test(val)) {
//           val = parseFloat(val);
//         }
//       }
//       return val;
//     };

//     // 设置样式
//     let setCss = function (ele, attr, value) {
//       if (!isNaN(value)) {
//         if (!/^(opacity|zIndex)$/.test(attr)) {
//           value += 'px';
//         }
//       }
//       ele['style'][attr] = value;
//     };

//     // 批量设置样式
//     let setGroupCss = function (ele, options) {
//       for (let attr in options) {
//         if (options.hasOwnProperty(attr)) {
//           setCss(ele, attr, options[attr]);
//         }
//       }
//     };

//     // 合并为一个
//     let css = function (...arg) {
//       let len = arg.length,
//           fn = getCss;
//       if (len >= 3) {
//         fn = setCss;
//       }
//       if (len === 2 && typeof arg[1] === 'object') {
//         fn = setGroupCss;
//       }
//       return fn(...arg);
//     };
//     return {css};
//   })();

//   // effect : 准备运动的公式
//   let effect = {
//     Linear : function (t, b, c, d) {
//       return t / d * c + b;
//     },
//   };

//   // 封装动画库
//   window.animate = function (ele, target = {}, duration = 1000) {
//     // 1.基于target计算出begin / change
//     let begin = {},
//         change = {},
//         time = 0;
//     for (let attr in target) {
//       if (target.hasOwnProperty(attr)) {
//         begin[attr] = utils.css(ele, attr);
//         change[attr] = target[attr] - begin[attr];
//       }
//     }

//     // 2.实现动画
//     let animateTimer = setInterval(function () {
//       time += 17;

//       // 边界判断
//       if (time >= duration) {
//         utils.css(ele, target);
//         clearInterval(animateTimer);
//         return;
//       }

//       // 依托target计算出每个方向的当前位置
//       let cur = {};
//       for (let attr in target) {
//         if (target.hasOwnProperty(attr)) {
//           cur[attr] = effect.Linear(time, begin[attr], change[attr], duration);
//         }
//       }
//       utils.css(ele, cur);
//     }, 17);
//   };
// }();

// animate(box, {
//   top : 500,
//   left : 800,
//   width : 200,
//   height : 200,
//   opacity : 0.2
// }, 1000);




/**
 * 回调函数：把一个函数A当做实参传递给另外一个函数B，在B方法执行的时候，把A也执行了，我们把这种机制
 * 叫做“回调函数机制”
 * 
 *  1.根据需求，回调函数可以被执行N次
 *  2.不仅可以把回调函数执行，还可以给传递的回调函数传递实参，这样在回调函数中设置形参（或arg）接受即可
 *  3.可以改变回调函数中this的指向
 *  4.可以在宿主函数中接受回调函数执行的返回结果 
 */

//  let fn = (callback) => {
//    // callback : 传递进来的函数
//    // callback && callback.call(obj, 100, 200);
//    // typeof callback === 'function' ? callback() : null;
//    let res = callback(10, 20);
//    console.log(res);
//  };

//  fn((n, m) => {
//   // this : window 回调函数中一般tihs都是window，除非宿主函数执行回调函数的时候把this特殊指向了(箭头函数除外)
//   // console.log(n, m);
//   return n + m;
//  });

//  // JQ中的each和内置forEach类似（但forEach只能遍历数组），用来遍历数组（类数组、对象）中的每一项
// //  $.each();

//  [12,23,34].forEach(function (item, index) {
//   console.log(item, index, this);
//  }, '哈哈');
//  // forEach第二个参数是用来改变回调函数中this的

//  $.each([12,23,34], function (index, item) {
//   console.log(item, index, this); // this : 当前遍历的这一项（item）
//  });

//  let each = function (obj, callback) {
//   let flag = 'length' in obj; // 先简单验证：有length是数组或类数组，没有是对象
//   if (flag) {
//     for (let i = 0; i < obj.length; i++) {
//       let item = obj[i];

//       // 接受回调函数的返回值，如果返回的是false，我们结束循环
//       let res = callback && callback.call(item, i, item);
//       if (res === false) {
//         break;
//       }
//     }
//   }
//   else {
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         let value = obj[key];
//         let res = callback && callback.call(value, key, value);
//         if (res === false) {
//           break;
//         }
//       }
//     }
//   }
// };

//  each([12, 23, 34], function (index, item) {
//   console.log(item);
//   if (index >= 1) {
//     return false;
//   }
//  });

// String.prototype.myReplace = function (reg, callback) {
//   // this : str
//   // 默认reg加了g
//   let res = reg.exec(this),
//       _this = this;
//   while (res) {
//     // res : 每一次exec捕获的结果（数组）
//     let returnV = callback(...res);
//     /**
//      * 捕获一次执行一次回调函数，并且把通过exec捕获的数组展开，每一项都依次传递给回调函数（returnV ：
//      * 当前回调函数执行的返回结果，我们要拿这个结果替换字符串中当前大正则匹配的内容）
//      */

//     let v = res[0],
//         i = _this.indexOf(v);
//     _this = _this.substring(0, i) + returnV + this.substring(v.length + i);
//     res = reg.exec(this);
//   }
//   return _this;
// };

// let str = 'my name is {0}, i am {1} years old',
//     ary = ['don1111', '28'];
// str = str.myReplace(/\{(\d+)\}/g, function (...arg) {
//   let index = arg[1];
//   return ary[index];
// });
// console.log(str);




// let bannerRender = (function () {
//     // 获取后续需要操作的元素对象或者元素集合
//     let container = document.querySelector('#container'),
//         wrapper = container.querySelector('.wrapper'),
//         focus = container.querySelector('.focus'),
//         arrowLeft = container.querySelector('.arrowLeft');
//         arrowRight = container.querySelector('.arrowRight'),
//         slideList = null,
//         focusList = null;

//     // 轮播图运动的基础参数
//     let stepIndex = 0, // 步长
//         autoTimer = null, // 自动轮播的定时器
//         interval = 1000; // 切换间隔时间

//     // 控制轮播图的运动和切换
//     /**
//      * 下标为1，展示第二章，wrapper的left -1000
//      * 下标为2，展示第三章，wrapper的left -2000
//      * ...
//      * 
//      * wrapper的left值为当前要展示的图片下标对应的结果：-下标 * 1000
//      */
//     let autoMove = function autoMove() {
//         stepIndex ++;

//         if (stepIndex >= slideList.length) {
//             // stepIndex = 0;
//             /**
//              *  说明再往后切换没有了（选择展示的是克隆的第一张），
//              * 此时我们让wrapper立即回到真实第一张的位置（left ： 0），
//              * 然后stepIndex - 1（这样可以切换到第二张）
//              */
//             utils.css(wrapper, 'left', 0);
//             stepIndex = 1;
//         }

//         // 基于自主封装animate实现切换动画
//         /**
//          * 200是从当前切换到下一张的动画时间 
//          */
//         animate(wrapper, {
//             left : -stepIndex * 1000
//         }, 200); 

//         // 每一次运动完成需要让焦点跟着切换
//         changeFocus();
//     };

//     // 焦点对齐
//     let changeFocus = function changeFocus () {
//         // 当轮播图运动到最后一张（克隆的第一张，我们需要让第一个li[索引0]有选中的样式）
//         let tempIndex = stepIndex;
//         tempIndex === slideList.length - 1 ? tempIndex = 0 : null;
//         [].forEach.call(focusList, (item, index) => {
//             item.className = index === tempIndex ? 'active' : '';
//         });
//     };

//     // 获取数据
//     let queryData = function quertyData() {
//         return new Promise((resolve, reject) => {
//             let xhr = new XMLHttpRequest();
//             xhr.open('get', 'json/carousel.json');// 第三个参数不写是异步
//             xhr.onreadystatechange = () => {
//                 if (xhr.readyState === 4 && xhr.status === 200) {
//                     // let data = JSON.parse(xhr.responseText);
//                     let data = JSON.parse(xhr.responseText);
//                     resolve(data);
//                 }
//             };
//             xhr.send(null);
//         });
//     };

//     // 数据绑定
//     let bindHTML = function bindHTML(data) {
//         let strSlide = ``,
//             strFocus = ``;
//         data.forEach((item, index) => {
//             let {img = 'img/info.png', title = '嘿嘿嘿'} = item;
//             strSlide += `<div class="slide">
//                             <img src="${img}" alt="${title}">
//                         </div>`;
//             // ES6模板字符串中${}存放的是JS表达式，但是需要表达式有返回值
//             strFocus += `<li class = "${index === 0 ? 'active' : ''}"></li>`;
//         });

//         wrapper.innerHTML = strSlide;
//         focus.innerHTML = strFocus;

//         // 获取所有的slide
//         slideList = wrapper.querySelectorAll('.slide');
//         focusList = focus.querySelectorAll('li');
        
//         /**
//          *  把现有的第一张克隆一份放到容器的末尾（由于querySelectorAll无DOM映射，
//          * 新增加一个原有集合中还是之前的slide，故重新获取一遍）
//          */
//         wrapper.appendChild(slideList[0].cloneNode(true));
//         slideList = wrapper.querySelectorAll('.slide');

//         //根据slide的个数动态计算wrapper的宽度
//         utils.css(wrapper, 'width', slideList.length * 1000);
//     };

//     //鼠标进入、离开控制自动轮播的停止和开启
//     let handleContainer = function handleContainer () {
//         container.onmouseenter = function () {
//             clearInterval(autoTimer);
//             arrowLeft.style.display = arrowRight.style.display = 'block';
//         };
//         container.onmouseleave = function () {
//             autoTimer = setInterval(autoMove, interval);
//             arrowLeft.style.display = arrowRight.style.display = 'none';
//         };
//     };

//     // 焦点事件切换
//     let handleFocus = function handleFocus() {
//         [].forEach.call(focusList, (item, index) => {
//             item.onclick = function () {
//                 stepIndex = index;
//                 animate(wrapper, {
//                     left : -stepIndex * 1000
//                 }, 200);
//                 changeFocus();
//             };
//         });
//     }

//     //绑定2个箭头点击事件
//     let handleArrow = function handleArrow() {
//         arrowRight.onclick = autoMove; // 点击右箭头和按顺序轮播是一样的

//         arrowLeft.onclick = function () {
//             stepIndex --;

//             //如果索引已是第一张，则不再向右移动，而是瞬移到最后一张
//             if (stepIndex < 0) {
//                 utils.css(wrapper, 'left', -(slideList.length - 1) * 1000);
//                 stepIndex = slideList.length - 2;
//             }
//             animate(wrapper, {
//                 left : -stepIndex * 1000
//             }, 200);
//             changeFocus();
//         }
//     };

//     return {
//         init : function () {
//             let promise = queryData();
//             promise.then(bindHTML)
//                    .then(() => {
//                         // 开启定时器驱动的自动轮播
//                         autoTimer = setInterval(autoMove, interval);
//                     })
//                     .then(() => {
//                         // 左右按钮或者焦点切换
//                         handleContainer();
//                         handleFocus();
//                         handleArrow();
//                     });
//         }
//     }
// })();
// bannerRender.init();




/**
 * 封装插件
 *  1.每一次调用插件都是独立的，互不影响；
 *  2.一些常用方法还要是公用的；
 * 调取一次插件就是创建一个独立的实例，里面很多信息是互不干扰的，但一些操作方法
 * 还是共同调取一个即可（这套机制就是我们构造函数模式中类和实例的机制），所以插
 * 件、组件类库、框架的封装一般都是基于oop完成的；
 *  3.封装插件的目的：可以更多的适配各种需求、让用户使用起来方便，因此插件封装
 * 的核心与难点都在于细节的思考和处理，而不应该局限到各种模式或者装B的代码中；
 */



/**
 * 一个优秀的插件是尽可能支持更多的配置项（大部分配置项都有默认值）
 * 支持扩展，让用户在自己的插件中扩展方法
 */
//  new Banner({
//       /**
//        * ele : #container,  //操作哪个容器（选择器）
//        * data : [],  // 需要绑定的数据
//        * url : '',  // 获取数据的api地址（插件内部帮我们获取数据）
//        * isArrow : true, // 是否支持左右切换
//        * isFocus : true, // 是否支持焦点切换
//        * isAuto : true,  // 是否支持自动切换
//        * defaultIndex : 0,  // 默认展示第几张
//        * interval : 3000,  // 多久切换一次
//        * speed : 200,  // 切换的速度
//        * moveEnd : () => {},  // 切换完成后处理的事情
//        * ...
//        */
//  });

// ~function () {
//     class Banner {
//         constructor(options = {}) {
//             //options是传进来的配置项 (结构赋值并给更多的配置项设置默认值)
//             let {
//                 ele,
//                 url,
//                 isArrow = true,
//                 isAuto = true,
//                 isFocus = true,
//                 defaultIndex = 0,
//                 interval = 3000,
//                 speed = 200,
//                 moveEnd
//             } = options;

//             // 把所有的配置项信息都挂在到实例上（以后在原型的任何方法中都能调取这些属性获取值）
//             ['ele', 'url', 'isArrow', 'isAuto', 'isFocus', 'defaultIndex', 'interval', 'speed', 'moveEnd'].forEach(item => {
//                 this[item] = eval(item);
//             });

//             // 获取需要的元素，挂载到实例上
//             // 获取后续需要操作的元素对象或者元素集合
//             this.container = document.querySelector(ele);
//             this.wrapper = this.container.querySelector('.wrapper');
//             this.focus = this.container.querySelector('.focus');
//             this.arrowLeft = this.container.querySelector('.arrowLeft');
//             this.arrowRight = this.container.querySelector('.arrowRight');
//             this.slideList = null;
//             this.stepIndex = defaultIndex;
//             this.focusList = null;

//             // 轮播图运动的基础参数
//             this.stepIndex = defaultIndex;  // 步长
//             this.autoTimer = null;  // 自动轮播的定时器

//             // 调取init开启轮播图
//             this.init();
//         }

//         // Banner的主入口（在init中规划方法的执行顺序）
//         init() {
//             let {isAuto, interval} = this;
//             let promise = this.queryData();
//             promise.then(() => {
//                 this.bindHTML();
//             }).then(() => {
//                 if (isAuto) {
//                     this.autoTimer = setInterval(() => {
//                         this.autoMove();
//                     }, interval);
//                 }
//             });
//         }

//         // 数据获取
//         queryData() {
//             let {url} = this;
//             return new Promise((resolve, reject) => {
//                 let xhr = new XMLHttpRequest();
//                 xhr.open('get', url);// 第三个参数不写是异步
//                 xhr.onreadystatechange = () => {
//                     if (xhr.readyState === 4 && xhr.status === 200) {
//                         // 把获取的数据也挂在到实例上了
//                         this.data = JSON.parse(xhr.responseText);
//                         resolve();
//                     }
//                 };
//                 xhr.send(null);
//             });
//         }

//         // 数据绑定
//         bindHTML() {
//             let {data, wrapper, focus} = this;
//             let strSlide = ``,
//                 strFocus = ``;
//             data.forEach((item, index) => {
//                 let {img = 'img/info.png', title = '嘿嘿嘿'} = item;
//                 strSlide += `<div class="slide">
//                             <img src="${img}" alt="${title}">
//                         </div>`;
//                 // ES6模板字符串中${}存放的是JS表达式，但是需要表达式有返回值
//                 strFocus += `<li class = "${index === 0 ? 'active' : ''}"></li>`;
//             });

//         wrapper.innerHTML = strSlide;
//         focus.innerHTML = strFocus;

//         // 获取所有的slide
//         this.slideList = wrapper.querySelectorAll('.slide');
//         this.focusList = focus.querySelectorAll('li');
        
//         /**
//          *  把现有的第一张克隆一份放到容器的末尾（由于querySelectorAll无DOM映射，
//          * 新增加一个原有集合中还是之前的slide，故重新获取一遍）
//          */
//         wrapper.appendChild(this.slideList[0].cloneNode(true));
//         this.slideList = wrapper.querySelectorAll('.slide');

//         //根据slide的个数动态计算wrapper的宽度
//         utils.css(this.wrapper, 'width', this.slideList.length * 1000);
//         }

//         // 自动轮播
//         autoMove() {
//             this.stepIndex ++;
    
//             if (this.stepIndex >= this.slideList.length) {
//                 // stepIndex = 0;
//                 /**
//                  *  说明再往后切换没有了（选择展示的是克隆的第一张），
//                  * 此时我们让wrapper立即回到真实第一张的位置（left ： 0），
//                  * 然后stepIndex - 1（这样可以切换到第二张）
//                  */
//                 utils.css(this.wrapper, 'left', 0);
//                 this.stepIndex = 1;
//             }
    
//             // 基于自主封装animate实现切换动画
//             /**
//              * 200是从当前切换到下一张的动画时间 
//              */
//             animate(this.wrapper, {
//                 left : -this.stepIndex * 1000
//             }, this.speed); 
    
//             // 每一次运动完成需要让焦点跟着切换
//             this.changeFocus();
//         };

//         // 焦点对齐
//         changeFocus() {
//             // 当轮播图运动到最后一张（克隆的第一张，我们需要让第一个li[索引0]有选中的样式）
//             let tempIndex = this.stepIndex;
//             tempIndex === this.slideList.length - 1 ? tempIndex = 0 : null;
//             [].forEach.call(this.focusList, (item, index) => {
//                 item.className = index === tempIndex ? 'active' : '';
//             });
//         };

//     }
//     window.Banner = Banner;
// }();




// $(function () {
//     let bannerRender = (function () {
//         let $container = $('#container'),
//             $wrapper = $container.children('.wrapper'),
//             $focus = $container.children('.focus'),
//             $arrowLeft = $container.children('.arrowLeft'),
//             $arrowRight = $container.children('.arrowRight'),
//             $sideList = null,
//             $focusList = null;

//     let queryData = function queryData() {
//         return new Promise((resolve, reject) => {
//             $.ajax({
//                 url : 'json/carousel.json',
//                 method : 'get',
//                 dataType : 'json',
//                 async : true,
//                 // success : data => {
//                 //     resolve(data);
//                 // },
//                 // error : msg => {
//                 //     // msg存储了失败的信息
//                 //     reject(msg);
//                 // }
//                 // 另一种写法
//                 success : resolve,
//                 error : reject
//             });
//         });
//     };

//     let changeSlide = function changeSlide() {
//         /**
//          *  1.让当前的zIndex = 1， 并且让上一个在zIndex= 0（作业是为了保证不管结构是靠前还是靠后，
//          * 始终当前这个都是层级最高的，也是优先展示的）
//          *  2.让当前的实现渐进的效果（opacity从0到1）
//          *  3.当前最高已经渐进（动画结束），再让上一个透明度为0（下一次展示它时，是从0渐进）
//          *  4.让当前的下标变为下一次对应上一次下标
//          */
//         let $cur = $slideList.eq(_index),
//             $last = $slideList.eq(_lastIndex);
//         $cur.css('zIndex', 1);
//         $last.css('zIndex', 0);
//         $cur.stop().animate({ opacity : 1 }, _speed, () => {
//             $last.css({
//                 opacity : 0
//             });
//             _lastIndex = _index;
//         });
//         changeFocus();
//     }

//     let bindHTML = function bindHTML(data) {
//         let strSlide = ``,
//             strFocus = ``;
//         $.each(data, (index, item) => {
//             let {img, title} = item;
//             strSlide += `<div class="slide"><img src="${img}" alt=${title}></div>`;
//             strFocus += `<li class="${index === 0 ? 'active' : ''}"></li>`;
//             console.log(data);
//         });
//         $wrapper.html(strSlide);
//         $focus.html(strFocus);

//         $slideList = $wrapper.find('.slide');
//         $focusList = $focus.find('li');
//     }

//     let _index = 0, // 当前slide的下标
//         _lastIndex = 0, // 上一次slide的下标
//         _timer = null,
//         _interval = 1000,
//         _speed = 200;

//     let autoMove = function autoMove() {
//         _index ++;

//         // 边界判断
//         if (_index >= $slideList.length) {
//             _index = 0;
//         }

//         changeSlide();
        
//     };

//     let changeFocus = function changeFocus() {
//         $focusList.eq(_index).addClass('active');
//         $focusList.eq(_lastIndex).removeClass('active');

//         // $focusList.each((index, item) => {
//         //     if (index === _index) {
//         //         $(item).addClass('active');
//         //     }
//         //     else {
//         //         $(item).removeClass('active');
//         //     }
//         // });
//     };

//     let handleMouse = function handleMouse() {
//         $container.on('mouseenter', () => {
//             clearInterval(_timer);
//             $arrowLeft.add($arrowRight).css('display', 'block'); // add是在一个JQ集合中增加一些新的元素（获取新的JQ对象），类似两个集合合并
//         }).on('mouseleave', () => {
//             _timer = setInterval(autoMove, _interval);
//             $arrowLeft.add($arrowRight).css('display', 'none');
//         });
//     }

//     let handleArrow = function handleArrow() {
//         $arrowRight.on('click', autoMove);
//         $arrowLeft.on('click', () => {
//             _index --;
//             if (_index < 0) {
//                 _index = $slideList.length - 1;
//             }
//             changeSlide();
//         });
//     }

//     let handleFocus = function handleFocus() {
//         $focusList.on('click', function anonymous() {
//             let curIndex = $(this).index();
//             if (_index === curIndex) {
//                 return;
//             }
//             _index = curIndex;
//             changeSlide();
//         });
//     };

//     return {
//         init : function init() {
//             let promise = queryData();
//             promise.then(data => {
//                 // 获取数据成功后处理的事情
//                 bindHTML(data);
//                 _timer = setInterval(autoMove, _interval);
//                 handleMouse();
//                 handleArrow();
//                 handleFocus();
//             });
//         }
//     };
//     })();
//     bannerRender.init();
// });





/**
 * 1.什么是事件？
 *  事件就是一个行为（对于元素来说，它的很多事件都是天生自带的），只要我们操作
 * 元素，就会触发这些行为
 * 2.事件绑定：给元素天生自带的事件行为绑定方法，当事件触发，会执行对应方法
 *  oBox.onclick = funtion () {}
 * 3.元素天生自带的事件
 * 
 *  鼠标事件：
 *  click：点击（pc端是点击，移动端是单击=> 移动端会有300ms延迟问题）
 *  dblclick：双击
 *  mouseover：鼠标经过
 *  mouseout：鼠标移除
 *  mouseenter：鼠标进入
 *  mouseleave：鼠标离开
 *  mousemove：鼠标移动
 *  mousedown：鼠标按下（鼠标左右键都起作用，按下立即触发，click是按下抬起才会触发，
 * 而且是先把down和up触发，才会触发click）
 *  mouseup：鼠标抬起
 *  mousewheel：鼠标滚轮滚动
 *  ...
 * 
 *  键盘事件：
 *  keydown：键盘按下
 *  keyup：键盘抬起
 *  keypress：和keydown类似，只不过keydown返回的是键盘码，keypress返回的是ascii码
 *  input：由于pc端有实体物理键盘，可以监听到键盘的按下和抬起，但移动端是虚拟的键盘，
 * 所有keydown和keyup在大部分手机上都没有，故用input事件统一代替它们（内容改变事件）
 *  ...
 *  
 *  表单元素常用事件
 *  focus：获取焦点
 *  blur：失去焦点
 *  change：内容改变
 *  ...
 * 
 *  其他常用事件：
 *  load：加载完成
 *  unload：
 *  beforeunload：
 *  scroll：滚动条滚动事件
 *  resize：大小改变事件
 *  ...
 * 
 *  移动端手指事件：
 *  touchstart：手指按下
 *  touchmove：手指移动
 *  touchend：手指离开
 *  touchcancel：意外情况（手机断电）导致手指操作取消
 * 
 *  多手指操作：
 *  gesturestart：多手指按下
 *  gesturechange：手指改变
 *  gestureend：手指离开
 * 
 *  H5中的audio/video音视频事件
 *  canplay：可以播放（播放过程中可能出现由于资源没有加载完成，导致的卡顿）
 *  canplaythrough：资源加载完成，可以正常无障碍播放
 *  ...
 */




 /**
  * 事件绑定
  *     DOM 0级事件绑定
  *         element.onxxx = function () {}
  *     DOM 2级事件绑定
  *         element.addEventListener ('xxx', function () {}, false);
  *         element.attachEvent('onxxx',function () {}); => IE6-8
  *     目的：给元素某个事件绑定方法（无论基于DOM0还是DOM2），都是为了触发元素相关
  * 行为时，能做点事（把绑定方法执行）；“不仅把方法执行了，而且浏览器还给方法传递
  * 了一个实参信息值 ==> 这个值就是事件对象”
  * 
  *     MouseEvent鼠标事件对象、KeyboardEvent键盘事件对象、TouchEvent手指事件对象、Event普通事件对象
  * 
  *     目的：事件对象中记录了很多属性名和属性值，这些信息中包含了当前操作的基础信息，
  * 例如：鼠标点击的位置，鼠标点击的是谁（事件源）等信息
  * 
  *     MouseEvent：
  *     ev.target 事件源
  *     ev.clientX / ev.clientY 当前鼠标触发点距离当前窗口左上角X、Y轴坐标
  *     ev.pageX / ev.pageY 当前鼠标出发点距离body（第一屏幕）左上角X、Y轴坐标
  *     ev.preventDefault() 阻止默认行为
  *     ev.stopPropagation() 阻止事件的冒泡传播
  *     ev.type 当前事件类型
  * 
  *     KeyboardEvent ：
  *     ev.code 当前按键'keyE'
  *     ev.key 当前按键'e'
  *     ev.which / ev.keyCode 
  * 
  *     常用键盘码：
  *     左、上、右、下： 37，38，39，40
  *     backspace :　8
  *     enter : 13
  *     space : 32
  *     delete : 46
  *     shift : 16
  *     alt : 18
  *     ctrl : 17
  *     esc : 27
  *     F1 - F12 : 112-123
  *     0 - 9 : 48-57
  *     小写字母 : 97-122
  *     大写字母：65-90
  *     
  *     
  */





//   // IE6-8
//   box.onclick = function(ev) {
//     /**
//      * IE低版本浏览器中，并没有把ev传进来，ev === undefined，需要window.event获取（由于是全局属性
//      * ，鼠标每次操作都会把上一次操作的值替换掉）
//      */
//     if (!ev) {
//         ev = window.event;
//         //ev.srcElement 是事件源

//         //低版本浏览器无pageX、pageY
//         ev.pageX = ev.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
//         ev.pageY = ev.clientY + (document.documentElemeTop || document.body.scrollTop);
//         ev.which = ev.keyCode;

//         //preventDefault / stopPropagation 低版本都没有
//         ev.preventDefault = function () {
//             ev.returnValue = false;
//         }
//         ev.stopPropagation = function () {
//             ev.calcelBubble = true;
//         }
//     }
//   }

//   //精简版
//   box.onclick = function (ev) {
//       ev = ev || window.event;
//       var target = ev.target || ev.srcElement;
//       ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
//   }




/**
 * 事件的默认行为：事件本身就是天生就有的，某些事件触发，即使你没有绑定方法，也会
 * 存在一些效果，这些默认的效果就是“事件的默认行为”
 * 
 *  A标签的点击操作就存在默认行为
 *      1.页面跳转
 *      2.锚点定位（hash/哈希定位）
 *      <a href="#box">XXX</a> 首先会在当前页面url地址栏末尾设置一个hash值，浏览器
 * 检测到hash值后，会默认定位到当前页面中id和hash相同的盒子位置（基于hash值我们还可以
 * 实现spa单页面应用）
 * 
 *  input标签的默认行为
 *      1.输入内容可以呈现到文本框中
 *      2.输入内容的时候会把之前输入的一些信息呈现出来（不是所有浏览器，以及所有情况下都有）
 *      ...
 * 
 *  submit按钮也存在默认行为
 *      1.点击按钮页面会刷新
 *      <form action ="http://www.baidu.com/">
 *          <input type="submit" value="提交">
 *      </form>
 *      在form中设置action，点击submit，会默认按照action制定的地址进行页面跳转，并且
 * 把表单中的信息传递过去（非前后端分离项目中，由服务器进行页面渲染，由其他语言实现数据交互，一般
 * 都是这样处理）
 * 
 * 
 * 如何阻止默认行为
 * 1.阻止a标签的默认行为：只想把a标签当做普通按钮，实现一个功能，不页面跳转以及锚点定位
 *      在结构中阻止：
 *      <a href="javascript:;">XXX</a>
 *      javascript:void / 0 / undefined / null....;
 * 
 *      JS中阻止：
 *      给click事件绑定方法，当我们点击a标签的时候，先触发click事件，其次才会执行自己的默认行为
 *      link.onclick = function (ev) {
 *          ev = ev || window.event;
 *          ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
 *          //return false;   // 直接返回false也行
 *      }
 * 
 *      // 文本框字数限制
 *      tempInp.onkeydown = function() {
 *          ev = ev || window.event;
 *          let val = this.value.trim(),// 去除首位空格（不兼容）
 *              len = val.length;
 *          if (len >= 6) {
 *              this.value = val.substr(0, 6);
 *              
 *              // 阻止默认行为去除特殊按键（delete / backSpace / 方向键）
 *              let code = ev.which || ev.keyCode;
 *              if (!/^(8|37|38|39|40|46)$/.test(code)) {
 *                  ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
 *              }
 *          }
 *      }
 */




 /**
  * 事件的传播机制
  *     冒泡传播：触发当前元素的某个（点击事件）行为，不仅当前元素事件行为触发，而且其祖先元素的相关事件行为也会依次触发，
  * 这种机制就是“事件的冒泡传播机制”
  */
//  document.onclick = function() {console.log('document');}
//  document.documentElement.onclick = function() {console.log('HTML');}
//  document.body.onclick = function() {console.log('body');}
//  outer.onclick = function() {console.log('outer');}
//  inner.onclick = function(ev) {console.log(ev, 'inner');}

 /**
  * 1.捕获阶段
  *     点击inner的时候，首先会从最外层（window）开始向内查找（找到操作的事件源），查找的目的是，构建出冒泡传播
  * 的路线（查找就是按照HTML层级结构找的）
  * 2.目标阶段
  *     把事件源的相关操作行为触发（如果绑定了方法，就执行方法）
  * 3.冒泡传播
  *     按照捕获阶段规划的路线，自内而外，把当前事件源的祖先元素的相关事件行为依次触发（如果某一个祖先元素事件
  * 行为绑定了方法，就把方法执行，没绑定方法，行为触发会什么也不做，继续向上传播即可）
  */

  /**
   * xxx.onxxx = function() {}
   * DOM 0级事件绑定，给元素的事件行为绑定方法，这些方法都是在当前元素事件行为的冒泡阶段（或者目标）执行的
   * 
   * xxx.addEventListener('xxx', function(){}, false);
   * 第三个参数false也是控制绑定方法在事件传播的冒泡阶段（或目标阶段）执行；只有第三个参数为true才代表
   * 当前方法在事件传播的捕获阶段触发执行（没啥意义，项目中不用）
   */

   /**
    * 不同浏览器对于最外层祖先元素的定义是不一样的
    * 谷歌：window->document->html->body...
    * IE高：window->html->body...
    * IE低：html->body...
    */

    // let aa = null;
    // document.body.onclick = function(ev) {
    //     console.log(ev === aa); // true
    // }
    // outer.onclick = function(ev) {
    //     console.log(ev === aa); // true
    // }
    // inner.onclick = function(ev) {
    //     aa = ev; 
    //     //   ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble = true;
    // }
    
/**
 * 关于事件对象的一些理解
 *  1.事件对象是用来存储当前本次操作的相关信息，和操作有关，和元素无必然关联
 *  2.当我们基于鼠标或者键盘等操作的时候，浏览器会把本次操作的信息存储起来（标
 * 准浏览器存储到默认的内存中-> 自己找不到IE低版本存储到了window.event中了），
 * 存储的值是一个对象（堆内存）；操作肯定会触发元素的某个行为，把绑定的方法执行，
 * 此时标准浏览器会把之前存储的对象（堆内存地址）当错实参传递给每一个执行的方法，
 * 所以操作一次，即使再多方法中都有ev，但是存储的值都是一个（本次操作信息的对象而已）
 */




 

 /**
  * 1.鼠标进入和离开smallBox，控制mark已经bigBox的显示隐藏
  * 2.控制mark在smallBox中运动，但不能超过边界
  * 3.当mark在smallBox移动的时候，根据mar移动的距离，计算出bigImg在bigBox中移动的距离（反向2倍：x/y轴
  * 移动都是2倍，整体4倍）
  */

// $(function() {
//     var $magnifierBox = $('.magnifierBox'),
//         $smallBox = $magnifierBox.find('.smallBox'),
//         $mark = $magnifierBox.find('.mark'),
//         $bigBox = $magnifierBox.find('.bigBox'),
//         $bigImg = $bigBox.find('img');

//     // 控制mark和bigBox的显示隐藏
//     $smallBox.on('mouseenter', function () {
//         $mark.css('display', 'block');
//         $bigBox.css('display', 'block');
//         computedMark(ev);
//     }).on('mouseleave', function() {
//         $mark.add($bigBox).css('display', 'none');
//         $mark.css('display', 'none');
//     }).on('mousemove', function(ev) {
//         //JQ中的ev已兼容所有浏览器
//         computedMark(ev);
//     });

//     // 鼠标在smallBox中移动的时候控制mark跟着移动（计算出mark位置）
//     function computedMark(ev) {
//         var offsetObj = $smallBox.offset(),
//             curL = ev.pageX - offsetObj.left - $mark.outerWidth() / 2,
//             curT = ev.pageY - offsetObj.top - $mark.outerHeight() / 2;
//         var minL = 0
//             minT = 0,
//             maxL = $smallBox.outerWidth() - $mark.outerWidth(),
//             maxT = $smallBox.outerHeight() - $mark.outerHeight();
//         curL = curL < minL ? minL : (curL > maxL ? maxL : curL);
//         curT = curT < minT ? minT : (curT > maxT ? maxT : curT);
        
//         $mark.css({
//         top: curT,
//         left: curL,
//         });
        
//         //mark动，则右侧大图朝反向移动
//         $bigImg.css({
//             top: -curT * 2,
//             left: -curL * 2
//         });
//     }
// });




// let $container = $('.container'),
//     $imgList = $('.container>.imgBox>li'),
//     $mark = null;
// $imgList.on('mouseover', function(ev) {
//     // 创建mark：根据经过的li中的小图片，动态创管控mark中的大图片
//     let $srcStr = $(this).children('img').attr('src');
//     $srcStr = $srcStr.replace(/_(\d+)/g, 'big_$1');
//     if (!$mark) {
//         $mark = $(`<div class="mark">
//                     <img src="${$srcStr}" alt="">
//                    </div>`
//         );
//         $container.append($mark);
//     }
// }).on('mouseout', function(ev) {
//     // 移除mark
//     if ($mark) {
//         $mark.remove();
//         $mark = null;
//     }
// }).on('mousemove',function(ev) {
//     //根据鼠标的位置计算
//     console.log($container.offset());
//     let {top: conTop, left: conLeft} = $container.offset(),
//         curL = ev.pageX - conLeft + 20,
//         curT = ev.pageY - conTop + 20;
//     $mark.css({
//         top: curT,
//         left: curL
//     });
// });




/**
 * 事件委托（事件代理）
 *  利用事件的冒泡传播机制，如果一个容器的后代元素中，很多元素的点击行为
 * （其他事件行为也是）都要做一些处理，此时不用像之前一个个获取一个个的绑定，
 * 我们只需要给容器的click绑定方法即可，这样不管点击的是哪一个后代元素，都会
 * 根据冒泡传播的机制，把容器的click行为触发，把对应的方法执行，根据事件源，
 * 我们可以知道点击的是谁，做不同的事情。
 */

//  a1.onclick = function() {
//      //...
//  };
//  a2.onclick = function() {
//      //...
//  };

 //一个个获取元素然后绑定事件方法，又麻烦又耗性能

 /**
  * 点击a1，不仅触发a1的点击行为，而且其父级元素的click行为也会依次触发
  *     此过程只需给a1的container绑定方法即可，不管点击后代哪个元素，绑定方法都会
  * 执行，而且ev中记录的事件源（ev.target）
  * 
  * let target = ev.target || ev.srcElement;
  * if (target.className == 'a1') {
  *     // ....
  * }
  * else {
  *     // .... 
  * }
  * 
  * 事件委托比一个个事件绑定，性能提高50%左右，且操作元素越多，性能提高越大
  */



// $(function() {
//     /**
//      * 基于事件委托给最外层的盒子的mouseover绑定方法，这样不管操作后代元素中的谁
//      * 的mouseover，这个方法都会执行
//      */
//     let $detailBox = $('.detailBox');
//     $(document.body).on('mouseover', function(ev) {
//         let target = ev.target,
//             tag = target.tagName,
//             $target = $(target),
//             $pars = $target.parents(); // 当前事件源的祖先元素

//         // 如果事件源是navBox中的a或li（让detailBox显示）
//         // true祖先中包含navBox，false则相反
//         let flag = $pars.filter('.navBox').length > 0 ? true : false;
//         if ((tag === 'A' || tag === 'LI') && flag) {
//             let val = $target.text().match(/\d+/);
//             $detailBox.css('display', 'block').html(`导航${val}对应的内容`);
//             return;
//         }

//         //如果事件源是detailBox或者它的后代元素，不做处理
//         // if ($target.hasClass('nav-box') || $pars.filter('detailBox').length > 0) {
//         //     return;
//         // }

//         $detailBox.css('display', 'none');
//     });

//     $detailBox.on('mouseover', function(ev) {
//         ev.stopPropagation();
//     });
// });




// let subscribe = new Subscribe();

// let fn1 = function (x, y) {
//     console.log(1, x, y);
//     subscribe.remove(fn2);
// }

// let fn2 = function () {
//     console.log(2);
// }

// let fn3 = function () {
//     console.log(3);
//     subscribe.remove(fn1);
//     subscribe.remove(fn2);
// }

// let fn4 = function () {
//     console.log(4);
// }

// subscribe.add(fn1);
// subscribe.add(fn2);
// subscribe.add(fn3);
// subscribe.add(fn4);

// setInterval(() => {
//     subscribe.fire(100, 200);
// }, 1000);




// let box = document.querySelector('#box');

// let subscribeDown = new Subscribe(),
//     subscribeMove = new Subscribe(),
//     subscribeUp = new Subscribe();
    

// let down = function down(ev) {
//     this.strX = ev.clientX;
//     this.strY = ev.clientY;
//     this.strL = this.offsetLeft;
//     this.strT = this.offsetTop;

//     this.MOVE = move.bind(this);
//     this.UP = up.bind(this);
//     document.addEventListener('mousemove', this.MOVE);
//     document.addEventListener('mouseup', this.UP);

//     subscribeDown.fire(this, ev); // 通知计划表中的方法执行，并且把当前操作的元素传递给每一个即将执行的方法
// };

// let move = function move(ev) {
//     this.curL = ev.clientX - this.strX + this.strL;
//     this.curT = ev.clientY - this.strY + this.strT;
//     this.style.left = this.curL + 'px';
//     this.style.top = this.curT + 'px';

//     subscribeMove.fire(this, ev);
// };

// let up = function up (ev) {
//     document.removeEventListener('mousemove',this.MOVE);
//     document.removeEventListener('mouseup',this.UP);

//     subscribeUp.fire(this, ev);
// }

// box.onmousedown = down;

// /**
//  *  浏览器有最小计算（反应）时间，同样的距离移动，操作快（用的时间段），浏览器能够反应过来的次数就少，触发mouseMove这个行为
//  * 次数也变少，如移动慢，反应次数多，触发行为的次数也就多了。
//  * 
//  * 水平方向的运动只跟即将松手的一瞬间运动的速度有关系：我们需要获取的就是即将松开一瞬间的速度。
//  */

//  //1. 移动中随时计算速度
//  subscribeMove.add((curEle, ev) => {
//      // 第一次开始运动，让lastFly（上一次位置）以及speedFly（最新速度）都为初始当前位置
//     if (!curEle.lastFly) {
//         curEle.lastFly = curEle.offsetLeft;
//         curEle.speedFly = 0;
//         return;
//     }
//     // 第二次移动：用当前的值 - 上一次记录的值，就是最新的差值（速度），当前最新的值很快就会成为下一次的上一次的值，直到拖动结束位置
//     curEle.speedFly = curEle.offsetLeft - curEle.lastFly;
//     curEle.lastFly = curEle.offsetLeft;
//  });

//  // 2.离开的时候做一些事情（根据获取speedFly）让元素运动起来
//  subscribeUp.add((curEle, ev) => {
//     // curEle.speedFly: 记录了最后一次运动的速度
//     let minL = 0,
//         maxL = document.documentElement.clientWidth - curEle.offsetWidth;
    
//     //动画运动之前计算运动的方向
//     let speed = curEle.speedFly,
//         dir = 'right';
//     speed < 0 ? dir = 'left' : null;
//     speed = Math.abs(speed)
//     // 开始按照方向运动
    
//     curEle.flyTimer = setInterval(() => {
//         /**
//          *  offsetLeft获取的值都会四舍五入，所有在当前left基础上+0.5的速度，下次再获取当前left值的时候
//          * 还是会被省略到，也就是元素不在运动，此时结束定时器
//          */
//         if (Math.abs(speed) < 0.5) {
//             clearInterval(curEle.flyTimer);
//             return;
//         }

//         //实现指数衰减的运动，一直到速度为0为止
//         speed *= .98;

//         let curL = curEle.offsetLeft;
//         if (dir === 'right') {
//             if (curL >= maxL) {
//                 //向右走到达右边界
//                 curEle.style.left = maxL + 'px';
//                 dir = 'left';
//                 return;
//             }
//             curL += speed;
//         }
//         else  {
//             if (curL <= minL) {
//                 //向右走到达右边界
//                 curEle.style.left = minL + 'px';
//                 dir = 'right';
//                 return;
//             }
//             curL -= speed;
//         }

//         curEle.style.left = curL + 'px';
//     }, 17);
//  });

//  subscribeDown.add((curEle, ev) => {
//     clearInterval(curEle.flyTimer);
//     clearInterval(curEle.dropTimer);
//  });

//  //4.实现垂直方向的运动
//  subscribeUp.add((curEle, ev) => {
//     let speed = 9.8,
//         minT = 0,
//         maxT = document.documentElement.clientHeight - curEle.offsetHeight,
//         flag = 0;



//     curEle.dropTimer = setInterval(() => {
//         if (flag > 1) {
//             clearInterval(curEle.dropTimer);
//             return;
//         }

//         // 实现速度衰减和加速
//         speed += 9.8;
//         speed *= .98;

//         let curT = curEle.offsetTop;
//         curT += speed;
//         if (curT >= maxT) {
//             curEle.style.top = maxT + 'px';
//             speed *= -1;
//             flag++;
//             return;
//         }

//         if (curT <= minT) {
//             curEle.style.top = minT + 'px';
//             speed *= -1;
//             return;
//         }
//         curEle.style.top = curT + 'px';
//         flag = 0;
//     }, 17);
//  });

/**
 * 一：HTML5 (H5)
 *  1.新增加（修改、删除）的语义化标签
 *  header  footer  main（主体）  section（区域）  article（文章区域）  aside与内容无关的部分（广告）
 *  nav  figure（配图区域）  figcaption（配图说明）  mark（标记）  time（时间标记） progress（进度条）
 *  ......
 * 
 *  2.关于表单元素的新改革
 *  [传统表单元素]
 *      input: text/password/radio/checkbox/file/hidden/button/submit/reset...
 *      select
 *      textarea 文本域
 *      button
 *      form
 *      label
 *      ...
 *  [新增一些表单元素或者表单类型]
 *      input:search/email/tel/umber/range/color/data/time/url......
 *      
 *  [音视频标签]
 *   audio
 *   video
 *   告别flash时代
 * 
 *  [canvas] 图形绘制
 *   
 *  [提供新的API]
 *   本地存储：localStorage、sessionStorage
 *   获取地理位置： navigator.geolocation.getCurrentPosition
 *      调取手机内部的GPS定位系统获取当前手机所在地的经纬度、精准度等
 *   ......
 *   还提供了一些API，通过浏览器调取手机内部的软件或硬件（但性能不高，兼容性不好）
 * 
 *  [websocket]
 *   socket.io：客户端和服务器端新的传输方式（即时通讯IM系统基本基于它完成）
 *   
 * 
 * 二：CSS3
 *  学习一些样式属性和选择器就差不多了
 * 
 *  [选择器]
 *  #ID  .CLASS  TAG  *  SELECTOR1,SELECTOR2(群组选择器)
 * 
 *      A B{} 后代
 *      A>B{} 子代
 *      A+B{} 下一个弟弟
 *      A~B{} 兄弟
 *      A.B{} 既具备A也具备.B的（统计二次筛选）
 *      
 *      A[NAME=''] 属性选择器 NAME!='' / NAME^=''  /  NAME$=''  / NAME*=''
 *      ......
 * 
 *      A:HOVER
 *      A:ACTIVE
 *      A:VISITED
 *      A:AFTER
 *      A:BEFORE
 * 
 *      A:NTH-CHILD
 *      A:NTH-LAST-CHILD
 *      A:NTH-OF-TYPE
 *      A:NTH-LAST-OF-TYPE
 *      A:NOT
 *      A:FIRST-CHILD
 *      A:LAST-CHILD
 *      ......
 *      
 *  [样式属性]
 *   1.基本常用的
 *    border-radius
 *    box-shadow
 *    text-shadow
 * 
 *   2.背景的
 *    background-color / -image  / -position  / -repeat  /  -attachment  /  ...
 *    background-size:
 *      100px 100px  宽高具体指
 *      100% 100%  宽高百分比（相对所在容器）
 *      cover  以合适比例把图片缩放（不会变形），用来覆盖整个容器
 *      contain  背景图覆盖整个容器（但是会出现，如果一边碰到容器的边缘，则停止覆盖，导致部分区域无背景图）   
 *    background-clip: 背景图片裁剪
 *      border-box
 *      padding-box
 *      content-box
 *    background-origin: 设置背景图起始点
 *      ...
 *    filter: 滤镜
 *      
 *      
 *    [CSS3动画和变形] （2D、3D）
 * 
 *     变形不是动画
 *     transform：
 *       translate(x|y|z) 位移
 *       scale 缩放
 *       rotate 旋转
 *       skew 倾斜
 *       matrix 矩阵（按照自己设定的矩阵公式实现变形）
 * 
 *     transform-style: preserve-3d 实现3D变形
 *     transform-origin: 变形的起点
 * 
 * 
 *     过渡动画
 *     transition：
 *       transition-property: all / width ... 哪些属性样式发生改变执行过渡动画效果，默认all，所有样式
 *     属性改变都会执行这个过渡效果。
 *       transition-duration: 过渡动画时间，我们一般都用秒，如 5.s
 *       transition-timing-function: 动画运动的方式 linear(默认)、ease-in、ease-out、
 *     ease-in-out、cubic-bezier（执行总监设定的贝塞尔曲线）
 *       transition-delay: 设置延迟的时间，默认是0s不延迟，立即执行动画
 *       ......
 * 
 *     帧动画
 *     animation:
 *       animation-name  运动轨迹的名称
 *       animation-duration  运动时长
 *       animation-timing-function  运动的方式（默认ease）
 *       animation-delay  延迟时间
 *       animation-iteration-count  运动次数（默认1  infinite无限次运动）
 *       animation-fill-mode  运动完成后的状态（帧动画完成后，元素会默认回到运动的其实位置，
 *     如果想让其停留在最后一帧的位置，设置这个属性值为forwards； backwards是当前帧动画如果
 *     有延迟时间，在延迟等待时间内，元素处于帧动画的第一帧位置； both是让帧动画同时具备forwards
 *     和backwards）
 *       ......
 * 
 *     设置帧动画的运动轨迹
 *     @keyframes [运动轨迹名称] {
 *       from{
 *         // 开始的样式
 *       }
 *       to{
 *         // 结束的样式 
 *       }
 *     }
 * 
 * 
 *    [css3中新盒子模型]
 *       box-sizing: border-box / padding-box / content-box(默认值)
 *       改变的就是我们在css中设置的width 或 height到底代表啥，border-box让其代表整个盒子的宽高，
 *     当我们去修改padding 或者 border，盒子大小不变，只会让内容缩放。
 * 
 *       columns：多列布局
 * 
 *       flex：弹性盒子模型
 *       
 *    [其他css3属性]
 *      perspective：视距  实现3D动画必用的属性
 *      @media：媒体查询  实现响应式布局的一种方案
 *      @font-face：导入字体图标
 *      ......
 *     
 * 
 *     T1.1 ~ 1.3  p1 ~ p3  初级
 *     T2.1 ~ 2.3  p4 ~ p6  中高级
 *     T3.1 ~ 3.3  p7 ~ p9  架构师
 *      
 * 
 * 三：响应式布局开发
 *  响应式布局：在不同尺寸的设备上都能良好的展示
 *  公司中的产品形态：
 *      1.PC端（全凭页面需要宽度自适应，但一般都是固定宽度的）
 *      2.PC+移动端用同一套项目（简单的页面，例如：产品介绍，公司展示类的官网等）
 *      3.移动端（移动端设备尺寸差异较大，需要做响应式布局开发）
 *          嵌入到APP中的H5
 *          微信中分享出来的H5
 *          微信公众号
 *          小程序
 *          靠浏览器访问的H5
 *          ......
 *      4.React Native / ionic / cordova ... JS开发APP的框架，使用JS代码开发
 *  APP，最后框架会把代码转换为安卓IOS需要的代码
 * 
 *  如何实现响应式布局开发？
 *      最常用的方案：rem等比缩放响应式布局
 *      首先加meta标签
 *         meta:vp [tap]
 *         <meta name="viewport" content="width=divice-width,initial-scale=1.0">
 *         rem和px一样都是样式单位，px是固定单位，rem是相对单位（相对于当前页面根元素HTML的字体设定的单位）
 *          
 *         开始给THML字体大小设置为100px（1rem=100px），接下来我们写样式的时候，把所有的尺寸都用rem设定（测量
 *      出来的px值/100就是应该设置的rem值），如果HTML的font-size不变，用rem和px一样，但是如果字体大小改变，也就
 *      是改变了rem和px之间的换算比例，那么值钱所有用rem做单位的样式都会自动按照最新的比例进行缩放，实现了改动HTML的
 *      font-size，整个页面中的元素都跟着缩放了，牵一发动全身。
 * 
 *         真实项目中，设计师给一套设计稿（常用尺寸：640*1136  750*1334  640*960  ...），拿到设计稿后，我们严格按照
 *      设计稿中的尺寸去编写样式
 *          html {
 *              font-size: 100px;
 *          }
 *          接下来写样式，把测量出来的px都除以100变为rem，所有的单位基于rem来搞
 *          假设设计稿是750，也就相当于750的设备下，1rem=100px
 * 
 *          页面运行在320的设备上，我们需要修改html的字体大小，以此实现页面跟着整体缩放：320 / 750 * 100 => 当前设备上
 *      HTML的字体大小
 * 
 * 四：微信二次开发（小程序） => Hybrid混合app开发
 * 
 * 五：移动端事件
 * 
 * 六：移动端常用的插件、类库、框架
 */


/**
  * 关于audio的一些常用属性
  *     [属性]
  *     duration：播放的总时间（s）
  *     currentTime：当前已经播放的时间（s）
  *     ended：是否已经播放完成
  *     paused：当前是否为暂停状态
  *     volume：控制音量（0到1）
  * 
  *     [方法]
  *     pause() 暂停
  *     play() 播放
  *     
  * 
  *     [事件]
  *     canplay: 可以正常播放（但是播放过程中可能出现卡顿）
  *     canplaythrough: 资源加载完毕，可以顺畅播放
  *     ended: 播放完成
  *     loadedmetadata：资源的基础信息已经加载完成
  *     loadeddata：整个资源都加载完成
  *     pause：触发了暂停
  *     play：触发了播放
  *     playing：正在播放中
  */


 (function (window) {
     // 根据当前设备的宽度，动态计算粗REM的换算比例，实现页面中元素的等比缩放
     let computedREM = function () {
        let winW = document.documentElement.clientWidth,
            desW = 640;
        if (winW >= 640) {
            document.documentElement.style.fontSize = '100px';
            return;
        }
        document.documentElement.style.fontSize = winW / desW * 100 + 'px';
     };
     computedREM();
     window.addEventListener('resize', computedREM);
 })(window);

 let loadingRender = (function() {
     let $loadingBox = $('.loadingBox'),
         $current = $loadingBox.find('.current');

     let imgData = ["./img/phoneUI/hangUp.svg", "./img/phoneUI/pickUp.svg"];

     let n = 0,
        len = imgData.length;
     // 预加载图片
     let run = function (callback) {
        imgData.forEach(item => {
            let tempImg = new Image;
            tempImg.onload = () => {
                tempImg = null;
                $current.css('width', (++n / len) * 100 + '%');
            
                //加载完成:执行回调函数（让当前loading页面消失）
                if (n == len) {
                    clearTimeout(delayTimer);
                    callback && callback();
                }
            };
            tempImg.src = item;
        });
     };

     // 设置最长等待时间（假设10s，到达10s如加载到达90%，就可以正常访问内容，如果不足，则提示用户稍后重试）
     let delayTimer = null;
     let maxDelay = function (callback) {
         delayTimer = setTimeout(() => {
             if (n / len >= 0.9) {
                 callback && callback();
                 return;
             }
             alert('请稍后重试');

             // 此时不继续加载页面，而是关闭页面，或跳转到其他页面
             //window.location.href = 'http://www.baidu.com';
         }, 10000);
     };

     //
     let done = function() {
        let timer = setTimeout(() => {
            $loadingBox.remove();
        }, 1000);
     };
     return {
         init: function () {
            run(done);
            maxDelay(done);
         }
     }
 })();

 let phoneRender = (function () {
    let $phoneBox = $('.phoneBox'),
        $time = $phoneBox.find('span'),
        $answer = $phoneBox.find('.answer'),
        $answerMarkLink = $answer.find('.markLink'),
        $hang = $phoneBox.find('.hang'),
        $hangMarkLink = $hang.find('.markLink'),
        answerBell = $('#answerBell')[0],
        introduction = $('#introduction')[0];


    let answerMarkTouch = function () {
        // 1.remove answer
        $answer.remove();
        answerBell.pause();
        $(answerBell).remove(); // 先暂停再移除，否则移除后还会播放声音

        //2.show hang
        $hang.css('transform', 'translateY(0rem)');
        $time.css('display', 'block');
        introduction.play();
        introduction.volume = 0.1;
        computedTime();
    };

    // 计算播放时间
    let autoTimer = null;
    let computedTime = function () {
        /*
        let duration = 0; // 让audio播放，会先加载资源，部分资源加载完成才会播放，并计算出总时间duration等信息，所以把获取信息放到canplay事件中
        introduction.oncanplay = function () {
            duration = introduction.duration;
        }
        */
        autoTimer = setInterval(() => {
            let val = introduction.currentTime,
                duration = introduction.duration;
            // 播放完成
            if(val >= duration) {
                clearInterval(autoTimer);
                closePhone();
                return;
            }

            let minute = Math.floor(val / 60),
                second = Math.floor(val - minute * 60);
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;
            $time.html(`${minute} : ${second}`);
        }, 1000);
    };

    //关闭phone
    let closePhone = function () {
        clearInterval(autoTimer);
        introduction.pause(); 
        $(introduction).remove();
        $phoneBox.remove();
    };

    return {
        init : function () {
            //播放bell
            answerBell.play();
            answerBell.volume = 0.1;
            
            //点击answerMark
            $answerMarkLink.on('tap',answerMarkTouch);
            $hangMarkLink.on('tap', closePhone);
            
        }
    }
 })();

 let messageRender = (function () {
     let $messageBox = $('.messageBox'),
         $wrapper = $messageBox.find('.wrapper'),
         $messageList = $wrapper.find('li'),
         $keyBoard = $messageBox.find('.keyBoard'),
         $textInp = $keyBoard.find('span'),
         $submit = $keyBoard.find('.submit');

     let step = -1, // 当前展示信息的索引
         total = $messageList.length + 1, // 记录的是信息总条数
         autoTimer = null,
         interval = 2000; // 记录信息相继出现的间隔时间

    let tt = 0;
    let showMessage = function () {
         step++;
         if (step === 2) {
            clearInterval(autoTimer);
            handleSend();
            return;
        }
         let $cur = $messageList.eq(step);
         $cur.addClass('active');
        if (step >= 3) {

            /**
             * JS中基于css获取tranform，得到的是一个矩阵
             */
            let curH = $cur[0].offsetHeight;
                tt -= curH;
            $wrapper.css('transform', `translateY(${tt}px)`);
            console.log(tt);
        }
        if (step >= total - 1) {
            clearInterval(autoTimer);
            closeMessage();
        }
    };

    let handleSend = function () {
        $keyBoard.css({
            transform : 'translateY(0rem)'
        }).one('transitionend', () => {
            let str = '好的，马上介绍！！',
                n = -1,
                textTimer = null;
                console.log(1);
            textTimer = setInterval(() => {
                let originHTML = $textInp.html();
                $textInp.html(originHTML + str[++n]);
                
                if (n >= str.length - 1) {
                    clearInterval(textTimer);
                    $submit.css('display', 'block');
                }
            }, 100);
        });
    };

    let handleSubmit = function () {
        $(`<li class="inter">
           <i class="arrow"></i>
           <img src="/img/small.jpg" alt="" class="pic">
           ${$textInp.html()}</li>`)
           .insertAfter($messageList.eq(1)).addClass('active');
        $messageList = $wrapper.find('li');

        $textInp.html('');
        $submit.css('display', 'none');
        $keyBoard.css('transform', 'translateY(3.7rem)');

        autoTimer = setInterval(showMessage, interval);
    };

    let closeMessage = function () {
        let delayTimer = setTimeout(() => {
            $messageBox.remove();
        }, interval);
    };


     return {
         init: function () {
            showMessage();
            autoTimer = setInterval(showMessage, interval);
            $submit.on('tap',handleSubmit);
         }
     }
 })();
 
 let cubeRender = (function (){
    let $cubeBox = $('.cubeBox'),
        $cube = $('.cube'),
        $cubeList = $cube.find('li');

    let start = function (ev) {
        //记录手指按下位置的其实坐标
        let point = ev.changedTouches[0];
        this.strX = point.clientX;
        this.strY = point.clientY;
        this.changeX = 0;
        this.changeY = 0;

    };
    let move = function (ev) {
        // 用最新手指的位置-其实的位置，记录x/y轴的偏移
        let point = ev.changedTouches[0];
        this.changeX = point.clientX - this.strX;
        this.changeY = point.clientY - this.strY;
    };
    let end = function (ev) {
        // 获取change/rotate值
        let {changeX, changeY, rotateX, rotateY} = this,
            isMove = false;

        // 验证是否发生移动
        Math.abs(changeX) > 10 || Math.abs(changeY) > 10 ? isMove = true : null;

        // 只有发生移动再处理
        if (isMove) {
            // 1.左右滑动 =》 changeX =》 rotateY （正比：change越大rotate越大）
            // 2.上下滑 =》 changeY =》 rotateX （反比：change越大rotate越小）
            // 3.为了让每一次操作旋转角度小一点，我们可以把移动距离1/3作为旋转的角度即可
            rotateX = rotateX - changeY / 3;
            rotateY = rotateY + changeX / 3;
            // 赋值给魔方盒子
            $(this).css('transform', `scale(0.6) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
            //让当前旋转的角度称为下一次起始的角度
            this.rotateX = rotateX;
            this.rotateY = rotateY;
        }

        // 清空其他记录的自定义属性值
        ['strX', 'strY', 'changeX', 'changeY'].forEach(item => this[item] = null);

    };
    

     return {
         init : function () {
            $cubeBox.css('display', 'block');
            let cube = $cube[0];
            cube.rotateX = -35;
            cube.rotateY = 35;
            $cube.on('touchstart', (start))
                 .on('touchmove', move)
                 .on('touchend', end);
         }
     }
 })();

 let detailRender = (function() {
    let $detailBox = $('.detailBox'),
        swiper = null,
        $dl = $('.page1>dl');
        
    let swiperInit = function () {
        swiper = new Swiper('.swiper-container', {
            // initialSlide : 1, 
            // direction: 'horizontal/vertical',
            effect: 'coverflow',
            //loop: true, // swiper有个bug：3d切换设置loop为true偶尔会无法切换（2d没问题）
            
            onInit: move,
                // 初始化成功执行的回调函数（参数是当前初始化的实例）
            
            onTransitionEnd: move,
        });

        //实例的私有属性：
        //1.activeIndex: 当前展示slide块的索引
        //2.slides：获取所有的slide（数组）
        //....

        //实例的共有方法
        //1.slideTo：切换到指定索引的slide
        //...
    };

    let move = function (swiper) {
        /** swiper当前创建的实例
            1.判断当前是否为第一个slide：如果是让3d菜单展开，不是则收起
        */
       let activeIn = swiper.activeIndex,
           slideArr = swiper.slides;
        if (activeIn === 0) {
            $dl.makisu({
                selector: 'dd',
                overlap: 0.1,
                speed: 0.1
            });
            $dl.makisu('open');
        }
        else {
            $dl.makisu({
                selector: 'dd',
                speed: 0
            });
            $dl.makisu('close');
        }

        //2.滑动到哪一个页面，把当前页面设置对应的ID，其余页面移除ID即可
        slideArr.forEach((item, index) => {
            if (activeIn === index) {
                item.id = `page${index + 1}`;
                return;
            }
            item.id = null;
        });
    };

    return {
        init : function () {
            $detailBox.css('display', 'block');
            swiperInit();
            $dl.makisu({
                selector: 'dd',
                overlap: 0.6,
                speed: 0.8
            });
            $dl.makisu('open');
        }
    }
 })();
 detailRender.init(); 
 
 


 /**
  *  click在移动端是单击事件行为，当触发点击操作，浏览器会等待300ms，验证是否触发了第二次操作，
  * 没有触发才会执行click对应的方法（click在移动端的300ms延迟问题）
  * 
  *  1.不建议大家在移动端使用click（如果非要使用也可以，最好导入一个插件fastclick.min.js，能解决300ms延迟）
  * 
  *  2.目前项目中移动端的点击操作等基本上都是基于第三方类库（事件库完成的）
  *    zepto.js
  *    touch.js
  *    hammer.js
  *    ......
  * 
  * 
  *  zepto VS jquery
  *  1.zepto没有考虑浏览器的兼容，专门为移动端开发的小型类库，也仅仅是把JQ中一些常规方法实现，很多方法也没实现（没有slideDown / show ...  是为了保证zepto体积够小）
  *  2.zepto中提供了移动端专门操作的事件方法（例如tap等），这些方法都是基于移动端的touch和gesture事件模型封装好的方法，JQ中并没有提供这些方法 => zepto更适合移动端
  * 
  */

/*
 开发中，由于当前项目板块众多（每一个板块都是一个单例），最好规划一种机制：通过办事的判断可以让程序只执行对应板块内容，
 这样开发那个板块，我们就把表示改为啥
 */

 let url = window.location.href; // 获取当前页面的URL地址  location.href='xxx'这种写法是让其跳转到某一个页面
     well = url.indexOf('#'),
     hash = well === -1 ? null : url.substr(well + 1);
//  switch (hash) {
//     case 'loading':
//         loadingRender.init();
//         break;
//     case 'phone':
//         phoneRender.init();
//         break;
//     case 'message':
//         messageRender.init();
//         break;
            
//  }