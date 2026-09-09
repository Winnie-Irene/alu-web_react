interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { firstName: "Amos", lastName: "Lane", age: 20, location: "Kampala" };
const student2: Student = { firstName: "Alfred", lastName: "Smart", age: 19, location: "Kigali" };
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Last Name', 'Age', 'Location'];
  
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
const tbody = document.createElement('tbody');
studentsList.forEach(student => {
    const row = document.createElement('tr');
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.lastName;
    row.insertCell().textContent = student.age.toString(); 
    row.insertCell().textContent = student.location;
    tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);