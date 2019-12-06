import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadIcon from './LoadIcon';


class App extends React.Component{
    state = {lat : null , errMessage : ""};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat : position.coords.latitude});
            },
            (err) => {
                this.setState({errMessage : err.message});
            }
            );
    }
    render() {
        if(this.state.lat && !this.state.errMessage) {
             return <SeasonDisplay lat={this.state.lat} />
        }

        if(!this.state.lat && this.state.errMessage) {
            return <div>Error: {this.state.errMessage}</div>
        }
        
        return <div><LoadIcon  /></div>
    
    }

} 

ReactDOM.render(<App /> , document.getElementById("root"));

