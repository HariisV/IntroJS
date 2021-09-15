// const getMonth = (callback) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             let error = false;
    //             let month = ['january', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    //             if (!error) {
    //                 resolve(callback(null, month))
    //             } else {
    //                 reject(new Error("Sorry, Data Not Found"), [])
    //             }
    //         }, 1);
    //     })
    // }
    // function showMonth(status, month) {
    //     month.map((element) => {
    //         console.log(element)
    //     })
    // }
    // const getData = async () => {
    //     try {
    //         console.log("*===Mulai===*")
    //         await getMonth(showMonth);
    //     } catch (error) {
    //         console.log(`Error Tersedia = ${error.message}`)
    //     } finally {
    //         console.log("*===Proses Selesai===*")
    //     }
    // }
// getData()

const getMonth = (callback) => {
        setTimeout(() => {
            let error = true;
            let month = ['january', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            if (!error) {
                callback(null, month)
            } else {
                callback(new Error("Sorry, Data Not Found"), [])
            }
        }, 2000);
}


getMonth((error,month) => {
    if (error && error.message) {
        console.log(error.message)
    } else {
        month.map((element) => {
            console.log(element)
        })
    }
})
