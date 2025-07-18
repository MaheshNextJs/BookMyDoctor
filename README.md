# 📄 BookMyDoctor – Frontend Trial Task

## 👨‍💻 Submitted by: Mahesh Bairi   

---

## 🧾 Task Overview

The task was to develop two responsive HTML/CSS/JS pages using **Bootstrap**:

1. **Doctor Profile Page (`index.html`)**
2. **Booking Page (`booking.html`)**

Live links to the official website and social media were also included.

---

## ✅ Pages Overview & Functionality

### 1. `index.html` – Doctor Profile Page

- **Header Section:**
  - Title: *BookMyDoctor*
  - Subtitle: *Organized & Created by Mahesh Bairi*
  - **Social Media Links** (top-right):
    - 🌍 Official Website
    - 🔗 LinkedIn
    - 📸 Instagram
    - 🐦 Twitter

- **Doctor Selector:**
  - Dropdown with two doctors:
    - Dr. Ravi Sharma (General Physician)
    - Dr. Krishna Reddy (Cardiologist)

- **Doctor Details Update Dynamically:**
  - Image, specialization, hospital name
  - Available consultation modes:
    - Dr. Ravi Sharma: In-Person + Online
    - Dr. Krishna Reddy: In-Person only

- **Consultation Tabs:**
  - Booking slots and fees
  - Book Appointment button (redirects to `booking.html`)

---

### 2. `booking.html` – Appointment Booking Page

- Displays selected doctor’s name
- Form with:
  - Patient Name, Age, Email, Phone, Gender, Symptoms
  - Booking Type dropdown:
    - Shows only valid options (based on doctor)
- **Dynamic Field Logic:**
  - Dr. Krishna: Only In-Person visible
  - Dr. Ravi: In-Person + Online

- **On Form Submission:**
  - Success alert
  - Redirects back to homepage

---

## 🌐 Live & Linked Resources

- 🔗 Website: [www.bookmydoctorindia.com](https://www.bookmydoctorindia.com)
- 📸 Instagram: [@bookmydoctor2025](https://www.instagram.com/bookmydoctor2025)
- 🔗 LinkedIn: [BookMyDoctor](https://www.linkedin.com/company/bookmydoctor)
- 🐦 Twitter: [@BookMyDoctor25](https://twitter.com/BookMyDoctor25)

---

## 🧠 Notes

- Fully responsive using Bootstrap 5.
- Doctor selection stored in localStorage for smooth navigation between pages.
- All UI logic handled with vanilla JavaScript.
- Social media links are real and integrated.

---

Thank you for reviewing my submission!
