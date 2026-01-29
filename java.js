function openModal(type) {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");
  
    if (type === "main") {
      text.innerHTML = `
        <h2>Drop-In Session</h2>
        <p>The University Business Society is hosting a drop-in session where students can:</p>
        <ul>
          <li>Learn about society activities</li>
          <li>Get advice from committee members</li>
          <li>Network with other students</li>
        </ul>
        <p><strong>Date:</strong> 3rd February</p>
        <p><strong>Time:</strong> 12 PM – 2 PM</p>
        <p><strong>Location:</strong> The Reef</p>
      `;
    }
  
    if (type === "networking") {
      text.innerHTML = `
        <h2>Networking Meet</h2>
        <p>An informal networking event to connect with like-minded business students.</p>
      `;
    }
  
    if (type === "career") {
      text.innerHTML = `
        <h2>Career Guidance</h2>
        <p>Get insights into business careers, internships, and professional growth.</p>
      `;
    }
  
    modal.style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  