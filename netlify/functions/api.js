import express, { Router } from 'express';
import serverless from 'serverless-http';

const api = express();
const router = Router();

router.get("/hello", (req, res) => res.send("Hello World!"));
router.get("/blumpkie", (req, res) => res.send("Aaron give me blumpkieeeeeee"));
router.get("/cara", (req, res) => res.send("Cara get a job you fucking kitchen goblin"));

api.use("/api/", router);

export const handler = serverless(api);