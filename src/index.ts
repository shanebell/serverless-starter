import { initApp } from "./app";

const app = initApp();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}...`);
});
