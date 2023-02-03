import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import LaunchData from "../components/LaunchData";
import { fetchLatestRocketLaunch } from "../data/fetchData";
import { Data } from "../models/launchData.model";

const Latest: React.FC = () => {
        const [latestLaunch, setLatestLaunch] = useState<Data | undefined>();
        const navigation = useNavigation();

        const fetchData = async () => {
                try {
                        const latestData =
                                (await fetchLatestRocketLaunch()) satisfies Data;
                        setLatestLaunch(latestData);
                } catch (error) {
                        console.log(error);
                }
        };

        useEffect(() => {
                fetchData();
        }, []);

        return (
                <>
                        <a href="/">Back Home</a>
                        {latestLaunch !== undefined && (
                                <LaunchData data={latestLaunch} />
                        )}
                </>
        );
};

export default Latest;
