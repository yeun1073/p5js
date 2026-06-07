function setup() {
  createCanvas(600, 400);
  smooth();
}

function draw() {
  background(246, 240, 228); // 배경 (베이지색)
  stroke(33, 31, 31);
  strokeWeight(2.5);
  strokeJoin(ROUND);

  // 뒷머리
  fill(33, 31, 31);
  beginShape();
  vertex(300, 20); // 정수리
  bezierVertex(380, 20, 430, 100, 430, 190);  // 오른쪽 볼륨 및 웨이브
  bezierVertex(430, 240, 410, 270, 430, 320); 
  bezierVertex(450, 350, 420, 380, 380, 360); 
  bezierVertex(350, 340, 370, 290, 300, 290);
  bezierVertex(230, 290, 250, 340, 220, 360);   // 왼쪽 볼륨 및 웨이브 (대칭)
  bezierVertex(180, 380, 150, 350, 170, 320); 
  bezierVertex(190, 270, 170, 240, 170, 190); 
  bezierVertex(170, 100, 220, 20, 300, 20);   
  endShape(CLOSE);

  // 목
  fill(251, 226, 211);
  beginShape();
  vertex(270, 200);
  vertex(270, 290);
  bezierVertex(285, 305, 315, 305, 330, 290);
  vertex(330, 200);
  endShape(CLOSE);

  // 민트색 니트
  fill(160, 224, 197);
  beginShape();
  vertex(120, 440); // 왼쪽 하단
  bezierVertex(120, 360, 180, 310, 220, 310); // 왼쪽 어깨
  vertex(380, 310); // 오른쪽 어깨
  bezierVertex(420, 310, 480, 360, 480, 440); // 오른쪽 하단
  endShape(CLOSE);
  
  // 귀 & 얼굴형
  fill(251, 226, 211);
  arc(210, 175, 30, 45, HALF_PI, PI + HALF_PI); // 왼쪽 귀
  arc(390, 175, 30, 45, -HALF_PI, HALF_PI); // 오른쪽 귀

  // 얼굴
  beginShape();
  vertex(210, 150); // 왼쪽 귀 높이
  bezierVertex(210, 250, 250, 280, 300, 280); // 왼쪽 턱~턱끝
  bezierVertex(350, 280, 390, 250, 390, 150); // 턱끝~오른쪽 턱
  vertex(390, 90); // 이마 (앞머리에 가려짐)
  vertex(210, 90); 
  endShape(CLOSE);
  fill(238, 192, 84); // 노란색 귀걸이
  ellipse(198, 190, 6, 6);
  ellipse(402, 190, 6, 6);

  // 앞머리 
  fill(33, 31, 31);
  arc(300, 120, 200, 140, PI, TWO_PI);
  rect(205, 70, 70, 75, 0, 0, 8, 8); // 왼쪽 블록
  rect(280, 70, 45, 65, 0, 0, 8, 8); // 가운데 블록
  rect(330, 70, 65, 75, 0, 0, 8, 8); // 오른쪽 블록

  // 볼
  fill(255, 180, 180, 150);
  noStroke();
  ellipse(240, 185, 38, 22);
  ellipse(360, 185, 38, 22);

  // 눈
  stroke(33, 31, 31);
  fill(33, 31, 31);
  ellipse(260, 165, 16, 20); // 왼쪽 눈
  ellipse(340, 165, 16, 20); // 오른쪽 눈

  // 눈동자 
  fill(255);
  noStroke();
  ellipse(258, 160, 6, 6);
  ellipse(338, 160, 6, 6);

  // 코
  stroke(33, 31, 31);
  noFill();
  beginShape();
  vertex(300, 170); // 미간 쪽
  bezierVertex(295, 185, 295, 192, 305, 192); // 코끝 둥글게 꺾임
  endShape();

  // 입 
  beginShape();
  vertex(280, 205);
  bezierVertex(290, 220, 310, 220, 320, 205);
  endShape();
}