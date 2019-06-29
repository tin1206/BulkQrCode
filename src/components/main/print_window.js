import React,{ Component } from "react";
import NewWindow from 'react-new-window';
import CodeContainer from './code_container'

const PrintWindow = (props) => (
  <NewWindow>
    <div>
      <CodeContainer codes = {props.codes} />
    </div>
  </NewWindow>
)

export default PrintWindow
