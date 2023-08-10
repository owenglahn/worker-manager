import Worker from "../models/Worker";

// @Desc Provides an array of all workers in the database
// @Route /workers
// @Method GET
export const getWorkers = asyncHandler(async (_, response) => {
  const workers = await Worker.find({});
  response.status(200).json({
    workers,
  });
});
