import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import './code_form.css'





class CodeForm extends React.Component {
  constructor(){
    super()
    this.state = {code_text: ""}
  }

  onsubmit = () => {
    console.log("onClick");
    console.log(this.state.code_text)
    let text = this.state.code_text.split('\n')
    this.props.generate_code(text)
    this.setState({
      code_text: ""
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      code_text: event.target.value
    })
  }
  render(){
    return(
      <div>
      <TextField
        label="Enter Value To Generate Codes"
        style={{ margin: 8 }}
        fullWidth
        multiline
        rows="5"
        margin="normal"
        variant="filled"
        className = "code_area"
        onChange = {(event) => this.handleChange(event)}
        value = {this.state.code_text}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <button onClick = {this.onsubmit}>Generate Codes</button>
      </div>
    )
  }
}


export default CodeForm
