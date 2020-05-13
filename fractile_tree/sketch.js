var tree = [];
var count = 0;
var leaves = [];
function setup() {
	createCanvas(600, 600);
	var a = createVector(width/2, height);
	var b = createVector(width/2, height - 100);
	var root = new Branch(a, b);

	tree[0] = root;
}
function mousePressed() {
	for(var i = tree.length-1; i >= 0; i--) {
		if(!tree[i].finished) {
			tree.push(tree[i].branchA());
			tree.push(tree[i].branchB());
		}
		tree[i].finished = true;
	}
	count++;

	if(count === 5) {
		for(var i = 0; i < tree.length; i++) {
			if(!tree[i].finished) {
				var leaf = tree[i].end.copy();
				leaves.push(leaf);
			}
		}
	}
}

function draw() {
	background(51);
	for(var i = 0; i < tree.length; i++) {
		tree[i].show();
	}

	for(var i = 0; i < leaves.length; i++) {
		fill(255, 0, 100, 100);
		noStroke();
		ellipse(leaves[i].x, leaves[i].y, 8, 8);
	}
}



















/* function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if(len > 4) {
		push();
		rotate(PI/5);
		branch(len * 0.67);
		pop();
		push();
		rotate(-PI/5);
		branch(len * 0.67);
		pop();
	}
} */