/*
对象的深拷贝
 */

/* 方法一 JSON转字符串版 */
function JSONDeepClone(target) {
  // 使用目标对象生成JSON 字符串
  // 然后将生成的JSON 字符串解析 生成一个新的对象
  // 弊端: ① 无法拷贝函数方法
  //       ② 对于循环引用的数据 拷贝时会报错 无法解析
  return JSON.parse(JSON.stringify(target));
}
