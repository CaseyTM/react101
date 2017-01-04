class Triangle {
	constructor(side1, side2, side3){
		this.name = 'Triangle';
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}
	get area() {
		return this.calcArea();
	}
	calcArea() {
		var perimeter = (this.side1 + this.side2 + this.side3) / 2;
		var area = Math.sqrt(perimeter*((perimeter-this.side1)*(perimeter-this.side2)*(perimeter-this.side3)));
		return area;
	}
}

class EquiTriangle extends Triangle{
	constructor(side1){
		super(side1, side1, side1)
		this.name = 'EquiTriangle'
	}
}

class Isosceles extends Triangle{
	constructor(side1, side2){
		super(side1, side2, side2)
		this.name = 'Isosceles'
	}
}



const triangle = new Triangle(10,10,15);
const equitriangle = new EquiTriangle(10);
const isosceles = new Isosceles(10,6);
// console.log(equitriangle.area);
console.log(isosceles.area);