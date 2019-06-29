import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import QRCode from 'qrcode.react'


function TabContainer(props) {
  return (
      <div>
        <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
        </Typography>
        <input type = "text" />
      </div>
  );
}



TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '70%',
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
      top: '23%',
      left: '18%'
    },
  }));

  function QrCode() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
      setValue(newValue);
    }

    return (
        <div className={classes.root}>
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="desktop"
            centered={true}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
    </Grid>
        <QRCode value = "try" />
    </div>

  );
}

export default QrCode;
