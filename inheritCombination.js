// 组合继承
// 其基本思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承

function Person(name){
  this.name = name;
  this.friends = ["Jack","John","Kim"];
}
Person.prototype.getName = function(){
  console.log(this.name);
}
function SuperPerson(name,sex){
 //继承Person
 Person.call(this,name);/*第二次调用父类型的构造函数，在实例上又创建了一次属性name和frieds，屏蔽第一次调用时创建的*/
 //实例属性
 this.sex = sex;
}
SuperPerson.prototype = new Person();//重写原型，第一次调用父类型的构造函数
SuperPerson.prototype.constructor = SuperPerson;
//添加新方法
SuperPerson.prototype.getSex = function(){
console.log(this.sex);
};
var Tom = new SuperPerson("Tom","man");
Tom.friends.push("Amy");
console.log(Tom.friends);// ["Jack", "John", "Kim", "Amy"]
Tom.getName();// Tom 
Tom.getSex();// man

var David = new SuperPerson("David","man");
console.log(David.friends);// ["Jack", "John", "Kim"]
David.getName();// David
David.getSex();// man 