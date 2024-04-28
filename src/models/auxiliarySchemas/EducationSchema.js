/**
 * File Name: EducationSchema.js
 * Description: Create the schema for education entries
 * Author: mathteixeira55
 * Date: March 29, 2024
 * Version: 1.0.0
 * License: MIT License
 * Copyright:
 * Contact Information: 
 */

// ### Imports ###
// --- library to connect with Mongo DB
import mongoose from "mongoose";
import { SkillSchema } from "./SkillSchema";
// ### end Imports ###
/**
 * @swagger
 * components:
 *   schemas:
 *     Education:
 *       type: object
 *       required:
 *         - levelOfEducation
 *         - institution
 *         - location
 *         - expectedDuration
 *         - startYear
 *         - endYear
 *       properties:
 *         levelOfEducation:
 *           type: string
 *           description: The highest level of education attained or being pursued by the seeker.
 *         institution:
 *           type: string
 *           description: The name of the educational institution.
 *         location:
 *           type: string
 *           description: The location of the educational institution.
 *         gpa:
 *           type: number
 *           description: The grade point average at the educational institution, if applicable.
 *         gpaScale:
 *           type: number
 *           description: The scale on which the GPA is measured. Required if GPA is provided.
 *         expectedDuration:
 *           type: number
 *           description: The expected duration in years to complete the education.
 *         startYear:
 *           type: number
 *           description: The year the seeker started the educational program.
 *         endYear:
 *           type: number
 *           description: The year the seeker completed or is expected to complete the educational program.
 *         technicalSkills:
 *           type: array
 *           description: A list of technical skills gained during education.
 *           items:
 *             $ref: '#/components/schemas/Skill'
 *         transferableSkills:
 *           type: array
 *           description: A list of transferable skills gained during education.
 *           items:
 *             $ref: '#/components/schemas/Skill'
 *       example:
 *         levelOfEducation: "Master's Degree"
 *         institution: "University of Example"
 *         location: "Example City, Ex"
 *         gpa: 3.7
 *         gpaScale: 4.0
 *         expectedDuration: 2
 *         startYear: 2022
 *         endYear: 2024
 *         technicalSkills:
 *           - skillName: "Statistical Analysis"
 *             proficiencyLevel: "Expert"
 *             yearsOfExperience: 4
 *             certified: true
 *         transferableSkills:
 *           - skillName: "Project Management"
 *             proficiencyLevel: "Advanced"
 *             yearsOfExperience: 3
 *             certified: false
 */
export const EducationSchema = new mongoose.Schema({
    levelOfEducation: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String, required: true },
    gpa: { type: Number, required: false },
    gpaScale: { 
        type: Number, 
        required: function() { return this.gpa != null; } // Only required if gpa is provided
    },
    expectedDuration: { type: Number, required: true },
    startYear: { type: Number, required: true },
    endYear: { type: Number, required: true },
    technicalSkills: [SkillSchema],
    transferableSkills: [SkillSchema]
}, { _id: false });
