import { handleAsync } from "./middleware";
import { Request, Response, Router } from "express";

const apiController = Router();

apiController.get(
  "/list",
  handleAsync(async (req: Request, res: Response) => {
    console.info("Sending JSON response");
    res.json([
      { id: 1, value: "ABC" },
      { id: 2, value: "DEF" },
      { id: 3, value: "GHI" },
    ]);
  })
);

export default apiController;
