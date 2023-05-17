/* 0：代理被创建，但尚未调用 open() 方法。
   1：open() 方法已经被调用。
   2：send() 方法已经被调用，并且头部和状态已经可获得。
   3：下载中；responseText 属性已经包含部分数据。
   4：下载操作已完成。（响应数据已经下载完成能使用的意思） */

// 一、XMLHttpRequest版

function ajax(method, url, success, fail) {
  // 初始化一个 XMLHttpRequest 实例对象
  const xhr = new XMLHttpRequest();
  // 初始化一个请求。true表示异步执行操作（默认为true）
  xhr.open(method, url, true);
  // 当 readyState 属性发生变化时，要做什么
  xhr.onreadystatechange = function () {
    if (xhr.readystate === 4) {
      // 304 表示资源未被修改
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        success(xhr);
      } else {
        fail(xhr);
      }
    }
  };
}

// 二、XMLHttpRequest + Promise
function ajax1(method, url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          // xhr.responseText返回一个 DOMString(纯文本的值),
          resolve(JSON.parse(xhr.responseText));
          // 404 资源未找到   500服务器错误
        } else if (xhr.status === 404 || xhr.status === 500) {
          reject(new Error("404 not found"));
        }
      }
    };
  });
  return p;
}

/* 使用：

ajax1('GET',url)
.then(res => console.log(res))
.catch(err => log(err))

*/
