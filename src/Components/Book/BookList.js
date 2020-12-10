import React from 'react';
import Table from 'react-bootstrap/Table'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Utils/SearchFilter";
import NewBook from "./NewBook";
import {connect} from "react-redux";
import {deleteBook, fetchBooks} from "../../store/actions/bookActions";
import {Button} from "react-bootstrap";
import {fetchAuthors} from "../../store/actions/authorActions";


class BookList extends React.Component{

    //This way we tell React to fetch all the data we need and build it in render the moment we render the app.
    componentDidMount() {
        this.props.fetchBooks();
        this.props.fetchAuthors();
    }

    render() {
        return(
            <div>
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
                    <tbody>{this.props.bookList.map(b=>
                    <tr key={b.id}>
                        <td>{b.title}</td>
                        <td>{b.isbn}</td>
                        <td>{b.pages}</td>
                        {b.author!=null?
                            <td>{b.author.name + " " + b.author.lastName}</td>
                            : <td>""</td>}
                        <td>
                            <Button variant="warning">Details</Button>{' '}
                            <Button variant="danger" onClick={this.props.deleteBook.bind(this, b.id)}>Delete</Button>
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
//We use Redux so we pass the data we store on Redux Store to this component via Props. This way
//we can use easily all the data we need.
const mapStateToProps =state=>{
    return{
        bookList:state.book.booksData,
        author:state.author.authorsData
    }
}

//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps = dispatch =>{
    return{
        fetchBooks:()=>dispatch(fetchBooks()),
        fetchAuthors:()=>dispatch(fetchAuthors()),
        deleteBook:(bookId)=>dispatch(deleteBook(bookId))
    }
}

//We use connect from redux to be able to "connect" the state and actions from our store in this component class.
export default connect(mapStateToProps,mapDispatchToProps)(BookList)
