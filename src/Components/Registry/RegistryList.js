import React, {Component} from "react";
import SearchFilter from "../../Utils/SearchFilter";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Table from "react-bootstrap/Table";
import {fetchRegistries} from "../../store/actions/RegistryActionsTypes/registryActions";
import {connect} from "react-redux";


class RegistryList extends Component{

//This way we tell React to fetch all the data we need and build it in render the moment we render the app.
    componentDidMount() {
        this.props.fetchRegistry();
    };

    render() {
        return(
            <div>
                <Form inline>
                    <FormControl type="text" id="myInput" onChange={SearchFilter} placeholder="Search" className="mr-sm-2" />
                </Form>
                <Table striped bordered hover size="sm" id="myTable">
                    <thead>
                    <tr >
                        <th>User</th>
                        <th>Book</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>{this.props.registry.map(r=>
                        <tr key={r.id}>
                            <td>{r.user.username}</td>
                            <td>{r.book[0].title}</td>
                            <td>{r.date}</td>
                        </tr>
                    )}</tbody>
                </Table>
            </div>
        )
    }
}
//We use Redux so we pass the data we store on Redux Store to this component via Props. This way
//we can use easily all the data we need.
const mapStateToProps=state=>{
    return{
        registry:state.registry.registriesData
    }
}
//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps=dispatch=>{
    return{
        fetchRegistry:()=>dispatch(fetchRegistries())
    }
}
//We use connect from redux to be able to "connect" the state and actions from our store in this component class.
export default connect(mapStateToProps, mapDispatchToProps)(RegistryList)
