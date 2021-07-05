function count_vowels(word){
    let count=0;
    for(let i=0;i<word.length;i++){
        if(word.charAt(i)=="a" || word.charAt(i)=="e" || word.charAt(i)=="i"|| word.charAt(i)=="o" || word.charAt(i)=="u"){
            count++
        }
    }
    console.log(count);
}
count_vowels("kamogelomashike");
    