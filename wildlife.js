// Animal selector by element
const animalData = {
    air: ['Gannet', 'Shearwater', 'Oystercatcher', 'Tern', 'Gull', 'Bat', 'Kingfisher', 'Raven', 'Kestrel', 'Sparrowhawk', 'Falcon', 'Butterfly', 'Bee', 'Dragonfly', 'Moth'],
    land: ['Red Deer', 'Red Squirrel', 'Red Fox', 'Irish Hare', 'Kerry Cow', 'Galway Sheep', 'Connemara Pony'],
    water: ['Mink', 'Fin Whale', 'Humpback', 'Killer Whale', 'Blue Whale', 'Sperm Whale', 'Pilot Whale', 'Basking Shark', 'Bottlenose Dolphin', 'Harbour Porpoise', 'Risso’s Dolphin', 'Common Dolphin']
};

document.getElementById('elementSelector').addEventListener('change', function () {
    const element = this.value;
    const listDiv = document.getElementById('animalList');
    listDiv.innerHTML = '';

    if (element && animalData[element]) {
        const ul = document.createElement('ul');
        animalData[element].forEach(animal => {
            const li = document.createElement('li');
            li.textContent = animal;
            ul.appendChild(li);
        });
        listDiv.appendChild(ul);
    }
});

// Endangered species list
const endangeredSpecies = ['Curlew', 'Atlantic Salmon', 'White Skate', 'European eel', 'Thrift Clearwing', 'Freshwater Pearl Mussel', 'Twite', 'Great Yellow Bumblebee'];
const endangeredList = document.getElementById('endangeredList');
endangeredSpecies.forEach(species => {
    const li = document.createElement('li');
    li.textContent = species;
    endangeredList.appendChild(li);
});

// Simple Quiz
document.getElementById('startQuiz').addEventListener('click', () => {
    const animals = ['Tiger', 'Panda', 'Dolphin', 'Eagle', 'Lion'];
    const random = animals[Math.floor(Math.random() * animals.length)];
    document.getElementById('quizResult').textContent = `You are a ${random}!`;
});

// Form submission
document.getElementById('animalForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('favoriteAnimal').value;
    const reason = document.getElementById('whyFavorite').value;
    document.getElementById('formMessage').textContent = `Thanks for sharing! You selected ${name} as your favorite animal because "${reason}".`;
    this.reset();
});

/* Run script only after HTML is fully loaded */
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleDarkMode");

    /* Use local storage to ensure user selection remains on Dark/Light Mode */
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        if (toggleSwitch) toggleSwitch.checked = true;
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", function () {
            if (toggleSwitch.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }    

    /* Check if slideshow exists before running slideshow script */

    let slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
    }

    // Update footer year automatically
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});