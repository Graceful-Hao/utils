/*  根据已有的字符串，写一个function将其转换成驼峰表示法
    如已有字符串"get-element-by-id"，需要将其转换为"getElementById"
*/

function stringToHump(str) {
  // str.split(’-’) 对字符串根据特定的切割方式进行切割，返回的是数组类型的数据[“get”, “element”, “by”, “id”]
  let arr = str.split("-");
  for (let i = 1; i < arr.length; i++) {
    // 从数组的第二项开始，每一项的第一个字母变为大写，并截取第一个字母之后的所有字母，组成一个新的字符串
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length);
  }
  // 将数组按特定的方式拼接成字符串（返回的是字符串类型）
  return arr.join("");
}
