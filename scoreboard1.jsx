// Make a component called Application
// Components are uppercase
// Components return a virtual DOM element

	// ADDED PROP PARAMETER SO RENDER CAN SEND STUFF TO THE COMPONNENT

function Application(props){

	return(
		
		<div className="scoreboard">

			<div className="header">
			
				<h1>{props.title}</h1>
			</div>
			<div className="teams">
				
				<div className="team">
					<div className="team-name">Alabama</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
							<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
				<div className="team">
					<div className="team-name">Clemson</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
							<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>

			</div>
		</div>
		)
}

// THIS TAKES 2 PARAMETERS AND PLACES THEM IN THE DOM
// 1 THE COMPONENT TO RENDER
// 2 WHERE TO RENDER IT

ReactDOM.render(
	<Application title="National Championship Scoreboard" />,
	document.getElementById('container')
)