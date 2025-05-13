// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// const { v4: uuidv4 } = require("uuid");
// const path = require("path");
// require("dotenv").config();

// const s3 = new S3Client({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   },
// });

// const uploadFileToS3 = async (fileBuffer, fileName, mimetype, folder = "uploads") => {
//   const extension = path.extname(fileName);
//   const key = `${folder}/${uuidv4()}${extension}`;

//   const command = new PutObjectCommand({
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: key,
//     Body: fileBuffer,
//     ContentType: mimetype,
//   });

//   await s3.send(command);

//   // Return the S3 file URL
//   return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
// };

// module.exports = { uploadFileToS3 };
