const kits = [
    {
        id: 1,
        name: "Mamelodi Sundowns Home Kit",
        price: "R 950",
        image: "images/mamelodi sundowns.jpg",
        description: "Official Mamelodi Sundowns home kit showcasing signature vibrant yellow styling with green trim, breathable micro-mesh performance fabric, and high-detail badge printing.",
        sizes: "S, M, L, XL, XXL",
        fit: "Athletic Standard Fit",
        material: "100% Breathable Polyester"
    },
    {
        id: 2,
        name: "Orlando Pirates Home Kit",
        price: "R 950",
        image: "images/orlando pirates.jpg",
        description: "Iconic Orlando Pirates black matchday kit featuring skull and crossbones detailing, lightweight sweat-wicking tech, and durable collar ribbing.",
        sizes: "S, M, L, XL, XXL",
        fit: "Athletic Standard Fit",
        material: "100% Breathable Polyester"
    },
    {
        id: 3,
        name: "Kaizer Chiefs Home Kit",
        price: "R 950",
        image: "images/chiefs.jpg",
        description: "Bold Kaizer Chiefs gold and black heritage jersey, designed for maximum comfort in the stands and optimal flexibility on the pitch.",
        sizes: "S, M, L, XL, XXL",
        fit: "Athletic Standard Fit",
        material: "100% Breathable Polyester"
    }
];

function filterInventory() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        let name = card.getAttribute('data-name');
        if (name.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

const modal = document.getElementById('vehicleModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalMileage = document.getElementById('modalMileage');
const modalTransmission = document.getElementById('modalTransmission');
const modalFuel = document.getElementById('modalFuel');

function openVehicleModal(kitId) {
    const kit = kits.find(k => k.id === kitId);
    
    if (kit) {
        modalImg.src = kit.image;
        modalImg.alt = kit.name;
        modalTitle.textContent = kit.name;
        modalPrice.textContent = kit.price;
        modalDescription.textContent = kit.description;
        modalMileage.textContent = kit.sizes;
        modalTransmission.textContent = kit.fit;
        modalFuel.textContent = kit.material;
        
        modal.classList.add('active');
    }
}

function closeModal() {
    modal.classList.remove('active');
}

function scheduleDriveFromModal() {
    const kitName = modalTitle.textContent;
    closeModal();
    const messageBox = document.getElementById('message');
    messageBox.value = `I want to order the ${kitName} from Mash Derby Supply. Please confirm size options and delivery details. My phone number is 0673243958.`;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    if (name === '') {
        document.getElementById('nameError').textContent = 'Please enter your full name.';
        isValid = false;
    }

    if (email === '' || !email.includes('@')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (phone === '' || phone.length < 10) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number (e.g., 0673243958).';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Please specify the kit name and size required.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('formSuccess').textContent = `Thank you, ${name}! Your order has been placed with Mash Derby Supply. We will reach out to 0673243958 shortly to confirm dispatch.`;
        this.reset();
        document.getElementById('phone').value = '0673243958';
    }
});