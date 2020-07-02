import React, {Component} from 'react'
import './Heading.css'

class Heading extends Component{
    render(){
        return(
            <div class="section-heading">
                <h1>Recent<br/><em>Projects</em></h1>
                <p>Praesent pellentesque efficitur magna, 
                <br/>sed pellentesque neque malesuada vitae.</p>
            </div>
        )
    }
}

export default Heading