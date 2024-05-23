let toMystiqueAlphabet = true;

function translate() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    const normalAlphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const mystiqueAlphabet = 'CDEFGHIJKLMNÑOPQRSTUVWXYZAB';
    
    const specialChars = ['?', '!', '¿', '¡']; // Caracteres especiales para invertir
    
    let translatedText = '';
    let specialCharPositions = [];
    let normalCharPositions = [];

    // Recoger posiciones de caracteres especiales y construir el texto a traducir sin estos caracteres
    for (let i = 0; i < inputText.length; i++) {
        if (specialChars.includes(inputText[i])) {
            specialCharPositions.push({ char: inputText[i], position: i });
        } else if (/[0-9]/.test(inputText[i])) {
            normalCharPositions.push({ char: inputText[i], position: i });
        } else {
            translatedText += inputText[i];
        }
    }

    // Traducir caracteres normales
    let translatedNormalText = '';
    for (let i = 0; i < translatedText.length; i++) {
        let char = translatedText[i];
        let isLowerCase = char === char.toLowerCase();
        let upperChar = char.toUpperCase();
        let index;
        if (toMystiqueAlphabet) {
            index = normalAlphabet.indexOf(upperChar);
            if (index !== -1) {
                let translatedChar = mystiqueAlphabet[index];
                translatedNormalText += isLowerCase ? translatedChar.toLowerCase() : translatedChar;
            } else {
                translatedNormalText += char;
            }
        } else {
            index = mystiqueAlphabet.indexOf(upperChar);
            if (index !== -1) {
                let translatedChar = normalAlphabet[index];
                translatedNormalText += isLowerCase ? translatedChar.toLowerCase() : translatedChar;
            } else {
                translatedNormalText += char;
            }
        }
    }

    // Reinsertar caracteres especiales en sus posiciones originales invertidos
    for (let i = 0; i < specialCharPositions.length; i++) {
        let pos = specialCharPositions[i].position;
        let char = specialCharPositions[specialCharPositions.length - 1 - i].char;
        translatedNormalText = translatedNormalText.slice(0, pos) + char + translatedNormalText.slice(pos);
    }

    // Reinsertar números cifrados en sus posiciones originales
    for (let i = 0; i < normalCharPositions.length; i++) {
        let pos = normalCharPositions[i].position;
        let char = normalCharPositions[i].char;
        let numChar = parseInt(char, 10);
        
        if (toMystiqueAlphabet) {
            numChar = (numChar + 2) % 10;
        } else {
            numChar = (numChar - 2 + 10) % 10;
        }
        
        translatedNormalText = translatedNormalText.slice(0, pos) + numChar.toString() + translatedNormalText.slice(pos);
    }

    outputText.textContent = translatedNormalText;
}

function translateToMystique() {
    toMystiqueAlphabet = true;
    translate();
}

function translateToNormal() {
    toMystiqueAlphabet = false;
    translate();
}
