import React from 'react'

class About extends React.Component {
	render() {
		return (
			<div className="about-page">
				<div className="form">
					<h1>About Us</h1>
					<p>We are a global company that provides an API platform for disaster relief. Third party companies are able
					to connect directly to our platform through API endpoints to allow their customers to checkin or find
					loved ones from anywhere in the world.</p>
					<p>Primarily, our goal is to work closely with relief foundations and first responders in disaster situations
					to make sure family members are quickly able to locate loved ones and reconnect during these stressful 
					circumstances.</p>
					<p>For more information about the project, send an email to jgerovac@ryerson.ca and we will get back to you
					as soon as possible.</p>
				</div>
			</div>
		)
	}
}

export default About