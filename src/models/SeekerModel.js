/**
 * File Name: seekerModel.js
 * Description: Create the schema and model for MondoDB for a Seeker
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
import { EducationSchema } from "./auxiliarySchemas/EducationSchema";
import { SkillSchema } from "./auxiliarySchemas/SkillSchema";
import { PersonalInfoSchema } from "./auxiliarySchemas/PersonalInfoSchema";
// ### end Imports ###

// ### functions ###
const skillsLimit = val => val.length >= 3 && val.length <= 5;
// ### end Functions

//Create the schema
/**
 * @swagger
 * components:
 *   schemas:
 *     Seeker:
 *       type: object
 *       required:
 *         - personalInfo
 *       properties:
 *         personalInfo:
 *           $ref: '#/components/schemas/PersonalInfo'
 *           description: Personal details of the seeker.
 *         primarySkills:
 *           type: object
 *           properties:
 *             technicalSkills:
 *               type: array
 *               description: A list of primary technical skills with optional years of experience.
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 *             transferableSkills:
 *               type: array
 *               description: A list of primary transferable skills with optional years of experience.
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 *         secondarySkills:
 *           type: object
 *           properties:
 *             technicalSkills:
 *               type: array
 *               description: Additional technical skills not considered primary.
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 *             transferableSkills:
 *               type: array
 *               description: Additional transferable skills not considered primary.
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 *         education:
 *           type: array
 *           description: Educational background of the seeker.
 *           items:
 *             $ref: '#/components/schemas/Education'
 *         created_date:
 *           type: string
 *           format: date-time
 *           description: The date and time when the seeker record was created.
 *       example:
 *         personalInfo:
 *           firstName: "Clark"
 *           middleName: "Joseph"
 *           lastName: "Kent"
 *           email: "clark.kent@example.com"
 *           phone: 1234567890
 *           street: "344 Clinton Street, Apartment 3D"
 *           city: "Metropolis"
 *           province: "New York"
 *           postalCode: "12345"
 *           country: "United States"
 *         primarySkills:
 *           technicalSkills:
 *             - skillName: "Investigative Research"
 *               proficiencyLevel: "Expert"
 *               yearsOfExperience: 89
 *             - skillName: "News Writing"
 *               proficiencyLevel: "Advanced"
 *               yearsOfExperience: 55
 *             - skillName: "Editing and Proofreading"
 *               proficiencyLevel: "Expert"
 *               yearsOfExperience: 34
 *           transferableSkills:
 *             - skillName: "Empathy"
 *               proficiencyLevel: "Advanced"
 *               yearsOfExperience: 21
 *             - skillName: "Communication"
 *               proficiencyLevel: "Advanced"
 *               yearsOfExperience: 13
 *             - skillName: "Team Leadership"
 *               proficiencyLevel: "Expert"
 *               yearsOfExperience: 8
 *         secondarySkills:
 *           technicalSkills:
 *             - skillName: "Video Production"
 *               proficiencyLevel: "Intermediate"
 *               yearsOfExperience: 5
 *             - skillName: "Photojournalism"
 *               proficiencyLevel: "Intermediate"
 *               yearsOfExperience: 3
 *             - skillName: "Data Analysis"
 *               proficiencyLevel: "Advanced"
 *               yearsOfExperience: 2
 *           transferableSkills:
 *             - skillName: "Time Management"
 *               proficiencyLevel: "Intermediate"
 *               yearsOfExperience: 1
 *             - skillName: "Networking"
 *               proficiencyLevel: "Intermediate"
 *               yearsOfExperience: 1
 *             - skillName: "Curiosity"
 *               proficiencyLevel: "Beginner"
 *               yearsOfExperience: 0
 *         education:
 *           - levelOfEducation: "Bachelor's Degree"
 *             institution: "University of Kansas"
 *             location: "Lawrence"
 *             gpa: 3.8
 *             gpaScale: 4.0
 *             expectedDuration: 4
 *             startYear: 1989
 *             endYear: 1993
 *             technicalSkills:
 *               - skillName: "Investigative Research"
 *                 proficiencyLevel: "Expert"
 *                 yearsOfExperience: 4
 *               - skillName: "News Writing"
 *                 proficiencyLevel: "Advanced"
 *                 yearsOfExperience: 4
 *               - skillName: "Editing and Proofreading"
 *                 proficiencyLevel: "Expert"
 *                 yearsOfExperience: 4
 *             transferableSkills:
 *               - skillName: "Empathy"
 *                 proficiencyLevel: "Advanced"
 *                 yearsOfExperience: 4
 *               - skillName: "Communication"
 *                 proficiencyLevel: "Advanced"
 *                 yearsOfExperience: 4
 *               - skillName: "Team Leadership"
 *                 proficiencyLevel: "Expert"
 *                 yearsOfExperience: 4
 *         created_date: "2024-04-27T12:00:00Z"
 */

const SeekerSchema = new mongoose.Schema({
    personalInfo: {
        type: PersonalInfoSchema,
        required: true
    },
    primarySkills: {
        technicalSkills: {
            type: [SkillSchema],
            validate: [skillsLimit, '{PATH} must have between 3 and 5 entries']
        },
        transferableSkills: {
            type: [SkillSchema],
            validate: [skillsLimit, '{PATH} must have between 3 and 5 entries']
        }
    },
    secondarySkills: {
        technicalSkills: {
            type: [SkillSchema],
            validate: [skillsLimit, '{PATH} must have between 3 and 5 entries']
        },
        transferableSkills: {
            type: [SkillSchema],
            validate: [skillsLimit, '{PATH} must have between 3 and 5 entries']
        }
    },
    education: [EducationSchema],
    created_date: {
        type: Date,
        default: Date.now,
        description: "When was this entry created? Automatically generated."
    }
});

export const Seeker = mongoose.model('Seeker', SeekerSchema, 'seekers');
