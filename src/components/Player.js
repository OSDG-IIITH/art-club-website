// use the command "npm install react-player --save" to install react player if not working

//-------------------------------------------------------------------------//


//This code should be used in App.js as shown below where Player.js should 
//be in in "components" folder inside src

//import React from "react";
// import Player from "./components/Player.js";

// const App = () => {
//   return (

//     <div >
//use paragraph to keep some distance 
// { <p>
//     lorem ipsum
// </p> }
//       <Player />
//     </div>
//   );
// };


// export default App;


//------------------------------------------------------------------------//

//This should be written in "index.css" file to place the video in center

// .player-container {
//     height: 100%;
//     display: flex;
//     justify-content: center;
//   }

//------------------------------------------------------------------------//


import React from "react";
import ReactPlayer from "react-player";


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.player = React.createRef();
        this.state = { inView: false }; //if the video has to be placed initially it has to be kept at
        //some distance from marhin for code to work
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    };

    handleScroll = e => {
        const element = this.player.current;
        const bounding = element.getBoundingClientRect();

        const inView =
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        this.setState(state => {
            if (state.inView !== inView) {
                console.log("Player is:", inView);
                return { inView: inView };
            }
        });
    };
    //place the video url here
    link_taken = "https://www.youtube.com/watch?v=V1Pl8CzNzCw";

    render() {
        return (
            <div className="player-container" ref={this.player}>
                <ReactPlayer
                    //The video link holder should be placed here
                    url={this.link_taken}
                    playing={this.state.inView}
                />
            </div>
        );
    }
}

export default Player;
