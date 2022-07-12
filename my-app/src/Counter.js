import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.dividir = this.dividir.bind(this);
    this.multipliq = this.multipliq.bind(this);
  }

  add() {
    //this.setState({ count: this.state.count + 1 });
    this.setState((state)=>{return{count: state.count + 1}});
  }

 remove(){
    this.setState((state)=>{return{count: state.count - 1}});
 }
 multipliq(){
    this.setState((state)=>{return{count: state.count * 2}});
 }

 dividir(){
    this.setState((state)=>{return{count: state.count / 2}});
 }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button id="bt" onClick={this.add}>+</button>
        <button id="bt" onClick={this.remove}>--</button>
        <button id="bt" onClick={this.multipliq}>X</button>
        <button  id="bt" onClick={this.dividir}>/</button>
      </div>
    );
  }
}
export default Counter;
