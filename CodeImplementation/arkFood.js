const arkFood = (harga,diskon,jarak,pajak) =>{
    if (typeof harga != 'number' || typeof jarak != 'number' || typeof pajak != 'boolean' || harga < 1000 || jarak < 0) {
        return console.log("Data Yang Diterima Tidak Valid !")
    }else{
        const potongan = hitungDiskon(harga, diskon)
        const ongkir = hitungOngkir(jarak)
        const Pajaak = hitungPajak(harga, pajak)
        let subTotal = harga - potongan + ongkir + Pajaak
        console.log(`Harga          :  Rp ${new Intl.NumberFormat('id-ID').format(harga)}`)
        console.log(`Potongan       :  Rp ${new Intl.NumberFormat('id-ID').format(potongan)}`)
        console.log(`Biaya Antar    :  Rp ${new Intl.NumberFormat('id-ID').format(ongkir)}`)
        console.log(`Pajak          :  Rp ${new Intl.NumberFormat('id-ID').format(Pajaak)}`)
        console.log("----------------------------")
        console.log(`SubTotal       :  Rp ${new Intl.NumberFormat('id-ID').format(subTotal)}`)
    }
    
}

const hitungDiskon = (harga,diskon) =>{
    if (diskon == "ARKFOOD5") {
        if (harga >= 50000) {
            potongan = 50/100 * harga
            if (potongan >= 50000) {
                potongan = 50000
            }
        }else{
            console.log(`=> Untuk Menggunakan ${diskon} Minimal Pembelian Adalah 50.000, Melanjutkan Tanpa Potongan`)
            potongan = 0
        }
    } else if(diskon == "DITRAKTIRDEMY"){
        if (harga >= 25000) {
            potongan = 60 / 100 * harga
            if (potongan >= 30000) {
                potongan = 30000
            }
        } else {
            console.log(`=> Untuk Menggunakan ${diskon} Minimal Pembelian Adalah Rp 30.000, Melanjutkan Tanpa Potongan`)
            potongan = 0
        }
    } else if (diskon === false) {
        potongan = 0
    }else{
        console.log("=> Voucher Tidak Ditemukan, Melanjutkan Tanpa Potongan")
        potongan = 0
    }
    return potongan
}

const hitungOngkir = (jarak) =>{
    if (jarak <= 2) {
        return ongkir = 5000;
    }else{
        return ongkir = (jarak - 2) * 3000 + 5000;
    }
}

const hitungPajak = (harga, pajak) =>{
    if (pajak) {
        return pajak = 5 / 100 * harga
    } else {
        return pajak = 0
    }
}

// arkFood(2000, "DITRAKTIRDEMY", 5, true)
// arkFood("75000", 'ARKFOOD5', 5, true)
// arkFood(75000, 'ARKFOOD5', "5", true)
// arkFood(175000, 'ARKFOOD5', 5, "benar")
