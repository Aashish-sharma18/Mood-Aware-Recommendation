function goToAnalyzer() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("analyzerPage").style.display = "block";
}

function analyzeMood(type) {
    let mood = "Neutral"; // Default mood

    if (type === "text") {
        let userText = document.getElementById("textInput").value.toLowerCase();
        if (userText.includes("happy") || userText.includes("excited")) {
            mood = "Happy";
        } else if (userText.includes("sad") || userText.includes("depressed")) {
            mood = "Sad";
        } else if (userText.includes("angry")) {
            mood = "Angry";
        }
    } else if (type === "photo") {
        mood = "Excited"; // Placeholder: You can integrate AI facial recognition here
    }

    document.getElementById("mood").innerText = mood;
    generateRecommendations(mood);
}

function generateRecommendations(mood) {
    let recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = "";

    let recommendations = {
        "Happy": ["🎵 Listen to upbeat music", "🍕 Try a new dish", "🎨 Do something creative"],
        "Sad": ["🎶 Listen to calming music", "📖 Read an inspiring book", "🧘 Try meditation"],
        "Angry": ["🥊 Try an intense workout", "🌿 Go for a nature walk", "📝 Write down your thoughts"],
        "Neutral": ["🎬 Watch a new movie", "🎮 Play a relaxing game", "📞 Call a friend"],
        "Excited": ["🎉 Celebrate with friends", "🎤 Sing your favorite song", "🌎 Plan a trip"]
    };

    let list = document.createElement("ul");
    recommendations[mood].forEach(activity => {
        let listItem = document.createElement("li");
        listItem.textContent = activity;
        list.appendChild(listItem);
    });

    recommendationsDiv.appendChild(list);
}

// Placeholder for audio recording function
function recordAudio() {
    alert("Voice recording feature coming soon!");
}

// Function to handle Enter key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        analyzeMood("text");
    }
}