// store a secretPhrase Gotham City
// store the gamePhrase --t--- C-t-
// store the number of lives (6)
// have all the methods necessary for gameplay

class Hangman {

    constructor() {
        this.lives = 6;
        this.secretPhrase = "Gotham City";
        this.gamePhrase = "------ ----";
    }

    playLetter(userLetter) {

        let letterExists = false;
        for (let i = 0; i < this.secretPhrase.length; i++) {
            let secretLetter = this.secretPhrase[i];

            if (secretLetter == userLetter) {
                this.gamePhrase  = replaceStringAtPos(this.gamePhrase, i, secretLetter);
                letterExists = true;
            }
        }
        if (!letterExists) {
            this.lives--;
        } 
    }

    hasWon() {
        return this.secretPhrase == this.gamePhrase && this.lives > 0;
    }

    isPlaying() {
        return this.secretPhrase != this.gamePhrase && this.lives > 0;
    }

}

// HELPER FUNCTIONS

function replaceStringAtPos(text, pos, replaceCharacter) {
    let firstHalf = text.substr(0, pos);
    let secondHalf = text.substr(pos + 1, text.length - pos);

    return firstHalf + replaceCharacter + secondHalf;
}