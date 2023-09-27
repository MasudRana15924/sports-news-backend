const mongoose = require("mongoose");

const sportsSchema = mongoose.Schema({
  title: {
    type: String,
    // required: true,
    trim: true,
  },
  description: {
    type: String,
    // required: true,
  },
  // thumbnail: [
  //   {
  //     public_id: {
  //       type: String,
  //       // required: true,
  //     },
  //     url: {
  //       type: String,
  //       // required: true,
  //     },
  //   },
  // ],
  thumbnail: {
    public_id: String,
    url: String
  },
  category: {
    type: String,
    // required: true,
  },

  views: {
    type: Number,
    default: 1,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true,
      },
      name: {
        type: String,
        // required: true,
      },
      rating: {
        type: Number,
        // required: true,
      },
      comment: {
        type: String,
        // required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Sports", sportsSchema);