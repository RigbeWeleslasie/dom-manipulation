
// Change background color of the body
document.body.style.backgroundColor='silver';
// Change the background of the title 
document.getElementById('title').style.color='green';
// Capitalize the header 3 tag elements
const h3Elements=document.getElementsByTagName('h3');
for(let h3 of h3Elements){
    h3.style.textTransform='uppercase';
    }
// adding fruits by calling with it's id
const fruList=document.getElementById('fruList');
const newFruit=document.createElement('li');
newFruit.textContent='Orange';
fruList.appendChild(newFruit);
// adding vegetables list by calling by it's id
const vegList=document.getElementById('vegList');
const newVeglist=document.createElement('li');
newVeglist.textContent='Spinach';
vegList.appendChild(newVeglist);

// adding the class stylesheet to  lists
fruList.classList.add('list-container');
vegList.classList.add('list-container');
// fruList.classList.add('lists')


// adding functionality to the button  submit to add
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fruitForm').addEventListener('submit', addFruit);
    document.getElementById('vegForm').addEventListener('submit', addVegetable);
});

function addFruit(event) {
    event.preventDefault();
    const input = document.getElementById('fruitInput');
    const value = input.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;
        document.getElementById('fruList').appendChild(li);
        input.value = '';
    }
}

function addVegetable(event) {
    event.preventDefault();
    const input = document.getElementById('vegInput');
    const value = input.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;
        document.getElementById('vegList').appendChild(li);
        input.value = '';
    }
}

window.onload = function() {
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/6/6b/Vegetables.jpg')";
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
        header.style.backgroundRepeat = 'no-repeat';
        header.style.minHeight = '250px'; 
        
    }
};

var img = document.createElement('img');
img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Vegetables.jpg';
img.alt = 'Vegetables';
img.style.width = '400px'; 
document.body.appendChild(img);