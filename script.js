// ==============================
// KU CSE Resource Hub
// script.js
// ==============================

// Subject List
const resources = [
    {
        subject: "Calculus",
        semester: "1st Year",
        link: "calculus.html"
    },
    {
        subject: "Physics",
        semester: "1st Year",
        link: "physics.html"
    },
    {
        subject: "English",
        semester: "1st Year",
        link: "english.html"
    },
    {
        subject: "Discrete Mathematics",
        semester: "1st Year",
        link: "discrete.html"
    },
    {
        subject: "Structured Programming",
        semester: "1st Year",
        link: "sp.html"
    },
    {
        subject: "Computer Fundamentals",
        semester: "1st Year",
        link: "fundamentals.html"
    }
];

// Resource Container
const container = document.getElementById("resourceContainer");

// Show All Resources
function displayResources(data) {

    container.innerHTML = "";

    data.forEach(item => {

        container.innerHTML += `

        <div class="card">

            <h2>${item.subject}</h2>

            <p>${item.semester}</p>

            <a href="${item.link}" class="btn">
                View Resources
            </a>

        </div>

        `;

    });

}

// Load Website
displayResources(resources);

// ==============================
// Search Bar
// ==============================

const searchBox = document.getElementById("searchBox");

if(searchBox){

    searchBox.addEventListener("keyup", function(){

        const value = this.value.toLowerCase();

        const filtered = resources.filter(item =>

            item.subject.toLowerCase().includes(value)

        );

        displayResources(filtered);

    });

}

// ==============================
// Dark Mode
// ==============================

function darkMode(){

    document.body.classList.toggle("dark");

}

console.log("KU CSE Resource Hub Loaded Successfully");
