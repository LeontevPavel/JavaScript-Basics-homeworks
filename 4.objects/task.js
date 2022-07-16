function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
	if (this.marks === undefined) {
		this.marks = [mark];
	} else {
		this.marks.push(mark);
	}
}

Student.prototype.addMarks = function (...mark) {
	if (this.marks === undefined) {
		this.marks = mark;
	} else {
		this.marks = this.marks.concat(mark);
	}
}

Student.prototype.getAverage = function () {
	let sumMarks = this.marks.reduce((sum, item) => sum + item, 0);
	let average = sumMarks / this.marks.length;
	return average;
}

Student.prototype.exclude = function (reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

