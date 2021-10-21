// User object constructor
class Reviews {
   constructor(id, name, job, img, content) {
      this.id = id
      this.name = name
      this.job = job
      this.img = img
      this.content = content
   }
}

// Array of users
const reviews = [
   new Reviews(
      1,
      `Monique Walker`,
      `Ux designer`,
      `./images/istockphoto-1291208214-612x612.jpg`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus nobis voluptas! Quia amet veritatis sunt quaerat dolore nesciunt aperiam, molestias odio cumque officiis iste deleniti. Quidem vero cumque`
   ),
   new Reviews(
      2,
      `Helen Joseph`,
      `Software Developer`,
      `./images/unnamed.jpg`,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, dignissimos beatae. Ad harum laborum praesentium atque nam fuga tempora maxime?`
   ),
   new Reviews(
      3,
      `David Venice`,
      `CEO of Google`,
      `./images/Smiling-Man.jpg`,
      `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, consequuntur labore et unde fuga rem, quo dolore reiciendis odit numquam quibusdam repudiandae sint cum amet dicta ex, voluptatibus iste corporis dolores. Sequi, quasi maiores harum omnis saepe hic fugiat excepturi laboriosam fugit impedit, quis tempore consequuntur facere repellendus aliquid nulla.`
   )
]

// Variable declarations / page components
const img = document.getElementById(`person-img`)
const author = document.getElementById(`author`)
const job = document.getElementById(`job-description`)
const content = document.getElementById(`info`)

const nextBtn = document.querySelector(`.fa-chevron-right`)
const prevBtn = document.querySelector(`.fa-chevron-left`)
const randomBtn = document.querySelector(`.random-btn`)


// Starting index
let currentItem = 0


// Load initial item
document.addEventListener(`DOMContentLoaded`, () => {
   printObject(reviews, currentItem)
})


// Displays the next item in the array
nextBtn.addEventListener(`click`, () => {
   if (currentItem >= reviews.length - 1) {
      currentItem = 0
   } else {
      currentItem++
   }
   printObject(reviews, currentItem)
})

document.addEventListener(`keyup`, (event) => {
   if (event.key === `ArrowRight`) {
      if (currentItem >= reviews.length - 1) {
         currentItem = 0
      } else {
         currentItem++
      }
      printObject(reviews, currentItem)
   }
})


// Displays the previous item in the array
prevBtn.addEventListener(`click`, () => {
   if (currentItem <= 0) {
      currentItem = reviews.length - 1
   } else {
      currentItem--
   }
   printObject(reviews, currentItem)
})

document.addEventListener(`keyup`, (event) => {
   if (event.key === `ArrowLeft`) {
      if (currentItem <= 0) {
         currentItem = reviews.length - 1
      } else {
         currentItem--
      }
      printObject(reviews, currentItem)
   }
})


// Displays a random item from the array

randomBtn.addEventListener(`click`, () => {
   // get random value set to current item var
   const val = Math.floor(Math.random() * reviews.length)
   currentItem = val
   printObject(reviews, currentItem)
})


// Sets the blog content to the properties of a given object (uses array of objects)
const printObject = (arr, obj) => {
   const item = arr[obj]
   img.src = item.img
   author.textContent = item.name
   job.textContent = item.job
   content.textContent = item.content
}