


const getTheTitlesBad = function(booksArr) {
    // take array and return array of titles
    let titles = booksArr.reduce(
        (titlesArr, current) => {
            console.log(current);
            titlesArr.push(current.title);
            return titlesArr;
        }, [], 
    );
    console.log(titles);
    return titles;

};

const getTheTitles = function(books) {
    return books.map(book => book.title);
}

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

let titles = getTheTitles(books);


// Do not edit below this line
module.exports = getTheTitles;
