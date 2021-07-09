// O(4^n * n) time | O(4^b * n) space
// This is becasue we reach our base case 4^n times based on the max
// number of possible letters fro a given digit (which is 4 letters when
// the current digit is a 7 or a 9).
function phoneNumberMnemonics(phoneNumber) {
    // create empty mnemoic for our number containing zeros
    const currentMnemonic = new Array(phoneNumber.length).fill('0');
    // create empty array that will contain one mnemoic
    const mnemonicFound = [];

    // call the recursive function starting at index 0
    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicFound);
    return mnemonicFound;
}

function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicFound) {
    // base case: we are already at the last digit in the phone number
    //so just add the currentMnemocic to the list of mnemoics found
    if(idx === phoneNumber.length) {
        const mnemonic = currentMnemonic.join('');
        mnemonicFound.push(mnemonic);
    } else {
        // otherwise we are still building the current mnomic so we grab the current digit
        // of the phone nunber at the current index
        const digit = phoneNumber[idx];
        // grab the letters that represent that digit
        const letters = DIGIT_LETTERS[digit];
        // loop all of the lettes one by one
        for (const letter of letters) {
            // set the current letter at the current index
            currentMnemonic[idx] = letter;
            // call the function recursivly simply increaseing the index by 1
            phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicFound);
        }
    }
}

const DIGIT_LETTERS = {
    0: ['0'],
    1: ['1'],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
}

module.exports = phoneNumberMnemonics;