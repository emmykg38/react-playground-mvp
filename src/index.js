import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PlaygroundDetails from './PlaygroundDetails';
import PlaygroundCard from './PlaygroundCard';
import ccLakeUpper from './images/cclakeupper.jpg';
import tilles from './images/tilles.jpg';
import tillesPlayground from './images/tillesplayground.jpg';


const App = () => {
    return (
        <div>
            <div>
                <PlaygroundCard>
                    <PlaygroundDetails
                        playgroundImg = {tillesPlayground}
                        name="Tilles Park"
                        location="Hampton and Fyler Avenues"
                        neighborhood="North Hampton neighborhood, South City, St. Louis, MO"
                        listItemOne="Shady playground area"
                        listItemTwo="Splashpad in the summer"
                        listItemThree="Bathrooms nearby"
                    />
                </PlaygroundCard>
            </div>
            
        </div>
        
    );
};



ReactDOM.render(<App />, document.getElementById('root')); 


