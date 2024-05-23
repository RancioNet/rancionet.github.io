let toNewAlphabet = true;

function translateText() {
    toNewAlphabet = true;
    translate();
}

function translateTextReverse() {
    toNewAlphabet = false;
    translate();
}

function translate() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    const normalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newAlphabet = 'CDEFGHIJKLMNOPQRSTUVWXYZAB';
    
    let translatedText = '';
    
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i].toUpperCase();
        let index;
        if (toNewAlphabet) {
            index = normalAlphabet.indexOf(char);
            if (index !== -1) {
                translatedText += newAlphabet[index];
            } else {
                translatedText += char;
            }
        } else {
            index = newAlphabet.indexOf(char);
            if (index !== -1) {
                translatedText += normalAlphabet[index];
            } else {
                translatedText += char;
            }
        }
    }
    
    outputText.textContent = translatedText;
}
