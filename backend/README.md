# Portfolio Backend - Email Service

This backend server handles contact form submissions from the portfolio website.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the backend directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=5000
```

### 3. Gmail App Password Setup
To use Gmail for sending emails, you need to:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in the `EMAIL_PASS` variable

### 4. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### POST /api/send-email
Sends contact form submissions via email.

**Request Body:**
```json
{
  "from_name": "John Doe",
  "from_email": "john@example.com",
  "subject": "Project Collaboration",
  "message": "Hello, I'd like to discuss a project...",
  "to_email": "bilal@example.com"
}
```

**Response:**
```json
{
  "message": "Email sent successfully"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

## Frontend Integration

The frontend will automatically send requests to `http://localhost:5000/api/send-email` when the contact form is submitted. 