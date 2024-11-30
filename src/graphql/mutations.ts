import { gql } from "@apollo/client";

export const SAVE_CITY = gql`
    mutation saveCity($city: CityInput!) {
        saveCity(city: $city) {
            id
            city
            province
            country
        }
    }
`

export const DELETE_CITY = gql`
    mutation deleteCity($id: Int!) {
        deleteCity(id: $id)
    }
`

export const SAVE_EMPLOYEE = gql`
    mutation saveEmployee($employee: EmployeeInput!) {
        saveEmployee(employee: $employee) {
            id
            firstName
            lastName
            position
            phoneNumber
            email
        }
    }
`

export const DELETE_EMPLOYEE = gql`
    mutation deleteEmployee($id: Int!) {
        deleteEmployee(id: $id)
    }
`

export const SAVE_STATUS = gql`
    mutation saveStatus($status: StatusInput!) {
        saveStatus(status: $status) {
            id
            name
            description
        }
    }
`

export const DELETE_STATUS = gql`
    mutation deleteStatus($id: Int!) {
        deleteStatus(id: $id)
    }
`

export const SAVE_TRAIN = gql`
    mutation saveTrain($train: TrainInput!) {
        saveTrain(train: $train) {
            id
            type
            capacity
            maxSpeed
        }
    }
`

export const DELETE_TRAIN = gql`
    mutation deleteTrain($id: Int!) {
        deleteTrain(id: $id)
    }
`

export const SAVE_STATION = gql`
    mutation saveStation($station: StationInput!) {
        saveStation(station: $station) {
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

export const DELETE_STATION = gql`
    mutation deleteStation($id: Int!) {
        deleteStation(id: $id)
    }
`

export const SAVE_SCHEDULE = gql`
    mutation saveSchedule($schedule: ScheduleInput!) {
        saveSchedule(schedule: $schedule) {
            id
            train {
                type
            }
            route {
                startStation {
                    name
                }
                endStation {
                    name
                }
            }
            departureTime
            arrivalTime
            status {
                name
            }
        }
    }
`

export const DELETE_SCHEDULE = gql`
    mutation deleteSchedule($id: Int!) {
        deleteSchedule(id: $id)
    }
`

export const SAVE_ROUTE = gql`
    mutation saveRoute($route: RouteInput!) {
        saveRoute(route: $route) {
            id
            startStation {
                name
            }
            endStation {
                name
            }
            distance
        }
    }
`

export const DELETE_ROUTE = gql`
    mutation deleteRoute($id: Int!) {
        deleteRoute(id: $id)
    }
`