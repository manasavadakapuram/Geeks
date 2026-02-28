// profile.js

document.getElementById("profileForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    // Get form data
    const formData = new FormData(this);

    const profileData = {
        fullName: formData.get("fullName"),
        headline: formData.get("headline"),
        location: formData.get("location"),
        about: formData.get("about"),
        skills: formData.get("skills"),
        experience: formData.get("experience")
    };

    // Save to localStorage
    localStorage.setItem("userProfile", JSON.stringify(profileData));

    // Redirect to view profile page
    window.location.href = "viewProfile.html";
});
