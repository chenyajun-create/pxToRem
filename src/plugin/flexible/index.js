/* 这里我们利用了一个自执行函数 */
/* eslint-disable */
;(function () {
  changeSize()
  function changeSize() {
    //html的 font-size 的大小尺寸
    //这里的html字体大小利用了一个简单的数学公式，当我们默认设置以屏幕375px位基准此时的字体大小为10px(375    10px),
    //那么浏览器窗口大小改变的时候新的html的fontSize（clientWidth  新的值）就是clientWidth*10/375
    document.documentElement.style.fontSize = (document.documentElement.clientWidth * 10) / 375 + 'px'
  }
  /* 监听窗口大小发生改变时*/
  window.addEventListener('resize', changeSize, false)
  // 当一条会话历史记录被执行的时候将会触发页面显示 (pageshow) 事件。(这包括了后退/前进按钮操作，同时也会在 onload 事件触发后初始化页面时触发)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      changeSize()
    }
  })
})()
