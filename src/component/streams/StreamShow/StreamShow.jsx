import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getStream } from '../../../action/action';
import flv from 'flv.js'



class StreamShow extends Component{

    constructor(props) {
        super(props);

        this.videoRef= 
    }
    // useEffect(()=>{
    //     const getData = function(id){
    //         props.getStream(id)
    //     }

    //     getData(props.match.params.id)
    // },[])// eslint-disable-line react-hooks/exhaustive-deps


    componentDidMount(){
        this.props.getStream(this.rops.match.params.id)
    }

    render(){
        
        return (
                
                <div>
        
                    <video></video>
        
                    <h1>Show</h1>
                    <h3>{this.props.stream && this.props.stream.title}</h3>
                    <p>{this.props.stream && this.props.stream.description}</p>
        
        
                </div>
            );
        }




}


const mapStateToProps = (state,ownProps)=>{
    return {stream : state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{getStream})(StreamShow);