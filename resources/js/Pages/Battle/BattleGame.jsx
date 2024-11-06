import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const BattleGame = ({ battleId, battleType }) => {
    return (
        <div>
            <Helmet>
                <title>Battle Simulator - {battleType}</title>
                <link rel="icon" href="/favicons/logo.png" type="image/png" />
            </Helmet>
            <h2>Welcome to the Battle!</h2>
            <p>Battle ID: {battleId}</p>
            <p>Battle Type: {battleType}</p>
        </div>
    );
};

export default BattleGame;
