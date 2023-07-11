const express = require("express");
const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} = require("../controllers/roomController.js");
const Room = require("../models/roomModel.js");
const { verifyAdmin } = require("../middleware/authMiddleware.js");
const { updateRoomAvailability } = require("../controllers/hotelController.js");
const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/find/:id", getRoom);
//GET ALL

router.get("/", getRooms);


module.exports = router;
