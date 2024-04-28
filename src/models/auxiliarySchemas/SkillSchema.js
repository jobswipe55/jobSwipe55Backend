import mongoose from 'mongoose';

/**
 * @swagger
 * components:
 *   schemas:
 *     Skill:
 *       type: object
 *       required:
 *         - skillName
 *       properties:
 *         skillName:
 *           type: string
 *           description: The name of the skill.
 *         proficiencyLevel:
 *           type: string
 *           enum:
 *             - Beginner
 *             - Intermediate
 *             - Advanced
 *             - Expert
 *           description: The proficiency level of the skill. Defines the expertise level of the individual in this particular skill.
 *         yearsOfExperience:
 *           type: number
 *           description: The number of years the individual has practiced or used the skill. This is an optional field but provides valuable insight into the depth of experience.
 *         certified:
 *           type: boolean
 *           default: false
 *           description: Indicates whether the individual has any official certification for this skill. This can be an important factor for certain professional fields.
 *       example:
 *         skillName: "Software Development"
 *         proficiencyLevel: "Advanced"
 *         yearsOfExperience: 5
 *         certified: true
 */
export const SkillSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true,
        description: "The name of the skill."
    },
    proficiencyLevel: {
        type: String,
        required: true,
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        description: "The proficiency level of the skill."
    },
    yearsOfExperience: {
        type: Number,
        required: true,
        description: "The number of years the individual has practiced or used the skill."
    },
    certified: {
        type: Boolean,
        required: false,
        default: false,
        description: "Whether the individual has any official certification for this skill."
    }
}, { _id: false });
