const {mongoose} = require('./../database/mongoose');

//DEFINING SCHEMA AND CREATING MODEL OF IT
var note = new mongoose.Schema({
  owners:  [ {type: mongoose.Schema.Types.ObjectId} ],
  editors: [ {type: mongoose.Schema.Types.ObjectId} ],
  public: {type: Boolean, default: false},
  title: { type: String, trim: true},
  content: { type: String, trim: true },
  keywords: [{ type: String, trim: true }],
  categories: [{ type: String, trim: true }],
  created: {type: Date, default: Date.now}
});

var Note = mongoose.model('Note', note);

module.exports = {Note};
