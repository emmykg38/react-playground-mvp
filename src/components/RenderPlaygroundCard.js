import React from 'react';
import ReactDOM from 'react-dom';







//PREVIOUS CODE BELOW

const RenderPlaygroundCard = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default RenderPlaygroundCard;



// class ImageCard extends React.Component {
//     constructor(props) {
//         super(props);

//         this.imageRef = React.createRef();
//     }


//     render() {
//         const { description, urls } = this.props.image;
//         return (
//             <div>
//                 <img ref={this.imageRef} alt={description} src={urls.regular}></img>
//             </div>
//         );
//     }
// }


// export default ImageCard;