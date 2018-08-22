var symbol;
var symbolSize = 24;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);

  symbol = new Symbol(width / 2, height / 2);
  symbol.setToRandomSymbol();
  textSize(symbolSize);
}

function draw() {
  symbol.render();
}

function Symbol(x, y) {
  this.x = x;
  this.y = y;
  this.value;

  this.setToRandomSymbol = function() {
    var charType = round(random(0, 5));
    if (charType > 1) {
      // set it to Katakana
      this.value = String.fromCharCode(
        0x30A0 + round(random(0, 96))
      );
    } else {
      // set it to numeric
      this.value = round(random(0,9));
    }
  }

  this.render = function() {
    fill(0, 255, 70);
    text(this.value, this.x, this.y);
  }
}

function Stream() {}