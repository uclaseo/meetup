import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, 'Title needs 5 characters']
  },
  description: {
    type: String,
    require: true,
    minLength: [10, 'Description needs 10 characters']
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupSchema);
