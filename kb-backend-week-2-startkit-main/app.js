const http = require("http");
const {mainRouteController,defaultRouteController,voteRouteController,gameRouteController} = require ("./controllers");

const PORT = process.env.PORT || 3005;

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            res.statusCode = 200
            mainRouteController (res, "/index.html", ".html");
            break
        case "/game":
            gameRouteController (res);
            break
        case "/vote":
            voteRouteController(req,res)
            break
          
          default:
            defaultRouteController (res, url);
          
    }
  });

  server.listen(PORT, () => {
    console.log('Server is listening on port ${PORT} , complete!'); 
});