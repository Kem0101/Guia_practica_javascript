const { faker } = require('faker');
const fs = require('fs');


//  
function generateBooks(){
    let books = [];

    for(let i = 1; i <= 100; i++){
        let bookName = faker.name.bookName();   
        let body = faker.body.body();
        let bookPage = faker.page.bookName();

        books.push({
            id: id,
            bookName: bookName,
            body: body,
            bookPage: bookPage

        })
    }

    return { data: books }
}

const generatedData = generateBooks();
fs.writeFileSync('data.json', JSON.stringify(generatedData, null, '\t'));