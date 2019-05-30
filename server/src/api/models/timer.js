import mongoose from "mongoose";

const TimerSchema = mongoose.Schema({
  totalTime: {
    type: String,
  },
  metadata: {
    type: Object,
  },
  time: {
    type: String,
  },
  trace: {
    type: [String],
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Timer", TimerSchema);
