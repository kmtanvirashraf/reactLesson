import React from 'react';
//

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDispaly = (props) => {
    console.log(props);
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    const icon = season === 'winter' ? "snowflake" : 'sun';
    return (
        <div>
            <i className={`${icon} icon`}></i>
            <h1>{season === 'winter' ? 'Burr,It is chilly' : 'Beach'}</h1>
        </div>);
};

export default SeasonDispaly;