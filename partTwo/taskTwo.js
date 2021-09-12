const name = [
'Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']

function Searching(keyword, limit, callbackProses, callbackCLG) {
    console.log("Memulai")
    let result = callbackProses(keyword, limit)
    callbackCLG(result)
    console.log("Selesai")
}

function prosesCallback(keyword, limit){
    let showData = [];
    let max = 0;
    name.forEach(element => {
        elementCheck = element.toLowerCase()
        keyword = keyword.toLowerCase();

        if (max >= limit) {
            return "selesai";
        } else if (elementCheck.search(keyword) !== -1) {
            showData.push(element);
            max = max + 1;
        }
    });
    return showData
}

function consoleCallback(result){
    console.log(result)
}

Searching("a", 5, prosesCallback, consoleCallback)

// const name = [
    // 'Abigail', 'Alexandra', 'Alison',
    // 'Amanda', 'Angela', 'Bella',
    // 'Carol', 'Caroline', 'Carolyn',
    // 'Deirdre', 'Diana', 'Elizabeth',
    // 'Ella', 'Faith', 'Olivia', 'Penelope']

    // function Searching(keyword, limit) {
    //     console.log("Memulai")

    //     let showData = [];
    //     setTimeout(() => {
    //         let max = 0;
    //         name.forEach(element => {
    //             elementCheck = element.toLowerCase()
    //             keyword = keyword.toLowerCase();

    //             if (max >= limit) {
    //                 return "selesai";
    //             } else if (elementCheck.search(keyword) !== -1) {
    //                 showData.push(element);
    //                 max = max + 1;
    //             }
                
    //         });
    //         // console.log(showData)
    //     }, 2000);
    //     console.log(showData)
    //     console.log("Selesai")
    // }


// Searching("an", 3)
