import { graphql } from "./gql";

export const SAVE_CITY = graphql(`
    mutation saveCity($city: CityInput!) {
        saveCity(city: $city) {
            id
            city
            province
            country
        }
    }`
)

export const DELETE_CITY = graphql(`
    mutation deleteCity($id: Int!) {
        deleteCity(id: $id)
    }
`)

export const SAVE_EMPLOYEE = graphql(`
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
`)

export const DELETE_EMPLOYEE = graphql(`
    mutation deleteEmployee($id: Int!) {
        deleteEmployee(id: $id)
    }
`)

export const SAVE_STATUS = graphql(`
    mutation saveStatus($status: StatusInput!) {
        saveStatus(status: $status) {
            id
            name
            description
        }
    }
`)

export const DELETE_STATUS = graphql(`
    mutation deleteStatus($id: Int!) {
        deleteStatus(id: $id)
    }
`)

export const SAVE_TRAIN = graphql(`
    mutation saveTrain($train: TrainInput!) {
        saveTrain(train: $train) {
            id
            type
            capacity
            maxSpeed
        }
    }
`)

export const DELETE_TRAIN = graphql(`
    mutation deleteTrain($id: Int!) {
        deleteTrain(id: $id)
    }
`)

export const SAVE_STATION = graphql(`
    mutation saveStation($station: StationInput!) {
        saveStation(station: $station) {
            id
            name
            countryCode
            phone
            postalCode
            latitude
            longitude
            imageUrl
        }
    }
`)

export const DELETE_STATION = graphql(`
    mutation deleteStation($id: Int!) {
        deleteStation(id: $id)
    }
`)

export const SAVE_SCHEDULE = graphql(`
    mutation saveSchedule($schedule: ScheduleInput!) {
        saveSchedule(schedule: $schedule) {
            id
            route {
                startStation {
                    name
                }
                endStation {
                    name
                }
            }
            departureTime
            departureWeekday {
                name
            }
            arrivalTime
            arrivalWeekday {
                name
            }
        }
    }
`)

export const DELETE_SCHEDULE = graphql(`
    mutation deleteSchedule($id: Int!) {
        deleteSchedule(id: $id)
    }
`)

export const SAVE_ROUTE = graphql(`
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
`)

export const DELETE_ROUTE = graphql(`
    mutation deleteRoute($id: Int!) {
        deleteRoute(id: $id)
    }
`)

// New Trip mutations
export const SAVE_TRIP = graphql(`
    mutation saveTrip($trip: TripInput!) {
        saveTrip(trip: $trip) {
            id
            schedule {
                id
            }
            train {
                type
            }
            startTime
            endTime
            status {
                name
            }
        }
    }
`)

export const DELETE_TRIP = graphql(`
    mutation deleteTrip($id: Int!) {
        deleteTrip(id: $id)
    }
`)

// New Weekday mutations
export const SAVE_WEEKDAY = graphql(`
    mutation saveWeekday($weekday: WeekdayInput!) {
        saveWeekday(weekday: $weekday) {
            id
            name
        }
    }
`)

export const DELETE_WEEKDAY = graphql(`
    mutation deleteWeekday($id: Int!) {
        deleteWeekday(id: $id)
    }
`)

// New Timezone mutations
export const SAVE_TIMEZONE = graphql(`
    mutation saveTimezone($timezone: TimezoneInput!) {
        saveTimezone(timezone: $timezone) {
            id
            name
            region
        }
    }
`)

export const DELETE_TIMEZONE = graphql(`
    mutation deleteTimezone($id: Int!) {
        deleteTimezone(id: $id)
    }
`)