var i = 0;
var txt = 'Szyfr cezara';
var speed = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function clearForm(){
    document.getElementById("inputText").value = "";
    document.getElementById("inputKey").value = 0;
    document.getElementById("inputText2").value = "";
    document.getElementById("inputKey2").value = 0;
    document.getElementById("cipheredText").innerHTML = "";
}

function switchForms(v){
    var cipherForm = document.getElementById("cipher");
    var decipherForm = document.getElementById("decipher");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    switch(v){
        case 0:
            cipherForm.style.display = 'block';
            btn1.className = "btn btn-secondary active";
            decipherForm.style.display = 'none';
            btn2.className = "btn btn-secondary";
            break;
        case 1:
            decipherForm.style.display = 'block';
            btn1.className = "btn btn-secondary";
            cipherForm.style.display = 'none';
            btn2.className = "btn btn-secondary active";
            break;
        default:
            break;
    }
}

function cipher(str, key){
    console.log(str + " " + key);
  if (key < 0) {
    return cipher(str, key + 26);
  }

  var output = "";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];

    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + key) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + key) % 26) + 97);
      }
    }
    output += c;
  }
  console.log(output);
  document.getElementById("cipheredText").innerHTML = output;
}

function createOption(val, label) {
    var option = document.createElement("option");
    option.setAttribute("value", val);
    option.innerHTML = label;

    return option;
}

window.onload = function(){
    typeWriter();
    var keySelect = document.getElementById("inputKey");
    var keySelect_ = document.getElementById("inputKey2");
    for(var i=0; i<26; i++){
        keySelect.appendChild(createOption(i, i));
        keySelect_.appendChild(createOption(i, i));
    }
}