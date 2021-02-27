fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayFoods (data));

const displayFoods = foods =>{
    const foodsDiv = document.getElementById('foods')
for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    const foodDiv = document.createElement('div')
    const h3 = document.createElement('h3')
    h3.innerText = food.name;
    const p = document.createElement('p')
    p.innerText = food.p;
    foodDiv.appendChild(h3);
    foodDiv.appendChild(p);
    foodsDiv.appendChild(foodDiv);
   
    
}
}