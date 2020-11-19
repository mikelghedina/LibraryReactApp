import React from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';


class AuthorList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            columns : [
                { field: 'id', headerName: 'ID', width: 70 },
                { field: 'name', headerName: 'Name', width: 130 },
                { field: 'lastName', headerName: 'Last Name', width: 130 },
                { field: 'books.id', headerName: 'Books ID', width: 130 }],

            author:[]
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/authors')
            .then(res => {
                console.log(res);
                this.setState({author: res.data});
            }).catch(error=> console.log(error))
    }

    render() {
        return(

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={this.state.author} columns={this.state.columns} checkboxSelection/>
            </div>
        )
    }
}
export default AuthorList