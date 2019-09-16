class EuroMillions {
    
    constructor() {
        this.numbers = this.createArrayWithoutRepetition(1, 50, 5); // array with 5 random numbers
        this.stars = this.createArrayWithoutRepetition(1, 12, 2);; // array with 2 random stars
    }
    
    randomNumber(min, max) {
        if (min > max) {
            return NaN;
        }
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }

    existsInArray(needle, haystack) {
        for (let i = 0; i < haystack.length; i++) {
            if (needle == haystack[i]) {
                return true;
            }
        }
        return false;
    }

    createArrayWithoutRepetition(min, max, size) {
        let newArray = [];

        while (newArray.length < size) {
            let number = this.randomNumber(min, max);
            if (!this.existsInArray(number, newArray)) {
                newArray.push(number);
            }
        }
        return newArray.sort();
    }

    showNumbers() {
        let textNumbers = "";
        for (let i = 0; i < this.numbers.length; i++) {
            if (i > 0) {
                textNumbers += ", ";
            }
            textNumbers += this.numbers[i];
        }
        return textNumbers;
    }

    showStars() {
        let textStars = "";
        for (let i = 0; i < this.stars.length; i++) {
            if (i > 0) {
                textStars += ", ";
            }
            textStars += this.stars[i];
        }
        return textStars;
    }

    showKey() {
        return this.showNumbers() + " - " + this.showStars();
    }
    
}