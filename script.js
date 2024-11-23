// Basic interactive quiz function
function startQuiz() {
    let score = 0;
    if (confirm("Is a dripping faucet wasteful?")) score++;
    if (confirm("Can rainwater be used for gardening?")) score++;
    alert("Your score: " + score + "/2");
}

// Community post submission
function submitPost() {
    const postContent = document.getElementById("post-content").value;
    if (postContent.trim() === "") {
        alert("Please enter your post content.");
        return;
    }
    
    const postSection = document.getElementById("community-posts");

    // Create post elements
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    const postHeader = document.createElement("div");
    postHeader.className = "post-header";
    postHeader.innerHTML = `<span>User</span><span>${new Date().toLocaleDateString()}</span>`;

    const postContentP = document.createElement("p");
    postContentP.innerText = postContent;

    postDiv.appendChild(postHeader);
    postDiv.appendChild(postContentP);
    postSection.prepend(postDiv);

    document.getElementById("post-content").value = ""; // Clear input
}
