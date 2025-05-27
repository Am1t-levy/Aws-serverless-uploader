# AWS Serverless Uploader 🚀

A lightweight, serverless project that allows users to upload images and videos through a static website hosted on AWS – all within the Free Tier.

## 🌐 Overview

This project was built while preparing for the **AWS Solutions Architect – Associate** certification. The goal was to connect multiple AWS services into a working flow using only the Free Tier.

Users can upload files through a static frontend hosted on **S3**, with the request going through **CloudFront**, passed via **API Gateway** to an **AWS Lambda** function that handles uploading the files to an **S3 bucket**.

## ⚙️ Architecture & Services Used

- **Amazon S3** – Hosting the static site and storing uploaded files.
- **CloudFront** – Distributing the site content and caching.
- **API Gateway** – Creating a REST endpoint to trigger Lambda.
- **AWS Lambda** – Backend logic for receiving and uploading the file.
- **Python & JavaScript** – Language for backend and frontend logic.

## 🧩 How It Works

1. The static frontend (HTML/JS) is hosted on an S3 bucket.
2. When a user selects a file, it is sent to an API Gateway endpoint.
3. API Gateway triggers a Lambda function.
4. Lambda uploads the file to another S3 bucket and returns a response.

## 🛠️ Deployment Guide

### Prerequisites

- AWS CLI configured
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- Git

### 1. Frontend Setup

Upload the contents of the `frontend/` folder (e.g., `index.html`, `app.js`, `style.css`) to an S3 bucket configured for static website hosting.  
Make sure the bucket policy allows public read access if testing publicly.

### 2. Backend Setup

Upload the contents of the `backend/` folder to a new AWS Lambda function.  
Make sure the function:
- Is set to `Node.js 18.x` or similar runtime.
- Has permissions to write to your S3 bucket.
- Uses the provided `index.js` to handle file uploads.

Connect the Lambda function to an API Gateway endpoint:
- Set the method to `POST`.
- Enable **binary media types** like `image/*` and `video/*` in API Gateway settings.
- Deploy the API and copy the Invoke URL.

🔁 Don't forget to update the frontend's `app.js` with your new API Gateway URL.


![צילום מסך 2025-04-26 221156](https://github.com/user-attachments/assets/4595d80c-aa61-47cc-9079-ede70af813d2)



