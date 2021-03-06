const { RecipeIngrediants } = require("../models");

const recipeIngrediantsData = [
    {
        "id": 1,
        "recipe_id": 1,
        "ingrediant_id": 1
    },
    {
        "id": 2,
        "recipe_id": 1,
        "ingrediant_id": 2
    },
    {
        "id": 3,
        "recipe_id": 1,
        "ingrediant_id": 3
    },
    {
        "id": 4,
        "recipe_id": 2,
        "ingrediant_id": 4
    },
    {
        "id": 5,
        "recipe_id": 2,
        "ingrediant_id": 5
    },
    {
        "id": 6,
        "recipe_id": 2,
        "ingrediant_id": 6
    },
    {
        "id": 7,
        "recipe_id": 3,
        "ingrediant_id": 7
    },
    {
        "id": 8,
        "recipe_id": 3,
        "ingrediant_id": 8
    },
    {
        "id": 9,
        "recipe_id": 3,
        "ingrediant_id": 9
    },
    {
        "id": 10,
        "recipe_id": 4,
        "ingrediant_id": 10
    },
    {
        "id": 11,
        "recipe_id": 4,
        "ingrediant_id": 11
    },
    {
        "id": 12,
        "recipe_id": 4,
        "ingrediant_id": 12
    },
    {
        "id": 13,
        "recipe_id": 5,
        "ingrediant_id": 13
    },
    {
        "id": 14,
        "recipe_id": 5,
        "ingrediant_id": 14
    },
    {
        "id": 15,
        "recipe_id": 5,
        "ingrediant_id": 15
    },
    {
        "id": 16,
        "recipe_id": 6,
        "ingrediant_id": 16
    },
    {
        "id": 17,
        "recipe_id": 6,
        "ingrediant_id": 17
    },
    {
        "id": 18,
        "recipe_id": 6,
        "ingrediant_id": 18
    },
    {
        "id": 19,
        "recipe_id": 7,
        "ingrediant_id": 19
    },
    {
        "id": 20,
        "recipe_id": 7,
        "ingrediant_id": 20
    },
    {
        "id": 21,
        "recipe_id": 7,
        "ingrediant_id": 21
    },
    {
        "id": 22,
        "recipe_id": 8,
        "ingrediant_id": 22
    },
    {
        "id": 23,
        "recipe_id": 8,
        "ingrediant_id": 23
    },
    {
        "id": 24,
        "recipe_id": 8,
        "ingrediant_id": 24
    }
]

const recipeIngrediantsSeed = () => RecipeIngrediants.bulkCreate(recipeIngrediantsData);

module.exports = recipeIngrediantsSeed;