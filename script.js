// BrixClub Jewelry — Brix Builder calculator
const BASE_PRICE = 10.00;   // Make Your Own base pair
const BRICK_PRICE = 0.25;   // per extra brick
const MAX_BRICKS = 100;     // sanity cap

let bricks = 0;

const bricksEl = document.getElementById('bricks');
const totalEl = document.getElementById('total');

function fmt(n) {
  return '$' + n.toFixed(2);
}

function render() {
  bricksEl.textContent = bricks;
  totalEl.textContent = fmt(BASE_PRICE + bricks * BRICK_PRICE);
}

document.getElementById('plus').addEventListener('click', () => {
  if (bricks < MAX_BRICKS) {
    bricks++;
    render();
  }
});

document.getElementById('minus').addEventListener('click', () => {
  if (bricks > 0) {
    bricks--;
    render();
  }
});

render();
