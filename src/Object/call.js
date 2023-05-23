function call(fn, obj, ...args) {
  // 相当于obj === null || obj ===undefined
  if (obj == null) {
    // es11 新出的 globalThis 指向当前全局对象
    obj = globalThis;
  }
  // 在对象obj中使用一个临时属性接收传进来的Fn
  obj.temp = fn;
  // 根据函数this指向问题 谁调用就指向谁
  let result = obj.temp(...args);
  // delete 运算符用于删除对象的一个属性
  delete obj.temp;
  // 返回执行结果
  return result;
}
