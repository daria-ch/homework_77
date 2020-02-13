import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import './FormBlock.css';

class FormBlock extends Component {
    render() {
        return (
            <Form>
                <FormGroup style={{marginBottom: 0}}>
                    <Label for="author" className='author'>Name</Label>
                    <Input type="text" name='author' id="author" placeholder="Anonymous" autoComplete='off'/>
                </FormGroup>
                <FormGroup style={{marginBottom: 0}}>
                    <Label for="message" className='comment'>Comment</Label>
                    <Input type="textarea" name="message" id="message" required/>
                </FormGroup>
                <FormGroup style={{marginBottom: 0}}>
                    <Label for="image" className='image'>File</Label>
                    <Input type="file" name="image" id="image"/>
                </FormGroup>
                <Button color="secondary" size="sm">Post</Button>
            </Form>
        );
    }
}

export default FormBlock;