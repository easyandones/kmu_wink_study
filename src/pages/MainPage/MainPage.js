import React, { Component } from 'react';

import './MainPage.css';

import Weather from '../../components/Weather/Weather.js';

export default class MainPage extends Component {
    API_KEY = "1c9a7a71fc2df9338a7605e4358f0e64";
    API_SERVER = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + this.API_KEY;

    constructor(props) {
        super(props);
        this.state = {city: "Seoul", weather: {}};
        this.onChange = this.onChange.bind(this);
    }

    async getWeather(city) {
        const readResult = await fetch(
            this.API_SERVER.replace("{city name}", city),
            {
                method: "get"
            }
        );
        const readJson = await readResult.json();
        const propsData = {
            name: readJson.name,
            weather: readJson.weather[0].main,
            description: readJson.weather[0].description,
            icon: "https://openweathermap.org/img/w/" + readJson.weather[0].icon + ".png"
        };
        this.setState({city: this.state.city, weather: propsData});
    };

    componentDidMount() {
        this.getWeather(this.state.city);
    }

    onChange(event) {
        this.getWeather(event.target.value);
    }

    render() {
        return (
            <div className="MainPage">
                <select name="city" onChange={this.onChange}>
                    <option value="Seoul">서울</option>
                    <option value="Busan">부산</option>
                </select>
                <Weather weather={this.state.weather} />
            </div>
        );
    }
}