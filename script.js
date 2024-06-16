const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "How does a penguin build its house? Igloos it together.",
    "Why couldn't the bicycle stand up by itself? It was two tired.",
    "Why don't some couples go to the gym? Beacuse some relationships don't work out.",
    "Why did the math book look sad? Because it had too many problems.",
    "Why was the math teacher late to work? She took the rhombus.",
    "What did the ocean say to the shore? Nothing, it just waved.",
    "What's orange and sounds like a parrot? A carrot.",
    "Why don't programmers like nature? Because it has too many bugs.",
    "I can always tell when someone is lying, I can tell when they're standing too.",
    "If your house is cold, just stand in the corner. It's always 90 degress there.",
    "Why can't you make a dinosaur omelet? Because they're egg-stinct.",
    "What did one cupcake say to the other? You ain't see muffin yet.",
    "What is the best present? Broken drums! You can't beat them."
];

function displayJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    document.getElementById("joke").textContent = randomJoke;
}