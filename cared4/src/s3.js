// s3.js
import AWS from 'aws-sdk';

// Configure the AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'AKIA4BI3PUVO2VGM6Y6L',
  secretAccessKey: 'ni74NT0L8Ff8CphDrjyM2vbR+7U3/fWwJtsJ+j6V',
  region: 'us-west-1'
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
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

//Function used to get the url of the image inside of the bucket
export function getPresignedUrl(key, expiration = 60) {
    const params = {
      Bucket: 'cared4-assets',
      Key: key,
      Expires: expiration, // URL expiration time in seconds
    };
  
    return s3.getSignedUrl('getObject', params);
}

//Function to get the specific image
export async function listImages() {
    const params = {
      Bucket: 'cared4-assets'
    };
  
    return new Promise((resolve, reject) => {
      s3.listObjectsV2(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
}  