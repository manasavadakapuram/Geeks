document.getElementById("postBtn").addEventListener("click", function () {

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

    // Simulate AI processing (no backend)
    setTimeout(() => {

        const aiResponse = `
🚀 STARTUP STRATEGY REPORT

Title: ${formData.title}

📌 Problem:
${formData.problem}

💡 Refined Solution:
${formData.solution}

📊 Market Opportunity:
Strong demand if validated with early adopters.

💰 Revenue Model:
Subscription + Commission model.

🛣 Roadmap:
1. Build MVP
2. Test with small user group
3. Improve using feedback
4. Scale regionally
        `;

        sessionStorage.setItem("chatData", JSON.stringify({
            assistant: aiResponse
        }));

        window.location.href = "chat.html";

    }, 2000);
});
