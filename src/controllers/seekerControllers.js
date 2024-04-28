/**
 * File Name: seekerControllers.js
 * Description: intermediary between the seekerModel (data) and the view
 *              (presentation)
 * Author: mathteixeira55
 * Date: March 29, 2024
 * Version: 1.0.0
 * License: MIT License
 * Copyright:
 * Contact Information: 
 */

// ### Imports ###
// --- library to connect with Mongo DB
import { Seeker } from "../models/seekerModel";
// ### end Imports ###

// --- CREATE
export const addNewSeeker = async (req, res) => {
  let newSeeker = new Seeker(req.body);

  try {
      //The save method is a part of Mongoose's model instance methods. It's used
      //to insert a new document into the MongoDB database or update an existing
      //one
      //Both send and json are methods of the response object (res) in Express.
      //json method is similar to res.send but explicitly sets the content
      //type to application/json.
      const savedSeeker = await newSeeker.save();
      res.status(201).json(savedSeeker);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

// --- READ
export const getSeekers = async (req, res) => {
      //The find method is a part of Mongoose's model instance methods. It's used
      //to insert a new document into the MongoDB database or update an existing
      //one
      //Both send and json are methods of the response object (res) in Express.
      //json method is similar to res.send but explicitly sets the content
      //type to application/json.
      try {
          // The find method returns a Promise which resolves to the array of documents
          // matching the query. Since there's no specific query object provided to find(),
          // it will retrieve all seekers.
          const seekersList = await Seeker.find();
          res.json(seekersList); // Sends the list of seekers as a JSON response.
        } catch (error) {
            res.status(500).json({ error: error.message }); // Handles any errors that occur during the query.
        }
      // This approach is not supported by mongoose anymore. find cannot accept
      // callback functions. It is now using await
      // Seeker.find({}, (err, seekersList) =>{
      //   if(err){
      //     res.send(error);
      //   }
      //   res.json(seekersList);

      // });
}

export const getSeekerByID = async (req, res) => {
  try {
    // The findById method is a part of Mongoose's model instance methods. It's used
    // to find a document by its _id field, which is typically passed as a parameter in the request.
    const seeker = await Seeker.findById(req.params.seekerID);

    if (!seeker) {
      // If no seeker is found, send a 404 Not Found response.
      // This ensures that the client receives a clear indication that the requested resource doesn't exist.
      return res.status(404).json({ message: "Seeker not found" });
    }

    // Sends the seeker data as a JSON response.
    // The json method is similar to res.send but explicitly sets the content
    // type to application/json.
    res.json(seeker);
  } catch (error) {
    // Handles any errors that occur during the query.
    // This catch block catches exceptions that might occur during database access or if the findById operation fails.
    res.status(500).json({ error: error.message });
  }
}

// --- UPDATE
export const putSeekerByID = async (req, res) => {
  try {
    // findOneAndUpdate is used here to find a seeker document by _id and update
    // it. The {new: true} option in the parameters makes sure that the method
    // returns the modified document rather than the original.
    const seeker = await Seeker.findOneAndUpdate(
      {_id: req.params.seekerID},  // Query to find the document by _id
      req.body,                   // The update to be applied, taken from the request body
      {new: true}                 // Options: returns the updated document
    );

    if (!seeker) {
      // If findOneAndUpdate doesn't find any seeker, it returns null, and thus,
      // a 404 Not Found response is sent.
      return res.status(404).json({ message: "Seeker not found" });
    }

    // Sends the updated seeker data as a JSON response.
    res.json(seeker);
  } catch (error) {
    // If an error occurs during the database operation, send a 500 Internal
    // Server Error
    // response with the error message.
    res.status(500).json({ error: error.message });
  }
}

// --- DELETE
// --- DELETE
export const deleteSeekerByID = async (req, res) => {
  try {
    // The findByIdAndRemove method is used to find a seeker by its _id and remove it from the database.
    // This method returns the document, as it was before deletion, if it is found and deleted successfully.
    const seeker = await Seeker.findByIdAndDelete(req.params.seekerID);

    if (!seeker) {
      // If no seeker is found and deleted, send a 404 Not Found response.
      // This ensures that the client receives a clear indication that the requested resource doesn't exist.
      return res.status(404).json({ message: "Seeker not found" });
    }

    // Sends a response indicating successful deletion.
    // The json method sets the content type to application/json and sends the deleted seeker's data as confirmation.
    res.json({ message: "Seeker successfully deleted", seeker: seeker });
  } catch (error) {
    // Handles any errors that occur during the query.
    // This catch block catches exceptions that might occur during database access or if the findByIdAndRemove operation fails.
    res.status(500).json({ error: error.message });
  }
}
