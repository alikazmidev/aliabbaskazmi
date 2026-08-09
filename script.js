console.log(
  '%cHey, you opened the console.',
  'color:#9cdcfe;font-family:monospace;font-size:13px;'
);
console.log(
  '%cLet\u2019s talk: hi@aliabbaskazmi.com',
  'color:#ce9178;font-family:monospace;font-size:13px;'
);

// Waybar-style clock in the top status bar
(() => {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  function tick(){
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    clockEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }
  tick();
  setInterval(tick, 1000 * 30);
})();
