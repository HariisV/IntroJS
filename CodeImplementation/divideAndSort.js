const divideAndSort = (angka) =>{
    if (typeof angka === "number" ) {
        if (angka.toString().length > 16) {
           return console.log("Batas Maximum Number Adalah 16 Angka, Silahkan Ganti Ke BigInteger") 
        }
        let divide = angka.toString().split("0")
        let angkaa = "";
        divide.forEach(element => {
            let perangka = element.split("").sort().join("")
            angkaa += Number(perangka)
        });
        let result = parseInt(angkaa)
        return console.log(
            `            Angka Diinput  = ${angka} 
            Hasil          = ${result}
            Tipe Hasil     = ${typeof result}`
        )
    }else if (typeof angka === "bigint"){
        let divide = angka.toString().split("0")
        let angkaa = "";
        divide.forEach(element => {
            let perangka = element.split("").sort().join("")
            angkaa += Number(perangka)
        });
        let result = BigInt(angkaa)
        return console.log(
            `            Angka Diinput  = ${angka} 
            Hasil          = ${result}
            Tipe Hasil     = ${typeof result}`
        )
    }else{
        return console.log("Tipe Data Yang Kamu Masukkan Tidak Diterima")
    }
}
 
// BigInt = Tambah N di Akhir Parameter, Supaya Bisa Lebih Banyak Angka
divideAndSort(54321054321054321054321054321053333333333333301235421432551312305512312312051231231250120312030120412051203102051021040401231231231205104102401203102034120501205102504602304013401010230120301205012051205012041024012030123012031023012050150105015010334321054321054321054321n)

// Integer / Number= Memiliki Limit 16 Angka
// divideAndSort(3210555032107543)