import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import Grid from '@material-ui/core/Grid';



class CodeContainer extends React.Component{
   render(){
     let qr_codes = this.props.codes.map((code) =>
             <Grid item xs = {3}><QRCode value = {code} /><p>{code}</p></Grid>
   )
     return(
       <Grid container spacing={3}>
       {qr_codes}
       </Grid>
     )
   }
}

export default CodeContainer
