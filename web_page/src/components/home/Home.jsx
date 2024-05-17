import React from "react";
import Button from '@mui/material/Button';

const Home = () => {
    return(
        <>
            <div className="homepage"
                style={{
                    display: "flex",
                    alignItems:"center",
                    justifyContent:"center",
                    height:"500px"
                }}
            >
            <Button variant="contained">Home Page</Button>
            </div>
        </>
    )
}

export default Home;
