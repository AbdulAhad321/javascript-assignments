// ========= Previous Function Assignments (#38–44) =========
// (Code from earlier message goes here, keep it intact)

// ========= Event Assignments (#43–48) =========

// Event 3: Delete row
function deleteRow(btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Event 4: Change image on hover
function changeImage() {
  document.getElementById("hoverImg").src = "https://via.placeholder.com/150/FF0000";
}
function resetImage() {
  document.getElementById("hoverImg").src = "https://via.placeholder.com/150/0000FF";
}

// Event 5: Counter
let count = 0;
function increase() {
  count++;
  document.getElementById("counter").innerText = count;
}
function decrease() {
  count--;
  document.getElementById("counter").innerText = count;
}
