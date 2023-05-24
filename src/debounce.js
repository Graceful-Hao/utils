// debounce  去抖动;防反跳;弹跳;防抖动
// 取决于事件的最后一次发生
//（像游戏中的回城，打断了只能重新开始，重新计时，直到回去）

function debounce(fn, delay) {
  // 定义一个定时器存储变量
  let timer = null;
  // 返回值必定是一个函数
  return function (...args) {
    // 如果timer不为null,则说明之前已经有了一个定时器正在执行，那么此时需将其清空
    if (timer !== null) {
      clearTimeout(timer);
    }
    // 开启定时器并将其存入定时器变量中
    timer = setTimeout(() => {
      // 调用函数，并将this指向事件源
      fn.call(this, ...args);
      // 调用完成清空此次定时器变量
      timer = null;
    }, delay);
  };
}

// div1.addEventListener("drag", debounce(function () {
//     console.log('hi');
// }, 200));
