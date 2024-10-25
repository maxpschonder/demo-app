import express, { Express, Request, Response } from "express";
import express_prom_bundle from "express-prom-bundle";
import os from "os";

const app: Express = express();
const port = process.env.PORT || 3000;
const metricsMiddleware = express_prom_bundle({ includeMethod: true });

app.use(metricsMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send(`Demo App served by: ${os.hostname()}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
