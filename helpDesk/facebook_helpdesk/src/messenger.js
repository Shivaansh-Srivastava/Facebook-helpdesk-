import React from "react";
import { Button } from '@mui/material';

class Messenger extends React.Component
{
    constructor()
    {
        super()
        this.openDcp=this.openDcp.bind(this)
    }

    openDcp()
    {
        window.location.href='/connection'
    }

    render()
    {
        return(
            <div className="msg-page">
                <h2>The Messenger will come here</h2>
                <Button variant="contained" sx={{
                    height:'30px',
                    width:'330px',
                    marginTop: '10px',
                    backgroundColor: 'red'
                }}
                onClick={this.openDcp}
                >Go Back</Button>
            </div>
        )
    }
}

export default Messenger