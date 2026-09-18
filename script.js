const vehicles = [
    {
        id: 1,
        name: "Mercedes-Benz Sport Coupe",
        price: "R 380,000",
        image: "images/merc.jpg",
        description: "Sleek dark Mercedes-Benz coupe equipped with premium alloy wheels, sport suspension, luxury leather interior, and dynamic driving modes.",
        mileage: "42,000 km",
        transmission: "Automatic",
        fuel: "Petrol"
    },
    {
        id: 2,
        name: "2022 Performance Hatchback",
        price: "R 385,000",
        image: "images/suv.jpg",
        description: "Versatile performance hatchback offering excellent handling, modern infotainment system, spacious interior, and reliable fuel efficiency.",
        mileage: "35,000 km",
        transmission: "Automatic",
        fuel: "Petrol"
    },
    {
        id: 3,
        name: "2024 Sport Sedan",
        price: "R 620,000",
        image: "images/sedan.jpg",
        description: "Eye-catching sport sedan featuring metallic blue finish, high-output turbocharged engine, advanced digital cockpit, and full driver assistance package.",
        mileage: "12,500 km",
        transmission: "Automatic",
        fuel: "Petrol"
    }
];

const modal = document.getElementById('vehicleModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalMileage = document.getElementById('modalMileage');
const modalTransmission = document.getElementById('modalTransmission');
const modalFuel = document.getElementById('modalFuel');

function openVehicleModal(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    
    if (vehicle) {
        modalImg.src = vehicle.image;
        modalImg.alt = vehicle.name;
        modalTitle.textContent = vehicle.name;
        modalPrice.textContent = vehicle.price;
        modalDescription.textContent = vehicle.description;
        modalMileage.textContent = vehicle.mileage;
        modalTransmission.textContent = vehicle.transmission;
        modalFuel.textContent = vehicle.fuel;
        
        modal.classList.add('active');
    }
}

function closeModal() {
    modal.classList.remove('active');
}

function scheduleDriveFromModal() {
    const vehicleName = modalTitle.textContent;
    closeModal();
    const messageBox = document.getElementById('message');
    messageBox.value = `I am interested in scheduling a test drive for the ${vehicleName} at Thato Motus Sales.`;
    
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your test drive request has been sent to Thato Motus Sales. We will contact you shortly.`);
    this.reset();
});