var counter = 0;
function ques1() {
  var user = prompt("What is your name?");
  alert('Nice to meet you ' + user + '!');

  var state = prompt('Are you from WI?');
  var stateEl = document.getElementById("state");
    state = state.toLowerCase();
  if (state === 'yes' || state === 'y') {
  stateEl.textContent = state + ", I am a cheesehead from Wisconsin.";
  stateEl.className = "right";
  counter = counter + 1;
  } else {
  stateEl.textContent = "I am from Wisconsin";
  stateEl.className = "wrong";
  }

}
function ques2() {
  var kidEl = document.getElementById("kid");
  var kid = prompt('Do you have a kid?');
    kid = kid.toLowerCase();
  if (kid === 'yes' || kid === 'y') {
  kidEl.textContent = kid + ", I have a kid named July";
  kidEl.className = "right";
  counter = counter + 1;
  } else {
  kidEl.textContent = kid + "I have a kid";
  kidEl.className = "wrong";
  }
  console.log(kid);
}

ques1();
ques2();
ques3();



function ques3() {
  var decadeEl = document.getElementById("decade");
  var decade = prompt('Do you love being outside?');
    decade = decade.toLowerCase();
    console.log("This should be all lower case...: " + decade);
  if (decade === 'yes' || decade === 'y') {
  decadeEl.textContent = decade + ", I live for nature";
  decadeEl.className = "right";
  counter = counter + 1;
  } else {
  decadeEl.textContent = "Hiking is the best way to make yourself happy. You should try it.";
  decadeEl.className = "wrong";
  }

}
function counting() {
  var elCounting = document.getElementById("counting");
  if (counter == 3) {
  elCounting.textContent = "You know me so well we're practically married";
  } else if (counter == 2) {
  elCounting.textContent = "You kinda got it";
  } else {
  elCounting.textContent = "You don't know me very well at all.";
  }
}


function ques4() {
  var elAge = document.getElementById("age");
  var age = parseInt(prompt('How old are you?'));
  console.log("age is this type of data, after parseInt:" + typeof(age));
  if (age === 36) {
    console.log("I'm in the if statement now.");
    elAge.textContent = "You're right!";
  } else if (age > 36) {
    elAge.textContent = "Harsh.  Burn.";
  } else {
    console.log("I'm in the else statement.");
    elAge.textContent = "Nope, I'm 36.";
  }
}
ques4();

function ques5() {
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
  }
ques5();

function arrayGame() {
  var homeTown = prompt('What cities have I visited this year?');
  var cities = ['madison','green bay','la crosse', 'milwaukee'];
  homeTown = homeTown.toLowerCase();
  var correct = false;
  console.log(cities);
  for (var i = 0; i < cities.length; i++) {
    if (homeTown === cities[i]) {
      console.log("this should be correct...");
      correct = true;
    } else {
    }

  }
  alert("Yep! Love that city.");
arrayGame();


var joke = prompt('How do you make a tissue dance?');
  alert('You put a little boogie in it.');
