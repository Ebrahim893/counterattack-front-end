// window.onload = function () {
//   const canvas = document.getElementById("matrix");
//   const ctx = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   const letters = "GK ST CB CM GOAL VAR RED 7 10 11 SAVE FOUL PASS SHOOT".split("");
//   const fontSize = 14;
//   const columns = Math.floor(canvas.width / fontSize);
//   const drops = Array(columns).fill(1);

//   function draw() {
//     ctx.fillStyle = "rgba(15, 16, 22, 0.08)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "#fbff35";
//     ctx.font = fontSize + "px monospace";

//     for (let i = 0; i < drops.length; i++) {
//       const text = letters[Math.floor(Math.random() * letters.length)];
//       ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//       if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//         drops[i] = 0;
//       }
//       drops[i]++;
//     }
//   }

//   setInterval(draw, 33);
// };
window.onload = function () {
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // رموز سايبربانك
  const letters = "FOOTBALL FINISH PASS SHOT VAR ⚡ ⚙ ☢ ★ ∆ ◉ ● ✦ ⬢ ⬤ STRIKER AI GOAL! MOD RX-77".split(" ");
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  const neonColors = ["#fbff35", "#d40030", "#7aa2b7", "#fbff37"];
  let frame = 0;

  function draw() {
    // خلفية شفافة بتموج خفيف
    ctx.fillStyle = "rgba(28, 29, 39, 0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px 'Jersey M54', monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // اختر لون نيون عشوائي لكل رمز
      ctx.fillStyle = neonColors[Math.floor(Math.random() * neonColors.length)];

      // اهتزاز بسيط للخط
      ctx.fillText(text, x, y + Math.sin(frame / 10 + i) * 2);

      // إعادة من الأعلى بعد الوصول للأسفل
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }

    frame++;
  }

  setInterval(draw, 28);

  // تحديث الحجم عند تغيير حجم النافذة
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
};
