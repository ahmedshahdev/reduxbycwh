import React, {useState} from 'react'
import { bindActionCreators} from 'redux';
import {actionCreators} from '../state/index';
import {useDispatch} from 'react-redux'

const Settings = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')



    const {Name} = bindActionCreators(actionCreators, dispatch);

  return (
      <div className=' mt-5'>
          <input type="text" onChange={(e)=>Name(e.target.value)} value={name} style={{width: "300px"}} className=' form-control' placeholder='Your Name'/>

      </div>
  )
}

export default Settings