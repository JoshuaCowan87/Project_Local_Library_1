function totalBooksCount(books) {
return books.reduce((acc, book) => acc+=1, 0)
  
}

function totalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => acc+=1, 0)
}

function booksBorrowedCount(books) {
let sum = 0;
 books.forEach(book => {
if (book.borrows[0].returned === false) {
       sum += 1
     }
   }
 )
  return sum
}



function getMostCommonGenres(books) {
  let result = books.reduce((acc, book)=>{
    if (acc[book.genre] == null){
      acc[book.genre] = 1
    }
    else {acc[book.genre]++}
 return acc
  }, {})
  
  let arr = [];
  for (let name in result){
    arr.push({"name": name, "count": result[name]})
  }
  arr.sort((genreA, genreB) => {
   return genreA.count > genreB.count ? -1 : 1
  })
  return arr.slice(0,5)
}              

function getMostPopularBooks(books) {
 
  let nameAndCount = books.map(book => {
 return  {name: book.title, count: book.borrows.length}
 })
return nameAndCount.sort((bookA, bookB) => 
   bookA.count > bookB.count ? -1 : 1
 
                         ).slice(0, 5)
}
 
  


function getMostPopularAuthors(books, authors) {
  let final = books.map(book => {
     let {name: {first, last}} = authors.find(author => {
         return author.id === book.authorId
    });
       return {name : first + " " + last, count : book.borrows.length }
  })

 final.sort((countA, countB) => countA.count > countB.count ? -1 : 1
  )
  return final.slice(0,5)
    }
 
        
  

  

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
