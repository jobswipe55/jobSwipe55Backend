/**
 * File Name: playerModel.js
 * Description: Create the schema and model for MondoDB for a Player
 * Author: mathteixeira55
 * Date: March 29, 2024
 * Version: 1.0.0
 * License: MIT License
 * Copyright:
 * Contact Information: 
 */

// ### Imports ###
// --- library for documentation purposes
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
// --- library to connect with Mongo DB
import mongoose from "mongoose";
// ### end Imports ###

//Create the schema
/**
 * @swagger
 * components:
 *   schemas:
 *     Player:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the player
 *         lastName:
 *           type: string
 *           description: The last name of the player
 *         email:
 *           type: string
 *           description: The last name of the player
 *         phone:
 *           type: number
 *           description: The phone number of the player
 *         isCoach:
 *           type: bolean
 *           description: is this player a coach?
 *         team:
 *           type: string
 *           description: team where this player plays
 *         speed:
 *           type: Number
 *           description: How fast is the player? Level 1, 2, or 3?
 *         strength:
 *           type: Number
 *           description: How strong is the player? Level 1, 2, or 3?
 *         edurance:
 *           type: Number
 *           description: How resistent is the player? Level 1, 2, or 3?
 *         ability:
 *           type: Number
 *           description: How good is the player? Level 1, 2, or 3?
 *         techniques:
 *           type: Number
 *           description: How good is the player? Level 1, 2, or 3?
 *         tactical:
 *           type: Number
 *           description: How good is the player? Level 1, 2, or 3?
 *         created_date:
 *           type: Date
 *           description: When was this entry created? Automatically generated.
 *       example:
 *         firstName: Ramiro
 *         lastName: Clay
 *         email: RClay@vasco.com
 *         phone: 1232343456
 *         isCoach: true
 *         team: vasco
 *         speed: 3
 *         strength: 3
 *         edurance: 3
 *         ability: 3
 *         techniques: 3
 *         tactical: 3
 */
const PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: Number, //for simplicity you can define the type only
    isCoach: {
        type: Boolean,
        default: false
    },
    team: String, //for simplicity you can define the type only
    speed: {
        type: Number,
        enum: [1, 2, 3] // limit to these 3 options
    },
    strength: {
        type: Number,
        enum: [1, 2, 3] // limit to these 3 options
    },
    endurance: {
        type: Number,
        enum: [1, 2, 3] // limit to these 3 options
    },
    ability: {
        type: Number,
        enum: [1, 2, 3] // limit to these 3 options
    },
    techniques: {
        type: Number,
        enum: [1, 2, 3] // limit to these 3 options
    },
    tactical: {
        type: Number,
        enum: [1, 2, 3] // limit to these 3 options
    },
    created_date:{
        type: Date,
        default: Date.now //JavaScript command.
    }
})

export const Player = mongoose.model('Player', PlayerSchema);