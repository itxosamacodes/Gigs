Here's a comprehensive README for your GitHub repo:

---

# Gigs - Job Portal Mobile App

A full-featured job portal mobile application built with React Native to connect candidates with recruiters. This is a practice project to learn React Native and modern mobile development.

## 🚀 Features

### Authentication & Security
- Email and password authentication
- Google Sign-In integration
- OTP verification for account confirmation
- Password reset with email OTP
- Role-based access (Candidate/Recruiter)
- Email notifications for security alerts

### For Candidates
- Browse and search job listings
- Filter jobs by various criteria
- One-click job applications
- Profile management with resume upload
- Track application status
- Save jobs for later

### For Recruiters
- Post new job opportunities
- Manage and edit job postings
- Delete job listings
- View received applications
- Track applicant details
- Centralized recruitment dashboard

### Additional Features
- Intuitive navigation with drawer sidebar
- Help & Support section
- Terms & Policies
- Responsive UI/UX design

## 🛠️ Tech Stack

- **Frontend:** React Native, Expo
- **Languages:** TypeScript, JavaScript
- **Backend:** Supabase
- **Database:** SQL (Supabase)
- **Authentication:** Supabase Auth, Google OAuth

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Supabase account

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/gigs.git
cd gigs
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables

Create a `.env` file in the root directory:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
GOOGLE_CLIENT_ID=your_google_client_id
```

4. Start the development server
```bash
npx expo start
```

5. Run on your device
- Scan the QR code with Expo Go app (Android/iOS)
- Press `a` for Android emulator
- Press `i` for iOS simulator

## 📱 Screens

### Authentication Flow
- **Sign In:** Email/password or Google sign-in
- **Sign Up:** Create account with role selection
- **OTP Verification:** Email-based verification
- **Password Reset:** OTP-based password recovery

### Candidate Screens
- **Home:** Job listings with search and filters
- **Profile:** Manage personal info and resume
- **Applications:** Track applied jobs
- **Job Details:** View job information

### Recruiter Screens
- **Dashboard:** Overview of posted jobs
- **Post Job:** Create new job listings
- **Applications:** View received applications
- **Manage Jobs:** Edit or delete postings

### Common Screens
- **Help & Support:** FAQs and support
- **Terms & Policies:** Legal information
- **Settings:** App preferences

## 🗄️ Database Schema

### Users Table
- id
- email
- role (candidate/recruiter)
- created_at

### Jobs Table
- id
- recruiter_id
- title
- description
- requirements
- location
- salary_range
- employment_type
- created_at

### Applications Table
- id
- job_id
- candidate_id
- status
- applied_at

## 🎯 Learning Goals

This project helped me learn:
- React Native fundamentals
- Expo framework
- TypeScript in mobile development
- Supabase integration
- Authentication flows
- State management
- Navigation patterns
- UI/UX design for mobile

## 🚧 Future Improvements

- [ ] Add real-time notifications
- [ ] Implement chat between candidates and recruiters
- [ ] Add job recommendations
- [ ] Integrate payment for premium features
- [ ] Add analytics dashboard
- [ ] Implement dark mode
- [ ] Add unit and integration tests

## 📸 Screenshots

_Add screenshots of your app here_

## 🤝 Contributing

This is a practice project, but feedback and suggestions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**
- GitHub: [ItxosamaCodes](https://github.com/itxosamacodes)
- LinkedIn: [Muhammad Osama](https://www.linkedin.com/in/muhammad-osama-10b16a253/)

## 🙏 Acknowledgments

- React Native documentation
- Expo documentation
- Supabase documentation
- The open-source community

---

**Note:** This is a practice project created for learning purposes.

---

Or a shorter, simpler version:

---

# Gigs - Job Portal App

A React Native job portal connecting candidates with recruiters. Built as a practice project to learn mobile development.

## Features

- 🔐 Authentication (Email, Google, OTP)
- 💼 Job search and applications
- 📝 Recruiter job posting
- 👤 Profile management
- 📧 Email notifications

## Tech Stack

React Native • Expo • TypeScript • Supabase • SQL

## Quick Start

```bash
# Clone repo
git clone https://github.com/yourusername/gigs.git

# Install dependencies
npm install

# Add .env file with Supabase credentials

# Start app
npx expo start
```

## Project Structure

```
/screens      # All app screens
/components   # Reusable components
/services     # API and auth services
/utils        # Helper functions
```

## Learning Goals

Built to learn React Native, TypeScript, Supabase integration, and mobile app architecture.

## Author

[@ItxOsamacodes](https://github.com/itxosamacodes)
