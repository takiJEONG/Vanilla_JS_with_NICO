const images = [
    "0.jepg",
    "1.jepg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);