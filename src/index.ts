import "dotenv/config";
import 'module-alias/register';

const packageJS = require("../package.json");

import { PORT } from "./env";
import app from "./app";


app.listen(PORT, () => {
    console.log(`${packageJS.name} is listening in port ${PORT}`);
});