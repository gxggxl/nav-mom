/*
 * @Author       : gxggxl
 * @E-mail       : gxggxl@qq.com
 * @Date         : 2020-03-27 13:07:11
 * @LastEditTime : 2020-07-21 22:09:21
 * @FilePath     : /nav-page/js/c.js
 */ 
if ("addEventListener" in window) {
  window.addEventListener("load", function() {
    document.body.className = document.body.className.replace(
      /\bis-loading\b/,
      ""
    );
  });
  document.body.className += navigator.userAgent.match(/(MSIE|rv:11\.0)/)
    ? " is-ie"
    : "";
}
