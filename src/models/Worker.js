import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PayPeriod = {
  PerHour: "per hour",
  PerDay: "per day",
  Annual: "annual",
};

const WorkerSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  wage: {
    type: { amount: Number, period: String },
    required: true,
  },
});

const Worker = mongoose.model("Worker", WorkerSchema);

export default Worker;
