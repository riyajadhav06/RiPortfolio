function opentab(tabName) {
    const tabLinks = document.querySelectorAll(".tab-links");
    const tabContents = document.querySelectorAll(".tab-contents");

    // Remove 'active' class from all links and tabs
    tabLinks.forEach(link => link.classList.remove("active-link"));
    tabContents.forEach(content => content.classList.remove("active-tab"));

    // Add 'active' class to clicked tab and corresponding content
    document.querySelector(`[onclick="opentab('${tabName}')"]`).classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}


// Side menu functionality
const sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

// Form submission to Google Sheets
const scriptURL = '<add-your-link-here>'; // Add your own app script link here
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => msg.innerHTML = "", 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

// When the "See more" button is clicked, toggle visibility of the extra projects
const seeMoreBtn = document.getElementById('seeMoreBtn');
const projectContainer = document.getElementById('projectContainer');
const workProjects = document.querySelectorAll('.work');

seeMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Check if "See less" is clicked
    if (seeMoreBtn.textContent === 'See less') {
        // Hide additional projects
        for (let i = 3; i < workProjects.length; i++) {
            workProjects[i].classList.add('hidden'); // Hides projects
        }
        // Change the button text back to 'See more'
        seeMoreBtn.textContent = 'See more';

        // Scroll back up to the first 3 projects
        workProjects[0].scrollIntoView({ behavior: 'smooth' });
    } else {
        // Show additional projects (all after the first 3)
        for (let i = 3; i < workProjects.length; i++) {
            workProjects[i].classList.remove('hidden'); // Shows projects
        }
        // Change the button text to 'See less'
        seeMoreBtn.textContent = 'See less';
    }
});

// Smooth scrolling
// Select the button and hidden achievements
const seeMoreBtn1 = document.getElementById('seeMoreBtn1');
const hiddenAchievements = document.querySelectorAll('.work1.hidden');
const achievementContainer = document.getElementById('achievementContainer');

// Event listener to toggle achievements visibility
seeMoreBtn1.addEventListener('click', function (event) {
    // Prevent the default anchor behavior (scrolling to top)
    event.preventDefault();

    // Toggle visibility of the hidden achievements
    hiddenAchievements.forEach(item => {
        item.classList.toggle('hidden');  // Toggle the 'hidden' class
    });

    // Scroll to the top of the achievementContainer when collapsing the achievements
    if (seeMoreBtn1.innerText === 'Show Less') {
        achievementContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Toggle the button text between "More achievement" and "Show Less"
    if (seeMoreBtn1.innerText === 'More achievement') {
        seeMoreBtn1.innerText = 'Show Less';
    } else {
        seeMoreBtn1.innerText = 'More achievement';
    }
});