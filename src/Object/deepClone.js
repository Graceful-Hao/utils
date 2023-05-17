/* 
*
方法一 JSON转字符串版 
*/

function JSONDeepClone(target) {
  // 使用目标对象生成JSON 字符串
  // 然后将生成的JSON 字符串解析 生成一个新的对象
  return JSON.parse(JSON.stringify(target));
}
// 弊端:
// 1、不支持 Date、正则(RegExp)、undefined、函数等数据
// 2、不支持循环引用（即环状结构）

/* 
*
方法二 用递归（简单版，支持Array、Object） 
*/
function deepClone(target) {
  // typeof target == null 相当于 typeof target === null || typeof target === undefined
  // target不是对象和数组，或者是null,直接返回
  if (typeof target !== "object" || typeof target == null) {
    return target;
  }
  // 使用Array.isArray()判断当前的target 为数组还是对象 根据此来创建一个容器
  let result = Array.isArray(target) ? [] : {};
  // for-in可以循环对象和数组
  for (let key in target) {
    // 判断当前属性是否为对象本身的属性(不能拷贝原型上的属性)
    if (target.hasOwnproperty(key)) {
      // 递归调用  若是target[ket]是基本数据类型时 则会走第一个if 直接将值返回
      // 如果是引用数据类型时 会递归再次遍历
      result[key] = deepClone(target[key]);
    }
  }
  return result;
}

/* 
*
方法三、递归（复杂版，支持循环引用、RegExp、Datede 类型） 
*/
function deepClone1(target, map = new Map()) {
  // Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。
  // 利用Map的特性 将递归遍历过的值存入map中做缓存
  // 判断如果缓存中有的话  则不用继续递归 直接将值返回即可
  if (map.get(target)) {
    return map.get(target);
  }
  // instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
  if (target instanceof Object) {
    let result;
    if (target instanceof Array) {
      result = [];
    } else if (target instanceof Date) {
      result = new Date(target);
    } else if (target instanceof RegExp) {
      result = new RegExp(target.source, target.flags);
    } else if (target instanceof Function) {
      if (a.prototype) {
        // 有 prototype 就是普通函数
        result = function () {
          return a.apply(this, arguments);
        };
      } else {
        result = (...args) => {
          return a.call(undefined, ...args);
        };
      }
    } else {
      result = {};
    }
    // 做缓存
    map.set(target, result);
    for (let key in target) {
      // 判断当前属性是否为对象本身的属性(不能拷贝原型上的属性)
      if (target.hasOwnproperty(key)) {
        // 递归调用  若是target[ket]是基本数据类型时 则会走第一个if 直接将值返回
        // 如果是引用数据类型时 会递归再次遍历
        result[key] = deepClone(target[key], map);
      }
    }
  } else {
    return target;
  }
}
