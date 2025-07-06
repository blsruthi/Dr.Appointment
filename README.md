# 🏥 Dr. Appointment – Healthcare Appointment & Report Portal

A full-stack web application for managing doctor appointments, uploading/viewing health reports, and tracking appointment status with real-time updates. Built with **React**, **Firebase**, and **Node.js/Express**.

---

## 🚀 Features

### 👩‍⚕️ Doctor & Patient Modules
- View available doctors with filters (location, specialization, availability)
- Schedule appointments
- Track appointment status in real-time (Scheduled → In Progress → Completed)

### 📄 Health Reports
- Upload medical reports (PDFs/images)
- View and delete uploaded reports
- Display report metadata in modals
- Search by patient name

### 📍 Track Appointment
- Visual step tracker for appointment progress
- Real-time updates via Firestore
- Game-style map path view

### 🛡️ Authentication
- Firebase Email/Password and Google sign-in
- Secure login/logout flow
- Admin login for appointment status updates

---

## 🧰 Tech Stack

| Layer        | Technology                             |
|--------------|-----------------------------------------|
| Frontend     | React.js, Tailwind CSS, Firebase Auth   |
| Backend      | Node.js, Express.js                     |
| Database     | Firebase Firestore                      |
| File Storage | Uploadcare                              |
| Hosting      | GitHub Pages / Firebase Hosting (TBD)   |
| Auth         | Firebase Authentication (Email & Google)|

---

## 📂 Project Structure

Dr.Appointment/
├── Backend/ # Express backend (optional Firebase functions)
│ ├── db/ # MongoDB or Firebase config
│ └── index.js # Main server entry
├── Frontend/ # React frontend
│ ├── public/
│ └── src/
├── .gitignore
├── README.md
└── package.json

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/blsruthi/Dr.Appointment.git
cd Dr.Appointment
2.Set Up the Frontend

cd Frontend
npm install
npm start
3. Set Up the Backend (Optional if Firebase Functions)

cd ../Backend
npm install
node index.js
🔐 Environment Setup
Create a .env file in the root and add:


REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_UPLOADCARE_PUBLIC_KEY=your_uploadcare_key

🛡️ Security Notes
✅ serviceAccount.json is excluded via .gitignore

🔐 API keys and credentials are handled using .env

📈 Future Enhancements
✅ Deploy on Firebase/Render

✅ Add email notifications via Firebase Functions

✅ Admin dashboard for managing doctors & appointments

✅ Unit tests with Jest
🙋‍♀️ Author
Lakshmi Sruthi
📧 blsruthi@gmail.com
🔗 GitHub Profile

