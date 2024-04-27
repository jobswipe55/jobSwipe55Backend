/**
 * File Name: soccerRoutes.js
 * Description: routes the endpoints
 * Author: mathteixeira55
 * Date: March 29, 2024
 * Version: 1.0.0
 * License: MIT License
 * Copyright:
 * Contact Information: 
 */

// ### Imports ###
import { addNewPlayer, getPlayers, getPlayerByID, putPlayerByID, deletePlayerByID }
    from "../controllers/playerControllers";
// ### end Imports ###

const routes = (app) => {
    // ### API for Player ###
    app.route('/players')
    // --- POST endpiont (CREATE)
    /**
     * @swagger
     * /players:
     *   post:
     *     summary: Create a new player.
     *     tags: [Player]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Player'
     *     responses:
     *       201:
     *         description: The created player.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Player'
     *       500:
     *         description: Internal server error.
     */
    .post(addNewPlayer)
    
    // --- GET endpiont (READ)
    /**
     * @swagger
     * /players:
     *   get:
     *     summary: get the list of all players.
     *     tags: [Player]
     *     responses:
     *       201:
     *         description: List of players.
     *       500:
     *         description: Internal server error.
     */
    .get(getPlayers);

//New route: the ":playerID" is a param that will be included in the request
//to be used by the getPlayerByID function.
app.route('/players/:playerID')
    // --- GET endpoint (READ)
    /**
     * @swagger
     * /players/{playerID}:
     *   get:
     *     summary: Find a player given a specific ID.
     *     tags: [Player]
     *     parameters:
     *       - in: path
     *         name: playerID
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the player to retrieve
     *     responses:
     *       200:
     *         description: A player corresponding to the ID.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Player'
     *       404:
     *         description: Player not found.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Player not found"
     *       500:
     *         description: Internal server error.
     */
    .get(getPlayerByID)

    // --- PUT endpiont (UPDATE)
    /**
     * @swagger
     * /players/{playerID}:
     *   put:
     *     summary: Update a player's details given a specific ID.
     *     tags: [Player]
     *     parameters:
     *       - in: path
     *         name: playerID
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the player to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Player'
     *     responses:
     *       200:
     *         description: Returns the updated player data.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Player'
     *       404:
     *         description: Player not found.
     *       500:
     *         description: Internal server error due to an error during the update process.
     */
    .put(putPlayerByID)

    // --- DELETE endpiont (DELETE)
    /**
     * @swagger
     * /players/{playerID}:
     *   delete:
     *     summary: Delete a player given a specific ID.
     *     tags: [Player]
     *     parameters:
     *       - in: path
     *         name: playerID
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the player to delete
     *     responses:
     *       200:
     *         description: Player successfully deleted.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Player successfully deleted"
     *                 player:
     *                   $ref: '#/components/schemas/Player'
     *       404:
     *         description: Player not found.
     *       500:
     *         description: Internal server error due to an error during the delete process.
     */
    .delete(deletePlayerByID)
    ;

}
// ### end API for Player ###

//export the routes function to be used on the index.js file.
//because I am using the default keyword, when importing we won't need to use
//curly braces { }
export default routes;