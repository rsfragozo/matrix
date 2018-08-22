var symbolSize = 24;
var streams = [];

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  background(0);

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize
  }

  textFont('Consolas');
  textSize(symbolSize);
}

function draw() {
  background(0);
  streams.forEach(function(stream) {
    stream.render();
  });
}

function Symbol(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.switchInterval = round(random(2,20));
  this.value;

  this.setToRandomSymbol = function() {
    var charType = round(random(0, 5));
    if (frameCount % this.switchInterval == 0) {
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
  }

  this.render = function() {
    fill(0, 255, 70);
    text(this.value, this.x, this.y);
    this.rain();
    this.setToRandomSymbol();
  }

  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }
}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 35));
  this.speed = random(3, 6);

  this.generateSymbols = function(x, y) {
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(x, y, this.speed);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      symbol.render();
    });
  }
}