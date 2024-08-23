const book = require('./model.js');

//-------------Create and Save a new book

exports.create = async (req, res) => {
  if (!req.body.title && !req.body.author && !req.body.publishedDate && !req.body.pages ) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  
  const books = new book({
      title: req.body.title,
      author: req.body.author,
      publishedDate: req.body.publishedDate,
      pages:req.body.pages,
      genre:req.body.genre
  });
  
  await books.save().then(data => {
      res.send({
          message:"BOOK Added successfully!!",
          users:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating book"
      });
  });
};

//--------------------------- GET ALL USERS :
exports.getAllBooks = async (req,res)=>{
    try{
    //what im trying to achieive 
    var books = await book.find()
    res.status(200).send(books)
    }
    catch(err){
    res.status(404).send("404 not found")
    }}


//----------  DELETE USER ( specified id )
exports.DeleteBook = async (req,res)=>{
    await book.findByIdAndDelete(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: ` book not found.`
          });
        } else {
          res.send({
            message: "book deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
  };
  
  //------------ UPDATE 
  
  // Update a user by the id in the request
  exports.updateBook = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await book.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `book not found.`
            });
        }else{
            res.send({ message: "book updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
  };
  
  
  //------------------------  get one book 
  // Find a single book with an id :
  exports.findOne = async (req, res) => {
    try {
        const books = await book.findById(req.params.id);
        res.status(200).json(books);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
  };

//-------------------------
// Add functionality to sort the books by the number of pages in ascending or descending order. 
// The sorting order should be specified via a query parameter (e.g., ?sort=asc or ?sort=desc).

//--------------- get all users with age bigger :
exports.Ascending= async (req,res)=>{
    try{
    //what im trying to achieive 
    var books = await book.find({}).sort({pages:'asc'})
  
    res.status(200).send(books)
    }
    catch(err){
    res.status(404).send("404 not found")
    }}
  
  //--------------- check log in /////   
  //--------------- get all books with  author name :
exports.FindAuthor= async (req,res)=>{
    try{
    //what im trying to achieive 
    const auth = req.params.author;

    var books = await book.find({author:auth})
  
    res.status(200).send(books)
    }
    catch(err){
    res.status(404).send("404 not found")
    }}

  

    