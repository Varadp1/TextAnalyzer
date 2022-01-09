var submitbtn = document.getElementById("submitbtn");

submitbtn.onclick = function(){
    var punctuationsNum = 0;
    var upperCaseLettersNum = 0;
    var lowerCaseLettersNum = 0;
    var spacesNum = 0;

    var textarea = document.getElementById("textarea");
    var text = textarea.value;

    var punctuations = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    for (let punctuation of punctuations) {
        for(let element of text){
            if (element == punctuation){
                punctuationsNum++;
            }
        }    
    }

    for (let upperCaseLetter of upperCaseLetters) {
        for(let element of text){
            if (element == upperCaseLetter){
                upperCaseLettersNum++;
            }
        }    
    }

    for (let lowerCaseLetter of lowerCaseLetters) {
        for(let element of text){
            if (element == lowerCaseLetter){
                lowerCaseLettersNum++;
            }
        }    
    }

   
    for(let element of text){
        if (element == " "){
            spacesNum++;
        }
    }
    
    var output = document.getElementById("output");
    output.innerHTML = `Your text has ${punctuationsNum} punctuations, ${upperCaseLettersNum} upper case letters, ${lowerCaseLettersNum} lower case letters and ${spacesNum} spaces.`
}