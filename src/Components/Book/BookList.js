import React from 'react';
import Table from 'react-bootstrap/Table'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Utils/SearchFilter";
import NewBook from "./NewBook";
import {connect} from "react-redux";
import {deleteBook, fetchBooks} from "../../store/actions/bookActions";
import {Button} from "react-bootstrap";



class BookList extends React.Component{
    /*constructor(props) {
        super(props);
        this.state= {

        }
    }

    handleDeleteBook =(id)=> {
        axios.delete('/books'+ id)
            .then(res => console.log(res.data)
                /!*if(res.data !=null){
                    this.setState({"show":true})
                    setTimeout(()=> this.setState({"show":false}), 3000)
                    //alert("Book deleted successfully")
                    this.setState({
                        book: this.state.book.filter(book=> book.id !== id)
                    });
                }*!/
            ).catch(error=> console.log(error))
    };*/

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        return(
            <div>
                {console.log(this.props.book)}
                <Form inline>
                    <FormControl id="myInput" type="text" onChange={SearchFilter} placeholder="Search" className="mr-sm-2" />
                </Form>
                <Table striped bordered hover size="sm" id="myTable" >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>ISBN</th>
                            <th>Pages</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>{this.props.book.map(b=>
                    <tr key={b.id}>
                        <td>{b.title}</td>
                        <td>{b.isbn}</td>
                        <td>{b.pages}</td>
                        {b.author!=null?
                            <td>{b.author.name + " " + b.author.lastName}</td>
                            : <td>""</td>}
                        <td>
                            <Button variant="warning">Details</Button>{' '}
                            <Button variant="danger" >Delete</Button>
                        </td>
                    </tr>)}
                    </tbody>
                    <tbody>
                        <NewBook/>
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        book:state.booksData
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchBooks:()=>dispatch(fetchBooks()),
        deleteBook:(bookId)=>dispatch(deleteBook(bookId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
