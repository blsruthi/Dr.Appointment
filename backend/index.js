const express = require("express");
const multer = require("multer");
const cors = require("cors");
const admin = require("firebase-admin");
const path = require("path");
const app = express();

const serviceAccount = require("./serviceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

app.post("/upload", upload.single("file"), async (req, res) => {
  const { patientName, reportType, reportDescription, uid } = req.body;
  const fileUrl = `http://localhost:3000/uploads/${req.file.filename}`;

  try {
    await db.collection("reports").add({
      patientName,
      reportType,
      reportDescription,
      fileUrl,
      uid,
      timestamp: new Date()
    });
    res.status(200).json({ message: "Uploaded successfully", fileUrl });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
