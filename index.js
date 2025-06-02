document.body.style.backgroundColor='silver';
document.getElementById('title').style.color='green';
    
const h3Elements=document.getElementsByTagName('h3');
for(let h3 of h3Elements){
    h3.style.textTransform='uppercase';
    }
const fruList=document.getElementById('fruList');
const newFruit=document.createElement('li');
newFruit.textContent='Orange';
fruList.appendChild(newFruit);

const vegList=document.getElementById('vegList');
const newVeglist=createElement('li');
newVeglist.textContent='Spinach';
vegList.appendChild(newVeglist);

fruList.classList.add('list-container')




