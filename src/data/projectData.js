import gameStork from "../assets/images/projects/game-go-image.png"
// import dNd from "../assets/images/projects/dnd.png"
import coFeFe from "../assets/images/projects/coffee.jpg"
import jedkh from "../assets/images/projects/jedkh2.PNG"
import exPress from "../assets/images/projects/express.png"
import pickleRick from "../assets/images/projects/show-me-what-you-got-walkthrough.gif"
import birdPerson from "../assets/images/projects/landingpage-screenshot.JPG"

const projectData = [
  {
    name: "Salonme Group Project",
    info: "MERN App that uses REST APIs to allow clients to buy products with Stripe and set appointments with react-big-calendar. App can be downloaded as a PWA.",
    gitHubLink: "https://github.com/dylanshoemaker/salonme",
    liveLink: "https://salonme.herokuapp.com/",
    screenShot: birdPerson,
  },
  {
    name: "Game Stork Group Project",
    info: "App that allows the user to find new games based on their likings",
    gitHubLink: "https://github.com/dylanshoemaker/game-stork",
    liveLink: "https://dylanshoemaker.github.io/game-stork/",
    screenShot: gameStork,

  },
  // {
  //   name: "DND Character Sheet Manager Group Project",
  //   gitHubLink: "https://github.com/dylanshoemaker/dnd-manager",
  //   liveLink: "https://dnd-character-sheet-manager.herokuapp.com/",
  //   screenShot: dNd,
 
  // },
  {
    name: "Coffee is the Answer",
    info: "Backend for an ecommerce site that performs CRUD operations using MySQL2 and Sequelize npm packages to connect the Express.js API to a MySQL database while using the dotenv package to use environment variables to store sensitive data.",
    gitHubLink: "https://github.com/dylanshoemaker/coffee-is-the-answer",
    liveLink: "https://drive.google.com/file/d/1HitA6yxDjIwljanOktbJO5cWswUJPF5D/view",
    screenShot: coFeFe,

  },
  {
    name: "The Tech Blog",
    info: "MVC style social media blog using handlebars and JavaScript",
    gitHubLink: "https://github.com/dylanshoemaker/jedkh",
    liveLink: "https://jedkh.herokuapp.com/",
    screenShot: jedkh,
 
  },
  {
    name: "Express.js Note taking App",
    info: "Simple application that uses Express.js and is hosted on Heroku to post and delete notes.",
    gitHubLink: "https://github.com/dylanshoemaker/express-note-taker",
    liveLink: "https://afternoon-refuge-30426.herokuapp.com/",
    screenShot: exPress,
  },
  {
    name: "Show Me What You Got",
    info: "Application that uses the Command Line Interface (CLI) to make CRUD operations with mySQL database.",
    gitHubLink: "https://github.com/dylanshoemaker/show-me-what-you-got",
    liveLink: "https://pdx.cdn.nv.instructuremedia.com/originals/o-3BrQbP4oYmPPUGxcNL1SLqYGsF54uy1/transcodings/t-3Tam8sEHFnabgMJLyfJ5om6HGD5dPfd.mp4?&Expires=1637107589&Signature=qbuan8BFH0rbzb-V9nwD7f5m0FhwtAPb4fjMr7QPV97RaUVkCNdq34Uo0PrgvISpDcdRIhUwQ8PrjTBRbQWhOs5WNd7WRlRuGZyrQJXshADUpBwLL8mwqbiozGNwuhDGS4myD35bpAWjdnpSl0VnyIMyJ8YbyYba2GqIARDDs5U2ISBZWGIXo7JbUz4w3j4NrfbHKM5lpXhJ1oKtgGhIZq26lDg8dw75ePVj1~AE4bhJuGwNkaofLf05~R7Qyepv8hA~~9VjxEIFMOausPusgpVzEb-sgtwqSSJyk99VDoItxOJ6JFHqMDiQcZa3ZiPlUCPjJYZL6TGMAAoNM6bRzQ__&Key-Pair-Id=APKAJLP4NHW7VFATZNDQ",
    screenShot: pickleRick,
  },
  
];

export default projectData;
