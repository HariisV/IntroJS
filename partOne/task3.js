let printSegitiga  = 5;

if(typeof (printSegitiga) == 'number' && printSegitiga > 0){
    for (let index = printSegitiga; index > 0; index--) {
        let tampungSegitiga ="";

        for (let x = 1; x <= index; x++) {
            tampungSegitiga += `${x} `;
        }
            console.log(tampungSegitiga)
    }
}else{
    console.log("Data Harus Number & lebih dari 0")
}

