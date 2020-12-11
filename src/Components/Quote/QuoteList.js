import React, {Component} from 'react';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Utils/SearchFilter";
import {Button} from "react-bootstrap";
import NewQuote from "./NewQuote";
import {connect} from "react-redux";
import {deleteQuote, fetchQuotes} from "../../store/actions/QuoteActionsTypes/quoteActions";
import {fetchAuthors} from "../../store/actions/AuthorActionsTypes/authorActions";

class QuoteList extends Component{

//This way we tell React to fetch all the data we need and build it in render the moment we render the app.
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
//We use Redux so we pass the data we store on Redux Store to this component via Props. This way
//we can use easily all the data we need.
const mapStateToProps=state=>{
    return{
        quote:state.quote.quotesData
    }
}
//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps=dispatch=>{
    return{
        fetchQuotes:()=>dispatch(fetchQuotes()),
        fetchAuthors:()=>dispatch(fetchAuthors()),
        deleteQuote:(quoteId)=>dispatch(deleteQuote(quoteId))
    }
}
//We use connect from redux to be able to "connect" the state and actions from our store in this component class.
export default connect(mapStateToProps, mapDispatchToProps)(QuoteList)
