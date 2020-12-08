import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import image from '../image.jpg'

export default class Home extends Component{

    render() {
        return (
            <div >
                <Card>
                    <h1>THIS IS YOUR LIBRARY</h1>
                </Card>
                <img src={image} height={800} width={1000} alt="libraryImage"/>
            </div>
        );
    }
}