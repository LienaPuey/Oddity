export interface DetailResponse {
  id:                                 string;
  url:                                string;
  slug:                               string;
  flightclub_url:                     string;
  r_spacex_api_id:                    null;
  name:                               string;
  status:                             NetPrecision;
  last_updated:                       Date;
  updates:                            Update[];
  net:                                Date;
  net_precision:                      NetPrecision;
  window_end:                         Date;
  window_start:                       Date;
  probability:                        number;
  weather_concerns:                   null;
  holdreason:                         string;
  failreason:                         string;
  hashtag:                            null;
  launch_service_provider:            LaunchServiceProvider;
  rocket:                             Rocket;
  mission:                            Mission;
  pad:                                Pad;
  infoURLs:                           URL[];
  vidURLs:                            URL[];
  webcast_live:                       boolean;
  image:                              string;
  infographic:                        null;
  program:                            any[];
  orbital_launch_attempt_count:       number;
  location_launch_attempt_count:      number;
  pad_launch_attempt_count:           number;
  agency_launch_attempt_count:        number;
  orbital_launch_attempt_count_year:  number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year:      number;
  agency_launch_attempt_count_year:   number;
  mission_patches:                    MissionPatch[];
}

export interface URL {
  priority:      number;
  title:         string;
  description:   string;
  feature_image: null | string;
  url:           string;
}

export interface LaunchServiceProvider {
  id:                              number;
  url:                             string;
  name:                            string;
  featured:                        boolean;
  type:                            string;
  country_code:                    string;
  abbrev:                          string;
  description:                     string;
  administrator:                   string;
  founding_year:                   string;
  launchers:                       string;
  spacecraft:                      string;
  launch_library_url:              string;
  total_launch_count:              number;
  consecutive_successful_launches: number;
  successful_launches:             number;
  failed_launches:                 number;
  pending_launches:                number;
  consecutive_successful_landings: number;
  successful_landings:             number;
  failed_landings:                 number;
  attempted_landings:              number;
  info_url:                        string;
  wiki_url:                        string;
  logo_url:                        string;
  image_url:                       string;
  nation_url:                      string;
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

export interface MissionPatch {
  id:        number;
  name:      string;
  priority:  number;
  image_url: string;
  agency:    Agency;
}

export interface Agency {
  id:   number;
  url:  string;
  name: string;
  type: string;
}

export interface Pad {
  id:                           number;
  url:                          string;
  agency_id:                    number;
  name:                         string;
  info_url:                     null;
  wiki_url:                     string;
  map_url:                      string;
  latitude:                     string;
  longitude:                    string;
  location:                     PadLocation;
  country_code:                 string;
  map_image:                    string;
  total_launch_count:           number;
  orbital_launch_attempt_count: number;
}

export interface PadLocation {
  id:                  number;
  url:                 string;
  name:                string;
  country_code:        string;
  map_image:           string;
  timezone_name:       string;
  total_launch_count:  number;
  total_landing_count: number;
}

export interface Rocket {
  id:               number;
  configuration:    Configuration;
  launcher_stage:   LauncherStage[];
  spacecraft_stage: null;
}

export interface Configuration {
  id:                              number;
  url:                             string;
  name:                            string;
  active:                          boolean;
  reusable:                        boolean;
  description:                     string;
  family:                          string;
  full_name:                       string;
  manufacturer:                    LaunchServiceProvider;
  program:                         Program[];
  variant:                         string;
  alias:                           string;
  min_stage:                       number;
  max_stage:                       number;
  length:                          number;
  diameter:                        number;
  maiden_flight:                   Date;
  launch_cost:                     string;
  launch_mass:                     number;
  leo_capacity:                    number;
  gto_capacity:                    number;
  to_thrust:                       number;
  apogee:                          number;
  vehicle_range:                   null;
  image_url:                       string;
  info_url:                        string;
  wiki_url:                        string;
  total_launch_count:              number;
  consecutive_successful_launches: number;
  successful_launches:             number;
  failed_launches:                 number;
  pending_launches:                number;
  attempted_landings:              number;
  successful_landings:             number;
  failed_landings:                 number;
  consecutive_successful_landings: number;
}

export interface Program {
  id:              number;
  url:             string;
  name:            string;
  description:     string;
  agencies:        Agency[];
  image_url:       string;
  start_date:      Date;
  end_date:        null;
  info_url:        null | string;
  wiki_url:        string;
  mission_patches: any[];
}

export interface LauncherStage {
  id:                     number;
  type:                   string;
  reused:                 boolean;
  launcher_flight_number: number;
  launcher:               Launcher;
  landing:                Landing;
  previous_flight_date:   Date;
  turn_around_time_days:  number;
  previous_flight:        PreviousFlight;
}

export interface Landing {
  id:                 number;
  attempt:            boolean;
  success:            boolean;
  description:        string;
  downrange_distance: null;
  location:           LandingLocation;
  type:               NetPrecision;
}

export interface LandingLocation {
  id:                  number;
  name:                string;
  abbrev:              string;
  description:         string;
  location:            null;
  successful_landings: number;
}

export interface Launcher {
  id:                  number;
  url:                 string;
  details:             string;
  flight_proven:       boolean;
  serial_number:       string;
  status:              string;
  image_url:           string;
  successful_landings: number;
  attempted_landings:  number;
  flights:             number;
  last_launch_date:    Date;
  first_launch_date:   Date;
}

export interface PreviousFlight {
  id:   string;
  name: string;
}

export interface Update {
  id:            number;
  profile_image: string;
  comment:       string;
  info_url:      string;
  created_by:    CreatedBy;
  created_on:    Date;
}

export enum CreatedBy {
  CosmicPenguin = "Cosmic_Penguin",
  HituraNobad = "hitura-nobad",
  Ll2 = "LL2",
  Nosu = "Nosu",
}
