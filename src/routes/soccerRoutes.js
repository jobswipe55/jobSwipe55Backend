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
import { addNewPlayer } from "../controllers/playerControllers";
// ### end Imports ###

const routes = (app) => {
    // ### API for Player ###
    // --- POST endpiont
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
    app.route('/players')
        .post(addNewPlayer);
}

//export the routes function to be used on the index.js file.
//because I am using the default keyword, when importing we won't need to use
//curly braces { }
export default routes;