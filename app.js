// ...импорты и настройки
const http = require("http");
const staticFile = require("./appModules/http-utils/static-file");

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;
        case "/game":
            gameRouteController(res);
            break;
        default:
            defaultRouteController(res, url);
    }
});