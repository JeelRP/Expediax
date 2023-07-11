const Room = require("../models/roomModel");
const Hotel = require("../models/hotelModel");
const createError = require("../middleware/errorMiddleware");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      try {
        await Hotel.findByIdAndDelete(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (error) {
        next(error);
      }
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
const getRooms = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const rooms = await Room.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

module.exports = { createRoom, updateRoom, deleteRoom, getRoom, getRooms };
