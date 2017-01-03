function Application(props){
	// Capital letters in React means COMPONENT
	// Components return a single DOM element
	return(
		<div className="application">
			<h1>{props.title}</h1>
			{props.message}
			</div>
	)
}

ReactDOM.render(
	<Application message="Hello, Class" title="React Day!" />,
	document.getElementById('container')
)