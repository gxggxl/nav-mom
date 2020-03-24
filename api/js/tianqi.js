(function(T, h, i, n, k, P, a, g, e) {
  g = function() {
    P = h.createElement(i);
    a = h.getElementsByTagName(i)[0];
    P.src = k;
    P.charset = "utf-8";
    P.async = 1;
    a.parentNode.insertBefore(P, a);
  };
  T["ThinkPageWeatherWidgetObject"] = n;
  T[n] ||
    (T[n] = function() {
      (T[n].q = T[n].q || []).push(arguments);
    });
  T[n].l = +new Date();
  if (T.attachEvent) {
    T.attachEvent("onload", g);
  } else {
    T.addEventListener("load", g, false);
  }
})(
  window,
  document,
  "script",
  "tpwidget",
  "//widget.seniverse.com/widget/chameleon.js"
);

tpwidget("init", {
  flavor: "slim",
  location: "WX4FBXXFKE4F",
  geolocation: "enabled",
  language: "auto",
  unit: "c",
  theme: "black",
  container: "tp-weather-widget",
  bubble: "enabled",
  alarmType: "badge",
  color: "#00AFDB",
  uid: "UB7BEE62D3",
  hash: "3600ce1f732c2aa637f35517da5f7081"
});
tpwidget("show");
