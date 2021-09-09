const name = [
'Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope']

function Searching(keyword, limit, callbackProses, callbackCLG) {
    let result = callbackProses(keyword, limit);
    return callbackCLG(result)
}

function callbackProses(keyword, limit){
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

function callbackCLG(result){
    console.log(result)
}

Searching("an", 3, callbackProses, callbackCLG)