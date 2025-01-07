🌟 Niche Nest Job Portal

Welcome to Niche Nest Job Portal! 🚀

A powerful and intuitive job portal built with the MERN stack (MongoDB, Express, React, Node.js), designed to bridge the gap between job seekers and employers with modern features and a user-friendly interface.

---

## 📋 Features  

### For Job Seekers  
- **Job Search by Niche Skills**: Easily find jobs tailored to your expertise and preferences.  
- **Profile Management**: Securely update your profile details and manage your applications.  
- **Job Applications**: Apply for job listings directly through the portal.  

### For Employers  
- **Job Posting System**: Create, update, and manage job listings effortlessly.  
- **Application Management**: Review and manage applications submitted by job seekers.  

### Additional Features  
- **Automated Email Newsletters**: Job seekers receive timely updates on new postings through Node Cron.  
- **Secure Authentication**: User authentication with JWT and bcrypt ensures privacy and data protection.  
- **State Management**: Redux and Redux Toolkit are used to streamline and manage the application's state.  
- **Responsive Design**: Optimized for a seamless experience across all devices.  

---

## 🛠️ Tech Stack  

**Frontend**: React, Redux, Redux Toolkit  
**Backend**: Node.js, Express.js  
**Database**: MongoDB Atlas  
**Deployment**:  
- Frontend: Netlify  
- Backend: Render  
**Automation**: Node Cron  

---

## 🚀 Live Links  

- **Frontend**: [Niche Nest Job Portal Frontend](https://niche-nest-job-portal.netlify.app)  
- **Backend**: [Niche Nest Job Portal Backend](https://dashboard.render.com/web/srv-ct5apetds78s73bmrcb0)  

---

## 💾 Installation  

To run the Niche Nest Job Portal locally, follow these steps:  

### Step 1: Clone the Repository  

```bash  
git clone https://github.com/yuvraj6299/MERN-NICHE-NEST-PORTAL.git
cd Niche-Nest  
```  

### Step 2: Set Up the Backend  

```bash  
# Navigate to the backend directory  
cd backend  

# Install backend dependencies  
npm install  

# Set up environment variables in a `.env` file  
# Example .env file:  
PORT=4001  

MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/dbname  

FRONTEND_URL=http://localhost:5173  

JWT_SECRET_KEY=your_jwt_secret_key  
JWT_EXPIRE=7d  
COOKIE_EXPIRE=7  

CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_SECRET=your_cloudinary_api_secret  
CLOUDINARY_API_KEY=your_cloudinary_api_key  

SMTP_SERVICE=gmail  
SMTP_MAIL=your_email@gmail.com  
SMTP_PASSWORD=your_smtp_password  
SMTP_HOST=smtp.gmail.com  
SMTP_PORT=465  
 

# Start the backend server  
npm run dev  
```  

### Step 3: Set Up the Frontend  

```bash  
# Navigate to the frontend directory  
cd frontend  

# Install frontend dependencies  
npm install  

# Start the frontend development server  
npm run dev 
```  

### Step 4: Run the Application  

- Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/) to access the application.  

---

## 🤝 Contributing  

We welcome contributions to the **Niche Nest Job Portal**! To contribute:  

1. Fork this repository.  
2. Create a new branch for your feature or bug fix.  
3. Commit your changes and submit a pull request.  
4. Ensure your contributions align with our Code of Conduct.  

## 👩‍💻 Happy Coding! 👨‍💻  

If you have any questions, issues, or feedback, feel free to create an issue. We'd love to hear from you! 🙌  


