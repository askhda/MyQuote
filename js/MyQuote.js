// Menambahkan data ke local storage
function valnsave() {
	let quote_written = document.getElementById("quote").value;
	let quote_author = document.getElementById("author").value;

	//Cek kosong atau tidak, kalau tidak tambah lanjut ke localStorage
	if (quote_written != "" && quote_author != "") {
		let data_quote;
		let data_author;
		//Cek apakah local storage ada isinya atau tidak
		if (localStorage.getItem('data_quote') === null && localStorage.getItem('data_author') === null) {
			data_quote= [];
			data_author=[];
		}
		else {
			data_quote = JSON.parse(localStorage.getItem('data_quote'));
			data_author = JSON.parse(localStorage.getItem('data_author'));
		}

		data_quote.push(quote_written);
		localStorage.setItem('data_quote',JSON.stringify(data_quote));
		data_author.push(quote_author);
		localStorage.setItem('data_author', JSON.stringify(data_author));

	}
	else{
		alert("Fill the blank space!");
	}
}

// Mengambil data dari localstorage dan menambahkannya
document.querySelector('#show').addEventListener('click',function () {
	//deklarasi data_author
	let data_author = localStorage.getItem('data_author');
	let show_author = JSON.parse(data_author);
	let SliceAuthor = data_author.slice(1,-1);
	let LostAuthor = SliceAuthor.replace(/['"]+/g, '');
	let SplitAuthor = LostAuthor.split(",");

	//deklarasi data_quote
	let data_quote = localStorage.getItem('data_quote');
	let show_quote = JSON.parse(data_quote);
	let LenghtQuote = show_quote.lenght;
	let SliceQuote = data_quote.slice(1,-1);
	let LostQuote = SliceQuote.replace(/['"]+/g, '');
	let SplitQuote = LostQuote.split(",");

	//Tampilan quote dan author
	if (data_quote === null || data_author === null) {
		// gak ada quote
		document.querySelector('#list_quote').innerHTML= alert("No Quote");
	}

	else {

		//Tampilkan semua quote dan author (per satu quote)
		for (let i = 0; i < SplitQuote.length; i++) {
			document.querySelector('#list_quote').innerHTML += SplitQuote[i] + "<br>";
			for (let x = 0; x < SplitAuthor.length; x++) {
				document.querySelector('#list_quote').innerHTML += SplitAuthor [x] + "<br>";
				break;
			}
		}

	}

	//disabled button
	document.getElementById('show').disabled = 'true';
})