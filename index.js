
// Change background color of the body
document.body.style.backgroundColor='silver';
// Change the background of the title 
document.getElementById('title').style.color='green';
document.getElementById('title').style.fontSize='5rem';
document.getElementById('title').style.padding='5rem';
// Capitalize the header 3 tag elements
const h3Elements=document.getElementsByTagName('h3');
for(let h3 of h3Elements){
    h3.style.textTransform='uppercase';
    h3.style.color=' #388e3c';
    h3.style.marginBottom='1rem';
    h3.style.fontSize='1.25rem';
    h3.style.letterSpacing='2px';
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

// Styling header
    const header = document.querySelector('header');
   
        header.style.backgroundImage = "url('https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?s=612x612&w=0&k=20&c=DZy1JMfUBkllwiq1Fm_LXtxA4DMDnExuF40jD8u9Z0Q=')";
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
        header.style.backgroundRepeat = 'no-repeat';
        header.style.minHeight = '250px'; 
        header.style.color='whitesmoke';
        header.style.backgroundImage = ` linear-gradient(to top,  rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.9) 90%,  rgba(0,0,0,0.5) 100%), url('https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?s=612x612&w=0&k=20&c=DZy1JMfUBkllwiq1Fm_LXtxA4DMDnExuF40jD8u9Z0Q=')`;
        header.style.borderBottomLeftRadius = '50rem';
        header.style.borderBottomRightRadius = '50rem';
        header.style.textAlign='Center';






function makeResponsive() {
    const lists = document.querySelector('.lists');
    const fruit = document.querySelector('.list-fruits');
    const veg = document.querySelector('.list-vegetables');
    const title = document.getElementById('title');
    const subtitle = document.querySelector('.subtitle');
    if (window.innerWidth < 700) {
       
        lists.style.flexDirection = 'column';
        lists.style.gap = '1rem';
        fruit.style.width = '100%';
        veg.style.width = '100%';
        fruit.style.maxWidth = '100%';
        veg.style.maxWidth = '100%';
        fruit.style.minWidth = '0';
        veg.style.minWidth = '0';
        title.style.fontSize = '2.2rem';
        title.style.padding = '2rem 0.5rem';
        subtitle.style.fontSize = '1rem';
    
        
    } else {
        lists.style.flexDirection = 'row';
        lists.style.gap = '2rem';
        fruit.style.width = '50%';
        veg.style.width = '50%';
        fruit.style.maxWidth = '520px';
        veg.style.maxWidth = '520px';
        fruit.style.minWidth = '280px';
        veg.style.minWidth = '280px';
        title.style.fontSize = '5rem';
        title.style.padding = '5rem';
        subtitle.style.fontSize = '1.25rem';

    }
}
window.addEventListener('DOMContentLoaded', makeResponsive);
window.addEventListener('resize', makeResponsive);



