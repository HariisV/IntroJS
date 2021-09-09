// Buat program yang menghitung rata-rata UN beserta gradenya, 
// dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, 
// yang di dalam program tersebut memiliki validasi yaitu 
// semua nilai tersebut harus diisi dan juga untuk grade memiliki 
// kondisi dengan ketentuan sebagai berikut:


const bhsIndonesia = 80
const bhsInggris = 90
const matematika = 40
const ipa = 50

    if(typeof(bhsIndonesia) == 'number' && 
        typeof(bhsInggris) == 'number' && 
        typeof(matematika) == 'number' && 
        typeof(ipa) == 'number'){

            if(bhsIndonesia < 0 || bhsInggris < 0 || matematika < 0 || ipa < 0){
                    console.log("Eror, Minimum Nilai Adalah 0")
            }else if(bhsIndonesia > 100 || bhsInggris > 100 || matematika > 100 || ipa > 100){
                    console.log("Eror, Maximum Nilai Adalah 100")
            }else{
                    let tampungNilai = bhsIndonesia + bhsInggris + matematika + ipa
                    tampungNilai = tampungNilai / 4;
                    
                    console.log(`Rata - Rata  = ${tampungNilai}`)

                    // Check Grade
                      tampungNilai >= 90? console.log("Grade = A")
                    : tampungNilai >=80 ? console.log("Grade = B")
                    : tampungNilai >=70 ? console.log("Grade = C")
                    : tampungNilai >=60 ? console.log("Grade = D")
                    :console.log("Grade = E")
                }
        
   }else{
        console.log("Nilai Tidak Valid, Harus Punya Value & Hanya Inputkan Number !")
   }
