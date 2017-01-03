
// PROPS ARE IMMUTABLE, THEY DONT CHANGE
//STATE IS A PIECE OF DATA, THAT DOES NOT CHANGE
// STATE ALSO HAS AN INITIAL VALUE THAT CHANGES WHEN X HAPPENS
// IN THE CASE OF THE NATIONAL CHAMPIONSHIP THIS BEGINS AT SCORE 0
// IN ORDER TO USE STATE, WE HAVE TO MAKE OUR FUNCTIONS INTO REACT CLASSES






// Make a component called Application
// Components are uppercase
// Components return a virtual DOM element

	// ADDED PROP PARAMETER SO RENDER CAN SEND STUFF TO THE COMPONNENT

var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers"
	}
]

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
		)
}

function Team(props){
	return(
	<div className="team">
		<div className="team-name">{props.name}</div>
		<Counter score={props.score} />
	</div>
		)
}
// React.creatClass is a React component class that takes an Object
// the only required property is RENDER
var Counter = React.createClass({
	getInitialState: function() {
		return {score: 0}
	},
	losePoint: function(){
		console.log("you clicked on the down button")
		this.setState({
			score: (this.state.score -1)
		})
	},
	gainPoint: function(){
		console.log("you clicked on the up button")
		this.setState({
			score: (this.state.score +1)
		})
	},
	render: function(){
		return(
			<div className="counter">
				<button onClick={this.losePoint} className="counter-change minus">-</button>
					<div className="team-score">{this.state.score}</div>
				<button onClick={this.gainPoint} className="counter-change plus">+</button>
			</div>
		)
	}
});


function Application(props){

	return(
		
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
		
				{props.teams.map((team, index) =>{
					return <Team key={index} name={team.name} score={team.score} />
				})}
			</div>
		</div>
	)
}

// THIS TAKES 2 PARAMETERS AND PLACES THEM IN THE DOM
// 1 THE COMPONENT TO RENDER
// 2 WHERE TO RENDER IT

ReactDOM.render(
	<Application title="National Championship Scoreboard" teams={teams} />,
	document.getElementById('container')
)