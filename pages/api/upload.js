import express from "express";
import connectDB from "@/database/connectDB";
import upload from "@/middlewares/uploadMiddleware";
import File from "@/models/file";

const app = express();

export const config = {
  api: {
    bodyParser: false,
  },
};

app.post("/api/upload", upload.single("file"), async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const file = new File({ name: originalname, path });
    await file.save();
    res.status(200).json({ message: "Datei erfolgreich hochgeladen" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler beim Hochladen der Datei" });
  }
});

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Error to connect mongoDB");
  }
})();

export default app;
