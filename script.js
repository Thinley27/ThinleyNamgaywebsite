
function toggleMenu() {
    const menu = document.getElementById('nav-list'); // Get the navigation list
    menu.classList.toggle('active'); // Toggle the 'active' class

    // Optional: To add a smooth transition effect on menu display
    if (menu.classList.contains('active')) {
        menu.style.transition = 'max-height 0.3s ease-in'; // Set transition for opening
        menu.style.maxHeight = menu.scrollHeight + 'px'; // Set height based on content
    } else {
        menu.style.transition = 'max-height 0.3s ease-out'; // Set transition for closing
        menu.style.maxHeight = '0px'; // Collapse the menu
    }
}

// Search Button

function searchFlowers() {
    var query = document.getElementById('searchInput').value;
    if (query) {
        // You can redirect or call an API here
        alert('Searching for: ' + query);
        // Example: window.location.href = '/search?query=' + encodeURIComponent(query);
    } else {
        alert('Please enter a flower name to search.');
    }
}  


// Read more and read less button

function toggleText() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("btn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}



    // Slider Section

    let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Show the first slide initially
showSlide(currentSlide);

// Volunteer serivices

let filter  = document.getElementById("myLists");
let gallery = document.getElementById("listImages");

// lets add addEventListener() to the filter

filter.addEventListener("click", function (e) { 
if (e.target.tagName === "LI") {
 let dataGroupOne = e.target.getAttribute("data-group");
   //We will add loop through each card in a the gallery
  
 let callLists = document.querySelectorAll("#listImages li");
    callLists.forEach(function (card) {
    let dataGroupTwo = card.getAttribute("data-group");
    // show or hide the card on the selected category
        if (dataGroupOne==="0" || dataGroupOne===dataGroupTwo) {
            card.style.display = "inline-block";
        }
        else { 
            card.style.display = "none";
        }
    });
    
};
        
});




