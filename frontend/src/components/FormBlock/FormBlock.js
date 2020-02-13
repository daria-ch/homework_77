import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import './FormBlock.css';

class FormBlock extends Component {

    state = {
        author: '',
        message: '',
        image: ''
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.onSubmit(formData);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };


    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <FormGroup style={{marginBottom: 0}}>
                    <Label for="author" className='author'>Name</Label>
                    <Input type="text" name='author' id="author" placeholder="Anonymous" autoComplete='off'
                           value={this.state.author}
                           onChange={this.inputChangeHandler}/>
                </FormGroup>
                <FormGroup style={{marginBottom: 0}}>
                    <Label for="message" className='comment'>Comment</Label>
                    <Input type="textarea" name="message" id="message" required
                           value={this.state.message}
                           onChange={this.inputChangeHandler}/>
                </FormGroup>
                <FormGroup style={{marginBottom: 0}}>
                    <Label for="image" className='image'>File</Label>
                    <Input type="file" name="image" id="image"
                           onChange={this.fileChangeHandler}/>
                </FormGroup>
                <Button color="secondary" size="sm">Post</Button>
            </Form>
        );
    }
}

export default FormBlock;