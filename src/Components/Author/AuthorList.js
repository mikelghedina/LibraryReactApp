import React from 'react';
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import SearchFilter from "../../Utils/SearchFilter";
import {Button} from "react-bootstrap";
import NewAuthor from "./NewAuthor";
import {connect} from 'react-redux'
import {deleteAuthor, fetchAuthors} from "../../store/actions/authorActions";

class AuthorList extends React.Component{


    componentDidMount() {
        this.props.fetchAuthors()
    }


    render() {
        return(
            <div>
                <Form inline>
                    <FormControl type="text" id="myInput" onChange={SearchFilter} placeholder="Search" className="mr-sm-2" />
                </Form>
                <Table striped bordered hover size="sm" id="myTable">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                    </tr>
                    </thead>
                    <tbody>{this.props.author.map(a=>
                        <tr key={a.id}>
                            <td>{a.name}</td>
                            <td>{a.lastName}</td>
                            <td>
                                <Button variant="warning" >Details</Button>{' '}
                                <Button variant="danger" onClick={this.props.deleteAuthor.bind(this, a.id)}>Delete</Button>
                            </td>
                        </tr>)}
                    </tbody>
                    <tbody>
                        <NewAuthor/>
                    </tbody>
                </Table>
            </div>
        )
    }
}
//We use Redux so we pass the data we store on Redux Store to this component via Props. This way
//we can use easily all the data we need.
const mapStateToProps=(state)=>{
    return{
        author:state.author.authorsData
    }
}
//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps=dispatch=>{
    return{
        fetchAuthors:()=>dispatch(fetchAuthors()),
        deleteAuthor:(authorId)=> dispatch(deleteAuthor(authorId))
    }
}
//We use connect from redux to be able to "connect" the state and actions from our store in this component class.
export default connect(mapStateToProps,mapDispatchToProps)(AuthorList)
