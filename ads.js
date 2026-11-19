// ============================================================
//  GOOGLE ADSENSE — one small, non-disturbing banner.
//
//  HOW TO TURN IT ON (2 lines, nothing else to change):
//  1. Get approved at https://www.google.com/adsense/
//     (add amhantone.me as your site, Google reviews it).
//  2. Put your publisher ID below, e.g. "ca-pub-1234567890123456"
//  3. In AdSense, create ONE "Display" ad unit and put its
//     data-ad-slot number below.
//
//  Until both are filled in, this file does NOTHING — no script
//  loads, no empty box shows, the page looks exactly as before.
//
//  Design rules (do not break these):
//  - ONE banner only, in normal page flow, below the intro.
//  - Never sticky, never floating, never a pop-up / overlay.
//  - If Google has no ad to show, the slot collapses to nothing.
// ============================================================
var ADSENSE_CLIENT = ""; // e.g. "ca-pub-XXXXXXXXXXXXXXXX"
var ADSENSE_SLOT = "";   // e.g. "1234567890"

(function () {
  if (!ADSENSE_CLIENT || !ADSENSE_SLOT) return; // ads off — stay invisible
  var host = document.getElementById("ad-slot");
  if (!host) return;

  var label = document.createElement("p");
  label.className = "ad-label";
  label.textContent = "Ad / 広告";
  host.appendChild(label);

  var ins = document.createElement("ins");
  ins.className = "adsbygoogle ad-banner";
  ins.setAttribute("data-ad-client", ADSENSE_CLIENT);
  ins.setAttribute("data-ad-slot", ADSENSE_SLOT);
  ins.setAttribute("data-ad-format", "horizontal");
  ins.setAttribute("data-full-width-responsive", "true");
  host.appendChild(ins);
  host.hidden = false;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
    encodeURIComponent(ADSENSE_CLIENT);
  s.crossOrigin = "anonymous";
  document.head.appendChild(s);
  (window.adsbygoogle = window.adsbygoogle || []).push({});
})();
