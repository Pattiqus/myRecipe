const { Steps } = require("../models");

const stepsData = [
    {
        "id": "1",
        "name": "Prepare Ingrediants"
    },
    {
        "id": "2",
        "name": "Cook Ingrediants"
    },
    {
        "id": "3",
        "name": "Serve Ingrediants"
    },
    {
        "id": "4",
        "name": "Prepare Ingrediants"
    },
    {
        "id": "5",
        "name": "Cook Ingrediants"
    },
    {
        "id": "6",
        "name": "Serve Ingrediants"
    },
    {
        "id": "7",
        "name": "Prepare Ingrediants"
    },
    {
        "id": "8",
        "name": "Cook Ingrediants"
    },
    {
        "id": "9",
        "name": "Serve Ingrediants"
    },
    {
        "id": "10",
        "name": "Prepare Ingrediants"
    },
    {
        "id": "11",
        "name": "Cook Ingrediants"
    },
    {
        "id": "12",
        "name": "Serve Ingrediants"
    },
    {
        "id": "13",
        "name": "Prepare Ingrediants"
    },
    {
        "id": "14",
        "name": "Cook Ingrediants"
    },
    {
        "id": "15",
        "name": "Serve Ingrediants"
    },
    {
        "id": "16",
        "name": "Prepare Ingrediants"
    },
    {
        "id": "17",
        "name": "Cook Ingrediants"
    },
    {
        "id": "18",
        "name": "Serve Ingrediants"
    },
    {
        "id": "19",
        "name": "Prepare Ingrediants"
    },
    {
        "id": "20",
        "name": "Cook Ingrediants"
    },
    {
        "id": "21",
        "name": "Serve Ingrediants"
    },
    {
        "id": "22",
        "name": "Prepare Ingrediants"
    },
    {
        "id": "23",
        "name": "Cook Ingrediants"
    },
    {
        "id": "24",
        "name": "Serve Ingrediants"
    }
    
]

const stepSeed = () => Steps.bulkCreate(stepsData);

module.exports = stepSeed;