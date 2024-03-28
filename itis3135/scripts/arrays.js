const persons = [];
const salaries = [];

const addSalary = () => {
    const name = document.getElementById("name").value.trim();
    const salary = parseFloat(document.getElementById("salary").value.trim());

    if (name === "" || isNaN(salary)) {
        alert("Please enter valid name and numeric salary.");
        return;
    }

    persons.push(name);
    salaries.push(salary);

    updateDropdownMenu();

    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";

    document.getElementById("name").focus();
};

const updateDropdownMenu = () => {
    const selectEmployee = document.getElementById("selectEmployee");

   
    selectEmployee.innerHTML = '<option value="0">Select Employee</option>';

    
    persons.forEach((person, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = person;
        selectEmployee.appendChild(option);
    });
};

const modifySalary = () => {
    const selectedIndex = document.getElementById("selectEmployee").selectedIndex;
    const name = persons[selectedIndex - 1]; 
    const newSalary = parseFloat(document.getElementById("newSalary").value.trim());

    if (selectedIndex === 0 || isNaN(newSalary)) {
        alert("Please select an employee and enter a valid salary.");
        return;
    }

    salaries[selectedIndex - 1] = newSalary;

    document.getElementById("newSalary").value = "";
};

const displayResults = () => {
    if (salaries.length === 0) {
        alert("Please add at least one employee.");
        return;
    }

    const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    const averageSalary = totalSalary / salaries.length;
    const highestSalary = Math.max(...salaries);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: $${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: $${highestSalary.toFixed(2)}</p>
    `;
};

const displaySalary = () => {
    if (salaries.length === 0) {
        alert("Please add at least one employee.");
        return;
    }

    const resultsTable = document.getElementById("results-body");
    resultsTable.innerHTML = "";

    persons.forEach((person, index) => {
        const row = resultsTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = person;
        cell2.textContent = "$" + salaries[index].toFixed(2);
    });

    document.getElementById("results-table").style.display = "table";;
};

window.onload = function () {
    document.getElementById("name").focus();
};