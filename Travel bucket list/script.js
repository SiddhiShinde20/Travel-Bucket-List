const categories = [
    { name: "Nature", icon: "🏔️" },
    { name: "History", icon: "📜" },
    { name: "Famous Landmarks", icon: "🗼" },
    { name: "Sport", icon: "⚽" },
    { name: "Wildlife", icon: "🦁" },
    { name: "Building", icon: "🏛️" },
    { name: "Religion", icon: "⛪" },
    { name: "Experience", icon: "🎭" },
    { name: "Festival", icon: "🎊" },
    { name: "Movie/TV Locations", icon: "🎬" },
    { name: "Interesting Stays", icon: "🏡" },
    { name: "For the memories", icon: "💛" }
];

const destinations = [
    {
        id: 1,
        name: "Watch the changing of the guards at Buckingham's Palace",
        country: "England",
        category: "Famous Landmarks",
        location: "London, England",
        description: "A striking display of British pageantry, when the New Guard takes over from the Old Guard.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Visit Mont Saint-Michel",
        country: "France",
        category: "Famous Landmarks",
        location: "Normandy, France",
        description: "A magical island with a medieval monastery. Real-life Hogwarts Castle? Eh, close enough.",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Toss a coin into the Trevi Fountain",
        country: "Italy",
        category: "Famous Landmarks",
        location: "Rome, Italy",
        description: "Throw one coin over your right shoulder, and you will return to Rome one day. Throw two coins, and a new romance will come your way.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Watch the Northern Lights",
        country: "Norway",
        category: "Nature",
        location: "Tromsø, Norway",
        description: "Experience the magical northern lights dancing across the Arctic night sky.",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Explore the Great Wall",
        country: "China",
        category: "History",
        location: "Beijing, China",
        description: "Walk along one of the world's most remarkable historic structures.",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Go on an African safari",
        country: "Kenya",
        category: "Wildlife",
        location: "Maasai Mara, Kenya",
        description: "See elephants, lions, giraffes, and other amazing wildlife in their natural habitat.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        name: "Visit the Taj Mahal",
        country: "India",
        category: "Building",
        location: "Agra, India",
        description: "Admire the beautiful white marble monument and its extraordinary architecture.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        name: "Watch a live football match",
        country: "Spain",
        category: "Sport",
        location: "Barcelona, Spain",
        description: "Feel the excitement of a live football match surrounded by passionate fans.",
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 9,
        name: "See the Eiffel Tower sparkle",
        country: "France",
        category: "Experience",
        location: "Paris, France",
        description: "Enjoy the City of Light and watch the iconic Eiffel Tower illuminate the night.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        name: "Celebrate Holi in India",
        country: "India",
        category: "Festival",
        location: "Mathura, India",
        description: "Celebrate the festival of colours with music, traditions, and joyful celebrations.",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        name: "Explore the Harry Potter world",
        country: "England",
        category: "Movie/TV Locations",
        location: "London, England",
        description: "Discover magical filming locations and step into the world of your favourite wizard.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        name: "Stay in an overwater villa",
        country: "Maldives",
        category: "Interesting Stays",
        location: "Maldives",
        description: "Wake up to turquoise water and enjoy a peaceful island escape.",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 13,
        name: "Visit the Golden Temple",
        country: "India",
        category: "Religion",
        location: "Amritsar, India",
        description: "Experience the serene atmosphere and beautiful golden architecture of Harmandir Sahib.",
        image: "https://images.unsplash.com/photo-1609948543911-7f01ff385be5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        name: "Take a dream vacation",
        country: "Switzerland",
        category: "For the memories",
        location: "Swiss Alps, Switzerland",
        description: "Enjoy breathtaking mountain views, charming villages, and unforgettable memories.",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80"
    }
];

// ---------- DOM elements ----------
const categoryFilters = document.getElementById("categoryFilters");
const countrySelect = document.getElementById("countrySelect");
const destinationGrid = document.getElementById("destinationGrid");
const selectedGrid = document.getElementById("selectedGrid");
const emptyMessage = document.getElementById("emptyMessage");
const listCount = document.getElementById("listCount");
const listEmpty = document.getElementById("listEmpty");

let activeCategory = "Famous Landmarks";
let selectedCountry = "All Countries";

// Restore the saved list from browser storage
function loadSavedList() {
    try {
        const saved = JSON.parse(localStorage.getItem("travelBucketList"));
        if (!Array.isArray(saved)) return [];

        return saved.filter(id =>
            Number.isInteger(id) &&
            destinations.some(destination => destination.id === id)
        );
    } catch {
        return [];
    }
}

let bucketList = loadSavedList();

// ---------- Create category buttons ----------
function renderCategories() {
    categoryFilters.innerHTML = "";

    categories.forEach(category => {
        const button = document.createElement("button");

        button.className = "category-btn";
        button.textContent = `${category.icon} ${category.name}`;
        button.classList.toggle(
            "active",
            activeCategory === category.name
        );

        button.addEventListener("click", () => {
            activeCategory =
                activeCategory === category.name ? null : category.name;

            renderCategories();
            renderDestinations();
        });

        categoryFilters.appendChild(button);
    });
}

// ---------- Create country dropdown options ----------
function renderCountries() {
    const countries = [...new Set(
        destinations.map(destination => destination.country)
    )].sort();

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

// ---------- Create a destination card ----------
function createDestinationCard(destination, isSelected = false) {
    const card = document.createElement("article");
    card.className = "destination-card";

    const image = document.createElement("img");
    image.className = "destination-image";
    image.src = destination.image;
    image.alt = destination.location;
    image.loading = "lazy";

    image.addEventListener("error", () => {
        image.alt = `${destination.name} image unavailable`;
        image.style.display = "none";
    });

    const location = document.createElement("div");
    location.className = "destination-location";

    const locationText = document.createElement("span");
    locationText.textContent = destination.location;

    const locationIcon = document.createElement("span");
    locationIcon.className = "location-icon";
    locationIcon.textContent = "♟";

    location.append(locationText, locationIcon);

    const titleRow = document.createElement("div");
    titleRow.className = "card-title-row";

    const title = document.createElement("h3");
    title.textContent = destination.name;

    const button = document.createElement("button");
    button.className = "add-btn";
    button.textContent = isSelected ? "×" : "+";
    button.classList.toggle("added", isSelected);
    button.setAttribute(
        "aria-label",
        isSelected
            ? `Remove ${destination.name}`
            : `Add ${destination.name} to bucket list`
    );

    button.addEventListener("click", () => {
        if (bucketList.includes(destination.id)) {
            bucketList = bucketList.filter(id => id !== destination.id);
        } else {
            bucketList.push(destination.id);
        }

        saveBucketList();
        renderDestinations();
        renderBucketList();
    });

    titleRow.append(title, button);

    const description = document.createElement("p");
    description.className = "destination-description";
    description.textContent = destination.description;

    card.append(image, location, titleRow, description);

    return card;
}

// ---------- Render destination cards ----------
function renderDestinations() {
    destinationGrid.innerHTML = "";

    const filteredDestinations = destinations.filter(destination => {
        const categoryMatches =
            !activeCategory || destination.category === activeCategory;

        const countryMatches =
            selectedCountry === "All Countries" ||
            destination.country === selectedCountry;

        return categoryMatches && countryMatches;
    });

    filteredDestinations.forEach(destination => {
        destinationGrid.appendChild(
            createDestinationCard(
                destination,
                bucketList.includes(destination.id)
            )
        );
    });

    emptyMessage.hidden = filteredDestinations.length !== 0;
}

// ---------- Save the list ----------
function saveBucketList() {
    try {
        localStorage.setItem(
            "travelBucketList",
            JSON.stringify(bucketList)
        );
    } catch (error) {
        console.error("Could not save the bucket list:", error);
    }
}

// ---------- Render My Bucket List ----------
function renderBucketList() {
    selectedGrid.innerHTML = "";

    const selectedDestinations = destinations.filter(destination =>
        bucketList.includes(destination.id)
    );

    listCount.textContent =
        `${selectedDestinations.length} destination` +
        (selectedDestinations.length === 1 ? "" : "s") +
        " selected";

    listEmpty.hidden = selectedDestinations.length !== 0;

    selectedDestinations.forEach(destination => {
        selectedGrid.appendChild(
            createDestinationCard(destination, true)
        );
    });
}

// ---------- Country filter ----------
countrySelect.addEventListener("change", event => {
    selectedCountry = event.target.value;
    renderDestinations();
});

// ---------- Print / Save as PDF ----------
document.getElementById("printBtn").addEventListener("click", () => {
    if (bucketList.length === 0) {
        alert("Add at least one destination to your bucket list first!");
        return;
    }

    window.print();
});

// ---------- Clear bucket list ----------
document.getElementById("clearBtn").addEventListener("click", () => {
    if (bucketList.length === 0) return;

    const confirmed = confirm(
        "Are you sure you want to clear your entire bucket list?"
    );

    if (confirmed) {
        bucketList = [];
        saveBucketList();
        renderDestinations();
        renderBucketList();
    }
});

// ---------- About modal ----------
const aboutModal = document.getElementById("aboutModal");

document.getElementById("aboutBtn").addEventListener("click", () => {
    aboutModal.hidden = false;
});

document.getElementById("closeModal").addEventListener("click", () => {
    aboutModal.hidden = true;
});

aboutModal.addEventListener("click", event => {
    if (event.target === aboutModal) {
        aboutModal.hidden = true;
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        aboutModal.hidden = true;
    }
});

// ---------- Dark / light mode ----------
document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ---------- Start the application ----------
renderCategories();
renderCountries();
renderDestinations();
renderBucketList();