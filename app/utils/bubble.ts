export function createBubble(config: BubbleConfig): Bubble {
  return new Bubble(config);
}

class Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;

  constructor(config: BubbleConfig) {
    this.x = config.x;
    this.y = config.y;
    this.radius = config.radius;
    this.speed = config.speed;
    this.drift = config.drift;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#9b1c31"; // Light blue with transparency
    ctx.fill();
  }

  update() {
    this.y -= this.speed; // Move the bubble up at its own speed
    this.x += this.drift; // Apply horizontal drift
  }
}

interface BubbleConfig {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
}

export type { Bubble };
