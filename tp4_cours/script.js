//add book
function addBook() {
    // Validate form
    if (!validateForm()) {
      return;
    }
    // Get the current values from input
    let title = document.getElementById("title").value;
    let auteur = document.getElementById("auteur").value;
    let isbn = document.getElementById("isbn").value;
    //create a variable  list of books
    let bookList;
    //verify if the localstroage have data or not
    if (localStorage.getItem("books") == null) {
      bookList = [];
    } else {
      bookList = JSON.parse(localStorage.getItem("books"));
    }
    //add a new book in the table booklist
    bookList.push({
      title: title,
      auteur: auteur,
      isbn: isbn,
    });
    //add books in local storage
    localStorage.setItem("books", JSON.stringify(bookList));
    // call function showData to retrieve the data 
    showData();
    // Display alert
    displayAlert("Livre ajouté ! ", "alert-success");
    // Clear form inputs
    document.getElementById("title").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("isbn").value = "";
  }
  
  //validation form inputs
  function validateForm() {
    let title = document.getElementById("title").value;
    let auteur = document.getElementById("auteur").value;
    let isbn = document.getElementById("isbn").value;
    //if the value is ""
    if (title == "" || auteur == "" || isbn == "") {
      displayAlert("Veuillez vérifier votre saisie", "alert-warning");
      return false;
    }
  
    return true;
  }
  
  function showData() {
    let bookList;
        //verify if the localstroage have data or not

    if (localStorage.getItem("books") == null) {
      bookList = [];
    } else {
      bookList = JSON.parse(localStorage.getItem("books"));
    }
  
    let html = "";
    //display the data in table html
    bookList.forEach(function (element, index) {
      html += "<tr>";
      html += "<td>" + element.title + "</td>";
      html += "<td>" + element.auteur + "</td>";
      html += "<td>" + element.isbn + "</td>";
      html +=
        '<td><button onclick="deleteBook(' +
        index +
        ')" class="btn btn-danger">X </button></td>';
      html += "</tr>";
    });
    
    document.querySelector("#tableBody").innerHTML = html;
  }


  //delete book function
  function deleteBook(index) {
    //get books from localstorage
    let bookList = JSON.parse(localStorage.getItem("books"));
    
    // index is the index from which to start removing an element
    // 1 is the number of elements to remove at that index.
    //on peut utliser filter ou bien find : filter tlawaj al item pacours tab kamel ama traj3 tab akher 
    //splice tbadel meme tab
//submit refersh l page tabeethh l serveer doc nzidou e.preventdefault annuler son action
// previouselementsibling
//fl tab maw aana isbn kbal l x mtee delete 
    bookList.splice(index, 1);
    //update the books list in localstorage
    localStorage.setItem("books", JSON.stringify(bookList));
    // get the data after removing item 
    showData();
  }
  
  function displayAlert(msg, alertType) {
    // Create an alert element
    let alertElement = document.createElement("div");
    alertElement.className = `alert ${alertType}`;
    alertElement.setAttribute("role", "alert");
    alertElement.textContent = msg;
  
    // Append the alert to the body
    document.body.appendChild(alertElement);
  
    // Remove the alert after a few seconds
    setTimeout(() => {
      document.body.removeChild(alertElement);
    }, 3000);
  }
  
//load all data when page loaded
  document.onload=showData();