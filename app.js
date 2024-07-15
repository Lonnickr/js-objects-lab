console.dir("This Works!")

const game = {
    party: [{ pokemon: "Bulbasaur", type: "Grass/Poison", starter: "true" },
            { pokemon: "Charmander", type: "Fire", starter: "true", HP: 39 },
            { pokemon: "Squirtle", type: "Water", starter: "true", HP: 44 },
            { pokemon: "Pikachu", type: "Electric", starter: "true", HP: 35 },
    ],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 }
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    difficulty: [
        { level: "Easy"},
        { level: "Med" },
        { level: "Hard"},
    ]}
    const gyms = (game)
    if (gyms.difficulty < 3) {
        gyms.completed = true
    }
       
    let names = {
        "Bulbasaur": "Ivysaur",
        "Charmander": "Charmeleon",
        "Squirtle": "Wartortle",
        "Pikachu": "Raichu"
    }
    game.party.forEach((poke, idx) => {
        if (poke.starter) {
            let evolvedName = names[pokemon.name]
            let evolvedPokemon = pokemon.find(p => p.name === evolvedName)
            game.party.splice(idx, 1, evolvedPokemon)
        }
    });
    game.party = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"]
    game.party.forEach(pokemon => {
        console.dir(pokemon)
    })
    const pokeball = game.items.find(item => item.name === "pokeball")
    
    game.catchPokemon = function(pokemonObj) {
        game.party.push(pokemonObj)
    }
    let chosenPokemon = pokemon.find(poke => poke.name === "pokeballs")
    game.catchPokemon(chosenPokemon)
    if (pokeball &&pokeball.quantity > 0) {
        pokeball.quantity--
    } else {
        console.log("No pokeballs left!")
    }
 
        if (gyms.difficulty < 6) {
            gyms.completed = true
        }

    game.gymStatus = function() {
        const gymTally = {
            completed: 0,
            incomplete: 0
        }
        for (const gym of game.gyms) {
            if (gym.completed) {
                gymTally.completed
            } else {
                gymTally.incomplete
            }
        }
        console.dir(gymTally)
    }    

    game.partyCount = function() {
        const count = game.party.length
        return count
    }
    console.log(game.partyCount())

    if (gyms.difficulty < 8) {
        gyms.completed = true
    }
    
      console.dir(pokemon, { maxArrayLength: null })
      console.log(game);
  
  





