const express = require("express");
const app = express();
const config = require("./config.json")

app.use(require("./api/v1/private/apiAdminPanelKeys"))
app.use(require("./api/v1/public/apiGetFiles"))

app.listen(config.server.port)