(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init", "discovery-call", { origin: "https://cal.com" });
    Cal.ns["discovery-call"]("inline", {
      elementOrSelector: "#cal-inline",
      config: { layout: "month_view" },
      calLink: "ryan-mcnally-7zm1zu/discovery-call",
    });
    Cal.ns["discovery-call"]("ui", {
      theme: "dark",
      cssVarsPerTheme: { dark: { "cal-brand": "#C9A84C" }, light: { "cal-brand": "#C9A84C" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });

(function(){
      var items = document.querySelectorAll('.agenda li');
      if (!items.length || !('IntersectionObserver' in window)) return;
      var list = Array.prototype.slice.call(items);
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (!entry.isIntersecting) return;
          var idx = list.indexOf(entry.target);
          setTimeout(function(){ entry.target.classList.add('in-view'); }, idx * 100);
          io.unobserve(entry.target);
        });
      }, { threshold: 0.4 });
      list.forEach(function(item){ io.observe(item); });
    })();

(function(){
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (window.matchMedia('(pointer: coarse)').matches) return;
      var root = document.documentElement;
      var max = 10;
      window.addEventListener('mousemove', function(e){
        var px = (e.clientX / window.innerWidth - 0.5) * max * 2;
        var py = (e.clientY / window.innerHeight - 0.5) * max * 2;
        root.style.setProperty('--px', px.toFixed(1) + 'px');
        root.style.setProperty('--py', py.toFixed(1) + 'px');
      }, { passive: true });
    })();