window.addEventListener("DOMContentLoaded", function () {
    // ====== Question 1 ======

    // i. Get element of id “main-content” and assign it in a variable.
    let mainContent = document.getElementById("main-content");

    // ii. Display all child elements of “main-content” element.
    console.log("Child elements of main-content:");
    console.log(mainContent.children);

    // iii. Get all elements of class “render” and show their innerHTML in browser.
    let renderElements = document.getElementsByClassName("render");

    document.write("<h2>Inner HTML of elements with class 'render':</h2>");
    for (let i = 0; i < renderElements.length; i++) {
        document.write(renderElements[i].innerHTML + "<br>");
    }

    // iv. Fill input value whose element id is “first-name”.
    document.getElementById("first-name").value = "Alex";

    // v. Repeat part iv for id “last-name” and “email”.
    document.getElementById("last-name").value = "Bank";
    document.getElementById("email").value = "alexbank@example.com";


    // ====== Question 2 ======

    // i. What is node type of element having id “form-content”.
    let formContent = document.getElementById("form-content");
    console.log("Node type of form-content:", formContent.nodeType);

    // ii. Show node type of element having id “lastName” and its child node.
    let lastNameElement = document.getElementById("lastName");
    console.log("Node type of lastName:", lastNameElement.nodeType);
    console.log("Node type of lastNames child node:", lastNameElement.firstChild.nodeType);

    // iii. Update child node of element having id “lastName”.
    lastNameElement.innerHTML = "Last Name : ALEX BANK (Updated)";

    // iv. Get First and last child of id “main-content”.
    console.log("First child of main-content:", mainContent.firstElementChild);
    console.log("Last child of main-content:", mainContent.lastElementChild);

    // v. Get next and previous siblings of id “lastName”.
    console.log("Next sibling of lastName:", lastNameElement.nextElementSibling);
    console.log("Previous sibling of lastName:", lastNameElement.previousElementSibling);

    // vi. Get parent node and node type of element having id “email”.
    let emailElement = document.getElementById("email");
    console.log("Parent node of email:", emailElement.parentNode);
    console.log("Node type of email:", emailElement.nodeType);
});
