import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Typography  from '@material-ui/core/Typography';
import './BookShow.css';
import Home from '../home/Home';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';


class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            language: "",
            showDate: "",
            showTime: "",
            tickets: 0,
            unitPrice: 500,
            availableTickets: 20,
            reqLocation: "dispNone",
            reqLanguage: "dispNone",
            reqShowDate: "dispNone",
            reqShowTime: "dispNone",
            reqTickets: "dispNone"
        }
    }


    backToDetailsHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    locationChangeHandler = event => {
        this.setState({ location: event.target.value });
    }

    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }

    showDateChangeHandler = event => {
        this.setState({ showDate: event.target.value });
    }

    showtimeChangeHandler = event => {
        this.setState({ showTime: event.target.value });
    }

    ticketsChangeHandler = (event) => {
        this.setState({ tickets: event.target.value })
    }

    bookShowButtonHandler = () => {
        this.state.location === "" ? this.setState({ reqLocation: "dispBlock" }) : this.setState({ reqLocation: "dispNone" });
        this.state.language === "" ? this.setState({ reqLanguage: "dispBlock" }) : this.setState({ reqLanguage: "dispNone" });
        this.state.showDate === "" ? this.setState({ reqShowDate: "dispBlock" }) : this.setState({ reqShowDate: "dispNone" });
        this.state.showTime === "" ? this.setState({ reqShowTime: "dispBlock" }) : this.setState({ reqShowTime: "dispNone" });
        this.state.tickets === 0 ? this.setState({ reqTickets: "dispBlock" }) : this.setState({ reqTickets: "dispNone" });
    }


    render() {
        return (
            <div>
                <Header />
                <div className="back-de">
                    <Typography onClick={this.backToDetailsHandler}>
                        &#60; Back to Details
                    </Typography>

                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography> <br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqLocation}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl> <br /><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}
                                >
                                    {language.map(lan => (
                                        <MenuItem key={"lan" + lan.id} value={lan.language}>
                                            {lan.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqLanguage}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl> <br /> <br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showDate">Choose Show Date:</InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showDateChangeHandler}
                                >
                                    {showDate.map(shd => (
                                        <MenuItem key={"shd" + shd.id} value={shd.showDate}>
                                            {shd.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqShowDate}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl> <br /> <br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showTime">Choose Show Time:</InputLabel>
                                <Select
                                    value={this.state.showTime}
                                    onChange={this.showtimeChangeHandler}
                                >
                                    {showTime.map(sht => (
                                        <MenuItem key={"sht" + sht.id} value={sht.showTime}>
                                            {sht.showTime}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText className={this.state.reqShowTime}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl> <br /> <br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets">Tickets: ( {this.state.availableTickets} available )</InputLabel>
                                <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""} onChange={this.ticketsChangeHandler} />
                                <FormHelperText className={this.state.reqTickets}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Typography>
                                Unit Price: Rs. {this.state.unitPrice}
                            </Typography>
                            <br />
                            <Typography>
                                Total Price: Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography>
                            <br /><br />
                            <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                                BOOK SHOW
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow; 