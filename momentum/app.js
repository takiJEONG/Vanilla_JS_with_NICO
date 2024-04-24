const age = parseInt(prompt("몇살이세요?"));


if(isNaN(age) || age < 0) {
    console.log("Pleas write a real positive number")
} else if(age < 18) {
    console.log("You are too young")
} else if(age >= 18 && age <=50){
    console.log("YOU CAN DRINK! ENJOY!!")
} else {
    console.log("YOU CANNOT DRINK.GOOD BYE")
} else if (age > 50 && age <= 80) {
    console.log("You should exercise instead of DRINK")
} else if (age > 80) {
    console.log("You can do whatever you want. YOU ARE FREE")
}