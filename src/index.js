import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PlaygroundDetails from './PlaygroundDetails';
import PlaygroundCard from './PlaygroundCard';


const App = () => {
    return (
        <div>
            <div>
                <PlaygroundCard>
                    <PlaygroundDetails
                        playgroundImg = "../public/tilles6.png/100px180"
                        name="Tilles Park"
                        location="Hampton and Fyler Avenues"
                        neighborhood="North Hampton neighborhood, South City, St. Louis, MO"
                    />
                </PlaygroundCard>
            </div>
            
        </div>
        
    );
};


ReactDOM.render(<App />, document.getElementById('root')); 

