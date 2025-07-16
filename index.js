const form = document.querySelector('form');
const submitBtn = document.getElementById('submitBtn');
const studentRows = document.querySelector('.student-rows');

//Load from local Storage
let students = JSON.parse(localStorage.getItem('students')) || [];
let isEditMode = false;
let editIndex = null;


/*Utility Function */
function validateInputs(id, name, className, rollNum, email, contact) {
  const numberRegex = /^[0-9]+$/;
  const letterRegex = /^[a-zA-Z\s]+$/;
  const classNameRegex = /^[a-zA-Z0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!id || !name || !className || !rollNum || !email || !contact) {
    alert("All fields are required.");
    return false;
  }
  if (!numberRegex.test(id)) {
    alert("Student ID must contain only numbers.");
    return false;
  }

  if (!letterRegex.test(name)) {
    alert("Name must contain only letters.");
    return false;
  }
  if (!classNameRegex.test(className)) {
    alert(
      "Class name must contain only letters and numbers (no spaces or symbols)."
    );
    return false;
  }

  if (!numberRegex.test(rollNum)) {
    alert("Roll Number must contain only numbers.");
    return false;
  }
  if (!emailRegex.test(email)) {
    alert("Enter a valid email address.");
    return false;
  }

  if (!numberRegex.test(contact) || contact.length !== 10) {
    alert("Contact number must be 10 digits.");
    return false;
  }

  return true;
}

function clearForm() {
  form.reset();
  isEditMode = false;
  editIndex = null;
  submitBtn.textContent="Add"
}

function saveToLocalStorage() {
  localStorage.setItem('students', JSON.stringify(students));
}

function renderStudents() {
  studentRows.innerHTML = '';
  students.forEach((student, index) => {
    // Create Student Row
    const row = document.createElement('div');
    row.classList.add('student-row');
    // Adding row fields
    row.innerHTML = `
      <div class="fields">${student.id}</div>
      <div class="fields">${student.name}</div>
      <div class="fields">${student.class}</div>
      <div class="fields">${student.roll}</div>
      <div class="fields">${student.email}</div>
      <div class="fields">${student.contact}</div>
      <div class="actions">
        <button onclick="editStudent(${index})">Edit</button>
        <button onclick="deleteStudent(${index})">Delete</button>
      </div>
    `;
    studentRows.appendChild(row);
  });
}



/**Add Functionality */
form.addEventListener('submit', function (e) {
  e.preventDefault();

//   Take the data from input fields
  const id = document.getElementById('stuId').value.trim();
  const name = document.getElementById('stuName').value.trim();
  const stuClass = document.getElementById('stuClass').value.trim();
  const roll = document.getElementById('sturollNo').value.trim();
  const email = document.getElementById('stuEmail').value.trim();
  const contact = document.getElementById('stuContact').value.trim();
  /**
   * Validate the input fields
   * All the field should not empty
   * Name,class--- contain only letters
   * id,rollNum--- contains only numbers.
   * email --- should be in email formate.
   * contact - contain 10 digits
   *
   */
  if (!validateInputs(id, name, stuClass, roll, email, contact)) {
    return;
  }

  const studentData = { id, name, class: stuClass, roll, email, contact };

  if (isEditMode) {
    students[editIndex] = studentData;
  } else {
    students.push(studentData);
  }

  saveToLocalStorage();
  renderStudents();
  clearForm();
});



// Edit Function
window.editStudent =(index)=> {
  const student = students[index];
  /**Get the value from local storage
   * Set the value in input Box
   */
  document.getElementById('stuId').value = student.id;
  document.getElementById('stuName').value = student.name;
  document.getElementById('stuClass').value = student.class;
  document.getElementById('sturollNo').value = student.roll;
  document.getElementById('stuEmail').value = student.email;
  document.getElementById('stuContact').value = student.contact;

  isEditMode = true;
  editIndex = index;
  submitBtn.textContent = 'Update';
};


// Delete Functionality
window.deleteStudent =(index)=> {
  if (confirm('Are you sure you want to delete this student?')) {
    students.splice(index, 1);
    saveToLocalStorage();
    renderStudents();
  }
};

// Initialize
renderStudents();