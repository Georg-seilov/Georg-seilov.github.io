(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1889,
	height: 982,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/b.png", id:"b"},
		{src:"images/kr.png", id:"kr"},
		{src:"images/logo_rewire.png", id:"logo_rewire"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.b = function() {
	this.initialize(img.b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,439,572);


(lib.kr = function() {
	this.initialize(img.kr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,437,364);


(lib.logo_rewire = function() {
	this.initialize(img.logo_rewire);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,80);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAAHAQs+gBpIhuQpKhugBhMIAApWQABBMJKBuQJIBuM+ABQM7ABJLhvQJKhvAChMIAAJUIAAABQAABNpMBvQpGBus0AAIgMAAg");
	this.shape.setTransform(200.3,44.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400.5,89.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B0000").s().p("Aj2YCQhnp+AAuEQAAuEBnp8QBmp9CQgBQCRABBmJ9QBmJ8ABOEQgBOEhmJ+QhmJ8iRAAQiQAAhmp8g");
	this.shape.setTransform(35,217.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,435);


(lib.s8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE900").s().p("ADgF0Qj1hQi7icQiiiHjiArQB8jUBMjzQFSAbCwDCQCzC/EsgZQhuCxBED+QgsAFgqAAQh9AAh4gog");
	this.shape.setTransform(59.8,41.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.5,82.5);


(lib.s7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DBFFD").s().p("AqBAAQC9kIErAJQEpAIB7kVQCVECDiBwQhmETmVBmQmTBlhTDJg");
	this.shape.setTransform(64.3,52.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.5,105);


(lib.s6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5DBFFD").s().p("AluhqIDalUIIDN8g");
	this.shape.setTransform(0,-5.1,1,1,0,0,0,0,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-40.5,73.5,89.4);


(lib.s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00E09A").s().p("AAAgXIAkAGIhHApg");
	this.shape.setTransform(0,0,15,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-36.7,108.8,73.5);


(lib.s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F7AB36","#FEBA3C","#FFC441","#FFD954","#FFDF5A","#FFEBAE"],[0,0.196,0.404,0.698,0.773,1],-3.3,1.6,2.4,-0.7).s().p("AgHAtQgQgFgHgTQgJgTAEgKQAGgXAagOIADANQgWALgHATQgHAUALAIQAMAJAQgCQAHgBAIgCQAOgFAAgIIAFALIAAABIAAAAQABAEgEADQgJAIgSACg");
	this.shape.setTransform(101.8,101.8,22.001,22.001,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFEBAE","#FFDF5A","#FFD954","#FFC441","#FEBA3C","#F7AB36"],[0,0.227,0.302,0.596,0.804,1],-1.7,1.1,2.1,-0.4).s().p("AABAeQgJgDgGgLQgFgMgBgEIgBAAQADgGgEgGIAEgBQAEgLAKgDQALgGADAEIAAABIAEALIAAABIAAgBQABAEgEAEQgJAHgQACQgCADABAGQANAQAUgIIAFAMQgHACgGAAIgJgBg");
	this.shape_1.setTransform(51.7,206.3,22.001,22.001,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.9,276.6);


(lib.s3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00E09A","#00F4AD","#00FFB8","#9DFEDF"],[0,0.38,0.675,1],1.3,-1.4,-1.3,1.2).s().p("AAAAVQgOgNgBgEQgBgHAGgIQAHgJAHgBIAMAMQgMABgFANIAAAAQgCADAAAFQAAAFADAEg");
	this.shape.setTransform(-37,-33.6,12,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00E09A","#00F4AD","#00FFB8","#9DFEDF"],[0,0.38,0.675,1],1.8,-2,-2.4,2.2).s().p("AgUAXQAOgHAGgKQAKgJgBgNIAAAAIAAgBIAAgBIgCgHIgBgCIgFgIIAMANQAHAIABAHQACAaggAQg");
	this.shape_1.setTransform(31.6,17.4,12,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00E09A","#00F4AD","#00FFB8","#9DFEDF"],[0,0.38,0.675,1],1.9,-1.7,-1.9,2).s().p("AgdAIQgDgCgBgEIAAgCQAIABAZgIQATgIAJAKQAEADACACQgKgBgYAIQgJAFgIAAQgHAAgFgEg");
	this.shape_2.setTransform(-1.8,-17.6,12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.1,-60.6,114.4,121.2);


(lib.s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F7AB36","#FEBA3C","#FFC441","#FFD954","#FFDF5A","#FFEBAE"],[0,0.196,0.404,0.698,0.773,1],0.6,-0.1,-0.5,0.2).s().p("AAAAPIgDgKIADgGIABgHIgBgGIABADIADAIQABAEgFAJQAAADAAACg");
	this.shape.setTransform(-69,-108.8,50,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F7AB36","#FEBA3C","#FFC441","#FFD954","#FFDF5A","#FFEBAE"],[0,0.196,0.404,0.698,0.773,1],1.4,-0.4,-1.3,0.5).s().p("AgLAHQAIgBAEgFQAIgEAAgHIAAgFIAAABIAAABIABAAIACAGQABAFgCACQgFANgPACIAAABIgCgJg");
	this.shape_1.setTransform(27.5,107.5,50,50);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFEBAE","#FFDF5A","#FFD954","#FFC441","#FEBA3C","#F7AB36"],[0,0.227,0.302,0.596,0.804,1],1.3,-0.1,-1.1,0.6).s().p("AAAADQgLgDgCgEIgBgBIABgEQADAEALADQAKACADAGIAAABIABABIgBACQgDgDgLgEg");
	this.shape_2.setTransform(1.5,-2.5,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-187.5,182,375.2);


(lib.s1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00E09A","#00F4AD","#00FFB8","#9DFEDF"],[0,0.38,0.675,1],-0.4,-0.8,0.5,0.9).s().p("AgDADQgJgDgEAAIgKAFIAGgEIAAAAIAMgEQAFgDAGADIAOADQAEAAAGgCIgCABIgBABIAAAAIgBAAQgMAFgDAAIgBAAQgFAAgFgCg");
	this.shape.setTransform(-32.5,27.8,10,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00E09A","#00F4AD","#00FFB8","#9DFEDF"],[0,0.38,0.675,1],-1,-2,1.1,2.2).s().p("AACgBQgJgLgMABIgIACIABAAIgBAAIAMgGIABgBQAGgCAGABQAVAFAJAYQAAABgMAFQgFgMgJgHg");
	this.shape_1.setTransform(30.8,-14.8,10,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9DFEDF","#00FFB8","#00F4AD","#00E09A"],[0,0.325,0.62,1],-1,-1.9,0.9,1.7).s().p("AgPAbQAEgGACgVQACgRAIgHIAAAAIADgBQAFgBADAAQADAAABAAQAAAAgBAAQgCAAgFABQgEAGgDAUQgBATgIAGIAAAAIgBAAIgDABIgDAAg");
	this.shape_2.setTransform(1,-0.1,10,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-33.7,119,67.4);


(lib.paper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A/RcxMAAAg5hMA+jAAAMAAAAtSIAAACIAAMNg");
	this.shape.setTransform(200.3,184.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400.5,368.3);


(lib.ClipGroup_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao6VIQkHhwjLjLQjLjLhwkHQhzkRAAkqQAAkpBzkQQBwkIDLjLQDLjLEHhwQERhzEpAAQEqAAEQBzQEIBwDLDLQDLDLBwEIQBzEQAAEpQAAEqhzERQhwEHjLDLQjLDLkIBwQkQBzkqAAQkpAAkRhzg");
	mask.setTransform(146.8,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A2cS6MAq/gn3IB6CEMgq/An4g");
	this.shape.setTransform(209.6,228);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EggVBMnQu7mUrhrhQrhrhmUu7QmjvcAAw6QAAw4GjvdQGUu7LhrhQLhrhO7mUQPdmiQ4AAQQ5AAPeGiQO6GULhLhQLhLhGUO7QGiPdABQ4QgBQ6miPcQmUO7rhLhQrgLhu7GUQveGiw5AAQw4AAvdmig");
	this.shape_1.setTransform(546.5,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.3,21.3,279.3,293.6);


(lib.ClipGroup_78_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao6VIQkHhwjLjLQjLjLhwkHQhzkRAAkqQAAkpBzkQQBwkIDLjLQDLjLEHhwQERhzEpAAQEqAAEQBzQEIBwDLDLQDLDLBwEIQBzEQAAEpQAAEqhzERQhwEHjLDLQjLDLkIBwQkQBzkqAAQkpAAkRhzg");
	mask.setTransform(146.8,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EggVBMnQu7mUrhrhQrhrhmUu7QmjvcAAw6QAAw4GjvdQGUu7LhrhQLhrhO7mUQPdmiQ4AAQQ5AAPeGiQO6GULhLhQLhLhGUO7QGiPdABQ4QgBQ6miPcQmUO7rhLhQrgLhu7GUQveGiw5AAQw4AAvdmig");
	this.shape.setTransform(546.5,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.3,21.3,279.3,293.6);


(lib.ClipGroup_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao6VIQkHhwjLjLQjLjLhwkHQhzkRAAkqQAAkpBzkQQBwkIDLjLQDLjLEHhwQERhzEpAAQEqAAEQBzQEIBwDLDLQDLDLBwEIQBzEQAAEpQAAEqhzERQhwEHjLDLQjLDLkIBwQkQBzkqAAQkpAAkRhzg");
	mask.setTransform(146.8,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A3cR2MAq/gn4ID6ENMgq/An4g");
	this.shape.setTransform(165.7,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.6,24.7,277.9,268.9);


(lib.ClipGroup_76_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao6VIQkHhwjLjLQjLjLhwkHQhzkRAAkqQAAkpBzkQQBwkIDLjLQDLjLEHhwQERhzEpAAQEqAAEQBzQEIBwDLDLQDLDLBwEIQBzEQAAEpQAAEqhzERQhwEHjLDLQjLDLkIBwQkQBzkqAAQkpAAkRhzg");
	mask.setTransform(146.8,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EggVBMnQu7mUrhrhQrhrhmUu7QmjvcAAw6QAAw4GjvdQGUu7LhrhQLhrhO7mUQPdmiQ4AAQQ5AAPeGiQO6GULhLhQLhLhGUO7QGiPdABQ4QgBQ6miPcQmUO7rhLhQrgLhu7GUQveGiw5AAQw4AAvdmig");
	this.shape.setTransform(546.5,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.3,21.3,279.3,293.6);


(lib.ClipGroup_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao5VIQkIhwjLjLQjLjLhwkHQhzkRAAkqQAAkpBzkQQBwkIDLjLQDLjLEIhwQEQhzEpAAQEqAAERBzQEHBwDLDLQDLDLBwEIQBzEQAAEpQAAEqhzERQhwEHjLDLQjLDLkHBwQkRBzkqAAQkpAAkQhzg");
	mask.setTransform(159.2,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A20ShMArAgn4ICpC3Mgq/An4g");
	this.shape.setTransform(146.1,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.4,0,279.8,273.6);


(lib.ClipGroup_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnIQ5QjShZijiiQiiijhZjSQhcjbAAjuQAAjtBcjaQBZjTCiiiQCjijDShZQDbhdDtAAQDuAADaBdQDTBZCiCjQCjCiBZDTQBdDaAADtQAADuhdDbQhZDSijCjQiiCijTBZQjaBdjuAAQjtAAjbhdg");
	mask.setTransform(132.5,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AnBQsQjRhYigihQihighYjRQhbjXAAjrQAAjqBbjXQBYjRChigQCgigDRhZQDXhbDqAAQDrAADXBbQDRBYCgChQChCgBYDRQBbDXAADqQAADrhbDXQhYDRihCgQigChjRBYQjWBbjsAAQjqAAjXhbg");
	this.shape.setTransform(136,171.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E49D0C").s().p("EggWBMnQu7mUrgrhQrhrhmUu7QmivcgBw6QABw4GivdQGUu7LhrhQLgrhO7mUQPdmiQ5AAQQ5AAPdGiQO7GULhLhQLhLhGUO7QGjPdAAQ4QAAQ6mjPcQmUO7rhLhQrhLhu7GUQvdGiw5AAQw5AAvdmig");
	this.shape_1.setTransform(532.2,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.1,50.6,234.8,234.9);


(lib.ClipGroup_73_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnIQ5QjShZijiiQiiijhZjSQhcjbAAjuQAAjtBcjaQBZjTCiiiQCjijDShZQDbhdDtAAQDuAADaBdQDTBZCiCjQCjCiBZDTQBdDaAADtQAADuhdDbQhZDSijCjQiiCijTBZQjaBdjuAAQjtAAjbhdg");
	mask.setTransform(132.5,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EggWBMnQu7mUrgrhQrhrhmUu7QmivcgBw6QABw4GivdQGUu7LhrhQLgrhO7mUQPdmiQ5AAQQ5AAPdGiQO7GULhLhQLhLhGUO7QGjPdAAQ4QAAQ6mjPcQmUO7rhLhQrhLhu7GUQvdGiw5AAQw5AAvdmig");
	this.shape.setTransform(532.2,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.1,50.6,234.8,234.9);


(lib.ClipGroup_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ar+W7MAAAgt1IDWAAQEMAAD2BzQDrBwC3DLQC3DLBkEIQBoEQAAEpQAAEqhoERQhkEHi3DLQi3DLjrBwQj2BzkMAAg");
	mask.setTransform(125.3,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.9,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.9,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.9,270.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_3.setTransform(143.9,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.9,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.9,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.9,204.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.9,185.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_8.setTransform(143.9,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dAsIAAhWMAs7AAAIAABWg");
	this.shape_9.setTransform(143.9,146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_10.setTransform(143.9,126.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.9,107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.9,88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.9,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.9,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_15.setTransform(143.9,35.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.9,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.9,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.9,4.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.6,2.8,153.5,287.3);


(lib.ClipGroup_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjthwi3jLQi4jLhjkHQhpkRAAkqQAAkpBpkQQBkkIC3jLQC3jLDthwQD1hzELAAQEMAAD2BzQDsBwC4DLQC3DLBkEIQBoEQAAEpQAAEqhoERQhkEHi3DLQi4DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(132.1,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A0NS6MAmtgn3IBuCEMgmsAn4g");
	this.shape.setTransform(188.7,228);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EgdGBMnQtbmUqYrhQqXrhlsu7Ql4vcAAw6QAAw4F4vdQFsu7KXrhQKYrhNbmUQN6miPMAAQPNAAN6GiQNcGUKXLhQKXLhFsO7QF4PdAAQ4QAAQ6l4PcQlsO7qXLhQqXLhtcGUQt6GivNAAQvMAAt6mig");
	this.shape_1.setTransform(491.8,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.9,21.3,251.4,293.6);


(lib.ClipGroup_70_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjthwi3jLQi4jLhjkHQhpkRAAkqQAAkpBpkQQBkkIC3jLQC3jLDthwQD1hzELAAQEMAAD2BzQDsBwC4DLQC3DLBkEIQBoEQAAEpQAAEqhoERQhkEHi3DLQi4DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(132.1,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgdGBMnQtbmUqYrhQqXrhlsu7Ql4vcAAw6QAAw4F4vdQFsu7KXrhQKYrhNbmUQN6miPMAAQPNAAN6GiQNcGUKXLhQKXLhFsO7QF4PdAAQ4QAAQ6l4PcQlsO7qXLhQqXLhtcGUQt6GivNAAQvMAAt6mig");
	this.shape.setTransform(491.8,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.9,21.3,251.4,293.6);


(lib.ClipGroup_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjthwi3jLQi4jLhjkHQhpkRAAkqQAAkpBpkQQBkkIC3jLQC3jLDthwQD1hzELAAQEMAAD2BzQDsBwC4DLQC3DLBkEIQBoEQAAEpQAAEqhoERQhkEHi3DLQi4DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(132.1,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A1GR2MAmsgn4IDhENMgmsAn4g");
	this.shape.setTransform(149.2,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,24.7,250.2,268.9);


(lib.ClipGroup_68_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjthwi3jLQi4jLhjkHQhpkRAAkqQAAkpBpkQQBkkIC3jLQC3jLDthwQD1hzELAAQEMAAD2BzQDsBwC4DLQC3DLBkEIQBoEQAAEpQAAEqhoERQhkEHi3DLQi4DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(132.1,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgdGBMnQtbmUqYrhQqXrhlsu7Ql4vcAAw6QAAw4F4vdQFsu7KXrhQKYrhNbmUQN6miPMAAQPNAAN6GiQNcGUKXLhQKXLhFsO7QF4PdAAQ4QAAQ6l4PcQlsO7qXLhQqXLhtcGUQt6GivNAAQvMAAt6mig");
	this.shape.setTransform(491.8,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.9,21.3,251.4,293.6);


(lib.ClipGroup_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjuhwi2jLQi4jLhkkHQhnkRAAkqQAAkpBnkQQBlkIC3jLQC2jLDuhwQD1hzELAAQEMAAD2BzQDsBwC3DLQC3DLBlEIQBoEQgBEpQABEqhoERQhlEHi3DLQi3DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(143.3,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A0iShMAmsgn4ICYC3MgmrAn4g");
	this.shape.setTransform(131.5,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.2,0,251.9,273.6);


(lib.ClipGroup_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOQ5Qi5hZiOiiQiOijhOjSQhRjbAAjuQAAjtBRjaQBOjTCOiiQCOijC5hZQC+hdDQAAQDQAAC/BdQC4BZCPCjQCOCiBODTQBRDaAADtQAADuhRDbQhODSiOCjQiPCii4BZQi/BdjQAAQjQAAi+hdg");
	mask.setTransform(119.3,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AmUQyQi7hZiQihQiQiihPjRQhSjZAAjsQAAjsBSjYQBPjRCQiiQCQihC7hZQDChbDSAAQDUAADBBbQC7BZCQChQCQCiBPDRQBSDYAADsQAADshSDZQhPDRiQCiQiQChi7BZQjBBbjUAAQjSAAjChbg");
	this.shape.setTransform(126.1,170);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E59D0C").s().p("EgdGBMnQtbmUqYrhQqXrhlsu7Ql4vcAAw6QAAw4F4vdQFsu7KXrhQKYrhNbmUQN6miPMAAQPNAAN6GiQNcGUKXLhQKXLhFsO7QF4PdAAQ4QAAQ6l4PcQlsO7qXLhQqXLhtcGUQt6GivNAAQvMAAt6mig");
	this.shape_1.setTransform(479,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,50.6,205.5,234.9);


(lib.ClipGroup_65_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOQ5Qi5hZiOiiQiOijhOjSQhRjbAAjuQAAjtBRjaQBOjTCOiiQCOijC5hZQC+hdDQAAQDQAAC/BdQC4BZCPCjQCOCiBODTQBRDaAADtQAADuhRDbQhODSiOCjQiPCii4BZQi/BdjQAAQjQAAi+hdg");
	mask.setTransform(119.3,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EgdGBMnQtbmUqYrhQqXrhlsu7Ql4vcAAw6QAAw4F4vdQFsu7KXrhQKYrhNbmUQN6miPMAAQPNAAN6GiQNcGUKXLhQKXLhFsO7QF4PdAAQ4QAAQ6l4PcQlsO7qXLhQqXLhtcGUQt6GivNAAQvMAAt6mig");
	this.shape.setTransform(479,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.6,50.6,205.5,234.9);


(lib.ClipGroup_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqeW7MAAAgt1IE/AAQDQABC9B0QC4BwCODLQCNDLBOEHQBQEQAAEoQAAEqhQERQhOEHiPDLQiODLi5BwQi8BzjRAAg");
	mask.setTransform(118.2,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.8,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.8,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.8,270.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_3.setTransform(143.8,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.8,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.8,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.8,204.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.8,185.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_8.setTransform(143.8,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dAsIAAhWMAs7AAAIAABWg");
	this.shape_9.setTransform(143.8,146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_10.setTransform(143.8,126.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.8,107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.8,88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.8,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.8,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_15.setTransform(143.8,35.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.8,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.8,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.8,4.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(51.1,2.8,134.3,287.3);


(lib.ClipGroup_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi4hwiPjLQiOjLhOkHQhRkRAAkqQAAkpBRkQQBOkICOjLQCPjLC4hwQC/hzDPAAQDRAAC+BzQC5BwCODLQCODLBOEIQBREQAAEpQAAEqhRERQhOEHiODLQiODLi5BwQi+BzjRAAQjPAAi/hzg");
	mask.setTransform(102.7,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("AvtS6MAeFgn3IBWCEMgeFAn4g");
	this.shape.setTransform(146.7,228);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EgWoBMnQqcmUoErhQoErhkbu7QklvcAAw6QAAw4ElvdQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIFLhQIDLhEbO7QElPdAAQ4QAAQ6klPcQkbO7oDLhQoFLhqcGUQq0Gir1AAQr0AAq0mig");
	this.shape_1.setTransform(382.5,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,21.3,195.5,293.6);


(lib.ClipGroup_62_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi4hwiPjLQiOjLhOkHQhRkRAAkqQAAkpBRkQQBOkICOjLQCPjLC4hwQC/hzDPAAQDRAAC+BzQC5BwCODLQCODLBOEIQBREQAAEpQAAEqhRERQhOEHiODLQiODLi5BwQi+BzjRAAQjPAAi/hzg");
	mask.setTransform(102.7,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgWoBMnQqcmUoErhQoErhkbu7QklvcAAw6QAAw4ElvdQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIFLhQIDLhEbO7QElPdAAQ4QAAQ6klPcQkbO7oDLhQoFLhqcGUQq0Gir1AAQr0AAq0mig");
	this.shape.setTransform(382.5,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,21.3,195.5,293.6);


(lib.ClipGroup_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi4hwiPjLQiOjLhOkHQhRkRAAkqQAAkpBRkQQBOkICOjLQCPjLC4hwQC/hzDPAAQDRAAC+BzQC5BwCODLQCODLBOEIQBREQAAEpQAAEqhRERQhOEHiODLQiODLi5BwQi+BzjRAAQjPAAi/hzg");
	mask.setTransform(102.7,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("AwaR2MAeGgn4ICvENMgeFAn4g");
	this.shape.setTransform(116,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.9,24.7,194.5,268.9);


(lib.ClipGroup_60_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi4hwiPjLQiOjLhOkHQhRkRAAkqQAAkpBRkQQBOkICOjLQCPjLC4hwQC/hzDPAAQDRAAC+BzQC5BwCODLQCODLBOEIQBREQAAEpQAAEqhRERQhOEHiODLQiODLi5BwQi+BzjRAAQjPAAi/hzg");
	mask.setTransform(102.7,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgWoBMnQqcmUoErhQoErhkbu7QklvcAAw6QAAw4ElvdQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIFLhQIDLhEbO7QElPdAAQ4QAAQ6klPcQkbO7oDLhQoFLhqcGUQq0Gir1AAQr0AAq0mig");
	this.shape.setTransform(382.5,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,21.3,195.5,293.6);


(lib.ClipGroup_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi4hwiPjLQiOjLhOkHQhRkRAAkqQAAkpBRkQQBOkICOjLQCPjLC4hwQC/hzDPAAQDRAAC+BzQC5BwCODLQCODLBOEIQBREQAAEpQAAEqhRERQhOEHiODLQiODLi5BwQi+BzjRAAQjPAAi/hzg");
	mask.setTransform(111.4,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("Av9ShMAeFgn4IB2C3MgeFAn4g");
	this.shape.setTransform(102.3,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.7,0,195.9,273.6);


(lib.ClipGroup_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AknQ5QiJhZhqiiQhqijg6jSQg8jbAAjuQAAjtA8jaQA6jTBqiiQBqijCJhZQCOhdCZAAQCbAACOBdQCIBZBqCjQBqCiA6DTQA8DaAADtQAADug8DbQg6DShqCjQhqCiiIBZQiOBdibAAQiZAAiOhdg");
	mask.setTransform(92.8,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AkpQ1QiKhZhqiiQhriig5jSQg9jZAAjtQAAjsA9jaQA5jSBriiQBrihCJhZQCOhcCbAAQCcAACOBcQCKBZBqChQBrCiA5DSQA9DZAADtQAADtg9DZQg5DShrCiQhqCiiKBZQiOBcicAAQibAAiOhcg");
	this.shape.setTransform(98.5,169.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E59D0C").s().p("EgWoBMnQqcmUoErhQoErhkbu7QklvcAAw6QAAw4ElvdQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIELhQIELhEbO7QElPdAAQ4QAAQ6klPcQkbO7oELhQoELhqcGUQq0Gir1AAQr0AAq0mig");
	this.shape_1.setTransform(372.6,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,50.6,152.7,234.9);


(lib.ClipGroup_57_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AknQ5QiJhZhqiiQhqijg6jSQg8jbAAjuQAAjtA8jaQA6jTBqiiQBqijCJhZQCOhdCZAAQCbAACOBdQCIBZBqCjQBqCiA6DTQA8DaAADtQAADug8DbQg6DShqCjQhqCiiIBZQiOBdibAAQiZAAiOhdg");
	mask.setTransform(92.8,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EgWoBMnQqcmUoErhQoErhkbu7QklvcAAw6QAAw4ElvdQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIELhQIELhEbO7QElPdAAQ4QAAQ6klPcQkbO7oELhQoELhqcGUQq0Gir1AAQr0AAq0mig");
	this.shape.setTransform(372.6,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,50.6,152.7,234.9);


(lib.ClipGroup_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoWW7MAAAgt1IFSAAQCVAACGBzQCEBwBmDLQBlDLA4EIQA5EQABEpQgBEqg5ERQg4EHhlDLQhmDLiEBwQiGBziVAAg");
	mask.setTransform(107.8,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.8,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.8,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.8,270.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_3.setTransform(143.8,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.8,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.8,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.8,204.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.8,185.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_8.setTransform(143.8,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dAsIAAhWMAs7AAAIAABWg");
	this.shape_9.setTransform(143.8,146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_10.setTransform(143.8,126.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.8,107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.8,88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.8,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.8,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_15.setTransform(143.8,35.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.8,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.8,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.8,4.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.2,2.8,107.2,287.3);


(lib.ClipGroup_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiEhwhljLQhmjLg4kHQg5kRAAkqQAAkpA5kQQA4kIBmjLQBljLCEhwQCIhzCUAAQCUAACJBzQCDBwBmDLQBmDLA4EIQA5EQAAEpQAAEqg5ERQg4EHhmDLQhlDLiEBwQiJBziUAAQiUAAiIhzg");
	mask.setTransform(73.4,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("ArOS6MAVggn3IA9CEMgVfAn4g");
	this.shape.setTransform(104.8,228);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EgQKBMnQndmUlwrhQlxrhjKu7QjSvcABw6QgBw4DSvdQDKu7FxrhQFwrhHdmUQHumiIcAAQIcAAHvGiQHdGUFxLhQFwLhDKO7QDSPdgBQ4QABQ6jSPcQjKO7lwLhQlxLhndGUQnvGiocAAQocAAnumig");
	this.shape_1.setTransform(273.2,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,21.3,139.7,293.6);


(lib.ClipGroup_54_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiEhwhljLQhmjLg4kHQg5kRAAkqQAAkpA5kQQA4kIBmjLQBljLCEhwQCIhzCUAAQCUAACJBzQCDBwBmDLQBmDLA4EIQA5EQAAEpQAAEqg5ERQg4EHhmDLQhlDLiEBwQiJBziUAAQiUAAiIhzg");
	mask.setTransform(73.4,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgQKBMnQndmUlwrhQlxrhjKu7QjSvcABw6QgBw4DSvdQDKu7FxrhQFwrhHdmUQHumiIcAAQIcAAHvGiQHdGUFxLhQFwLhDKO7QDSPdgBQ4QABQ6jSPcQjKO7lwLhQlxLhndGUQnvGiocAAQocAAnumig");
	this.shape.setTransform(273.2,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,21.3,139.7,293.6);


(lib.ClipGroup_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiEhwhljLQhmjLg4kHQg5kRAAkqQAAkpA5kQQA4kIBmjLQBljLCEhwQCIhzCUAAQCUAACJBzQCDBwBmDLQBmDLA4EIQA5EQAAEpQAAEqg5ERQg4EHhmDLQhlDLiEBwQiJBziUAAQiUAAiIhzg");
	mask.setTransform(73.4,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("ArtR2MAVfgn4IB8ENMgVeAn4g");
	this.shape.setTransform(82.8,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,24.7,139,268.9);


(lib.ClipGroup_52_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiEhwhljLQhmjLg4kHQg5kRAAkqQAAkpA5kQQA4kIBmjLQBljLCEhwQCIhzCUAAQCUAACJBzQCDBwBmDLQBmDLA4EIQA5EQAAEpQAAEqg5ERQg4EHhmDLQhlDLiEBwQiJBziUAAQiUAAiIhzg");
	mask.setTransform(73.4,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgQKBMnQndmUlwrhQlxrhjKu7QjSvcABw6QgBw4DSvdQDKu7FxrhQFwrhHdmUQHumiIcAAQIcAAHvGiQHdGUFxLhQFwLhDKO7QDSPdgBQ4QABQ6jSPcQjKO7lwLhQlxLhndGUQnvGiocAAQocAAnumig");
	this.shape.setTransform(273.2,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,21.3,139.7,293.6);


(lib.ClipGroup_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiEhwhljLQhmjLg4kHQg5kRAAkqQAAkpA5kQQA4kIBmjLQBljLCEhwQCIhzCUAAQCUAACJBzQCDBwBmDLQBmDLA4EIQA5EQAAEpQAAEqg5ERQg4EHhmDLQhlDLiEBwQiJBziUAAQiUAAiIhzg");
	mask.setTransform(79.6,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("ArZShMAVfgn4IBUC3MgVfAn4g");
	this.shape.setTransform(73.1,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.3,0,139.9,273.6);


(lib.ClipGroup_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjHQ5QhchZhHiiQiWlYAAnmQAAnkCWlYQBHijBchZQBghdBnAAQBoAABfBdQBcBZBICjQCWFYAAHkQAAHmiWFYQhICihcBZQhfBdhoAAQhnAAhghdg");
	mask.setTransform(66.3,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AjIQ5QhchZhIiiQiXlZAAnlQAAnlCXlYQBIiiBchZQBghdBoAAQBoAABgBdQBdBZBHCiQCYFYAAHlQAAHliYFZQhHCihdBZQhgBdhoAAQhoAAhghdg");
	this.shape.setTransform(71.7,169.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E59D0C").s().p("EgQKBMnQndmUlwrhQlxrhjKu7QjSvcAAw6QAAw4DSvdQDKu7FxrhQFwrhHdmUQHvmiIbAAQIdAAHuGiQHdGUFxLhQFwLhDKO7QDRPdAAQ4QAAQ6jRPcQjKO7lwLhQlxLhndGUQnuGiodAAQobAAnvmig");
	this.shape_1.setTransform(266.1,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.9,50.6,102.8,234.9);


(lib.ClipGroup_49_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjHQ5QhchZhHiiQiWlYAAnmQAAnkCWlYQBHijBchZQBghdBnAAQBoAABfBdQBcBZBICjQCWFYAAHkQAAHmiWFYQhICihcBZQhfBdhoAAQhnAAhghdg");
	mask.setTransform(66.3,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EgQKBMnQndmUlwrhQlxrhjKu7QjSvcAAw6QAAw4DSvdQDKu7FxrhQFwrhHdmUQHvmiIbAAQIdAAHuGiQHdGUFxLhQFwLhDKO7QDRPdAAQ4QAAQ6jRPcQjKO7lwLhQlxLhndGUQnuGiodAAQobAAnvmig");
	this.shape.setTransform(266.1,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.9,50.6,102.8,234.9);


(lib.ClipGroup_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmRW7MAAAgt1IFuAAQBYABBRB0QBOBwA+DLQCAGtAAJdQAAJfiBGuQg9DLhPBwQhSBzhXAAg");
	mask.setTransform(94.5,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.9,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.9,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.9,270.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_3.setTransform(143.9,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.9,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.9,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.9,204.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.9,185.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_8.setTransform(143.9,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dAsIAAhWMAs7AAAIAABWg");
	this.shape_9.setTransform(143.9,146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_10.setTransform(143.9,126.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.9,107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.9,88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.9,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.9,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_15.setTransform(143.9,35.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.9,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.9,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.9,4.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.2,2.8,80.5,287.3);


(lib.ClipGroup_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(44,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("AmuS6MAM4gn3IAlCEMgM4An4g");
	this.shape.setTransform(62.9,228);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EgJrBMnQkfmUjdrhQjdrhh6u7Qh9vcAAw6QAAw4B9vdQB6u7DdrhQDdrhEfmUQEomiFDAAQFEAAEpGiQEeGUDdLhQDdLhB5O7QB+PdAAQ4QAAQ6h+PcQh5O7jdLhQjdLhkeGUQkpGilEAAQlDAAkomig");
	this.shape_1.setTransform(164,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,21.3,83.8,293.6);


(lib.ClipGroup_46_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(44,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgJrBMnQkfmUjdrhQjdrhh6u7Qh9vcAAw6QAAw4B9vdQB6u7DdrhQDdrhEfmUQEomiFDAAQFEAAEpGiQEeGUDdLhQDdLhB5O7QB+PdAAQ4QAAQ6h+PcQh5O7jdLhQjdLhkeGUQkpGilEAAQlDAAkomig");
	this.shape.setTransform(164,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,21.3,83.8,293.6);


(lib.ClipGroup_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(44,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("AnBR2MAM4gn4IBLENMgM4An4g");
	this.shape.setTransform(49.7,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,24.7,83.4,268.9);


(lib.ClipGroup_44_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(44,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgJrBMnQkfmUjdrhQjdrhh6u7Qh9vcAAw6QAAw4B9vdQB6u7DdrhQDdrhEfmUQEomiFDAAQFEAAEpGiQEeGUDdLhQDdLhB5O7QB+PdAAQ4QAAQ6h+PcQh5O7jdLhQjdLhkeGUQkpGilEAAQlDAAkomig");
	this.shape.setTransform(164,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,21.3,83.8,293.6);


(lib.ClipGroup_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(47.7,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("Am1ShMAM4gn4IAzC3MgM4An4g");
	this.shape.setTransform(43.8,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.7,0,84,273.6);


(lib.ClipGroup_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjDM+QhSlYAAnmQAAnkBSlYQBRlZByAAQBzAABSFZQBSFYAAHkQAAHmhSFYQhSFYhzAAQhyAAhRlYg");
	mask.setTransform(39.8,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AjENBQhTlaAAnnQAAnmBTlaQBRlZBzAAQBzAABTFZQBSFaAAHmQAAHnhSFaQhTFZhzAAQhzAAhRlZg");
	this.shape.setTransform(44.9,168.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E59D0C").s().p("EgJrBMnQkfmUjdrhQjdrhh6u7Qh9vcAAw6QAAw4B9vdQB6u7DdrhQDdrhEfmUQEomiFDAAQFEAAEpGiQEeGUDdLhQDdLhB5O7QB+PdAAQ4QAAQ6h+PcQh5O7jdLhQjdLhkeGUQkpGilEAAQlDAAkomig");
	this.shape_1.setTransform(159.7,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,50.6,55.8,234.9);


(lib.ClipGroup_41_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjDM+QhSlYAAnmQAAnkBSlYQBRlZByAAQBzAABSFZQBSFYAAHkQAAHmhSFYQhSFYhzAAQhyAAhRlYg");
	mask.setTransform(39.8,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EgJrBMnQkfmUjdrhQjdrhh6u7Qh9vcAAw6QAAw4B9vdQB6u7DdrhQDdrhEfmUQEomiFDAAQFEAAEpGiQEeGUDdLhQDdLhB5O7QB+PdAAQ4QAAQ6h+PcQh5O7jdLhQjdLhkeGUQkpGilEAAQlDAAkomig");
	this.shape.setTransform(159.7,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,50.6,55.8,234.9);


(lib.ClipGroup_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AipW7QgOAAgLgKQgKgLAAgOMAAAgsvQAAgOAKgLQALgKAOAAIFTAAQAOAAALAKQAKAKAAAPMAAAAsvQAAAPgKAKQgLAKgOAAg");
	mask.setTransform(211.4,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.8,289);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.8,281.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.8,271);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAYIAAgvMAs7AAAIAAAvg");
	this.shape_3.setTransform(143.8,257.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.8,241);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.8,223.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.8,205.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.8,186.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhQMAs7AAAIAABQg");
	this.shape_8.setTransform(143.8,166.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dAsIAAhXMAs7AAAIAABXg");
	this.shape_9.setTransform(143.8,146.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhQMAs7AAAIAABQg");
	this.shape_10.setTransform(143.8,126.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.8,107.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.8,88.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.8,70.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.8,52.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_15.setTransform(143.8,35.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.8,22.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.8,12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.8,4.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190.9,3.1,41.1,287.3);


(lib.ClipGroup_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AIpW7QkMAAj2hzQjrhwi3jLQi3jLhkkIQhokQAAkqQAAkpBokRQBlkHC2jLQC3jLDrhwQD2hzEMAAIDWAAMAAAAt1g");
	mask.setTransform(162.4,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.9,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.9,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.9,270.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_3.setTransform(143.9,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.9,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.9,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.9,204.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.9,185.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_8.setTransform(143.9,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dArIAAhWMAs7AAAIAABWg");
	this.shape_9.setTransform(143.9,146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_10.setTransform(143.9,126.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.9,107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.9,88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.9,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.9,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAYIAAgvMAs7AAAIAAAvg");
	this.shape_15.setTransform(143.9,35.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.9,22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.9,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.9,4.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.7,2.8,153.5,287.3);


(lib.ClipGroup_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjthwi3jLQi4jLhjkIQhpkQAAkqQAAkpBpkRQBkkHC3jLQC3jLDthwQD1hzELAAQEMAAD2BzQDsBwC4DLQC3DLBkEHQBoERAAEpQAAEqhoEQQhkEIi3DLQi4DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(132.1,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A0NS6MAmsgn3IBvCEMgmsAn3g");
	this.shape.setTransform(188.6,227.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EgdGBMnQtcmVqXrgQqXrhlsu7Ql4vdAAw5QAAw5F4vcQFsu7KXrhQKXrhNcmUQN5miPNAAQPNAAN6GiQNbGUKYLhQKXLhFsO7QF4PcAAQ5QAAQ5l4PdQlsO7qXLhQqYLhtbGUQt6GivNAAQvNAAt5mig");
	this.shape_1.setTransform(491.8,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.9,21.3,251.4,293.5);


(lib.ClipGroup_29_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjthwi3jLQi4jLhjkIQhpkQAAkqQAAkpBpkRQBkkHC3jLQC3jLDthwQD1hzELAAQEMAAD2BzQDsBwC4DLQC3DLBkEHQBoERAAEpQAAEqhoEQQhkEIi3DLQi4DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(132.1,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgdGBMnQtcmVqXrgQqXrhlsu7Ql4vdAAw5QAAw5F4vcQFsu7KXrhQKXrhNcmUQN5miPNAAQPNAAN6GiQNbGUKYLhQKXLhFsO7QF4PcAAQ5QAAQ5l4PdQlsO7qXLhQqYLhtbGUQt6GivNAAQvNAAt5mig");
	this.shape.setTransform(491.8,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.9,21.3,251.4,293.5);


(lib.ClipGroup_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjthwi3jLQi4jLhjkIQhpkQAAkqQAAkpBpkRQBkkHC3jLQC3jLDthwQD1hzELAAQEMAAD2BzQDsBwC4DLQC3DLBkEHQBoERAAEpQAAEqhoEQQhkEIi3DLQi4DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(132.1,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A1GR1MAmsgn3IDhENMgmsAn4g");
	this.shape.setTransform(149.2,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,24.7,250.2,268.9);


(lib.ClipGroup_27_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjthwi3jLQi4jLhjkIQhpkQAAkqQAAkpBpkRQBkkHC3jLQC3jLDthwQD1hzELAAQEMAAD2BzQDsBwC4DLQC3DLBkEHQBoERAAEpQAAEqhoEQQhkEIi3DLQi4DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(132.1,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgdGBMnQtcmVqXrgQqXrhlsu7Ql4vdAAw5QAAw5F4vcQFsu7KXrhQKXrhNcmUQN5miPNAAQPNAAN6GiQNbGUKYLhQKXLhFsO7QF4PcAAQ5QAAQ5l4PdQlsO7qXLhQqYLhtbGUQt6GivNAAQvNAAt5mig");
	this.shape.setTransform(491.8,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.9,21.3,251.4,293.5);


(lib.ClipGroup_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoAVIQjuhwi2jLQi4jLhkkIQhnkQAAkqQAAkpBnkRQBlkHC3jLQC2jLDuhwQD1hzELAAQEMAAD2BzQDsBwC3DLQC3DLBlEHQBoERgBEpQABEqhoEQQhlEIi3DLQi3DLjsBwQj2BzkMAAQkLAAj1hzg");
	mask.setTransform(143.3,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("A0iShMAmsgn3ICYC2MgmrAn3g");
	this.shape.setTransform(131.5,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.2,0,251.9,273.6);


(lib.ClipGroup_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOQ5Qi4hZiPiiQiOijhOjTQhRjaAAjuQAAjtBRjaQBOjTCOijQCPiiC4hZQC/hdDPAAQDRAAC+BdQC5BZCOCiQCOCjBODTQBRDaAADtQAADuhRDaQhODTiOCjQiOCii5BZQi+BcjRAAQjPAAi/hcg");
	mask.setTransform(119.2,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AmUQxQi7hYiQiiQiQihhPjRQhSjZAAjsQAAjsBSjYQBPjRCQiiQCQihC7hYQDBhcDTAAQDTAADCBcQC7BYCQChQCQCiBPDRQBSDYAADsQAADshSDZQhPDRiQChQiQCii7BYQjCBcjTAAQjTAAjBhcg");
	this.shape.setTransform(112.4,170);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E59D0C").s().p("EgdGBMnQtcmVqXrgQqXrhlsu7Ql4vdAAw5QAAw5F4vcQFsu7KXrhQKXrhNcmUQN5miPNAAQPNAAN6GiQNbGUKYLhQKXLhFsO7QF4PcAAQ5QAAQ5l4PdQlsO7qXLhQqYLhtbGUQt6GivNAAQvNAAt5mig");
	this.shape_1.setTransform(479,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,50.6,205.5,234.8);


(lib.ClipGroup_24_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOQ5Qi4hZiPiiQiOijhOjTQhRjaAAjuQAAjtBRjaQBOjTCOijQCPiiC4hZQC/hdDPAAQDRAAC+BdQC5BZCOCiQCOCjBODTQBRDaAADtQAADuhRDaQhODTiOCjQiOCii5BZQi+BcjRAAQjPAAi/hcg");
	mask.setTransform(119.2,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EgdGBMnQtcmVqXrgQqXrhlsu7Ql4vdAAw5QAAw5F4vcQFsu7KXrhQKXrhNcmUQN5miPNAAQPNAAN6GiQNbGUKYLhQKXLhFsO7QF4PcAAQ5QAAQ5l4PdQlsO7qXLhQqYLhtbGUQt6GivNAAQvNAAt5mig");
	this.shape.setTransform(479,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,50.6,205.5,234.8);


(lib.ClipGroup_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFjW7QjRAAi8hzQi5hwiOjLQiOjLhPkIQhQkQAAkqQAAkpBQkQQBOkHCOjLQCOjKC3hxQC8hzDRgBIE/AAMAAAAt1g");
	mask.setTransform(169.5,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.8,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.8,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.8,270.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_3.setTransform(143.8,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.8,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.8,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.8,204.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.8,185.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_8.setTransform(143.8,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dArIAAhWMAs7AAAIAABWg");
	this.shape_9.setTransform(143.8,146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_10.setTransform(143.8,126.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.8,107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.8,88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.8,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.8,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAYIAAgvMAs7AAAIAAAvg");
	this.shape_15.setTransform(143.8,35.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.8,22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.8,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.8,4.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102.3,2.8,134.3,287.3);


(lib.ClipGroup_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi5hwiOjLQiOjLhOkIQhRkQAAkqQAAkpBRkRQBOkHCOjLQCOjLC5hwQC+hzDQAAQDQAAC/BzQC4BwCPDLQCODLBOEHQBRERAAEpQAAEqhREQQhOEIiODLQiPDLi4BwQi/BzjQAAQjQAAi+hzg");
	mask.setTransform(102.7,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("AvtS6MAeFgn3IBWCEMgeFAn3g");
	this.shape.setTransform(146.7,227.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EgWoBMnQqcmVoErgQoErhkbu7QklvdAAw5QAAw5ElvcQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIFLhQIDLhEbO7QElPcAAQ5QAAQ5klPdQkbO7oDLhQoFLgqcGVQq0Gir1AAQr0AAq0mig");
	this.shape_1.setTransform(382.5,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,21.3,195.5,293.5);


(lib.ClipGroup_21_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi5hwiOjLQiOjLhOkIQhRkQAAkqQAAkpBRkRQBOkHCOjLQCOjLC5hwQC+hzDQAAQDQAAC/BzQC4BwCPDLQCODLBOEHQBRERAAEpQAAEqhREQQhOEIiODLQiPDLi4BwQi/BzjQAAQjQAAi+hzg");
	mask.setTransform(102.7,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgWoBMnQqcmVoErgQoErhkbu7QklvdAAw5QAAw5ElvcQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIFLhQIDLhEbO7QElPcAAQ5QAAQ5klPdQkbO7oDLhQoFLgqcGVQq0Gir1AAQr0AAq0mig");
	this.shape.setTransform(382.5,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,21.3,195.5,293.5);


(lib.ClipGroup_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi5hwiOjLQiOjLhOkIQhRkQAAkqQAAkpBRkRQBOkHCOjLQCOjLC5hwQC+hzDQAAQDQAAC/BzQC4BwCPDLQCODLBOEHQBRERAAEpQAAEqhREQQhOEIiODLQiPDLi4BwQi/BzjQAAQjQAAi+hzg");
	mask.setTransform(102.7,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("AwaR1MAeGgn3ICvENMgeFAn4g");
	this.shape.setTransform(116,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.9,24.7,194.5,268.9);


(lib.ClipGroup_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi5hwiOjLQiOjLhOkIQhRkQAAkqQAAkpBRkRQBOkHCOjLQCOjLC5hwQC+hzDQAAQDQAAC/BzQC4BwCPDLQCODLBOEHQBRERAAEpQAAEqhREQQhOEIiODLQiPDLi4BwQi/BzjQAAQjQAAi+hzg");
	mask.setTransform(102.7,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgWoBMnQqcmVoErgQoErhkbu7QklvdAAw5QAAw5ElvcQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIFLhQIDLhEbO7QElPcAAQ5QAAQ5klPdQkbO7oDLhQoFLgqcGVQq0Gir1AAQr0AAq0mig");
	this.shape.setTransform(382.5,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,21.3,195.5,293.5);


(lib.ClipGroup_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmOVIQi5hwiOjLQiOjLhOkIQhRkQAAkqQAAkpBRkRQBOkHCOjLQCOjLC5hwQC+hzDQAAQDQAAC/BzQC4BwCPDLQCODLBOEHQBRERAAEpQAAEqhREQQhOEIiODLQiPDLi4BwQi/BzjQAAQjQAAi+hzg");
	mask.setTransform(111.4,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("Av9ShMAeFgn3IB2C2MgeFAn3g");
	this.shape.setTransform(102.3,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.7,0,195.9,273.6);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkoQ5QiIhZhqiiQhqijg6jTQg8jaAAjuQAAjtA8jaQA6jTBqijQBqiiCIhZQCOhdCaAAQCbAACNBdQCJBZBqCiQBqCjA6DTQA8DaAADtQAADug8DaQg6DThqCjQhqCiiJBZQiNBcibAAQiaAAiOhcg");
	mask.setTransform(92.8,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AkpQ1QiKhZhqiiQhqihg6jTQg9jZAAjtQAAjsA9jZQA6jTBqihQBqiiCKhZQCPhcCaAAQCbAACPBcQCKBZBqCiQBqChA7DTQA8DZAADsQAADug8DYQg7DThqChQhqCiiKBZQiPBcibAAQiaAAiPhcg");
	this.shape.setTransform(87.1,169.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E59D0C").s().p("EgWoBMnQqcmVoErgQoErhkbu7QklvdAAw5QAAw5ElvcQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIELhQIELhEbO7QElPcAAQ5QAAQ5klPdQkbO7oELhQoELgqcGVQq0Gir1AAQr0AAq0mig");
	this.shape_1.setTransform(372.6,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,50.6,152.7,234.8);


(lib.ClipGroup_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkoQ5QiIhZhqiiQhqijg6jTQg8jaAAjuQAAjtA8jaQA6jTBqijQBqiiCIhZQCOhdCaAAQCbAACNBdQCJBZBqCiQBqCjA6DTQA8DaAADtQAADug8DaQg6DThqCjQhqCiiJBZQiNBcibAAQiaAAiOhcg");
	mask.setTransform(92.8,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EgWoBMnQqcmVoErgQoErhkbu7QklvdAAw5QAAw5ElvcQEbu7IErhQIErhKcmUQK0miL0AAQL1AAK0GiQKcGUIELhQIELhEbO7QElPcAAQ5QAAQ5klPdQkbO7oELhQoELgqcGVQq0Gir1AAQr0AAq0mig");
	this.shape.setTransform(372.6,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,50.6,152.7,234.8);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ADFW7QiVAAiHhzQiDhwhmjLQhljLg4kIQg6kQAAkqQAAkpA6kRQA4kHBljLQBmjLCDhwQCHhzCVAAIFSAAMAAAAt1g");
	mask.setTransform(179.9,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.8,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.8,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.8,270.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_3.setTransform(143.8,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.8,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.8,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.8,204.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.8,185.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_8.setTransform(143.8,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dArIAAhWMAs7AAAIAABWg");
	this.shape_9.setTransform(143.8,146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_10.setTransform(143.8,126.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.8,107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.8,88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.8,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.8,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAYIAAgvMAs7AAAIAAAvg");
	this.shape_15.setTransform(143.8,35.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.8,22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.8,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.8,4.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126.3,2.8,107.2,287.3);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiDhwhmjLQhmjLg4kIQg5kQAAkqQAAkpA5kRQA4kHBmjLQBmjLCDhwQCJhzCTAAQCVAACIBzQCEBwBlDLQBmDLA4EHQA5ERAAEpQAAEqg5EQQg4EIhmDLQhlDLiEBwQiIBziVAAQiTAAiJhzg");
	mask.setTransform(73.4,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("ArNS6MAVegn3IA9CEMgVeAn3g");
	this.shape.setTransform(104.8,227.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EgQKBMnQnemVlwrgQlwrhjKu7QjSvdAAw5QAAw5DSvcQDKu7FwrhQFwrhHemUQHumiIcAAQIcAAHvGiQHdGUFwLhQFxLhDKO7QDSPcAAQ5QgBQ5jRPdQjKO7lxLhQlvLgneGVQnvGiocAAQocAAnumig");
	this.shape_1.setTransform(273.3,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.2,21.3,139.6,293.5);


(lib.ClipGroup_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiDhwhmjLQhmjLg4kIQg5kQAAkqQAAkpA5kRQA4kHBmjLQBmjLCDhwQCJhzCTAAQCVAACIBzQCEBwBlDLQBmDLA4EHQA5ERAAEpQAAEqg5EQQg4EIhmDLQhlDLiEBwQiIBziVAAQiTAAiJhzg");
	mask.setTransform(73.4,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgQKBMnQnemVlwrgQlwrhjKu7QjSvdAAw5QAAw5DSvcQDKu7FwrhQFwrhHemUQHumiIcAAQIcAAHvGiQHdGUFwLhQFxLhDKO7QDSPcAAQ5QgBQ5jRPdQjKO7lxLhQlvLgneGVQnvGiocAAQocAAnumig");
	this.shape.setTransform(273.3,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.2,21.3,139.6,293.5);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiDhwhmjLQhmjLg4kIQg5kQAAkqQAAkpA5kRQA4kHBmjLQBljLCEhwQCJhzCTAAQCVAACIBzQCEBwBlDLQBmDLA4EHQA5ERAAEpQAAEqg5EQQg4EIhmDLQhlDLiEBwQiIBziVAAQiTAAiJhzg");
	mask.setTransform(73.4,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("ArtR1MAVegn3IB9ENMgVeAn4g");
	this.shape.setTransform(82.9,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,24.7,139,268.9);


(lib.ClipGroup_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiDhwhmjLQhmjLg4kIQg5kQAAkqQAAkpA5kRQA4kHBmjLQBmjLCDhwQCJhzCTAAQCVAACIBzQCEBwBlDLQBmDLA4EHQA5ERAAEpQAAEqg5EQQg4EIhmDLQhlDLiEBwQiIBziVAAQiTAAiJhzg");
	mask.setTransform(73.4,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgQKBMnQnemVlwrgQlwrhjKu7QjSvdAAw5QAAw5DSvcQDKu7FwrhQFwrhHemUQHumiIcAAQIcAAHvGiQHdGUFwLhQFxLhDKO7QDSPcAAQ5QgBQ5jRPdQjKO7lxLhQlvLgneGVQnvGiocAAQocAAnumig");
	this.shape.setTransform(273.3,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.2,21.3,139.6,293.5);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcVIQiDhwhmjLQhmjLg4kIQg5kQAAkqQAAkpA5kRQA4kHBmjLQBljLCEhwQCJhzCTAAQCVAACIBzQCEBwBlDLQBmDLA4EHQA5ERAAEpQAAEqg5EQQg4EIhmDLQhlDLiEBwQiIBziVAAQiTAAiJhzg");
	mask.setTransform(79.6,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("ArZShMAVegn3IBVC2MgVeAn3g");
	this.shape.setTransform(73.1,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,0,139.9,273.6);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjGQ5QhchZhIiiQiWlZAAnlQAAnkCWlZQBIiiBchZQBfhdBnAAQBoAABgBdQBcBZBHCiQCWFZAAHkQAAHliWFZQhHCihcBZQhgBchoAAQhnAAhfhcg");
	mask.setTransform(66.2,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AjIQ5QhchZhIiiQiXlZAAnlQAAnkCXlZQBIiiBchZQBghcBogBQBoABBhBcQBcBZBHCiQCYFZAAHkQAAHliYFZQhHCihcBZQhhBdhoAAQhoAAhghdg");
	this.shape.setTransform(60.8,169.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E59D0C").s().p("EgQKBMnQnemVlwrgQlwrhjLu7QjQvdgBw5QABw5DQvcQDLu7FwrhQFwrhHemUQHvmiIbAAQIdAAHuGiQHdGUFxLhQFwLhDKO7QDRPcAAQ5QAAQ5jRPdQjKO7lwLhQlxLgndGVQnuGiodAAQobAAnvmig");
	this.shape_1.setTransform(266.1,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.9,50.6,102.8,234.8);


(lib.ClipGroup_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjGQ5QhchZhIiiQiWlZAAnlQAAnkCWlZQBIiiBchZQBfhdBnAAQBoAABgBdQBcBZBHCiQCWFZAAHkQAAHliWFZQhHCihcBZQhgBchoAAQhnAAhfhcg");
	mask.setTransform(66.2,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EgQKBMnQnemVlwrgQlwrhjLu7QjQvdgBw5QABw5DQvcQDLu7FwrhQFwrhHemUQHvmiIbAAQIdAAHuGiQHdGUFxLhQFwLhDKO7QDRPcAAQ5QAAQ5jRPdQjKO7lwLhQlxLgndGVQnuGiodAAQobAAnvmig");
	this.shape.setTransform(266.1,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.9,50.6,102.8,234.8);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAlW7QhYAAhShzQhOhwg9jLQiBmuAApfQAApdCBmuQA8jKBPhxQBRhzBYgBIFuAAMAAAAt1g");
	mask.setTransform(193.3,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape.setTransform(143.9,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_1.setTransform(143.9,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_2.setTransform(143.9,270.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFB106").s().p("A2dAZIAAgxMAs7AAAIAAAxg");
	this.shape_3.setTransform(143.9,257.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_4.setTransform(143.9,240.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_5.setTransform(143.9,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_6.setTransform(143.9,204.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_7.setTransform(143.9,185.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_8.setTransform(143.9,166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFB106").s().p("A2dArIAAhWMAs7AAAIAABWg");
	this.shape_9.setTransform(143.9,146.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFB106").s().p("A2dApIAAhRMAs7AAAIAABRg");
	this.shape_10.setTransform(143.9,126.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFB106").s().p("A2dAmIAAhLMAs7AAAIAABLg");
	this.shape_11.setTransform(143.9,107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EFB106").s().p("A2dAjIAAhFMAs7AAAIAABFg");
	this.shape_12.setTransform(143.9,88.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EFB106").s().p("A2dAgIAAg/MAs7AAAIAAA/g");
	this.shape_13.setTransform(143.9,69.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFB106").s().p("A2dAdIAAg5MAs7AAAIAAA5g");
	this.shape_14.setTransform(143.9,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFB106").s().p("A2dAYIAAgvMAs7AAAIAAAvg");
	this.shape_15.setTransform(143.9,35.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EFB106").s().p("A2dAUIAAgnMAs7AAAIAAAng");
	this.shape_16.setTransform(143.9,22.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_17.setTransform(143.9,11.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EFB106").s().p("A2dAOIAAgbMAs7AAAIAAAbg");
	this.shape_18.setTransform(143.9,4.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(153,2.8,80.5,287.3);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(44,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("AmuS6MAM4gn3IAlCEMgM4An3g");
	this.shape.setTransform(62.9,227.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD635").s().p("EgJsBMnQkemVjdrgQjdrhh6u7Qh9vdAAw5QAAw5B9vcQB6u7DdrhQDdrhEemUQEpmiFDAAQFEAAEpGiQEeGUDdLhQDdLhB6O7QB9PcAAQ5QAAQ5h9PdQh6O7jdLhQjdLgkeGVQkpGilEAAQlDAAkpmig");
	this.shape_1.setTransform(163.9,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,21.3,83.8,293.5);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(44,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgJsBMnQkemVjdrgQjdrhh6u7Qh9vdAAw5QAAw5B9vcQB6u7DdrhQDdrhEemUQEpmiFDAAQFEAAEpGiQEeGUDdLhQDdLhB6O7QB9PcAAQ5QAAQ5h9PdQh6O7jdLhQjdLgkeGVQkpGilEAAQlDAAkpmig");
	this.shape.setTransform(163.9,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,21.3,83.8,293.5);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(44,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("AnBR1MAM4gn3IBLENMgM4An4g");
	this.shape.setTransform(49.7,165.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,24.7,83.4,268.9);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(44,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE89B").s().p("EgJsBMnQkemVjdrgQjdrhh6u7Qh9vdAAw5QAAw5B9vcQB6u7DdrhQDdrhEemUQEpmiFDAAQFEAAEpGiQEeGUDdLhQDdLhB6O7QB9PcAAQ5QAAQ5h9PdQh6O7jdLhQjdLgkeGVQkpGilEAAQlDAAkpmig");
	this.shape.setTransform(163.9,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,21.3,83.8,293.5);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	mask.setTransform(47.8,146.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF09C").s().p("Am1ShMAM4gn3IAzC2MgM4An3g");
	this.shape.setTransform(43.9,136.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,0,84,273.6);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjDM+QhSlZAAnlQAAnkBSlZQBRlXBygBQBzABBSFXQBSFZAAHkQAAHlhSFZQhSFXhzAAQhyAAhRlXg");
	mask.setTransform(39.8,168);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD111").s().p("AjFNBQhSlaAAnnQAAnmBSlZQBTlaByAAQBzAABSFaQBTFZAAHmQAAHnhTFaQhSFZhzAAQhyAAhTlZg");
	this.shape.setTransform(34.6,168.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E59D0C").s().p("EgJsBMnQkemVjdrgQjdrhh6u7Qh9vdAAw5QAAw5B9vcQB6u7DdrhQDdrhEemUQEpmiFDAAQFEAAEpGiQEeGUDdLhQDdLhB6O7QB9PcAAQ5QAAQ5h9PdQh6O7jdLhQjdLgkeGVQkpGilEAAQlDAAkpmig");
	this.shape_1.setTransform(159.7,532.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,50.6,55.8,234.8);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjDM+QhSlZAAnlQAAnkBSlZQBRlXBygBQBzABBSFXQBSFZAAHkQAAHlhSFZQhSFXhzAAQhyAAhRlXg");
	mask.setTransform(39.8,168);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC402").s().p("EgJsBMnQkemVjdrgQjdrhh6u7Qh9vdAAw5QAAw5B9vcQB6u7DdrhQDdrhEemUQEpmiFDAAQFEAAEpGiQEeGUDdLhQDdLhB6O7QB9PcAAQ5QAAQ5h9PdQh6O7jdLhQjdLgkeGVQkpGilEAAQlDAAkpmig");
	this.shape.setTransform(159.7,532.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.9,50.6,55.8,234.8);


(lib.logo_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_rewire();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,80);


(lib.kr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kr();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,437,364);


(lib.b_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,439,572);


(lib.ten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(373.8,218.2,1,1,1,0,0,35,217.6);
	this.instance.alpha = 0.5;
	this.instance.shadow = new cjs.Shadow("rgba(107,0,0,1)",10,0,10);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(42.8,218.2,1,1,-1,0,0,35,217.6);
	this.instance_1.alpha = 0.5;
	this.instance_1.shadow = new cjs.Shadow("rgba(107,0,0,1)",-9,5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-11,453,466.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgfSAgXMAAAhAtMA+kAAAMAAABAtg");
	mask.setTransform(200.3,207.2);

	// Layer 1
	this.instance = new lib.kr_1();
	this.instance.setTransform(200.4,166.8,0.917,0.917,0,0,0,218.5,181.9);
	this.instance.alpha = 0.5;
	this.instance.shadow = new cjs.Shadow("rgba(107,0,0,1)",0,10,10);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400.6,358);


(lib.serp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// s8 copy
	this.instance = new lib.s8();
	this.instance.setTransform(873.4,560.3,0.7,0.7,-60,0,0,59.6,41.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:719.5,y:907.7},13,cjs.Ease.get(1)).wait(1));

	// s8
	this.instance_1 = new lib.s8();
	this.instance_1.setTransform(1015.2,419.1,1,1,0,0,0,59.8,41.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:1750.8,y:659.6},18,cjs.Ease.get(1)).wait(1));

	// s7 copy
	this.instance_2 = new lib.s7();
	this.instance_2.setTransform(1004.2,527.5,0.35,0.35,-13,0,0,64.1,52.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({x:1156.9,y:415.9},9,cjs.Ease.get(1)).wait(1));

	// s7
	this.instance_3 = new lib.s7();
	this.instance_3.setTransform(824.7,528.7,1,1,44,0,0,64.2,52.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({rotation:0,x:299.8,y:387.1},14,cjs.Ease.get(1)).wait(1));

	// s6 copy 2
	this.instance_4 = new lib.s6();
	this.instance_4.setTransform(1011,562.7,0.699,0.699,0,75.2,-104.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({x:1199.2,y:751},12,cjs.Ease.get(1)).wait(1));

	// s6 copy
	this.instance_5 = new lib.s6();
	this.instance_5.setTransform(800.2,462.1,1.299,1.299,-60);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({rotation:-75,x:123.9,y:654},18,cjs.Ease.get(1)).wait(1));

	// s6
	this.instance_6 = new lib.s6();
	this.instance_6.setTransform(841.1,552.6,0.3,0.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:637.1,y:436.9},10,cjs.Ease.get(1)).wait(1));

	// s5 copy
	this.instance_7 = new lib.s5();
	this.instance_7.setTransform(868,515,0.55,0.55);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).to({x:633,y:688.3},11,cjs.Ease.get(1)).wait(1));

	// s5
	this.instance_8 = new lib.s5();
	this.instance_8.setTransform(988.1,524.9,1,1,25);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({x:1591.9,y:472.4},16,cjs.Ease.get(1)).wait(1));

	// s4
	this.instance_9 = new lib.s4();
	this.instance_9.setTransform(1041.8,488.1,0.97,0.97,20,0,0,92.4,138.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({rotation:0,x:1488.5,y:136.2},17,cjs.Ease.get(1)).wait(1));

	// s3 copy
	this.instance_10 = new lib.s3();
	this.instance_10.setTransform(948,578.6,0.67,0.67);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({x:1113.6,y:911.3},13,cjs.Ease.get(1)).wait(1));

	// s3
	this.instance_11 = new lib.s3();
	this.instance_11.setTransform(989,545.2,1.15,1.15,-28);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({rotation:0,x:1395.2,y:674.6},16,cjs.Ease.get(1)).wait(1));

	// s2 copy
	this.instance_12 = new lib.s2();
	this.instance_12.setTransform(929.5,630,0.18,0.18);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({_off:false},0).to({x:941.5,y:927.9},12,cjs.Ease.get(1)).wait(1));

	// s2
	this.instance_13 = new lib.s2();
	this.instance_13.setTransform(795.3,469.6,0.45,0.45,74);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).to({rotation:60,x:417.5,y:706},14,cjs.Ease.get(1)).wait(1));

	// s1 copy
	this.instance_14 = new lib.s1();
	this.instance_14.setTransform(986.3,578,0.82,0.82,10);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).to({rotation:0,x:1233,y:568.4},13,cjs.Ease.get(1)).wait(1));

	// s1
	this.instance_15 = new lib.s1();
	this.instance_15.setTransform(782.9,451,2,2,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:119,y:67.4},19,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(663.9,383.6,238,134.8);


(lib.ClipGroup_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2cS6MAq/gn3IB6CEMgq/An4g");
	mask.setTransform(209.6,228);

	// Layer 3
	this.instance = new lib.ClipGroup_78_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.8,93.7,287.6,268.6);


(lib.ClipGroup_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3cR2MAq/gn4ID6ENMgq/An4g");
	mask.setTransform(165.7,187);

	// Layer 3
	this.instance = new lib.ClipGroup_76_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.6,45.9,300.3,282.3);


(lib.ClipGroup_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBQsQjRhYigihQihighYjRQhbjXAAjrQAAjqBbjXQBYjRChigQCgigDRhZQDXhbDqAAQDrAADXBbQDRBYCgChQChCgBYDRQBbDXAADqQAADrhbDXQhYDRihCgQigChjRBYQjWBbjsAAQjqAAjXhbg");
	mask.setTransform(136,171.5);

	// Layer 3
	this.instance = new lib.ClipGroup_73_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,55.5,231.9,231.9);


(lib.ClipGroup_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0NS6MAmtgn3IBuCEMgmsAn4g");
	mask.setTransform(188.7,228);

	// Layer 3
	this.instance = new lib.ClipGroup_70_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.3,93.7,258.8,268.6);


(lib.ClipGroup_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1GR2MAmsgn4IDhENMgmsAn4g");
	mask.setTransform(149.2,187);

	// Layer 3
	this.instance = new lib.ClipGroup_68_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,45.9,270.3,282.3);


(lib.ClipGroup_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmUQyQi7hZiQihQiQiihPjRQhSjZAAjsQAAjsBSjYQBPjRCQiiQCQihC7hZQDChbDSAAQDUAADBBbQC7BZCQChQCQCiBPDRQBSDYAADsQAADshSDZQhPDRiQCiQiQChi7BZQjBBbjUAAQjSAAjChbg");
	mask.setTransform(126.1,170);

	// Layer 3
	this.instance = new lib.ClipGroup_65_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.9,53.5,208.4,233.2);


(lib.ClipGroup_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvtS6MAeFgn3IBWCEMgeFAn4g");
	mask.setTransform(146.7,228);

	// Layer 3
	this.instance = new lib.ClipGroup_62_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.1,93.7,201.3,268.6);


(lib.ClipGroup_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwaR2MAeGgn4ICvENMgeFAn4g");
	mask.setTransform(116,187);

	// Layer 3
	this.instance = new lib.ClipGroup_60_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.9,45.9,210.2,282.3);


(lib.ClipGroup_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkpQ1QiKhZhqiiQhriig5jSQg9jZAAjtQAAjsA9jaQA5jSBriiQBrihCJhZQCOhcCbAAQCcAACOBcQCKBZBqChQBrCiA5DSQA9DZAADtQAADtg9DZQg5DShrCiQhqCiiKBZQiOBcicAAQibAAiOhcg");
	mask.setTransform(98.5,169.6);

	// Layer 3
	this.instance = new lib.ClipGroup_57_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.8,52.7,153.5,234);


(lib.ClipGroup_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArOS6MAVggn3IA9CEMgVfAn4g");
	mask.setTransform(104.8,228);

	// Layer 3
	this.instance = new lib.ClipGroup_54_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.9,93.7,143.8,268.6);


(lib.ClipGroup_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtR2MAVfgn4IB8ENMgVeAn4g");
	mask.setTransform(82.8,187);

	// Layer 3
	this.instance = new lib.ClipGroup_52_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,45.9,150.2,282.3);


(lib.ClipGroup_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjIQ5QhchZhIiiQiXlZAAnlQAAnlCXlYQBIiiBchZQBghdBoAAQBoAABgBdQBdBZBHCiQCYFYAAHlQAAHliYFZQhHCihdBZQhgBdhoAAQhoAAhghdg");
	mask.setTransform(71.7,169.2);

	// Layer 3
	this.instance = new lib.ClipGroup_49_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,51.8,103.3,234.9);


(lib.ClipGroup_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmuS6MAM4gn3IAlCEMgM4An4g");
	mask.setTransform(62.9,228);

	// Layer 3
	this.instance = new lib.ClipGroup_46_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,93.7,86.3,268.6);


(lib.ClipGroup_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBR2MAM4gn4IBLENMgM4An4g");
	mask.setTransform(49.7,187);

	// Layer 3
	this.instance = new lib.ClipGroup_44_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,45.9,90.1,282.3);


(lib.ClipGroup_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjENBQhTlaAAnnQAAnmBTlaQBRlZBzAAQBzAABTFZQBSFaAAHmQAAHnhSFaQhTFZhzAAQhzAAhRlZg");
	mask.setTransform(44.9,168.8);

	// Layer 3
	this.instance = new lib.ClipGroup_41_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.9,50.9,56.1,235.7);


(lib.ClipGroup_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0NS6MAmsgn3IBvCEMgmsAn3g");
	mask.setTransform(188.6,227.9);

	// Layer 3
	this.instance = new lib.ClipGroup_29_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.2,93.7,258.9,268.5);


(lib.ClipGroup_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1GR1MAmsgn3IDhENMgmsAn4g");
	mask.setTransform(149.2,187);

	// Layer 3
	this.instance = new lib.ClipGroup_27_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,45.9,270.3,282.3);


(lib.ClipGroup_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmUQxQi7hYiQiiQiQihhPjRQhSjZAAjsQAAjsBSjYQBPjRCQiiQCQihC7hYQDBhcDTAAQDTAADCBcQC7BYCQChQCQCiBPDRQBSDYAADsQAADshSDZQhPDRiQChQiQCii7BYQjCBcjTAAQjTAAjBhcg");
	mask.setTransform(112.4,170);

	// Layer 3
	this.instance = new lib.ClipGroup_24_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.3,53.5,208.4,233.1);


(lib.ClipGroup_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvtS6MAeFgn3IBWCEMgeFAn3g");
	mask.setTransform(146.7,227.9);

	// Layer 3
	this.instance = new lib.ClipGroup_21_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(46.1,93.7,201.3,268.5);


(lib.ClipGroup_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwaR1MAeGgn3ICvENMgeFAn4g");
	mask.setTransform(116,187);

	// Layer 3
	this.instance = new lib.ClipGroup_19_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.9,45.9,210.2,282.3);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkpQ1QiKhZhqiiQhqihg6jTQg9jZAAjtQAAjsA9jZQA6jTBqihQBqiiCKhZQCPhcCaAAQCbAACPBcQCKBZBqCiQBqChA7DTQA8DZAADsQAADug8DYQg7DThqChQhqCiiKBZQiPBcibAAQiaAAiPhcg");
	mask.setTransform(87.1,169.6);

	// Layer 3
	this.instance = new lib.ClipGroup_16_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.3,52.7,153.5,233.9);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArNS6MAVegn3IA9CEMgVeAn3g");
	mask.setTransform(104.8,227.9);

	// Layer 3
	this.instance = new lib.ClipGroup_13_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.9,93.7,143.8,268.5);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArtR1MAVegn3IB9ENMgVeAn4g");
	mask.setTransform(82.9,187);

	// Layer 3
	this.instance = new lib.ClipGroup_11_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,45.9,150.1,282.3);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjIQ5QhchZhIiiQiXlZAAnlQAAnkCXlZQBIiiBchZQBghcBogBQBoABBhBcQBcBZBHCiQCYFZAAHkQAAHliYFZQhHCihcBZQhhBdhoAAQhoAAhghdg");
	mask.setTransform(60.8,169.2);

	// Layer 3
	this.instance = new lib.ClipGroup_8_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,51.8,103.3,234.8);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmuS6MAM4gn3IAlCEMgM4An3g");
	mask.setTransform(62.9,227.9);

	// Layer 3
	this.instance = new lib.ClipGroup_5_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.7,93.7,86.3,268.5);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBR1MAM4gn3IBLENMgM4An4g");
	mask.setTransform(49.7,187);

	// Layer 3
	this.instance = new lib.ClipGroup_3_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,45.9,90.1,282.3);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjFNBQhSlaAAnnQAAnmBSlZQBTlaByAAQBzAABSFaQBTFZAAHmQAAHnhTFaQhSFZhzAAQhyAAhTlZg");
	mask.setTransform(34.6,168.7);

	// Layer 3
	this.instance = new lib.ClipGroup_0();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,50.9,56.1,235.7);


(lib.mmai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ClipGroup_73();
	this.instance.setTransform(399.7,364.1,1,1,0,0,0,532.2,532.1);

	this.instance_1 = new lib.ClipGroup_74();
	this.instance_1.setTransform(399.7,364.1,1,1,0,0,0,532.2,532.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB9F06").s().p("AnHQ5QjThZijiiQiiijhZjSQhdjbAAjuQAAjtBdjaQBZjTCiiiQCjijDThZQDahdDtAAQDuAADaBdQDTBZCjCjQCiCiBZDTQBcDaAADtQAADuhcDbQhZDSiiCjQijCijTBZQjaBdjuAAQjtAAjahdg");

	this.instance_2 = new lib.ClipGroup_75();
	this.instance_2.setTransform(-6.1,0.1,1,1,0,0,0,153,146.8);

	this.instance_3 = new lib.ClipGroup_76();
	this.instance_3.setTransform(392.6,364.1,1,1,0,0,0,539.3,532.1);

	this.instance_4 = new lib.ClipGroup_77();
	this.instance_4.setTransform(11.2,6.8,1,1,0,0,0,157.9,153.5);

	this.instance_5 = new lib.ClipGroup_78();
	this.instance_5.setTransform(392.6,364.1,1,1,0,0,0,539.3,532.1);

	this.instance_6 = new lib.ClipGroup_79();
	this.instance_6.setTransform(392.6,364.1,1,1,0,0,0,539.3,532.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE44E").s().p("Ao6VIQkHhwjLjLQjLjLhwkHQhzkRAAkqQAAkpBzkQQBwkIDLjLQDLjLEHhwQERhzEpAAQEqAAEQBzQEIBwDLDLQDLDLBwEIQBzEQAAEpQAAEqhzERQhwEHjLDLQjLDLkIBwQkQBzkqAAQkpAAkRhzg");

	this.instance_7 = new lib.ClipGroup_65();
	this.instance_7.setTransform(349,364.1,1,1,0,0,0,478.9,532.1);

	this.instance_8 = new lib.ClipGroup_66();
	this.instance_8.setTransform(349,364.1,1,1,0,0,0,478.9,532.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB9F06").s().p("AmOQ5Qi5hZiOiiQiOijhOjSQhRjbAAjuQAAjtBRjaQBOjTCOiiQCOijC5hZQC+hdDQAAQDQAAC/BdQC4BZCPCjQCOCiBODTQBRDaAADtQAADuhRDbQhODSiOCjQiPCii4BZQi/BdjQAAQjQAAi+hdg");
	this.shape_2.setTransform(-10.6,0);

	this.instance_9 = new lib.ClipGroup_67();
	this.instance_9.setTransform(-16.2,0.1,1,1,0,0,0,137.7,146.8);

	this.instance_10 = new lib.ClipGroup_68();
	this.instance_10.setTransform(342.7,364.1,1,1,0,0,0,485.4,532.1);

	this.instance_11 = new lib.ClipGroup_69();
	this.instance_11.setTransform(-0.5,6.8,1,1,0,0,0,142.2,153.5);

	this.instance_12 = new lib.ClipGroup_70();
	this.instance_12.setTransform(342.7,364.1,1,1,0,0,0,485.4,532.1);

	this.instance_13 = new lib.ClipGroup_71();
	this.instance_13.setTransform(342.7,364.1,1,1,0,0,0,485.4,532.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE44E").s().p("AoAVIQjuhwi3jLQi2jLhkkHQhpkRAAkqQAAkpBpkQQBkkIC2jLQC3jLDuhwQD1hzELAAQEMAAD1BzQDuBwC3DLQC2DLBkEIQBpEQAAEpQAAEqhpERQhkEHi2DLQi3DLjuBwQj1BzkMAAQkLAAj1hzg");
	this.shape_3.setTransform(-10.6,0);

	this.instance_14 = new lib.ClipGroup_72();
	this.instance_14.setTransform(84.6,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC402").s().p("Ar+W7MAAAgt1IDWAAQEMAAD2BzQDrBwC3DLQC3DLBkEIQBoEQAAEpQAAEqhoERQhkEHi3DLQi3DLjrBwQj2BzkMAAg");
	this.shape_4.setTransform(66.1,0);

	this.instance_15 = new lib.ClipGroup_57();
	this.instance_15.setTransform(264.1,364.1,1,1,0,0,0,372.6,532.1);

	this.instance_16 = new lib.ClipGroup_58();
	this.instance_16.setTransform(264.1,364.1,1,1,0,0,0,372.6,532.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB9F06").s().p("AknQ5QiJhZhqiiQhqijg6jSQg8jbAAjuQAAjtA8jaQA6jTBqiiQBqijCJhZQCOhdCZAAQCbAACOBdQCIBZBqCjQBqCiA6DTQA8DaAADtQAADug8DbQg6DShqCjQhqCiiIBZQiOBdibAAQiZAAiOhdg");
	this.shape_5.setTransform(-15.8,0);

	this.instance_17 = new lib.ClipGroup_59();
	this.instance_17.setTransform(-20.2,0.1,1,1,0,0,0,107,146.8);

	this.instance_18 = new lib.ClipGroup_60();
	this.instance_18.setTransform(259,364.1,1,1,0,0,0,377.5,532.1);

	this.instance_19 = new lib.ClipGroup_61();
	this.instance_19.setTransform(-8,6.8,1,1,0,0,0,110.5,153.5);

	this.instance_20 = new lib.ClipGroup_62();
	this.instance_20.setTransform(259,364.1,1,1,0,0,0,377.5,532.1);

	this.instance_21 = new lib.ClipGroup_63();
	this.instance_21.setTransform(259,364.1,1,1,0,0,0,377.5,532.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE44E").s().p("AmOVIQi4hwiPjLQiOjLhOkHQhRkRAAkqQAAkpBRkQQBOkICOjLQCPjLC4hwQC/hzDPAAQDRAAC+BzQC5BwCODLQCODLBOEIQBREQAAEpQAAEqhRERQhOEHiODLQiODLi5BwQi+BzjRAAQjPAAi/hzg");
	this.shape_6.setTransform(-15.8,0);

	this.instance_22 = new lib.ClipGroup_64();
	this.instance_22.setTransform(77,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC402").s().p("AqeW7MAAAgt1IE/AAQDQABC9B0QC4BwCNDLQCODLBNEHQBREQAAEoQAAEqhRERQhNEHiPDLQiODLi4BwQi9BzjRAAg");
	this.shape_7.setTransform(51.4,0);

	this.instance_23 = new lib.ClipGroup_49();
	this.instance_23.setTransform(183,364.1,1,1,0,0,0,266.1,532.1);

	this.instance_24 = new lib.ClipGroup_50();
	this.instance_24.setTransform(183,364.1,1,1,0,0,0,266.1,532.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB9F06").s().p("AjHQ5QhchZhHiiQiWlYAAnmQAAnkCWlYQBHijBchZQBghdBnAAQBoAABfBdQBcBZBICjQCWFYAAHkQAAHmiWFYQhICihcBZQhfBdhoAAQhnAAhghdg");
	this.shape_8.setTransform(-16.9,0);

	this.instance_25 = new lib.ClipGroup_51();
	this.instance_25.setTransform(-20,0.1,1,1,0,0,0,76.5,146.8);

	this.instance_26 = new lib.ClipGroup_52();
	this.instance_26.setTransform(179.4,364.1,1,1,0,0,0,269.6,532.1);

	this.instance_27 = new lib.ClipGroup_53();
	this.instance_27.setTransform(-11.2,6.8,1,1,0,0,0,79,153.5);

	this.instance_28 = new lib.ClipGroup_54();
	this.instance_28.setTransform(179.4,364.1,1,1,0,0,0,269.6,532.1);

	this.instance_29 = new lib.ClipGroup_55();
	this.instance_29.setTransform(179.4,364.1,1,1,0,0,0,269.6,532.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE44E").s().p("AkcVIQiEhwhljLQhmjLg4kHQg5kRAAkqQAAkpA5kQQA4kIBmjLQBljLCEhwQCIhzCUAAQCUAACJBzQCDBwBmDLQBmDLA4EIQA5EQAAEpQAAEqg5ERQg4EHhmDLQhmDLiDBwQiJBziUAAQiUAAiIhzg");
	this.shape_9.setTransform(-16.9,0);

	this.instance_30 = new lib.ClipGroup_56();
	this.instance_30.setTransform(72.8,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC402").s().p("AoWW7MAAAgt1IFSAAQCVAACGBzQCEBwBmDLQBlDLA4EIQA5EQABEpQgBEqg5ERQg4EHhlDLQhmDLiEBwQiGBziVAAg");
	this.shape_10.setTransform(36.7,0);

	this.instance_31 = new lib.ClipGroup_41();
	this.instance_31.setTransform(101.8,364.1,1,1,0,0,0,159.7,532.1);

	this.instance_32 = new lib.ClipGroup_42();
	this.instance_32.setTransform(101.8,364.1,1,1,0,0,0,159.7,532.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EB9F06").s().p("AjEM+QhSlYAAnmQAAnkBSlYQBSlZByAAQBzAABSFZQBRFYAAHkQAAHmhRFYQhSFYhzAAQhyAAhSlYg");
	this.shape_11.setTransform(-18.2,0);

	this.instance_33 = new lib.ClipGroup_43();
	this.instance_33.setTransform(-20,0.1,1,1,0,0,0,45.9,146.8);

	this.instance_34 = new lib.ClipGroup_44();
	this.instance_34.setTransform(99.6,364.1,1,1,0,0,0,161.8,532.1);

	this.instance_35 = new lib.ClipGroup_45();
	this.instance_35.setTransform(-14.8,6.8,1,1,0,0,0,47.4,153.5);

	this.instance_36 = new lib.ClipGroup_46();
	this.instance_36.setTransform(99.6,364.1,1,1,0,0,0,161.8,532.1);

	this.instance_37 = new lib.ClipGroup_47();
	this.instance_37.setTransform(99.6,364.1,1,1,0,0,0,161.8,532.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE44E").s().p("AiqVIQhPhwg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBwQhSBzhZAAQhYAAhShzg");
	this.shape_12.setTransform(-18.2,0);

	this.instance_38 = new lib.ClipGroup_48();
	this.instance_38.setTransform(71.4,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC402").s().p("AmRW7MAAAgt1IFuAAQBYABBRB0QBOBwA9DLQCBGtAAJdQAAJfiBGuQg9DLhPBwQhRBzhYAAg");
	this.shape_13.setTransform(22.1,0);

	this.instance_39 = new lib.ClipGroup_40();
	this.instance_39.setTransform(-67.6,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC402").s().p("AipW7QgOAAgLgKQgKgLAAgOMAAAgsvQAAgOAKgLQALgKAOAAIFTAAQAOAAALAKQAKAKAAAPMAAAAsvQAAAPgKAKQgLAKgOAAg");

	this.instance_40 = new lib.ClipGroup();
	this.instance_40.setTransform(138.2,364.1,1,1,0,0,0,159.7,532.1);

	this.instance_41 = new lib.ClipGroup_1();
	this.instance_41.setTransform(138.2,364.1,1,1,0,0,0,159.7,532.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EB9F06").s().p("AjEM9QhSlXAAnmQAAnlBSlXQBSlYByAAQBzAABSFYQBSFXgBHlQABHmhSFXQhSFZhzAAQhyAAhSlZg");
	this.shape_15.setTransform(18.3,0);

	this.instance_42 = new lib.ClipGroup_2();
	this.instance_42.setTransform(16.4,0.1,1,1,0,0,0,45.9,146.8);

	this.instance_43 = new lib.ClipGroup_3();
	this.instance_43.setTransform(136.1,364.1,1,1,0,0,0,161.8,532.1);

	this.instance_44 = new lib.ClipGroup_4();
	this.instance_44.setTransform(21.7,6.8,1,1,0,0,0,47.4,153.5);

	this.instance_45 = new lib.ClipGroup_5();
	this.instance_45.setTransform(136.1,364.1,1,1,0,0,0,161.8,532.1);

	this.instance_46 = new lib.ClipGroup_6();
	this.instance_46.setTransform(136.1,364.1,1,1,0,0,0,161.8,532.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE44E").s().p("AiqVHQhPhvg9jLQiBmuAApfQAApeCBmuQA9jLBPhwQBShzBYAAQBZAABSBzQBPBwA9DLQCBGuAAJeQAAJfiBGuQg9DLhPBvQhSB0hZAAQhYAAhSh0g");
	this.shape_16.setTransform(18.3,0);

	this.instance_47 = new lib.ClipGroup_7();
	this.instance_47.setTransform(-71.4,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC402").s().p("AAlW7QhYAAhSh0QhOhvg9jLQiBmuAApfQAApdCBmuQA8jLBPhwQBShzBXgBIFuAAMAAAAt1g");
	this.shape_17.setTransform(-22,0);

	this.instance_48 = new lib.ClipGroup_8();
	this.instance_48.setTransform(216.8,364.1,1,1,0,0,0,266.1,532.1);

	this.instance_49 = new lib.ClipGroup_9();
	this.instance_49.setTransform(216.8,364.1,1,1,0,0,0,266.1,532.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EB9F06").s().p("AjGQ5QhchZhIijQiWlXAAnmQAAnlCWlXQBIijBchZQBfhcBnAAQBoAABgBcQBcBZBHCjQCWFXAAHlQAAHmiWFXQhHCjhcBZQhgBdhoAAQhnAAhfhdg");
	this.shape_18.setTransform(16.9,0);

	this.instance_50 = new lib.ClipGroup_10();
	this.instance_50.setTransform(13.9,0.1,1,1,0,0,0,76.5,146.8);

	this.instance_51 = new lib.ClipGroup_11();
	this.instance_51.setTransform(213.2,364.1,1,1,0,0,0,269.6,532.1);

	this.instance_52 = new lib.ClipGroup_12();
	this.instance_52.setTransform(22.6,6.8,1,1,0,0,0,79,153.5);

	this.instance_53 = new lib.ClipGroup_13();
	this.instance_53.setTransform(213.2,364.1,1,1,0,0,0,269.6,532.1);

	this.instance_54 = new lib.ClipGroup_14();
	this.instance_54.setTransform(213.2,364.1,1,1,0,0,0,269.6,532.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE44E").s().p("AkcVHQiDhvhmjLQhmjLg4kHQg5kRAAkqQAAkpA5kQQA4kIBmjLQBljLCEhwQCJhzCTAAQCVAACIBzQCEBwBlDLQBmDLA4EIQA5EQAAEpQAAEqg5ERQg4EHhmDLQhlDLiEBvQiIB0iVAAQiTAAiJh0g");
	this.shape_19.setTransform(16.9,0);

	this.instance_55 = new lib.ClipGroup_15();
	this.instance_55.setTransform(-72.7,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFC402").s().p("ADFW7QiVAAiGh0QiEhvhljLQhmjLg4kHQg6kRABkqQgBkpA6kQQA4kIBmjLQBljLCEhwQCGhzCVAAIFTAAMAAAAt1g");
	this.shape_20.setTransform(-36.6,0);

	this.instance_56 = new lib.ClipGroup_16();
	this.instance_56.setTransform(295.7,364.1,1,1,0,0,0,372.6,532.1);

	this.instance_57 = new lib.ClipGroup_17();
	this.instance_57.setTransform(295.7,364.1,1,1,0,0,0,372.6,532.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EB9F06").s().p("AkoQ5QiIhZhqijQhqiig6jTQg8jaAAjuQAAjtA8jbQA6jSBqiiQBqijCIhZQCOhcCaAAQCbAACNBcQCJBZBqCjQBqCiA6DSQA8DbAADtQAADug8DaQg6DThqCiQhqCjiJBZQiNBdibAAQiaAAiOhdg");
	this.shape_21.setTransform(15.8,0);

	this.instance_58 = new lib.ClipGroup_18();
	this.instance_58.setTransform(11.4,0.1,1,1,0,0,0,107,146.8);

	this.instance_59 = new lib.ClipGroup_19();
	this.instance_59.setTransform(290.6,364.1,1,1,0,0,0,377.5,532.1);

	this.instance_60 = new lib.ClipGroup_20();
	this.instance_60.setTransform(23.6,6.8,1,1,0,0,0,110.5,153.5);

	this.instance_61 = new lib.ClipGroup_21();
	this.instance_61.setTransform(290.6,364.1,1,1,0,0,0,377.5,532.1);

	this.instance_62 = new lib.ClipGroup_22();
	this.instance_62.setTransform(290.6,364.1,1,1,0,0,0,377.5,532.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE44E").s().p("AmOVHQi5hviOjLQiOjLhOkHQhRkRAAkqQAAkpBRkQQBOkICOjLQCOjLC5hwQC+hzDQAAQDQAAC/BzQC4BwCPDLQCODLBOEIQBREQAAEpQAAEqhRERQhOEHiODLQiPDLi4BvQi/B0jQAAQjQAAi+h0g");
	this.shape_22.setTransform(15.8,0);

	this.instance_63 = new lib.ClipGroup_23();
	this.instance_63.setTransform(-77,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC402").s().p("AFjW7QjRAAi8h0Qi5hviOjLQiPjLhOkHQhQkRAAkqQAAkpBQkPQBOkICOjLQCNjLC4hwQC9hzDQgBIE/AAMAAAAt1g");
	this.shape_23.setTransform(-51.3,0);

	this.instance_64 = new lib.ClipGroup_24();
	this.instance_64.setTransform(370.4,364.1,1,1,0,0,0,478.9,532.1);

	this.instance_65 = new lib.ClipGroup_25();
	this.instance_65.setTransform(370.4,364.1,1,1,0,0,0,478.9,532.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EB9F06").s().p("AmOQ5Qi4hZiPijQiOiihOjTQhRjaAAjuQAAjtBRjbQBOjSCOiiQCPijC4hZQC/hcDPAAQDRAAC+BcQC5BZCOCjQCOCiBODSQBRDbAADtQAADuhRDaQhODTiOCiQiOCji5BZQi+BdjRAAQjPAAi/hdg");
	this.shape_24.setTransform(10.7,0);

	this.instance_66 = new lib.ClipGroup_26();
	this.instance_66.setTransform(5.2,0.1,1,1,0,0,0,137.7,146.8);

	this.instance_67 = new lib.ClipGroup_27();
	this.instance_67.setTransform(364,364.1,1,1,0,0,0,485.4,532.1);

	this.instance_68 = new lib.ClipGroup_28();
	this.instance_68.setTransform(20.8,6.8,1,1,0,0,0,142.2,153.5);

	this.instance_69 = new lib.ClipGroup_29();
	this.instance_69.setTransform(364,364.1,1,1,0,0,0,485.4,532.1);

	this.instance_70 = new lib.ClipGroup_30();
	this.instance_70.setTransform(364,364.1,1,1,0,0,0,485.4,532.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE44E").s().p("AoBVHQjthvi2jLQi3jLhlkHQhnkRAAkqQAAkpBnkQQBlkIC3jLQC2jLDthwQD2hzELAAQEMAAD2BzQDsBwC3DLQC3DLBlEIQBnEQAAEpQAAEqhnERQhlEHi3DLQi3DLjsBvQj2B0kMAAQkLAAj2h0g");
	this.shape_25.setTransform(10.7,0);

	this.instance_71 = new lib.ClipGroup_31();
	this.instance_71.setTransform(-84.6,0.1,1,1,0,0,0,143.8,146.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC402").s().p("AIpW7QkMAAj2h0Qjrhvi3jLQi3jLhkkHQhokRAAkqQAAkpBokQQBlkIC2jLQC3jLDrhwQD2hzEMAAIDWAAMAAAAt1g");
	this.shape_26.setTransform(-66,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_4},{t:this.instance_14},{t:this.shape_3},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_2},{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.shape_7},{t:this.instance_22},{t:this.shape_6},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_5},{t:this.instance_16},{t:this.instance_15}]},1).to({state:[{t:this.shape_10},{t:this.instance_30},{t:this.shape_9},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.shape_8},{t:this.instance_24},{t:this.instance_23}]},1).to({state:[{t:this.shape_13},{t:this.instance_38},{t:this.shape_12},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.shape_11},{t:this.instance_32},{t:this.instance_31}]},1).to({state:[{t:this.shape_14},{t:this.instance_39}]},1).to({state:[{t:this.shape_17},{t:this.instance_47},{t:this.shape_16},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.shape_15},{t:this.instance_41},{t:this.instance_40}]},1).to({state:[{t:this.shape_20},{t:this.instance_55},{t:this.shape_19},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.shape_18},{t:this.instance_49},{t:this.instance_48}]},1).to({state:[{t:this.shape_23},{t:this.instance_63},{t:this.shape_22},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.shape_21},{t:this.instance_57},{t:this.instance_56}]},1).to({state:[{t:this.shape_26},{t:this.instance_71},{t:this.shape_25},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.shape_24},{t:this.instance_65},{t:this.instance_64}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.1,-168,1091.1,1064.4);


(lib.konvcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_r();
	this.instance.setTransform(219.5,262,1,1,0,0,0,28.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kr copy
	this.instance_1 = new lib.kr_1();
	this.instance_1.setTransform(219.6,190.6,0.917,0.917,0,0,0,218.5,181.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// kr
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(219.5,190.6,1,1,0,0,0,200.3,166.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.2,22.8,426,415.4);


(lib.konvcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// b
	this.instance = new lib.b_1();
	this.instance.setTransform(219.6,286.1,0.917,0.917,0,0,0,219.5,286.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.3,23.8,402.5,524.5);


(lib.konv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo_r();
	this.instance.setTransform(219.5,262,1,1,0,0,0,28.5,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// kr copy
	this.instance_1 = new lib.kr_1();
	this.instance_1.setTransform(219.6,190.6,0.917,0.917,0,0,0,218.5,181.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// kr
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(219.5,190.6,1,1,0,0,0,200.3,166.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// b
	this.instance_3 = new lib.b_1();
	this.instance_3.setTransform(219.6,286.1,0.917,0.917,0,0,0,219.5,286.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.2,22.8,426,525.5);


(lib.monetscopy333 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer 2 copy 83333333
	this.instance = new lib.mmai("synched",7);
	this.instance.setTransform(-175.8,584.1,0.3,0.3,0,0,180);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({x:-200.3,y:565.5,startPosition:1},4,cjs.Ease.get(1)).wait(1).to({mode:"single"},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.monetscopy22222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer 2 copy 5111111
	this.instance = new lib.mmai("synched",6);
	this.instance.setTransform(-194.5,584.1,0.3,0.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:0.4,scaleY:0.4,guide:{path:[-194.4,584.1,-220.5,202.2,27.5,274.3]}},20,cjs.Ease.get(1)).wait(1).to({mode:"single"},0).wait(5));

	// Layer 2 copy 41111111
	this.instance_1 = new lib.mmai("synched",1);
	this.instance_1.setTransform(-224.9,593.4,0.3,0.3,0,0,-180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({guide:{path:[-224.7,593.4,-275.4,399.5,-383.7,431.4]}},10,cjs.Ease.get(1)).wait(1).to({mode:"single"},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.monets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Layer 2 copy 3
	this.instance = new lib.mmai("synched",7);
	this.instance.setTransform(-189,624.9,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,rotation:30,guide:{path:[-188.8,624.8,-134.1,12.9,151.3,328]}},20,cjs.Ease.get(1)).wait(1).to({mode:"single"},0).wait(10));

	// Layer 2 copy 2
	this.instance_1 = new lib.mmai("synched",1);
	this.instance_1.setTransform(-204,613.9,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.57,scaleY:0.57,guide:{path:[-203.9,613.8,-144.5,453.9,-84.9,389.1,-25.3,324.4,34.5,354.8,94.3,385.4,92.7,468.7,91.1,552,28,688.1]}},20,cjs.Ease.get(1)).wait(1).to({mode:"single"},0).wait(19));

	// Layer 2 copy
	this.instance_2 = new lib.mmai("synched",8);
	this.instance_2.setTransform(-261,603.2,0.384,0.384);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.48,scaleY:0.48,rotation:-45,guide:{path:[-261.1,603.2,-329.8,412.1,-404.7,345.1,-479.7,278.1,-561,335.3]}},20,cjs.Ease.get(1)).wait(1).to({mode:"single"},0).wait(19));

	// Layer 2
	this.instance_3 = new lib.mmai("synched",4);
	this.instance_3.setTransform(-189,618.9,0.45,0.45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({rotation:-25,guide:{path:[-189.1,618.8,-215.8,388.2,-272.8,299.7,-329.7,211.2,-417,264.9]}},20,cjs.Ease.get(1)).wait(1).to({mode:"single"},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5,545,169.6,137.9);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_110 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(110).call(this.frame_110).wait(7));

	// monets
	this.instance = new lib.monets();
	this.instance.setTransform(1578.5,1477,1,1,0,0,0,485.4,1532.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).wait(56));

	// serp
	this.instance_1 = new lib.serp();
	this.instance_1.setTransform(119,67.4,1,1,0,0,0,119,67.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).wait(60));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_61 = new cjs.Graphics().p("AgBY/Qs9gBpJhuQpJhugBhMMAAAgtUMA+jAAAMAAAAtSIAAABQAABNpMBvQpGBuszAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_graphics_61,x:920.2,y:331.7}).wait(56));

	// Layer 7
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(920.2,511.9,1,1,0,0,0,200.2,44.9);
	this.instance_2.alpha = 0.5;
	this.instance_2.shadow = new cjs.Shadow("rgba(107,0,0,1)",2,-10,20);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).wait(56));

	// monets copy 2
	this.instance_3 = new lib.monetscopy333();
	this.instance_3.setTransform(1578.5,1477,1,1,0,0,0,485.4,1532.8);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61).to({_off:false},0).wait(56));

	// Layer 5
	this.instance_4 = new lib.paper();
	this.instance_4.setTransform(920.2,611.8,1,1,0,0,0,200.2,160);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(61).to({_off:false},0).to({y:331.8},8,cjs.Ease.get(1)).wait(48));

	// Layer 4 copy 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_61 = new cjs.Graphics().p("ADoc0Qs7gBpJhuQpJhugBhMI5oEYMAAAg5WMBqdAAAMAAAA3yIySi2IAAABQAABNpMBvQpGBuszAAIgQAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_1_graphics_61,x:896.7,y:307.2}).wait(56));

	// Layer 5 copy
	this.instance_5 = new lib.paper();
	this.instance_5.setTransform(920.2,611.8,1,1,0,0,0,200.2,160);
	this.instance_5.alpha = 0.5;
	this.instance_5.shadow = new cjs.Shadow("rgba(156,142,208,1)",1,-5,30);
	this.instance_5._off = true;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61).to({_off:false},0).to({y:331.8},8,cjs.Ease.get(1)).wait(48));

	// konv kr
	this.instance_6 = new lib.konvcopy2();
	this.instance_6.setTransform(920.3,639.8,0.1,0.1,0,0,0,219.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:23.8,scaleX:1.1,scaleY:1.1,x:920.2,y:377.7},8,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1,y:403.9},5,cjs.Ease.get(0.5)).wait(26).to({scaleX:1.1,scaleY:1.02,rotation:-1,x:915.5,y:398.7},4,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,rotation:0,x:920.2,y:403.9},4,cjs.Ease.get(-0.5)).to({regY:23.7,scaleX:1.1,scaleY:1.02,rotation:1,x:924.9,y:398.6},4,cjs.Ease.get(0.5)).to({regY:23.8,scaleX:1,scaleY:1,rotation:0,x:920.2,y:403.9},4,cjs.Ease.get(-0.5)).wait(1).to({regY:24,scaleY:0.05,y:403.8},6,cjs.Ease.get(-0.5)).wait(1).to({skewX:180},0).to({scaleY:0.2},3).to({_off:true},1).wait(50));

	// Layer 4 copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_13 = new cjs.Graphics().p("AgBY/Qs9gBpJhuQpJhugBhMMAAAgtUMA+jAAAMAAAAtSIAAABQAABNpMBvQpGBuszAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_2_graphics_13,x:920.2,y:331.7}).wait(104));

	// Layer 6
	this.instance_7 = new lib.paper();
	this.instance_7.setTransform(920.2,611.8,1,1,0,0,0,200.2,160);
	this.instance_7._off = true;

	this.instance_7.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(104));

	// konv copy 3
	this.instance_8 = new lib.konvcopy();
	this.instance_8.setTransform(920.2,666.1,1,1,0,0,0,219.5,286);
	this.instance_8._off = true;

	this.instance_8.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).wait(104));

	// konv
	this.instance_9 = new lib.konvcopy();
	this.instance_9.setTransform(920.3,666,0.1,0.1,0,0,0,219.5,286.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:286,scaleX:1.1,scaleY:1.1,x:920.2,y:666.1},8,cjs.Ease.get(-0.5)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).wait(26).to({scaleX:1.1,scaleY:1.02,rotation:-1},4,cjs.Ease.get(0.5)).to({scaleX:1,scaleY:1,rotation:0},4,cjs.Ease.get(-0.5)).to({regY:285.9,scaleX:1.1,scaleY:1.02,rotation:1,y:666},4,cjs.Ease.get(0.5)).to({regY:286,scaleX:1,scaleY:1,rotation:0,y:666.1},4,cjs.Ease.get(-0.5)).wait(62));

	// monets copy
	this.instance_10 = new lib.monetscopy22222();
	this.instance_10.setTransform(1578.5,1477,1,1,0,0,0,485.4,1532.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(61).to({_off:false},0).wait(56));

	// ten
	this.instance_11 = new lib.ten();
	this.instance_11.setTransform(920.5,680.4,1,1,0,0,0,208.3,218.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off:false},0).wait(31).to({regX:208.2,regY:218.2,scaleX:1.1,rotation:-1,x:920.4},4,cjs.Ease.get(0.5)).to({regX:208.3,regY:218.1,scaleX:1,rotation:0,x:920.5},4,cjs.Ease.get(-0.5)).to({regX:208.2,scaleX:1.1,rotation:1,x:920.4},4,cjs.Ease.get(0.5)).to({regX:208.3,scaleX:1,rotation:0,x:920.5},4,cjs.Ease.get(-0.5)).wait(62));

	// konv copy 2
	this.instance_12 = new lib.konv();
	this.instance_12.setTransform(957.1,667.1,0.83,0.83,0,0,0,219.3,285.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},0).to({regX:219.4,rotation:10,x:1037.2,y:667},8,cjs.Ease.get(1)).wait(23).to({regX:219.3,rotation:8},4,cjs.Ease.get(0.5)).to({regX:219.4,rotation:10},4,cjs.Ease.get(-0.5)).to({rotation:12},4,cjs.Ease.get(0.5)).to({rotation:10},4,cjs.Ease.get(-0.5)).wait(62));

	// konv copy
	this.instance_13 = new lib.konv();
	this.instance_13.setTransform(882.2,667.1,0.83,0.83,0,0,0,219.5,285.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},0).to({regX:219.4,rotation:-10,x:802.1},8,cjs.Ease.get(1)).wait(23).to({regY:286,rotation:-8,x:802.2},4,cjs.Ease.get(0.5)).to({regY:285.9,rotation:-10,x:802.1},4,cjs.Ease.get(-0.5)).to({rotation:-12,x:802.2,y:667},4,cjs.Ease.get(0.5)).to({rotation:-10,x:802.1,y:667.1},4,cjs.Ease.get(-0.5)).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(889.2,638.8,66,60);


// stage content:



(lib.Rewire_2021_China_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// main
	this.instance = new lib.main();
	this.instance.setTransform(121,67.4,1,1,0,0,0,119,67.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(913.5,386.4,1920,1184);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;