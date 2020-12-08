import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Utils/SearchFilter";
import {Button} from "react-bootstrap";
import NewQuote from "./NewQuote";
import {connect} from "react-redux";
import {deleteQuote, fetchQuotes} from "../../store/actions/QuoteActionTypes/quoteActions";
import {fetchAuthors} from "../../store/actions/AuthorActionsTypes/authorActions";

class QuoteList extends Component{


    componentDidMount() {
        this.props.fetchQuotes();
        this.props.fetchAuthors();
    };


    render() {
        return(
            <div>
                <Form inline>
                    <FormControl id="myInput" type="text" onChange={SearchFilter} placeholder="Search" className="mr-sm-2" />
                </Form>
                <Table striped bordered hover size="sm" id="myTable" >
                    <thead>
                    <tr >
                        <th>Content</th>
                        <th>Author</th>
                    </tr>
                    </thead>
                    <tbody>{this.props.quote.map(q=>
                        <tr key={q.id}>
                            <td>{q.content}</td>
                            {q.author!=null?
                                <td>{q.author.name + " " + q.author.lastName}</td>
                                : <td>""</td>}
                            <td>
                                <Button variant="warning">Details</Button>{' '}
                                <Button variant="danger" onClick={this.props.deleteQuote.bind(this, q.id)}>Delete</Button>
                            </td>
                        </tr>
                    )}</tbody>
                    <tbody>
                        <NewQuote/>
                    </tbody>
                </Table>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        quote:state.quote.quotesData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchQuotes:()=>dispatch(fetchQuotes()),
        fetchAuthors:()=>dispatch(fetchAuthors()),
        deleteQuote:(quoteId)=>dispatch(deleteQuote(quoteId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteList)
