/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    mutation saveCity($city: CityInput!) {\n        saveCity(city: $city) {\n            id\n            city\n            province\n            country\n        }\n    }": typeof types.SaveCityDocument,
    "\n    mutation deleteCity($id: Int!) {\n        deleteCity(id: $id)\n    }\n": typeof types.DeleteCityDocument,
    "\n    mutation saveEmployee($employee: EmployeeInput!) {\n        saveEmployee(employee: $employee) {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n": typeof types.SaveEmployeeDocument,
    "\n    mutation deleteEmployee($id: Int!) {\n        deleteEmployee(id: $id)\n    }\n": typeof types.DeleteEmployeeDocument,
    "\n    mutation saveStatus($status: StatusInput!) {\n        saveStatus(status: $status) {\n            id\n            name\n            description\n        }\n    }\n": typeof types.SaveStatusDocument,
    "\n    mutation deleteStatus($id: Int!) {\n        deleteStatus(id: $id)\n    }\n": typeof types.DeleteStatusDocument,
    "\n    mutation saveTrain($train: TrainInput!) {\n        saveTrain(train: $train) {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n": typeof types.SaveTrainDocument,
    "\n    mutation deleteTrain($id: Int!) {\n        deleteTrain(id: $id)\n    }\n": typeof types.DeleteTrainDocument,
    "\n    mutation saveStation($station: StationInput!) {\n        saveStation(station: $station) {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n        }\n    }\n": typeof types.SaveStationDocument,
    "\n    mutation deleteStation($id: Int!) {\n        deleteStation(id: $id)\n    }\n": typeof types.DeleteStationDocument,
    "\n    mutation saveSchedule($schedule: ScheduleInput!) {\n        saveSchedule(schedule: $schedule) {\n            id\n            route {\n                startStation {\n                    name\n                }\n                endStation {\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                name\n            }\n        }\n    }\n": typeof types.SaveScheduleDocument,
    "\n    mutation deleteSchedule($id: Int!) {\n        deleteSchedule(id: $id)\n    }\n": typeof types.DeleteScheduleDocument,
    "\n    mutation saveRoute($route: RouteInput!) {\n        saveRoute(route: $route) {\n            id\n            startStation {\n                name\n            }\n            endStation {\n                name\n            }\n            distance\n        }\n    }\n": typeof types.SaveRouteDocument,
    "\n    mutation deleteRoute($id: Int!) {\n        deleteRoute(id: $id)\n    }\n": typeof types.DeleteRouteDocument,
    "\n    mutation saveTrip($trip: TripInput!) {\n        saveTrip(trip: $trip) {\n            id\n            schedule {\n                id\n            }\n            train {\n                type\n            }\n            startTime\n            endTime\n            status {\n                name\n            }\n        }\n    }\n": typeof types.SaveTripDocument,
    "\n    mutation deleteTrip($id: Int!) {\n        deleteTrip(id: $id)\n    }\n": typeof types.DeleteTripDocument,
    "\n    mutation saveWeekday($weekday: WeekdayInput!) {\n        saveWeekday(weekday: $weekday) {\n            id\n            name\n        }\n    }\n": typeof types.SaveWeekdayDocument,
    "\n    mutation deleteWeekday($id: Int!) {\n        deleteWeekday(id: $id)\n    }\n": typeof types.DeleteWeekdayDocument,
    "\n    mutation saveTimezone($timezone: TimezoneInput!) {\n        saveTimezone(timezone: $timezone) {\n            id\n            name\n            region\n        }\n    }\n": typeof types.SaveTimezoneDocument,
    "\n    mutation deleteTimezone($id: Int!) {\n        deleteTimezone(id: $id)\n    }\n": typeof types.DeleteTimezoneDocument,
    "\n    query getCities {\n        cities {\n            id\n            city\n            province\n            country\n        }\n    }\n": typeof types.GetCitiesDocument,
    "\n    query getCityById($id: Int!) {\n        cityById(id: $id) {\n            id\n            city\n            province\n            country\n        }\n    }\n": typeof types.GetCityByIdDocument,
    "\n    query getEmployees {\n        employees {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n": typeof types.GetEmployeesDocument,
    "\n    query getEmployeeById($id: Int!) {\n        employeeById(id: $id) {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n": typeof types.GetEmployeeByIdDocument,
    "\n    query getStatusById($id: Int!) {\n        statusById(id: $id) {\n            id\n            name\n            description\n        }\n    }\n": typeof types.GetStatusByIdDocument,
    "\n    query getStatus {\n        status {\n            id\n            name\n            description\n        }\n    }\n": typeof types.GetStatusDocument,
    "\n    query getTrainById($id: Int!) {\n        trainById(id: $id) {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n": typeof types.GetTrainByIdDocument,
    "\n    query getTrains {\n        trains {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n": typeof types.GetTrainsDocument,
    "\n    query getStationById($id: Int!) {\n        stationById(id: $id) {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n            timezone {\n                id\n                name\n                region\n            }\n            city {\n                id\n                city\n                province\n                country\n            }\n        }\n    }\n": typeof types.GetStationByIdDocument,
    "\n    query getStations {\n        stations {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n            timezone {\n                id\n                name\n                region\n            }\n            city {\n                id\n                city\n                province\n                country\n            }\n        }\n    }\n": typeof types.GetStationsDocument,
    "\n    query getScheduleById($id: Int!) {\n        scheduleById(id: $id) {\n            id\n            route {\n                id\n                startStation {\n                    id\n                    name\n                }\n                endStation {\n                    id\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                id\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetScheduleByIdDocument,
    "\n    query getSchedules {\n        schedules {\n            id\n            route {\n                id\n                startStation {\n                    id\n                    name\n                }\n                endStation {\n                    id\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                id\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetSchedulesDocument,
    "\n    query getRouteById($id: Int!) {\n        routeById(id: $id) {\n            id\n            startStation {\n                id\n                name\n            }\n            endStation {\n                id\n                name\n            }\n            distance\n        }\n    }\n": typeof types.GetRouteByIdDocument,
    "\n    query getRoutes {\n        routes {\n            id\n            startStation {\n                id\n                name\n            }\n            endStation {\n                id\n                name\n            }\n            distance\n        }\n    }\n": typeof types.GetRoutesDocument,
    "\n    query getTrips {\n        trips {\n            id\n            schedule {\n                id\n            }\n            train {\n                id\n                type\n            }\n            startTime\n            endTime\n            status {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetTripsDocument,
    "\n    query getTripById($id: Int!) {\n        tripById(id: $id) {\n            id\n            schedule {\n                id\n            }\n            train {\n                id\n                type\n            }\n            startTime\n            endTime\n            status {\n                id\n                name\n            }\n        }\n    }\n": typeof types.GetTripByIdDocument,
    "\n    query getWeekdays {\n        weekdays {\n            id\n            name\n        }\n    }\n": typeof types.GetWeekdaysDocument,
    "\n    query getWeekdayById($id: Int!) {\n        weekdayById(id: $id) {\n            id\n            name\n        }\n    }\n": typeof types.GetWeekdayByIdDocument,
    "\n    query getTimezones($offset: Int, $limit: Int) {\n        timezones(offset: $offset, limit: $limit) {\n            items {\n                id\n                name\n                region\n            }\n            totalCount\n            hasNextPage\n        }\n    }\n": typeof types.GetTimezonesDocument,
    "\n    query getTimezoneById($id: Int!) {\n        timezoneById(id: $id) {\n            id\n            name\n            region\n        }\n    }\n": typeof types.GetTimezoneByIdDocument,
};
const documents: Documents = {
    "\n    mutation saveCity($city: CityInput!) {\n        saveCity(city: $city) {\n            id\n            city\n            province\n            country\n        }\n    }": types.SaveCityDocument,
    "\n    mutation deleteCity($id: Int!) {\n        deleteCity(id: $id)\n    }\n": types.DeleteCityDocument,
    "\n    mutation saveEmployee($employee: EmployeeInput!) {\n        saveEmployee(employee: $employee) {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n": types.SaveEmployeeDocument,
    "\n    mutation deleteEmployee($id: Int!) {\n        deleteEmployee(id: $id)\n    }\n": types.DeleteEmployeeDocument,
    "\n    mutation saveStatus($status: StatusInput!) {\n        saveStatus(status: $status) {\n            id\n            name\n            description\n        }\n    }\n": types.SaveStatusDocument,
    "\n    mutation deleteStatus($id: Int!) {\n        deleteStatus(id: $id)\n    }\n": types.DeleteStatusDocument,
    "\n    mutation saveTrain($train: TrainInput!) {\n        saveTrain(train: $train) {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n": types.SaveTrainDocument,
    "\n    mutation deleteTrain($id: Int!) {\n        deleteTrain(id: $id)\n    }\n": types.DeleteTrainDocument,
    "\n    mutation saveStation($station: StationInput!) {\n        saveStation(station: $station) {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n        }\n    }\n": types.SaveStationDocument,
    "\n    mutation deleteStation($id: Int!) {\n        deleteStation(id: $id)\n    }\n": types.DeleteStationDocument,
    "\n    mutation saveSchedule($schedule: ScheduleInput!) {\n        saveSchedule(schedule: $schedule) {\n            id\n            route {\n                startStation {\n                    name\n                }\n                endStation {\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                name\n            }\n        }\n    }\n": types.SaveScheduleDocument,
    "\n    mutation deleteSchedule($id: Int!) {\n        deleteSchedule(id: $id)\n    }\n": types.DeleteScheduleDocument,
    "\n    mutation saveRoute($route: RouteInput!) {\n        saveRoute(route: $route) {\n            id\n            startStation {\n                name\n            }\n            endStation {\n                name\n            }\n            distance\n        }\n    }\n": types.SaveRouteDocument,
    "\n    mutation deleteRoute($id: Int!) {\n        deleteRoute(id: $id)\n    }\n": types.DeleteRouteDocument,
    "\n    mutation saveTrip($trip: TripInput!) {\n        saveTrip(trip: $trip) {\n            id\n            schedule {\n                id\n            }\n            train {\n                type\n            }\n            startTime\n            endTime\n            status {\n                name\n            }\n        }\n    }\n": types.SaveTripDocument,
    "\n    mutation deleteTrip($id: Int!) {\n        deleteTrip(id: $id)\n    }\n": types.DeleteTripDocument,
    "\n    mutation saveWeekday($weekday: WeekdayInput!) {\n        saveWeekday(weekday: $weekday) {\n            id\n            name\n        }\n    }\n": types.SaveWeekdayDocument,
    "\n    mutation deleteWeekday($id: Int!) {\n        deleteWeekday(id: $id)\n    }\n": types.DeleteWeekdayDocument,
    "\n    mutation saveTimezone($timezone: TimezoneInput!) {\n        saveTimezone(timezone: $timezone) {\n            id\n            name\n            region\n        }\n    }\n": types.SaveTimezoneDocument,
    "\n    mutation deleteTimezone($id: Int!) {\n        deleteTimezone(id: $id)\n    }\n": types.DeleteTimezoneDocument,
    "\n    query getCities {\n        cities {\n            id\n            city\n            province\n            country\n        }\n    }\n": types.GetCitiesDocument,
    "\n    query getCityById($id: Int!) {\n        cityById(id: $id) {\n            id\n            city\n            province\n            country\n        }\n    }\n": types.GetCityByIdDocument,
    "\n    query getEmployees {\n        employees {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n": types.GetEmployeesDocument,
    "\n    query getEmployeeById($id: Int!) {\n        employeeById(id: $id) {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n": types.GetEmployeeByIdDocument,
    "\n    query getStatusById($id: Int!) {\n        statusById(id: $id) {\n            id\n            name\n            description\n        }\n    }\n": types.GetStatusByIdDocument,
    "\n    query getStatus {\n        status {\n            id\n            name\n            description\n        }\n    }\n": types.GetStatusDocument,
    "\n    query getTrainById($id: Int!) {\n        trainById(id: $id) {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n": types.GetTrainByIdDocument,
    "\n    query getTrains {\n        trains {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n": types.GetTrainsDocument,
    "\n    query getStationById($id: Int!) {\n        stationById(id: $id) {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n            timezone {\n                id\n                name\n                region\n            }\n            city {\n                id\n                city\n                province\n                country\n            }\n        }\n    }\n": types.GetStationByIdDocument,
    "\n    query getStations {\n        stations {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n            timezone {\n                id\n                name\n                region\n            }\n            city {\n                id\n                city\n                province\n                country\n            }\n        }\n    }\n": types.GetStationsDocument,
    "\n    query getScheduleById($id: Int!) {\n        scheduleById(id: $id) {\n            id\n            route {\n                id\n                startStation {\n                    id\n                    name\n                }\n                endStation {\n                    id\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                id\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                id\n                name\n            }\n        }\n    }\n": types.GetScheduleByIdDocument,
    "\n    query getSchedules {\n        schedules {\n            id\n            route {\n                id\n                startStation {\n                    id\n                    name\n                }\n                endStation {\n                    id\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                id\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                id\n                name\n            }\n        }\n    }\n": types.GetSchedulesDocument,
    "\n    query getRouteById($id: Int!) {\n        routeById(id: $id) {\n            id\n            startStation {\n                id\n                name\n            }\n            endStation {\n                id\n                name\n            }\n            distance\n        }\n    }\n": types.GetRouteByIdDocument,
    "\n    query getRoutes {\n        routes {\n            id\n            startStation {\n                id\n                name\n            }\n            endStation {\n                id\n                name\n            }\n            distance\n        }\n    }\n": types.GetRoutesDocument,
    "\n    query getTrips {\n        trips {\n            id\n            schedule {\n                id\n            }\n            train {\n                id\n                type\n            }\n            startTime\n            endTime\n            status {\n                id\n                name\n            }\n        }\n    }\n": types.GetTripsDocument,
    "\n    query getTripById($id: Int!) {\n        tripById(id: $id) {\n            id\n            schedule {\n                id\n            }\n            train {\n                id\n                type\n            }\n            startTime\n            endTime\n            status {\n                id\n                name\n            }\n        }\n    }\n": types.GetTripByIdDocument,
    "\n    query getWeekdays {\n        weekdays {\n            id\n            name\n        }\n    }\n": types.GetWeekdaysDocument,
    "\n    query getWeekdayById($id: Int!) {\n        weekdayById(id: $id) {\n            id\n            name\n        }\n    }\n": types.GetWeekdayByIdDocument,
    "\n    query getTimezones($offset: Int, $limit: Int) {\n        timezones(offset: $offset, limit: $limit) {\n            items {\n                id\n                name\n                region\n            }\n            totalCount\n            hasNextPage\n        }\n    }\n": types.GetTimezonesDocument,
    "\n    query getTimezoneById($id: Int!) {\n        timezoneById(id: $id) {\n            id\n            name\n            region\n        }\n    }\n": types.GetTimezoneByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveCity($city: CityInput!) {\n        saveCity(city: $city) {\n            id\n            city\n            province\n            country\n        }\n    }"): (typeof documents)["\n    mutation saveCity($city: CityInput!) {\n        saveCity(city: $city) {\n            id\n            city\n            province\n            country\n        }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteCity($id: Int!) {\n        deleteCity(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteCity($id: Int!) {\n        deleteCity(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveEmployee($employee: EmployeeInput!) {\n        saveEmployee(employee: $employee) {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n"): (typeof documents)["\n    mutation saveEmployee($employee: EmployeeInput!) {\n        saveEmployee(employee: $employee) {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteEmployee($id: Int!) {\n        deleteEmployee(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteEmployee($id: Int!) {\n        deleteEmployee(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveStatus($status: StatusInput!) {\n        saveStatus(status: $status) {\n            id\n            name\n            description\n        }\n    }\n"): (typeof documents)["\n    mutation saveStatus($status: StatusInput!) {\n        saveStatus(status: $status) {\n            id\n            name\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteStatus($id: Int!) {\n        deleteStatus(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteStatus($id: Int!) {\n        deleteStatus(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveTrain($train: TrainInput!) {\n        saveTrain(train: $train) {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n"): (typeof documents)["\n    mutation saveTrain($train: TrainInput!) {\n        saveTrain(train: $train) {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteTrain($id: Int!) {\n        deleteTrain(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteTrain($id: Int!) {\n        deleteTrain(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveStation($station: StationInput!) {\n        saveStation(station: $station) {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n        }\n    }\n"): (typeof documents)["\n    mutation saveStation($station: StationInput!) {\n        saveStation(station: $station) {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteStation($id: Int!) {\n        deleteStation(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteStation($id: Int!) {\n        deleteStation(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveSchedule($schedule: ScheduleInput!) {\n        saveSchedule(schedule: $schedule) {\n            id\n            route {\n                startStation {\n                    name\n                }\n                endStation {\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation saveSchedule($schedule: ScheduleInput!) {\n        saveSchedule(schedule: $schedule) {\n            id\n            route {\n                startStation {\n                    name\n                }\n                endStation {\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteSchedule($id: Int!) {\n        deleteSchedule(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteSchedule($id: Int!) {\n        deleteSchedule(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveRoute($route: RouteInput!) {\n        saveRoute(route: $route) {\n            id\n            startStation {\n                name\n            }\n            endStation {\n                name\n            }\n            distance\n        }\n    }\n"): (typeof documents)["\n    mutation saveRoute($route: RouteInput!) {\n        saveRoute(route: $route) {\n            id\n            startStation {\n                name\n            }\n            endStation {\n                name\n            }\n            distance\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteRoute($id: Int!) {\n        deleteRoute(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteRoute($id: Int!) {\n        deleteRoute(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveTrip($trip: TripInput!) {\n        saveTrip(trip: $trip) {\n            id\n            schedule {\n                id\n            }\n            train {\n                type\n            }\n            startTime\n            endTime\n            status {\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation saveTrip($trip: TripInput!) {\n        saveTrip(trip: $trip) {\n            id\n            schedule {\n                id\n            }\n            train {\n                type\n            }\n            startTime\n            endTime\n            status {\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteTrip($id: Int!) {\n        deleteTrip(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteTrip($id: Int!) {\n        deleteTrip(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveWeekday($weekday: WeekdayInput!) {\n        saveWeekday(weekday: $weekday) {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    mutation saveWeekday($weekday: WeekdayInput!) {\n        saveWeekday(weekday: $weekday) {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteWeekday($id: Int!) {\n        deleteWeekday(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteWeekday($id: Int!) {\n        deleteWeekday(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation saveTimezone($timezone: TimezoneInput!) {\n        saveTimezone(timezone: $timezone) {\n            id\n            name\n            region\n        }\n    }\n"): (typeof documents)["\n    mutation saveTimezone($timezone: TimezoneInput!) {\n        saveTimezone(timezone: $timezone) {\n            id\n            name\n            region\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteTimezone($id: Int!) {\n        deleteTimezone(id: $id)\n    }\n"): (typeof documents)["\n    mutation deleteTimezone($id: Int!) {\n        deleteTimezone(id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getCities {\n        cities {\n            id\n            city\n            province\n            country\n        }\n    }\n"): (typeof documents)["\n    query getCities {\n        cities {\n            id\n            city\n            province\n            country\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getCityById($id: Int!) {\n        cityById(id: $id) {\n            id\n            city\n            province\n            country\n        }\n    }\n"): (typeof documents)["\n    query getCityById($id: Int!) {\n        cityById(id: $id) {\n            id\n            city\n            province\n            country\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getEmployees {\n        employees {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n"): (typeof documents)["\n    query getEmployees {\n        employees {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getEmployeeById($id: Int!) {\n        employeeById(id: $id) {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n"): (typeof documents)["\n    query getEmployeeById($id: Int!) {\n        employeeById(id: $id) {\n            id\n            firstName\n            lastName\n            position\n            phoneNumber\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getStatusById($id: Int!) {\n        statusById(id: $id) {\n            id\n            name\n            description\n        }\n    }\n"): (typeof documents)["\n    query getStatusById($id: Int!) {\n        statusById(id: $id) {\n            id\n            name\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getStatus {\n        status {\n            id\n            name\n            description\n        }\n    }\n"): (typeof documents)["\n    query getStatus {\n        status {\n            id\n            name\n            description\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getTrainById($id: Int!) {\n        trainById(id: $id) {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n"): (typeof documents)["\n    query getTrainById($id: Int!) {\n        trainById(id: $id) {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getTrains {\n        trains {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n"): (typeof documents)["\n    query getTrains {\n        trains {\n            id\n            type\n            capacity\n            maxSpeed\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getStationById($id: Int!) {\n        stationById(id: $id) {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n            timezone {\n                id\n                name\n                region\n            }\n            city {\n                id\n                city\n                province\n                country\n            }\n        }\n    }\n"): (typeof documents)["\n    query getStationById($id: Int!) {\n        stationById(id: $id) {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n            timezone {\n                id\n                name\n                region\n            }\n            city {\n                id\n                city\n                province\n                country\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getStations {\n        stations {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n            timezone {\n                id\n                name\n                region\n            }\n            city {\n                id\n                city\n                province\n                country\n            }\n        }\n    }\n"): (typeof documents)["\n    query getStations {\n        stations {\n            id\n            name\n            countryCode\n            phone\n            postalCode\n            latitude\n            longitude\n            imageUrl\n            timezone {\n                id\n                name\n                region\n            }\n            city {\n                id\n                city\n                province\n                country\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getScheduleById($id: Int!) {\n        scheduleById(id: $id) {\n            id\n            route {\n                id\n                startStation {\n                    id\n                    name\n                }\n                endStation {\n                    id\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                id\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query getScheduleById($id: Int!) {\n        scheduleById(id: $id) {\n            id\n            route {\n                id\n                startStation {\n                    id\n                    name\n                }\n                endStation {\n                    id\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                id\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getSchedules {\n        schedules {\n            id\n            route {\n                id\n                startStation {\n                    id\n                    name\n                }\n                endStation {\n                    id\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                id\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query getSchedules {\n        schedules {\n            id\n            route {\n                id\n                startStation {\n                    id\n                    name\n                }\n                endStation {\n                    id\n                    name\n                }\n            }\n            departureTime\n            departureWeekday {\n                id\n                name\n            }\n            arrivalTime\n            arrivalWeekday {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getRouteById($id: Int!) {\n        routeById(id: $id) {\n            id\n            startStation {\n                id\n                name\n            }\n            endStation {\n                id\n                name\n            }\n            distance\n        }\n    }\n"): (typeof documents)["\n    query getRouteById($id: Int!) {\n        routeById(id: $id) {\n            id\n            startStation {\n                id\n                name\n            }\n            endStation {\n                id\n                name\n            }\n            distance\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getRoutes {\n        routes {\n            id\n            startStation {\n                id\n                name\n            }\n            endStation {\n                id\n                name\n            }\n            distance\n        }\n    }\n"): (typeof documents)["\n    query getRoutes {\n        routes {\n            id\n            startStation {\n                id\n                name\n            }\n            endStation {\n                id\n                name\n            }\n            distance\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getTrips {\n        trips {\n            id\n            schedule {\n                id\n            }\n            train {\n                id\n                type\n            }\n            startTime\n            endTime\n            status {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query getTrips {\n        trips {\n            id\n            schedule {\n                id\n            }\n            train {\n                id\n                type\n            }\n            startTime\n            endTime\n            status {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getTripById($id: Int!) {\n        tripById(id: $id) {\n            id\n            schedule {\n                id\n            }\n            train {\n                id\n                type\n            }\n            startTime\n            endTime\n            status {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    query getTripById($id: Int!) {\n        tripById(id: $id) {\n            id\n            schedule {\n                id\n            }\n            train {\n                id\n                type\n            }\n            startTime\n            endTime\n            status {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getWeekdays {\n        weekdays {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query getWeekdays {\n        weekdays {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getWeekdayById($id: Int!) {\n        weekdayById(id: $id) {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query getWeekdayById($id: Int!) {\n        weekdayById(id: $id) {\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getTimezones($offset: Int, $limit: Int) {\n        timezones(offset: $offset, limit: $limit) {\n            items {\n                id\n                name\n                region\n            }\n            totalCount\n            hasNextPage\n        }\n    }\n"): (typeof documents)["\n    query getTimezones($offset: Int, $limit: Int) {\n        timezones(offset: $offset, limit: $limit) {\n            items {\n                id\n                name\n                region\n            }\n            totalCount\n            hasNextPage\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getTimezoneById($id: Int!) {\n        timezoneById(id: $id) {\n            id\n            name\n            region\n        }\n    }\n"): (typeof documents)["\n    query getTimezoneById($id: Int!) {\n        timezoneById(id: $id) {\n            id\n            name\n            region\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;