/**
 * WinBox.js v0.2.0 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
(function () {
  "use strict";
  var e,
    h = document.createElement("style");
  h.innerHTML =
    "@keyframes fade-in{0%{opacity:0}to{opacity:.85}}.winbox.modal:after,.winbox.modal:before{content:''}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,transform .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);will-change:transform,width,height;contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.max,.no-shadow{box-shadow:none}.wb-header{top:0;width:100%;height:35px;color:#fff;overflow:hidden}.wb-body{right:0;top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict}.wb-title{font-family:Arial,sans-serif;font-size:14px;padding-left:10px;cursor:move;height:35px;line-height:35px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-n,.wb-s{height:10px;position:absolute;left:0}.wb-n{top:-5px;right:0;cursor:n-resize}.wb-e{position:absolute;top:0;right:-5px;bottom:0;width:10px;cursor:w-resize}.wb-s,.wb-se,.wb-sw{bottom:-5px}.wb-s{right:0;cursor:n-resize}.wb-w{position:absolute;top:0;left:-5px;bottom:0;width:10px;cursor:w-resize}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;position:absolute}.wb-nw{top:-5px;left:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-sw{left:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize}.wb-icon{float:right;height:35px;max-width:100%;text-align:center}.wb-icon *{display:inline-block;width:30px;height:100%;background-position:center;background-repeat:no-repeat;cursor:pointer;max-width:100%}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-title,.winbox.min .wb-title{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center bottom 11px}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-title,body.wb-drag iframe{pointer-events:none}.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}.no-animation,body.wb-drag .winbox{transition:none}.winbox.modal:before{position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{position:absolute;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:#0d1117;animation:fade-in .2s ease-out forwards;z-index:-1}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}";
  var k = document.getElementsByTagName("head")[0];
  k.firstChild ? k.insertBefore(h, k.firstChild) : k.appendChild(h);
  var l = document.createElement("div");
  l.innerHTML =
    "<div class=wb-header><div class=wb-icon><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-title> </div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
  function m(a, b, c, g) {
    a.addEventListener(b, c, g || !1 === g ? g : !0);
  }
  function p(a) {
    a.stopPropagation();
    a.cancelable && a.preventDefault();
  }
  function t(a, b, c) {
    c = "" + c;
    a["_s_" + b] !== c && (a.style.setProperty(b, c), (a["_s_" + b] = c));
  }
  var w = [],
    x,
    B = 0,
    C = 0,
    D,
    E,
    H,
    I,
    N,
    P,
    Q;
  function S(a, b) {
    if (!(this instanceof S)) return new S(a);
    D || T();
    this.g = l.cloneNode(!0);
    this.body = this.g.getElementsByClassName("wb-body")[0];
    var c, g;
    if (a) {
      if (b) {
        var f = a;
        a = b;
      }
      if ("string" === typeof a) f = a;
      else {
        if ((g = a.modal)) var u = (c = "center");
        var y = a.id;
        var J = a.root;
        f = f || a.title;
        var F = a.mount;
        var d = a.html;
        var z = a.url;
        var n = a.width;
        var q = a.height;
        var v = a.minwidth;
        var A = a.minheight;
        u = a.x || u;
        c = a.y || c;
        var K = a.max;
        var r = a.top;
        var G = a.left;
        var L = a.bottom;
        var M = a.right;
        D = a.index || D;
        var Z = a.onclose;
        var aa = a.onfocus;
        var ba = a.onblur;
        var ca = a.onmove;
        var da = a.onresize;
        b = a.background;
        var R = a.border;
        var O = a["class"];
        var ea = a.splitscreen;
        b && this.setBackground(b);
        R && t(this.body, "margin", R + (isNaN(R) ? "" : "px"));
      }
    }
    this.setTitle(f || "");
    a = P;
    f = Q;
    r = r ? U(r, f) : 0;
    L = L ? U(L, f) : 0;
    G = G ? U(G, a) : 0;
    M = M ? U(M, a) : 0;
    a -= G + M;
    f -= r + L;
    n = n ? U(n, a) : (a / 2) | 0;
    q = q ? U(q, f) : (f / 2) | 0;
    v = v ? U(v, a) : 0;
    A = A ? U(A, f) : 0;
    u = u ? U(u, a, n) : G;
    c = c ? U(c, f, q) : r;
    D = D || 10;
    this.g.id = this.id = y || "winbox-" + ++B;
    this.g.className =
      "winbox" +
      (O ? " " + ("string" === typeof O ? O : O.join(" ")) : "") +
      (g ? " modal" : "");
    this.x = u;
    this.y = c;
    this.width = n;
    this.height = q;
    this.u = v;
    this.s = A;
    this.top = r;
    this.right = M;
    this.bottom = L;
    this.left = G;
    this.max = this.min = !1;
    this.j = Z;
    this.l = aa;
    this.i = ba;
    this.o = ca;
    this.m = da;
    this.v = ea;
    K ? this.maximize() : this.move().resize();
    this.focus();
    F ? this.mount(F) : d ? (this.body.innerHTML = d) : z && this.setUrl(z);
    fa(this);
    (J || x).appendChild(this.g);
  }
  S["new"] = function (a) {
    return new S(a);
  };
  function U(a, b, c) {
    "string" === typeof a &&
      ("center" === a
        ? (a = ((b - c) / 2) | 0)
        : "right" === a || "bottom" === a
        ? (a = b - c)
        : ((c = parseFloat(a)),
          (a =
            "%" === ("" + c !== a && a.substring(("" + c).length))
              ? ((b / 100) * c) | 0
              : c)));
    return a;
  }
  function T() {
    x = document.body;
    x[(I = "requestFullscreen")] ||
      x[(I = "msRequestFullscreen")] ||
      x[(I = "webkitRequestFullscreen")] ||
      x[(I = "mozRequestFullscreen")] ||
      (I = "");
    N =
      I &&
      I.replace("request", "exit")
        .replace("mozRequest", "mozCancel")
        .replace("Request", "Exit");
    m(window, "resize", function () {
      P = x.clientWidth;
      Q = x.clientHeight;
      V();
    });
    P = x.clientWidth;
    Q = x.clientHeight;
  }
  function fa(a) {
    W(a, "title");
    W(a, "n");
    W(a, "s");
    W(a, "w");
    W(a, "e");
    W(a, "nw");
    W(a, "ne");
    W(a, "se");
    W(a, "sw");
    m(a.g.getElementsByClassName("wb-min")[0], "click", function (b) {
      p(b);
      a.minimize();
    });
    m(a.g.getElementsByClassName("wb-max")[0], "click", function (b) {
      p(b);
      a.focus().maximize();
    });
    I
      ? m(a.g.getElementsByClassName("wb-full")[0], "click", function (b) {
          p(b);
          a.focus().fullscreen();
        })
      : a.addClass("no-full");
    m(a.g.getElementsByClassName("wb-close")[0], "click", function (b) {
      p(b);
      a.close() || (a = null);
    });
    m(
      a.g,
      "click",
      function () {
        a.focus();
      },
      !1
    );
  }
  function X(a) {
    w.splice(w.indexOf(a), 1);
    V();
    a.removeClass("min");
    a.min = !1;
    a.g.title = "";
  }
  function V() {
    for (var a = w.length, b = 0, c, g; b < a; b++)
      (c = w[b]),
        (g = Math.min((P - 2 * c.left) / a, 250)),
        c
          .resize((g + 1) | 0, 35, !0)
          .move((c.left + b * g) | 0, Q - c.bottom - 35, !0);
  }
  function W(a, b) {
    function c(d) {
      p(d);
      if (a.min) a.minimize();
      else {
        if ("title" === b) {
          var z = Date.now(),
            n = z - C;
          C = z;
          if (250 > n) {
            a.maximize();
            return;
          }
        }
        a.max ||
          (x.classList.add("wb-drag"),
          (y = d.touches) && (y = y[0])
            ? ((d = y), m(window, "touchmove", g), m(window, "touchend", f))
            : (m(window, "mousemove", g), m(window, "mouseup", f)),
          (J = d.pageX),
          (F = d.pageY),
          a.focus());
      }
    }
    function g(d) {
      p(d);
      y && (d = d.touches[0]);
      var z = d.pageX;
      d = d.pageY;
      var n = z - J,
        q = d - F,
        v;
      if ("title" === b) {
        a.x += n;
        a.y += q;
        var A = (v = 1);
      } else {
        if ("e" === b || "se" === b || "ne" === b) {
          a.width += n;
          var K = 1;
        } else if ("w" === b || "sw" === b || "nw" === b)
          (a.x += n), (a.width -= n), (A = K = 1);
        if ("s" === b || "se" === b || "sw" === b) {
          a.height += q;
          var r = 1;
        } else if ("n" === b || "ne" === b || "nw" === b)
          (a.y += q), (a.height -= q), (v = r = 1);
      }
      if (K || r)
        K && (a.width = Math.max(Math.min(a.width, P - a.x - a.right), 150)),
          r &&
            (a.height = Math.max(Math.min(a.height, Q - a.y - a.bottom), 35)),
          a.resize();
      if (A || v)
        A && (a.x = Math.max(Math.min(a.x, P - a.width - a.right), a.left)),
          v && (a.y = Math.max(Math.min(a.y, Q - a.height - a.bottom), a.top)),
          a.move();
      J = z;
      F = d;
    }
    function f(d) {
      p(d);
      x.classList.remove("wb-drag");
      y
        ? (window.removeEventListener("touchmove", g, !0),
          window.removeEventListener("touchend", f, !0))
        : (window.removeEventListener("mousemove", g, !0),
          window.removeEventListener("mouseup", f, !0));
    }
    var u = a.g.getElementsByClassName("wb-" + b)[0],
      y,
      J,
      F;
    m(u, "mousedown", c);
    m(u, "touchstart", c, { passive: !1 });
  }
  e = S.prototype;
  e.mount = function (a) {
    this.unmount();
    a.h || (a.h = a.parentNode);
    this.body.textContent = "";
    this.body.appendChild(a);
    return this;
  };
  e.unmount = function (a) {
    var b = this.body.firstChild;
    if (b) {
      var c = a || b.h;
      c && c.appendChild(b);
      b.h = a;
    }
    return this;
  };
  e.setTitle = function (a) {
    a = this.title = a;
    this.g.getElementsByClassName("wb-title")[0].firstChild.nodeValue = a;
    return this;
  };
  e.setBackground = function (a) {
    t(this.g, "background", a);
    return this;
  };
  e.setUrl = function (a) {
    this.body.innerHTML = '<iframe src="' + a + '"></iframe>';
    return this;
  };
  e.focus = function () {
    H !== this &&
      (t(this.g, "z-index", D++),
      this.addClass("focus"),
      H && (H.removeClass("focus"), H.i && H.i()),
      (H = this),
      this.l && this.l());
    return this;
  };
  e.hide = function () {
    return this.addClass("hide");
  };
  e.show = function () {
    return this.removeClass("hide");
  };
  e.minimize = function (a) {
    E && Y();
    !a && this.min
      ? (X(this), this.resize().move().focus())
      : !1 === a ||
        this.min ||
        (w.push(this),
        V(),
        (this.g.title = this.title),
        this.addClass("min"),
        (this.min = !0));
    this.max && (this.removeClass("max"), (this.max = !1));
    return this;
  };
  e.maximize = function (a) {
    if ("undefined" === typeof a || a !== this.max)
      this.min && X(this),
        (this.max = !this.max)
          ? this.addClass("max")
              .resize(
                P - this.left - this.right,
                Q - this.top - this.bottom,
                !0
              )
              .move(this.left, this.top, !0)
          : this.resize().move().removeClass("max");
    return this;
  };
  e.fullscreen = function (a) {
    if ("undefined" === typeof a || a !== E)
      this.min && (this.resize().move(), X(this)),
        (E && Y()) || (this.body[I](), (E = !0));
    return this;
  };
  function Y() {
    E = !1;
    if (
      document.fullscreen ||
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement
    )
      return document[N](), !0;
  }
  e.close = function (a) {
    if (this.j && this.j(a)) return !0;
    this.min && X(this);
    this.unmount();
    this.g.parentNode.removeChild(this.g);
    H === this && (H = null);
  };
  e.move = function (a, b, c) {
    a || 0 === a
      ? c ||
        ((this.x = a ? (a = U(a, P - this.left - this.right, this.width)) : 0),
        (this.y = b ? (b = U(b, Q - this.top - this.bottom, this.height)) : 0))
      : ((a = this.x),
        (b = this.y),
        this.v &&
          (0 === a
            ? this.resize(P / 2, Q)
            : a === P - this.width && this.resize(P / 2, Q)));
    t(this.g, "transform", "translate(" + a + "px," + b + "px)");
    this.o && this.o(a, b);
    return this;
  };
  e.resize = function (a, b, c) {
    a || 0 === a
      ? c ||
        ((this.width = a ? (a = U(a, P - this.left - this.right)) : 0),
        (this.height = b ? (b = U(b, Q - this.top - this.bottom)) : 0))
      : ((a = this.width), (b = this.height));
    a = Math.max(a, this.u);
    b = Math.max(b, this.s);
    t(this.g, "width", a + "px");
    t(this.g, "height", b + "px");
    this.m && this.m(a, b);
    return this;
  };
  e.addClass = function (a) {
    this.g.classList.add(a);
    return this;
  };
  e.removeClass = function (a) {
    this.g.classList.remove(a);
    return this;
  };
  window.WinBox = S;
}.call(this));
