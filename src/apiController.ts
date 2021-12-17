import { handleAsync } from "./middleware";
import { v4 as uuidv4 } from "uuid";
import { Request, Response, Router } from "express";
import userRepository from "./userRepository";
import usersRepository, { User } from "./userRepository";

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

apiController.post(
  "/users",
  handleAsync(async (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const user: User = {
      id: uuidv4(),
      firstName,
      lastName,
    };
    await userRepository.save(user);
    res.json(user);
  })
);

apiController.get(
  "/users",
  handleAsync(async (req: Request, res: Response) => {
    const users: User[] = await usersRepository.list();
    res.send(users);
  })
);

apiController.get(
  "/users/:id",
  handleAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user: User | undefined = await usersRepository.get(id);
    user ? res.send(user) : res.status(404);
  })
);

export default apiController;
