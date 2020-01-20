import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Sellect from "./select";
import { setUser } from '../reducrers/info'
import { connect } from "react-redux"
import 'antd/dist/antd.css'

import Dropdown from './Dropdown'
//import './Select.css'
let ChangeName = ({ user, onClick }) =>{
    let input
    return (
        <Fragment>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                return
                }
                onClick(input.value);
            }}>
            <label>
                 Welcome to React {user}
            </label>
            <input ref={node => {
                input = node
            }} />
            </form>
            <Sellect />
            <Sellect />
            <Sellect />
            <Sellect />
            <Dropdown />
        </Fragment>
    );
  
}
ChangeName.user = {
    user: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

function mapStateToProps(state){
  return {
    user: state.userInfo[0].user //TODO
  }
}
function mapDispatchToProps(dispatch, value) {
    return{
        onClick: (value = 'new user') => {dispatch(setUser(value))}  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeName);