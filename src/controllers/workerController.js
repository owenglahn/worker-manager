import Worker from "../models/Worker.js";
import asyncHandler from "express-async-handler";

// @Desc Provides an array of all workers in the database
// @Route /workers
// @Method GET
export const getWorkers = asyncHandler(async (_, response) => {
  const workers = await Worker.find({});
  response.status(200).json({
    workers,
  });
});

// @Desc
// @Route /workers
// @Method POST
export const addWorker = asyncHandler(async (request, response) => {
  const { name, position, wage } = request.body;
  const worker = new Worker({ name, position, wage });
  await worker.save();
  response.status(201).json({
    worker,
  });
});
