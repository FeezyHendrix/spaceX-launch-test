import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import {
        fetchLatestRocketLaunch,
        fetchNextRocketLaunch,
} from "../data/fetchData";
import { Data } from "../models/launchData.model";

const HomePage: React.FC = () => {
        const [latestLaunch, setLatestLaunch] = useState<Data>();
        const [nextLaunch, setNextLaunch] = useState<Data>();
        const navigation = useNavigation();

        const fetchData = async () => {
                try {
                        const latestData =
                                (await fetchLatestRocketLaunch()) satisfies Data;
                        const nextData =
                                (await fetchNextRocketLaunch()) satisfies Data;

                        setLatestLaunch(latestData);
                        setNextLaunch(nextData);
                } catch (error) {
                        console.log(error);
                }
        };

        useEffect(() => {
                fetchData();
        }, []);
        return (
                <div style={{ padding: "20px" }}>
                        <div style={{ textAlign: 'center'}}>
                                <h1>
                                        {new Date(
                                                latestLaunch?.date_utc!
                                        ).toDateString()}
                                </h1>
                                <a href="/latest">Last Rocket Launch</a>
                        </div>


                        <br />
                        <div style={{ textAlign: 'center'}}>
                                <h1>
                                        {new Date(
                                                nextLaunch?.date_utc!
                                        ).toDateString()}
                                </h1>
                                <a href="/next">Next Rocket Launch</a>
                        </div>
                </div>
        );
};

export default HomePage;
