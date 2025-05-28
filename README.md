# Employee Feedback Portal

A full-stack application that allows employees to submit anonymous feedback and administrators to manage and review the feedback.

## Tech Stack

- Frontend: React.js with functional components and hooks
- Backend: Node.js with Express.js
- Database: MongoDB
- UI : Using Css

## Project Structure

```
├── Frontend/               # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── utils/        # Utility functions
│   └── public/           # Static files
│
└── Backend/              # Node.js backend application
    ├── src/
    │   ├── controllers/  # Route controllers
    │   ├── models/      # Database models
    │   ├── routes/      # API routes
    │   └── config/      # Configuration files
    └── tests/           # Test files
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/feedback-portal
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

### Feedback Management
- `POST /api/feedback` - Submit new feedback
- `GET /api/feedback` - Get all feedback
- `GET /api/feedback?category=xyz` - Filter feedback by category
- `PATCH /api/feedback/:id/reviewed` - Mark feedback as reviewed
- `DELETE /api/feedback/:id` - Delete feedback

## Features

### Employee Side
- Anonymous feedback submission
- Category selection
- Feedback text input

### Admin Side
- View all feedback in a table format
- Filter feedback by category
- Mark feedback as reviewed
- Delete feedback
- View submission timestamps

## Assumptions

1. No authentication required for feedback submission
2. Admin access is handled through a simple admin route
3. Feedback is stored with timestamps in UTC
4. Categories are predefined and cannot be modified by users

## Completed Features
- [x] Basic project structure
- [x] API endpoints implementation
- [x] Database schema design
- [x] Frontend components structure
- [x] Basic styling with Material-UI

## Pending Features
- [ ] Unit tests
- [ ] Error handling improvements
- [ ] Loading states
- [ ] Advanced filtering options
- [ ] Pagination for feedback list 