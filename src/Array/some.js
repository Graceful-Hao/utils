// 必须使用function，不能使用箭头函数，this指向调用的数组
Array.prototype.mysome = function (fn) {
  // 判断传入的fn是否为一个函数
  if (typeof fn !== "function") {
    throw new TypeError(`error: ${fn} is not a function`);
  }
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      // 判断。如果有一项满足就返回true
      return true;
    }
  }
  // 一项满足的都没有
  return false;
};
