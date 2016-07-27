//Button Code
var Button = React.createClass({
//Local Button Increment Call
  localHandleClick: function(){
    this.props.localHandleClick(this.props.increment);
  },
//Button Render
  render: function() {
    return(
      <button onClick={this.localHandleClick}>+{this.props.increment}</button>
      )
  }
});
//Result Render of Button Clicks 
var Result = React.createClass({
  render: function(){
    return(
      <div>{this.props.localCounter}</div>
      )
  }
})
//Main Container 
var Main = React.createClass({
//Initail Button State/Value 0
    getInitialState: function() {
    return {counter: 0};
  },
//Counter State
    handleClick: function(increment){
    this.setState({counter: this.state.counter+increment});
  },
//Button Renders and Increment Values
  render: function(){
    return(
      <div>
       <Button localHandleClick={this.handleClick} increment={1}/>
       <Button localHandleClick={this.handleClick} increment={5}/>
       <Button localHandleClick={this.handleClick} increment={10}/>
       <Button localHandleClick={this.handleClick} increment={15}/>
       <Result localCounter={this.state.counter}/>
      </div>
      )
  }
});

//Render to the HTML <Div> "Root"
ReactDOM.render(<Main />, document.getElementById("root"));