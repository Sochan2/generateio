const passwordBox=document.getElementById("password");
const generatePassword= document.getElementById("generate");
const copyPass = document.getElementById("copyPassword");
const length=13;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symbol="!@#$%^^&*?()+-";
const alChars = upperCase + lowerCase + number + symbol;

function createPassword(){
let password="";
password += upperCase[Math.floor(Math.random()*upperCase.length)];
password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
password += number[Math.floor(Math.random()*number.length)];
password += symbol[Math.floor(Math.random()*symbol.length)];

while(length>password.length){
 password+=password += alChars[Math.floor(Math.random()*symbol.length)];
}
passwordBox.value = password;
}

function  copyPassword(){
  passwordBox.select();
navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        alert("Password copied to clipboard");
    })
    .catch(err => {
        console.error('Could not copy text: ', err);
    });
}

generatePassword.addEventListener("click",createPassword);
copyPass.addEventListener("click",copyPassword);


passwordBox.select();
navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        alert("Password copied to clipboard");
    })
    .catch(err => {
        console.error('Could not copy text: ', err);
    });


    passwordBox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard");



