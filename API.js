document.getElementById("postBtn").addEventListener("click", async function () {

    const button = this;
    button.disabled = true;
    button.innerHTML = "⏳ Processing...";

    showLoadingOverlay();

    const formData = {
        title: document.querySelector("[name='title']").value,
        problem: document.querySelector("[name='problem']").value,
        solution: document.querySelector("[name='solution']").value,
        category: document.querySelector("[name='category']").value
    };

    try {
        const response = await fetch("AIServlet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        sessionStorage.setItem("chatData", JSON.stringify(data));

        setTimeout(() => {
            window.location.href = "chat.html";
        }, 2000);

    } catch (error) {
        alert("Something went wrong!");
        button.disabled = false;
        button.innerHTML = "🚀 Post Idea";
    }
});

function showLoadingOverlay() {
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.innerHTML = `
        <div class="spinner"></div>
        <p>AI is building your startup strategy...</p>
    `;
    document.body.appendChild(overlay);
}
