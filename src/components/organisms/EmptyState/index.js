import React from 'react'
import {
    makeStyles
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '../../atoms/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: '90px',
        alignContent: 'center',
        'align-items': 'center',
    },

}));


export default function BlogContentCard(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root} >
            <Box>
                <img src={props.image} alt='slow-network'/>
            </Box>
            <Box>
                <Typography variant='h3' >
                    {props.title}
                </Typography>
            </Box>
            <Box>
                <Typography variant='body1' >
                    {props.body}
                </Typography>
            </Box>
        </Box>
    );
}