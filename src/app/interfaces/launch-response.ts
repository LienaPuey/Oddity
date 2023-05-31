export interface SearchResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  LaunchResponse[];
}

export interface LaunchResponse {
    id:                                 string;
    url:                                string;
    slug:                               string;
    name:                               string;
    status:                             NetPrecision;
    last_updated:                       Date;
    net:                                Date;
    window_end:                         Date;
    window_start:                       Date;
    net_precision:                      NetPrecision;
    probability:                        number | null;
    holdreason:                         string;
    failreason:                         string;
    hashtag:                            null;
    launch_service_provider:            LaunchServiceProvider;
    rocket:                             Rocket;
    mission:                            Mission;
    pad:                                Pad;
    webcast_live:                       boolean;
    image:                              null | string;
    infographic:                        null;
    program:                            Program[];
    orbital_launch_attempt_count:       number;
    location_launch_attempt_count:      number;
    pad_launch_attempt_count:           number;
    agency_launch_attempt_count:        number;
    orbital_launch_attempt_count_year:  number;
    location_launch_attempt_count_year: number;
    pad_launch_attempt_count_year:      number;
    agency_launch_attempt_count_year:   number;
}

export interface LaunchServiceProvider {
    id:   number;
    url:  string;
    name: string;
    type: Type;
}

export enum Type {
    Commercial = "Commercial",
    Government = "Government",
    Multinational = "Multinational",
}

export interface Mission {
    id:                number;
    name:              string;
    description:       string;
    launch_designator: null;
    type:              string;
    orbit:             NetPrecision;
}

export interface NetPrecision {
    id:           number;
    name:         string;
    abbrev:       string;
    description?: string;
}

export interface Pad {
    id:                           number;
    url:                          string;
    agency_id:                    number | null;
    name:                         string;
    info_url:                     null;
    wiki_url:                     string;
    map_url:                      string;
    latitude:                     string;
    longitude:                    string;
    location:                     Location;
    country_code:                 CountryCode;
    map_image:                    string;
    total_launch_count:           number;
    orbital_launch_attempt_count: number;
}

export enum CountryCode {
    Guf = "GUF",
    Prk = "PRK",
    Usa = "USA",
}

export interface Location {
    id:                  number;
    url:                 string;
    name:                string;
    country_code:        CountryCode;
    map_image:           string;
    timezone_name:       string;
    total_launch_count:  number;
    total_landing_count: number;
}

export interface Program {
    id:              number;
    url:             string;
    name:            string;
    description:     string;
    agencies:        LaunchServiceProvider[];
    image_url:       string;
    start_date:      Date;
    end_date:        null;
    info_url:        null | string;
    wiki_url:        string;
    mission_patches: any[];
}

export interface Rocket {
    id:            number;
    configuration: Configuration;
}

export interface Configuration {
    id:        number;
    url:       string;
    name:      string;
    family:    string;
    full_name: string;
    variant:   string;
}