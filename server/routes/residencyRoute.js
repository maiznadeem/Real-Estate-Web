import express from 'express'

import { createResidency, getAllResidencies } from '../controllers/residencyController.js'

const router = express.Router()

router.post("/create", createResidency)
router.get("/getall", getAllResidencies)

export { router as residencyRoute }