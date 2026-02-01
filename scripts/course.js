const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]


let courseDetails = document.getElementById("course-details")
// All Courses
let arrayOfAllCourseNames = courses.map(object => `${object.subject} ${object.number}`)
// Where Course Output is going
let coursesElement = document.getElementById("courses")
// Unique Subjects
let arrayOfUniqueSubjects = [ "All Courses", ...new Set(courses.map(object => `${object.subject} Courses`)) ]
// Where Triggers and Filter's are going
let coursesFilter = document.getElementById("coursesFilter")

function generateCourses(uniqueSubject){
    let newCoursesArray = courses
    if(uniqueSubject !== "All Courses"){
        newCoursesArray = courses.filter((object)=>object.subject == uniqueSubject.split(' ')[0])
    } 
    let children = []
    newCoursesArray.map((object)=>{
        
        let newDiv = document.createElement("div");
        newDiv.addEventListener('click', () => {
            displayCourseDetails(object);
        });
        newDiv.textContent = `${object.subject} ${object.number}`
        if(object.completed){
            newDiv.style.backgroundColor = "#d3d3d3";
            newDiv.textContent += " ✓"
        } else {
            newDiv.style.backgroundColor = "#F59E0B";
        }

        children.push(newDiv)
    })

    let newCredits = document.createElement("div");
    let creditValue = newCoursesArray.reduce((accumulator, currentValue)=>accumulator + currentValue.credits,0)
    newCredits.textContent = `The total number of credits required is ${creditValue}`

    coursesElement.replaceChildren(...children, newCredits)
}

function generateFilter(uniqueSubject){
    let newFilter = document.createElement("div");
    newFilter.addEventListener("click", ()=>{
        generateCourses(uniqueSubject);
    })
    newFilter.textContent = uniqueSubject
    newFilter.classList.add("filter-buttons")
    coursesFilter.appendChild(newFilter)
    coursesFilter.classList.add("filter-buttons-wrapper");
}

arrayOfUniqueSubjects.forEach((uniqueSubject, index) => {
    generateFilter(uniqueSubject);
})

// Return the All Courses first.
window.onload = function() {
    const allCourses = document.getElementById('coursesFilter').firstElementChild;
    allCourses.click();
};


function displayCourseDetails(course) {

  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

closeModal.addEventListener('click', () => {
  modal.close();
});

// TODO: I want this to generate all of the outcomes all at once, and store the outcomes in memory. So they are not being rebuilt every time a user clicks on the screen. It is just fetching it from memory, and updating the DOM. Adjust the function to do that.

/*

    Using buttons that listen for the click event, allow the user to select to display All Courses, WDD Courses, or CSE Courses. Hint: Use the array filter method.

    Design the course cards to indicate those courses that you have completed personally in a complimentary, but different style than the rest, indicating course completion.

    Provide a total number of credits required dynamically by using a reduce function (not shown on the screenshots). The number of credits shown should reflect just the courses currently being displayed.

*/


// // Modify the courses array content in your script file by changing the completed property to true if you have completed a course.
// Dynamically display all the courses in the certificate section as shown in the example above. The courses that you have completed must be marked in a different way versus those that you have not completed. Use your page color scheme. The page should adjust automatically if the data source changes.