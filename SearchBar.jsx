import React from 'react'

import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material'; 
import { Search } from '@mui/icons-material';


//implement searchbar
const SearchBar = () => {
  return (

    //a paper is a simple div with a  white background and simple elevation 
    <Paper component='form' onSubmit= {() => {}}
    sx = {{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2, //padding left is 2 
        boxShadow: 'none',
        mr: { sm : 5 }, //margin right set to 5 ONLY on small devices 
    }}
    >

        <input type = "text"
        className ="search-bar"
        placeholder= ""
        value= "Search..."
        onChange = {() => {}}
        /> 

        <IconButton type = "submit" sx={{p:'8px', color: 'red' }}
        >
        <Search />
        </IconButton>

    </Paper>
  )
}

export default SearchBar