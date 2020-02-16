import React from 'react'
import logo from '../../assets/images/marker.png'

class Find extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fname: "",
			lname: "",
			city: "",
			people: [],
			filteredpeople: [],
			submitted: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		fetch('/api/v1/persons.json')
		.then((response) => {return response.json()})
		.then((data) => {
			this.setState({ people: data })
			console.log(data)
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.setState({ submitted: true })
		const fname = event.target.fname.value
		const lname = event.target.lname.value
		const city = event.target.city.value
		var newPeople = this.state.people.filter((person) => (person.lname.toLowerCase() == lname.toLowerCase() || lname == "") && 
			(person.fname.toLowerCase() == fname.toLowerCase() || fname == "") && 
			(person.city.toLowerCase() == city.toLowerCase() || city == ""))
		//console.log(queryResults)
		this.setState({
			filteredpeople: newPeople
		})
	}

	handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render() {
    	var people = this.state.filteredpeople.map((person) => {
			return (
				<div key={person.id} className="person">
					<h1>{person.fname} {person.lname}</h1>
					<img src={logo} style={{height: "15px"}}/><p style={{display: "inline"}}> {person.city}</p>
					<p>family member 1: {person.member1}</p>
					<p>family member 2: {person.member2}</p>
					<p>date of check-in: {person.created_at.substring(0,10)}</p>
				</div>
			)
		})

        return (
            <div className="find-page" style={{height: this.state.submitted ? "" : "100vh"}}>
            	<form className="form" onSubmit={this.handleSubmit} style={{display: this.state.submitted ? "none" : ""}}>
            		<h1>Find Someone</h1>
					<input
						type="text"
						name="fname"
						placeholder="First Name"
						value={this.state.fname}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="lname"
						placeholder="Last Name"
						value={this.state.lname}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="city"
						placeholder="City"
						value={this.state.city}
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
				<div className="people-list" style={{display: this.state.submitted ? "" : "none"}}><div style={{height: "100%"}}>{people}</div></div>
            </div>
        )
    }
}

export default Find