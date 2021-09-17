const palindrome = (text) => {
    if (typeof text === "string") {
        if (text.length >= 3) {
            let hasil = "";
            for (let i = text.length - 1; i >= 0; i--) {
                hasil += text[i]
            }
            console.log(hasil == text ? `${text} = Palindrom` : `${text} | ${hasil} = Bukan Palindrom`)
        }else{
            return console.log("Text Terlalu Pendek, Minimal 3 Huruf")
        }
    }else{
        return console.log("Program Hanya Menerima String")
    }
}

palindrome("gwe")