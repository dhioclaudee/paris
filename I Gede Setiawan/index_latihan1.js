//Exercise #01
//Nama: Setiawan, I Gede Indira
//concat
let textConcat1 = "I Love";
let textConcat2 = "You";
let resultConcat = textConcat1.concat(textConcat2);
console.log(resultConcat);
//concat ialah menggabungkan dua atau lebih kata yang ada

//includes
let textInclude = "front-end paralel c";
let resultInclude = textInclude.includes("paralel");
console.log(resultInclude);
//include menampilkan trus atau false sesuai string yang ada

//lenght
let text = "Geraja masehi Advent";
let length = text.length;
//mengembalikan panjang string

//split
let text = "bagaimana kabar anda?";
const myArray = text.split(" ");
let word = myArray[2];
//split membagi string menjadi array substring dan mengembalikan array baru.

//slice
let textSlice = "Masuk Sekarang!";
let resultSlice = textSlice.slice(0, 3);
console.log(resultSlice)
//slice mengekstrat bagian dari string yang ada sehingga menghasilkan string yang baru.

//substring
let textSubstring = "Hello world!";
let resultSubstring = textSubstring.substring(1, 4);
console.log(resultSubstring);
//substring mengekstrak karakter dari awal sampai akhir antara dua index dari string, dan mengembalikan substring.

//toLowerCase
let textLowerCase = "I Gede Setiawan";
let resultLowerCase = textLowerCase.toLowerCase();
console.log(resultLowerCase)
//mengubah string menjadi huruf kecil semua

//toUpperCase
let textUpperCase = "Universitas Klabat";
let resultUpperCase = textUpperCase.toUpperCase();
console.log(resultUpperCase)
//mengubah string menjadi huruf besar semua

//trim
let textTrim = "       Joko Widodo        ";
let resultTrim = textTrim.trim();
console.log(resultTrim)
//trim Menghapus spasi


//valueof
let text = "Hello World!";
let result = text.valueOf();
console.log(result)
