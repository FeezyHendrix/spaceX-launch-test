import React from "react";
import { Crew, Data, Link } from "../models/launchData.model";

interface LaunchDataProps {
        data: Data;
}

const LaunchData: React.FC<LaunchDataProps> = ({ data }) => {
        console.log(data);
        const {
                fairings,
                links,
                success,
                crew,
                ships,
                launch_library_id,
                name,
                date_utc,
        } = data;

        return (
                <div style={styles.container as React.CSSProperties}>
                        <h2 style={styles.header}>{name} Launch Data</h2>
                        <p style={styles.subHeader}>Launch Date: {date_utc}</p>
                        <div
                                style={
                                        styles.sectionContainer as React.CSSProperties
                                }
                        >
                                <h3 style={styles.sectionHeader}>
                                        Launch Info
                                </h3>
                                <p style={styles.sectionText}>
                                        Success: {success ? "Yes" : "No"}
                                </p>
                                <p style={styles.sectionText}>
                                        Fairings: {fairings !== null ? "Yes" : "No"}
                                </p>
                                <p style={styles.sectionText}>
                                        Ships:{" "}
                                        {ships.length > 0
                                                ? ships.join(", ")
                                                : "N/A"}
                                </p>
                        </div>
                        <div
                                style={
                                        styles.sectionContainer as React.CSSProperties
                                }
                        >
                                <h3 style={styles.sectionHeader}>Crew Info</h3>
                                {crew.map((c: Crew, index: number) => (
                                        <p
                                                key={index}
                                                style={styles.sectionText}
                                        >
                                                {c.role}: {c.crew}
                                        </p>
                                ))}
                        </div>
                        <div
                                style={
                                        styles.sectionContainer as React.CSSProperties
                                }
                        >
                                <h3 style={styles.sectionHeader}>Links</h3>
                                
                                <p style={styles.sectionText}>
                                        Launch Library ID: {launch_library_id}
                                </p>
                               

                        </div>
                </div>
        );
};

const styles = {
        container: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "30px",
        },
        header: {
                fontSize: "2em",
                marginBottom: "20px",
        },
        subHeader: {
                fontSize: "1.5em",
                marginBottom: "30px",
        },
        sectionContainer: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "30px",
                width: "80%",
        },
        sectionHeader: {
                fontSize: "1.75em",
                marginBottom: "20px",
        },
        sectionText: {
                fontSize: "1.5em",
                marginBottom: "10px",
        },
};

export default LaunchData;
