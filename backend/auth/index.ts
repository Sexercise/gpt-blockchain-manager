import express from "express";
import cors from "cors";
const helmet = require("helmet");

import supertokens from "supertokens-node";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import {
  middleware,
  errorHandler,
  SessionRequest,
} from "supertokens-node/framework/express";
import { getWebsiteDomain, SuperTokensConfig } from "./config";

import { executeCommand } from "./callBlockchainGPT";
import bodyParser from "body-parser";


supertokens.init(SuperTokensConfig);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: getWebsiteDomain(),
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(
  helmet({
      contentSecurityPolicy: false,
  })
);
// This exposes all the APIs from SuperTokens to the client.
app.use(middleware());

// sessionIno API requires session verification
app.get("/sessioninfo", verifySession(), async (req: Sess