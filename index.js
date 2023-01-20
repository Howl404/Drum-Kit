const drums = document.querySelectorAll(".drum");
let buttonInnerHTML = 0;

const sound = function (n) {
  switch (n) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
};

// * Смотрит на нажатие кнопки мышкой, воспроизводит звук и меняет цвет на 50 миллисекунд

drums.forEach((box) => {
  box.addEventListener("click", function handleClick() {
    buttonInnerHTML = this.classList[0];
    pressedDrum(this);
    sound(buttonInnerHTML);
  });
});

// * Смотри на нажатие кнопок на клавиатуре,воспроизводит звук и меняет цвет на 50 миллисекунд

document.addEventListener("keydown", function (event) {
  let pressed = document.querySelector(`.${event.key}`);
  pressedDrum(pressed);
  sound(event.key);
});

function pressedDrum(i) {
  i.classList.toggle("pressed");
  setTimeout(() => {
    i.classList.toggle("pressed");
  }, 50);
}

class HouseKeeper {
  constructor(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
      console.log("Cleaning in progress");
    };
  }
}

const housekeeper1 = new HouseKeeper(12, "Jane", [
  "lobby",
  "bathroom",
  "bedroom",
]);

housekeeper1.clean();

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person2 = new Person("Bob");
console.log(person2);
person2.constructor(new Person());
