function generateCV() {
  const fullName = document.getElementById("fullName").value;
  const about = document.getElementById("about").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const linkedin = document.getElementById("linkedin").value;
  const facebook = document.getElementById("facebook").value;
  const experience = document.getElementById("experience").value.split("\n");
  const education = document.getElementById("education").value.split("\n");
  const skills = document.getElementById("skills").value.split(",");
  const languages = document.getElementById("languages").value.split(",");
  const preferredColor = document.getElementById("preferredColor").value;
  const preferredFont = document.getElementById("preferredFont").value;

  const profilePic = document.getElementById("profilePic").files[0];

  document.getElementById("cvPreview").innerHTML = "";

  if (profilePic) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const profilePicURL = e.target.result;

      const cvHTML = `
        <div class="cv-container" style="font-family: ${preferredFont}; color: ${preferredColor};">
          <div class="header">
            <img src="${profilePicURL}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 0;">
            <div>
              <h1>${fullName}</h1>
              <p>${location}</p>
              <p>Email: ${email} | Phone: ${phone}</p>
              <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a> | Facebook: <a href="${facebook}" target="_blank">${facebook}</a></p>
            </div>
          </div>

          <div>
            <h2 class="section-title">About Me</h2>
            <div class="section-content">
              <p>${about}</p>
            </div>
          </div>

          <div>
            <h2 class="section-title">Work Experience</h2>
            <div class="section-content">
              ${experience.map((exp) => `<p>${exp}</p>`).join("")}
            </div>
          </div>

          <div>
            <h2 class="section-title">Education</h2>
            <div class="section-content">
              ${education.map((edu) => `<p>${edu}</p>`).join("")}
            </div>
          </div>

          <div>
            <h2 class="section-title">Skills</h2>
            <ul class="skills-list">
              ${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}
            </ul>
          </div>

          <div>
            <h2 class="section-title">Languages</h2>
            <ul class="languages-list">
              ${languages
                .map((language) => `<li>${language.trim()}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
      `;

      document.getElementById("cvPreview").innerHTML = cvHTML;
      setTimeout(() => downloadPDF(), 500);
    };

    reader.readAsDataURL(profilePic);
  } else {
    alert("Please upload a profile picture.");
  }
}

function downloadPDF() {
  const element = document.getElementById("cvPreview");
  html2pdf()
    .set({
      margin: 0,
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .from(element)
    .save();
}