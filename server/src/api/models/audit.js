import mongoose from "mongoose";

const AuditSchema = mongoose.Schema({
  audit: {
    type: Object,
  },
  metadata: {
    type: Object,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Audit", AuditSchema);
