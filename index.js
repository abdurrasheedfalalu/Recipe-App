const meals = document.getElementById("meals");

async function getRandomMeal () {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    const resData = await res.json();
    const randomMeal = resData.meals[0]
    console.log(randomMeal)

    addMeal(randomMeal, true)
}

async function getMealById (id) {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)

    const meal = await res.json()
    console.log(meal)
}

async function getMealsBySearch (term) {
    const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term)

}
document.onload(getRandomMeal())



function addMeal(mealData, random=false) {
    const meal = document.createElement("div");

    meal.classList.add("meal")

    meal.innerHTML = `
        <div class="meal">
            <div class="meal-header">
                ${
                    random ? `
                        <span class="random">
                            ${mealData.strCategory}
                        </span>
                    `:
                    ""
                }
                <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
            </div>
            <div class="meal-body">
                <h4>${mealData.strMeal}</h4>
                <button>
                    <i class="far fa-heart" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    `

    meals.appendChild(meal)
}


// getMealById(1111)