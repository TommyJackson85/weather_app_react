// Import the React and ReactDOM libraries
import './SeasonDisplay.css'; //takes contents puts in the html file.
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Burr hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr its cold!',
        iconName: 'snowflake'
    }
}


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]

    //backticks and $ to put contents into a string.
    return (
        <div className={`season-display ${season}`}>
            <h2>Season Display: {text}</h2>
            <i className={`icon-right ${iconName} icon massive`} />
            <i className={`icon-left ${iconName} icon big`} />
        </div>
    )
}

export default SeasonDisplay;