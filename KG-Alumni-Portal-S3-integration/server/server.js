require("dotenv").config();

const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const express = require('express');
const cors = require('cors');
const { saveToDynamoDB,
        getFromDynamoDB ,
        getItemByKeyFromDynamoDB  } = require('./dynamoUtils');


const app = express();
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up Multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // upload to 'uploads/' folder
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = Date.now() + '-' + file.originalname;
//     cb(null, uniqueName);
//   }
// });

// const upload = multer({ storage });


// AWS Config from .env
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const s3 = new AWS.S3();

// // S3 upload config
// const upload = multer({
//   storage: multerS3({
//     s3,
//     bucket: process.env.AWS_S3_BUCKET_NAME,
//     acl: "public-read",
//     metadata: (req, file, cb) => {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: (req, file, cb) => {
//       const fileName = Date.now() + '-' + file.originalname;
//       cb(null, fileName);
//     },
//   }),
// });

// 🧠 Middleware
app.use(cors());
app.use(express.json()); // <-- Important: Parses JSON body
app.use(express.urlencoded({ extended: true })); // Optional: parses form data


function generate15CharAlphanumeric() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 15; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const randomString = generate15CharAlphanumeric();




app.post("/api/postJob", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      description,
      salary,
      job_type,
      jobPostedBy
    } = req.body;

    if (!title || !company || !location || !description) {
      return res.status(400).json({ 
        message: "Missing required fields",
        required: ["title", "company", "location", "description"]
      });
    }

    const uniqueJobId = generate15CharAlphanumeric(); 

    const jobData = {
      userId: uniqueJobId, 
      jobPostedBy,
      title,
      company,
      location,
      description,
      salary,
      job_type,
      createdAt: new Date().toISOString(),
    };

    await saveToDynamoDB(jobData, "jobs");

    res.status(200).json({ 
      message: "Job posted successfully",
      jobId: uniqueJobId
    });
  } catch (err) {
    console.error("Job post failed:", err);
    res.status(500).json({ 
      message: "Failed to post job",
      error: err.message,
      details: err.stack
    });
  }
});


app.get("/api/getAllJobs", async (req, res) => {
  try {
    const jobs = await getFromDynamoDB("jobs");
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Failed to fetch jobs:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});



app.post("/api/postIntern", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      description,
      intern_type,
      internPostedBy
    } = req.body;

    const uniqueJobId = generate15CharAlphanumeric(); 

    await saveToDynamoDB({
      userId: uniqueJobId, 
      internPostedBy,
      title,
      company,
      location,
      description,
      intern_type,
      createdAt: new Date().toISOString(),
    }, "internShip");

    console.log(process.env)

    res.status(200).json({ message: "intership posted successfully" });
  } catch (err) {
    console.error("intern post failed:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

app.get("/api/getAllIntern", async (req, res) => {
  try {
    const intern = await getFromDynamoDB("internShip");
    res.status(200).json(intern);
  } catch (err) {
    console.error("Failed to fetch internList:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

app.get("/api/getAllEvents", async (req, res) => {
  try {
    console.log("Fetching events from DynamoDB...");
    const events = await getFromDynamoDB("event");
    console.log("Events fetched successfully:", events);
    res.status(200).json(events);
  } catch (err) {
    console.error("Failed to fetch events:", err);
    res.status(500).json({ 
      message: "Failed to fetch events", 
      error: err.message,
      details: err.stack 
    });
  }
});

app.post("/api/addAlumni", async (req, res) => {
  try {
    const {
      name,
      roll_no,
      batch,
      role,
      company_name,
      location,
      linkedin_link,
      contact_no
    } = req.body;

    const uniqueJobId = generate15CharAlphanumeric(); 

    await saveToDynamoDB({
      userId: uniqueJobId, 
      name,
      roll_no,
      batch,
      role,
      company_name,
      location,
      linkedin_link,
      contact_no,
      createdAt: new Date().toISOString(),
    }, "alumni");

    console.log(process.env)

    res.status(200).json({ message: "posted successfully" });
  } catch (err) {
    console.error("post failed:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});


app.post("/api/addStudent", async (req, res) => {
  try {
    const {
      name,
      roll_no,
      cgpa,
      standing_arrear,
      hostory_arrear,
      attendance
    } = req.body;

    const uniqueJobId = generate15CharAlphanumeric(); 

    await saveToDynamoDB({
      userId: uniqueJobId,
      name,
      roll_no,
      cgpa,
      standing_arrear,
      hostory_arrear,
      attendance,
      createdAt: new Date().toISOString(),
    }, "student");

    console.log(process.env)

    res.status(200).json({ message: "posted successfully" });
  } catch (err) {
    console.error("post failed:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});


// app.post("/api/addUpcommingEvent", async (req, res) => {
//   try {
//     const {
//       dOC_S3_link,
//       venue,
//       event_date,
//       alumni_name
//     } = req.body;

//     const uniqueJobId = generate15CharAlphanumeric(); 

//     await saveToDynamoDB({
//       userId: uniqueJobId,
//       dOC_S3_link,
//       venue,
//       event_date,
//       alumni_name,
//       createdAt: new Date().toISOString(),
//     }, "event");

//     console.log(process.env)

//     res.status(200).json({ message: "posted successfully" });
//   } catch (err) {
//     console.error("post failed:", err);
//     res.status(500).json({ message: "Internal Server Error", error: err.message });
//   }
// });

// app.post("/api/addUpcommingEvent", upload.single('eventImage'), async (req, res) => {
//   try {
//     const {
//       eventVenue,
//       eventDate,
//       eventAlumni,
//     } = req.body;

//     const imageUrl = req.file 
//       ? `http://localhost:5000/uploads/${req.file.filename}` 
//       : "https://alumni12131415.s3.ap-south-1.amazonaws.com/alumniEventPages/Event.jpg";

//     const uniqueId = generate15CharAlphanumeric();

//     const eventData = {
//       userId: uniqueId,
//       venue: eventVenue,
//       event_date: eventDate,
//       alumni_name: eventAlumni,
//       dOC_S3_link: imageUrl,
//       createdAt: new Date().toISOString(),
//     };

//     await saveToDynamoDB(eventData, "event");

//     res.status(200).json(eventData);
//   } catch (err) {
//     console.error("Event post failed:", err);
//     res.status(500).json({ message: "Failed to post event", error: err.message });
//   }
// });

// app.post("/api/addUpcommingEvent", upload.single("eventImage"), async (req, res) => {
//   try {
//     const { eventVenue, eventDate, eventAlumni } = req.body;

//     const imageUrl = req.file
//       ? req.file.location
//       : "https://alumni12131415.s3.ap-south-1.amazonaws.com/alumniEventPages/Event.jpg";

//     const uniqueId = generate15CharAlphanumeric();

//     const eventData = {
//       userId: uniqueId,
//       venue: eventVenue,
//       event_date: eventDate,
//       alumni_name: eventAlumni,
//       dOC_S3_link: imageUrl,
//       createdAt: new Date().toISOString(),
//     };

//     await saveToDynamoDB(eventData, "event");

//     res.status(200).json(eventData);
//   } catch (err) {
//     console.error("Event post failed:", err);
//     res.status(500).json({ message: "Failed to post event", error: err.message });
//   }
// });
// Helper function to upload file to S3
// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'temp-uploads');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Helper function to generate unique ID
function generate15CharAlphanumeric() {
  return uuidv4().replace(/-/g, '').substring(0, 15);
}

async function uploadFileToS3(file) {
  const fileContent = fs.readFileSync(file.path);
  
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `alumniEventPages/${Date.now()}-${file.originalname}`,
    Body: fileContent,
    ContentType: file.mimetype
  };
  
  try {
    const uploadResult = await s3.upload(params).promise();
    
    // Delete temp file after successful upload
    fs.unlinkSync(file.path);
    
    return uploadResult.Location;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw error;
  }
}
app.post("/api/addUpcommingEvent", upload.single('eventImage'), async (req, res) => {
  try {
    const {
      eventVenue,
      eventDate,
      eventAlumni,
    } = req.body;

    let imageUrl = "https://alumni12131415.s3.ap-south-1.amazonaws.com/alumniEventPages/Event.jpg"; // Default image
    
    // Upload image to S3 if provided
    if (req.file) {
      imageUrl = await uploadFileToS3(req.file);
    }

    const uniqueId = generate15CharAlphanumeric();

    const eventData = {
      userId: uniqueId,
      venue: eventVenue,
      event_date: eventDate,
      alumni_name: eventAlumni,
      dOC_S3_link: imageUrl,
      createdAt: new Date().toISOString(),
    };

    await saveToDynamoDB(eventData, "event");

    res.status(200).json(eventData);
  } catch (err) {
    console.error("Event post failed:", err);
    res.status(500).json({ message: "Failed to post event", error: err.message });
  }
});

app.post("/api/addConference", async (req, res) => {
  try {
    const {
      S3_links,
      venue,
      event_date,
      alumni_name
    } = req.body;

    const uniqueJobId = generate15CharAlphanumeric(); 

    await saveToDynamoDB({
      userId: uniqueJobId,
      S3_links,
      venue,
      event_date,
      alumni_name,
      createdAt: new Date().toISOString(),
    }, "conference");

    console.log(process.env)

    res.status(200).json({ message: "posted successfully" });
  } catch (err) {
    console.error("post failed:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

app.get("/api/getAllalumni", async (req, res) => {
  try {
    const jobs = await getFromDynamoDB("alumni");
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Failed to fetch:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

app.get("/api/getAllStudent", async (req, res) => {
  try {
    const jobs = await getFromDynamoDB("student");
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Failed to fetch:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});




app.listen(5000, () => console.log('Server running on port 5000'));
