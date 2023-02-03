import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import LaunchData from "../components/LaunchData";
import { fetchNextRocketLaunch } from "../data/fetchData";
import { Data } from "../models/launchData.model";

const Next: React.FC = () => {
        const [nextLaunch, setNextLaunch] = useState<Data | undefined>();
        const navigation = useNavigation();

        const fetchData = async () => {
                try {
                        const nextData =
                                (await fetchNextRocketLaunch()) satisfies Data;
                        setNextLaunch(nextData);
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
                        {nextLaunch !== undefined && (
                                <LaunchData data={nextLaunch!} />
                        )}
                </>
        );
};

export default Next;
