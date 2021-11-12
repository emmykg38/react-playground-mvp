import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PlaygroundCardStructure from './PlaygroundCardStructure';
import RenderPlaygroundCard from './RenderPlaygroundCard';
import Navigation from '../Navigation';
import { Navbar } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';



const tillesMapLink = "https://www.google.com/maps/place/Tilles+Park/@38.6004652,-90.2916472,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8b59aa67d372b:0xe6e780b7fe23bb17!8m2!3d38.6004652!4d-90.2894532";

const creveCouerLakeLink = "https://www.google.com/maps/place/Creve+Coeur+Lake/@38.7154818,-90.4938074,15z/data=!3m1!4b1!4m5!3m4!1s0x87df2dca7a3cd231:0xbbbdc18bde2553a3!8m2!3d38.7161801!4d-90.4844505";

const deerCreekParkLink= "https://goo.gl/maps/urcHkYBxf8v3CTqR9";


// was in div under navigation
// style= {{ display: "inline-flex" }}

class App extends React.Component {
    render () {
        return (
            <div>
                <Navigation />
                <div className="render-cards">
                    {/* <Stack direction = "horizontal" gap={2}> */}
                <div>
                    <RenderPlaygroundCard>
                        <PlaygroundCardStructure
                        />
                    </RenderPlaygroundCard>
                </div>
                <div>
                    <RenderPlaygroundCard>
                        <PlaygroundCardStructure
                        />
                    </RenderPlaygroundCard>
                </div>
                <div>
                    <RenderPlaygroundCard>
                        <PlaygroundCardStructure
                        /> 
                        </RenderPlaygroundCard>
                </div>
                {/* </Stack> */}
                </div>
            </div>
    
        );



    };
};


export default App;


