//function
 //1. function deklarasi
 function getData(){
    //function blok data yang berada dalam kurung kurawal
    console.log("Hello World");
 }
 function getData(firstName, Age){  //parameter boleh lebih dari satu
    // console.log("Hello"+firstName+"Age"+Age);
     let data="Hello"+firstName+"Age"+Age;
     return data;
 }
 console.log("data :",getData("Feby", 20));
   //  getData("Feby", 20);


//2.Function Expression
let getData=function(name){ //parameter input/variabel yang kita tulis di dalam fungsi
  return name;             
};
console.log(getData("Hello World"));// jika tidak dimasukan parameternya maka akan undivine
       //argumen adalah nilai yg dimasukkan ke dalam parameter


//Global & Lokal
let firstName="Fabiola"; //Global variabel
let job= "student";

function studentData(){
   let lastName="Hanapu"; //Lokal Variabel

if(job==="student"){ 
   let grade=100; //Lokal scope(Block)
   console.log(firsName+""+lastName);
   console.log("Grade :"+grade);
  }
 }
studentData();


//JavaScript String
//concat (berfungsi untuk operasi penyambungan string)
let firstName = "Fabiola"; 
let lastName = "Hanapu";
let res = firstName.concat(lastName);

//includes (Untuk mengembalikan nilai true pada string yang bernilai salah)
let kata = "Hello world, welcome to Front-End Class.";
kata.includes("world")   

//length (Untuk menghitung jumlah string yang ada di dalam suatu variabel)
let kata = "Hello Guys!!!";
kata.length

//split(Untuk merubah nilai variabel dalam string menjadi array)
let sentences = "Lagi apa nihh?";
const myArr = sentences.split(" ");

//slice (mengekstrak bagian dari string dan mengembalikan bagian yang diekstraksi dalam string baru)
let kata = "Hello Guys!!!";
kata.slice(0, 8)  

//substring (Untuk memotong sebuah text)
let kata = "Hello Guys!!!";
kata.substring(2, 8)

//toLowerCase (Untuk mengubah nilai string menjadi huruf kecil)
let kata = "Hello Guys!!!";
kata.toLocaleLowerCase() 

//toUpperCase (Kebalikan dari toLowerCase, untuk mengubah nilai string menjadi huruf besar)
let kata = "Hello Guys!!!";
kata.toLocaleUpperCase() 

//trim (Untuk menghilangkan suatu karakter dari suatu teks atau kumpulan teks)
let kata = "  Hello World!!!  ";
kata.trim()

//valueOf (Berfungsi untuk mengconvert nilai dari tipe data seperti int ,boolean ,boolean dsb ke dalam tipe data String.)
let kata = "Hello Guyss!!!";
kata.valueOf()