import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Stories.module.css';
const api = `http://localhost:3001/`;
const SearchStory = (props) => {
    const [userName, setUserName] = useState(props.searchValue);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate(`../../stories/search/${userName}`);
    };
    return (<div className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.textInput}>
                <input className={classes.input}
                    type="text"
                    placeholder="Search By Author"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
            </div>
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    </div>);

}

export default SearchStory;