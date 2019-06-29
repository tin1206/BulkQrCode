import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class CodeForm extends React.Component {
  constructor(){
    super()
    this.state = {code_text: "", show_pdf: false}
  }

  onsubmit = () => {
    let text = this.state.code_text.split('\n')
    this.props.generate_code(text)
    this.setState({
      code_text: "",
      show_pdf: true
    })
  }

  handleChange = (event) => {
    this.setState({
      code_text: event.target.value
    })
  }

  handleClick = (event) => {
    this.props.open_print_window()
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
      <Grid container
      direction="row"
      justify="space-between"
      alignItems="flex-end"
      >
       <Grid item xs={3}>
        <Button variant="contained" color="default" onClick = {this.onsubmit}>
        Generate Codes
        </Button>
        </Grid>

        {this.state.show_pdf ?
        <Grid item xs={3}>
         <Button variant="contained" color="default" onClick={this.handleClick}>Print</Button>
         </Grid>: ""
       }
      </Grid>
      </div>
    )
  }
}


export default CodeForm
