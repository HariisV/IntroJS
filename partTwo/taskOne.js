//Buat dan jelaskanlah 10 method bawaan JavaScript(Built -in Functions) 
    // beserta contoh penggunaannya(kecuali : split, reverse, join, foreach)

// 1. toString() = Mengubah Tipe Data Sebuah Variabel Menjadi String
//          Case = Saat User Menginputkan Sebuah Number Tetapi Sistem Hanya Menerima String
    let str1 = true;
    console.log(str1.toString());

// 2. toLowerCase() = Mengubah Isi Variabel String & Menjadikan Semua Huruf Didalamnya menggunakan huruf kecil
//             Case = Saat User Menggunakan fitur Search
    let str2 = "HaI NaMasAyA";
    console.log(str2.toLowerCase());

// 3 Date() = Mendapatkan Waktu Lengkap (Mulai Dari Tanggal Bulan Tahun Jam Menit Zona Waktu Sampai Waktu Bagian)
    let str3 = Date();
    console.log("Date and Time : " + str3);


// 4. charAt() = Mendapatkan Huruf yang diambil dari index yang diberikan
    let str4 = "HAI"
    console.log(str4.charAt(2))

// 5. Replace() = Untuk Mengganti Sebuah Kata Didalam variabel String Dimulai Dari Kiri
    let str5 = "Halo, My Name Is Jhon Doe";
    console.log(str5.replace("Jhon Doe", "Haris"))

// 6. Search() = Mencari Sebuah Kata Didalam Suatu variabel String
    let kata = "Ipsum";
    let str6 = "Lorem Ipsum Dolor Sit Amet.";

    if (str6.search(kata) == -1) {
        console.log("Tidak Ditemukan");
    } else {
        console.log(`${kata} Ditemukan !`);
    }

// 7. unshift() = Menambah Element Array, Element Yang Akan Ditambah berada di index pertama
    let hewan =  ['kucing', 'kambing', 'monyet'];
    // console.log(hewan)
    hewan.unshift("Kangguru");
    console.log(hewan)

// 8.sort() = Mengurutkan Variabel Yang Bertipe Array Dengan Berurut (A - Z) Atau (Z - A)
    let hewanSort = ['kucing', 'kambing', 'monyet', 'kelinci', 'ayam'];
    hewanSort.sort();
    // hewanSort.sort(function (a, b) { return b - a });
    console.log(hewanSort)

// 9.Math.random() = Mendapatkan Angka Random
    let thisRandom = Math.random();
    console.log(thisRandom);
    thisRandom = Math.random() * 100;
    console.log(thisRandom);

// 10.Math.ceil() = Membulatkan Angka yang berkoma
    console.log(Math.ceil(thisRandom))