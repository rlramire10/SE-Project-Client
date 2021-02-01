import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { createProduct } from "../../actions/products";
import './Form.css'

// import { TextField, Button, Typography, Paper} from '@material-ui/core'

const Form = () => {
    const [postData, setPostData] = useState({lookupCode:'', count:0,});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(postData));

    }

    return (
        <form>
            <label className={"inputForm"}>
                <h2>Item Input</h2>
                    <label>
                        ID
                        <input placeholder={"Item lookup code"} name={"lookupCode"} type={"text"} value={postData.lookupCode} onChange={(e) => setPostData({...postData,lookupCode: e.target.value})}/>
                    </label>
                    <label>
                        Qt
                        <input placeholder={"Item Count"} name={"count"} type="number" value={postData.count} onChange={(e) => setPostData({...postData,count: e.target.value})}/>
                    </label>
            </label>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default Form;
