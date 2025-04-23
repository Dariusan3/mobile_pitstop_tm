# Mobile PitStop TM Website

This repository contains the frontend and backend code for the Mobile PitStop TM website.

## Project Structure

- `frontend/`: React application for the website
- `backend/`: Express server for handling email functionality

## Email Functionality Setup

The contact form on the website sends emails to dariusosadici@gmail.com when users submit the form.

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure email credentials:
   - Edit the `.env` file in the backend directory
   - Replace `your_email@gmail.com` with your Gmail address
   - Replace `your_app_password` with your Gmail app password
   - If you have 2FA enabled on your Google account, you'll need to create an app password at https://myaccount.google.com/apppasswords

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## How It Works

1. When a user fills out the contact form and clicks "Send Message", the form data is sent to the backend API.
2. The backend uses Nodemailer to send an email to dariusosadici@gmail.com with the form details.
3. The user receives a success message when the email is sent successfully.

## Troubleshooting

If emails are not being sent:

1. Check that the backend server is running
2. Verify your email credentials in the `.env` file
3. Make sure your Gmail account allows less secure apps or that you're using an app password
4. Check the backend console for any error messages