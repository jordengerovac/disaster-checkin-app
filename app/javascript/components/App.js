import React from 'react'
import AllPersons from './AllPersons.js'
import logo from '../../assets/images/doctor.png'

class App extends React.Component {
    render() {
        return (
            <div>
            	<div className="site">
                    <div className="logo-div">
                        <img className="main-img" src={logo} />
                    </div>
            		<a className="post-status" href="./new"><div><h2>Check In</h2></div></a>
            		<a className="find-person" href="./find"><div><h2>Find A Person</h2></div></a>
            		<a className="about" href="./about"><div><h2>About Us</h2></div></a>
            		<a className="disaster-status" href="./status"><div><h2>Check Disaster Status</h2></div></a>
            	</div>
            	{/* <AllPersons /> */}
            </div>
        )
    }
}

export default App