# StudentRegistration
    A responsive and interactive web-based Student Registration System built with HTML, CSS, and JavaScript. It allows users to add, edit, and delete student records, storing the data in the browser's localStorage for persistence.

#Tech Stack:
    Frontend: HTML5, CSS3, JavaScript (Vanilla)
    Storage: Browser localStorage

#student-registration-system/
│
├── index.html         # Main HTML file
├── index.css          # Stylesheet
├── index.js           # Application logic
└── README.md          # Project documentation

#Form Validation Rules
I   D, Roll No, Contact: Must be numeric

    Name: Alphabetic only

    Class: Alphanumeric only

    Email: Must match email format

    Contact No: 10-digit phone number

#Functionality Overview
    Add Student: Fills the form → validates inputs → stores in localStorage

    Edit Student: Loads selected student data into form → updates on submission

    Delete Student: Removes student from list and localStorage with confirmation

    Persistent Storage: Reloading the page retains data


#Run the Project
1.Clone the Repisitory
    git clone https://github.com/your-username/student-registration-system.git
2.Navigate to directory
    cd student-registration-system
3.open app
    Open index.html in your browser directly, or use a local server like:
        live Server;