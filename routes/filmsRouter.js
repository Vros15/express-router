/*
    6. Import express & uuid, set up router
*/

const express = require("express");
const router = express.Router();
// Can generate a unique ID upon server startup

//Versions 1 and 6 (date–time and MAC address)
// Version 2 (date–time and MAC address, DCE security version)
// Versions 3 and 5 (namespace name-based)
// Version 4 (random)
// Version 7 (timestamp and random)
// Version 8 (custom)
const uuid  = require("uuid").v4;




// 7. Create an array of your favorite films using uuid() for unique ID's
let films =[
    {
        id: uuid(),
        name: "Guardians of the Galaxy",
        boxOffice: 300,
    },
    {
        id: uuid(),
        name: "Dr. Strange & the Multiverse of Madness",
        boxOffice: 75,
    },
     {
        id: uuid(),
        name: "Thor",
        boxOffice: 55,
    },
    {
        id: uuid(),
        name: "When You Finish Saving The World",
        boxOffice: 2,
    },

]



// 12. Create sort method for the films


// 8a. Handle GET requests to /films
router.get("/", (req,res) => {

    res.json({
        message: "Success", 
        payload: film
    });

    module.exports = router;

})



// 9. Handle POST requests to /films
router.post("/", (req,res) => {


    //Grabs Post information from PostMan from raw body JSON
    const newFilm = {
        id: uuid(),
        name: req.body.name,
        boxOffice: req.body.boxOffice,
    };
    
    //push new fil to current array
    films.push(newFilm);

    //Shows data is updated
    res.json({
        message: "Success",
        payload: films
    });

})

// 10. Handle PUT requests to /films/[id]



// 11. Handle DELETE requests to /films/[id]



// 8b. Export the router

module.exports =  router;