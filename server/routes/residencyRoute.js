import express from 'express'

import { createResidency, getAllResidencies, getResidencyByID } from '../controllers/residencyController.js'

const router = express.Router()

router.post("/create", createResidency)
router.get("/getall", getAllResidencies)
router.get("/:id", getResidencyByID)

export { router as residencyRoute }