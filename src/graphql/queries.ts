import { graphql } from "./gql";

export const GET_CITIES = graphql(`
    query getCities {
        cities {
            id
            city
            province
            country
        }
    }
`)

export const GET_CITIES_PAGE = graphql(`
    query getCitiesPage($offset: Int, $limit: Int) {
        citiesPage(offset: $offset, limit: $limit) {
            items {
                id
                city
                province
                country
            }
            totalCount
            hasNextPage
        }
    }
`)

export const GET_CITY_BY_ID = graphql(`
    query getCityById($id: Int!) {
        cityById(id: $id) {
            id
            city
            province
            country
        }
    }
`)

export const GET_EMPLOYEES = graphql(`
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
`)

export const GET_EMPLOYEES_PAGE = graphql(`
    query getEmployeesPage($offset: Int, $limit: Int) {
        employeesPage(offset: $offset, limit: $limit) {
            items {
                id
                firstName
                lastName
                position
                phoneNumber
                email
            }
            totalCount
            hasNextPage
        }
    }
`)

export const GET_EMPLOYEE_BY_ID = graphql(`
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
`)

export const GET_STATUS_BY_ID = graphql(`
    query getStatusById($id: Int!) {
        statusById(id: $id) {
            id
            name
            description
        }
    }
`)

export const GET_STATUS = graphql(`
    query getStatus {
        status {
            id
            name
            description
        }
    }
`)

export const GET_STATUS_PAGE = graphql(`
    query getStatusPage($offset: Int, $limit: Int) {
        statusPage(offset: $offset, limit: $limit) {
            items {
                id
                name
                description
            }
            totalCount
            hasNextPage
        }
    }
`)

export const GET_TRAIN_BY_ID = graphql(`
    query getTrainById($id: Int!) {
        trainById(id: $id) {
            id
            type
            capacity
            maxSpeed
        }
    }
`)

export const GET_TRAINS = graphql(`
    query getTrains {
        trains {
            id
            type
            capacity
            maxSpeed
        }
    }
`)

export const GET_TRAINS_PAGE = graphql(`
    query getTrainsPage($offset: Int, $limit: Int) {
        trainsPage(offset: $offset, limit: $limit) {
            items {
                id
                type
                capacity
                maxSpeed
            }
            totalCount
            hasNextPage
        }
    }
`)

export const GET_STATION_BY_ID = graphql(`
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
`)

export const GET_STATIONS = graphql(`
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
`)

export const GET_STATIONS_PAGE = graphql(`
    query getStationsPage($offset: Int, $limit: Int) {
        stationsPage(offset: $offset, limit: $limit) {
            items {
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
            totalCount
            hasNextPage
        }
    }
`)

export const GET_SCHEDULE_BY_ID = graphql(`
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
`)

export const GET_SCHEDULES = graphql(`
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
`)

export const GET_SCHEDULES_PAGE = graphql(`
    query getSchedulesPage($offset: Int, $limit: Int) {
        schedulesPage(offset: $offset, limit: $limit) {
            items {
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
            totalCount
            hasNextPage
        }
    }
`)

export const GET_ROUTE_BY_ID = graphql(`
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
`)

export const GET_ROUTES = graphql(`
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
`)

export const GET_ROUTES_PAGE = graphql(`
    query getRoutesPage($offset: Int, $limit: Int) {
        routesPage(offset: $offset, limit: $limit) {
            items {
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
            totalCount
            hasNextPage
        }
    }
`)

export const GET_TRIPS = graphql(`
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
`)

export const GET_TRIPS_PAGE = graphql(`
    query getTripsPage($offset: Int, $limit: Int) {
        tripsPage(offset: $offset, limit: $limit) {
            items {
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
            totalCount
            hasNextPage
        }
    }
`)

export const GET_TRIP_BY_ID = graphql(`
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
`)

export const GET_WEEKDAYS = graphql(`
    query getWeekdays {
        weekdays {
            id
            name
        }
    }
`)

export const GET_WEEKDAYS_PAGE = graphql(`
    query getWeekdaysPage($offset: Int, $limit: Int) {
        weekdaysPage(offset: $offset, limit: $limit) {
            items {
                id
                name
            }
            totalCount
            hasNextPage
        }
    }
`)

export const GET_WEEKDAY_BY_ID = graphql(`
    query getWeekdayById($id: Int!) {
        weekdayById(id: $id) {
            id
            name
        }
    }
`)

export const GET_TIMEZONES = graphql(`
    query getTimezones {
        timezones {
            id
            name
            region
        }
    }
`)

export const GET_TIMEZONES_PAGE = graphql(`
    query getTimezones($offset: Int, $limit: Int) {
        timezonesPage(offset: $offset, limit: $limit) {
            items {
                id
                name
                region
            }
            totalCount
            hasNextPage
        }
    }
`)

export const GET_TIMEZONE_BY_ID = graphql(`
    query getTimezoneById($id: Int!) {
        timezoneById(id: $id) {
            id
            name
            region
        }
    }
`)
