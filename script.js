const mainLayout = document.querySelector('#main-layout');
const favLayout = document.querySelector('#fav-layout');
const favBtn = document.querySelector('#favBtn');
const allBtn = document.querySelector('#all');
const noFavBookText = document.querySelector('#no-fav-book')

// create new book
function createBook (title,imagePath,filePath) {
    return {
        title,
        imagePath,
        filePath,
        type : 'book',
        fav : 'no',
    }
};

// display all book
let allBooksHtml = "";
function displayAllBooks (title,imagePath,filePath,fav) {
    allBooksHtml += `
    <div class="card">
        <div class="card-img">
            <a href="${filePath}">
                <img src="${imagePath}" alt="book image">
            </a>
        </div>
        <div class="card-body">
            <h3>${title}</h3>
            <button data-action="add">Add to Fav</button> <button data-action="remove" class="d-none">Added</button>
        </div>
    </div>
    `;
}

// add custom method to Storage obj
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

// sample
let adventureOfSherlockHolmes = new createBook('The Adventure of Sherlock Holmes','./asset/book-images/adventure-of-sherlock-holmes.jpg','./book-dir/adventure-of-sherlock-holmes.html');

let norwegianWood = new createBook ('Norwegian Wood','./asset/book-images/norwegian-wood.jpg','./book-dir/norwegian-wood.html');

let taleOfTwoCities = new createBook ('A Tale of Two Cities','./asset/book-images/a-tale-of-two-cities.jpeg','./book-dir/a-tale-of-two-cities.html');

// allBooks in an array
let allBooks = [adventureOfSherlockHolmes,norwegianWood,taleOfTwoCities];
let favBooks = [];


// loop allBooks and DISPLAY each book in UI
allBooks.forEach(book => {
    let currentFav = localStorage.getObj('data') || favBooks;
    let isFav = currentFav.some(curFavBook => curFavBook.title === book.title);

    // if already in fav, show added fav btn
    if (isFav) {
        allBooksHtml += `
        <div class="card">
            <div class="card-img">
                <a href="${book.filePath}">
                    <img src="${book.imagePath}" alt="book image">
                </a>
            </div>
            <div class="card-body">
                <h3>${book.title}</h3>
                <button data-action="add" class="d-none">Add to Fav</button>
                <button data-action="remove">Added</button>
            </div>
        </div>
        `;
    } else {
        displayAllBooks(book.title, book.imagePath, book.filePath, book.fav);
    }
});
mainLayout.innerHTML = allBooksHtml;

// fav btn click 
favBtn.addEventListener('click', e => {
    let favBooksHtml = '';
    // loop allBooks and DISPLAY each book in UI
    let currentFav = JSON.parse(localStorage.getItem('data')) || favBooks;

    if(currentFav.length === 0) {
        mainLayout.innerHTML = '';
        noFavBookText.classList.remove('d-none')
    }else {
        currentFav.forEach(book => {
            favBooksHtml += `
            <div class="card">
                <div class="card-img">
                    <a href="${book.filePath}">
                        <img src="${book.imagePath}" alt="book image">
                    </a>
                </div>
                <div class="card-body">
                    <h3>${book.title}</h3>
                    <button data-action="add" class="d-none">Add to Fav</button>
                    <button data-action="remove">Added</button>
                </div>
            </div>
            `;
        });
        mainLayout.innerHTML = '';
        favLayout.innerHTML = favBooksHtml;
        localStorage.setObj('data',currentFav);
    }
})

// all btn click
allBtn.addEventListener('click', e => {
    window.location.reload();
});

// add to fav btn click
let cardBody = document.querySelectorAll('.card-body');
cardBody.forEach(card => {
    card.addEventListener('click', e => {
        let current = e.target;
        if(current.matches('button')) {
            // add to the fav
           if(current.dataset.action === "add") {
                // change UI button
                current.classList.add('d-none');
                current.parentNode.lastElementChild.classList.remove('d-none');

                // add to fav array
                let name = current.parentNode.firstElementChild.textContent;
                
                allBooks.forEach(book => {
                    if (book.title === name) {
                        favBooks.push(book)
                    }
                });
                localStorage.setObj('data',favBooks);
           }

           // remove from the fav
           if(current.dataset.action === "remove") {
                // change UI button
                current.classList.add('d-none');
                current.previousElementSibling.classList.remove('d-none');

                // remove from fav array
                let name = current.parentNode.firstElementChild.textContent;
                
                favBooks = JSON.parse(localStorage.getItem('data'));
                favBooks.forEach(book => {
                    if (book.title == name) {
                        favBooks.splice(favBooks.findIndex(book => book.title == name),1);
                    }
                });
                localStorage.setObj('data',favBooks)
           }
        }
    })
});





