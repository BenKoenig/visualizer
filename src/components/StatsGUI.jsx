import '../scss/components/StatsGUI.scss'
import axios from 'axios';
import {useEffect, useState} from "react";

const StatsGUI = () => {
    const [forestData, setForestData] = useState([]);

    useEffect(() => {
        fetchForestData();
    }, []);

    const fetchForestData = async () => {
        // Replace the URL with the specific GFW API endpoint you want to call
        const apiUrl = 'https://api.globalforestwatch.org/v1/dataset';

        try {
            // Using fetch
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Using Axios (uncomment if using Axios)
            // const { data } = await axios.get(apiUrl);

            setForestData(data.data);
        } catch (error) {
            console.error('Error fetching data from GFW API:', error);
        }
    };

    return(
        <div className="container">
            <div className={"container__item"}>
                <p>test</p>
            </div>
            <div className={"container__item"}>
                <p>test</p>
            </div>
            <div className={"container__item"}>
                <p>test</p>
            </div>
            <div className={"container__item"}>
                <p>test</p>
            </div>
            <ul>
                {forestData.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default StatsGUI

