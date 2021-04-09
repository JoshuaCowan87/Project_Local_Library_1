function findAccountById (accounts, id) {
 return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1: -1)
 }


function numberOfBorrows(account, books) {
let sum = 0
for (let i = 0; i < books.length; i++){
  let book = books[i]
  for (let j = 0; j < book.borrows.length; j++){
    if (book.borrows[j].id === account.id){
      sum +=1
    }
  }
}
return sum
  }

function findBorrowedBooksByAccount(books, account) {
  return books.filter(book =>
    book.borrows[0].id === account.id);
}

function getBooksPossessedByAccount(account, books, authors) {
 
 
 let borrowed = findBorrowedBooksByAccount(books, account);
  
  for (let i = 0; i < borrowed.length; i++) {
    for (let j= 0; j < authors.length; j++) {
      if (borrowed[i].authorId === authors[j].id){
        borrowed[i].author = authors[j]
      }
    }
  } 
  
    
  return borrowed
 
                              }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
