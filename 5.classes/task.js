
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
		return this.state;
	}

	get state() {
		return this._state;
	}

	set state(newState) {
		if (newState < 0) return this._state = 0;
		else if (newState > 100) return this._state = 100;
		else return this._state = newState;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount ) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";

	}
}

class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}
}

// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
// const esquire = new Magazine("Esquire", 2022, 50);
// const idiot = new NovelBook("Idiot", 1869, 350, "Dostoevsky");
// const naDne = new NovelBook("Na dne", 1902, 200, "Gorky")


// console.log (sherlock.name);
// console.log (sherlock.state);
// sherlock.state = 50;
// idiot.state = 50;
// console.log (sherlock.state);
// sherlock.fix ();
// console.log (sherlock.state);
// sherlock.state = -90;
// console.log (sherlock.state);
// console.log (sherlock)
// console.log (esquire);
// console.log (idiot);
// console.log (naDne);



// Задача 2 


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) this.books.push(book);
		return;
	}

	findBookBy(type, value) {
		let requestedBook = this.books.find(itemBooks => itemBooks[type] === value)
		if (requestedBook === undefined) return null;
		return requestedBook;
	}

	giveBookByName(bookName) {
		let requestedBookName
		let indexBook = this.books.findIndex(itemBooks => itemBooks.name === bookName)
		if (indexBook === -1) return requestedBookName = null;
		requestedBookName = this.books[indexBook];
		this.books.splice(indexBook, 1);
		return requestedBookName;
	}
}

//const collection = new Library('Новая коллекция');
//console.log (collection);
// collection.addBook(idiot);
// collection.addBook(sherlock);
// collection.addBook(esquire);

//console.log (collection);

//console.log (collection.findBookBy ('releaseDate', 2019));
//console.log (collection);

// console.log('Запрашиваемая книга: ');
// console.log(collection.giveBookByName('Idiot'));

// console.log('Оставшиеся книги: ');
// console.log(collection);
