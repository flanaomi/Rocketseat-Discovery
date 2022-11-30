const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os Segregos da mente Milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter" ,
            },

        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce e Insubstituivel",
                author: "Augusto Curry",
            },
            {
                title: "Ansiedade - Como enfentar o mal do seculo",
                author: "Augusto Curry",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },           
        ],
    },
];

const totalCategories = booksByCategory.length
console.log('total de categorias: ' + totalCategories);

for (let category of booksByCategory) {
    console.log('total de livros da categoria ' + category.category + ": " + category.books.length)
}

function countAuthors () {
    let authors = [];

    for (let category of booksByCategory) {
        for (let books of category.books) {
            if (authors.indexOf(books.author) === -1) {
                authors.push(books.author);
            }
        }
    }
    console.log("total de autores: " + authors.length)
}

countAuthors()

function booksOfAuthor (author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")} `)
}

booksOfAuthor('T. Harv Eker')
booksOfAuthor('George S. Clason')
booksOfAuthor('Robert T. Kiyosaki e Sharon L. Lechter')
booksOfAuthor('Augusto Curry')
booksOfAuthor('Stephen R. Covey')