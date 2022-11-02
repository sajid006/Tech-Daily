import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Stories.module.css';
const SearchStoryForm = (props) => {
    const [authorname, setauthorname] = useState(props.searchValue);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!userName)navigate(`/`);
        else{
            console.log(userName);
            navigate(`/stories/search/${userName}`);
        }

    };
    return (<div className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.textInput}>
                <input className={classes.input}
                    type="text"
                    placeholder="Search By Author or Title"
                    value={authorname ? authorname : ""}
                    onChange={(e) => {
                        setauthorname(e.target.value);
                    }}
                />
            </div>
            <button type="submit"><Search/></button>
        </form>
    </div>);

}

export default SearchStoryForm;