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
        console.log(tampungData.sort(function (a, b) { return a-b }));
    }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])