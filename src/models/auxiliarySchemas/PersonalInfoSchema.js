import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     PersonalInfo:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the seeker.
 *         middleName:
 *           type: string
 *           description: The middle name of the seeker, optional.
 *         lastName:
 *           type: string
 *           description: The last name of the seeker.
 *         email:
 *           type: string
 *           description: The email address of the seeker.
 *         phone:
 *           type: number
 *           format: integer
 *           description: The phone number of the seeker, optional.
 *         street:
 *           type: string
 *           description: The street address of the seeker, optional.
 *         city:
 *           type: string
 *           description: The city where the seeker resides, optional.
 *         province:
 *           type: string
 *           description: The province where the seeker resides, optional.
 *         postalCode:
 *           type: string
 *           description: The postal code of the seeker's address, optional.
 *         country:
 *           type: string
 *           description: The country of the seeker's residence, optional.
 *       example:
 *         firstName: "Clark"
 *         middleName: "Joseph"
 *         lastName: "Kent"
 *         email: "clark.kent@example.com"
 *         phone: 1234567890
 *         street: "344 Clinton Street, Apartment 3D"
 *         city: "Metropolis"
 *         province: "New York"
 *         postalCode: "12345"
 *         country: "United States"
 */
export const PersonalInfoSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        description: "The first name of the seeker"
    },
    middleName: {
        type: String,
        description: "The middle name of the seeker"
    },
    lastName: {
        type: String,
        required: true,
        description: "The last name of the seeker"
    },
    email: {
        type: String,
        required: true,
        description: "The email address of the seeker"
    },
    phone: {
        type: Number,
        description: "The phone number of the seeker"
    },
    street: {
        type: String,
        description: "The street address of the seeker"
    },
    city: {
        type: String,
        description: "The city address of the seeker"
    },
    province: {
        type: String,
        description: "The province address of the seeker"
    },
    postalCode: {
        type: String,
        description: "The postal code address of the seeker"
    },
    country: {
        type: String,
        description: "The country address of the seeker"
    }
}, { _id: false });  // `_id: false` is optional depending on whether you want MongoDB to assign an ID to this subdocument
