function setup() {
  createCanvas(600, 400);
}

function draw() {
  // 1. 추상적인 배경 구성
  background(40, 50, 70);

  // [색상 변화] 삼각형 색상: 분홍 <-> 보라 사이를 sin()으로 순환
  let c1 = color(200, 100, 150);
  let c2 = color(120, 60, 210);
  let t = (sin(frameCount * 0.03) + 1) / 2; // 0~1 범위
  let triColor = lerpColor(c1, c2, t);

  noStroke();
  fill(triColor);
  triangle(0, 0, 300, 0, 0, 400); // 좌측 상단 삼각형

  // [크기 변화] 우측 하단 사각형: cos()로 크기 변화 (100~200 범위)
  let rectSize = 125 + cos(frameCount * 0.05) * 25;
  fill(100, 200, 200);
  rect(600 - rectSize, 400 - rectSize, rectSize, rectSize);

  stroke(200);
  line(0, 400, 600, 0);
  
  // 2. 피자를 올려둘 접시
  noStroke();
  fill(230);
  ellipse(300, 200, 380, 380);
  fill(210);
  ellipse(300, 200, 350, 350);

  // 3. 7/8 조각 피자 (고정)
  stroke(180, 100, 30);
  strokeWeight(5);
  fill(230, 160, 60);
  arc(295, 195, 320, 320, QUARTER_PI, TWO_PI, PIE);
  noStroke();
  fill(255, 210, 50);
  arc(295, 195, 290, 290, QUARTER_PI, TWO_PI, PIE);

  fill(210, 50, 40);
  ellipse(250, 150, 45, 45);
  ellipse(200, 230, 40, 40);
  ellipse(300, 100, 35, 35);
  ellipse(180, 140, 30, 30);
  ellipse(360, 160, 40, 40);
  ellipse(260, 280, 45, 45);
  ellipse(330, 260, 35, 35);

  fill(40, 120, 50);
  quad(220, 120, 230, 110, 240, 130, 230, 140);
  quad(320, 130, 340, 120, 330, 150, 310, 140);
  quad(240, 240, 260, 230, 250, 260, 230, 250);
  
  
  fill(30);
  ellipse(280, 180, 15, 15);
  ellipse(310, 220, 15, 15);
  ellipse(180, 200, 15, 15);

  // 4. 1/8 조각 피자 - [기본 애니메이션] sin()으로 좌우 진동
  let offsetX = sin(frameCount * 0.04) * 20;

  stroke(180, 100, 30);
  strokeWeight(5);
  fill(230, 160, 60);
  arc(315 + offsetX, 215, 320, 320, 0, QUARTER_PI, PIE);
  noStroke();
  fill(255, 210, 50);
  arc(315 + offsetX, 215, 290, 290, 0, QUARTER_PI, PIE);

  fill(210, 50, 40);
  ellipse(420 + offsetX, 250, 40, 40);
  ellipse(370 + offsetX, 275, 30, 30);
  
  fill(40, 120, 50);
  quad(380 + offsetX, 230, 395 + offsetX, 220,
       390 + offsetX, 245, 375 + offsetX, 240);

  fill(30);
  ellipse(400 + offsetX, 280, 15, 15);
}

// 키보드 인터랙션: 배경색 변경 및 GIF 저장
function keyPressed() {
  
 // 's' 키를 누르면 10초간의 움직임을 GIF로 저장
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 10);
  }

}