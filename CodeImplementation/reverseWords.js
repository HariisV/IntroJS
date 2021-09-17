const reverse = (text) =>{
    if (typeof text === "string") {
        let split = text.split(" ")
        if (split.length > 1) {
            let textfix = "";

            for (let i = split.length - 1; i >= 0; i--) {
                textfix += split[i] + " "
            }
            return console.log(textfix)
        }else{
            return console.log("Minimal 2 Kata")
        }
    } else {
        return console.log("Program Hanya Menerima String")
    }
   
}

reverse('4 3 2 1')
