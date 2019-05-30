import mongoose from "mongoose";

const TracerSchema = mongoose.Schema({
  trace: {
    type: [String],
  },
  time: {
    type: String,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Tracer", TracerSchema);
