// 方法一

const eventBus = {
  // 用来存放 订阅 和 发布的关系的
  callback: {
    // click:[f1, f2]
  },
  // 事件订阅
  on: (type, fn) => {
    callback[type] = callback[type] || [];
    callback[type].push(fn);
  },
  // 事件发布
  emit: (type, data) => {
    const fnList = callback[type];
    if (fnList && fnList.length > 0) {
      fnList.forEach((fn) => fn(data));
    }
  },
  // 取消订阅
  off: (type, fn) => {
    const fnList = callback[type];
    if (fnList && fnList.length > 0) {
      const index = fnList.indexOf(fn);
      if (index < 0) {
        return;
      }
      fnList.splice(index, 1);
    }
  },
};

/* 
  eventHub.on("click", console.log);
  eventHub.on("click", console.error);
  
  setTimeout(() => {
    eventHub.emit("click", "frank");
  }, 3000); */

// 方法二 用class实现

class EventBus {
  constructor() {
    this.callback = {};
  }
  // 事件订阅
  on(type, fn) {
    this.callback[type] = this.callback[type] || [];
    this.callback[type].push(fn);
  }
  // 事件发布
  emit(type, data) {
    const fnList = this.callback[type];
    if (fnList && fnList.length > 0) {
      fnList.forEach((fn) => fn(data));
    }
  }
  // 取消订阅
  off(type, fn) {
    const fnList = this.callback[type];
    if (fnList && fnList.length > 0) {
      const index = fnList.indexOf(fn);
      if (index < 0) {
        return;
      }
      fnList.splice(index, 1);
    }
  }
}
