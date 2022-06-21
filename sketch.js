let oldImgSource, newImgSource, oldImg, newImg;
var colList = [];
var cols =60;
var rows = 60;
var clicks = 0;
let px, py;
let sampleList = [23, 25, 90];
let moved=false;

function preload() {
	oldImgSource = loadImage('assets/before_artemesia2.png');
	newImgSource = loadImage('assets/after_artemesia2.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	oldImg = createGraphics(811, 786);
	newImg = createGraphics(811, 786);
	//newImg.copy(newImgSource, 0, 0, newImgSource.width, newImgSource.height, 0, 0, newImg.width, newImg.height);
	colList = make2DArray(cols, rows);

}

function draw() {
	background(220, 220, 205);
	image(oldImgSource, width / 2 - oldImgSource.width / 2, height / 2 - oldImgSource.height / 2);

	px = mouseX - width / 2 + oldImgSource.width / 2;
	py = mouseY - height / 2 + oldImgSource.height / 2;
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {

			var c = px;
			//console.log(px);
			colList[i][j] = newImgSource.get(px + i - cols / 2, py + j - rows / 2);

			//colList[i][j] = mouseX+j+i*rows;
		}
	}
	/*
	let colAlpha = newImgSource.get(mouseX, mouseY);
	newImg.noStroke();
	newImg.fill(colAlpha);
	newImg.rect(px, py, 1, 1);
	image(oldImgSource, 0, 0);
	image(newImg, 0, 0);
	*/
	if (moved=true){
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < cols; j++) {
			let d = dist(px+i-cols/2, py+j-rows/2, px, py);
			console.log(d)
			newImg.noStroke();
			let currentCol = color(colList[i][j]);
			currentCol.setAlpha(255 - (d*8));
			newImg.fill(currentCol);
			newImg.rect(px + i - cols / 2, py + j - rows / 2, 1, 1);
		}
	}
	moved=false;
}
	translate(width / 2 - oldImgSource.width / 2, height / 2 - oldImgSource.height / 2)
	image(newImg, 0, 0);
}

function make2DArray(cols, rows) {
	var arr = new Array(cols);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(rows);
	}
	return arr;
}

function mousePressed() {
	clicks++;
	console.log("px = " + px);
	console.log(colList);
	console.log(sampleList);
}

function touchMoved() {
	return false;
}

function mouseMoved() {
	moved = true;
}