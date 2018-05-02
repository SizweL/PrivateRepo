var faculty_names = new Array(["Commerce, Law and Management","Engineering and the Built Environment","Health Sciences","Humanities","Science"]);
var book_names = new Array(["Medicine ", "Sociology ", " Mathematics"]);
var book_numbers = new Array(["1234", "5678 ", "9101112"]);
var book_prices = new Array(["R750", "R600", "R450"]);

faculty_names.push(book_names);
faculty_names.push(book_numbers);
faculty_names.push(book_prices);

function add(references){
	this.arr = references;
}

function checker(text_book){
	if(this.arr.length == text_book.arr.length){//relation to search algorithm
	var result = [];
	for(var i = 0; i < this.arr.length; i++){
		result.push(this.arr[i] + text_book.arr[i]);
		}
		return new Array(result); //result shown on screen
	}else {
	 return error;
	}
}

