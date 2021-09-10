function seleksiNilai(nilaiAwal, nilaiAkhir,dataArray){
    if (nilaiAwal > nilaiAkhir) {
        console.log(dataArray.length)
        return console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (dataArray.length < 5){
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }else{
        tampungData = [];
        dataArray.forEach(element => {
            if (element >= nilaiAwal && element<= nilaiAkhir) {
                tampungData.push(element)
            }
        });
        if (tampungData.length > 0) {
            return console.log(tampungData.sort(function (a, b) { return a - b }));
        }else{
            return console.log("Nilai Tidak Ditemukan");
        }
    }
}

seleksiNilai(5, 20, [2,2,2,2,2,2,10])