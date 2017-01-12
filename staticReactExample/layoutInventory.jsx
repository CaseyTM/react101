var products = [
	{
		category: 'Sporting goods',
		price: '$49.99',
		name: 'Football',
		inStock: true 
	},
	{
		category: 'Sporting goods',
		price: '$9.99',
		name: 'Baseball',
		inStock: true 
	},
	{
		category: 'Sporting goods',
		price: '$21.99',
		name: 'Basketball',
		inStock: false 
	},

	{
		category: 'Electronics',
		price: '$99.99',
		name: 'Ipod Touch',
		inStock: true 
	},
	{
		category: 'Electronics',
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true 
	}

]






function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

function ProductRow(props){
	if(props.products.inStock ===true){
		var productClass = "text-success"
	}else{
		var productClass = "text-danger"
	}
	return(
		<tr>
			<td className={productClass}>{props.products.name}</td>
			<td>{props.products.price}</td>
		</tr>
	)
}

function ProductTable(props){
	var rows = [];
	var lastCategory = "";
	var key = 0;
	products.forEach(function(product, index){
		if(product.category != lastCategory){
			rows.push(<ProductCategoryRow key={key} category={product.category} />)
			lastCategory = product.category;
			key ++;
		}
		rows.push(<ProductRow key={key} products={product} />)
		key++
	})
	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}


function SearchBar(props){
	return(
		<form class="search-bar">
			<input type="text" placeholder="Search..." />
			<div>
				<input type="checkbox" /> Only show products in stock
			</div>
		</form>
	)
}


function FilterableProductTable(props){
	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable />
		</div>
	)
}




// we arent using a class yet, so we have to include props as a parameter because there is no "this"


function Application(props){
	// must return a virtual DOM element
	return(
		<FilterableProductTable />
	)

}


ReactDOM.render(
	<Application products={products}/>,
	document.getElementById('container')


	)