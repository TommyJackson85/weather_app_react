// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


//Create a react component
class App extends React.Component {
    //function based component.
    constructor(props) {
        super(props);
        //ONLY TIME THIS CALL STATE
        this.state = { lat: null, lon: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition (
            position => {
                //SET STATE FOR NOW ON
                this.setState({ lat: position.coords.latitude });
                console.log(position)
            },
            err => { 
                this.setState({ errorMessage: err.message })
                console.log(err) 
            }
            //do_something(position.coords.latitude, position.coords.longitude)
        );
    }

    //helper function
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    <h1>Error: {this.state.errorMessage}.</h1>
                </div>
            )
        }
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            )
        }
        return <Spinner message="Please accept location request" />
    }


    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}
//backup message, etc.


// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);