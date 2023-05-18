// 必须使用function，不能使用箭头函数，this指向调用的数组
Array.prototype.every = function (fn) {
  // 判断传入的fn是否为一个函数
  if (typeof fn !== "function") {
    throw new TypeError(`error: ${fn} is not a function`);
  }
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i])) {
      // 判断。如果有一项不满足就返回false
      return false;
    }
  }
  // 都满足则返回true
  return true;
};
