/* 要点：
知道 all 的参数（Promise 数组）和返回值（新 Promise 对象）
知道用数组来记录结果
知道只要有一个 reject 就整体 reject */

Promise.myAll = function (list) {
  // 定义一个数组用来存放每一个成功的promise的结果
  const results = [];
  // 用来计数
  const count = 0;
  return new Promise((resolve, reject) => {
    list.forEach((promise, index) => {
      promise.then(
        (r) => {
          results[index] = r;
          count += 1;
          // 判断所有promise是否都成功执行
          if (count === list.length) {
            resolve(results);
          }
        },
        // 只要有一个promise失败，则执行reject
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};
