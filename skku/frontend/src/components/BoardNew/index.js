import React from "react";
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';

const { NewBoardContainer, Header, SubmitBtn, SubmitBtnDisabled, Row } = require('./styles')


export const BoardNew = ({ sendPost }) => {

    let depart = sessionStorage.getItem("depart")
    let why = sessionStorage.getItem("why")
    let time
    let time_index = sessionStorage.getItem("time")

    const [title, setTitle] = React.useState('');
    const [category, setCategory] = React.useState(depart);
    const [content, setContent] = React.useState();

    if (!depart) depart = 'None'
    if (!why) why = 'None'

    let button;
    const handleTitle = (event) => { setTitle(event.target.value); };
    const handleContent = (event) => { setContent(event.target.value); };
    const handleCategoryChange = (event) => { setCategory(event.target.value); };

    if (title == '' || category == '' || content == '') button = <SubmitBtnDisabled>Submit</SubmitBtnDisabled>
    else button = <SubmitBtn onClick={() => sendPost(title, content, category)}>Submit</SubmitBtn >

    return (
        <NewBoardContainer>

            <Header>Writing A New Post</Header>
            
            <Row>
                <TextField
                    fullWidth
                    defaultValue={title}
                    variant="standard"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitle}
                />
            </Row>
                
            <Row>
                <FormControl fullWidth sx={{ textAlign: "left" }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        label="Select a category"
                        displayEmpty
                        onChange={handleCategoryChange}>
                        <MenuItem value={1}>Announcement</MenuItem>
                        <MenuItem value={2}>Report</MenuItem>
                        <MenuItem value={3}>Reference</MenuItem>
                    </Select>
                </FormControl>
            </Row>

            <Row>
                <TextField
                    rows={20}
                    multiline
                    fullWidth
                    variant="filled"
                    placeholder="Write Contents..."
                    value={content}
                    onChange={handleContent}
                />
            </Row>
            
            {button}
        
        </NewBoardContainer>

    );
}