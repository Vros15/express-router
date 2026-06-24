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

//Import lodash
const _ = require("lodash");



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
const sort = (data, sortByProperty,sortOrder) => {

    //sort data
    const sortedData = _.sortBy(data,sortByProperty)

    //sortOrder - asc
    //sortOder - desc
    if(sortOrder === "desc"){
        sortedData.reverse();
    }
    return sortedData;


}

// 8a. Handle GET requests to /films
router.get("/", (req,res) => {
    //req.query.sortBy
    const sortedFilms = sort(films, req.query.sortBy, req.query.sortOrder)
    res.json(sortedFilms);
    
});



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
router.put("/:id", (req, res) => {
    const foundFilm = films.find((film) => film.id === req.params.id);

    if(foundFilm === undefined){
        res.status(404).json({
            message: "Failure",
            payload: "Film not Found"
        });
    }
    else{
        const updatedFilm = {
            name: req.body.name || foundFilm.name,
            boxOffice: req.body.boxOffice || foundFilm.boxOffice}

        //Prevents user from updating ID, copy over only necessary data from the request body into new object
        Object.assign(foundFilm, updatedFilm);

        res.json({
            message: "success",
            payload: foundFilm,
        })
    }

})



// 11. Handle DELETE requests to /films/[id]


router.delete("/:id", (req, res) => {
  const filmToDelete = films.find((film) => {
    return film.id === req.params.id;
  });

  if (filmToDelete) {
    const results = films.filter((film) => film.id !== filmToDelete.id);
    films = results;
    res.json({ message: `${filmToDelete.name} successfully deleted!`});

  } else {
    res.status(404).json({ message: "Film not found" });
  }
});



// 8b. Export the router

module.exports =  router;