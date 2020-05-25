import React from 'react';
import FlareComponent from 'flare-react';
import '../static/homepage.css';

const App = () => {
    return (
        <div style={{marginTop: '-15%', position: 'absolute'}}>
            <FlareComponent 
                transparent="true"
                width={200}
                height={200}
                animationName="plant"
                file="rive_files/plant.flr"
            />
        </div>
    ); 
}

export default App;