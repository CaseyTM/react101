function calculate

function Year(props){
	return(
		<p>{props.age}</p>
	)
}

var Calculator = React.createClass({

	getInitialState: function(){
		return{
			value:2016
		}
	},

	handleChange: function(event){
		this.setState({
			value: event.target.value
		})
	},

	render: function(){
		var age = caculate();
		return(
			<div>
				<form>
					<input type="text" placeholder="Birthyear" onChange={this.handleChange} />
					<input type="submit" value="click me" onChange={this.handleChange} />
					<Year age={this.state.value} />
				</form>
			</div>
		)
	}
});

ReactDOM.render(
<Calculator />
document.getElementById('age-calc')
)