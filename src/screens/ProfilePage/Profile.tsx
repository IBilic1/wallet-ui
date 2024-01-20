import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import {useGetUserQuery} from "../../store/query/auth.query";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";

export default function Profile() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar()

    const { data: userData, isLoading, isError } = useGetUserQuery();
    if (userData?.email!="")
    {

    }
    console.log(userData)
    // Check loading and error states
    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }
    //
    // if (isError) {
    //     return <p>Error loading user data</p>;
    // }

    // Access user data
    const user = userData; // Adjust the property name based on your API response structure

    function handleEditClick() {

    }

    return (
        <Grid container spacing={2} id='content'>
            <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', marginLeft:'2vw' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                    <div style={{ display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', marginRight: '1vw' }}>
                            Personal Info!
                        </Typography>
                        <Button variant='contained' color='primary' onClick={handleEditClick}>
                            EDIT INFO
                        </Button>
                    </div>
                    {user && (
                        <div>
                            <p>Name: {user.firstName} {user.lastName}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    )}

                    <div>
                        <p><b>Name:</b> TestName TestSurname</p>
                        <p><b>Email:</b> test@mail.com</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} >
                <div style={{background: "darkgray", width: "100%", height:"100%"}}></div>
            </Grid>
        </Grid>
    )
}