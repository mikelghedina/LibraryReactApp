import React, {Component} from 'react'
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addQuote} from "../../store/actions/quoteActions";

class NewQuote extends Component{

    state={
        id:'',
        content:'',
        author:{
            id:''
        }
    }

    handleOnClickAddQuote=(newQuote)=>{
        console.log(this.state)
        this.props.addQuote(newQuote)
        this.setState(
            {
                content:''
            })
    }

    render() {
        return(
            <tr>
                <td><FormControl type="text" placeholder="Add title" value={this.state.content}
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
const mapStateToProps=state=>{
    return{
        author:state.author.authorsData
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addQuote:(quote)=>dispatch(addQuote(quote))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewQuote)
