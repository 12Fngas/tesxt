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




let bannerRender = (function () {
    // 获取后续需要操作的元素对象或者元素集合
    let container = document.querySelector('#container'),
        wrapper = container.querySelector('.wrapper'),
        focus = container.querySelector('.focus'),
        arrowLeft = container.querySelector('.arrowLeft');
        arrowRight = container.querySelector('.arrowRight'),
        slideList = null,
        focusList = null;

    // 轮播图运动的基础参数
    let stepIndex = 0, // 步长
        autoTimer = null, // 自动轮播的定时器
        interval = 1000; // 切换间隔时间

    // 控制轮播图的运动和切换
    /**
     * 下标为1，展示第二章，wrapper的left -1000
     * 下标为2，展示第三章，wrapper的left -2000
     * ...
     * 
     * wrapper的left值为当前要展示的图片下标对应的结果：-下标 * 1000
     */
    let autoMove = function autoMove() {
        stepIndex ++;

        if (stepIndex >= slideList.length) {
            // stepIndex = 0;
            /**
             *  说明再往后切换没有了（选择展示的是克隆的第一张），
             * 此时我们让wrapper立即回到真实第一张的位置（left ： 0），
             * 然后stepIndex - 1（这样可以切换到第二张）
             */
            utils.css(wrapper, 'left', 0);
            stepIndex = 1;
        }

        // 基于自主封装animate实现切换动画
        /**
         * 200是从当前切换到下一张的动画时间 
         */
        animate(wrapper, {
            left : -stepIndex * 1000
        }, 200); 

        // 每一次运动完成需要让焦点跟着切换
        changeFocus();
    };

    // 焦点对齐
    let changeFocus = function changeFocus () {
        // 当轮播图运动到最后一张（克隆的第一张，我们需要让第一个li[索引0]有选中的样式）
        let tempIndex = stepIndex;
        tempIndex === slideList.length - 1 ? tempIndex = 0 : null;
        [].forEach.call(focusList, (item, index) => {
            item.className = index === tempIndex ? 'active' : '';
        });
    };

    // 获取数据
    let queryData = function quertyData() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('get', 'json/carousel.json');// 第三个参数不写是异步
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // let data = JSON.parse(xhr.responseText);
                    let data = JSON.parse(xhr.responseText);
                    resolve(data);
                }
            };
            xhr.send(null);
        });
    };

    // 数据绑定
    let bindHTML = function bindHTML(data) {
        let strSlide = ``,
            strFocus = ``;
        data.forEach((item, index) => {
            let {img = 'img/info.png', title = '嘿嘿嘿'} = item;
            strSlide += `<div class="slide">
                            <img src="${img}" alt="${title}">
                        </div>`;
            // ES6模板字符串中${}存放的是JS表达式，但是需要表达式有返回值
            strFocus += `<li class = "${index === 0 ? 'active' : ''}"></li>`;

        });

        wrapper.innerHTML = strSlide;
        focus.innerHTML = strFocus;


        // 获取所有的slide
        slideList = wrapper.querySelectorAll('.slide');
        focusList = focus.querySelectorAll('li');
        
        /**
         *  把现有的第一张克隆一份放到容器的末尾（由于querySelectorAll无DOM映射，
         * 新增加一个原有集合中还是之前的slide，故重新获取一遍）
         */
        wrapper.appendChild(slideList[0].cloneNode(true));
        slideList = wrapper.querySelectorAll('.slide');

        //根据slide的个数动态计算wrapper的宽度
        utils.css(wrapper, 'width', slideList.length * 1000);
    }

    return {
        init : function () {
            let promise = queryData();
            promise.then(bindHTML)
                   .then(() => {
                        // 开启定时器驱动的自动轮播
                        autoTimer = setInterval(autoMove, interval);
                    });
        }
    }
})();
bannerRender.init();