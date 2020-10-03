import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getStream } from '../../../action/action';
import flv from 'flv.js'



class StreamShow extends Component{

    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }
    // useEffect(()=>{
    //     const getData = function(id){
    //         props.getStream(id)
    //     }

    //     getData(props.match.params.id)
    // },[])// eslint-disable-line react-hooks/exhaustive-deps


    componentDidMount(){

        const { id } = this.props.match.params

        this.props.getStream(id)
        this.player = flv.createPlayer({
            type:'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })

        this.player.attachMediaElement(this.videoRef.current)
        this.player.load();
    }

    render(){
        
        return (
                
                <div>
        
                    <video ref={this.videoRef} 

                        style={{width:'100%'}}
                        controls
                    />
        
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