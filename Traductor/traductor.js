let toMystiqueAlphabet = true;

function translate() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const pronunciationText = document.getElementById('pronunciationText');
    const pronunciationContainer = document.getElementById('pronunciationContainer');
    
    const normalAlphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const mystiqueAlphabet = 'CDEFGHIJKLMNÑOPQRSTUVWXYZAB';
    
    const mystiquePronunciation = {
        'A': 'ka', 'B': 'lo', 'C': 'mi', 'D': 'na', 'E': 'pi', 'F': 'ro', 'G': 'su', 'H': 'ti',
        'I': 've', 'J': 'qi', 'K': 'xi', 'L': 'yi', 'M': 'zo', 'N': 'fo', 'O': 'ge', 'P': 'he',
        'Q': 'ji', 'R': 'ki', 'S': 'le', 'T': 'me', 'U': 'ne', 'V': 'po', 'W': 're', 'X': 'se',
        'Y': 'te', 'Z': 'we'
    };
    
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

    if (toMystiqueAlphabet) {
        let translatedPronunciation = '';
        for (let i = 0; i < translatedNormalText.length; i++) {
            let char = translatedNormalText[i];
            let upperChar = char.toUpperCase();
            translatedPronunciation += mystiquePronunciation[upperChar] ? mystiquePronunciation[upperChar] : char;
        }
        pronunciationText.textContent = translatedPronunciation;
        pronunciationContainer.style.display = 'block';
    } else {
        pronunciationContainer.style.display = 'none';
    }
}

function translateToMystique() {
    if (document.getElementById('inputText').value.trim() !== '') {
        toMystiqueAlphabet = true;
        translate();
    }
}

function translateToNormal() {
    if (document.getElementById('inputText').value.trim() !== '') {
        toMystiqueAlphabet = false;
        translate();
    }
}

function copyText() {
    const outputText = document.getElementById('outputText');
    if (outputText.textContent.trim() !== '') {
        const textArea = document.createElement('textarea');
        textArea.textContent = outputText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        document.getElementById('Copy').style = "display: content;";
        setTimeout(function() {
            document.getElementById('Copy').style = "display: none;";
        }, 2500);
    }
}

function copyPronunciation() {
    const pronunciationText = document.getElementById('pronunciationText');
    if (pronunciationText.textContent.trim() !== '') {
        const textArea = document.createElement('textarea');
        textArea.textContent = pronunciationText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        document.getElementById('PronunciationCopy').style = "display: content;";
        setTimeout(function() {
            document.getElementById('PronunciationCopy').style = "display: none;";
        }, 2500);
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').textContent = '';
    document.getElementById('pronunciationText').textContent = '';
    document.getElementById('pronunciationContainer').style.display = 'none';
    toggleButtons();
}

function toggleButtons() {
    const inputText = document.getElementById('inputText').value.trim();
    document.getElementById('translateToMystiqueBtn').disabled = inputText === '';
    document.getElementById('translateToNormalBtn').disabled = inputText === '';
    document.getElementById('copyOutputBtn').disabled = inputText === '';
    document.getElementById('copyPronunciationBtn').disabled = inputText === '';
}

window.onload = toggleButtons;
