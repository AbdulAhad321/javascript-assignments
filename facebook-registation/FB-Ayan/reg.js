let signUp = document.getElementById("signUpBtn");

signUp.addEventListener('click', function (event) {
    event.preventDefault(); // prevent form submission

    // Get current input values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let contact = document.getElementById("contact").value;
    let password = document.getElementById("password").value;
    let birthMonth = document.getElementById("birthMonth").value;
    let birthDate = document.getElementById("birthDay").value;
    let birthYear = document.getElementById("birthYear").value;
    let gender = document.getElementsByName("gender");

    // Get selected gender
    let selectedGender = "";
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
            break;
        }
    }

    // Create user object
    const userData = {
        firstName,
        lastName,
        contact,
        password,
        gender: selectedGender,
        birthMonth,
        birthDate,
        birthYear
    };

    // Get existing users from localStorage
    let usersArr = localStorage.getItem("usersData") || "[]";
    usersArr = JSON.parse(usersArr);
      let duplicateUser = usersArr.find(user => user.contact === contact);
    if (duplicateUser) {
        alert("This contact number is already registered!");
        return; // stop saving duplicate
    }
    // Add new user
    usersArr.push(userData);

    // Save back to localStorage
    localStorage.setItem("usersData", JSON.stringify(usersArr));

    console.log("Saved users:", usersArr);
});
