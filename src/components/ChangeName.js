import React, { Fragment} from 'react';
import '../App.css';

import { setUser } from '../reducrers/info'
import { connect } from "react-redux"
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
        </Fragment>
    );
  
}

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