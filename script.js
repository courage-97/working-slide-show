const imagesContainer = document.querySelector(".imagesContainer");
let images = document.querySelectorAll("img")
let width = images[0].width
let index = 0;
const audio = document.querySelector("audio")
window.onload = () => {
  audio.play();
};
document.body.addEventListener("click", () => {
  audio.play()
})

function moveCars() {
  if (index >= imagesContainer.children.length) {
    index = 0; 
  }

  imagesContainer.style.transform = `translateX(${-width * index}px)`;
  const currentImage = imagesContainer.children[index];  
  document.body.style.backgroundImage = `url(${currentImage.src})`;

  index++;
}

setInterval(moveCars, 2000);
