import React from 'react'

class NewPerson extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fname: "",
			lname: "",
			city: "",
			member1: "",
			member2: "",
			submitted: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		this.setState({ submitted: true })
		const fname = event.target.fname.value
		const lname = event.target.lname.value
		const city = event.target.city.value
		const member1 = event.target.member1.value
		const member2 = event.target.member2.value
		let body = JSON.stringify({person: {fname: fname, lname: lname, city: city, member1: member1, member2: member2}})
		//console.log(body)

		fetch('/api/v1/persons', {
      		method: 'POST',
      		headers: {
        		'Content-Type': 'application/json'
      		},
      		body: body,
    		})
		}

	handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

	render() {
		return (
			<div className="new-person-page">
				<form className="form" onSubmit={this.handleSubmit} style={{display: this.state.submitted ? "none" : ""}}>
					<h1>Check In</h1>
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
					<input
						type="text"
						name="member1"
						placeholder="Family Member 1"
						value={this.state.member1}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="member2"
						placeholder="Family Member 2"
						value={this.state.member2}
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
				<div className="form" style={{display: this.state.submitted ? "" : "none"}}>
					<h1>Congratulations!</h1>
					<p>your friends and family members will now be able to check on your status</p>
				</div>
			</div>
		)
	}
}

export default NewPerson
