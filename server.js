import { create, router as _router, defaults } from "json-server";
const server = create();
const router = _router("Data/db.json"); // Adjust path as needed
const middlewares = defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001; // Define the port you want to use

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
