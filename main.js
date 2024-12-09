// Initial Freelancers on Load
let freelancers = [
    { name: "Alice", price: 30, occupation: "writer"},
    { name: "Bob", price: 50, occupation: "teacher"}
];

// Adding freelancers to HTML using DOM
function freelancerList() {
    const freelancerList = document.getElementById("nameCard");
    freelancerList.innerHTML = '';

    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement('li');
        freelancerElement.classList.add('freelancer-item');
        freelancerElement.textContent = `${freelancer.name} ${freelancer.occupation} $${freelancer.price}`;
        freelancerList.appendChild(freelancerElement)
    });

    updatePrice();
}

function updatePrice(){
    const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = freelance.length ? totalPrice / freelancers.length : 0;
    document.getElementById("average-price").textContent = averagePrice.toFixed(2);
}

function generateFreelancer() {
    const names = [randomFreelancers.name];
    const occupations = [randomFreelancers.occupation];
    const prices = [randomFreelancers.price];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)]
    const randomPrice = prices[Math.floor(Math.random() * prices.length)]

    return {name: randomName, Occupation: randomOccupation, price: randomPrice};
}


const randomFreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  function addNewFreelancer(){
    const addNewFreelancer = generateFreelancer();
    freelancers.push(newFreelancer);
    freelancerList();
}

freelancerList();
setInterval(addNewFreelancer, 1000)

