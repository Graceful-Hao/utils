// 方法一

function myInstanceof(target, origin) {
  while (target) {
    // instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
    if (target.__proto__ === origin.prototype) {
      return true;
    }
    target = target.__proto__;
  }
  return false;
}

// 方法二
function myInstanceof1(target, origin) {
  // 基本数据类型直接返回false
  if (typeof target !== "object" || target === null) {
    return false;
  }
  // getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    // 找到相同的原型对象
    if (proto == origin.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  //查找到尽头，还没找到
  return false;
}
