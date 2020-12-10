import React, {Component} from 'react'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addQuote} from "../../store/actions/quoteActions";

class NewQuote extends Component{
//We define a state with the attributes of the new Quote we will add, also only the author id to assign the author we want.
    state={
        id:'',
        content:'',
        author:{
            id:''
        }
    }
//On click function handler to add the new quote to our database.
    handleOnClickAddQuote=(newQuote)=>{
        console.log(this.state)
        this.props.addQuote(newQuote)
        //Setting the state empty so we can add a new quote later.
        this.setState(
            {
                content:''
            })
    }

    render() {
        return(
            <tr>
                <td><FormControl type="text" placeholder="Add Quote" value={this.state.content}
                                 onChange={(event) => this.setState({content: event.target.value})}/></td>
                <td>
                    <Form.Control as="select" custom value={this.state.author.id}
                                  onChange={(event)=>(this.setState({...this.state, author: {id: event.target.value}}))}>
                        {this.props.author.map(a=>
                            <option value={a.id} key={a.id}>{a.name + " " + a.lastName}</option>
                        )}</Form.Control>
                </td>
                <td><Button onClick={this.handleOnClickAddQuote.bind(this, this.state)}>Add Quote</Button></td>
            </tr>
        )
    }
}
//We use Redux so we pass the data we store on Redux Store to this component via Props. This way
//we can use easily all the data we need.
const mapStateToProps=state=>{
    return{
        author:state.author.authorsData
    }
}
//We use Redux to dispatch all the actions we stored in our store configuration. This way we pass all the actions
//as props to this component and we can use this functions as props.
const mapDispatchToProps=dispatch=>{
    return{
        addQuote:(quote)=>dispatch(addQuote(quote))
    }
}
//We use connect from redux to be able to "connect" the state and actions from our store in this component class.
export default connect(mapStateToProps, mapDispatchToProps)(NewQuote)
