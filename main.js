const Shield = {
  init() {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    console.log(
      "%c [!] KERNEL_WATCH: UNAUTHORIZED INSPECTION DISCOURAGED",
      "color: #ff4444; font-family: monospace; font-size: 16px; font-weight: bold;",
    );
    console.log("Portfolio assets protected. Inquiries: ali@ali-habashi.com");
  },
};

AOS.init({
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 0,
  once: false,
  mirror: true,
  duration: 900,
  anchorPlacement: "top-bottom",
  easing: "ease-out-quad",
});

const SKILL_DATA = [
  { name: "Systems Programming", tool: "C++, Assembly, Zig" },
  { name: "Low-Level & Arch", tool: "x86_64/ARM, SystemVerilog, QEMU" },
  { name: "Software Security", tool: "Ghidra, IDA Pro, Binary Ninja" },
  { name: "Exploit Development", tool: "Pwntools, GDB (GEF/Pwnbg)" },
  { name: "Artificial Intelligence", tool: "PyTorch, JAX, Synaptic AI" },
  { name: "Backend & Cloud", tool: "Go, Node.js, Kubernetes" },
  { name: "Formal Methods", tool: "SAT/SMT (Z3), Coq, TLA+" },
  { name: "Full-Stack Dev", tool: "C (WASM), React, WebKit" },
  { name: "Kernel Engineering", tool: "eBPF, LKM, XDP, KVM" },
  { name: "Applied Cryptography", tool: "SageMath, ZK-Snarks, OpenSSL" },
];

const RESEARCH_DATA = [
  "High Performance C++20 Async HTTP Server",
  "Heuristic Android Anti-Banning Scripts",
  "eBPF/XDP State Machine DDoS attacks",
  "encrypted Malware app injecting",
  "UnrealEngine Reverse Engineering",
  "obfuscation & anti debugging code",
  "Instagram Private Auto Scripts",
  "Formal Verification of Cryptosystems via Z3",
  "Side Channel Power Analysis on AES128",
  "OCR/Ai Driven Tax Handler",
];

const BIO_LINES = [
  "I'm 20 years old",
  "Technion CS & Mathematics student",
  "Full Stack Developer",
  "Cyber Lover",
  "Low-level programming enthusiast",
];

const SPIRAL_TEXT = "Ali Habashi";
const ANIMATION_MS = 4000;

function injectGrid(data, targetId) {
  const grid = document.getElementById(targetId);
  if (!grid) return;
  const safeAnimations = ["fade-up","fade-down","zoom-in","fade-right","fade-left"];
  data.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "logo-item";
    const randomAnim = safeAnimations[Math.floor(Math.random() * safeAnimations.length)];
    el.setAttribute("data-aos", randomAnim);
    el.setAttribute("data-aos-delay", (i % 5) * 50);
    if (targetId === "research-grid") {
      if ([2, 3, 4, 6].includes(i)) el.classList.add("alert");
      el.innerHTML = `<span class="status-dot"></span>${item}`;
    } else {
      el.innerText = item.name;
      el.setAttribute("data-tool", `tools: ${item.tool}`);
    }
    grid.appendChild(el);
  });
}

function runSpiralAnimation(id, text, shift = 0) {
  const container = document.getElementById(id);
  if (!container) return;
  text.split("").forEach((char, i) => {
    const span = document.createElement("div");
    span.innerText = char;
    span.className = "spiral-char";
    container.appendChild(span);
    const delay = -i * (ANIMATION_MS / text.length) - shift;
    function animate(time) {
      const adjusted = time - delay;
      if (adjusted < 0) return requestAnimationFrame(animate);
      const progress = (adjusted / ANIMATION_MS) % 1;
      const rad = progress * 2 * Math.PI;
      const y = Math.sin(rad) * 100;
      const scale = Math.cos(rad) * 0.5 + 0.5;
      span.style.transform = `translateY(${y}px) scale(${scale})`;
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  });
}

function startTypewriter() {
  const output = document.querySelector(".typing-target");
  if (!output) return;
  let lineIdx = 0, charIdx = 0, deleting = false;
  function step() {
    const line = BIO_LINES[lineIdx];
    if (!deleting) {
      output.textContent = line.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === line.length) { deleting = true; setTimeout(step, 2000); }
      else setTimeout(step, 60);
    } else {
      output.textContent = line.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) { deleting = false; lineIdx = (lineIdx + 1) % BIO_LINES.length; setTimeout(step, 500); }
      else setTimeout(step, 40);
    }
  }
  step();
}

function startHexStream() {
  const overlay = document.getElementById("hex-stream");
  if (!overlay) return;
  const hexChars = "0123456789ABCDEF";
  setInterval(() => {
    let content = "";
    for (let i = 0; i < 60; i++) {
      let line = "";
      for (let j = 0; j < 200; j++) line += hexChars[Math.floor(Math.random() * 16)];
      content += line + "\n";
    }
    overlay.innerText = content;
  }, 90);
}

function renderHeroAnimation() {
  const sentences = document.querySelectorAll(".hero-line");
  sentences.forEach((sentence, index) => {
    const text = sentence.innerText;
    const durationNum = index * 2 + 2;
    const durationStr = durationNum + "s";
    const easing = "cubic-bezier(0.4, 0.0, 0.2, 1.3)";
    sentence.innerHTML = [...text].map((char) => {
      const type = char === " " ? "space" : "letter";
      const content = char === " " ? "&nbsp;" : char;
      return `<span class="${type}">${content}</span>`;
    }).join("");
    const elements = sentence.querySelectorAll(".letter, .space");
    elements.forEach((el) => {
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 200 - 100;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.opacity = "0.1";
      el.style.transition = "none";
    });
    requestAnimationFrame(() => {
      sentence.style.animation = `growFont${index + 1} ${durationStr} forwards ${easing}`;
      elements.forEach((el) => {
        el.style.transition = `transform ${durationStr} ${easing}, opacity ${durationStr} ease-in`;
        el.style.transform = "translate(0, 0)";
        el.style.opacity = "1";
      });
    });
  });
}

// ══════════════════════════════════════════════════════════
//  DEEP VISITOR FINGERPRINTING
// ══════════════════════════════════════════════════════════

function getCanvasFingerprint() {
  try {
    const c = document.createElement("canvas");
    c.width = 280; c.height = 60;
    const ctx = c.getContext("2d");
    if (!ctx) return "unsupported";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(50, 0, 130, 60);
    ctx.fillStyle = "#069";
    ctx.font = '15px "Arial"';
    ctx.fillText("fp,\ud83d\ude03", 2, 15);
    ctx.fillStyle = "rgba(102,204,0,0.7)";
    ctx.font = "18px Times New Roman";
    ctx.fillText("fp,\ud83d\ude03", 4, 45);
    const d = c.toDataURL();
    let h = 0;
    for (let i = 0; i < d.length; i++) h = ((h << 5) - h + d.charCodeAt(i)) | 0;
    return h.toString(16);
  } catch { return "blocked"; }
}

function getWebGLInfo() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
    if (!gl) return { vendor: "N/A", renderer: "N/A" };
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    return {
      vendor: dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR),
      renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
      version: gl.getParameter(gl.VERSION),
      shadingLang: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
      maxTexture: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      maxViewport: Array.from(gl.getParameter(gl.MAX_VIEWPORT_DIMS)).join("x"),
      antialiasing: gl.getContextAttributes().antialias ? "Yes" : "No",
    };
  } catch { return { vendor: "blocked", renderer: "blocked" }; }
}

function getAudioFingerprint() {
  return new Promise((resolve) => {
    try {
      const AC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!AC) { resolve("unsupported"); return; }
      const ctx = new AC(1, 44100, 44100);
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(10000, ctx.currentTime);
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.setValueAtTime(-50, ctx.currentTime);
      comp.knee.setValueAtTime(40, ctx.currentTime);
      comp.ratio.setValueAtTime(12, ctx.currentTime);
      comp.attack.setValueAtTime(0, ctx.currentTime);
      comp.release.setValueAtTime(0.25, ctx.currentTime);
      osc.connect(comp); comp.connect(ctx.destination);
      osc.start(0);
      ctx.startRendering().then((buf) => {
        const d = buf.getChannelData(0);
        let s = 0;
        for (let i = 4500; i < 5000; i++) s += Math.abs(d[i]);
        resolve(s.toFixed(6));
      }).catch(() => resolve("error"));
      setTimeout(() => resolve("timeout"), 1500);
    } catch { resolve("blocked"); }
  });
}

async function getBatteryInfo() {
  try {
    if (!navigator.getBattery) return null;
    const b = await navigator.getBattery();
    return {
      level: Math.round(b.level * 100) + "%",
      charging: b.charging ? "Yes" : "No",
      chargingTime: b.chargingTime === Infinity ? "N/A" : b.chargingTime + "s",
      dischargingTime: b.dischargingTime === Infinity ? "N/A" : b.dischargingTime + "s",
    };
  } catch { return null; }
}

function getNetworkInfo() {
  const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!c) return null;
  return {
    effectiveType: c.effectiveType || "unknown",
    downlink: c.downlink ? c.downlink + " Mbps" : "unknown",
    rtt: c.rtt ? c.rtt + " ms" : "unknown",
    saveData: c.saveData ? "Yes" : "No",
    type: c.type || "unknown",
  };
}

function getMediaDevices() {
  return new Promise((resolve) => {
    if (!navigator.mediaDevices?.enumerateDevices) { resolve(null); return; }
    navigator.mediaDevices.enumerateDevices().then((devs) => {
      const c = { audioinput: 0, audiooutput: 0, videoinput: 0 };
      devs.forEach((d) => { if (c[d.kind] !== undefined) c[d.kind]++; });
      resolve({ microphones: c.audioinput, speakers: c.audiooutput, cameras: c.videoinput });
    }).catch(() => resolve(null));
  });
}

function getStorageEstimate() {
  if (navigator.storage?.estimate) {
    return navigator.storage.estimate().then((e) => ({
      quota: (e.quota / 1073741824).toFixed(2) + " GB",
      usage: (e.usage / 1048576).toFixed(2) + " MB",
    })).catch(() => null);
  }
  return Promise.resolve(null);
}

function detectAdBlocker() {
  return new Promise((resolve) => {
    const el = document.createElement("div");
    el.className = "adsbox ad-banner textAd banner-ad";
    el.style.cssText = "position:absolute;top:-999px;left:-999px;width:1px;height:1px;";
    el.innerHTML = "&nbsp;";
    document.body.appendChild(el);
    setTimeout(() => {
      const blocked = el.offsetHeight === 0 || el.clientHeight === 0 || getComputedStyle(el).display === "none";
      el.remove();
      resolve(blocked ? "YES" : "No");
    }, 100);
  });
}

function getWebRTCLeaks() {
  return new Promise((resolve) => {
    const ips = new Set();
    try {
      const pc = new RTCPeerConnection({ iceServers: [] });
      pc.createDataChannel("");
      pc.createOffer().then((o) => pc.setLocalDescription(o)).catch(() => {});
      pc.onicecandidate = (e) => {
        if (!e.candidate) { pc.close(); resolve([...ips]); return; }
        const parts = e.candidate.candidate.split(" ");
        const ip = parts[4];
        if (ip && ip.indexOf(".") > 0) ips.add(ip);
      };
      setTimeout(() => { pc.close(); resolve([...ips]); }, 2000);
    } catch { resolve([]); }
  });
}

function parseUserAgent(ua) {
  let deviceType = "Desktop";
  if (/Mobi|Android.*Mobile/i.test(ua)) deviceType = "Mobile";
  else if (/Tablet|iPad/i.test(ua)) deviceType = "Tablet";

  let browser = "Unknown", bv = "";
  const bTests = [
    [/Firefox\/([\d.]+)/, "Firefox"],
    [/Edg\/([\d.]+)/, "Edge"],
    [/OPR\/([\d.]+)/, "Opera"],
    [/SamsungBrowser\/([\d.]+)/, "Samsung Internet"],
    [/UCBrowser\/([\d.]+)/, "UC Browser"],
    [/Chrome\/([\d.]+)(?!.*Edg)/, "Chrome"],
    [/Version\/([\d.]+).*Safari/, "Safari"],
  ];
  for (const [r, n] of bTests) { const m = ua.match(r); if (m) { browser = n; bv = m[1] || ""; break; } }

  let os = "Unknown", ov = "";
  const oTests = [
    [/Windows NT ([\d.]+)/, "Windows", { "10.0": "10/11", "6.3": "8.1", "6.2": "8", "6.1": "7" }],
    [/Mac OS X ([\d_.]+)/, "macOS"],
    [/Android ([\d.]+)/, "Android"],
    [/iPhone OS ([\d_]+)/, "iOS"],
    [/iPad.*OS ([\d_]+)/, "iPadOS"],
    [/CrOS/, "ChromeOS"],
    [/Linux/, "Linux"],
  ];
  for (const [r, n, map] of oTests) { const m = ua.match(r); if (m) { os = n; const raw = (m[1] || "").replace(/_/g, "."); ov = map ? (map[raw] || raw) : raw; break; } }

  let model = os + " " + deviceType;
  const mTests = [
    [/iPhone/, "iPhone"], [/iPad/, "iPad"], [/Macintosh/, "Mac"],
    [/SM-([A-Z0-9]+)/i, (m) => "Samsung " + m[1]],
    [/Pixel\s?([\w ]+)/i, (m) => "Google Pixel " + m[1].trim()],
    [/(HUAWEI|VOG|ELE|CLT)-?([\w]+)?/i, (m) => "Huawei " + (m[2] || m[1])],
    [/Xiaomi|Redmi|POCO/i, "Xiaomi Device"],
    [/OnePlus/i, "OnePlus Device"],
  ];
  for (const [r, v] of mTests) { const m = ua.match(r); if (m) { model = typeof v === "function" ? v(m) : v; break; } }

  let arch = "unknown";
  if (/x86_64|x64|Win64|WOW64|amd64/i.test(ua)) arch = "x86_64";
  else if (/arm64|aarch64/i.test(ua)) arch = "ARM64";
  else if (/armv7|arm/i.test(ua)) arch = "ARMv7";
  else if (/x86|i[3-6]86/i.test(ua)) arch = "x86_32";

  return { deviceType, browser, browserVersion: bv, os, osVersion: ov, deviceModel: model, arch };
}

function detectFeatures() {
  return {
    cookiesEnabled: navigator.cookieEnabled ? "Yes" : "No",
    doNotTrack: navigator.doNotTrack || window.doNotTrack || "unset",
    globalPrivacyControl: navigator.globalPrivacyControl ? "YES" : "No",
    pdfViewer: navigator.pdfViewerEnabled ? "Yes" : "No",
    webdriver: navigator.webdriver ? "YES (bot/automation)" : "No",
    darkMode: window.matchMedia("(prefers-color-scheme: dark)").matches ? "Yes" : "No",
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "Yes" : "No",
    hdr: window.matchMedia("(dynamic-range: high)").matches ? "Yes" : "No",
    forcedColors: window.matchMedia("(forced-colors: active)").matches ? "Yes" : "No",
    touchPoints: navigator.maxTouchPoints || 0,
    bluetooth: "bluetooth" in navigator,
    usb: "usb" in navigator,
    serial: "serial" in navigator,
    hid: "hid" in navigator,
    xr: "xr" in navigator,
    webgpu: "gpu" in navigator,
    serviceWorker: "serviceWorker" in navigator,
    webRTC: "RTCPeerConnection" in window,
    webGL2: (() => { try { return !!document.createElement("canvas").getContext("webgl2"); } catch { return false; } })(),
    offscreenCanvas: "OffscreenCanvas" in window,
    wasm: "WebAssembly" in window,
    sharedArrayBuffer: "SharedArrayBuffer" in window,
    crossOriginIsolated: window.crossOriginIsolated || false,
  };
}

function getInstalledPlugins() {
  const p = [];
  if (navigator.plugins) for (let i = 0; i < Math.min(navigator.plugins.length, 20); i++) p.push(navigator.plugins[i].name);
  return p;
}

// ══════════════════════════════════════════════════════════
//  NEW FINGERPRINTING VECTORS
// ══════════════════════════════════════════════════════════

/** Font fingerprinting — detect installed fonts via width measurement */
function detectFonts() {
  const testFonts = [
    "Arial","Arial Black","Comic Sans MS","Courier New","Georgia",
    "Impact","Lucida Console","Lucida Sans Unicode","Palatino Linotype",
    "Tahoma","Times New Roman","Trebuchet MS","Verdana","Segoe UI",
    "Calibri","Cambria","Consolas","Candara","Constantia","Corbel",
    "Futura","Helvetica","Helvetica Neue","Menlo","Monaco",
    "San Francisco","Avenir","Optima","Gill Sans","Baskerville",
    "American Typewriter","Didot","Rockwell","Century Gothic",
    "Franklin Gothic Medium","Copperplate","Papyrus","Brush Script MT",
    "Ubuntu","Cantarell","Noto Sans","DejaVu Sans","Liberation Sans",
    "Droid Sans","Roboto","Fira Sans","Source Code Pro",
    "Malgun Gothic","MS Gothic","Yu Gothic","SimSun","SimHei",
    "Microsoft YaHei","Apple Color Emoji","Segoe UI Emoji",
  ];
  const baseFonts = ["monospace","sans-serif","serif"];
  const testString = "mmmmmmmmmmlli10OoWw";
  const testSize = "72px";
  const span = document.createElement("span");
  span.style.cssText = "position:absolute;top:-9999px;left:-9999px;visibility:hidden;white-space:nowrap;";
  span.textContent = testString;
  document.body.appendChild(span);
  const baseWidths = {};
  for (const base of baseFonts) {
    span.style.font = `${testSize} ${base}`;
    baseWidths[base] = span.offsetWidth;
  }
  const detected = [];
  for (const font of testFonts) {
    for (const base of baseFonts) {
      span.style.font = `${testSize} '${font}', ${base}`;
      if (span.offsetWidth !== baseWidths[base]) { detected.push(font); break; }
    }
  }
  span.remove();
  return detected;
}

/** Speech synthesis voice enumeration */
function getSpeechVoices() {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) { resolve([]); return; }
    let resolved = false;
    const finish = () => {
      if (resolved) return;
      resolved = true;
      resolve(speechSynthesis.getVoices().map(v => ({ name: v.name, lang: v.lang, local: v.localService })));
    };
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) { finish(); return; }
    speechSynthesis.onvoiceschanged = finish;
    setTimeout(finish, 1000);
  });
}

/** Math fingerprint — floating point quirks differ between JS engines */
function getMathFingerprint() {
  const tests = [
    Math.tan(-1e300), Math.cos(21 * Math.LN2), Math.sin(Math.PI / 6),
    Math.atan2(1, 2), Math.pow(Math.E, -32), Math.log(1000),
    Math.sqrt(2), Math.acos(0.5), Math.cosh(1), Math.expm1(1),
  ];
  const str = tests.map(v => v.toString()).join(",");
  let h = 0;
  for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  return { hash: h.toString(16), raw: str.substring(0, 120) };
}

/** Permission API status check */
async function getPermissionStates() {
  if (!navigator.permissions) return {};
  const perms = [
    "geolocation","notifications","camera","microphone",
    "persistent-storage","accelerometer","gyroscope","magnetometer",
    "clipboard-read","clipboard-write",
  ];
  const states = {};
  for (const p of perms) {
    try { states[p] = (await navigator.permissions.query({ name: p })).state; }
    catch { states[p] = "unsupported"; }
  }
  return states;
}

/** CSS media query probing */
function getCSSFingerprint() {
  const queries = {
    pointerFine:"(pointer: fine)", pointerCoarse:"(pointer: coarse)",
    hoverHover:"(hover: hover)", hoverNone:"(hover: none)",
    colorGamutP3:"(color-gamut: p3)", colorGamutSRGB:"(color-gamut: srgb)",
    colorGamutRec2020:"(color-gamut: rec2020)",
    invertedColors:"(inverted-colors: inverted)",
    prefersContrast:"(prefers-contrast: more)",
    anyPointerFine:"(any-pointer: fine)", anyPointerCoarse:"(any-pointer: coarse)",
    anyHoverHover:"(any-hover: hover)",
  };
  const result = {};
  for (const [key, query] of Object.entries(queries)) result[key] = window.matchMedia(query).matches;
  return result;
}

/** Intl API fingerprint */
function getIntlFingerprint() {
  try {
    const d = new Date(2024, 0, 15, 13, 45, 30);
    return {
      dateFormat: new Intl.DateTimeFormat().format(d),
      numberFormat: new Intl.NumberFormat().format(1234567.89),
      resolvedLocale: new Intl.DateTimeFormat().resolvedOptions().locale,
      calendar: new Intl.DateTimeFormat().resolvedOptions().calendar,
      numberingSystem: new Intl.DateTimeFormat().resolvedOptions().numberingSystem,
    };
  } catch { return { error: "unsupported" }; }
}

/** Detect headless / automation browsers */
function detectHeadlessBrowser() {
  const details = {
    webdriver: navigator.webdriver === true ? "true (automated)" : "false",
    plugins: (navigator.plugins && navigator.plugins.length) || 0,
    languages: (navigator.languages && navigator.languages.length) || 0,
  };
  const flags = [
    navigator.webdriver === true,
    !navigator.plugins || navigator.plugins.length === 0,
    !navigator.languages || navigator.languages.length === 0,
    /HeadlessChrome|PhantomJS|Selenium|Puppeteer|Playwright/i.test(navigator.userAgent),
  ];
  const score = flags.filter(Boolean).length;
  return { isHeadless: score >= 2, details, score };
}

/** Performance timing */
function getPerformanceTiming() {
  try {
    const nav = performance.getEntriesByType("navigation")[0];
    if (!nav) return null;
    return {
      dns: Math.round(nav.domainLookupEnd - nav.domainLookupStart) + "ms",
      tcp: Math.round(nav.connectEnd - nav.connectStart) + "ms",
      ttfb: Math.round(nav.responseStart - nav.requestStart) + "ms",
      domLoad: Math.round(nav.domContentLoadedEventEnd - nav.startTime) + "ms",
      fullLoad: Math.round(nav.loadEventEnd - nav.startTime) + "ms",
      protocol: nav.nextHopProtocol || "unknown",
    };
  } catch { return null; }
}

// ══════════════════════════════════════════════════════════
//  BEHAVIORAL ANALYTICS (passive)
// ══════════════════════════════════════════════════════════

const BehaviorTracker = {
  startTime: Date.now(),
  maxScrollDepth: 0,
  mouseDistance: 0,
  lastMouseX: null, lastMouseY: null,
  clickCount: 0, keyPressCount: 0, touchCount: 0,
  tabSwitches: 0, resizeCount: 0,
  lastActivity: Date.now(),

  init() {
    window.addEventListener("scroll", () => {
      const depth = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
      if (depth > this.maxScrollDepth) this.maxScrollDepth = depth;
    }, { passive: true });
    document.addEventListener("mousemove", (e) => {
      if (this.lastMouseX !== null) {
        this.mouseDistance += Math.hypot(e.clientX - this.lastMouseX, e.clientY - this.lastMouseY);
      }
      this.lastMouseX = e.clientX; this.lastMouseY = e.clientY;
      this.lastActivity = Date.now();
    }, { passive: true });
    document.addEventListener("click", () => { this.clickCount++; this.lastActivity = Date.now(); }, { passive: true });
    document.addEventListener("keydown", () => { this.keyPressCount++; this.lastActivity = Date.now(); }, { passive: true });
    document.addEventListener("touchstart", () => { this.touchCount++; this.lastActivity = Date.now(); }, { passive: true });
    window.addEventListener("resize", () => { this.resizeCount++; }, { passive: true });
    document.addEventListener("visibilitychange", () => { if (document.hidden) this.tabSwitches++; });
  },

  getSnapshot() {
    return {
      timeOnPage: Math.round((Date.now() - this.startTime) / 1000) + "s",
      maxScrollDepth: this.maxScrollDepth + "%",
      mouseDistancePx: Math.round(this.mouseDistance),
      clicks: this.clickCount, keyPresses: this.keyPressCount,
      touches: this.touchCount, tabSwitches: this.tabSwitches,
      resizes: this.resizeCount,
    };
  }
};

// ══════════════════════════════════════════════════════════
//  COLLECT EVERYTHING
// ══════════════════════════════════════════════════════════

async function collectVisitorData() {
  const ua = navigator.userAgent;
  const parsed = parseUserAgent(ua);
  const webgl = getWebGLInfo();
  const canvasHash = getCanvasFingerprint();
  const features = detectFeatures();
  const plugins = getInstalledPlugins();
  const network = getNetworkInfo();
  const mathFP = getMathFingerprint();
  const cssFP = getCSSFingerprint();
  const intlFP = getIntlFingerprint();
  const perfTiming = getPerformanceTiming();

  const [battery, audioFP, storage, mediaDevices, adBlocker, webrtcIPs, fonts, voices, permissions] = await Promise.all([
    getBatteryInfo(), getAudioFingerprint(), getStorageEstimate(),
    getMediaDevices(), detectAdBlocker(), getWebRTCLeaks(),
    Promise.resolve(detectFonts()), getSpeechVoices(), getPermissionStates(),
  ]);

  return {
    deviceType: parsed.deviceType, deviceModel: parsed.deviceModel,
    browser: parsed.browser, browserVersion: parsed.browserVersion,
    os: parsed.os, osVersion: parsed.osVersion,
    arch: parsed.arch, platform: navigator.platform || "unknown",
    vendor: navigator.vendor || "unknown", userAgent: ua,
    screenRes: screen.width + "x" + screen.height,
    screenAvail: screen.availWidth + "x" + screen.availHeight,
    windowSize: window.innerWidth + "x" + window.innerHeight,
    outerWindow: window.outerWidth + "x" + window.outerHeight,
    colorDepth: screen.colorDepth + "-bit",
    pixelRatio: window.devicePixelRatio || 1,
    orientation: screen.orientation ? screen.orientation.type : "unknown",
    cpuCores: navigator.hardwareConcurrency || "unknown",
    deviceMemory: navigator.deviceMemory ? navigator.deviceMemory + " GB" : "hidden",
    gpuVendor: webgl.vendor, gpuRenderer: webgl.renderer,
    gpuVersion: webgl.version || "N/A", gpuShading: webgl.shadingLang || "N/A",
    gpuMaxTexture: webgl.maxTexture || "N/A",
    gpuMaxViewport: webgl.maxViewport || "N/A",
    gpuAntialiasing: webgl.antialiasing || "N/A",
    canvasHash, audioFingerprint: audioFP,
    mathFingerprint: mathFP.hash, mathRaw: mathFP.raw,
    connectionType: network ? network.effectiveType : "unknown",
    downlink: network ? network.downlink : "unknown",
    rtt: network ? network.rtt : "unknown",
    saveData: network ? network.saveData : "unknown",
    networkType: network ? network.type : "unknown",
    webrtcLeakedIPs: webrtcIPs,
    batteryLevel: battery ? battery.level : "hidden",
    batteryCharging: battery ? battery.charging : "hidden",
    microphones: mediaDevices ? mediaDevices.microphones : "unknown",
    speakers: mediaDevices ? mediaDevices.speakers : "unknown",
    cameras: mediaDevices ? mediaDevices.cameras : "unknown",
    language: navigator.language || "unknown",
    languages: navigator.languages ? navigator.languages.join(", ") : navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
    timezoneOffset: "UTC" + (new Date().getTimezoneOffset() > 0 ? "-" : "+") + Math.abs(new Date().getTimezoneOffset() / 60),
    storageQuota: storage ? storage.quota : "unknown",
    storageUsage: storage ? storage.usage : "unknown",
    adBlocker, features,
    pluginCount: navigator.plugins ? navigator.plugins.length : 0,
    plugins,
    // ── NEW vectors ──
    fontsDetected: fonts, fontCount: fonts.length,
    voiceCount: voices.length,
    voices: voices.slice(0, 15).map(v => `${v.name} (${v.lang})`),
    permissions, cssFingerprint: cssFP,
    intlFingerprint: intlFP,
    performanceTiming: perfTiming,
    behavior: BehaviorTracker.getSnapshot(),
    referrer: document.referrer || "direct",
    pageUrl: location.href, historyLength: history.length,
    localTime: new Date().toISOString(),
  };
}

// ══════════════════════════════════════════════════════════
//  LIVE RECON DASHBOARD (visible on the portfolio)
// ══════════════════════════════════════════════════════════


const ReconDashboard = {
  
  container: null,
  statusEl: null,
  progressBar: null,
  countEl: null,
  scanActive: false,
  scanStartTime: 0,

  init() {
    this.container = document.getElementById("recon-output");
    this.statusEl = document.getElementById("recon-status");
    this.progressBar = document.getElementById("recon-progress-fill");
    this.countEl = document.getElementById("recon-count");
    if (!this.container) return;

    const section = document.getElementById("recon-section");
    if (section) {
      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !this.scanActive) {
          this.scanActive = true;
          obs.disconnect();
          this.scanStartTime = Date.now();
          this.runScan();
        }
      }, { threshold: 0.15 });
      obs.observe(section);
    }
  },

  addLine(text, type = "data") {
    const line = document.createElement("div");
    line.className = `recon-line recon-${type}`;
    line.textContent = text;
    this.container.appendChild(line);
    this.container.scrollTop = this.container.scrollHeight;
  },

  async typeLines(lines, delay = 40) {
    for (const { text, type } of lines) {
      this.addLine(text, type || "data");
      await new Promise(r => setTimeout(r, delay));
    }
  },

  updateProgress(pct) {
    if (this.progressBar) this.progressBar.style.width = pct + "%";
  },

  updateCount(n) {
    if (this.countEl) this.countEl.textContent = n;
  },

  async runScan() {
    const t = (text, type) => ({ text, type });
    let dp = 0;

    await this.typeLines([
      t("$ ./recon --target=YOU --depth=full --passive", "cmd"),
      t("", "spacer"),
      t("[*] Initializing passive reconnaissance...", "info"),
      t("[*] No permissions requested. No cookies stored.", "info"),
      t("[*] All data from standard browser APIs.", "info"),
      t("", "spacer"),
    ], 55);
    this.updateProgress(5);

    // Phase 1 — Identity
    const parsed = parseUserAgent(navigator.userAgent);
    await this.typeLines([t("┌─── PHASE 1: TARGET IDENTIFICATION ───────────────┐", "header")], 25);
    const id = [
      [`Device Type`, parsed.deviceType], [`Device Model`, parsed.deviceModel],
      [`Browser`, `${parsed.browser} ${parsed.browserVersion}`],
      [`OS`, `${parsed.os} ${parsed.osVersion}`],
      [`Architecture`, parsed.arch], [`Platform`, navigator.platform || "unknown"],
    ];
    for (const [k, v] of id) {
      await this.typeLines([t(`  ${k.padEnd(14)} │ ${v}`, "data")], 45);
      dp++;
    }
    this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(12);

    // Phase 2 — Display
    await this.typeLines([t("", "spacer"), t("┌─── PHASE 2: DISPLAY PROFILE ─────────────────────┐", "header")], 25);
    const disp = [
      [`Screen`, `${screen.width}x${screen.height}`],
      [`Window`, `${window.innerWidth}x${window.innerHeight}`],
      [`Color Depth`, `${screen.colorDepth}-bit`],
      [`Pixel Ratio`, `${window.devicePixelRatio || 1}x`],
      [`Orientation`, screen.orientation ? screen.orientation.type : "N/A"],
    ];
    for (const [k, v] of disp) { await this.typeLines([t(`  ${k.padEnd(14)} │ ${v}`, "data")], 40); dp++; }
    this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(20);

    // Phase 3 — Hardware
    const webgl = getWebGLInfo();
    await this.typeLines([t("", "spacer"), t("┌─── PHASE 3: HARDWARE RECON ──────────────────────┐", "header")], 25);
    const hw = [
      [`CPU Cores`, `${navigator.hardwareConcurrency || "hidden"}`],
      [`RAM`, navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "hidden by browser"],
      [`GPU Vendor`, webgl.vendor], [`GPU Renderer`, webgl.renderer],
    ];
    for (const [k, v] of hw) { await this.typeLines([t(`  ${k.padEnd(14)} │ ${v}`, "data")], 45); dp++; }
    this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(30);

    // Phase 4 — Peripherals
    const mdev = await getMediaDevices();
    await this.typeLines([t("", "spacer"), t("┌─── PHASE 4: PERIPHERAL SCAN ─────────────────────┐", "header")], 25);
    const per = [
      [`Microphones`, mdev ? String(mdev.microphones) : "blocked"],
      [`Speakers`, mdev ? String(mdev.speakers) : "blocked"],
      [`Cameras`, mdev ? String(mdev.cameras) : "blocked"],
      [`Touch Points`, String(navigator.maxTouchPoints || 0)],
    ];
    for (const [k, v] of per) { await this.typeLines([t(`  ${k.padEnd(14)} │ ${v}`, "data")], 40); dp++; }
    this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(38);

    // Phase 5 — Fingerprints
    await this.typeLines([t("", "spacer"), t("[*] Generating unique fingerprints...", "info"), t("┌─── PHASE 5: FINGERPRINT EXTRACTION ──────────────┐", "header")], 35);
    const canvasHash = getCanvasFingerprint();
    const audioFP = await getAudioFingerprint();
    const mathFP = getMathFingerprint();
    await this.typeLines([
      t(`  Canvas Hash   │ ${canvasHash}`, "warn"),
      t(`  Audio FP      │ ${audioFP}`, "warn"),
      t(`  Math FP       │ ${mathFP.hash}`, "warn"),
      t(`  [!] These hashes uniquely identify your browser`, "alert"),
    ], 70);
    dp += 3; this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(48);

    // Phase 6 — Fonts
    await this.typeLines([t("", "spacer"), t("[*] Probing installed fonts...", "info"), t("┌─── PHASE 6: FONT ENUMERATION ────────────────────┐", "header")], 35);
    const fonts = detectFonts();
    await this.typeLines([
      t(`  Fonts Found   │ ${fonts.length}`, "data"),
      t(`  Sample        │ ${fonts.slice(0, 6).join(", ")}`, "data"),
      t(`  [!] Font set is nearly unique per system`, "alert"),
    ], 55);
    dp += fonts.length; this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(56);

    // Phase 7 — Voices
    await this.typeLines([t("", "spacer"), t("[*] Enumerating speech synthesis engines...", "info"), t("┌─── PHASE 7: VOICE ENGINE RECON ──────────────────┐", "header")], 35);
    const voices = await getSpeechVoices();
    await this.typeLines([t(`  Voice Engines │ ${voices.length}`, "data")], 50);
    if (voices.length > 0) await this.typeLines([t(`  Sample        │ ${voices.slice(0, 3).map(v => v.name).join(", ")}`, "data")], 50);
    dp += voices.length; this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(64);

    // Phase 8 — Permissions
    await this.typeLines([t("", "spacer"), t("[*] Querying permission states...", "info"), t("┌─── PHASE 8: PERMISSION AUDIT ────────────────────┐", "header")], 35);
    const perms = await getPermissionStates();
    for (const [perm, state] of Object.entries(perms)) {
      const icon = state === "granted" ? "\u2713" : state === "denied" ? "\u2717" : "?";
      await this.typeLines([t(`  ${icon} ${perm.padEnd(20)}│ ${state}`, state === "granted" ? "warn" : "data")], 30);
      dp++;
    }
    this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(74);

    // Phase 9 — Network
    const network = getNetworkInfo();
    const webrtcIPs = await getWebRTCLeaks();
    await this.typeLines([t("", "spacer"), t("[*] Network intelligence...", "info"), t("┌─── PHASE 9: NETWORK RECON ───────────────────────┐", "header")], 35);
    await this.typeLines([
      t(`  Connection    │ ${network ? network.effectiveType : "unknown"}`, "data"),
      t(`  Downlink      │ ${network ? network.downlink : "unknown"}`, "data"),
      t(`  RTT           │ ${network ? network.rtt : "unknown"}`, "data"),
    ], 50);
    if (webrtcIPs.length > 0) {
      await this.typeLines([
        t(`  WebRTC Leak   │ ${webrtcIPs.join(", ")}`, "alert"),
        t(`  [!] LOCAL IP EXPOSED through WebRTC!`, "alert"),
      ], 60);
    } else {
      await this.typeLines([t(`  WebRTC Leak   │ None (protected)`, "data")], 50);
    }
    dp += 4; this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(82);

    // Phase 10 — Locale & Power
    const battery = await getBatteryInfo();
    await this.typeLines([t("", "spacer"), t("┌─── PHASE 10: LOCALE & POWER ─────────────────────┐", "header")], 25);
    await this.typeLines([
      t(`  Language      │ ${navigator.language}`, "data"),
      t(`  All Langs     │ ${(navigator.languages || []).join(", ")}`, "data"),
      t(`  Timezone      │ ${Intl.DateTimeFormat().resolvedOptions().timeZone}`, "data"),
      t(`  Battery       │ ${battery ? battery.level + (battery.charging === "Yes" ? " \u26A1 charging" : " \uD83D\uDD0B") : "hidden"}`, "data"),
    ], 45);
    dp += 4; this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(90);

    // Phase 11 — Privacy
    const adBlocker = await detectAdBlocker();
    const features = detectFeatures();
    await this.typeLines([t("", "spacer"), t("┌─── PHASE 11: PRIVACY ASSESSMENT ─────────────────┐", "header")], 25);
    await this.typeLines([
      t(`  Ad Blocker    │ ${adBlocker}`, adBlocker === "YES" ? "warn" : "data"),
      t(`  Do Not Track  │ ${features.doNotTrack}`, "data"),
      t(`  GPC           │ ${features.globalPrivacyControl}`, "data"),
      t(`  Webdriver     │ ${features.webdriver}`, features.webdriver.includes("YES") ? "alert" : "data"),
      t(`  Dark Mode     │ ${features.darkMode}`, "data"),
      t(`  Cookies       │ ${features.cookiesEnabled}`, "data"),
    ], 45);
    dp += 6; this.updateCount(dp);
    await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
    this.updateProgress(100);

    // ── Phase 12: Headless Browser Detection ─────────────────
await this.typeLines([t("", "spacer"), t("[*] Checking for automation frameworks...", "info"), t("┌─── PHASE 12: HEADLESS DETECTION ────────────────────┐", "header")], 35);
const headless = detectHeadlessBrowser();
await this.typeLines([
    t(`  Headless      │ ${headless.isHeadless ? "YES (automation detected)" : "No"}`, headless.isHeadless ? "alert" : "data"),
    t(`  Webdriver     │ ${headless.details.webdriver}`, "data"),
    t(`  Plugins count │ ${headless.details.plugins}`, "data"),
    t(`  Languages     │ ${headless.details.languages}`, "data"),
], 45);
dp += 4; this.updateCount(dp);
await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
this.updateProgress(80);

// ── Phase 13: LAN Recon (best-effort timing-based) ───────
try {
await this.typeLines([t("", "spacer"), t("[*] Pivoting to local network — best-effort timing probe...", "info"), t("┌─── PHASE 13: LAN RECON ──────────────────────────┐", "header")], 35);

let _localIP = null;
try {
  const _pc = new RTCPeerConnection({ iceServers: [] });
  _pc.createDataChannel("");
  await _pc.createOffer().then(o => _pc.setLocalDescription(o));
  await new Promise(resolve => {
    const _to = setTimeout(resolve, 1500);
    _pc.onicecandidate = e => {
      if (e.candidate) {
        const m = e.candidate.candidate.match(/(\d+\.\d+\.\d+\.\d+)/);
        if (m && /^(10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.)/.test(m[1])) {
          _localIP = m[1];
          clearTimeout(_to);
          resolve();
        }
      }
    };
  });
  _pc.close();
} catch {}

if (!_localIP) {
  await this.typeLines([
    t("  Local IP      │ unreachable (mobile / CGNAT / WebRTC blocked)", "warn"),
    t("  [!] Cannot pivot to LAN — subject is not on a routable home network", "warn"),
  ], 45);
} else {
  const _subnet = _localIP.replace(/\.\d+$/, "");
  await this.typeLines([
    t(`  Local IP      │ ${_localIP}`, "warn"),
    t(`  Subnet        │ ${_subnet}.0/24`, "data"),
    t(`  Probing       │ 10 candidate hosts in your LAN…`, "info"),
  ], 45);
  dp += 2;

  const _candidates = [
    `${_subnet}.1`, `${_subnet}.254`, `${_subnet}.2`,
    `${_subnet}.10`, `${_subnet}.20`, `${_subnet}.50`, `${_subnet}.100`,
    "192.168.0.1", "192.168.1.1", "10.0.0.1",
  ];

  const _probe = async (ip) => {
    const _start = performance.now();
    try {
      const _ctrl = new AbortController();
      const _tid = setTimeout(() => _ctrl.abort(), 800);
      await fetch(`https://${ip}/`, { mode: "no-cors", signal: _ctrl.signal, cache: "no-store" });
      clearTimeout(_tid);
    } catch {}
    return performance.now() - _start;
  };

  const _baseline = await _probe(`${_subnet}.${Math.floor(Math.random() * 200) + 60}`);
  const _alive = [];
  for (const ip of _candidates) {
    const ms = await _probe(ip);
    if (ms > _baseline * 2 && ms < 790) _alive.push({ ip, ms: Math.round(ms) });
  }

  if (_alive.length === 0) {
    await this.typeLines([
      t("  [!] No hosts confirmed alive (browser sandbox blocked some probes)", "warn"),
      t("  [!] Modern browsers block public→private requests for safety", "info"),
    ], 45);
  } else {
    for (const r of _alive.slice(0, 6)) {
      await this.typeLines([t(`  ├─ ${r.ip.padEnd(18)} │ ${r.ms}ms (likely alive)`, "alert")], 30);
      dp++;
    }
    await this.typeLines([
      t("", "spacer"),
      t(`  [!] ${_alive.length} responsive host(s) on your private network`, "alert"),
      t("  [!] In a real engagement, next step → fingerprint + default-cred audit", "info"),
    ], 50);
  }
}
this.updateCount(dp);
await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
} catch (e) {
  await this.typeLines([t(`  [!] LAN recon error: ${e.message}`, "warn"), t("└─────────────────────────────────────────────────┘", "header")], 15);
}
this.updateProgress(90);

// ── Phase 14: XS-Leak Sign-In Map ────────────────────────
try {
await this.typeLines([t("", "spacer"), t("[*] Cross-site sign-in detection (oracle: image-load timing)...", "info"), t("┌─── PHASE 14: XS-LEAK SIGN-IN MAP ────────────────┐", "header")], 35);

const _xsTargets = [
  { name: "Google",    url: "https://accounts.google.com/SetSID" },
  { name: "GitHub",    url: "https://github.com/notifications.png" },
  { name: "Instagram", url: "https://www.instagram.com/accounts/edit/" },
  { name: "X",         url: "https://x.com/i/api/2/notifications/all.json" },
  { name: "Facebook",  url: "https://www.facebook.com/me" },
  { name: "Reddit",    url: "https://www.reddit.com/api/me.json" },
  { name: "LinkedIn",  url: "https://www.linkedin.com/feed/" },
  { name: "Discord",   url: "https://discord.com/api/v9/users/@me/library" },
  { name: "Spotify",   url: "https://open.spotify.com/get_access_token" },
  { name: "Netflix",   url: "https://www.netflix.com/api/shakti/mre/profiles" },
];

const _xsProbe = (target) => new Promise((resolve) => {
  const img = new Image();
  let done = false;
  const finish = (signedIn) => { if (!done) { done = true; resolve(signedIn); } };
  img.onload = () => finish(true);
  img.onerror = () => finish(false);
  setTimeout(() => finish(null), 2500);
  img.src = target.url + (target.url.includes("?") ? "&" : "?") + "_xs=" + Date.now();
});

const _xsResults = [];
for (const tgt of _xsTargets) {
  const r = await _xsProbe(tgt);
  _xsResults.push({ name: tgt.name, signedIn: r });
}

const _xsHits = _xsResults.filter(r => r.signedIn === true);
await this.typeLines([
  t(`  Probed        │ ${_xsTargets.length} services`, "data"),
  t(`  Detected      │ ${_xsHits.length} possible session(s)`, _xsHits.length > 0 ? "alert" : "data"),
  t("", "spacer"),
], 40);

for (let i = 0; i < _xsResults.length; i += 2) {
  const a = _xsResults[i], b = _xsResults[i + 1];
  const _fmt = (r) => {
    if (!r) return "".padEnd(20);
    const ic = r.signedIn === true ? "✓" : (r.signedIn === false ? "✗" : "?");
    return `${ic} ${r.name}`.padEnd(20);
  };
  await this.typeLines([t(`  ${_fmt(a)}${_fmt(b)}`, _xsHits.length > 0 ? "warn" : "data")], 25);
}

if (_xsHits.length > 0) {
  await this.typeLines([
    t("", "spacer"),
    t(`  [!] ${_xsHits.length} cross-origin session(s) detectable from this page`, "alert"),
    t("  [!] Each = CSRF / clickjacking attack surface for that service", "info"),
    t("  [!] Defense: container tabs, separate browser profiles", "info"),
  ], 45);
}
dp += _xsResults.length;
this.updateCount(dp);
await this.typeLines([t("└─────────────────────────────────────────────────┘", "header")], 15);
} catch (e) {
  await this.typeLines([t(`  [!] XS-leak error: ${e.message}`, "warn"), t("└─────────────────────────────────────────────────┘", "header")], 15);
}
this.updateProgress(100);

    // Final
    const elapsed = Math.round((Date.now() - this.scanStartTime) / 1000);
    await this.typeLines([
      t("", "spacer"),
      t("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557", "final"),
      t(`\u2551  SCAN COMPLETE \u2014 ${dp} data points in ${elapsed}s           \u2551`, "final"),
      t("\u2551  No permissions requested. No data stored.       \u2551", "final"),
      t("\u2551  All via standard Web APIs.                       \u2551", "final"),
      t("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D", "final"),
      t("", "spacer"),
      t("[*] This is what every website can see about you.", "info"),
      t("[*] Interested? Contact me below.", "info"),
    ], 65);

    if (this.statusEl) {
      this.statusEl.textContent = `COMPLETE \u2014 ${dp} DATA POINTS`;
      this.statusEl.classList.add("complete");
    }
  },
};

// ── Visitor Tracking ────────────────────────────────────
// Static host (Cloudflare Pages) — no PHP backend. Pageview analytics are
// handled by Cloudflare Web Analytics (enable in the CF dashboard, no code).
async function trackVisitor() { return; }

// ── CSRF Token ──────────────────────────────────────────
// Not needed with Web3Forms (stateless submit). Kept as a no-op so existing
// call sites don't break.
let csrfToken = null;
async function fetchCsrfToken() { return; }

// ── Init ────────────────────────────────────────────────
let toggleCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  Shield.init();
  BehaviorTracker.init();
  injectGrid(SKILL_DATA, "competencies-grid");
  injectGrid(RESEARCH_DATA, "research-grid");
  runSpiralAnimation("spiral-primary", SPIRAL_TEXT);
  runSpiralAnimation("spiral-secondary", SPIRAL_TEXT, 2000);
  renderHeroAnimation();
  startHexStream();
  startTypewriter();
  trackVisitor();
  fetchCsrfToken();
  ReconDashboard.init();

  document.querySelectorAll(".info-card").forEach((card) => {
    const directions = ["fade-left", "fade-right", "zoom-in", "fade-up"];
    card.setAttribute("data-aos", directions[Math.floor(Math.random() * directions.length)]);
  });

  const kernelToggle = document.getElementById("kernel-toggle");
  const terminalBody = document.querySelector(".typing-target");

  if (kernelToggle) {
    kernelToggle.addEventListener("change", () => {
      const isActivating = kernelToggle.checked;
      toggleCount++;
      if (toggleCount > 4) {
        document.body.innerHTML = `
    <div style="background:#0000aa; color:#fff; height:100vh; padding:50px; font-family:monospace;">
      <p>*** STOP: 0x00000050 (0xFD3094C2, 0x00000001, 0xFBFE7617, 0x00000000)</p>
      <p>KERNEL_MODE_EXCEPTION_NOT_HANDLED</p>
      <p>If this is the first time you've seen this Stop error screen, You are hacked , sorry .</p>
    </div>`;
        setTimeout(() => location.reload(), 10000);
      }
      if (terminalBody) {
        terminalBody.innerText = isActivating ? "SYS_CALL: SET_PRIVILEGE_LEVEL(RING_0)..." : "SYS_CALL: REVERT_TO_USER_MODE(RING_3)...";
        terminalBody.style.color = isActivating ? "#ff4444" : "#00ff41";
      }
      document.body.classList.add("glitch-active");
      setTimeout(() => {
        const isKernel = document.body.classList.toggle("kernel-mode");
        const statusText = document.querySelector(".status-text");
        const statusChip = document.querySelector(".status-chip");
        if (statusText) statusText.innerText = isKernel ? "KERNEL_OVERRIDE: ACTIVE" : "CREATED_BY:";
        if (statusChip) statusChip.style.color = isKernel ? "#ff4444" : "#00ff41";
        const hexStream = document.getElementById("hex-stream");
        if (hexStream) hexStream.style.opacity = isKernel ? "0.4" : "0.25";
        if (terminalBody) terminalBody.style.color = "";
      }, 150);
      setTimeout(() => document.body.classList.remove("glitch-active"), 600);
    });
  }

  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  setTimeout(() => { document.body.style.overflow = "auto"; }, 1500);

  const canvasWrap = document.querySelector(".canvas-container");
  if (canvasWrap) {
    const S = 30;
    function mv(cx, cy) { const dx = (cx - window.innerWidth/2) / (window.innerWidth/2); const dy = (cy - window.innerHeight/2) / (window.innerHeight/2); canvasWrap.style.transform = `translate(${dx*S}px, ${dy*S}px)`; }
    document.addEventListener("mousemove", (e) => mv(e.clientX, e.clientY));
    document.addEventListener("touchstart", (e) => mv(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    document.addEventListener("touchmove", (e) => mv(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    document.addEventListener("touchend", () => { canvasWrap.style.transform = "translate(0,0)"; }, { passive: true });
    document.addEventListener("mouseleave", () => { canvasWrap.style.transform = "translate(0,0)"; });
  }

  // (Behavioral exit-beacon to track_visitor.php removed — no PHP backend on static host.)
});

// ── Contact form (hardened) ─────────────────────────────
(function () {
  // ⚠️ REQUIRED: paste your free Web3Forms access key here.
  //    Get one in ~10s at https://web3forms.com (enter your email → key is emailed to you).
  //    Messages will be delivered to whatever email you registered that key with.
  const WEB3FORMS_ACCESS_KEY = "2d395e1b-8a84-4347-b568-516222b7faed";

  const form = document.getElementById("contact-form");
  const btn = document.getElementById("form-submit");
  const status = document.getElementById("form-status");
  const terminal = document.querySelector(".typing-target");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const message = document.getElementById("form-message").value.trim();
    const honeypot = document.getElementById("form-website").value;

    if (!name || !email || !message) {
      status.className = "form-status error";
      status.textContent = ">> ERROR: All fields are required.";
      return;
    }

    btn.disabled = true;
    btn.textContent = "Sending...";
    status.className = "form-status sending";
    status.textContent = ">> Establishing secure connection...";
    if (terminal) { terminal.style.color = "#d3a4ff"; terminal.textContent = "SYS: encrypting payload..."; }

    try {
      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
        throw new Error("Contact form not configured yet (missing Web3Forms key).");
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from ali-habashi.com",
          from_name: "Portfolio Contact Form",
          name, email, message,
          botcheck: honeypot ? true : false, // honeypot: bots fill the hidden "website" field
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        status.className = "form-status success";
        status.textContent = ">> Message transmitted successfully.";
        form.reset();
        if (terminal) { terminal.style.color = "#00ff41"; terminal.textContent = "ACK: message delivered \u2713"; }
      } else if (res.status === 429) {
        throw new Error("Rate limit hit. Please wait before sending again.");
      } else {
        throw new Error(data.message || "Unknown error");
      }
    } catch (err) {
      status.className = "form-status error";
      status.textContent = `>> ERROR: ${err.message}`;
      if (terminal) { terminal.style.color = "#ff4444"; terminal.textContent = "ERR: transmission failed."; }
    } finally {
      btn.disabled = false;
      btn.textContent = "Send Message";
      setTimeout(() => { if (terminal) { terminal.style.color = ""; terminal.textContent = ""; startTypewriter(); } }, 3000);
    }
  });
})();
