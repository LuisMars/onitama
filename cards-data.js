const CARDS_DATA = {
    base: [
        {
            id: 1,
            name: "Tiger",
            color: "blue",
            moves: [[2, 0], [-1, 0]]
        },
        {
            id: 2,
            name: "Dragon",
            color: "red",
            moves: [[1, 2], [1, -2], [-1, 1], [-1, -1]]
        },
        {
            id: 3,
            name: "Frog",
            color: "red",
            moves: [[0, -2], [1, -1], [-1, 1]]
        },
        {
            id: 4,
            name: "Rabbit",
            color: "blue",
            moves: [[1, 1], [0, 2], [-1, -1]]
        },
        {
            id: 5,
            name: "Crab",
            color: "blue",
            moves: [[1, 0], [0, 2], [0, -2]]
        },
        {
            id: 6,
            name: "Elephant",
            color: "red",
            moves: [[1, 1], [1, -1], [0, 1], [0, -1]]
        },
        {
            id: 7,
            name: "Goose",
            color: "blue",
            moves: [[1, -1], [0, -1], [0, 1], [-1, 1]]
        },
        {
            id: 8,
            name: "Rooster",
            color: "red",
            moves: [[-1, -1], [0, -1], [0, 1], [1, 1]]
        },
        {
            id: 9,
            name: "Monkey",
            color: "blue",
            moves: [[-1, -1], [-1, 1], [1, -1], [1, 1]]
        },
        {
            id: 10,
            name: "Mantis",
            color: "red",
            moves: [[-1, 0], [1, 1], [1, -1]]
        },
        {
            id: 11,
            name: "Horse",
            color: "red",
            moves: [[1, 0], [-1, 0], [0, -1]]
        },
        {
            id: 12,
            name: "Ox",
            color: "blue",
            moves: [[1, 0], [0, 1], [-1, 0]]
        },
        {
            id: 13,
            name: "Crane",
            color: "blue",
            moves: [[-1, 1], [-1, -1], [1, 0]]
        },
        {
            id: 14,
            name: "Boar",
            color: "red",
            moves: [[1, 0], [0, 1], [0, -1]]
        },
        {
            id: 15,
            name: "Eel",
            color: "blue",
            moves: [[1, -1], [-1, -1], [0, 1]]
        },
        {
            id: 16,
            name: "Cobra",
            color: "red",
            moves: [[0, -1], [1, 1], [-1, 1]]
        }
    ],

    "senseis-path": [
        {
            id: 17,
            name: "Bear",
            color: "red",
            moves: [[-1, 1], [1, 0], [1, -1]]
        },
        {
            id: 18,
            name: "Dog",
            color: "red",
            moves: [[1, -1], [0, -1], [-1, -1]]
        },
        {
            id: 19,
            name: "Giraffe",
            color: "blue",
            moves: [[1, -2], [1, 2], [-1, 0]]
        },
        {
            id: 20,
            name: "Fox",
            color: "blue",
            moves: [[1, 1], [0, 1], [-1, 1]]
        },
        {
            id: 21,
            name: "Iguana",
            color: "red",
            moves: [[-1, 1], [1, 0], [1, -2]]
        },
        {
            id: 22,
            name: "Kirin",
            color: "red",
            moves: [[-2, 0], [2, 1], [2, -1]]
        },
        {
            id: 23,
            name: "Mouse",
            color: "blue",
            moves: [[-1, -1], [1, 0], [0, 1]]
        },
        {
            id: 24,
            name: "Otter",
            color: "red",
            moves: [[0, 2], [-1, 1], [1, -1]]
        },
        {
            id: 25,
            name: "Panda",
            color: "blue",
            moves: [[-1, -1], [1, 0], [1, 1]]
        },
        {
            id: 26,
            name: "Phoenix",
            color: "blue",
            moves: [[0, -2], [1, -1], [1, 1], [0, 2]]
        },
        {
            id: 27,
            name: "Rat",
            color: "red",
            moves: [[-1, 1], [1, 0], [0, -1]]
        },
        {
            id: 28,
            name: "Sable",
            color: "blue",
            moves: [[0, -2], [-1, -1], [1, 1]]
        },
        {
            id: 29,
            name: "Sea Snake",
            color: "blue",
            moves: [[-1, -1], [1, 0], [0, 2]]
        },
        {
            id: 30,
            name: "Tanuki",
            color: "blue",
            moves: [[-1, -1], [1, 0], [1, 2]]
        },
        {
            id: 31,
            name: "Turtle",
            color: "red",
            moves: [[0, -2], [-1, -1], [-1, 1], [0, 2]]
        },
        {
            id: 32,
            name: "Viper",
            color: "red",
            moves: [[-1, 1], [1, 0], [0, -2]]
        }
    ],

    "wind-move": [
        {
            id: 33,
            name: "Goat",
            color: "red",
            moves: [[0, -1], [-1, 0], [1, 1]]
        },
        {
            id: 34,
            name: "Sheep",
            color: "blue",
            moves: [[0, 1], [-1, 0], [1, -1]]
        }
    ],

    "wind-spirit": [
        {
            id: 35,
            name: "Bat",
            color: "blue",
            moves: [[1, 0], [-1, 0]],
            alternateMoves: [[1, -2], [1, -1], [1, 1], [1, 2]],
            isDualGrid: true,
            dualGridType: "spirit"
        },
        {
            id: 36,
            name: "Eagle",
            color: "red",
            moves: [[1, -1], [1, 1]],
            alternateMoves: [[2, -2], [2, 2]],
            isDualGrid: true,
            dualGridType: "spirit"
        },
        {
            id: 37,
            name: "Hawk",
            color: "blue",
            moves: [[1, -1], [-1, -1]],
            alternateMoves: [[1, -2], [0, -2], [1, 2], [0, 2]],
            isDualGrid: true,
            dualGridType: "spirit"
        },
        {
            id: 38,
            name: "Lion",
            color: "red",
            moves: [[-1, -1], [1, 1]],
            alternateMoves: [[1, 0], [2, 0]],
            isDualGrid: true,
            dualGridType: "spirit"
        },
        {
            id: 39,
            name: "Octopus",
            color: "blue",
            moves: [[1, -1], [-1, 1]],
            alternateMoves: [[1, 0], [0, -1], [0, 1], [-1, 0], [-1, -1], [-1, 1]],
            isDualGrid: true,
            dualGridType: "spirit"
        },
        {
            id: 40,
            name: "Rhinoceros",
            color: "red",
            moves: [[1, 1], [-1, 0]],
            alternateMoves: [[0, -2], [1, -1], [1, 0], [1, 1], [0, 2]],
            isDualGrid: true,
            dualGridType: "spirit"
        },
        {
            id: 41,
            name: "Scorpion",
            color: "blue",
            moves: [[1, 1], [-1, 1]],
            alternateMoves: [[1, -2], [2, -1], [2, 1], [1, 2]],
            isDualGrid: true,
            dualGridType: "spirit"
        },
        {
            id: 42,
            name: "Spider",
            color: "red",
            moves: [[1, 1], [-1, 0]],
            alternateMoves: [[1, -1], [1, 0], [1, 1], [-1, 0]],
            isDualGrid: true,
            dualGridType: "spirit"
        }
    ],

    "promo": [
        {
            id: 43,
            name: "Lobster",
            color: "red",
            moves: [[1, -1], [-2, -1], [1, 1], [-2, 1]]
        },
        {
            id: 44,
            name: "Steer",
            color: "blue",
            moves: [[0, 1], [-1, -1], [-1, 1], [0, -1]]
        },
        {
            id: 45,
            name: "Hornet",
            color: "blue",
            moves: [[1, 0], [0, -2], [-2, 2]]
        },
        {
            id: 46,
            name: "Centipede",
            color: "red",
            moves: [[1, 0], [0, -1], [-2, 2]]
        },
        {
            id: 47,
            name: "Cat",
            color: "blue",
            moves: [[0, -1], [1, 0], [0, 2], [-2, 0]]
        },
        {
            id: 48,
            name: "Serow",
            color: "red",
            moves: [[0, -2], [1, 0], [-2, 0], [0, 1]]
        },
        {
            id: 49,
            name: "Nessie",
            color: "red",
            moves: [[1, -2], [0, 2], [-1, -1], [-1, 1]]
        },
        {
            id: 50,
            name: "Butterfly",
            color: "red",
            moves: [[1, -2], [1, 2], [-1, 0]]
        },
        {
            id: 51,
            name: "Moth",
            color: "blue",
            moves: [[-1, -2], [-1, 2], [1, 0]]
        },
        {
            id: 52,
            name: "Mejika",
            color: "blue",
            moves: [[1, -2], [1, 2]],
            alternateMoves: [[1, 0]],
            isDualGrid: true,
            dualGridType: "apprentice"
        },
        {
            id: 53,
            name: "Okija",
            color: "red",
            moves: [[1, 0]],
            alternateMoves: [[2, -2], [2, 2]],
            isDualGrid: true,
            dualGridType: "apprentice"
        },
        {
            id: 54,
            name: "Kumo",
            color: "blue",
            moves: [[1, -1], [1, 1]],
            alternateMoves: [[0, -2], [0, 2]],
            isDualGrid: true,
            dualGridType: "apprentice"
        },
        {
            id: 55,
            name: "Sasori",
            color: "red",
            moves: [[0, -2], [0, 2]],
            alternateMoves: [[2, -1], [2, 1]],
            isDualGrid: true,
            dualGridType: "apprentice"
        }
    ]
};
