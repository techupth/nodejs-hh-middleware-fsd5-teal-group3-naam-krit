import fs from "fs/promises";

async function logging(req, res, next) {
  try {
    await fs.appendFile(
      "logs.txt",
      `\nIP: ${req.ip},Method ${req.method},Endpoint ${req.originalUrl}`
    );
    console.log("Logs Saved!");
  } catch {
    await fs.appendFile(
      "logs.txt",
      `\nLogging Error on IP: ${req.ip},Method ${req.method},Endpoint ${req.originalUrl}`
    );
  }
  next();
}

export default logging;
