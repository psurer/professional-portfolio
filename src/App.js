import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import likeminded from './assets/likeminded.png'
import languagebarrier from './assets/languagebarrier.JPG'
import petmeup from "./assets/petmeup.png"
// import booksearch from "./assets/booksearch.JPG";
// import fitness from "./assets/fitnessapp.JPG";
// import myfridge from "./assets/myfridge.JPG";


const projects = [
    { 
        id:1,
        name: "Pet Me Up",
        picture: petmeup,
        description:"Pet Me Up offers: CRM for vet clinics to manage their clients. A streamlined user experience, users can login to their account, or sign up, register their pets, keeping track of upcoming appointments with their vet, manage their pets health, and book appointments on the fly.   ",
        link: "hhttps://github.com/psurer/pet-me-up"
    },
    { 
        id:2,
        name: "Like Minded",
        picture: likeminded,
        description:"A collaborative group planning app, streamlining the planning process with your colleagues, friends, and family ",
        link: "https://github.com/psurer/likeminded"
    },
    {
        id:3,
        name: "The Language Barrier",
        picture: languagebarrier,
        description: "An application that allows children to learn multiple langauges through an interactive matchmaking game",
        link: "https://github.com/psurer/language-barrier"
    },
    {
        // id:3,
        // name: "",
        // picture: , 
        // description: "",
        // link: "",
    },
    // {
    //     id:6,
    //     name: "Google Book Search",
    //     picture: booksearch,
    //     description:"Application that allows the user to search for new books and have a list of books on their wish list to purchase",
    //     link: "https://github.com/psurer/book-search-engine-MERN"
    // },
    {
        // id:4,
        // name: "",
        // picture: , 
        // description: "",
        // link: "",
    },
    {
        // id:5,
         // name: "",
        // picture: , 
        // description: "",
        // link: "",
    },
];

export default function App() {
  return(
    <Router>
        <div>
            <Header/>
            <Route exact path='/' component={About}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/portfolio'>
            <Portfolio projects={projects}/>
            </Route>
            <Route exact path='/contact'>
            <Contact />
            </Route>
            <Route exact path='/React-Portfolio/' component={About}></Route>
            <Footer/>
        </div>
    </Router>   
)
}



