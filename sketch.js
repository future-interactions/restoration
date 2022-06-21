let oldImgSource, newImgSource, oldImg, newImg;
var colList = [];
var cols = 10;
var rows = 10;
var clicks = 0;
let px, py;
let sampleList = [23, 25, 90];

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
	image(oldImgSource, 0,0);
}

function draw() {
	px = mouseX;
	py = mouseY;
	for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {

		var c = px;
		//console.log(px);
		colList[i][j] = newImgSource.get(px+i-cols/2, py+j-rows/2);

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
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < cols; j++) {
		newImg.noStroke();
		newImg.fill(colList[i][j]);
		newImg.rect(px+i-cols/2, py+j-rows/2, 1, 1);
	}
}
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