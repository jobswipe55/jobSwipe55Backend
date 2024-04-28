/**
 * File Name: jobSwipe55Routes.js
 * Description: routes the endpoints
 * Author: mathteixeira55
 * Date: March 29, 2024
 * Version: 1.0.0
 * License: MIT License
 * Copyright:
 * Contact Information: 
 */

// ### Imports ###
import { addNewSeeker, getSeekers, getSeekerByID, putSeekerByID, deleteSeekerByID }
    from "../controllers/seekerControllers";
// ### end Imports ###

const routes = (app) => {
    // ### API for Seeker ###
    app.route('/seekers')
    // --- POST endpiont (CREATE)
    /**
     * @swagger
     * /seekers:
     *   post:
     *     summary: Create a new seeker.
     *     tags: [Seeker]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Seeker'
     *     responses:
     *       201:
     *         description: The created seeker.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Seeker'
     *       500:
     *         description: Internal server error.
     */
    .post(addNewSeeker)
    
    // --- GET endpiont (READ)
    /**
     * @swagger
     * /seekers:
     *   get:
     *     summary: get the list of all seekers.
     *     tags: [Seeker]
     *     responses:
     *       201:
     *         description: List of seekers.
     *       500:
     *         description: Internal server error.
     */
    .get(getSeekers);

//New route: the ":seekerID" is a param that will be included in the request
//to be used by the getSeekerByID function.
app.route('/seekers/:seekerID')
    // --- GET endpoint (READ)
    /**
     * @swagger
     * /seekers/{seekerID}:
     *   get:
     *     summary: Find a seeker given a specific ID.
     *     tags: [Seeker]
     *     parameters:
     *       - in: path
     *         name: seekerID
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the seeker to retrieve
     *     responses:
     *       200:
     *         description: A seeker corresponding to the ID.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Seeker'
     *       404:
     *         description: Seeker not found.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Seeker not found"
     *       500:
     *         description: Internal server error.
     */
    .get(getSeekerByID)

    // --- PUT endpiont (UPDATE)
    /**
     * @swagger
     * /seekers/{seekerID}:
     *   put:
     *     summary: Update a seeker's details given a specific ID.
     *     tags: [Seeker]
     *     parameters:
     *       - in: path
     *         name: seekerID
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the seeker to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Seeker'
     *     responses:
     *       200:
     *         description: Returns the updated seeker data.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Seeker'
     *       404:
     *         description: Seeker not found.
     *       500:
     *         description: Internal server error due to an error during the update process.
     */
    .put(putSeekerByID)

    // --- DELETE endpiont (DELETE)
    /**
     * @swagger
     * /seekers/{seekerID}:
     *   delete:
     *     summary: Delete a seeker given a specific ID.
     *     tags: [Seeker]
     *     parameters:
     *       - in: path
     *         name: seekerID
     *         required: true
     *         schema:
     *           type: string
     *         description: The ID of the seeker to delete
     *     responses:
     *       200:
     *         description: Seeker successfully deleted.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: "Seeker successfully deleted"
     *                 seeker:
     *                   $ref: '#/components/schemas/Seeker'
     *       404:
     *         description: Seeker not found.
     *       500:
     *         description: Internal server error due to an error during the delete process.
     */
    .delete(deleteSeekerByID)
    ;

}
// ### end API for Seeker ###

//export the routes function to be used on the index.js file.
//because I am using the default keyword, when importing we won't need to use
//curly braces { }
export default routes;