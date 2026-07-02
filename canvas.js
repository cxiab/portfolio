class StarBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.dotDensity = 0.00015;
    this.velocity = 0.25;
    this.distThreshold = 125;
    this.mouseRadius = 150;

    this.stars = [];
    this.mousePos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    this.init();
  }

  setCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createStars() {
    this.stars = [];
    const count = Math.round(
      this.canvas.width * this.canvas.height * this.dotDensity,
    );

    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: this.velocity - Math.random() * 0.5,
        vy: this.velocity - Math.random() * 0.5,
        radius: Math.random() * 1.5,
      });
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgb(136, 89, 191)";
    this.ctx.strokeStyle = "rgb(255, 130, 198)";
    this.ctx.lineWidth = 0.15;

    for (let i = 0; i < this.stars.length; i++) {
      let s = this.stars[i];

      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.ctx.fill();

      for (let j = i + 1; j < this.stars.length; j++) {
        let other = this.stars[j];
        const dx = s.x - other.x;
        const dy = s.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.distThreshold) {
          const mDx = s.x - this.mousePos.x;
          const mDy = s.y - this.mousePos.y;
          const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

          if (mDist < this.mouseRadius) {
            this.ctx.beginPath();
            this.ctx.moveTo(s.x, s.y);
            this.ctx.lineTo(other.x, other.y);
            this.ctx.stroke();
          }
        }
      }

      s.x += s.vx;
      s.y += s.vy;

      if (s.x < 0 || s.x > this.canvas.width) s.vx *= -1;
      if (s.y < 0 || s.y > this.canvas.height) s.vy *= -1;
    }

    requestAnimationFrame(() => this.draw());
  }

  init() {
    this.setCanvasSize();
    this.createStars();

    window.addEventListener("mousemove", (e) => {
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY;
    });

    window.addEventListener("resize", () => {
      this.setCanvasSize();
      this.createStars();
    });

    this.draw();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new StarBackground("gravity");
});
