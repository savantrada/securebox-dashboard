import mongoose from "mongoose";

const ConfigSchema = new mongoose.Schema({});

export default mongoose.model("Config", ConfigSchema);
