const coursesArray = [];

function addCourse() {
    const coursesContainer = document.getElementById('coursesContainer');

    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.placeholder = 'Enter class name';
    courseInput.className = 'course-container';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        coursesContainer.removeChild(courseInput);
        coursesContainer.removeChild(deleteButton);

        const index = coursesArray.indexOf(courseInput.value);
        if (index !== -1) {
            coursesArray.splice(index, 1);
        }
    };

    courseInput.addEventListener('input', function () {
        coursesArray.push(courseInput.value);
    });

    coursesContainer.appendChild(courseInput);
    coursesContainer.appendChild(deleteButton);
}

document.getElementById('byoForm').addEventListener('reset', resetForm);
document.getElementById('byoForm').addEventListener('submit', submitForm);

function resetForm(event) {
    event.preventDefault();

    coursesArray.length = 0;
    document.getElementById('byoForm').reset();
}

function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').value;
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevelopmentBackground = document.getElementById('webDevelopmentBackground').value;
    const primaryComputerPlatform = document.getElementById('primaryComputerPlatform').value;
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;
    const agreeCheckbox = document.getElementById('agreeCheckbox').checked;

    if (name && mascot && image && imageCaption && personalBackground &&
        professionalBackground && academicBackground && webDevelopmentBackground &&
        primaryComputerPlatform && coursesArray && funnyThing && anythingElse && agreeCheckbox) {
        if (coursesArray.length === 0) {
            alert('Please add at least one course before submitting.');
            return;
        }
        displayFormData();
    } else {
        alert('Please fill out all required fields.');
    }
}

function displayFormData() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').files[0];
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevelopmentBackground = document.getElementById('webDevelopmentBackground').value;
    const primaryComputerPlatform = document.getElementById('primaryComputerPlatform').value;
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;

    const content = `
    <main>
        <h2>${name} || ${mascot}</h2>
        <figure>
            <img src="${URL.createObjectURL(image)}" alt="${image.name}">
            <figcaption>${imageCaption}</figcaption>
        </figure>
        <ul>
            <li><strong>Personal Background: </strong>${personalBackground}</li>
            <li><strong>Professional Background: </strong>${professionalBackground}</li>
            <li><strong>Academic Background: </strong>${academicBackground}</li>
            <li><strong>Background in Web Development: </strong>${webDevelopmentBackground}</li>
            <li><strong>Primary Computer Platform: </strong>${primaryComputerPlatform}</li>
            <li><strong>Courses currently taking:</strong>
                <ul>
                    ${coursesArray.map(course => `<li>${course}</li>`).join('')}
                </ul>
            </li>
            <li><strong>Funny thing? </strong>${funnyThing}</li>
            <li><strong>Anything else? </strong>${anythingElse}</li>
        </ul>
    </main>
    `;
    document.main.innerHTML = content;
}