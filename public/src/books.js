function findAuthorById(authors, id) {
  for (i = 0; i < authors.length; i ++){
    if (authors[i].id === id ) {
    return authors[i]
    }
  }
}

function findBookById(books, id) {
  for (i = 0; i < books.length; i ++){
    if (books[i].id === id){
      return books[i]
    }
  }
}


const partitionBooksByBorrowedStatus = (books => {
let borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  
  let returnedBooks = books.filter(book => book.borrows[0].returned === true);
 
   return [borrowedBooks, returnedBooks]
}
)



function getBorrowersForBook(book, accounts) {
  let final = []
 for (let i = 0; i < accounts.length; i++) {
   
   for (let j =0; j < book.borrows.length; j++) {
     if (final.length === 10) {
       break
     }
     if (accounts[i].id === book.borrows[j].id){
   
       accounts[i].returned = book.borrows[j].returned;
      
       final.push(accounts[i]);
           
   }
 }

  
}
  return final
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
