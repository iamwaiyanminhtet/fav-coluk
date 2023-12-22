const mainLayout = document.querySelector('#main-layout');
const favLayout = document.querySelector('#fav-layout');
const favBtn = document.querySelector('#favBtn');
const allBtn = document.querySelector('#all');
const noFavBookText = document.querySelector('#no-fav-book')
let curMode = 'all';

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
            <button data-action="add" >
                       <?xml version="1.0" encoding="iso-8859-1"?>
                        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                        <svg fill="#005b68" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="stroke-heart"
                             viewBox="0 0 471.701 471.701" xml:space="preserve">
                        <g>
                            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                        </g>
                        </svg>
            </button> 
            <button data-action="remove" class="d-none">
                <?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fill-heart"
                             viewBox="0 0 512 512" xml:space="preserve">
                        <path style="fill:#005b68;" d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566
                            c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566
                            c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418
                            c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0
                            c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936
                            C512,137.911,498.388,101.305,474.655,74.503z"/>
                        <path style="fill:#005b68;" d="M160.959,401.243c-36.618-30.304-65.836-62.565-86.845-95.889
                            c-26.529-42.083-39.981-85.961-39.981-130.418c0-37.025,13.612-73.631,37.345-100.433c21.44-24.213,49.775-39.271,81.138-43.443
                            c-5.286-0.786-10.653-1.189-16.082-1.189c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936
                            c0,44.458,13.452,88.335,39.981,130.418c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146
                            c2.203,0.988,4.779,0.988,6.981,0c0.689-0.308,5.586-2.524,13.577-6.588C251.254,463.709,206.371,438.825,160.959,401.243z"/>
                </svg>
            </button>
        </div>
    </div>
    `;
}

// sample
let adventureOfSherlockHolmes = new createBook('The Adventure of Sherlock Holmes','./asset/book-images/adventure-of-sherlock-holmes.jpg','./book-dir/adventure-of-sherlock-holmes.html');

let norwegianWood = new createBook ('Norwegian Wood','./asset/book-images/norwegian-wood.jpg','./book-dir/norwegian-wood.html');

let taleOfTwoCities = new createBook ('A Tale of Two Cities','./asset/book-images/a-tale-of-two-cities.jpeg','./book-dir/a-tale-of-two-cities.html');

let alchemist = new createBook ('Alchemist','./asset/book-images/alchemist.jpeg','./book-dir/alchemist.html');

let mansSearchForMeaning = new createBook ("Man's Search for Meaning",'./asset/book-images/mans-search-for-meaning.jpg','./book-dir/mans-search-for-meaning.html');

let oneHundredYearofSolitude = new createBook ("One Hundred Years of Solitude",'./asset/book-images/one-hundred-year-of-solitude.jpg','./book-dir/one-hundred-year-of-solitude.html');

let toKillAMockingBird = new createBook ('To Kill A Mockingbird','./asset/book-images/to-kill-a-mocking-bird.jpeg','./book-dir/to-kill-a-mocking-bird.html');

let wutheringHeight = new createBook ('Wuthering Heights','./asset/book-images/wuthering-height.jpg','./book-dir/wuthering-height.html')

// allBooks in an array
let allBooks = [adventureOfSherlockHolmes,norwegianWood,taleOfTwoCities,alchemist,mansSearchForMeaning,oneHundredYearofSolitude,toKillAMockingBird,wutheringHeight];
let favBooks = [];


// loop allBooks and DISPLAY each book in UI
allBooks.forEach(book => {
    let currentFav = JSON.parse(localStorage.getItem('data')) || favBooks;
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
                <button data-action="add" class="d-none">
                       <?xml version="1.0" encoding="iso-8859-1"?>
                        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                        <svg fill="#005b68" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="stroke-heart"
                             viewBox="0 0 471.701 471.701" xml:space="preserve">
                        <g>
                            <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                        </g>
                        </svg>
                    </button> 
                    <button data-action="remove" class="">
                        <?xml version="1.0" encoding="iso-8859-1"?>
                        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                        <svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fill-heart"
                             viewBox="0 0 512 512" xml:space="preserve">
                        <path style="fill:#005b68;" d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566
                            c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566
                            c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418
                            c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0
                            c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936
                            C512,137.911,498.388,101.305,474.655,74.503z"/>
                        <path style="fill:#005b68;" d="M160.959,401.243c-36.618-30.304-65.836-62.565-86.845-95.889
                            c-26.529-42.083-39.981-85.961-39.981-130.418c0-37.025,13.612-73.631,37.345-100.433c21.44-24.213,49.775-39.271,81.138-43.443
                            c-5.286-0.786-10.653-1.189-16.082-1.189c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936
                            c0,44.458,13.452,88.335,39.981,130.418c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146
                            c2.203,0.988,4.779,0.988,6.981,0c0.689-0.308,5.586-2.524,13.577-6.588C251.254,463.709,206.371,438.825,160.959,401.243z"/>
                        </svg>
                    </button>
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
    curMode = 'fav';
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
                    <button data-action="remove" class="">
                        <?xml version="1.0" encoding="iso-8859-1"?>
                        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                        <svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fill-heart"
                             viewBox="0 0 512 512" xml:space="preserve">
                        <path style="fill:#005b68;" d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566
                            c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566
                            c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418
                            c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0
                            c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936
                            C512,137.911,498.388,101.305,474.655,74.503z"/>
                        <path style="fill:#005b68;" d="M160.959,401.243c-36.618-30.304-65.836-62.565-86.845-95.889
                            c-26.529-42.083-39.981-85.961-39.981-130.418c0-37.025,13.612-73.631,37.345-100.433c21.44-24.213,49.775-39.271,81.138-43.443
                            c-5.286-0.786-10.653-1.189-16.082-1.189c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936
                            c0,44.458,13.452,88.335,39.981,130.418c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146
                            c2.203,0.988,4.779,0.988,6.981,0c0.689-0.308,5.586-2.524,13.577-6.588C251.254,463.709,206.371,438.825,160.959,401.243z"/>
                        </svg>
                    </button>
                </div>
            </div>
            `;
        });
        mainLayout.innerHTML = favBooksHtml
        localStorage.setItem('data',JSON.stringify(currentFav));

    }
})

// all btn click
allBtn.addEventListener('click', e => {
    curMode = 'all';
    window.location.reload();
});

// add to fav btn click
mainLayout.addEventListener('click', e => {
    let current = e.target;
    if(current.matches('button') || current.matches('svg')) {
        // add to the fav
       if(current.dataset.action === "add") {
            let currentFav = JSON.parse(localStorage.getItem('data')) || favBooks;

            // change UI button
            current.classList.add('d-none');
            current.parentNode.lastElementChild.classList.remove('d-none');

            // add to fav array
            let name = current.parentNode.firstElementChild.textContent;
            
            allBooks.forEach(book => {
                if (book.title === name) {
                    currentFav.push(book)
                }
            });
            localStorage.setItem('data',JSON.stringify(currentFav));
       }

       // remove from the fav
       if(current.dataset.action==="remove") {
        
            // change UI button
            current.classList.add('d-none');
            current.previousElementSibling.classList.remove('d-none');

            // remove card from the ui if from fav page
            if(curMode === 'fav') {
                e.target.parentNode.parentNode.remove();
            }

            // remove from fav array
            let name = current.parentNode.firstElementChild.textContent;
            
            favBooks = JSON.parse(localStorage.getItem('data'));
            favBooks.forEach(book => {
                if (book.title == name) {
                    favBooks.splice(favBooks.findIndex(book => book.title == name),1);
                }
            });
            localStorage.setItem('data',JSON.stringify(favBooks));
       }
    }
})







