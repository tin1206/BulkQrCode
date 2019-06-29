import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



class CodeContainer extends React.Component{
   render(){
     let qr_codes = this.props.codes.map((code) =>
             <Grid item xs = {3}><QRCode value = {code} /><p>{code}</p></Grid>
   )
     return(
       <Paper style={{paddingLeft:"4%"}} id={'code_container'}>
       <Grid container spacing={4}
       direction="row"
       justify="center"
       alignItems="center"
       >
       {qr_codes}
       </Grid>
       </Paper>
     )
   }
}

export default CodeContainer
