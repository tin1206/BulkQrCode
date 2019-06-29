import React,{ Component } from "react";
import CodeForm from "./code_form"
import Container from '@material-ui/core/Container';
import CodeContainer from './code_container'


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.state = {codes: []}
    }

    generate_code = (codes) => {
      this.setState(
        {
          codes: codes
        }
      )
    }


    render(){
        return(
            <Container fixed>
            <div>
              <CodeForm generate_code = {this.generate_code}/>
              </div>
              <br/>
              <CodeContainer codes = {this.state.codes} />
            </Container>
        )
    }
}

export default Main
