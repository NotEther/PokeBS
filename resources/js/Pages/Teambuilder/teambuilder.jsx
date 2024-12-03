import React from 'react';

const TeamBuilder = ({ teams, maxTeams }) => {
    return (
        <div>
            <h1>Team Builder</h1>
            <p>You can build up to {maxTeams} teams!</p>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>{team}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeamBuilder;
