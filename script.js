const wrapper = document.querySelector(".wrapper");
let question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const msgList = [
  'ban jao na please 🥺',
  'Pllllleeeeeaaaassseeee',
  'accha to hu me itna 😉',
  'jab tak yes nahi karoge me to nahi jaa raha 😏',
  'kar bhi do abb, maan bhi jao 😏'
] 

let currentIndex = 0;

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I knew you love me a lot 😍";
  gif.src =
    "https://media.giphy.com/media/MBaRIkFJiJ1yF5ZUy8/giphy-downsized.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  question.innerHTML = msgList[currentIndex];
  currentIndex += 1;
  currentIndex = currentIndex % msgList.length;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
