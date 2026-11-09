// Student details
let students = [
    {
        name: "Rahul",
        marks: 85,
        class: "10th",
        address: "Hyderabad"
    },
    {
        name: "Priya",
        marks: 92,
        class: "10th",
        address: "Vijayawada"
    },
    {
        name: "Arjun",
        marks: 78,
        class: "9th",
        address: "Warangal"
    },
    {
        name: "Sneha",
        marks: 95,
        class: "10th",
        address: "Bangalore"
    },
    {
        name: "Kiran",
        marks: 88,
        class: "9th",
        address: "Chennai"
    }
];

// Display student records
function displayStudents(studentList) {

    let container = document.getElementById("studentContainer");

    container.innerHTML = "";

    if (studentList.length === 0) {
        container.innerHTML = "<h3>No students found!</h3>";
        return;
    }

    studentList.map(function (student) {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h2>${student.name}</h2>
            <p><b>Marks:</b> ${student.marks}</p>
            <p><b>Class:</b> ${student.class}</p>
            <p><b>Address:</b> ${student.address}</p>
        `;

        container.appendChild(card);

    });
}

// Search students by name
let searchBox = document.getElementById("search");

searchBox.addEventListener("input", function () {

    let searchValue = searchBox.value.toLowerCase();

    let filteredStudents = students.filter(function (student) {

        return student.name.toLowerCase().includes(searchValue);

    });

    displayStudents(filteredStudents);

});

// Display all students
displayStudents(students);