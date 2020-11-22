import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            book:[{
                id:'',
                title:'',
                isbn:'',
                pages:'',
                author:{
                    id:'',
                    name:'',
                    lastName:''
                }
            }]
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/api/books')
            .then(res => {
                this.setState({book: res.data});
            }).catch(error=> console.log(error))
    }

    render() {
        debugger
        return(
            <div>
                <Form inline>
                    <FormControl type="text" id="myInput" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Table striped bordered hover size="sm" id="myTable"  >
                    <thead>
                        <tr >
                            <th>Title</th>
                            <th>ISBN</th>
                            <th>Pages</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody> {this.state.book.map(b=>
                        <tr key={b.id}>
                            <td>{b.title}</td>
                            <td>{b.isbn}</td>
                            <td>{b.pages}</td>
                            <td>{b.author.name+" "+b.author.lastName}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default BookList