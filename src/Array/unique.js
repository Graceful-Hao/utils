/* 方法一  forEach + includes/indexOf */

function unique(arr) {
  // 定义一个结果数组
  let result = [];
  // 遍历原数组,得到数组的每一项(item)
  arr.forEach((item) => {
    //如果result里不存在该item项，则push进去
    // if(result.indexOf(item) === -1) {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

/*
 *方法二 利用集合Set
 **/
function unique1(arr) {
  // Set 对象允许你存储任何类型的 唯一值
  let s = new Set(arr);
  // 此时s 是一个类数组对象，Array.from使其变为数组
  let result = Array.from(s);
  return result;
}
