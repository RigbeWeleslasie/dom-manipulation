
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


    const header = document.querySelector('header');
   
        header.style.backgroundImage = "url('https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?s=612x612&w=0&k=20&c=DZy1JMfUBkllwiq1Fm_LXtxA4DMDnExuF40jD8u9Z0Q=')";
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
        header.style.backgroundRepeat = 'no-repeat';
        header.style.minHeight = '250px'; 
        header.style.color='whitesmoke';
        header.style.backgroundImage = ` linear-gradient(to top,  rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.9) 90%,  rgba(0,0,0,0.5) 100%), url('https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?s=612x612&w=0&k=20&c=DZy1JMfUBkllwiq1Fm_LXtxA4DMDnExuF40jD8u9Z0Q=')`;
      
       
//  const footer=document.querySelector('footer');
//         footer.style.textAlign='center'
//         footer.style.backgroundImage = "url('https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?s=612x612&w=0&k=20&c=DZy1JMfUBkllwiq1Fm_LXtxA4DMDnExuF40jD8u9Z0Q=')";
//         footer.style.backgroundSize = 'cover';
//         footer.style.backgroundPosition = 'center';
//         footer.style.backgroundRepeat = 'no-repeat';
//         footer.style.minHeight = '250px'; 
//         footer.style.color='whitesmoke';
//         footer.style.backgroundImage = ` linear-gradient(to top,  rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 90%,  rgba(0,0,0,0.5) 100%), url('https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?s=612x612&w=0&k=20&c=DZy1JMfUBkllwiq1Fm_LXtxA4DMDnExuF40jD8u9Z0Q=')`;
//         footer.style.borderTopLeftRadius = '50rem';
//         footer.style.borderTopRightRadius = '50rem';

