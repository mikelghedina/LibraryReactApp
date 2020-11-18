import React from 'react';
import axios from 'axios';

export default class BookList extends React.Component{
    state = {
        books:[]
    };

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/books')
            .then(res => {
                console.log(res);
                this.setState({books: res.data});
            }).catch(error=> console.log(error))
    }
    render() {
        return(
            <ul>
                {this.state.books.map(book=> (
                    <li key={book.id}>Name: {book.title}</li>
                ))}
            </ul>
        )
    }
}