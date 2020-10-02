import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getStream } from '../../../action/action'



const StreamShow = (props) => {

    useEffect(()=>{
        const getData = function(id){
            props.getStream(id)
        }

        getData(props.match.params.id)
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    return (

        <div>
            <h1>Show</h1>
            <h3>{props.stream && props.stream.title}</h3>
        </div>
    );
}


const mapStateToProps = (state,ownProps)=>{
    return {stream : state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{getStream})(StreamShow);