import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import { useStyleSearchInput } from "../../styles/styles";

const SearchForm = ({ handleInputChange, handleSearch }) => {
    const style = useStyleSearchInput()
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                alignItems="center"
            >
                <TextField
                    className={style.textField}
                    placeholder='Search For Songs or Episodes'
                    onChange={handleInputChange}
                    size="small"
                />
                <Button
                    size="small"
                    variant="contained"
                    className={style.button}
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                >
                   {!matches && 'Search'}
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default SearchForm;