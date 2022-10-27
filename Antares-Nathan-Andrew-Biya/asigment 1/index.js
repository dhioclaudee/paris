//Nama = Antares Nathan Andrew Biya
const firstname = "antares";
const lastname = "biya";

let hasil;
hasil = firstname + lastname;

//concat disini saya menggunakan concat agar menambahkan spasi
hasil = firstname + " "+ lastname;
//di concat juga bisa menjumlahkan string biasa dengan sebuah variabel
hasil = "Holla, Nama saya " + firstname +" "+lastname;
//length disini saya menggunakan lenght agar bisa mengetahui panjang dari nilai string contohnya ingin mengetahui panjang dari firstname diatas
hasil = firstname.length;
//toUpperCase disini saya menggunakan toUpperCase untuk mengubah huruf menjadi kapital contohnya membuat tulisan antares yang ada di firstname menjadi besar
hasil = firstname.toUpperCase();
//toLowerCase jika menggunakan toLowerCase huruf akan menjadi kecil berbeda dengan toUpperCase contohnya mengubah huruf antares yang sudah kapital menjadi kecil kembali
hasil = firstname.toLowerCase();
//substring saya menggunakan substring untuk bisa memotong suatu string contohnya kata antares yang ada di firstname saya potong index 0 sampai 4 jadi yang muncul adalah anta karena cuman sampai index 3 karena batasnya sampai index 4
hasil =firstname.substring(0,4);
//slice saya menggunakan slice karena selain substring bisa juga memotongnya dengan menggunakan slice karena yang membedakannya adalah slice bisa menginputkan nilai negatif contohnya menggunakan antares yang ada di firstname pada saat di run yang akan muncul hanya 3 huruf terakhir dari antares yaitu res
hasil = firstname.slice(-3);
//split saya menggunakan split untuk memisahkan kata dari sebuah kalimat contohnya saya memisahkan spasi
a = "holla nama saya adalah antares"
hasil =a.split(" ");
//includes saya menggunakan includes untuk mencari tahu sebuah data tertentu di dalam variabel dengan output bolean contohnya saya mencari antares jika benar maka akan muncul true jika salah akan muncul false karena includes dapat mengetahui kalimat apa saja yang ada di dalam variabel a
hasil = a.includes("antares");

console.log(hasil);


//maaf sir disini saya hanya menggunakan satu console.log karena kalau di pakai banyak bisa eror sir tidak bisa terbaca
