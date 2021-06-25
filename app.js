
let bookTitle = document.getElementById('book_title');
let bookAuthor = document.getElementById('book_author')
let bookPages = document.querySelector('#num_page')
let read = document.getElementById('read')
let update = document.querySelector('input[type="submit"]');

let bookSection = document.querySelector(".stored-books")

    
let myLibrary = [];

function Book(title, author, numPage, read){
    this.title = title
    this.author = author
    this.numPage = numPage
    this.read = read

}
Book.prototype.info = function (){
    return `${this.title} by ${this.author}, ${this.numPage} ${this.read}`
}
// let dis = myLibrary.forEach((book) => {
//     let div = document.createElement('div')
//     bTitle.textCotent = book.title;
//     div.appendChild(bTitle)
//     bAuthor.textCotent = book.author;
//     div.appendChild(bAuthor);
//     bPages.textContent = book.numPage
//     div.appendChild(bPages)
//     bookSection.appendChild(div);
// })
// console.log(dis)

update.addEventListener('click', addBookToLibrary);


function addBookToLibrary(e){
    e.preventDefault()
    
    let bookTi = bookTitle.value;
    let author = bookAuthor.value;
    let pgNum = +bookPages.value;
    let state = read.value;
    let bookOrder = bookTi
                    .toLowerCase()
                    .replace(/[\s]\w/gi, (match) =>{
                        // console.log(match)
                        return match[1].toUpperCase();
                    });
    // console.log(bookOrder)
    window['book'+myLibrary.length] = new Book(bookTi, author, pgNum, state);
    // console.log('book'+myLibrary.length)
    myLibrary.push(window['book'+myLibrary.length])
    myLibrary.forEach((book) => {
        // console.log(myLibrary.length )
        if (myLibrary[myLibrary.length -1] === book){
            let div = document.createElement('div')
            let bTitle = document.createElement('h3')
            let bAuthor = document.createElement('p')
            let bPages = document.createElement('p')
            let bButton = document.createElement('button');
            bButton.textContent = "Remove"
            div.classList.add('books')
            bButton.classList.add('remove')
            
            // console.log(book.title)
            bTitle.textContent = book.title;
            div.appendChild(bTitle)
            bAuthor.textContent = book.author;
            div.appendChild(bAuthor);
            bPages.textContent = book.numPage
            div.appendChild(bPages)
            div.appendChild(bButton);
            // div.innerHTML = '<h3>'+book.title+'</h3>'
            // bookSection.appendChild(div);
            
            bButton.addEventListener("click", removeBook)
            bookSection.prepend(div)
        }else{return}
    })
}

function removeBook(){
    console.log(this.parentElement)
    let thisbook = this.parentElement
    if(confirm("Are you sure?")){
        bookSection.removeChild(thisbook)
    }

    
}

$('.tdnn').click(function () {
    $("body").toggleClass('night');
    $(".moon").toggleClass('sun');
    $(".tdnn").toggleClass('day');
    $(".add-book").toggleClass('night');
    $("form").toggleClass('night-form');

});


// console.log(myLibrary);
// console.log(myLibrary)
