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

    state={
        showModal:false
    }

    componentDidMount() {
        this.props.fetchAuthors()
    }
    handleShowDetails=()=>{
        this.setState(prevState=>({showModal:!prevState.showModal}))
        console.log(this.state.showModal)
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
                                <Button variant="warning" onClick={this.handleShowDetails}>Details</Button>{' '}
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

const mapStateToProps=(state)=>{
    return{
        author:state.author.authorsData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchAuthors:()=>dispatch(fetchAuthors()),
        deleteAuthor:(authorId)=> dispatch(deleteAuthor(authorId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthorList)
