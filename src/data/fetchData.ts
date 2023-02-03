import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v5/launches";

export async function fetchLatestRocketLaunch() {
        try {
                const { data } = await axios.get(`${BASE_URL}/latest`)
                return data;
        } catch (error) {
                console.error(error)
                return error
        }
}

export async function fetchNextRocketLaunch() {
        try {
                const { data } = await axios.get(`${BASE_URL}/next`)
                return data;
        } catch (error) {
                console.error(error)
                return error
        }
}