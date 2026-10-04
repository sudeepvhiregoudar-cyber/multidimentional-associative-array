const form = document.getElementById("form");
const errorBox = document.getElementById("error");
const result = document.getElementById("result");
const tbody = document.getElementById("tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorBox.textContent = "";

  // Multidimensional associative array: each element is an
  // object with the keys "name" and "marks" (like PHP's $students[i]["name"]).
  const students = [];

  // Insert details of three students.
  for (let i = 1; i <= 3; i++) {
    const name = document.getElementById("name" + i).value.trim();
    const marksText = document.getElementById("marks" + i).value.trim();
    const marks = Number(marksText);

    if (name === "" || marksText === "" || isNaN(marks) || marks < 0 || marks > 100) {
      errorBox.textContent =
        "Student " + i + ": enter a name and marks between 0 and 100.";
      result.hidden = true;
      return;
    }
    students.push({ name: name, marks: marks });
  }

  // Access every element using a foreach-style loop (for...of / forEach).
  tbody.innerHTML = "";
  let number = 1;
  for (const student of students) {
    const tr = document.createElement("tr");
    const values = [number, student["name"], student["marks"]];
    values.forEach(function (value, index) {
      const td = document.createElement("td");
      if (index !== 1) td.className = "num";
      td.textContent = value;   // textContent keeps user input safe from HTML injection
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
    number++;
  }
  result.hidden = false;
});

document.getElementById("clearBtn").addEventListener("click", function () {
  form.reset();
  errorBox.textContent = "";
  result.hidden = true;
  tbody.innerHTML = "";
});
