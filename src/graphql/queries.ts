import { gql } from "@apollo/client";

export const GET_CITIES = gql`
    query getCities {
        cities {
            id
            city
            province
            country
        }
    }
`

export const GET_CITY_BY_ID = gql`
    query getCityById($id: Int!) {
        cityById(id: $id) {
            id
            city
            province
            country
        }
    }
`
export const GET_EMPLOYEES = gql`
    query getEmployees {
        employees {
            id
            firstName
            lastName
            position
            phoneNumber
            email
        }
    }
`

export const GET_EMPLOYEE_BY_ID = gql`
    query getEmployeeById($id: Int!) {
        employeeById(id: $id) {
            id
            firstName
            lastName
            position
            phoneNumber
            email
        }
    }
`

export const GET_STATUS_BY_ID = gql`
    query getStatusById($id: Int!) {
        statusById(id: $id) {
            id
            name
            description
        }
    }
`

export const GET_STATUS = gql`
    query getStatus {
        status {
            id
            name
            description
        }
    }
`

export const GET_TRAIN_BY_ID = gql`
    query getTrainById($id: Int!) {
        trainById(id: $id) {
            id
            type
            capacity
            maxSpeed
        }
    }
`

export const GET_TRAINS = gql`
    query getTrains {
        trains {
            id
            type
            capacity
            maxSpeed
        }
    }
`

export const GET_STATION_BY_ID = gql`
    query getStationById($id: Int!) {
        stationById(id: $id) {
            id
            name
            countryCode
            phone
            postalCode
            latitude
            longitude
            imageUrl
            timezone {
                id
                name
                region
            }
            city {
                id
                city
                province
                country
            }
        }
    }
`

export const GET_STATIONS = gql`
    query getStations {
        stations {
            id
            name
            countryCode
            phone
            postalCode
            latitude
            longitude
            imageUrl
            timezone {
                id
                name
                region
            }
            city {
                id
                city
                province
                country
            }
        }
    }
`

export const GET_SCHEDULE_BY_ID = gql`
    query getScheduleById($id: Int!) {
        scheduleById(id: $id) {
            id
            route {
                id
                startStation {
                    id
                    name
                }
                endStation {
                    id
                    name
                }
            }
            departureTime
            departureWeekday {
                id
                name
            }
            arrivalTime
            arrivalWeekday {
                id
                name
            }
        }
    }
`

export const GET_SCHEDULES = gql`
    query getSchedules {
        schedules {
            id
            route {
                id
                startStation {
                    id
                    name
                }
                endStation {
                    id
                    name
                }
            }
            departureTime
            departureWeekday {
                id
                name
            }
            arrivalTime
            arrivalWeekday {
                id
                name
            }
        }
    }
`

export const GET_ROUTE_BY_ID = gql`
    query getRouteById($id: Int!) {
        routeById(id: $id) {
            id
            startStation {
                id
                name
            }
            endStation {
                id
                name
            }
            distance
        }
    }
`

export const GET_ROUTES = gql`
    query getRoutes {
        routes {
            id
            startStation {
                id
                name
            }
            endStation {
                id
                name
            }
            distance
        }
    }
`

// New Trip queries
export const GET_TRIPS = gql`
    query getTrips {
        trips {
            id
            schedule {
                id
            }
            train {
                id
                type
            }
            startTime
            endTime
            status {
                id
                name
            }
        }
    }
`

export const GET_TRIP_BY_ID = gql`
    query getTripById($id: Int!) {
        tripById(id: $id) {
            id
            schedule {
                id
            }
            train {
                id
                type
            }
            startTime
            endTime
            status {
                id
                name
            }
        }
    }
`

// New Weekday queries
export const GET_WEEKDAYS = gql`
    query getWeekdays {
        weekdays {
            id
            name
        }
    }
`

export const GET_WEEKDAY_BY_ID = gql`
    query getWeekdayById($id: Int!) {
        weekdayById(id: $id) {
            id
            name
        }
    }
`

// New Timezone queries
export const GET_TIMEZONES = gql`
    query getTimezones {
        timezones {
            id
            name
            region
        }
    }
`

export const GET_TIMEZONE_BY_ID = gql`
    query getTimezoneById($id: Int!) {
        timezoneById(id: $id) {
            id
            name
            region
        }
    }
`