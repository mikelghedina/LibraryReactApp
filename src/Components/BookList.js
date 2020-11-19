import React from 'react';
import axios from 'axios';


export default class BookList extends React.Component{
    state ={
        books:[]
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/books')
            .then(res => {
                console.log(res);
                this.setState({books: res.data});
            }).catch(error=> console.log(error))
    }



    render() {
        const columns = [{
            Header: 'Title',
            accessor: 'title'
        },{
            Header: 'ISBN',
            accessor: 'isbn'
        },{
            Header: 'Pages',
            accessor: 'pages'
        }]
        return(
           <div>

           </div>
        )
    }
}