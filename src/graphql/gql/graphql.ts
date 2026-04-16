/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type CityPage = {
  __typename?: 'CityPage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<City>;
  totalCount: Scalars['Int']['output'];
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

export type EmployeePage = {
  __typename?: 'EmployeePage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Employee>;
  totalCount: Scalars['Int']['output'];
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
  citiesPage: CityPage;
  cityById?: Maybe<City>;
  employeeById?: Maybe<Employee>;
  employees: Array<Employee>;
  employeesPage: EmployeePage;
  routeById?: Maybe<Route>;
  routes: Array<Route>;
  routesPage: RoutePage;
  scheduleById?: Maybe<Schedule>;
  schedules: Array<Schedule>;
  schedulesFiltered?: Maybe<Array<Schedule>>;
  schedulesPage: SchedulePage;
  stationById?: Maybe<Station>;
  stations: Array<Station>;
  stationsPage: StationPage;
  status: Array<Status>;
  statusById?: Maybe<Status>;
  statusPage: StatusPage;
  timezoneById?: Maybe<Timezone>;
  timezones: Array<Timezone>;
  timezonesPage: TimezonePage;
  trainById?: Maybe<Train>;
  trains: Array<Train>;
  trainsPage: TrainPage;
  tripById?: Maybe<Trip>;
  trips: Array<Trip>;
  tripsFiltered?: Maybe<Array<Trip>>;
  tripsPage: TripPage;
  weekdayById?: Maybe<Weekday>;
  weekdays: Array<Weekday>;
  weekdaysPage: WeekdayPage;
};


export type QueryCitiesPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCityByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmployeeByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmployeesPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRouteByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRoutesPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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


export type QuerySchedulesPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStationByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStationsPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStatusByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStatusPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimezoneByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimezonesPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainsPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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


export type QueryTripsPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWeekdayByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWeekdaysPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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

export type RoutePage = {
  __typename?: 'RoutePage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Route>;
  totalCount: Scalars['Int']['output'];
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

export type SchedulePage = {
  __typename?: 'SchedulePage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Schedule>;
  totalCount: Scalars['Int']['output'];
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
  timezoneId?: InputMaybe<Scalars['Int']['input']>;
};

export type StationPage = {
  __typename?: 'StationPage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Station>;
  totalCount: Scalars['Int']['output'];
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

export type StatusPage = {
  __typename?: 'StatusPage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Status>;
  totalCount: Scalars['Int']['output'];
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

export type TimezonePage = {
  __typename?: 'TimezonePage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Timezone>;
  totalCount: Scalars['Int']['output'];
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

export type TrainPage = {
  __typename?: 'TrainPage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Train>;
  totalCount: Scalars['Int']['output'];
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

export type TripPage = {
  __typename?: 'TripPage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Trip>;
  totalCount: Scalars['Int']['output'];
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

export type WeekdayPage = {
  __typename?: 'WeekdayPage';
  hasNextPage: Scalars['Boolean']['output'];
  items: Array<Weekday>;
  totalCount: Scalars['Int']['output'];
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

export type GetCitiesPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCitiesPageQuery = { __typename?: 'Query', citiesPage: { __typename?: 'CityPage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'City', id: string, city: string, province: string, country: string }> } };

export type GetCityByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetCityByIdQuery = { __typename?: 'Query', cityById?: { __typename?: 'City', id: string, city: string, province: string, country: string } | null };

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', employees: Array<{ __typename?: 'Employee', id: string, firstName: string, lastName: string, position: string, phoneNumber: string, email: string }> };

export type GetEmployeesPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetEmployeesPageQuery = { __typename?: 'Query', employeesPage: { __typename?: 'EmployeePage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Employee', id: string, firstName: string, lastName: string, position: string, phoneNumber: string, email: string }> } };

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

export type GetStatusPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetStatusPageQuery = { __typename?: 'Query', statusPage: { __typename?: 'StatusPage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Status', id: string, name: string, description?: string | null }> } };

export type GetTrainByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTrainByIdQuery = { __typename?: 'Query', trainById?: { __typename?: 'Train', id: string, type: string, capacity?: number | null, maxSpeed?: number | null } | null };

export type GetTrainsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainsQuery = { __typename?: 'Query', trains: Array<{ __typename?: 'Train', id: string, type: string, capacity?: number | null, maxSpeed?: number | null }> };

export type GetTrainsPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTrainsPageQuery = { __typename?: 'Query', trainsPage: { __typename?: 'TrainPage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Train', id: string, type: string, capacity?: number | null, maxSpeed?: number | null }> } };

export type GetStationByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetStationByIdQuery = { __typename?: 'Query', stationById?: { __typename?: 'Station', id: string, name: string, countryCode?: string | null, phone?: string | null, postalCode?: string | null, latitude?: number | null, longitude?: number | null, imageUrl?: string | null, timezone?: { __typename?: 'Timezone', id: string, name: string, region: string } | null, city?: { __typename?: 'City', id: string, city: string, province: string, country: string } | null } | null };

export type GetStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStationsQuery = { __typename?: 'Query', stations: Array<{ __typename?: 'Station', id: string, name: string, countryCode?: string | null, phone?: string | null, postalCode?: string | null, latitude?: number | null, longitude?: number | null, imageUrl?: string | null, timezone?: { __typename?: 'Timezone', id: string, name: string, region: string } | null, city?: { __typename?: 'City', id: string, city: string, province: string, country: string } | null }> };

export type GetStationsPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetStationsPageQuery = { __typename?: 'Query', stationsPage: { __typename?: 'StationPage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Station', id: string, name: string, countryCode?: string | null, phone?: string | null, postalCode?: string | null, latitude?: number | null, longitude?: number | null, imageUrl?: string | null, timezone?: { __typename?: 'Timezone', id: string, name: string, region: string } | null, city?: { __typename?: 'City', id: string, city: string, province: string, country: string } | null }> } };

export type GetScheduleByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetScheduleByIdQuery = { __typename?: 'Query', scheduleById?: { __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, route?: { __typename?: 'Route', id?: string | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null, departureWeekday?: { __typename?: 'Weekday', id: string, name: string } | null, arrivalWeekday?: { __typename?: 'Weekday', id: string, name: string } | null } | null };

export type GetSchedulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSchedulesQuery = { __typename?: 'Query', schedules: Array<{ __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, route?: { __typename?: 'Route', id?: string | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null, departureWeekday?: { __typename?: 'Weekday', id: string, name: string } | null, arrivalWeekday?: { __typename?: 'Weekday', id: string, name: string } | null }> };

export type GetSchedulesPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetSchedulesPageQuery = { __typename?: 'Query', schedulesPage: { __typename?: 'SchedulePage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, route?: { __typename?: 'Route', id?: string | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null, departureWeekday?: { __typename?: 'Weekday', id: string, name: string } | null, arrivalWeekday?: { __typename?: 'Weekday', id: string, name: string } | null }> } };

export type GetRouteByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetRouteByIdQuery = { __typename?: 'Query', routeById?: { __typename?: 'Route', id?: string | null, distance?: number | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null };

export type GetRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoutesQuery = { __typename?: 'Query', routes: Array<{ __typename?: 'Route', id?: string | null, distance?: number | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null }> };

export type GetRoutesPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetRoutesPageQuery = { __typename?: 'Query', routesPage: { __typename?: 'RoutePage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Route', id?: string | null, distance?: number | null, startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null }> } };

export type GetTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTripsQuery = { __typename?: 'Query', trips: Array<{ __typename?: 'Trip', id: string, startTime?: string | null, endTime?: string | null, schedule?: { __typename?: 'Schedule', id: string } | null, train?: { __typename?: 'Train', id: string, type: string } | null, status?: { __typename?: 'Status', id: string, name: string } | null }> };

export type GetTripsPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTripsPageQuery = { __typename?: 'Query', tripsPage: { __typename?: 'TripPage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Trip', id: string, startTime?: string | null, endTime?: string | null, schedule?: { __typename?: 'Schedule', id: string } | null, train?: { __typename?: 'Train', id: string, type: string } | null, status?: { __typename?: 'Status', id: string, name: string } | null }> } };

export type GetTripByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTripByIdQuery = { __typename?: 'Query', tripById?: { __typename?: 'Trip', id: string, startTime?: string | null, endTime?: string | null, schedule?: { __typename?: 'Schedule', id: string } | null, train?: { __typename?: 'Train', id: string, type: string } | null, status?: { __typename?: 'Status', id: string, name: string } | null } | null };

export type GetWeekdaysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWeekdaysQuery = { __typename?: 'Query', weekdays: Array<{ __typename?: 'Weekday', id: string, name: string }> };

export type GetWeekdaysPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetWeekdaysPageQuery = { __typename?: 'Query', weekdaysPage: { __typename?: 'WeekdayPage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Weekday', id: string, name: string }> } };

export type GetWeekdayByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetWeekdayByIdQuery = { __typename?: 'Query', weekdayById?: { __typename?: 'Weekday', id: string, name: string } | null };

export type GetTimezonesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTimezonesQuery = { __typename?: 'Query', timezones: Array<{ __typename?: 'Timezone', id: string, name: string, region: string }> };

export type GetTimezonesPageQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTimezonesPageQuery = { __typename?: 'Query', timezonesPage: { __typename?: 'TimezonePage', totalCount: number, hasNextPage: boolean, items: Array<{ __typename?: 'Timezone', id: string, name: string, region: string }> } };

export type GetTimezoneByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTimezoneByIdQuery = { __typename?: 'Query', timezoneById?: { __typename?: 'Timezone', id: string, name: string, region: string } | null };


export const SaveCityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveCity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<SaveCityMutation, SaveCityMutationVariables>;
export const DeleteCityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteCityMutation, DeleteCityMutationVariables>;
export const SaveEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employee"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"employee"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employee"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<SaveEmployeeMutation, SaveEmployeeMutationVariables>;
export const DeleteEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;
export const SaveStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StatusInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<SaveStatusMutation, SaveStatusMutationVariables>;
export const DeleteStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteStatusMutation, DeleteStatusMutationVariables>;
export const SaveTrainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveTrain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"train"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TrainInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveTrain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"train"},"value":{"kind":"Variable","name":{"kind":"Name","value":"train"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}}]}}]}}]} as unknown as DocumentNode<SaveTrainMutation, SaveTrainMutationVariables>;
export const DeleteTrainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTrain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTrain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteTrainMutation, DeleteTrainMutationVariables>;
export const SaveStationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveStation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"station"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveStation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"station"},"value":{"kind":"Variable","name":{"kind":"Name","value":"station"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<SaveStationMutation, SaveStationMutationVariables>;
export const DeleteStationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteStation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteStationMutation, DeleteStationMutationVariables>;
export const SaveScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schedule"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"schedule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schedule"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"route"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"departureTime"}},{"kind":"Field","name":{"kind":"Name","value":"departureWeekday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arrivalTime"}},{"kind":"Field","name":{"kind":"Name","value":"arrivalWeekday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SaveScheduleMutation, SaveScheduleMutationVariables>;
export const DeleteScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSchedule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteScheduleMutation, DeleteScheduleMutationVariables>;
export const SaveRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveRoute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"route"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RouteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveRoute"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"route"},"value":{"kind":"Variable","name":{"kind":"Name","value":"route"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distance"}}]}}]}}]} as unknown as DocumentNode<SaveRouteMutation, SaveRouteMutationVariables>;
export const DeleteRouteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteRoute"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRoute"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteRouteMutation, DeleteRouteMutationVariables>;
export const SaveTripDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveTrip"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"trip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TripInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveTrip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"trip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"trip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"train"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SaveTripMutation, SaveTripMutationVariables>;
export const DeleteTripDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTrip"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTrip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteTripMutation, DeleteTripMutationVariables>;
export const SaveWeekdayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveWeekday"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"weekday"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WeekdayInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveWeekday"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"weekday"},"value":{"kind":"Variable","name":{"kind":"Name","value":"weekday"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<SaveWeekdayMutation, SaveWeekdayMutationVariables>;
export const DeleteWeekdayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteWeekday"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteWeekday"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteWeekdayMutation, DeleteWeekdayMutationVariables>;
export const SaveTimezoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"saveTimezone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timezone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TimezoneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveTimezone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timezone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timezone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}}]}}]} as unknown as DocumentNode<SaveTimezoneMutation, SaveTimezoneMutationVariables>;
export const DeleteTimezoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTimezone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTimezone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteTimezoneMutation, DeleteTimezoneMutationVariables>;
export const GetCitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetCitiesPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCitiesPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"citiesPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetCitiesPageQuery, GetCitiesPageQueryVariables>;
export const GetCityByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCityById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cityById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]} as unknown as DocumentNode<GetCityByIdQuery, GetCityByIdQueryVariables>;
export const GetEmployeesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetEmployeesQuery, GetEmployeesQueryVariables>;
export const GetEmployeesPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeesPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeesPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetEmployeesPageQuery, GetEmployeesPageQueryVariables>;
export const GetEmployeeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEmployeeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employeeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>;
export const GetStatusByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStatusById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetStatusByIdQuery, GetStatusByIdQueryVariables>;
export const GetStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetStatusQuery, GetStatusQueryVariables>;
export const GetStatusPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStatusPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statusPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetStatusPageQuery, GetStatusPageQueryVariables>;
export const GetTrainByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrainById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trainById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}}]}}]}}]} as unknown as DocumentNode<GetTrainByIdQuery, GetTrainByIdQueryVariables>;
export const GetTrainsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}}]}}]}}]} as unknown as DocumentNode<GetTrainsQuery, GetTrainsQueryVariables>;
export const GetTrainsPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrainsPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trainsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"capacity"}},{"kind":"Field","name":{"kind":"Name","value":"maxSpeed"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetTrainsPageQuery, GetTrainsPageQueryVariables>;
export const GetStationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stationById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]}}]} as unknown as DocumentNode<GetStationByIdQuery, GetStationByIdQueryVariables>;
export const GetStationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}}]}}]} as unknown as DocumentNode<GetStationsQuery, GetStationsQueryVariables>;
export const GetStationsPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStationsPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stationsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"countryCode"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"country"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetStationsPageQuery, GetStationsPageQueryVariables>;
export const GetScheduleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getScheduleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scheduleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"route"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"departureTime"}},{"kind":"Field","name":{"kind":"Name","value":"departureWeekday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arrivalTime"}},{"kind":"Field","name":{"kind":"Name","value":"arrivalWeekday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>;
export const GetSchedulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSchedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schedules"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"route"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"departureTime"}},{"kind":"Field","name":{"kind":"Name","value":"departureWeekday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arrivalTime"}},{"kind":"Field","name":{"kind":"Name","value":"arrivalWeekday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetSchedulesQuery, GetSchedulesQueryVariables>;
export const GetSchedulesPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSchedulesPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"schedulesPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"route"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"departureTime"}},{"kind":"Field","name":{"kind":"Name","value":"departureWeekday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arrivalTime"}},{"kind":"Field","name":{"kind":"Name","value":"arrivalWeekday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetSchedulesPageQuery, GetSchedulesPageQueryVariables>;
export const GetRouteByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRouteById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"routeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distance"}}]}}]}}]} as unknown as DocumentNode<GetRouteByIdQuery, GetRouteByIdQueryVariables>;
export const GetRoutesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRoutes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"routes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distance"}}]}}]}}]} as unknown as DocumentNode<GetRoutesQuery, GetRoutesQueryVariables>;
export const GetRoutesPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRoutesPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"routesPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"endStation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"distance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetRoutesPageQuery, GetRoutesPageQueryVariables>;
export const GetTripsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTrips"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trips"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"train"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTripsQuery, GetTripsQueryVariables>;
export const GetTripsPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTripsPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tripsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"train"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetTripsPageQuery, GetTripsPageQueryVariables>;
export const GetTripByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTripById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tripById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"schedule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"train"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetTripByIdQuery, GetTripByIdQueryVariables>;
export const GetWeekdaysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWeekdays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weekdays"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetWeekdaysQuery, GetWeekdaysQueryVariables>;
export const GetWeekdaysPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWeekdaysPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weekdaysPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetWeekdaysPageQuery, GetWeekdaysPageQueryVariables>;
export const GetWeekdayByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWeekdayById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"weekdayById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetWeekdayByIdQuery, GetWeekdayByIdQueryVariables>;
export const GetTimezonesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTimezones"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timezones"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}}]}}]} as unknown as DocumentNode<GetTimezonesQuery, GetTimezonesQueryVariables>;
export const GetTimezonesPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTimezones"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timezonesPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]} as unknown as DocumentNode<GetTimezonesPageQuery, GetTimezonesPageQueryVariables>;
export const GetTimezoneByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTimezoneById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timezoneById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"region"}}]}}]}}]} as unknown as DocumentNode<GetTimezoneByIdQuery, GetTimezoneByIdQueryVariables>;