function find(arr, callback) {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 将每一项进行函数处理 得到返回值
    let res = callback(arr[i], i);
    // 判断返回值是否符合 如果符合函数处理的结果的话 就将当前的项返回
    if (res) {
      return arr[i];
    }
  }
  // 若都不符合函数处理的结果的话 就返回undefined
  return undefined;
}
