import { Book } from "./model.js";

export function getAllBooks (request, response) {
    Book.find({}, (error,books)=>{
        response.status(200).json(books)
    })
}

export function getBooksById (request, response) {

    const id = request.params.id
    if (!id) {
        return response.status(400).send("id is required")
    }
    Book.findById(id, (error,books)=>{
        if (error){
            return response.status(404).send(error)
        }
        response.status(200).json(books)
    })
}

export function addBooks (request, response) {

    const { title, author, pages, description } = request.body

    if (!title || !author || !pages || !description ){
      return response.status(404).send('Please provide all fields')
    }

    Book.create({title, author, pages, description}, (error, book) => {
        if(error) {
            return response.status(500).send(error)
        }

        response.status(201).send('Book was added')
    })
}

export function updateBooks (request, response) {
    const id = request.params.id
    const { title, author, pages, description } = request.body

    if (!id) {
        return response.status(400).send('id is required')
    }

    Book.findByIdAndUpdate(
        id, 
        { title, author, pages, description },
        {returnOriginal: false},
        (error, book) => {
            if(error) {
                return response.status(404).send(error)
            }

            response.status(200).json({ book })
        }
    )
}

export function deleteBooks (request, response) {
    const id = request.params.id
    if (!id) {
        return response.status(400).send('id is required')
      }

    Book.findByIdAndDelete(id, {}, (error, book) => {
        if (error) {
            return response.status(404).send(error)
        }
        response.status(200).send('Book was deleted')
    })  
}