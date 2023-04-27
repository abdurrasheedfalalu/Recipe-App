async function getRandomMeal () {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")

    const randomMeal = await res.json();
    console.log(randomMeal)
}

async function getMealById (id) {
    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
}

async function getMealsBySearch (term) {
    const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term)

}

getRandomMeal()