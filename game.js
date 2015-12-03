var user = prompt("What is your name?");
alert('Nice to meet you ' + user + '!');

var counter = 0;
var state = prompt('Are you from WI?');

  state = state.toLowerCase();
if (state === 'yes' || state === 'y') {
alert(state + ", I am a cheesehead from Wisconsin.");
counter = counter + 1;
} else {
alert("I am from Wisconsin")
}

var kid = prompt('Do you have a kid?');
  kid = kid.toLowerCase();
if (kid === 'yes' || kid === 'y') {
alert(kid + ", I have a kid named July");
counter = counter + 1;
} else {
alert("I have a kid");
}
console.log(kid);

var decade = prompt('Do you love being outside?');
  decade = decade.toLowerCase();
  console.log("This should be all lower case...: " + decade);
if (decade === 'yes' || decade === 'y') {
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
var age = parseInt(prompt('How old are you?'));
console.log("age is this type of data, after parseInt:" + typeof(age));
if (age === 36) {
  console.log("I'm in the if statement now.");
  alert("You're right!");
} else if (age > 36) {
  alert("Harsh.  Burn.");
} else {
  console.log("I'm in the else statement.");
  alert("Nope, I'm 36.");
}

var answer = 36;
var user = parseInt(prompt('What is your number?'));
  while (user !== answer) {
    if (user > answer) {
      alert("Too high.");
      user = parseInt(prompt('What is your number?'));
    } else {
    alert("You are wrong.");
    user = parseInt(prompt('What is your number?'));
    }
}
alert("You got it!");


function arrayGame() {
  var homeTown = prompt('What cities have I visited this year?');
  var cities = ['madison','green bay','la crosse', 'milwaukee'];
  homeTown = homeTown.toLowerCase();
  console.log(cities);
for (var i = 0; i < cities.length; i++) {
  if (homeTown === cities[i]) {
    console.log("this should be correct...");
    alert("Yep, I grew up in Wisconsin.");
    return;
  } else {
    alert("Nope, not this year.");
    return;
  }

};
}
arrayGame();

var joke = prompt('How do you make a tissue dance?');
  alert('You put a little boogie in it.');
