const sportsModel = require("../models/SportsModel");
exports.createSports = async (req, res, next) => {
    const sports = await sportsModel.create(req.body);
    res.status(201).json({
        success: true,
        sports,
    });
};
exports.getallSports = async (req, res, next) => {
    const sports = await sportsModel.find().sort({ createdAt: -1 });
    res.status(201).json({
        success: true,
        sports,
    });
};
// Get Single Sports Detail
exports.getSportsDetails = async (req, res, next) => {
    const sport = await sportsModel.findById(req.params.id);
    sport.views += 1;
    await sport.save()
    res.status(200).json({
        success: true,
        sport,
    });
};

