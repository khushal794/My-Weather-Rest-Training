import axios from "axios";




import React, { Component } from "react";




class WeatherDataDisplay extends Component {




    constructor() {




        super();




        this.state = {




            weatherData: null




        }




        this.getData = this.getData.bind(this);







    }




    componentDidMount() {




        this.getData();




    }




    getData() {




        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10&appid=d8b847b59febee7c62722667accd23fb";



        axios.get(apiUrl)




            .then((response) => response.data)




            .then((data) => this.setState({ weatherData: data }))




            .catch((err) => {




                console.log(err.message)




            })







    }




    render() {




        let { weatherData } = this.state;




        console.log(weatherData)




        return (




            <section>




                <h1> Khushal Sharma </h1>




                {




                    (weatherData) ?




                        <>




                            <table>




                                <tbody>




                                    {




                                        Object.keys(weatherData.coord).map((key, i) => (




                                            <tr key={i}>




                                                <td><label>{key}</label></td>




                                                <td><input readonly disabled value={weatherData.coord[key]} /></td>




                                            </tr>




                                        ))




                                    }




                                    {




                                        Object.keys(weatherData.main).map((key, i) => (




                                            <tr key={i}>




                                                <td><label>{key}</label></td>




                                                <td><input readonly disabled value={weatherData.main[key]} /></td>




                                            </tr>




                                        ))




                                    }




                                    {




                                        Object.keys(weatherData.wind).map((key, i) => (




                                            <tr key={i}>




                                                <td><label>{key}</label></td>




                                                <td><input readonly disabled value={weatherData.wind[key]} /></td>




                                            </tr>




                                        ))




                                    }




                                </tbody>




                            </table>




                        </>




                        :






                        <div>




                            no Data Available




                        </div>




                }




            </section>




        )




    }




}




export default WeatherDataDisplay;