import React from 'react'

class AllPersons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: []
		};
		this.handleDelete = this.handleDelete.bind(this)
		this.deletePerson = this.deletePerson.bind(this)
	}

	deletePerson(id) {
		var newPeople = this.state.people.filter((person) => person.id !== id)
		this.setState({
			people: newPeople
		})
	}

	handleDelete(id) {
	    fetch('/api/v1/persons/' + id, 
	    {
	      method: 'DELETE',
	      headers: {
	        'Content-Type': 'application/json'
	      }
	    }).then((response) => { 
	        this.deletePerson(id)
	      })
  	}

	componentDidMount() {
		fetch('/api/v1/persons.json')
		.then((response) => {return response.json()})
		.then((data) => {this.setState({ people: data })})
	}

	render(){
		var people = this.state.people.map((person) => {
			return (
				<div key={person.id}>
					<h1>{person.fname} {person.lname}</h1>
					<p>{person.city}</p>
					<button onClick={() => this.handleDelete(person.id)}>Delete</button>
				</div>
			)
		})
		return (
			<div>
				{people}
			</div>
		)
	}
}

export default AllPersons