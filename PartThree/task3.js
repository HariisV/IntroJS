const printTriangle = (num) =>{
    return new Promise((resolve,reject) => {
        if (typeof num == "number") {
            let tampungTriangle = "";
            for (let index = num; index >= 0; index--) {
                for (let j = 0; j <= index; j++) {
                    tampungTriangle += "*";
                }
                tampungTriangle += '\n'
            }
            resolve(tampungTriangle)
        }else{
            reject(new Error("Parameter Yang Diberikan Harus Bertipe Number"))
        }
        
    }) 
    
}
console.log("Mulai Proses")
printTriangle("5")
.then(num =>{
    console.log(num)
})
.catch(error =>{
    console.log(`Terdapat Eror : ${error.message}`)
})
console.log("Proses Selesai")

const tampilkanTriangle = async() =>{
    try {
        let bintang = await printTriangle([40]);
        console.log(bintang)
    } catch (error) {
        console.log(`Terdapat Eror : ${error.message}`)
    }
}
tampilkanTriangle()



const tanggalLibur = [
    {
        'tanggal': `01-01`,
        'desc' : "Tahun Baru Masehi"
    },
    {
        'tanggal': `01-02`,
        'desc': " Tahun Baru Imlek"
    },
    {
        'tanggal': `01-03`,
        'desc': "Isra Miraj"
    },
    {
        'tanggal': `03-03`,
        'desc': "Hari Raya Nyepi"
    },
    {
        'tanggal': `15-04`,
        'desc': "Jumat Agung"
    },
    {
        'tanggal': `01-05`,
        'desc': "Hari Buruh"
    },
    {
        'tanggal': `03-04`,
        'desc': "Hari Raya Idul Fitri"
    },
    {
        'tanggal': `16-05`,
        'desc': "Hari Raya Waisak"
    },
    {
        'tanggal': `26-05`,
        'desc': "Kenaikan Isa Almasih"
    },
    {
        'tanggal': `01-06`,
        'desc': "Hari Lahir Pancasila"
    },
    {
        'tanggal': `10-07`,
        'desc': "Hari Raya Idul Adha"
    },
    {
        'tanggal': `30-07`,
        'desc': "Tahun Baru Hijriyah"
    },
    {
        'tanggal': `17-08`,
        'desc': "Hari Kemerdekaan"
    },
    {
        'tanggal': `08-08`,
        'desc': "Maulid Nabi"
    },
    {
        'tanggal': `25-12`,
        'desc': "Hari Natal"
    },


]

var hariIni = new Date();
const cekTanggal = (tanggal) =>{
    return new Promise((resolve,reject) =>{
        tanggalLibur.forEach((element) =>{
            if (tanggal === element.tanggal) {
                // var start = new Date();
                resolve(`Tanggal ${element.tanggal}-${hariIni.getFullYear()} Memperingati ${element.desc}`)
            }
        })
        reject(new Error('Tanggal Tersebut Tidak Libur Nasional'))
    })    
}


const getTanggal = async() =>{
    try {
        let Tanggal = await cekTanggal('01-014-2021')
        console.log(Tanggal);
    } catch (error) {
        console.log(error.message)
    }
}
getTanggal();
cekTanggal('01-12')
.then(res => console.log(res))
.catch(error => console.log(error.message))
