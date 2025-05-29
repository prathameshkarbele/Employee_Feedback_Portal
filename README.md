# Employee Feedback Portal

A simple web app where employees can give anonymous feedback and admins can manage it.

## How to Run the App

### Backend Setup
1. Go to Backend folder
2. Run `npm install`
3. Create `.env` file with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/feedback-portal
   ```
4. Run `npm start`

### Frontend Setup
1. Go to Frontend folder
2. Run `npm install`
3. Create `.env` file with:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Run `npm start`

## Environment Files

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/feedback-portal
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

Note: Environment files (.env) are included in the repository and not added to .gitignore for demonstration purposes.

## API Structure

- `POST /api/feedback` - Add new feedback
- `GET /api/feedback` - Get all feedback
- `GET /api/feedback?category=xyz` - Get feedback by category
- `PATCH /api/feedback/:id/reviewed` - Mark feedback as reviewed
- `DELETE /api/feedback/:id` - Remove feedback

## Assumptions

1. No login needed to submit feedback
2. Admin access through simple admin page
3. Feedback times are in UTC
4. Categories are fixed and can't be changed

## What's Done and What's Not

### Done
- Basic app structure
- API endpoints
- Database setup
- Frontend pages
- Basic styling

### Not Done
- Tests
- Better error handling
- Loading screens
- More filter options
- Page numbers for feedback list 