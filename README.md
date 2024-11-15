# 🚀 Contact Management System

## Table of Contents
1. [Project Description](#project-description)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
5. [Database Schema](#database-schema)
6. [Challenges Faced](#challenges-faced)
7. [Future Enhancements](#future-enhancements)

---

## 📖 Project Description

This is a **Contact Management System** that allows users to:
- Add, edit, and delete contacts.
- View contact details in a paginated table.
- Sort contacts by name (ascending/descending).
- Validate contact details with both frontend and backend validation.

The app is built with a **React frontend** and a **Node.js/Express backend** using MongoDB for the database.

---

## 🎯 Features

### Backend:
- RESTful API built with Node.js and Express.
- CRUD operations for managing contacts.
- Validation for required fields, email format, and phone number length.
- Duplicate email prevention.

## 🛠️ Technologies Used

### Backend:
- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling.
- **Axios**: HTTP client for API requests.


---

## ⚙️ Setup Instructions

### Backend Setup

```bash
# 1. Clone the repository
git clone <your-backend-repo-url>
cd <backend-folder>

# 2. Install dependencies
npm install

# 3. Run the application
node index.js

# 4. For Testing, use the Swagger documentation
# Open the following link in your browser:
https://contact-management-backend-seven.vercel.app/api/docs/
```
---

### Mongodb Schema
```bashconst mongoose = require('mongoose');

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    validate: {
      validator: function (v) {
        // Regex for validating email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  phoneNumber: { 
    type: String, 
    required: true,
    validate: {
      validator: function (v) {
        // Ensure phone number is exactly 10 digits
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number! Phone number must be 10 digits.`
    }
  },
  company: { type: String },
  jobTitle: { type: String },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;



```
