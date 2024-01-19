// const asyncHandler = require("express-async-handler");

const Theater = require("../models/theater.models")
const Movie = require("../models/movie.models")
const Showtime = require("../models/showTime.models")


// theater.controller.js
exports.getAllTheaters = async (req, res) => {
    try {
      const theaters = await Theater.find({ city: req.query.city })
      res.json(theaters);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.createTheater = async(req,res)=>{
    try{
        const name = req.body.name
        const city = req.body.city
        if(!name || !city){
            res.status(400).json({error : "All fields are mandatory!"})
        }else{
            const newTheater = await Theater.create({
                name,
                city
            })
            console.log(newTheater); // Log the created theater
      res.status(200).json({ message: "Theater added successfully" });
    }
  } catch (error) {
    console.error("Error creating theater:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.addShow = async(req,res)=>{ 
    try{
        const name = req.body.name
        const city = req.body.city
        if(!name || !city){
            res.status(400).json({error : "All fields are mandatory!"})
        }else{
            const newTheater = await Theater.create({
                name,
                city
            })
            
      res.status(200).json({ message: "Theater added successfully" });
    }
  } catch (error) {
    console.error("Error creating theater:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
  exports.getDatesForTheater = async (req, res) => {
    // Implementation for retrieving dates for a theater
  };
  
  exports.getMoviesForTheaterOnDate = async (req, res) => {
    // Implementation for retrieving movies for a theater on a specific date
  };


  
