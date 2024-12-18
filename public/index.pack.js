// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
import { showReviewTotal, populateUser } from "./utils.js";
const footer = document.querySelector('.footer');
const propertyContainer = document.querySelector('.properties');
let isOpen;
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
const you = {
    firstName: "Bobby",
    lastName: "Brown",
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};
// Properties
const properties = [
    {
        image: "./images/colombia-property.jpg",
        title: "Colombian Shack",
        price: 45,
        location: {
            firstLine: "shack 37",
            city: "Bogota",
            code: 45864,
            country: "Colombia"
        },
        contact: [+1123495082908, "marywinkle@gmail.com"],
        isAvailable: true
    },
    {
        image: "./images/poland-property.jpg",
        title: "Polish Cottage",
        price: 34,
        location: {
            firstLine: "no 23",
            city: "Gdansk",
            code: 344903,
            country: "Poland"
        },
        contact: [+1123495082908, "garydavis@gmail.com"],
        isAvailable: false
    },
    {
        image: "./images/london-property.jpg",
        title: "London Flat",
        price: 23,
        location: {
            firstLine: "flat 15",
            city: "London",
            code: 37803,
            country: "United Kingdom"
        },
        contact: [+1123495082908, "andyluger@gmail.com"],
        isAvailable: true
    },
];
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = properties[i].title;
    const image = document.createElement("img");
    image.setAttribute("src", properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}
let currentLocation = ['London', '11.03', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
