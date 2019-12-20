import React, { Component } from 'react';
import Axios from 'axios';
import './Main.css';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataApi: []
        }
    }

    componentDidMount() {
        Axios.get(`https://randomuser.me/api?results=5`).then(res => {
            this.setState({
                dataApi: res.data.results
            })
        });
    }
    // .then((result) => {

    render() {
        return (
            <div className="body">
                <h1 className="title1">Selamat Datang di API Maulana Hidayat</h1>
                <hr />
                {this.state.dataApi.map((dat, index) => {
                    return (
                        <div className="content">
                            <div className="datamain" key={index}>
                                <p>{dat.name.title}&nbsp;{dat.name.first}&nbsp;{dat.name.last}</p>

                                <img src={dat.picture.thumbnail} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>

        );
    }
}


export default Main;