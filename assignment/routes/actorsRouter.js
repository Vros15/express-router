const express = require("express");
const router = express.Router();
const uuid = require("uuid").v4;
const _ = require("lodash");

let actors = require("../data/actor-data");

const sort = (data, sortByProperty, sortOrder) => {
  const sortedData = _.sortBy(data, sortByProperty);

  if (sortOrder === "desc") {
    sortedData.reverse();
  }

  return sortedData;
};

// Read
router.get("/", (req, res) => {
  const sortBy = req.query.sortBy || "";
  const sortOrder = req.query.sortOrder || "asc";
  const sortedActors = sort(actors,sortBy,sortOrder)
  res.json(sortedActors);
});

// Read by ID
router.get("/:id", (req, res) => {
  // req.params
  const foundActor = actors.find((actor) => {
    return actor.id === req.params.id;
  });

  if (foundActor) {
    res.json(foundActor);
  } else {
    res.status(404).json({ message: "404 - Actor Not Found" });
  }
});

// Create
router.post("/", (req, res) => {
  const newActor = {
    id: uuid(),
    name: req.body.name,
    age: req.body.age,
  };

  actors.push(newActor);
  res.json(newActor);
});

// Update
router.put("/:id", (req, res) => {
  //req.params.id
  const foundActor = actors.find((actor) => {
    return actor.id === req.params.id;
  });
  if (foundActor) {
    const updatedActorData = {
      name: req.body.name || foundActor.name,
      age: req.body.age || foundActor.age,
    };

    Object.assign(foundActor, updatedActorData);
    res.json(foundActor);
  } else {
    res.status(404).json({ message: "404 - Actor Not Found" });
  }
});

// Delete
router.delete("/:id", (req, res) => {
  const actorToDelete = actors.find((actor) => {
    return req.params.id === actor.id;
  });

  if (actorToDelete) {
    const results = actors.filter((actor) => {
      return actorToDelete.id !== actor.id;
    });
    actors = results;
    res.json({ message: `${actorToDelete.name} successfully removed.` });
  } else {
    res.status(404).json({ message: "404 - Actor Not Found" });
  }
});

module.exports = router;
