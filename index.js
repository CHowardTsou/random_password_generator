let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwOneEl = document.getElementById("pwOne");
let pwTwoEl = document.getElementById("pwTwo");
let pwLength = 15; // default password legnth
let pwLengthEl = document.getElementById("pw-length");
let hasSymbolEl = document.getElementById("hasSymbol");

document.getElementById("btn").addEventListener("click", function(){
    //empty textcontent before generating new password
    pwOneEl.textContent = "";
    pwTwoEl.textContent = "";
    
    // check if there is a number type in
    if(pwLengthEl.value){
        pwLength = pwLengthEl.value;
    }
    
    // check if symbol input is checked
    if(hasSymbolEl.checked){
        characters = characters.filter(char => /[a-zA-Z0-9]/.test(char));
    }
    
    // generate first password
    for(let i = 0 ; i < pwLength ; i++) {
        pwOneEl.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
    
    // generate second password
    for(let i = 0 ; i < pwLength ; i++) {
        pwTwoEl.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
})

// copy first generated password to clipboard
document.getElementById("pwOne").addEventListener("click", async function(){
    const textToCopy = document.getElementById("pwOne").innerText;

    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Text has been copied!');
    } catch (err) {
        console.error('Unable to copy text: ', err.message || err);
    }
})

// copy second generated password to clipboard
document.getElementById("pwTwo").addEventListener("click", async function(){
    const textToCopy = document.getElementById("pwTwo").innerText;

    try {
        await navigator.clipboard.writeText(textToCopy);
        alert('Text has been copied!');
    } catch (err) {
        console.error('Unable to copy text: ', err.message || err);
    }
})
