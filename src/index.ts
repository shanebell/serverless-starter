import { initApp } from "./app";
import { exec } from "child_process";

const app = initApp();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  const message = `Application is listening on port ${PORT}`;
  console.info(message);
  const cmd = `osascript -e "display notification \\"${message}\\" with title \\"Express Server\\" sound name \\"Morse\\""`;
  exec(cmd);
});
