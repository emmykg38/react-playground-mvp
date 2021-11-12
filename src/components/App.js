import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation';
import { Navbar } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import CardItem from './CardItem';
import AllCards from './AllCards';



const tillesMapLink = "https://www.google.com/maps/place/Tilles+Park/@38.6004652,-90.2916472,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8b59aa67d372b:0xe6e780b7fe23bb17!8m2!3d38.6004652!4d-90.2894532";

const creveCouerLakeLink = "https://www.google.com/maps/place/Creve+Coeur+Lake/@38.7154818,-90.4938074,15z/data=!3m1!4b1!4m5!3m4!1s0x87df2dca7a3cd231:0xbbbdc18bde2553a3!8m2!3d38.7161801!4d-90.4844505";

const deerCreekParkLink= "https://goo.gl/maps/urcHkYBxf8v3CTqR9";



//figure out way to take in props as argument to display the cards


class App extends React.Component {
    render () {
        return (
            <div>
                <div>
                <Navigation />

                </div>
                <div className="render-cards">
                    <div>
                        <AllCards>
                            <CardItem
                            />
                        </AllCards>
                    </div>
                </div>
            </div>
    
        );



    };
};


const RenderPlaygroundCard = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};


export default App;


