/*
 * 方法一  递归处理
 * */
let arr = [1, 2, [3, 4, [5, 6]]];

function flatten1(arr) {
  //定义一个结果函数
  let result = [];
  // 遍历整个数组
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      // 判断若当前项为数组的话 则需要递归处理
      result.push(...flatten1(item));
    } else {
      // 若不是数组 则可以直接push入新数组中
      result.push(item);
    }
  });
  // 最后记得将结果返回
  return result;
}
console.log(flatten1(arr)); // [1, 2, 3, 4, 5, 6]

/*
 * 方法一  利用some + concat方法
 * */
function flatten2(arr) {
  let result = [...arr];
  while (result.some((item) => Array.isArray(item))) {
    // concat() 方法用于将值连接到数组 每次连接都会去掉一层[]
    result = [].concat(...result);
  }
  return result;
}
