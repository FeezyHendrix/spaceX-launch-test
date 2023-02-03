export interface Link {
        patch: {
                small: string;
                large: string;
        };
        reddit: {
                campaign: any;
                launch: string;
                media: any;
                recovery: any;
        };
        flickr: {
                small: string[];
                original: string[];
        };
        presskit: any;
        webcast: string;
        youtube_id: string;
        article: any;
        wikipedia: string;
}

export interface Crew {
        crew: string;
        role: string;
}

export interface Core {
        core: string;
        flight: number;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        landing_attempt: boolean;
        landing_success: boolean;
        landing_type: string;
        landpad: string;
}

export interface Data {
        fairings: any;
        links: Link;
        static_fire_date_utc: any;
        static_fire_date_unix: any;
        net: boolean;
        window: any;
        rocket: string;
        success: boolean;
        failures: any[];
        details: any;
        crew: Crew[];
        ships: any[];
        capsules: string[];
        payloads: string[];
        launchpad: string;
        flight_number: number;
        name: string;
        date_utc: string;
        date_unix: number;
        date_local: string;
        date_precision: string;
        upcoming: boolean;
        tbd: boolean;
        launch_library_id: string;
        id: string;
        cores: Core[];
        auto_update: boolean;
}
