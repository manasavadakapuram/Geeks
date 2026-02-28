const profileData = JSON.parse(localStorage.getItem("userProfile"));

if (profileData) {
    document.getElementById("fullName").textContent = profileData.fullName;
    document.getElementById("headline").textContent = profileData.headline;
    document.getElementById("location").textContent = profileData.location;
    document.getElementById("about").textContent = profileData.about;
    document.getElementById("skills").textContent = profileData.skills;
    document.getElementById("experience").textContent = profileData.experience;
}
<!DOCTYPE html>
<html>
<head>
    <title>Entrepreneurs Hub - Profile</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>
    .profile-img-container {
    position: absolute;
    top: -65px;
    width: 130px;
    height: 130px;
}

.profile-img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 5px solid white;
    object-fit: cover;
    background: #ddd;
}

/* + Icon */
.upload-icon {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background: #0073b1;
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    line-height: 28px;
    font-size: 18px;
    cursor: pointer;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f3f2ef;
}

/* Navbar */
nav {
    background: #1a2230;
    color: white;
    padding: 15px 40px;
    font-weight: 600;
    font-size: 18px;
}

/* Layout */
.container {
    width: 85%;
    margin: 30px auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 25px;
}

/* Profile Card */
.profile-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Cover Photo */
.cover {
    height: 200px;
    background: linear-gradient(135deg, #0072ff, #00c6ff);
}

/* Profile Image */
.profile-info {
    padding: 20px;
    position: relative;
}

.profile-img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 5px solid white;
    position: absolute;
    top: -65px;
    background: #ddd;
}

/* Name */
.profile-info h2 {
    margin-top: 80px;
    font-size: 24px;
}

.profile-info p {
    color: gray;
    margin: 5px 0;
}

.profile-info button {
    margin-top: 10px;
    padding: 8px 20px;
    border-radius: 20px;
    border: none;
    background: #0073b1;
    color: white;
    cursor: pointer;
}

/* Section */
.section {
    background: white;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.section h3 {
    margin-bottom: 15px;
}

/* Experience */
.exp-item {
    margin-bottom: 15px;
}

.exp-item h4 {
    font-weight: 600;
}

.exp-item p {
    font-size: 14px;
    color: gray;
}

/* Skills */
.skills span {
    display: inline-block;
    background: #e1ecf4;
    padding: 6px 12px;
    border-radius: 20px;
    margin: 5px;
    font-size: 13px;
}

/* Sidebar */
.sidebar-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.sidebar-card h4 {
    margin-bottom: 10px;
}

.sidebar-card p {
    font-size: 14px;
    color: gray;
}

/* Responsive */
@media(max-width: 900px) {
    .container {
        grid-template-columns: 1fr;
    }
}
</style>
</head>

<body>

<nav>🚀 Entrepreneurs Hub</nav>

<div class="container">

    <!-- LEFT SIDE -->
    <div>

        <!-- Profile Top Card -->
        <div class="profile-card">
            <div class="cover"></div>

            <div class="profile-info">
                <!-- <div class="profile-img"></div> -->
  <div class="profile-img-container">
    <img id="profilePreview" class="profile-img" src="" alt="">
    <label for="imageUpload" class="upload-icon">+</label>
    <input type="file" id="imageUpload" accept="image/*" hidden>
</div>
                <h2>Manasa Vadakapuram</h2>
                <p>Founder | Tech Entrepreneur | AI Enthusiast</p>
                <p>Chennai, India</p>

                <button>Edit Profile</button>
            </div>
        </div>
       

        <!-- About Section -->
        <div class="section">
            <h3>About</h3>
            <p>
                Passionate entrepreneur building innovative startup platforms.
                Focused on AI-driven solutions that empower young founders
                to connect, collaborate and launch impactful businesses.
            </p>
        </div>

        <!-- Experience -->
        <div class="section">
            <h3>Experience</h3>

            <div class="exp-item">
                <h4>Founder - Entrepreneurs Hub</h4>
                <p>2026 - Present</p>
                <p>Building a global startup collaboration platform.</p>
            </div>

            <div class="exp-item">
                <h4>AI Developer Intern</h4>
                <p>2025 - 2026</p>
                <p>Worked on machine learning & AI integration projects.</p>
            </div>
        </div>

        <!-- Skills -->
        <div class="section">
            <h3>Skills</h3>
            <div class="skills">
                <span>Java</span>
                <span>Servlets</span>
                <span>AI Integration</span>
                <span>Startup Strategy</span>
                <span>Web Development</span>
            </div>
        </div>

    </div>

    <!-- RIGHT SIDE -->
    <div>
        <div class="sidebar-card">
            <h4>Profile Strength</h4>
            <p>⭐⭐⭐⭐☆</p>
        </div>

        <div class="sidebar-card" style="margin-top:20px;">
            <h4>Connections</h4>
            <p>245 Entrepreneurs</p>
        </div>

        <div class="sidebar-card" style="margin-top:20px;">
            <h4>Ideas Posted</h4>
            <p>12 Startup Ideas</p>
        </div>
    </div>

</div>
<script>
document.getElementById("imageUpload").addEventListener("change", function(event) {
    const reader = new FileReader();
    reader.onload = function(){
        document.getElementById("profilePreview").src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});
// Load Profile Data
const data = JSON.parse(localStorage.getItem("profileData"));

if(data){

    document.getElementById("name").innerText = data.name;
    document.getElementById("headline").innerText = data.headline;
    document.getElementById("location").innerText = data.location;
    document.getElementById("about").innerText = data.about;

    // Experience
    let expHTML = "";

    if(data.exp1){
        expHTML += `
        <div class="exp-item">
            <h4>${data.exp1}</h4>
        </div>`;
    }

    if(data.exp2){
        expHTML += `
        <div class="exp-item">
            <h4>${data.exp2}</h4>
        </div>`;
    }

    document.getElementById("experience").innerHTML = expHTML;

    // Skills
    if(data.skills){
        const skillsArray = data.skills.split(",");
        let skillsHTML = "";

        skillsArray.forEach(skill => {
            skillsHTML += `<span>${skill.trim()}</span>`;
        });

        document.getElementById("skills").innerHTML = skillsHTML;
    }
}
</script>

</body>
</html>
