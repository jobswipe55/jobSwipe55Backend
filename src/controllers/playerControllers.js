/**
 * File Name: playerControllers.js
 * Description: intermediary between the playerModel (data) and the view
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
import { Player } from "../models/playerModel";
// ### end Imports ###

// --- CREATE
export const addNewPlayer = async (req, res) => {
  let newPlayer = new Player(req.body);

  try {
      //The save method is a part of Mongoose's model instance methods. It's used
      //to insert a new document into the MongoDB database or update an existing
      //one
      //Both send and json are methods of the response object (res) in Express.
      //json method is similar to res.send but explicitly sets the content
      //type to application/json.
      const savedPlayer = await newPlayer.save();
      res.status(201).json(savedPlayer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

// --- READ
export const getPlayers = async (req, res) => {
      //The find method is a part of Mongoose's model instance methods. It's used
      //to insert a new document into the MongoDB database or update an existing
      //one
      //Both send and json are methods of the response object (res) in Express.
      //json method is similar to res.send but explicitly sets the content
      //type to application/json.
      try {
          // The find method returns a Promise which resolves to the array of documents
          // matching the query. Since there's no specific query object provided to find(),
          // it will retrieve all players.
          const playersList = await Player.find();
          res.json(playersList); // Sends the list of players as a JSON response.
        } catch (error) {
            res.status(500).json({ error: error.message }); // Handles any errors that occur during the query.
        }
      // This approach is not supported by mongoose anymore. find cannot accept
      // callback functions. It is now using await
      // Player.find({}, (err, playersList) =>{
      //   if(err){
      //     res.send(error);
      //   }
      //   res.json(playersList);

      // });
}

export const getPlayerByID = async (req, res) => {
  try {
    // The findById method is a part of Mongoose's model instance methods. It's used
    // to find a document by its _id field, which is typically passed as a parameter in the request.
    const player = await Player.findById(req.params.playerID);

    if (!player) {
      // If no player is found, send a 404 Not Found response.
      // This ensures that the client receives a clear indication that the requested resource doesn't exist.
      return res.status(404).json({ message: "Player not found" });
    }

    // Sends the player data as a JSON response.
    // The json method is similar to res.send but explicitly sets the content
    // type to application/json.
    res.json(player);
  } catch (error) {
    // Handles any errors that occur during the query.
    // This catch block catches exceptions that might occur during database access or if the findById operation fails.
    res.status(500).json({ error: error.message });
  }
}

// --- UPDATE
export const putPlayerByID = async (req, res) => {
  try {
    // findOneAndUpdate is used here to find a player document by _id and update
    // it. The {new: true} option in the parameters makes sure that the method
    // returns the modified document rather than the original.
    const player = await Player.findOneAndUpdate(
      {_id: req.params.playerID},  // Query to find the document by _id
      req.body,                   // The update to be applied, taken from the request body
      {new: true}                 // Options: returns the updated document
    );

    if (!player) {
      // If findOneAndUpdate doesn't find any player, it returns null, and thus,
      // a 404 Not Found response is sent.
      return res.status(404).json({ message: "Player not found" });
    }

    // Sends the updated player data as a JSON response.
    res.json(player);
  } catch (error) {
    // If an error occurs during the database operation, send a 500 Internal
    // Server Error
    // response with the error message.
    res.status(500).json({ error: error.message });
  }
}

// --- DELETE
// --- DELETE
export const deletePlayerByID = async (req, res) => {
  try {
    // The findByIdAndRemove method is used to find a player by its _id and remove it from the database.
    // This method returns the document, as it was before deletion, if it is found and deleted successfully.
    const player = await Player.findByIdAndDelete(req.params.playerID);

    if (!player) {
      // If no player is found and deleted, send a 404 Not Found response.
      // This ensures that the client receives a clear indication that the requested resource doesn't exist.
      return res.status(404).json({ message: "Player not found" });
    }

    // Sends a response indicating successful deletion.
    // The json method sets the content type to application/json and sends the deleted player's data as confirmation.
    res.json({ message: "Player successfully deleted", player: player });
  } catch (error) {
    // Handles any errors that occur during the query.
    // This catch block catches exceptions that might occur during database access or if the findByIdAndRemove operation fails.
    res.status(500).json({ error: error.message });
  }
}
