function saveChanges(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Get form values
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const bio = document.getElementById("bio").value;

    // Validate form values if needed

    // Simulate saving the data to the profile (this would be replaced by an API call)
    localStorage.setItem("profileName", name);
    localStorage.setItem("profileUsername", username);
    localStorage.setItem("profileBio", bio);

    // Redirect to Profile page or show a success message
    alert("Profile updated successfully!");
    window.location.href = "Profile.html";
}

// On profile page, load the data from localStorage
function loadProfileData() {
    const name = localStorage.getItem("profileName") || "Nitin Prajapati";
    const username = localStorage.getItem("profileUsername") || "nitin_prajapati15";
    const bio = localStorage.getItem("profileBio") || "Hello Nigga!!";

    document.querySelector(".nameandbio h4").textContent = name;
    document.querySelector(".idnamesection h2").textContent = username;
    document.querySelector(".nameandbio p").textContent = bio;
}

// Call loadProfileData when the profile page loads
if (window.location.pathname.endsWith("Profile.html")) {
    window.addEventListener("load", loadProfileData);
}
