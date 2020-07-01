import React from 'react';
import {connect } from 'react-redux';
import HistorialCompra from './HistorialCompra';


const HistorialCompraContainer = ({ historial }) =>{

    return (
        <HistorialCompra historial={historial}/>
    )
};

const mapStateToProps = (state) =>{
    return {
        historial:state.comprasReducer.data
    };
};


export default connect(mapStateToProps,null)(HistorialCompraContainer);