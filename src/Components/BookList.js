import React from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';


class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            columns : [
                { field: 'id', headerName: 'ID', width: 70 },
                { field: 'title', headerName: 'Title', width: 130 },
                { field: 'isbn', headerName: 'ISBN', width: 130 },
                { field: 'pages', headerName: 'Pages', width: 90 }],

            books:[]
        }
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
        return(

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={this.state.books} columns={this.state.columns} checkboxSelection/>
            </div>
        )
    }
}
export default BookList