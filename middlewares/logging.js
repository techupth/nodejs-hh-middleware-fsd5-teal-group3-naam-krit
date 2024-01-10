import fs from "fs/promises";

const logging = async (req, res, next) => {
  try {
    const text = `\nIP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`;
    await fs.appendFile("logs.txt", text);
  } catch {
    await fs.appendFile(
      "logs.txt",
      `\nLogging Erroe on IP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`
    );
  }
  next();
};

export default logging;
