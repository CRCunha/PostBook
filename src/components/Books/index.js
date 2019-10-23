import React from 'react'
import './books.css'
import BooksCard from '../BooksCard'

const Books = () => (
    <div className="books">
        <div className="container">
            <div className="search">
                <form>
                    <input type='text' name='busca' autoComplete='off' />
                    <div className="btnSearch">
                        <input type="submit" name="enviar" value="" />
                    </div>
                </form>
            </div>
            <div className="booksContainer">
                <BooksCard />
                <BooksCard />
            </div>
        </div>
    </div>
);

export default Books;