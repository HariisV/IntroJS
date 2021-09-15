const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 1000);
    })
}

// =================================== Then Catch ===================================//
    // Then Catch Dijalankan Menggunakan Promise dimana mereka menerima 2 Parameter Yaitu Resolve & reject
    // Resolve = Hasil Benar / Sesuai Ekstpetasi & Reject = Ada Eror / kondisi dimana false
    // Setelah itu ketika fungsi dipanggil baru kita deklarasikan hasilnya yaitu resolve & reject akan melakukan apa
cekHariKerja('jumat')
    .then((res) =>{
        console.log(res)
    })
    .catch((err) =>{
        console.log(`Eror Ditemukan :  ${err.message}`)
    })
// =================================== TRY Catch ===================================//
// Kalo Menhandel Asyn await emenggunakan Try Catch ||| Untuk Menghandel Promise Menggunakan Then Catch
// Try Catch = Untuk Menghandle ketika ada suatu eror
// FUNGSI Yang dipanggil Harus Berbentuk Promise Function

console.log("Mulai Proses")
const getData = async () => {
    try {
        const cek = await cekHariKerja('jumat');
        console.log(cek)
    } catch (error) {
        console.log(`Error Tersedia = ${error.message}`)
    } finally {
        console.log("Proses Selesai")
    }
}
getData()
