// s3.js
import AWS from 'aws-sdk';

// Configure the AWS SDK with your credentials
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION
});

const s3 = new AWS.S3();

//Function used to upload images to an AWS S3 bucket
export async function uploadToS3(file) {
  const fileName = `${Date.now()}-${file.name}`;
  const params = {
    Bucket: 'cared4-assets',
    Key: fileName,
    ContentType: file.type,
    Body: file,
    ACL: 'public-read', // Add this line to set the ACL to 'public-read'
  };

  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        console.error("Upload Error: ", err);
        reject(err);
      } else {
        console.log("Upload Data: ", data);
        const imageUrl = `https://${params.Bucket}.s3-${AWS.config.region}.amazonaws.com/${params.Key}`;
        resolve({ ...data, Location: imageUrl});
      }
    });
  });
}