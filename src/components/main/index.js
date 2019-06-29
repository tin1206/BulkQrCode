import React,{ Component } from "react";
import CodeForm from "./code_form"
import Container from '@material-ui/core/Container';
import CodeContainer from './code_container'
import PrintWindow from './print_window'



class Main extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.state = {codes: [], open_window: false}
    }

    generate_code = (codes) => {
      this.setState(
        {
          codes: codes,
          open_window: false
        }
      )
    }

    open_print_window = () => {
     this.setState({open_window: true})
     console.log(this.state.open_window)
    }


    render(){
        return(
            <Container fixed>
            <div>
              <CodeForm generate_code = {this.generate_code} open_print_window = {this.open_print_window}/>
              </div>
              <br/>
              <hr />
              <CodeContainer codes = {this.state.codes} />
              {this.state.open_window ? <PrintWindow codes = {this.state.codes} /> : ""}
            </Container>
        )
    }
}

export default Main
