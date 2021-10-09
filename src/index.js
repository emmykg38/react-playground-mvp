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
                        name="Shaw"
                        location="Tower Grove"
                    />
                </PlaygroundCard>
            </div>
            
        </div>
        
    );
};


ReactDOM.render(<App />, document.getElementById('root')); 

