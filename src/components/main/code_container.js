import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './qr_code.css'



class CodeContainer extends React.Component{
   render(){
     let qr_codes = this.props.codes.map((code) =>
             <Grid item xs = {2}>
             <p>
              <QRCode value = {code} size={60} />
             </p>
              <p class="qr_code">{code}</p><
             /Grid>
   )
     return(
       <Paper style={{paddingLeft:"4%"}} id={'code_container'}>
       <Grid container
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
