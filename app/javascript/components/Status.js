import React from 'react'

class Status extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			city: "",
			weather: {},
			submitted: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		this.setState({ submitted: true })

		fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=36cdad6235eced65ac3b7cf24ead1902&units=metric')
		.then((response) => {return response.json()})
		.then((data) => {
			this.setState({ weather: data })
		})

	}

	handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

	render() {
		return (
			<div className="status-page">
				<form className="form" onSubmit={this.handleSubmit} style={{display: this.state.submitted ? "none" : ""}}>
            		<h1>Check Disaster Status</h1>
					<input
						type="text"
						name="city"
						placeholder="City"
						value={this.state.city}
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
				<div className="form" style={{display: this.state.submitted ? "" : "none"}}>
					<h1>{this.state.weather.name}, {this.state.weather.sys ? this.state.weather.sys.country : " "}</h1>
					<p>Temperature: {this.state.weather.main ? this.state.weather.main.temp : " "} &#8451;</p>
					<p>Weather Description: {this.state.weather.weather ? this.state.weather.weather[0].description : " "}</p>
					<p>Wind Speed: {this.state.weather.wind ? this.state.weather.wind.speed : " "} m/s</p>
				</div>
			</div>
		)
	}
}

export default Status