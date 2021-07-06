const bookTitle = document.getElementById('book_title')
const bookAuthor = document.getElementById('book_author')
const bookPages = document.getElementById('num_page')
const submit = document.querySelector('input[type="submit"')
// const bookSection = document.querySelector('.stored-books')
// const books = document.querySelectorAll('.books');
let myLibrary = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')): []
localStorage.setItem('items', JSON.stringify(myLibrary))

// const data = JSON.parse(localStorage.getItem("items"))



class Book{
    constructor(title, author, numPage){
        this.Title = title,
        this.Author = author,
        this['Page Number'] = numPage
    }
    // info = function () {
    //     console.log (`${this.title}`)
    // }
}

submit.addEventListener("click", addBookToLibrary)

function addBookToLibrary(e){
    e.preventDefault()
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value)

    myLibrary.push(newBook)
    displayBook()
    localStorage.setItem('items', JSON.stringify(myLibrary))
    // console.log(myLibrary)
}
function displayBook(){
    let bookSect = document.querySelector('.stored-books')
    const books = document.querySelectorAll('.books');
    console.log(bookSect)
    books.forEach((book) => bookSect.removeChild(book))
    for(let i = 0; i < myLibrary.length; i++){
        render(myLibrary[i]);
    }
}
function render(item){
    
    let bookSection = document.querySelector('.stored-books')
    let books = document.createElement('div')
    books.setAttribute('class', 'books')
    let h3 = document.createElement('h3')
    h3.textContent =`${item['Title']}`
    let theAuthor = document.createElement('p')
    theAuthor.textContent =`${item['Author']}`
    let thePage = document.createElement('p')
    thePage.textContent =`${item['Page Number']}`
    let bButton = document.createElement('button');
    bButton.textContent = "Remove"
    bButton.classList.add('remove')
    books.appendChild(h3)
    books.appendChild(theAuthor)
    books.appendChild(thePage)
    books.appendChild(bButton)
    bButton.addEventListener("click", () =>{
        myLibrary.splice(myLibrary.indexOf(item), 1)
        displayBook()
        localStorage.setItem('items', JSON.stringify(myLibrary))
    })
    bookSection.prepend(books)

}


function restore(){
let objects = localStorage.getItem('items') // gets information from local storage to use in below loop to create DOM/display
myLibrary = JSON.parse(objects);
displayBook();
}
restore()