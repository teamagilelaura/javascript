class RPS {
    constructor(choice_user) {
      this.choice_user = choice_user;
      this.choice_computer = this.randomNumber();
      this.choice = ["Rock", "Paper", "Scissors"]
    }
    randomNumber() {
      return 0;
      return Math.floor(Math.random() * 3);
    }
    compare() {
      if (this.choice_user == this.choice_computer) {
        return "Tie game: " + this.choice[this.choice_user];
      } else if (this.choice_user + this.choice_computer == 2) {
        if (this.choice_user > this.choice_computer) {
          let newText = "You Lost1: " + this.choice[this.choice_user] + "&lt;" + this.choice[this.choice_computer];
          console.log(newText);
          alert(newText);
          return newText;
        }
        return "You Won: " + this.choice[this.choice_user] + ">" + this.choice[this.choice_computer];
      }
      if (this.choice_user > this.choice_computer) {
        return "You Won: " + this.choice[this.choice_user] + ">" + this.choice[this.choice_computer];
      }
      return "You lost2: " + (this.choice[this.choice_user] + "&lt;" + this.choice[this.choice_computer]);
    }
  }