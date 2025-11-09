function create() {
  var name = document.getElementById("name").value;
  var fatherName = document.getElementById("fatherName").value;
  var phoneNo = document.getElementById("phoneNo").value;
  var courseName = document.getElementById("courseName").value;
  var image = document.getElementById("imgInput").files[0];
  var card = document.getElementById("container-2");

  console.log(name, fatherName, phoneNo, courseName, image);

  // Use if...else instead of ternary
  var imgURL;
  if (image) {
    imgURL = URL.createObjectURL(image);
  } else {
    imgURL = "https://via.placeholder.com/100";
  }

  console.log(imgURL);

  // Update the ID card using template literals
  card.innerHTML = `
    <div class="idCard">
      <div class="idHeader">
        <h3>Student ID Card</h3>
      </div>
      <div class="idBody">
        <img id="studentImage" src="${imgURL}" alt="Student Image" />
        <h4 id="studentName">Name: ${name}</h4>
        <p id="fatherName">Father's Name: ${fatherName}</p>
        <p id="courseName">Course: ${courseName}</p>
        <p id="phoneNumber">Phone: ${phoneNo}</p>
      </div>
    </div>
  `;
}
