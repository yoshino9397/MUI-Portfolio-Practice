import React from "react";
import { makeStyles } from '@material-ui/styles';
import Avatar from '@mui/material/Avatar';
import avatar from '../images/avatar.jpg';


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },





}))

const Header = () => {
  const classes = useStyles();
return(
  <Avatar className={classes.avatar} src={avatar} alt="Yoshino Yayama" />
)








}

export default Header;