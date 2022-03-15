let myLibrary = [];

class newBook {
    constructor(name, author, pages, read) {
        this.name = name
        this.author = author
        this.pages = pages
        this.read = read
    }
    
}

function addBook(Book) {
    myLibrary.push(Book);
}

const Eragon = new newBook("Eragon", "Christopher Paolini", 544, "true");
const Eldest = new newBook("Eldest", "Christopher Paolini", 755, "true");
const LOTR = new newBook("LOTR", "J.R.R. Tolkien", 2901, "false");
addBook(Eragon);
addBook(Eldest);
addBook(LOTR);

let books = document.querySelector(".books");

function loopThrough() {
   for(i = 0; i < myLibrary.length; i++) {
    const newDiv = document.createElement('div');
    const newName = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newPages = document.createElement('div');
    const newRead = document.createElement('button');
    newRead.classList.add("hasread");
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete Book';
    delBtn.classList.add('delbtn');
    newName.textContent = `Name: ${myLibrary[i].name}`;
    newAuthor.innerHTML = `Author: ${myLibrary[i].author}`;
    newPages.textContent = `Pages: ${myLibrary[i].pages}`;
    console.log(myLibrary[i].read);
    if (myLibrary[i].read === "false") {
        newRead.classList.add("notread");
    }
    newRead.addEventListener("click", function() {
        newRead.classList.toggle("notread");
    })
    delBtn.addEventListener("click", function() {
        console.log(myLibrary[delBtn]);
        myLibrary.splice(myLibrary[i], 1);
        for(i = 0; i < myLibrary.length + 1; i++) {
        books.removeChild(books.lastChild);}
        loopThrough();
    })
    newDiv.appendChild(newName);
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(newPages);
    newDiv.appendChild(newRead);
    newDiv.appendChild(delBtn);
    books.appendChild(newDiv);
   }
}

loopThrough();

let addNew = document.querySelector(".topbtn");

const popup = document.querySelector(".popup");
popup.style.display = "none";

addNew.addEventListener("click", function() {
    popup.style.display = "block";
})

let newSubmit = document.querySelector("#submit");
let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let newRead = document.querySelector("#read");

newSubmit.addEventListener("click", function() {
    titleInput = newTitle.value;
    authorInput = newAuthor.value;
    pagesInput = newPages.value;
    readInput = newRead.value;
    console.log(titleInput, authorInput, pagesInput, readInput);
    let formBook = new newBook(titleInput, authorInput, pagesInput, readInput);
    addBook(formBook);
    console.log(myLibrary);
    for(i = 0; i < myLibrary.length - 1; i++) {
      books.removeChild(books.lastChild);}
    loopThrough();
    popup.style.display = "none";
})

