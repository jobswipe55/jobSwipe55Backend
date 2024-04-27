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

//
export const addNewPlayer = async (req, res) => {
    let newPlayer = new Player(req.body);

    //The save method is a part of Mongoose's model instance methods. It's used
    //to insert a new document into the MongoDB database or update an existing
    //one
    try {
        //Both send and json are methods of the response object (res) in Express.
        //json method is similar to res.send but explicitly sets the content
        //type to application/json.
        const savedPlayer = await newPlayer.save();
        res.status(201).json(savedPlayer);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

