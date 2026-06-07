let bgR = 246;
let bgG = 240;
let bgB = 228;

function setup() {
  createCanvas(600, 400);
  smooth();
}

function draw() {
  background(bgR, bgG, bgB); // 배경색 변수 적용
  stroke(33, 31, 31);
  strokeWeight(2.5);
  strokeJoin(ROUND);

  // 뒷머리
  fill(33, 31, 31);
  beginShape();
  vertex(300, 20); 
  bezierVertex(380, 20, 430, 100, 430, 190);
  bezierVertex(430, 240, 410, 270, 430, 320); 
  bezierVertex(450, 350, 420, 380, 380, 360); 
  bezierVertex(350, 340, 370, 290, 300, 290);
  bezierVertex(230, 290, 250, 340, 220, 360); 
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
  vertex(120, 440); 
  bezierVertex(120, 360, 180, 310, 220, 310); 
  vertex(380, 310); 
  bezierVertex(420, 310, 480, 360, 480, 440); 
  endShape(CLOSE);
  
  // 귀 & 얼굴형
  fill(251, 226, 211);
  arc(210, 175, 30, 45, HALF_PI, PI + HALF_PI); 
  arc(390, 175, 30, 45, -HALF_PI, HALF_PI); 

  // 얼굴
  beginShape();
  vertex(210, 150); 
  bezierVertex(210, 250, 250, 280, 300, 280); 
  bezierVertex(350, 280, 390, 250, 390, 150); 
  vertex(390, 90); 
  vertex(210, 90); 
  endShape(CLOSE);
  fill(238, 192, 84); 
  ellipse(198, 190, 6, 6);
  ellipse(402, 190, 6, 6);

  // 앞머리 
  fill(33, 31, 31);
  arc(300, 120, 200, 140, PI, TWO_PI);
  rect(205, 70, 70, 75, 0, 0, 8, 8); 
  rect(280, 70, 45, 65, 0, 0, 8, 8); 
  rect(330, 70, 65, 75, 0, 0, 8, 8); 

  // 마우스 인터랙션: 볼터치 움직임
  // 마우스의 위치에 따라 볼터치가 약간씩 따라 움직이도록 설정
  let moveX = map(mouseX, 0, width, -10, 10);
  let moveY = map(mouseY, 0, height, -5, 5);
  
  fill(255, 180, 180, 150);
  noStroke();
  ellipse(240 + moveX, 185 + moveY, 38, 22); // 왼쪽 볼터치
  ellipse(360 + moveX, 185 + moveY, 38, 22); // 오른쪽 볼터치

  // 눈
  stroke(33, 31, 31);
  fill(33, 31, 31);
  ellipse(260, 165, 16, 20); 
  ellipse(340, 165, 16, 20); 

  // 눈동자 
  fill(255);
  noStroke();
  ellipse(258, 160, 6, 6);
  ellipse(338, 160, 6, 6);

  // 코
  stroke(33, 31, 31);
  noFill();
  beginShape();
  vertex(300, 170); 
  bezierVertex(295, 185, 295, 192, 305, 192); 
  endShape();

  // 마우스 인터랙션: 클릭 시 입 벌리기
  if (mouseIsPressed) {
    fill(180, 50, 50); 
    ellipse(300, 215, 30, 40); // 벌린 입
  } else {
    noFill();
    beginShape();
    vertex(280, 205);
    bezierVertex(290, 220, 310, 220, 320, 205); // 원래 입
    endShape();
  }
}

// 키보드 인터랙션: 배경색 변경 및 GIF 저장
function keyPressed() {
  
  // 아무 키나 누르면 배경색이 랜덤하게 변경됨
  bgR = random(150, 255);
  bgG = random(150, 255);
  bgB = random(150, 255);
  
 // 's' 키를 누르면 10초간의 움직임을 GIF로 저장
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 10);
  }

}