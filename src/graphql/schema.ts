import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type City = {
  __typename?: 'City';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  province: Scalars['String']['output'];
};

export type CityInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
};

export type Employee = {
  __typename?: 'Employee';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  position: Scalars['String']['output'];
};

export type EmployeeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

/** ##################################### MUTATIONS ###################################### */
export type Mutation = {
  __typename?: 'Mutation';
  deleteCity?: Maybe<Scalars['Boolean']['output']>;
  deleteEmployee?: Maybe<Scalars['Boolean']['output']>;
  deleteRoute?: Maybe<Scalars['Boolean']['output']>;
  deleteSchedule?: Maybe<Scalars['Boolean']['output']>;
  deleteStation?: Maybe<Scalars['Boolean']['output']>;
  deleteStatus?: Maybe<Scalars['Boolean']['output']>;
  deleteTimezone?: Maybe<Scalars['Boolean']['output']>;
  deleteTrain?: Maybe<Scalars['Boolean']['output']>;
  deleteTrip?: Maybe<Scalars['Boolean']['output']>;
  deleteWeekday?: Maybe<Scalars['Boolean']['output']>;
  saveCity?: Maybe<City>;
  saveEmployee?: Maybe<Employee>;
  saveRoute?: Maybe<Route>;
  saveSchedule?: Maybe<Schedule>;
  saveStation?: Maybe<Station>;
  saveStatus?: Maybe<Status>;
  saveTimezone?: Maybe<Timezone>;
  saveTrain?: Maybe<Train>;
  saveTrip?: Maybe<Trip>;
  saveWeekday?: Maybe<Weekday>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteCityArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteEmployeeArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteRouteArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteScheduleArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteStationArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteStatusArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteTimezoneArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteTrainArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteTripArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationDeleteWeekdayArgs = {
  id: Scalars['Int']['input'];
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveCityArgs = {
  city?: InputMaybe<CityInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveEmployeeArgs = {
  employee?: InputMaybe<EmployeeInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveRouteArgs = {
  route?: InputMaybe<RouteInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveScheduleArgs = {
  schedule?: InputMaybe<ScheduleInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveStationArgs = {
  station?: InputMaybe<StationInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveStatusArgs = {
  status?: InputMaybe<StatusInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveTimezoneArgs = {
  timezone?: InputMaybe<TimezoneInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveTrainArgs = {
  train?: InputMaybe<TrainInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveTripArgs = {
  trip?: InputMaybe<TripInput>;
};


/** ##################################### MUTATIONS ###################################### */
export type MutationSaveWeekdayArgs = {
  weekday?: InputMaybe<WeekdayInput>;
};

export type Query = {
  __typename?: 'Query';
  cities: Array<City>;
  cityById?: Maybe<City>;
  employeeById?: Maybe<Employee>;
  employees: Array<Employee>;
  routeById?: Maybe<Route>;
  routes: Array<Route>;
  scheduleById?: Maybe<Schedule>;
  schedules: Array<Schedule>;
  schedulesFiltered?: Maybe<Array<Schedule>>;
  stationById?: Maybe<Station>;
  stations: Array<Station>;
  status: Array<Status>;
  statusById?: Maybe<Status>;
  timezoneById?: Maybe<Timezone>;
  timezones: Array<Timezone>;
  trainById?: Maybe<Train>;
  trains: Array<Train>;
  tripById?: Maybe<Trip>;
  trips: Array<Trip>;
  tripsFiltered?: Maybe<Array<Trip>>;
  weekdayById?: Maybe<Weekday>;
  weekdays: Array<Weekday>;
};


export type QueryCityByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmployeeByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRouteByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryScheduleByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySchedulesFilteredArgs = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  endStationId?: InputMaybe<Scalars['Int']['input']>;
  passengers?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  startStationId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStationByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStatusByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimezoneByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTripByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTripsFilteredArgs = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  endStationId?: InputMaybe<Scalars['Int']['input']>;
  passengers?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  startStationId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWeekdayByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Route = {
  __typename?: 'Route';
  distance?: Maybe<Scalars['Float']['output']>;
  endStation?: Maybe<Station>;
  id?: Maybe<Scalars['ID']['output']>;
  startStation?: Maybe<Station>;
};

export type RouteInput = {
  distance?: InputMaybe<Scalars['Float']['input']>;
  endStationId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  startStationId?: InputMaybe<Scalars['Int']['input']>;
};

export type Schedule = {
  __typename?: 'Schedule';
  arrivalTime?: Maybe<Scalars['String']['output']>;
  arrivalWeekday?: Maybe<Weekday>;
  departureTime?: Maybe<Scalars['String']['output']>;
  departureWeekday?: Maybe<Weekday>;
  id: Scalars['ID']['output'];
  route?: Maybe<Route>;
};

export type ScheduleInput = {
  arrivalTime?: InputMaybe<Scalars['String']['input']>;
  arrivalWeekdayId?: InputMaybe<Scalars['Int']['input']>;
  departureTime?: InputMaybe<Scalars['String']['input']>;
  departureWeekdayId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  routeId?: InputMaybe<Scalars['Int']['input']>;
};

export type Station = {
  __typename?: 'Station';
  city?: Maybe<City>;
  countryCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Timezone>;
};

export type StationInput = {
  cityId?: InputMaybe<Scalars['Int']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
};

export type Status = {
  __typename?: 'Status';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  schedules?: Maybe<Array<Schedule>>;
};

export type StatusInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type Timezone = {
  __typename?: 'Timezone';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

export type TimezoneInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
};

export type Train = {
  __typename?: 'Train';
  capacity?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  maxSpeed?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type TrainInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  maxSpeed?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Trip = {
  __typename?: 'Trip';
  endTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  schedule?: Maybe<Schedule>;
  startTime?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  train?: Maybe<Train>;
};

export type TripInput = {
  endTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  scheduleId?: InputMaybe<Scalars['Int']['input']>;
  startTime?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  trainId?: InputMaybe<Scalars['Int']['input']>;
};

export type Weekday = {
  __typename?: 'Weekday';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type WeekdayInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SaveCityMutationVariables = Exact<{
  city: CityInput;
}>;


export type SaveCityMutation = { __typename?: 'Mutation', saveCity?: { __typename?: 'City', id: string, city: string, province: string, country: string } | null };

export type DeleteCityMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCityMutation = { __typename?: 'Mutation', deleteCity?: boolean | null };

export type SaveEmployeeMutationVariables = Exact<{
  employee: EmployeeInput;
}>;


export type SaveEmployeeMutation = { __typename?: 'Mutation', saveEmployee?: { __typename?: 'Employee', id: string, firstName: string, lastName: string, position: string, phoneNumber: string, email: string } | null };

export type DeleteEmployeeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteEmployeeMutation = { __typename?: 'Mutation', deleteEmployee?: boolean | null };

export type SaveStatusMutationVariables = Exact<{
  status: StatusInput;
}>;


export type SaveStatusMutation = { __typename?: 'Mutation', saveStatus?: { __typename?: 'Status', id: string, name: string, description?: string | null } | null };

export type DeleteStatusMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteStatusMutation = { __typename?: 'Mutation', deleteStatus?: boolean | null };

export type SaveTrainMutationVariables = Exact<{
  train: TrainInput;
}>;


export type SaveTrainMutation = { __typename?: 'Mutation', saveTrain?: { __typename?: 'Train', id: string, type: string, capacity?: number | null, maxSpeed?: number | null } | null };

export type DeleteTrainMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTrainMutation = { __typename?: 'Mutation', deleteTrain?: boolean | null };

export type SaveStationMutationVariables = Exact<{
  station: StationInput;
}>;


export type SaveStationMutation = { __typename?: 'Mutation', saveStation?: { __typename?: 'Station', id: string, name: string, countryCode?: string | null, phone?: string | null, postalCode?: string | null, latitude?: number | null, longitude?: number | null, imageUrl?: string | null } | null };

export type DeleteStationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteStationMutation = { __typename?: 'Mutation', deleteStation?: boolean | null };

export type SaveScheduleMutationVariables = Exact<{
  schedule: ScheduleInput;
}>;


export type SaveScheduleMutation = { __typename?: 'Mutation', saveSchedule?: { __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, route?: { __typename?: 'Route', startStation?: { __typename?: 'Station', name: string } | null, endStation?: { __typename?: 'Station', name: string } | null } | null, departureWeekday?: { __typename?: 'Weekday', name: string } | null, arrivalWeekday?: { __typename?: 'Weekday', name: string } | null } | null };

export type DeleteScheduleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteScheduleMutation = { __typename?: 'Mutation', deleteSchedule?: boolean | null };

export type SaveRouteMutationVariables = Exact<{
  route: RouteInput;
}>;


export type SaveRouteMutation = { __typename?: 'Mutation', saveRoute?: { __typename?: 'Route', id?: string | null, distance?: number | null, startStation?: { __typename?: 'Station', name: string } | null, endStation?: { __typename?: 'Station', name: string } | null } | null };

export type DeleteRouteMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteRouteMutation = { __typename?: 'Mutation', deleteRoute?: boolean | null };

export type SaveTripMutationVariables = Exact<{
  trip: TripInput;
}>;


export type SaveTripMutation = { __typename?: 'Mutation', saveTrip?: { __typename?: 'Trip', id: string, startTime?: string | null, endTime?: string | null, schedule?: { __typename?: 'Schedule', id: string } | null, train?: { __typename?: 'Train', type: string } | null, status?: { __typename?: 'Status', name: string } | null } | null };

export type DeleteTripMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTripMutation = { __typename?: 'Mutation', deleteTrip?: boolean | null };

export type SaveWeekdayMutationVariables = Exact<{
  weekday: WeekdayInput;
}>;


export type SaveWeekdayMutation = { __typename?: 'Mutation', saveWeekday?: { __typename?: 'Weekday', id: string, name: string } | null };

export type DeleteWeekdayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteWeekdayMutation = { __typename?: 'Mutation', deleteWeekday?: boolean | null };

export type SaveTimezoneMutationVariables = Exact<{
  timezone: TimezoneInput;
}>;


export type SaveTimezoneMutation = { __typename?: 'Mutation', saveTimezone?: { __typename?: 'Timezone', id: string, name: string, region: string } | null };

export type DeleteTimezoneMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTimezoneMutation = { __typename?: 'Mutation', deleteTimezone?: boolean | null };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', id: string, city: string, province: string, country: string }> };

export type GetCityByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetCityByIdQuery = { __typename?: 'Query', cityById?: { __typename?: 'City', id: string, city: string, province: string, country: string } | null };

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employee', id: string, firstName: string, lastName: string, position: string, phoneNumber: string, email: string }> };

export type GetEmployeeByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetEmployeeByIdQuery = { __typename?: 'Query', employeeById?: { __typename?: 'Employee', id: string, firstName: string, lastName: string, position: string, phoneNumber: string, email: string } | null };

export type GetStatusByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetStatusByIdQuery = { __typename?: 'Query', statusById?: { __typename?: 'Status', id: string, name: string, description?: string | null } | null };

export type GetStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatusQuery = { __typename?: 'Query', status: Array<{ __typename?: 'Status', id: string, name: string, description?: string | null }> };

export type GetTrainByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTrainByIdQuery = { __typename?: 'Query', trainById?: { __typename?: 'Train', id: string, type: string, capacity?: number | null, maxSpeed?: number | null } | null };

export type GetTrainsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainsQuery = { __typename?: 'Query', trains: Array<{ __typename?: 'Train', id: string, type: string, capacity?: number | null, maxSpeed?: number | null }> };

export type GetStationByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetStationByIdQuery = { __typename?: 'Query', stationById?: { __typename?: 'Station', id: string, name: string, countryCode?: string | null, phone?: string | null, postalCode?: string | null, latitude?: number | null, longitude?: number | null, imageUrl?: string | null, timezone?: { __typename?: 'Timezone', id: string, name: string, region: string } | null, city?: { __typename?: 'City', id: string, city: string, province: string, country: string } | null } | null };

export type GetStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStationsQuery = { __typename?: 'Query', stations: Array<{ __typename?: 'Station', id: string, name: string, countryCode?: string | null, phone?: string | null, postalCode?: string | null, latitude?: number | null, longitude?: number | null, imageUrl?: string | null, timezone?: { __typename?: 'Timezone', id: string, name: string, region: string } | null, city?: { __typename?: 'City', id: string, city: string, province: string, country: string } | null }> };

export type GetScheduleByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetScheduleByIdQuery = { __typename?: 'Query', scheduleById?: { __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, route?: { __typename?: 'Route', id?: string | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null, departureWeekday?: { __typename?: 'Weekday', id: string, name: string } | null, arrivalWeekday?: { __typename?: 'Weekday', id: string, name: string } | null } | null };

export type GetSchedulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSchedulesQuery = { __typename?: 'Query', schedules: Array<{ __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, route?: { __typename?: 'Route', id?: string | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null, departureWeekday?: { __typename?: 'Weekday', id: string, name: string } | null, arrivalWeekday?: { __typename?: 'Weekday', id: string, name: string } | null }> };

export type GetRouteByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetRouteByIdQuery = { __typename?: 'Query', routeById?: { __typename?: 'Route', id?: string | null, distance?: number | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null };

export type GetRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoutesQuery = { __typename?: 'Query', routes: Array<{ __typename?: 'Route', id?: string | null, distance?: number | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null }> };

export type GetTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTripsQuery = { __typename?: 'Query', trips: Array<{ __typename?: 'Trip', id: string, startTime?: string | null, endTime?: string | null, schedule?: { __typename?: 'Schedule', id: string } | null, train?: { __typename?: 'Train', id: string, type: string } | null, status?: { __typename?: 'Status', id: string, name: string } | null }> };

export type GetTripByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTripByIdQuery = { __typename?: 'Query', tripById?: { __typename?: 'Trip', id: string, startTime?: string | null, endTime?: string | null, schedule?: { __typename?: 'Schedule', id: string } | null, train?: { __typename?: 'Train', id: string, type: string } | null, status?: { __typename?: 'Status', id: string, name: string } | null } | null };

export type GetWeekdaysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWeekdaysQuery = { __typename?: 'Query', weekdays: Array<{ __typename?: 'Weekday', id: string, name: string }> };

export type GetWeekdayByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWeekdayByIdQuery = { __typename?: 'Query', weekdayById?: { __typename?: 'Weekday', id: string, name: string } | null };

export type GetTimezonesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTimezonesQuery = { __typename?: 'Query', timezones: Array<{ __typename?: 'Timezone', id: string, name: string, region: string }> };

export type GetTimezoneByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTimezoneByIdQuery = { __typename?: 'Query', timezoneById?: { __typename?: 'Timezone', id: string, name: string, region: string } | null };


export const SaveCityDocument = gql`
    mutation saveCity($city: CityInput!) {
  saveCity(city: $city) {
    id
    city
    province
    country
  }
}
    `;
export type SaveCityMutationFn = Apollo.MutationFunction<SaveCityMutation, SaveCityMutationVariables>;

/**
 * __useSaveCityMutation__
 *
 * To run a mutation, you first call `useSaveCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveCityMutation, { data, loading, error }] = useSaveCityMutation({
 *   variables: {
 *      city: // value for 'city'
 *   },
 * });
 */
export function useSaveCityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveCityMutation, SaveCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveCityMutation, SaveCityMutationVariables>(SaveCityDocument, options);
      }
export type SaveCityMutationHookResult = ReturnType<typeof useSaveCityMutation>;
export type SaveCityMutationResult = Apollo.MutationResult<SaveCityMutation>;
export type SaveCityMutationOptions = Apollo.BaseMutationOptions<SaveCityMutation, SaveCityMutationVariables>;
export const DeleteCityDocument = gql`
    mutation deleteCity($id: Int!) {
  deleteCity(id: $id)
}
    `;
export type DeleteCityMutationFn = Apollo.MutationFunction<DeleteCityMutation, DeleteCityMutationVariables>;

/**
 * __useDeleteCityMutation__
 *
 * To run a mutation, you first call `useDeleteCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCityMutation, { data, loading, error }] = useDeleteCityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCityMutation, DeleteCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteCityMutation, DeleteCityMutationVariables>(DeleteCityDocument, options);
      }
export type DeleteCityMutationHookResult = ReturnType<typeof useDeleteCityMutation>;
export type DeleteCityMutationResult = Apollo.MutationResult<DeleteCityMutation>;
export type DeleteCityMutationOptions = Apollo.BaseMutationOptions<DeleteCityMutation, DeleteCityMutationVariables>;
export const SaveEmployeeDocument = gql`
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
    `;
export type SaveEmployeeMutationFn = Apollo.MutationFunction<SaveEmployeeMutation, SaveEmployeeMutationVariables>;

/**
 * __useSaveEmployeeMutation__
 *
 * To run a mutation, you first call `useSaveEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveEmployeeMutation, { data, loading, error }] = useSaveEmployeeMutation({
 *   variables: {
 *      employee: // value for 'employee'
 *   },
 * });
 */
export function useSaveEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveEmployeeMutation, SaveEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveEmployeeMutation, SaveEmployeeMutationVariables>(SaveEmployeeDocument, options);
      }
export type SaveEmployeeMutationHookResult = ReturnType<typeof useSaveEmployeeMutation>;
export type SaveEmployeeMutationResult = Apollo.MutationResult<SaveEmployeeMutation>;
export type SaveEmployeeMutationOptions = Apollo.BaseMutationOptions<SaveEmployeeMutation, SaveEmployeeMutationVariables>;
export const DeleteEmployeeDocument = gql`
    mutation deleteEmployee($id: Int!) {
  deleteEmployee(id: $id)
}
    `;
export type DeleteEmployeeMutationFn = Apollo.MutationFunction<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;

/**
 * __useDeleteEmployeeMutation__
 *
 * To run a mutation, you first call `useDeleteEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmployeeMutation, { data, loading, error }] = useDeleteEmployeeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEmployeeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>(DeleteEmployeeDocument, options);
      }
export type DeleteEmployeeMutationHookResult = ReturnType<typeof useDeleteEmployeeMutation>;
export type DeleteEmployeeMutationResult = Apollo.MutationResult<DeleteEmployeeMutation>;
export type DeleteEmployeeMutationOptions = Apollo.BaseMutationOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;
export const SaveStatusDocument = gql`
    mutation saveStatus($status: StatusInput!) {
  saveStatus(status: $status) {
    id
    name
    description
  }
}
    `;
export type SaveStatusMutationFn = Apollo.MutationFunction<SaveStatusMutation, SaveStatusMutationVariables>;

/**
 * __useSaveStatusMutation__
 *
 * To run a mutation, you first call `useSaveStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveStatusMutation, { data, loading, error }] = useSaveStatusMutation({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useSaveStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveStatusMutation, SaveStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveStatusMutation, SaveStatusMutationVariables>(SaveStatusDocument, options);
      }
export type SaveStatusMutationHookResult = ReturnType<typeof useSaveStatusMutation>;
export type SaveStatusMutationResult = Apollo.MutationResult<SaveStatusMutation>;
export type SaveStatusMutationOptions = Apollo.BaseMutationOptions<SaveStatusMutation, SaveStatusMutationVariables>;
export const DeleteStatusDocument = gql`
    mutation deleteStatus($id: Int!) {
  deleteStatus(id: $id)
}
    `;
export type DeleteStatusMutationFn = Apollo.MutationFunction<DeleteStatusMutation, DeleteStatusMutationVariables>;

/**
 * __useDeleteStatusMutation__
 *
 * To run a mutation, you first call `useDeleteStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStatusMutation, { data, loading, error }] = useDeleteStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteStatusMutation, DeleteStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteStatusMutation, DeleteStatusMutationVariables>(DeleteStatusDocument, options);
      }
export type DeleteStatusMutationHookResult = ReturnType<typeof useDeleteStatusMutation>;
export type DeleteStatusMutationResult = Apollo.MutationResult<DeleteStatusMutation>;
export type DeleteStatusMutationOptions = Apollo.BaseMutationOptions<DeleteStatusMutation, DeleteStatusMutationVariables>;
export const SaveTrainDocument = gql`
    mutation saveTrain($train: TrainInput!) {
  saveTrain(train: $train) {
    id
    type
    capacity
    maxSpeed
  }
}
    `;
export type SaveTrainMutationFn = Apollo.MutationFunction<SaveTrainMutation, SaveTrainMutationVariables>;

/**
 * __useSaveTrainMutation__
 *
 * To run a mutation, you first call `useSaveTrainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTrainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTrainMutation, { data, loading, error }] = useSaveTrainMutation({
 *   variables: {
 *      train: // value for 'train'
 *   },
 * });
 */
export function useSaveTrainMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveTrainMutation, SaveTrainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveTrainMutation, SaveTrainMutationVariables>(SaveTrainDocument, options);
      }
export type SaveTrainMutationHookResult = ReturnType<typeof useSaveTrainMutation>;
export type SaveTrainMutationResult = Apollo.MutationResult<SaveTrainMutation>;
export type SaveTrainMutationOptions = Apollo.BaseMutationOptions<SaveTrainMutation, SaveTrainMutationVariables>;
export const DeleteTrainDocument = gql`
    mutation deleteTrain($id: Int!) {
  deleteTrain(id: $id)
}
    `;
export type DeleteTrainMutationFn = Apollo.MutationFunction<DeleteTrainMutation, DeleteTrainMutationVariables>;

/**
 * __useDeleteTrainMutation__
 *
 * To run a mutation, you first call `useDeleteTrainMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTrainMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTrainMutation, { data, loading, error }] = useDeleteTrainMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTrainMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTrainMutation, DeleteTrainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteTrainMutation, DeleteTrainMutationVariables>(DeleteTrainDocument, options);
      }
export type DeleteTrainMutationHookResult = ReturnType<typeof useDeleteTrainMutation>;
export type DeleteTrainMutationResult = Apollo.MutationResult<DeleteTrainMutation>;
export type DeleteTrainMutationOptions = Apollo.BaseMutationOptions<DeleteTrainMutation, DeleteTrainMutationVariables>;
export const SaveStationDocument = gql`
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
    `;
export type SaveStationMutationFn = Apollo.MutationFunction<SaveStationMutation, SaveStationMutationVariables>;

/**
 * __useSaveStationMutation__
 *
 * To run a mutation, you first call `useSaveStationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveStationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveStationMutation, { data, loading, error }] = useSaveStationMutation({
 *   variables: {
 *      station: // value for 'station'
 *   },
 * });
 */
export function useSaveStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveStationMutation, SaveStationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveStationMutation, SaveStationMutationVariables>(SaveStationDocument, options);
      }
export type SaveStationMutationHookResult = ReturnType<typeof useSaveStationMutation>;
export type SaveStationMutationResult = Apollo.MutationResult<SaveStationMutation>;
export type SaveStationMutationOptions = Apollo.BaseMutationOptions<SaveStationMutation, SaveStationMutationVariables>;
export const DeleteStationDocument = gql`
    mutation deleteStation($id: Int!) {
  deleteStation(id: $id)
}
    `;
export type DeleteStationMutationFn = Apollo.MutationFunction<DeleteStationMutation, DeleteStationMutationVariables>;

/**
 * __useDeleteStationMutation__
 *
 * To run a mutation, you first call `useDeleteStationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStationMutation, { data, loading, error }] = useDeleteStationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteStationMutation, DeleteStationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteStationMutation, DeleteStationMutationVariables>(DeleteStationDocument, options);
      }
export type DeleteStationMutationHookResult = ReturnType<typeof useDeleteStationMutation>;
export type DeleteStationMutationResult = Apollo.MutationResult<DeleteStationMutation>;
export type DeleteStationMutationOptions = Apollo.BaseMutationOptions<DeleteStationMutation, DeleteStationMutationVariables>;
export const SaveScheduleDocument = gql`
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
    `;
export type SaveScheduleMutationFn = Apollo.MutationFunction<SaveScheduleMutation, SaveScheduleMutationVariables>;

/**
 * __useSaveScheduleMutation__
 *
 * To run a mutation, you first call `useSaveScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveScheduleMutation, { data, loading, error }] = useSaveScheduleMutation({
 *   variables: {
 *      schedule: // value for 'schedule'
 *   },
 * });
 */
export function useSaveScheduleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveScheduleMutation, SaveScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveScheduleMutation, SaveScheduleMutationVariables>(SaveScheduleDocument, options);
      }
export type SaveScheduleMutationHookResult = ReturnType<typeof useSaveScheduleMutation>;
export type SaveScheduleMutationResult = Apollo.MutationResult<SaveScheduleMutation>;
export type SaveScheduleMutationOptions = Apollo.BaseMutationOptions<SaveScheduleMutation, SaveScheduleMutationVariables>;
export const DeleteScheduleDocument = gql`
    mutation deleteSchedule($id: Int!) {
  deleteSchedule(id: $id)
}
    `;
export type DeleteScheduleMutationFn = Apollo.MutationFunction<DeleteScheduleMutation, DeleteScheduleMutationVariables>;

/**
 * __useDeleteScheduleMutation__
 *
 * To run a mutation, you first call `useDeleteScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteScheduleMutation, { data, loading, error }] = useDeleteScheduleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteScheduleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteScheduleMutation, DeleteScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteScheduleMutation, DeleteScheduleMutationVariables>(DeleteScheduleDocument, options);
      }
export type DeleteScheduleMutationHookResult = ReturnType<typeof useDeleteScheduleMutation>;
export type DeleteScheduleMutationResult = Apollo.MutationResult<DeleteScheduleMutation>;
export type DeleteScheduleMutationOptions = Apollo.BaseMutationOptions<DeleteScheduleMutation, DeleteScheduleMutationVariables>;
export const SaveRouteDocument = gql`
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
    `;
export type SaveRouteMutationFn = Apollo.MutationFunction<SaveRouteMutation, SaveRouteMutationVariables>;

/**
 * __useSaveRouteMutation__
 *
 * To run a mutation, you first call `useSaveRouteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveRouteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveRouteMutation, { data, loading, error }] = useSaveRouteMutation({
 *   variables: {
 *      route: // value for 'route'
 *   },
 * });
 */
export function useSaveRouteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveRouteMutation, SaveRouteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveRouteMutation, SaveRouteMutationVariables>(SaveRouteDocument, options);
      }
export type SaveRouteMutationHookResult = ReturnType<typeof useSaveRouteMutation>;
export type SaveRouteMutationResult = Apollo.MutationResult<SaveRouteMutation>;
export type SaveRouteMutationOptions = Apollo.BaseMutationOptions<SaveRouteMutation, SaveRouteMutationVariables>;
export const DeleteRouteDocument = gql`
    mutation deleteRoute($id: Int!) {
  deleteRoute(id: $id)
}
    `;
export type DeleteRouteMutationFn = Apollo.MutationFunction<DeleteRouteMutation, DeleteRouteMutationVariables>;

/**
 * __useDeleteRouteMutation__
 *
 * To run a mutation, you first call `useDeleteRouteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRouteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRouteMutation, { data, loading, error }] = useDeleteRouteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRouteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRouteMutation, DeleteRouteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteRouteMutation, DeleteRouteMutationVariables>(DeleteRouteDocument, options);
      }
export type DeleteRouteMutationHookResult = ReturnType<typeof useDeleteRouteMutation>;
export type DeleteRouteMutationResult = Apollo.MutationResult<DeleteRouteMutation>;
export type DeleteRouteMutationOptions = Apollo.BaseMutationOptions<DeleteRouteMutation, DeleteRouteMutationVariables>;
export const SaveTripDocument = gql`
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
    `;
export type SaveTripMutationFn = Apollo.MutationFunction<SaveTripMutation, SaveTripMutationVariables>;

/**
 * __useSaveTripMutation__
 *
 * To run a mutation, you first call `useSaveTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTripMutation, { data, loading, error }] = useSaveTripMutation({
 *   variables: {
 *      trip: // value for 'trip'
 *   },
 * });
 */
export function useSaveTripMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveTripMutation, SaveTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveTripMutation, SaveTripMutationVariables>(SaveTripDocument, options);
      }
export type SaveTripMutationHookResult = ReturnType<typeof useSaveTripMutation>;
export type SaveTripMutationResult = Apollo.MutationResult<SaveTripMutation>;
export type SaveTripMutationOptions = Apollo.BaseMutationOptions<SaveTripMutation, SaveTripMutationVariables>;
export const DeleteTripDocument = gql`
    mutation deleteTrip($id: Int!) {
  deleteTrip(id: $id)
}
    `;
export type DeleteTripMutationFn = Apollo.MutationFunction<DeleteTripMutation, DeleteTripMutationVariables>;

/**
 * __useDeleteTripMutation__
 *
 * To run a mutation, you first call `useDeleteTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTripMutation, { data, loading, error }] = useDeleteTripMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTripMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTripMutation, DeleteTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteTripMutation, DeleteTripMutationVariables>(DeleteTripDocument, options);
      }
export type DeleteTripMutationHookResult = ReturnType<typeof useDeleteTripMutation>;
export type DeleteTripMutationResult = Apollo.MutationResult<DeleteTripMutation>;
export type DeleteTripMutationOptions = Apollo.BaseMutationOptions<DeleteTripMutation, DeleteTripMutationVariables>;
export const SaveWeekdayDocument = gql`
    mutation saveWeekday($weekday: WeekdayInput!) {
  saveWeekday(weekday: $weekday) {
    id
    name
  }
}
    `;
export type SaveWeekdayMutationFn = Apollo.MutationFunction<SaveWeekdayMutation, SaveWeekdayMutationVariables>;

/**
 * __useSaveWeekdayMutation__
 *
 * To run a mutation, you first call `useSaveWeekdayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveWeekdayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveWeekdayMutation, { data, loading, error }] = useSaveWeekdayMutation({
 *   variables: {
 *      weekday: // value for 'weekday'
 *   },
 * });
 */
export function useSaveWeekdayMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveWeekdayMutation, SaveWeekdayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveWeekdayMutation, SaveWeekdayMutationVariables>(SaveWeekdayDocument, options);
      }
export type SaveWeekdayMutationHookResult = ReturnType<typeof useSaveWeekdayMutation>;
export type SaveWeekdayMutationResult = Apollo.MutationResult<SaveWeekdayMutation>;
export type SaveWeekdayMutationOptions = Apollo.BaseMutationOptions<SaveWeekdayMutation, SaveWeekdayMutationVariables>;
export const DeleteWeekdayDocument = gql`
    mutation deleteWeekday($id: Int!) {
  deleteWeekday(id: $id)
}
    `;
export type DeleteWeekdayMutationFn = Apollo.MutationFunction<DeleteWeekdayMutation, DeleteWeekdayMutationVariables>;

/**
 * __useDeleteWeekdayMutation__
 *
 * To run a mutation, you first call `useDeleteWeekdayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWeekdayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWeekdayMutation, { data, loading, error }] = useDeleteWeekdayMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWeekdayMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteWeekdayMutation, DeleteWeekdayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteWeekdayMutation, DeleteWeekdayMutationVariables>(DeleteWeekdayDocument, options);
      }
export type DeleteWeekdayMutationHookResult = ReturnType<typeof useDeleteWeekdayMutation>;
export type DeleteWeekdayMutationResult = Apollo.MutationResult<DeleteWeekdayMutation>;
export type DeleteWeekdayMutationOptions = Apollo.BaseMutationOptions<DeleteWeekdayMutation, DeleteWeekdayMutationVariables>;
export const SaveTimezoneDocument = gql`
    mutation saveTimezone($timezone: TimezoneInput!) {
  saveTimezone(timezone: $timezone) {
    id
    name
    region
  }
}
    `;
export type SaveTimezoneMutationFn = Apollo.MutationFunction<SaveTimezoneMutation, SaveTimezoneMutationVariables>;

/**
 * __useSaveTimezoneMutation__
 *
 * To run a mutation, you first call `useSaveTimezoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTimezoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTimezoneMutation, { data, loading, error }] = useSaveTimezoneMutation({
 *   variables: {
 *      timezone: // value for 'timezone'
 *   },
 * });
 */
export function useSaveTimezoneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveTimezoneMutation, SaveTimezoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<SaveTimezoneMutation, SaveTimezoneMutationVariables>(SaveTimezoneDocument, options);
      }
export type SaveTimezoneMutationHookResult = ReturnType<typeof useSaveTimezoneMutation>;
export type SaveTimezoneMutationResult = Apollo.MutationResult<SaveTimezoneMutation>;
export type SaveTimezoneMutationOptions = Apollo.BaseMutationOptions<SaveTimezoneMutation, SaveTimezoneMutationVariables>;
export const DeleteTimezoneDocument = gql`
    mutation deleteTimezone($id: Int!) {
  deleteTimezone(id: $id)
}
    `;
export type DeleteTimezoneMutationFn = Apollo.MutationFunction<DeleteTimezoneMutation, DeleteTimezoneMutationVariables>;

/**
 * __useDeleteTimezoneMutation__
 *
 * To run a mutation, you first call `useDeleteTimezoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTimezoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTimezoneMutation, { data, loading, error }] = useDeleteTimezoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTimezoneMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTimezoneMutation, DeleteTimezoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteTimezoneMutation, DeleteTimezoneMutationVariables>(DeleteTimezoneDocument, options);
      }
export type DeleteTimezoneMutationHookResult = ReturnType<typeof useDeleteTimezoneMutation>;
export type DeleteTimezoneMutationResult = Apollo.MutationResult<DeleteTimezoneMutation>;
export type DeleteTimezoneMutationOptions = Apollo.BaseMutationOptions<DeleteTimezoneMutation, DeleteTimezoneMutationVariables>;
export const GetCitiesDocument = gql`
    query getCities {
  cities {
    id
    city
    province
    country
  }
}
    `;

/**
 * __useGetCitiesQuery__
 *
 * To run a query within a React component, call `useGetCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
      }
export function useGetCitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
        }
// @ts-ignore
export function useGetCitiesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCitiesQuery, GetCitiesQueryVariables>;
export function useGetCitiesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCitiesQuery | undefined, GetCitiesQueryVariables>;
export function useGetCitiesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
        }
export type GetCitiesQueryHookResult = ReturnType<typeof useGetCitiesQuery>;
export type GetCitiesLazyQueryHookResult = ReturnType<typeof useGetCitiesLazyQuery>;
export type GetCitiesSuspenseQueryHookResult = ReturnType<typeof useGetCitiesSuspenseQuery>;
export type GetCitiesQueryResult = Apollo.QueryResult<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetCityByIdDocument = gql`
    query getCityById($id: Int!) {
  cityById(id: $id) {
    id
    city
    province
    country
  }
}
    `;

/**
 * __useGetCityByIdQuery__
 *
 * To run a query within a React component, call `useGetCityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCityByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCityByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables> & ({ variables: GetCityByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
      }
export function useGetCityByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
        }
// @ts-ignore
export function useGetCityByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCityByIdQuery, GetCityByIdQueryVariables>;
export function useGetCityByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetCityByIdQuery | undefined, GetCityByIdQueryVariables>;
export function useGetCityByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
        }
export type GetCityByIdQueryHookResult = ReturnType<typeof useGetCityByIdQuery>;
export type GetCityByIdLazyQueryHookResult = ReturnType<typeof useGetCityByIdLazyQuery>;
export type GetCityByIdSuspenseQueryHookResult = ReturnType<typeof useGetCityByIdSuspenseQuery>;
export type GetCityByIdQueryResult = Apollo.QueryResult<GetCityByIdQuery, GetCityByIdQueryVariables>;
export const GetEmployeesDocument = gql`
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
    `;

/**
 * __useGetEmployeesQuery__
 *
 * To run a query within a React component, call `useGetEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEmployeesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
      }
export function useGetEmployeesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
        }
// @ts-ignore
export function useGetEmployeesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetEmployeesQuery, GetEmployeesQueryVariables>;
export function useGetEmployeesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetEmployeesQuery | undefined, GetEmployeesQueryVariables>;
export function useGetEmployeesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
        }
export type GetEmployeesQueryHookResult = ReturnType<typeof useGetEmployeesQuery>;
export type GetEmployeesLazyQueryHookResult = ReturnType<typeof useGetEmployeesLazyQuery>;
export type GetEmployeesSuspenseQueryHookResult = ReturnType<typeof useGetEmployeesSuspenseQuery>;
export type GetEmployeesQueryResult = Apollo.QueryResult<GetEmployeesQuery, GetEmployeesQueryVariables>;
export const GetEmployeeByIdDocument = gql`
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
    `;

/**
 * __useGetEmployeeByIdQuery__
 *
 * To run a query within a React component, call `useGetEmployeeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEmployeeByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables> & ({ variables: GetEmployeeByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>(GetEmployeeByIdDocument, options);
      }
export function useGetEmployeeByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>(GetEmployeeByIdDocument, options);
        }
// @ts-ignore
export function useGetEmployeeByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>;
export function useGetEmployeeByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetEmployeeByIdQuery | undefined, GetEmployeeByIdQueryVariables>;
export function useGetEmployeeByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>(GetEmployeeByIdDocument, options);
        }
export type GetEmployeeByIdQueryHookResult = ReturnType<typeof useGetEmployeeByIdQuery>;
export type GetEmployeeByIdLazyQueryHookResult = ReturnType<typeof useGetEmployeeByIdLazyQuery>;
export type GetEmployeeByIdSuspenseQueryHookResult = ReturnType<typeof useGetEmployeeByIdSuspenseQuery>;
export type GetEmployeeByIdQueryResult = Apollo.QueryResult<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>;
export const GetStatusByIdDocument = gql`
    query getStatusById($id: Int!) {
  statusById(id: $id) {
    id
    name
    description
  }
}
    `;

/**
 * __useGetStatusByIdQuery__
 *
 * To run a query within a React component, call `useGetStatusByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStatusByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetStatusByIdQuery, GetStatusByIdQueryVariables> & ({ variables: GetStatusByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetStatusByIdQuery, GetStatusByIdQueryVariables>(GetStatusByIdDocument, options);
      }
export function useGetStatusByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStatusByIdQuery, GetStatusByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetStatusByIdQuery, GetStatusByIdQueryVariables>(GetStatusByIdDocument, options);
        }
// @ts-ignore
export function useGetStatusByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetStatusByIdQuery, GetStatusByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetStatusByIdQuery, GetStatusByIdQueryVariables>;
export function useGetStatusByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetStatusByIdQuery, GetStatusByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetStatusByIdQuery | undefined, GetStatusByIdQueryVariables>;
export function useGetStatusByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetStatusByIdQuery, GetStatusByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetStatusByIdQuery, GetStatusByIdQueryVariables>(GetStatusByIdDocument, options);
        }
export type GetStatusByIdQueryHookResult = ReturnType<typeof useGetStatusByIdQuery>;
export type GetStatusByIdLazyQueryHookResult = ReturnType<typeof useGetStatusByIdLazyQuery>;
export type GetStatusByIdSuspenseQueryHookResult = ReturnType<typeof useGetStatusByIdSuspenseQuery>;
export type GetStatusByIdQueryResult = Apollo.QueryResult<GetStatusByIdQuery, GetStatusByIdQueryVariables>;
export const GetStatusDocument = gql`
    query getStatus {
  status {
    id
    name
    description
  }
}
    `;

/**
 * __useGetStatusQuery__
 *
 * To run a query within a React component, call `useGetStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
      }
export function useGetStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
        }
// @ts-ignore
export function useGetStatusSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetStatusQuery, GetStatusQueryVariables>;
export function useGetStatusSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetStatusQuery | undefined, GetStatusQueryVariables>;
export function useGetStatusSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
        }
export type GetStatusQueryHookResult = ReturnType<typeof useGetStatusQuery>;
export type GetStatusLazyQueryHookResult = ReturnType<typeof useGetStatusLazyQuery>;
export type GetStatusSuspenseQueryHookResult = ReturnType<typeof useGetStatusSuspenseQuery>;
export type GetStatusQueryResult = Apollo.QueryResult<GetStatusQuery, GetStatusQueryVariables>;
export const GetTrainByIdDocument = gql`
    query getTrainById($id: Int!) {
  trainById(id: $id) {
    id
    type
    capacity
    maxSpeed
  }
}
    `;

/**
 * __useGetTrainByIdQuery__
 *
 * To run a query within a React component, call `useGetTrainByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrainByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrainByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTrainByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTrainByIdQuery, GetTrainByIdQueryVariables> & ({ variables: GetTrainByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTrainByIdQuery, GetTrainByIdQueryVariables>(GetTrainByIdDocument, options);
      }
export function useGetTrainByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTrainByIdQuery, GetTrainByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTrainByIdQuery, GetTrainByIdQueryVariables>(GetTrainByIdDocument, options);
        }
// @ts-ignore
export function useGetTrainByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetTrainByIdQuery, GetTrainByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTrainByIdQuery, GetTrainByIdQueryVariables>;
export function useGetTrainByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTrainByIdQuery, GetTrainByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTrainByIdQuery | undefined, GetTrainByIdQueryVariables>;
export function useGetTrainByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTrainByIdQuery, GetTrainByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTrainByIdQuery, GetTrainByIdQueryVariables>(GetTrainByIdDocument, options);
        }
export type GetTrainByIdQueryHookResult = ReturnType<typeof useGetTrainByIdQuery>;
export type GetTrainByIdLazyQueryHookResult = ReturnType<typeof useGetTrainByIdLazyQuery>;
export type GetTrainByIdSuspenseQueryHookResult = ReturnType<typeof useGetTrainByIdSuspenseQuery>;
export type GetTrainByIdQueryResult = Apollo.QueryResult<GetTrainByIdQuery, GetTrainByIdQueryVariables>;
export const GetTrainsDocument = gql`
    query getTrains {
  trains {
    id
    type
    capacity
    maxSpeed
  }
}
    `;

/**
 * __useGetTrainsQuery__
 *
 * To run a query within a React component, call `useGetTrainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrainsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTrainsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTrainsQuery, GetTrainsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTrainsQuery, GetTrainsQueryVariables>(GetTrainsDocument, options);
      }
export function useGetTrainsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTrainsQuery, GetTrainsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTrainsQuery, GetTrainsQueryVariables>(GetTrainsDocument, options);
        }
// @ts-ignore
export function useGetTrainsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetTrainsQuery, GetTrainsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTrainsQuery, GetTrainsQueryVariables>;
export function useGetTrainsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTrainsQuery, GetTrainsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTrainsQuery | undefined, GetTrainsQueryVariables>;
export function useGetTrainsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTrainsQuery, GetTrainsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTrainsQuery, GetTrainsQueryVariables>(GetTrainsDocument, options);
        }
export type GetTrainsQueryHookResult = ReturnType<typeof useGetTrainsQuery>;
export type GetTrainsLazyQueryHookResult = ReturnType<typeof useGetTrainsLazyQuery>;
export type GetTrainsSuspenseQueryHookResult = ReturnType<typeof useGetTrainsSuspenseQuery>;
export type GetTrainsQueryResult = Apollo.QueryResult<GetTrainsQuery, GetTrainsQueryVariables>;
export const GetStationByIdDocument = gql`
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
    `;

/**
 * __useGetStationByIdQuery__
 *
 * To run a query within a React component, call `useGetStationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStationByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables> & ({ variables: GetStationByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetStationByIdQuery, GetStationByIdQueryVariables>(GetStationByIdDocument, options);
      }
export function useGetStationByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetStationByIdQuery, GetStationByIdQueryVariables>(GetStationByIdDocument, options);
        }
// @ts-ignore
export function useGetStationByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetStationByIdQuery, GetStationByIdQueryVariables>;
export function useGetStationByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetStationByIdQuery | undefined, GetStationByIdQueryVariables>;
export function useGetStationByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetStationByIdQuery, GetStationByIdQueryVariables>(GetStationByIdDocument, options);
        }
export type GetStationByIdQueryHookResult = ReturnType<typeof useGetStationByIdQuery>;
export type GetStationByIdLazyQueryHookResult = ReturnType<typeof useGetStationByIdLazyQuery>;
export type GetStationByIdSuspenseQueryHookResult = ReturnType<typeof useGetStationByIdSuspenseQuery>;
export type GetStationByIdQueryResult = Apollo.QueryResult<GetStationByIdQuery, GetStationByIdQueryVariables>;
export const GetStationsDocument = gql`
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
    `;

/**
 * __useGetStationsQuery__
 *
 * To run a query within a React component, call `useGetStationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStationsQuery, GetStationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetStationsQuery, GetStationsQueryVariables>(GetStationsDocument, options);
      }
export function useGetStationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStationsQuery, GetStationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetStationsQuery, GetStationsQueryVariables>(GetStationsDocument, options);
        }
// @ts-ignore
export function useGetStationsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetStationsQuery, GetStationsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetStationsQuery, GetStationsQueryVariables>;
export function useGetStationsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetStationsQuery, GetStationsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetStationsQuery | undefined, GetStationsQueryVariables>;
export function useGetStationsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetStationsQuery, GetStationsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetStationsQuery, GetStationsQueryVariables>(GetStationsDocument, options);
        }
export type GetStationsQueryHookResult = ReturnType<typeof useGetStationsQuery>;
export type GetStationsLazyQueryHookResult = ReturnType<typeof useGetStationsLazyQuery>;
export type GetStationsSuspenseQueryHookResult = ReturnType<typeof useGetStationsSuspenseQuery>;
export type GetStationsQueryResult = Apollo.QueryResult<GetStationsQuery, GetStationsQueryVariables>;
export const GetScheduleByIdDocument = gql`
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
    `;

/**
 * __useGetScheduleByIdQuery__
 *
 * To run a query within a React component, call `useGetScheduleByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScheduleByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScheduleByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetScheduleByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetScheduleByIdQuery, GetScheduleByIdQueryVariables> & ({ variables: GetScheduleByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>(GetScheduleByIdDocument, options);
      }
export function useGetScheduleByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>(GetScheduleByIdDocument, options);
        }
// @ts-ignore
export function useGetScheduleByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>;
export function useGetScheduleByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetScheduleByIdQuery | undefined, GetScheduleByIdQueryVariables>;
export function useGetScheduleByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>(GetScheduleByIdDocument, options);
        }
export type GetScheduleByIdQueryHookResult = ReturnType<typeof useGetScheduleByIdQuery>;
export type GetScheduleByIdLazyQueryHookResult = ReturnType<typeof useGetScheduleByIdLazyQuery>;
export type GetScheduleByIdSuspenseQueryHookResult = ReturnType<typeof useGetScheduleByIdSuspenseQuery>;
export type GetScheduleByIdQueryResult = Apollo.QueryResult<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>;
export const GetSchedulesDocument = gql`
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
    `;

/**
 * __useGetSchedulesQuery__
 *
 * To run a query within a React component, call `useGetSchedulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSchedulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSchedulesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSchedulesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
      }
export function useGetSchedulesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
        }
// @ts-ignore
export function useGetSchedulesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetSchedulesQuery, GetSchedulesQueryVariables>;
export function useGetSchedulesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetSchedulesQuery | undefined, GetSchedulesQueryVariables>;
export function useGetSchedulesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
        }
export type GetSchedulesQueryHookResult = ReturnType<typeof useGetSchedulesQuery>;
export type GetSchedulesLazyQueryHookResult = ReturnType<typeof useGetSchedulesLazyQuery>;
export type GetSchedulesSuspenseQueryHookResult = ReturnType<typeof useGetSchedulesSuspenseQuery>;
export type GetSchedulesQueryResult = Apollo.QueryResult<GetSchedulesQuery, GetSchedulesQueryVariables>;
export const GetRouteByIdDocument = gql`
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
    `;

/**
 * __useGetRouteByIdQuery__
 *
 * To run a query within a React component, call `useGetRouteByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRouteByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRouteByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRouteByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetRouteByIdQuery, GetRouteByIdQueryVariables> & ({ variables: GetRouteByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRouteByIdQuery, GetRouteByIdQueryVariables>(GetRouteByIdDocument, options);
      }
export function useGetRouteByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRouteByIdQuery, GetRouteByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRouteByIdQuery, GetRouteByIdQueryVariables>(GetRouteByIdDocument, options);
        }
// @ts-ignore
export function useGetRouteByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetRouteByIdQuery, GetRouteByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetRouteByIdQuery, GetRouteByIdQueryVariables>;
export function useGetRouteByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetRouteByIdQuery, GetRouteByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetRouteByIdQuery | undefined, GetRouteByIdQueryVariables>;
export function useGetRouteByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetRouteByIdQuery, GetRouteByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetRouteByIdQuery, GetRouteByIdQueryVariables>(GetRouteByIdDocument, options);
        }
export type GetRouteByIdQueryHookResult = ReturnType<typeof useGetRouteByIdQuery>;
export type GetRouteByIdLazyQueryHookResult = ReturnType<typeof useGetRouteByIdLazyQuery>;
export type GetRouteByIdSuspenseQueryHookResult = ReturnType<typeof useGetRouteByIdSuspenseQuery>;
export type GetRouteByIdQueryResult = Apollo.QueryResult<GetRouteByIdQuery, GetRouteByIdQueryVariables>;
export const GetRoutesDocument = gql`
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
    `;

/**
 * __useGetRoutesQuery__
 *
 * To run a query within a React component, call `useGetRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoutesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoutesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRoutesQuery, GetRoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRoutesQuery, GetRoutesQueryVariables>(GetRoutesDocument, options);
      }
export function useGetRoutesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRoutesQuery, GetRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRoutesQuery, GetRoutesQueryVariables>(GetRoutesDocument, options);
        }
// @ts-ignore
export function useGetRoutesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetRoutesQuery, GetRoutesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetRoutesQuery, GetRoutesQueryVariables>;
export function useGetRoutesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetRoutesQuery, GetRoutesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetRoutesQuery | undefined, GetRoutesQueryVariables>;
export function useGetRoutesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetRoutesQuery, GetRoutesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetRoutesQuery, GetRoutesQueryVariables>(GetRoutesDocument, options);
        }
export type GetRoutesQueryHookResult = ReturnType<typeof useGetRoutesQuery>;
export type GetRoutesLazyQueryHookResult = ReturnType<typeof useGetRoutesLazyQuery>;
export type GetRoutesSuspenseQueryHookResult = ReturnType<typeof useGetRoutesSuspenseQuery>;
export type GetRoutesQueryResult = Apollo.QueryResult<GetRoutesQuery, GetRoutesQueryVariables>;
export const GetTripsDocument = gql`
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
    `;

/**
 * __useGetTripsQuery__
 *
 * To run a query within a React component, call `useGetTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTripsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTripsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTripsQuery, GetTripsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTripsQuery, GetTripsQueryVariables>(GetTripsDocument, options);
      }
export function useGetTripsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTripsQuery, GetTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTripsQuery, GetTripsQueryVariables>(GetTripsDocument, options);
        }
// @ts-ignore
export function useGetTripsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetTripsQuery, GetTripsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTripsQuery, GetTripsQueryVariables>;
export function useGetTripsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTripsQuery, GetTripsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTripsQuery | undefined, GetTripsQueryVariables>;
export function useGetTripsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTripsQuery, GetTripsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTripsQuery, GetTripsQueryVariables>(GetTripsDocument, options);
        }
export type GetTripsQueryHookResult = ReturnType<typeof useGetTripsQuery>;
export type GetTripsLazyQueryHookResult = ReturnType<typeof useGetTripsLazyQuery>;
export type GetTripsSuspenseQueryHookResult = ReturnType<typeof useGetTripsSuspenseQuery>;
export type GetTripsQueryResult = Apollo.QueryResult<GetTripsQuery, GetTripsQueryVariables>;
export const GetTripByIdDocument = gql`
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
    `;

/**
 * __useGetTripByIdQuery__
 *
 * To run a query within a React component, call `useGetTripByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTripByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTripByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTripByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTripByIdQuery, GetTripByIdQueryVariables> & ({ variables: GetTripByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTripByIdQuery, GetTripByIdQueryVariables>(GetTripByIdDocument, options);
      }
export function useGetTripByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTripByIdQuery, GetTripByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTripByIdQuery, GetTripByIdQueryVariables>(GetTripByIdDocument, options);
        }
// @ts-ignore
export function useGetTripByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetTripByIdQuery, GetTripByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTripByIdQuery, GetTripByIdQueryVariables>;
export function useGetTripByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTripByIdQuery, GetTripByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTripByIdQuery | undefined, GetTripByIdQueryVariables>;
export function useGetTripByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTripByIdQuery, GetTripByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTripByIdQuery, GetTripByIdQueryVariables>(GetTripByIdDocument, options);
        }
export type GetTripByIdQueryHookResult = ReturnType<typeof useGetTripByIdQuery>;
export type GetTripByIdLazyQueryHookResult = ReturnType<typeof useGetTripByIdLazyQuery>;
export type GetTripByIdSuspenseQueryHookResult = ReturnType<typeof useGetTripByIdSuspenseQuery>;
export type GetTripByIdQueryResult = Apollo.QueryResult<GetTripByIdQuery, GetTripByIdQueryVariables>;
export const GetWeekdaysDocument = gql`
    query getWeekdays {
  weekdays {
    id
    name
  }
}
    `;

/**
 * __useGetWeekdaysQuery__
 *
 * To run a query within a React component, call `useGetWeekdaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWeekdaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWeekdaysQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWeekdaysQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetWeekdaysQuery, GetWeekdaysQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetWeekdaysQuery, GetWeekdaysQueryVariables>(GetWeekdaysDocument, options);
      }
export function useGetWeekdaysLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWeekdaysQuery, GetWeekdaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetWeekdaysQuery, GetWeekdaysQueryVariables>(GetWeekdaysDocument, options);
        }
// @ts-ignore
export function useGetWeekdaysSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetWeekdaysQuery, GetWeekdaysQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetWeekdaysQuery, GetWeekdaysQueryVariables>;
export function useGetWeekdaysSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetWeekdaysQuery, GetWeekdaysQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetWeekdaysQuery | undefined, GetWeekdaysQueryVariables>;
export function useGetWeekdaysSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetWeekdaysQuery, GetWeekdaysQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetWeekdaysQuery, GetWeekdaysQueryVariables>(GetWeekdaysDocument, options);
        }
export type GetWeekdaysQueryHookResult = ReturnType<typeof useGetWeekdaysQuery>;
export type GetWeekdaysLazyQueryHookResult = ReturnType<typeof useGetWeekdaysLazyQuery>;
export type GetWeekdaysSuspenseQueryHookResult = ReturnType<typeof useGetWeekdaysSuspenseQuery>;
export type GetWeekdaysQueryResult = Apollo.QueryResult<GetWeekdaysQuery, GetWeekdaysQueryVariables>;
export const GetWeekdayByIdDocument = gql`
    query getWeekdayById($id: Int!) {
  weekdayById(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetWeekdayByIdQuery__
 *
 * To run a query within a React component, call `useGetWeekdayByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWeekdayByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWeekdayByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWeekdayByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables> & ({ variables: GetWeekdayByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>(GetWeekdayByIdDocument, options);
      }
export function useGetWeekdayByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>(GetWeekdayByIdDocument, options);
        }
// @ts-ignore
export function useGetWeekdayByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>;
export function useGetWeekdayByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetWeekdayByIdQuery | undefined, GetWeekdayByIdQueryVariables>;
export function useGetWeekdayByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>(GetWeekdayByIdDocument, options);
        }
export type GetWeekdayByIdQueryHookResult = ReturnType<typeof useGetWeekdayByIdQuery>;
export type GetWeekdayByIdLazyQueryHookResult = ReturnType<typeof useGetWeekdayByIdLazyQuery>;
export type GetWeekdayByIdSuspenseQueryHookResult = ReturnType<typeof useGetWeekdayByIdSuspenseQuery>;
export type GetWeekdayByIdQueryResult = Apollo.QueryResult<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>;
export const GetTimezonesDocument = gql`
    query getTimezones {
  timezones {
    id
    name
    region
  }
}
    `;

/**
 * __useGetTimezonesQuery__
 *
 * To run a query within a React component, call `useGetTimezonesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTimezonesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTimezonesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTimezonesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTimezonesQuery, GetTimezonesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTimezonesQuery, GetTimezonesQueryVariables>(GetTimezonesDocument, options);
      }
export function useGetTimezonesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTimezonesQuery, GetTimezonesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTimezonesQuery, GetTimezonesQueryVariables>(GetTimezonesDocument, options);
        }
// @ts-ignore
export function useGetTimezonesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetTimezonesQuery, GetTimezonesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTimezonesQuery, GetTimezonesQueryVariables>;
export function useGetTimezonesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTimezonesQuery, GetTimezonesQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTimezonesQuery | undefined, GetTimezonesQueryVariables>;
export function useGetTimezonesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTimezonesQuery, GetTimezonesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTimezonesQuery, GetTimezonesQueryVariables>(GetTimezonesDocument, options);
        }
export type GetTimezonesQueryHookResult = ReturnType<typeof useGetTimezonesQuery>;
export type GetTimezonesLazyQueryHookResult = ReturnType<typeof useGetTimezonesLazyQuery>;
export type GetTimezonesSuspenseQueryHookResult = ReturnType<typeof useGetTimezonesSuspenseQuery>;
export type GetTimezonesQueryResult = Apollo.QueryResult<GetTimezonesQuery, GetTimezonesQueryVariables>;
export const GetTimezoneByIdDocument = gql`
    query getTimezoneById($id: Int!) {
  timezoneById(id: $id) {
    id
    name
    region
  }
}
    `;

/**
 * __useGetTimezoneByIdQuery__
 *
 * To run a query within a React component, call `useGetTimezoneByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTimezoneByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTimezoneByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTimezoneByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables> & ({ variables: GetTimezoneByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>(GetTimezoneByIdDocument, options);
      }
export function useGetTimezoneByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>(GetTimezoneByIdDocument, options);
        }
// @ts-ignore
export function useGetTimezoneByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>;
export function useGetTimezoneByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetTimezoneByIdQuery | undefined, GetTimezoneByIdQueryVariables>;
export function useGetTimezoneByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>(GetTimezoneByIdDocument, options);
        }
export type GetTimezoneByIdQueryHookResult = ReturnType<typeof useGetTimezoneByIdQuery>;
export type GetTimezoneByIdLazyQueryHookResult = ReturnType<typeof useGetTimezoneByIdLazyQuery>;
export type GetTimezoneByIdSuspenseQueryHookResult = ReturnType<typeof useGetTimezoneByIdSuspenseQuery>;
export type GetTimezoneByIdQueryResult = Apollo.QueryResult<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>;