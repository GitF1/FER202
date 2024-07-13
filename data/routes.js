const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("hotel.json"); // Adjust the path to your JSON data file

// Add custom routes using the rewriter middleware
server.use(
  jsonServer.rewriter({
    "/hotel/rooms": "/rooms", // Map /hotel/rooms to the rooms resource
  })
);

server.use(router);

server.listen(4000, () => {
  console.log("JSON Server is running");
});
