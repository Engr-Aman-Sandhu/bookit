import Room from '../../../models/room';
import ErrorHandler from 'utils/errorHandler';

const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const newRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
};

const getSingleRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      // res.status(404).json({
      //   success: false,
      //   error: 'Room  not found with this ID',
      // });

      return next(new ErrorHandler('Room not found with this ID', 404));
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
};

const updateRoom = async (req, res, next) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      // res.status(404).json({
      //   success: false,
      //   error: 'Room not found with this ID',
      // });
      return next(new ErrorHandler('Room not found with this ID', 404));
    }
    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
};

const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      // res.status(404).json({
      //   success: false,
      //   error: 'Room not found with this ID',
      // });
      return next(new ErrorHandler('Room not found with this ID', 404));
    }

    await room.remove();

    res.status(200).json({
      success: true,
      message: 'Room deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
};

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
