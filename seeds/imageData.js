const { Image } = require('../models');

const imageData = [
    {
        "image_link": "https://media.istockphoto.com/photos/pizza-chef-preparing-pizza-at-the-restaurant-picture-id1287249478?s=612x612",
        "recipe_id": 1
    },
    {
        "image_link": "https://media.istockphoto.com/photos/pizza-chef-baking-a-pizza-in-the-oven-picture-id1287249479?s=612x612",
        "recipe_id": 1
    },
    {
        "image_link": "https://media.istockphoto.com/photos/homemade-indian-butter-chicken-with-rice-picture-id1312459972?s=612x612",
        "recipe_id": 2
    },
    {
        "image_link": "https://media.istockphoto.com/photos/authentic-indian-food-picture-id639389404?s=612x612",
        "recipe_id": 2
    },
    {
        "image_link": "https://media.istockphoto.com/photos/stir-fry-meal-including-beef-peas-carrots-and-rice-picture-id185216094?s=612x612",
        "recipe_id": 3
    },
    {
        "image_link": "https://media.istockphoto.com/photos/chef-tossing-flaming-vegetable-picture-id1223383996?s=612x612",
        "recipe_id": 3
    },
    {
        "image_link": "https://media.istockphoto.com/photos/pork-tenderloin-medallions-in-a-creamy-mushroom-sauce-picture-id1328568894?s=612x612",
        "recipe_id": 4
    },
    {
        "image_link": "https://media.istockphoto.com/photos/preparing-vegan-mushroom-stroganoff-picture-id1241724902?s=612x612",
        "recipe_id": 4
    },
    {
        "image_link": "https://media.istockphoto.com/photos/chicken-kiev-picture-id471927369?s=612x612",
        "recipe_id": 5
    },
    {
        "image_link": "https://media.istockphoto.com/photos/chicken-kiev-crumbed-and-fried-chicken-breast-cutlet-stuffed-with-picture-id1337378819?s=612x612",
        "recipe_id": 5
    },
    {
        "image_link": "https://media.istockphoto.com/photos/fried-rice-with-ketchup-and-soy-sauce-picture-id1175434591?s=612x612",
        "recipe_id": 6
    },
    {
        "image_link": "https://media.istockphoto.com/photos/chicken-fried-rice-picture-id945606006?s=612x612",
        "recipe_id": 6
    },
    {
        "image_link": "https://media.istockphoto.com/photos/chocolate-fudge-cakeselective-focus-picture-id625738392?s=612x612",
        "recipe_id": 7
    },
    {
        "image_link": "https://media.istockphoto.com/photos/breath-picture-id1287548391?s=612x612",
        "recipe_id": 7
    },
    {
        "image_link": "https://media.istockphoto.com/photos/lemon-tart-picture-id859674102?s=612x612",
        "recipe_id": 8
    },
    {
        "image_link": "https://media.istockphoto.com/photos/lemon-tart-picture-id181090665?s=612x612",
        "recipe_id": 8
    }
]

const imageSeed = () => Image.bulkCreate(imageData);

module.exports = imageSeed;