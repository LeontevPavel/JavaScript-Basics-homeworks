// Задача 1 

const parseCount = (value) => {
	let number = parseInt(value);
	if (isNaN(number)) {
		throw new Error("Невалидное значение");
		
	}
	return number;
}


function validateCount(value) {
	try {
		return parseCount(value);
	} catch (err)  {
		return err;
	}	
}
//console.log(validateCount('0j'));


// Задача 2 

class Triangle {

	constructor(sideA, sideB, sideC) {
		if (sideA + sideB <= sideC || sideC + sideB <= sideA || sideA + sideC <= sideB) {
			const sideErr = new Error("Треугольник с такими сторонами не существует");
			throw sideErr;
		}
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
	}

	getPerimeter() {
		return this.sideA + this.sideB + this.sideC;
	}

	getArea() {
		let halfPerimeter = (this.sideA + this.sideB + this.sideC) * 0.5;
		let area = (halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC)) ** 0.5
		area = +area.toFixed(3);
		return area;
	}
}

//const abc = new Triangle(10, 30, 10);

function getTriangle(sideA, sideB, sideC) {
	try {
		return new Triangle(sideA, sideB, sideC);
	} catch (sideErr) {
		return {
			getArea: () => 'Ошибка! Треугольник не существует',
			getPerimeter: () => 'Ошибка! Треугольник не существует'
		}
	}
}



