// throttle vt.掐死;使窒息;勒死  n.节流阀;节流杆;风门;风门杆
// 取决于事件的第一次发生
//（像游戏中英雄的技能，一段时间内只能执行一次）

function throttle(fn, delay) {
  // 定义一个定时器存储变量
  let timer = null;
  return function (...args) {
    // 如果timer不为null,则说明之前已经有了一个定时器正在执行，那么此时需等待该定时器执行完毕，直接return
    if (timer !== null) {
      return;
    }
    //若无正在执行的定时器 则开启定时器并将其存入定时器变量中
    timer = setTimeout(() => {
      // 调用函数，并将this指向事件源
      fn.call(this, ...args);
      // 调用完成清空此次定时器变量
      timer = null;
    }, delay);
  };
}

// div1.addEventListener("drag", throttle(function () {
//     console.log('hi');
// }, 200));
