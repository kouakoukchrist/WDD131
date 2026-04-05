

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});

const cars = [
  {
    name: "2021 Ford Escape",
    trim: "SEL",
    miles: "90,833",
    condition: "Pre-owned",
    price: "$15,200",
    image: "images/car1.webp"
  },
  {
    name: "2020 Toyota RAV4",
    trim: "XLE",
    miles: "45,000",
    condition: "Pre-owned",
    price: "$22,500",
    image: "images/car2.webp"
  },
  {
    name: "2019 Honda Civic",
    trim: "Sport",
    miles: "30,000",
    condition: "Pre-owned",
    price: "$18,000",
    image: "images/car3.webp"
  },
  {
    name: "2021 Kia Sportage",
    trim: "S",
    miles: "90,146",
    condition: "Pre-owned",
    price: "$16,260",
    image: "images/car4.webp"
  },
  {
    name: "2018 Ford Explorer",
    trim: "Limited",
    miles: "102,215",
    condition: "Pre-owned",
    price: "$19,500",
    image: "images/car5.webp"
  },
  {
    name: "2019 Volkswagen Jetta",
    trim: "SEL",
    miles: "60,355",
    condition: "Pre-owned",
    price: "$17,547",
    image: "images/car6.webp"
  },
  {
    name: "2017 Jeep Grand Cherokee",
    trim: "Limited",
    miles: "77,012",
    condition: "Pre-owned",
    price: "$17,497",
    image: "images/car7.webp"
  },
  {
    name: "2018 Hyundai Santa Fe",
    trim: "2.0T Ultimate",
    miles: "90,517",
    condition: "Pre-owned",
    price: "$14,800",
    image: "images/car8.webp"
  },
  {
    name: "2017 Cadillac XT5",
    trim: "Luxury",
    miles: "88,936",
    condition: "Pre-owned",
    price: "$21,300",
    image: "images/car9.webp"
  }
];



let container = document.querySelector(".cards-container");

if (container) {
  let input = document.querySelectorAll('input[type="text"]');

  function cardTemplate(card){
      return `
        <div class="car-card">

          <img src="${card.image}" alt="${card.name}">
          <div class="card-info">
            <h3>${card.name}</h3>
            <p>${card.trim} ${card.miles}</p>
            <hr>
            <p>${card.condition}</p>
            <p class="price">${card.price}</p>
          </div>

        </div>
      `
  }

  function displayCars(carsList) {
    container.innerHTML = '';
    carsList.forEach(car => {
      container.innerHTML += cardTemplate(car);
    });
  }
  displayCars(cars);

  input.forEach(element => {
      element.addEventListener('input', () => {
          let query = element.value;

          if (query === '') {
       displayCars(cars);
       } else {
          let filteredSearch = cars.filter(function(car){
          return (
              car.name.toLowerCase().includes(query.toLowerCase()) |
              car.trim.toLowerCase().includes(query.toLowerCase()) |
              car.miles.toLowerCase().includes(query.toLowerCase()) |
              car.condition.toLowerCase().includes(query.toLowerCase()) |
              car.price.toLowerCase().includes(query.toLowerCase())

          );
      })
           displayCars(filteredSearch);
        }
      });
  });
}


