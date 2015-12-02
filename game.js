var user = prompt("What is your name?");
alert('Nice to meet you ' + user + '!');

var counter = 0;
var state = prompt('Are you from WI?');


if (state === 'yes' || 'YES') {
alert(state + ", I am a cheesehead from Wisconsin.");
counter = counter + 1;
} else {
alert("I am from Wisconsin")
}

var kid = prompt('Do you have a kid?');
if (kid === 'yes' || 'YES') {
alert(kid + ", I have a kid named July");
counter = counter + 1;
} else {
alert("I have a kid");
}
console.log(kid);

var decade = prompt('Do you love being outside?');
if (decade === 'yes' || 'YES') {
alert(decade + ", I live for nature");
counter = counter + 1;
} else {
alert("Hiking is the best way to make yourself happy. You should try it.");
}
console.log(kid);

if (counter == 3) {
alert("You know me so well we're practically married");
} else if (counter == 2) {
alert("You kinda got it");
} else {
  alert("You don't know me very well at all.");
}
var age = prompt('How old are you?');
if (age === 36) {
  alert("You're right!");
} else if (age > 36) {
  alert("Harsh.  Burn.");
} else {
  alert("Nope, I'm 36.")

};
