const express =require("express");
const{
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} =require("../controllers/hotelController.js");
const Hotel=require( "../models/hotelModel.js");
const { verifyAdmin } = require ("../middleware/authMiddleware.js");
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// router.put("/availability/:id",  updateRoomAvailability);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports= router;
