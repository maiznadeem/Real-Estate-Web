import express from 'express'

import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavourites, manageFavourites } from '../controllers/userController.js'

const router = express.Router()

router.post("/register", createUser)
router.post("/bookvisit/:id", bookVisit)
router.post("/getallbookings", getAllBookings)
router.post("/cancelbooking/:id", cancelBooking)
router.post("/managefavourites/:id", manageFavourites)
router.post("/getallfavourites", getAllFavourites)

export { router as userRoute }