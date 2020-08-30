import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PostTest from './PostTest.js';



class Home extends Component {
    render(){
        return(
            <div>
                <h1>this is my content. Hello World!</h1>
                <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' />
                <PostTest/>
                <br/><br/>
                <br/><br/>
            </div>
        );
    }
}
export default Home;