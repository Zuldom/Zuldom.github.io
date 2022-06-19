const images = ["0.jpeg", "1.jpeg", "3.jpeg", "4.jpeg"];
const body = document.querySelector('body')

const chosenimage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
bgimage.classList.add("image");

bgimage.src = `../img/${chosenimage}`;

document.body.appendChild(bgimage);

