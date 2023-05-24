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
    const q = callback[type];
    if (q && q.length > 0) {
      q.forEach((fn) => fn(data));
    }
  },
  // 取消订阅
  off: (type, fn) => {
    const q = callback[type];
    if (q && q.length > 0) {
      const index = q.indexOf(fn);
      if (index < 0) {
        return;
      }
      q.splice(index, 1);
    }
  },
};
