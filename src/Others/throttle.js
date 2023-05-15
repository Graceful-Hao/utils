// throttle vt.掐死;使窒息;勒死  n.节流阀;节流杆;风门;风门杆
// 取决于事件的第一次发生
//（像游戏中英雄的技能，一段时间内只能执行一次）

function throttle(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer !== null) {
      return;
    }
    timer = setTimeout(() => {
      fn.call(this, ...args);
      timer = null;
    }, delay);
  };
}

// div1.addEventListener("drag", throttle(function () {
//     console.log('hi');
// }, 200));
