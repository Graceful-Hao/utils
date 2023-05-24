// 模仿jQuery

class jQuery {
  constructor(selector) {
    // 获取dom
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
    this.selector = selector;
  }
  // 获取dom
  get(index) {
    return this[index];
  }
  // 遍历dom
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }
  // 绑定事件
  on(type, fn) {
    return this.each((elem) => {
      // 捕获（true）：从启动事件的元素节点开始，逐层往下传递（类似向下捕获东西）
      // 冒泡（false）：逐层向上依序被触发（类似浮起来的气泡）
      elem.addEventListener(type, fn, false);
    });
  }
}

// 生成实例使用

// const $p = new jQuery("p");
// $p.get(1);
// $p.each((elem) => {console.log(elem)});
// $p.on("click", () => alert("clicked"));
