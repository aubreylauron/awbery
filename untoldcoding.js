const text =
  "To my man, I just wanted to tell you how much I admire you. The way you treat me is truly special, and I feel so lucky to have you in my life. I know that your life is busy and challenging, but you always makes time for me and make me feel loved and special. The way you understand me and accept me for who I am, even when I made a mistake and hurt your feelings is truly remarkable. I'm so grateful for your patience, understanding, and your unwavering love. I love you so much .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
