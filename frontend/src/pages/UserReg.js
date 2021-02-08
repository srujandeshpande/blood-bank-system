import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



export default function UserReg() {
    const classes = useStyles();
    const [regData, setRegData] = React.useState({
        name: '',
        phone: '',
        email: '',
        bloodgroup:0,
        dob:'',
        address:'',
        city:'',
        state:'',
        pincode:'',
        password:'',
    });

    const handleDateChange = (date) => {
        setRegData({
            ...regData,
            dob: date,
        });
    };
    const handleChange = (event) => {
        const name = event.target.name;
        setRegData({
            ...regData,
            [name]: event.target.value,
        });
        console.log(regData);
    };

    return (
        <div>
            <div>
                User Login
                <form id="user-login-form" className={classes.root} noValidate autoComplete="off">
                    <TextField id="login-user-email" label="Email Address" variant="outlined" />
                    <TextField id="login-user-password" label="Password" variant="outlined" type="password" />
                    <Button variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </div>
            <hr />
            <div>
                User Registration Form
                <form id="user-reg-form" className={classes.root} noValidate autoComplete="off">
                    <TextField id="reg-user-name" label="Name" variant="outlined" name="name" onChange={handleChange}/>
                    <TextField id="reg-user-phone" label="Phone Number" variant="outlined" name="phone" onChange={handleChange}/>
                    <TextField id="reg-user-email" label="Email Address" variant="outlined" type="email" name="email" onChange={handleChange}/>
                    <InputLabel id="demo-customized-select-label">Age</InputLabel>
                    <FormControl className={classes.formControl}>
                        <Select
                            native
                            value={regData.bloodgroup}
                            onChange={handleChange}
                            inputProps={{
                                name: 'bloodgroup',
                                id: 'reg-user-age',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={1}>A+ve</option>
                            <option value={2}>A-ve</option>
                            <option value={3}>B+ve</option>
                            <option value={4}>B-ve</option>
                            <option value={5}>O+ve</option>
                            <option value={6}>O-ve</option>
                            <option value={7}>AB+ve</option>
                            <option value={8}>AB-ve</option>
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="reg-user-dob"
                                label="Date of Birth"
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField id="reg-user-address" label="Address" variant="outlined" name="address" onChange={handleChange}/>
                    <TextField id="reg-user-city" label="City" variant="outlined" name="city" onChange={handleChange}/>
                    <TextField id="reg-user-state" label="State" variant="outlined" name="state" onChange={handleChange}/>
                    <TextField id="reg-user-pincode" label="Pincode" variant="outlined" name="pincode" onChange={handleChange}/>
                    <TextField id="reg-user-password" label="Password" variant="outlined" type="password" name="password" onChange={handleChange}/>
                    <Button id="reg-user" variant="contained" color="primary">
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
}
