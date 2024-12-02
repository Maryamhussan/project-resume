document.getElementById("resume-form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const username = document.getElementById("username").value.trim();
  if (username) {
    
    window.location.href = `generate.html?username=${encodeURIComponent(
      username
    )}`;
  } else {
    alert("Please enter a valid username.");
  }
});
