const date = document.getElementById("date");
date.innerHTML = "Today is " + Date();

function greet() {
    const name = document.getElementById("name").value;
    const mood = document.getElementById("mood").value;
    const greeting = `The Dirty Skunk welcomes you, ${name}! We're glad you are doing ${mood}!`;
    document.getElementById("greeting").innerHTML = greeting;
}

function polygon() {
    let userInput = document.getElementById("number").value;
    let number = Math.round(Math.abs(parseFloat(userInput)))
    if (isNaN(number) || number === 0) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }
    const polygons = ["Henagon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
    const polygon = polygons[number - 1];
    if (number >= 1 && number <= 10) {
        alert(`The polygon with ${number} sides is called a ${polygon}!`);
    } else {
        alert("Please enter a valid number between 1 and 10.");
    }
}

function getRandomMonster() {
    const monsters = ["Blue-Eyes White Dragon", "Dark Magician", "Red-Eyes Black Dragon", "Exodia", "Slifer the Sky Dragon", "Obelisk the Tormentor", "The Winged Dragon of Ra", "Kuriboh"];
    const randomIndex = Math.floor(Math.random() * monsters.length);
    return monsters[randomIndex];
}

function summonMonster() {
    const summonedMonster = getRandomMonster();
    alert(`You successfully summoned ${summonedMonster}!`);
}

function activateMagicCard() {
    const magicCards = ["Mystical Space Typhoon", "Dark Hole", "Monster Reborn", "Pot of Greed", "Change of Heart"];
    const randomIndex = Math.floor(Math.random() * magicCards.length);
    const drawnMagicCard = magicCards[randomIndex];
    alert(`You used a powerful magic card: ${drawnMagicCard}!`);
}

function activateTrapCard() {
    const trapCards = ["Mirror Force", "Solemn Judgment", "Torrential Tribute", "Trap Hole", "Magic Cylinder"];
    const randomIndex = Math.floor(Math.random() * trapCards.length);
    const activatedTrapCard = trapCards[randomIndex];
    alert(`Trap card activated: ${activatedTrapCard}! It countered your opponent's move.`);
}

function simulateDuel() {
    const yourMonster = getRandomMonster();
    const opponentMonster = getRandomMonster();
    alert(`Battle started!\nYour ${yourMonster} vs. Opponent's ${opponentMonster}`);
    const yourLifePoints = Math.round(Math.random() * 8000 / 10) * 10;
    const opponentLifePoints = Math.round(Math.random() * 8000 / 10) * 10;
    alert(`Duel Result:\nYour Life Points: ${yourLifePoints}\nOpponent's Life Points: ${opponentLifePoints}`);
    if (yourLifePoints > opponentLifePoints) {
        alert("Congratulations! You won the duel!");
    } else if (yourLifePoints < opponentLifePoints) {
        alert("Oh no! You lost the duel. Better luck next time!");
    } else {
        alert("It's a draw! The duel is inconclusive.");
    }
}