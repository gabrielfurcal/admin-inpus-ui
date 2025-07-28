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
            cityId
            imageUrl
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
            cityId
            imageUrl
        }
    }
`

export const GET_SCHEDULE_BY_ID = gql`
    query getScheduleById($id: Int!) {
        scheduleById(id: $id) {
            id
            train {
                id
                type
            }
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
            arrivalTime
            status {
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
            train {
                id
                type
            }
            route {
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
            arrivalTime
            status {
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