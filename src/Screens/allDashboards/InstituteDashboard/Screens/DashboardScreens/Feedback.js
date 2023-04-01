import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SMModal from "../../../../components/SMModal";
import SmInput from "../../../../components/SMInput";
import { PostDtInFB } from "../../../../Firebase/Config/FirebaseMethods";



function Feeds() {

    const [values, setValues] = useState({});


    const sendFeedsDTinFB = () => {
       
        PostDtInFB("Feeds", values)
            .then((res) => {
                console.log(res, 'Feedback Sended Successfully in DataBase')
            })
            .catch((err) => {
                console.log(err, 'Not Sended! Some Error')
            })

    }

    return <>
        <h1>this is feedback screen</h1>
        <SMModal title='Add Your Feedback Here'
            innercontent={
                <Box>
                    <Grid container >

                        <Grid item md={6} className="mt-4 w-100" >
                            <SmInput
                                label='Enter Name'
                                variant='standard'
                                value={values.name}
                                onChange={(e) => {
                                    setValues({ ...values, name: e.target.value})
                                }}
                            />
                        </Grid>

                        <Grid item md={6} className='mt-4'>
                            <SmInput
                                label='Enter e-mail'
                                variant='standard'
                                value={values.email}
                                onChange={(e) => {
                                    setValues({ ...values, email: e.target.value })
                                }}
                            />

                        </Grid>

                        <Grid item md={4} className='mt-4'>
                            
                            <SmInput
                                label='Enter Message'
                                variant='standard'
                                value={values.message}
                                onChange={(e) => {
                                    setValues({ ...values, message: e.target.value })
                                }}

                            />
                        
                        </Grid>
                    </Grid>
                    
                    <Box className='mt-4 d-flex justify-content-center align-items-center'>
                
                        <Button
                            onClick={() => sendFeedsDTinFB()}
                            variant='contained'
                            color="warning"
                        >
                            Submit
                        </Button>
                
                    </Box>
                
                </Box>
            }
        />
    </>
}

export default Feeds;