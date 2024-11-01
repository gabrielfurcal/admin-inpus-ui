import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  deleteTrain?: Maybe<Scalars['Boolean']['output']>;
  saveCity?: Maybe<City>;
  saveEmployee?: Maybe<Employee>;
  saveRoute?: Maybe<Route>;
  saveSchedule?: Maybe<Schedule>;
  saveStation?: Maybe<Station>;
  saveStatus?: Maybe<Status>;
  saveTrain?: Maybe<Train>;
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
export type MutationDeleteTrainArgs = {
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
export type MutationSaveTrainArgs = {
  train?: InputMaybe<TrainInput>;
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
  stationById?: Maybe<Station>;
  stations: Array<Station>;
  status: Array<Status>;
  statusById?: Maybe<Status>;
  trainById?: Maybe<Train>;
  trains: Array<Train>;
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


export type QueryStationByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStatusByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTrainByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Route = {
  __typename?: 'Route';
  distance?: Maybe<Scalars['Float']['output']>;
  endStation?: Maybe<Station>;
  id?: Scalars['ID']['output'];
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
  departureTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  route?: Maybe<Route>;
  status?: Maybe<Status>;
  train?: Maybe<Train>;
};

export type ScheduleInput = {
  arrivalTime?: InputMaybe<Scalars['String']['input']>;
  departureTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  routeId?: InputMaybe<Scalars['Int']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  trainId?: InputMaybe<Scalars['Int']['input']>;
};

export type Station = {
  __typename?: 'Station';
  cityId?: Scalars['Int']['output'];
  countryCode?: Scalars['String']['output'];
  id?: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Scalars['String']['output'];
  phone?: Scalars['String']['output'];
  postalCode?: Scalars['String']['output'];
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

export type Train = {
  __typename?: 'Train';
  capacity?: Maybe<Scalars['Int']['output']>;
  id?: Scalars['ID']['output'];
  maxSpeed?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type TrainInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  maxSpeed?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
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


export type SaveStationMutation = { __typename?: 'Mutation', saveStation?: { __typename?: 'Station', id: string, name: string, countryCode: string, phone: string, postalCode: string, latitude?: number | null, longitude?: number | null, cityId: number, imageUrl?: string | null } | null };

export type DeleteStationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteStationMutation = { __typename?: 'Mutation', deleteStation?: boolean | null };

export type SaveScheduleMutationVariables = Exact<{
  schedule: ScheduleInput;
}>;


export type SaveScheduleMutation = { __typename?: 'Mutation', saveSchedule?: { __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, train?: { __typename?: 'Train', type: string } | null, route?: { __typename?: 'Route', startStation?: { __typename?: 'Station', name: string } | null, endStation?: { __typename?: 'Station', name: string } | null } | null, status?: { __typename?: 'Status', name: string } | null } | null };

export type DeleteScheduleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteScheduleMutation = { __typename?: 'Mutation', deleteSchedule?: boolean | null };

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


export type GetStationByIdQuery = { __typename?: 'Query', stationById?: { __typename?: 'Station', id: string, name: string, countryCode: string, phone: string, postalCode: string, latitude?: number | null, longitude?: number | null, cityId: number, imageUrl?: string | null } | null };

export type GetStationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStationsQuery = { __typename?: 'Query', stations: Array<{ __typename?: 'Station', id: string, name: string, countryCode: string, phone: string, postalCode: string, latitude?: number | null, longitude?: number | null, cityId: number, imageUrl?: string | null }> };

export type GetScheduleByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetScheduleByIdQuery = { __typename?: 'Query', scheduleById?: { __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, train?: { __typename?: 'Train', id: string, type: string } | null, route?: { __typename?: 'Route', startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null, status?: { __typename?: 'Status', name: string } | null } | null };

export type GetSchedulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSchedulesQuery = { __typename?: 'Query', schedules: Array<{ __typename?: 'Schedule', id: string, departureTime?: string | null, arrivalTime?: string | null, train?: { __typename?: 'Train', id: string, type: string } | null, route?: { __typename?: 'Route', startStation?: { __typename?: 'Station', id: string, name: string } | null, endStation?: { __typename?: 'Station', id: string, name: string } | null } | null, status?: { __typename?: 'Status', id: string, name: string } | null }> };


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
export function useSaveCityMutation(baseOptions?: Apollo.MutationHookOptions<SaveCityMutation, SaveCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveCityMutation, SaveCityMutationVariables>(SaveCityDocument, options);
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
export function useDeleteCityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCityMutation, DeleteCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCityMutation, DeleteCityMutationVariables>(DeleteCityDocument, options);
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
export function useSaveEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<SaveEmployeeMutation, SaveEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveEmployeeMutation, SaveEmployeeMutationVariables>(SaveEmployeeDocument, options);
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
export function useDeleteEmployeeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>(DeleteEmployeeDocument, options);
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
export function useSaveStatusMutation(baseOptions?: Apollo.MutationHookOptions<SaveStatusMutation, SaveStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveStatusMutation, SaveStatusMutationVariables>(SaveStatusDocument, options);
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
export function useDeleteStatusMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStatusMutation, DeleteStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStatusMutation, DeleteStatusMutationVariables>(DeleteStatusDocument, options);
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
export function useSaveTrainMutation(baseOptions?: Apollo.MutationHookOptions<SaveTrainMutation, SaveTrainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveTrainMutation, SaveTrainMutationVariables>(SaveTrainDocument, options);
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
export function useDeleteTrainMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTrainMutation, DeleteTrainMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTrainMutation, DeleteTrainMutationVariables>(DeleteTrainDocument, options);
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
    cityId
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
export function useSaveStationMutation(baseOptions?: Apollo.MutationHookOptions<SaveStationMutation, SaveStationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveStationMutation, SaveStationMutationVariables>(SaveStationDocument, options);
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
export function useDeleteStationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStationMutation, DeleteStationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStationMutation, DeleteStationMutationVariables>(DeleteStationDocument, options);
      }
export type DeleteStationMutationHookResult = ReturnType<typeof useDeleteStationMutation>;
export type DeleteStationMutationResult = Apollo.MutationResult<DeleteStationMutation>;
export type DeleteStationMutationOptions = Apollo.BaseMutationOptions<DeleteStationMutation, DeleteStationMutationVariables>;
export const SaveScheduleDocument = gql`
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
export function useSaveScheduleMutation(baseOptions?: Apollo.MutationHookOptions<SaveScheduleMutation, SaveScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveScheduleMutation, SaveScheduleMutationVariables>(SaveScheduleDocument, options);
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
export function useDeleteScheduleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteScheduleMutation, DeleteScheduleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteScheduleMutation, DeleteScheduleMutationVariables>(DeleteScheduleDocument, options);
      }
export type DeleteScheduleMutationHookResult = ReturnType<typeof useDeleteScheduleMutation>;
export type DeleteScheduleMutationResult = Apollo.MutationResult<DeleteScheduleMutation>;
export type DeleteScheduleMutationOptions = Apollo.BaseMutationOptions<DeleteScheduleMutation, DeleteScheduleMutationVariables>;
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
export function useGetCitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
      }
export function useGetCitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
        }
export function useGetCitiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
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
export function useGetCityByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables> & ({ variables: GetCityByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
      }
export function useGetCityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
        }
export function useGetCityByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
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
export function useGetEmployeesQuery(baseOptions?: Apollo.QueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
      }
export function useGetEmployeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
        }
export function useGetEmployeesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEmployeesQuery, GetEmployeesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(GetEmployeesDocument, options);
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
export function useGetEmployeeByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables> & ({ variables: GetEmployeeByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>(GetEmployeeByIdDocument, options);
      }
export function useGetEmployeeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>(GetEmployeeByIdDocument, options);
        }
export function useGetEmployeeByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>(GetEmployeeByIdDocument, options);
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
export function useGetStatusByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStatusByIdQuery, GetStatusByIdQueryVariables> & ({ variables: GetStatusByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatusByIdQuery, GetStatusByIdQueryVariables>(GetStatusByIdDocument, options);
      }
export function useGetStatusByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatusByIdQuery, GetStatusByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatusByIdQuery, GetStatusByIdQueryVariables>(GetStatusByIdDocument, options);
        }
export function useGetStatusByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStatusByIdQuery, GetStatusByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStatusByIdQuery, GetStatusByIdQueryVariables>(GetStatusByIdDocument, options);
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
export function useGetStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
      }
export function useGetStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
        }
export function useGetStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStatusQuery, GetStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStatusQuery, GetStatusQueryVariables>(GetStatusDocument, options);
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
export function useGetTrainByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTrainByIdQuery, GetTrainByIdQueryVariables> & ({ variables: GetTrainByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrainByIdQuery, GetTrainByIdQueryVariables>(GetTrainByIdDocument, options);
      }
export function useGetTrainByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrainByIdQuery, GetTrainByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrainByIdQuery, GetTrainByIdQueryVariables>(GetTrainByIdDocument, options);
        }
export function useGetTrainByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTrainByIdQuery, GetTrainByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrainByIdQuery, GetTrainByIdQueryVariables>(GetTrainByIdDocument, options);
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
export function useGetTrainsQuery(baseOptions?: Apollo.QueryHookOptions<GetTrainsQuery, GetTrainsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrainsQuery, GetTrainsQueryVariables>(GetTrainsDocument, options);
      }
export function useGetTrainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrainsQuery, GetTrainsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrainsQuery, GetTrainsQueryVariables>(GetTrainsDocument, options);
        }
export function useGetTrainsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTrainsQuery, GetTrainsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTrainsQuery, GetTrainsQueryVariables>(GetTrainsDocument, options);
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
    cityId
    imageUrl
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
export function useGetStationByIdQuery(baseOptions: Apollo.QueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables> & ({ variables: GetStationByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStationByIdQuery, GetStationByIdQueryVariables>(GetStationByIdDocument, options);
      }
export function useGetStationByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStationByIdQuery, GetStationByIdQueryVariables>(GetStationByIdDocument, options);
        }
export function useGetStationByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStationByIdQuery, GetStationByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStationByIdQuery, GetStationByIdQueryVariables>(GetStationByIdDocument, options);
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
    cityId
    imageUrl
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
export function useGetStationsQuery(baseOptions?: Apollo.QueryHookOptions<GetStationsQuery, GetStationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStationsQuery, GetStationsQueryVariables>(GetStationsDocument, options);
      }
export function useGetStationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStationsQuery, GetStationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStationsQuery, GetStationsQueryVariables>(GetStationsDocument, options);
        }
export function useGetStationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetStationsQuery, GetStationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetStationsQuery, GetStationsQueryVariables>(GetStationsDocument, options);
        }
export type GetStationsQueryHookResult = ReturnType<typeof useGetStationsQuery>;
export type GetStationsLazyQueryHookResult = ReturnType<typeof useGetStationsLazyQuery>;
export type GetStationsSuspenseQueryHookResult = ReturnType<typeof useGetStationsSuspenseQuery>;
export type GetStationsQueryResult = Apollo.QueryResult<GetStationsQuery, GetStationsQueryVariables>;
export const GetScheduleByIdDocument = gql`
    query getScheduleById($id: Int!) {
  scheduleById(id: $id) {
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
export function useGetScheduleByIdQuery(baseOptions: Apollo.QueryHookOptions<GetScheduleByIdQuery, GetScheduleByIdQueryVariables> & ({ variables: GetScheduleByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>(GetScheduleByIdDocument, options);
      }
export function useGetScheduleByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>(GetScheduleByIdDocument, options);
        }
export function useGetScheduleByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>(GetScheduleByIdDocument, options);
        }
export type GetScheduleByIdQueryHookResult = ReturnType<typeof useGetScheduleByIdQuery>;
export type GetScheduleByIdLazyQueryHookResult = ReturnType<typeof useGetScheduleByIdLazyQuery>;
export type GetScheduleByIdSuspenseQueryHookResult = ReturnType<typeof useGetScheduleByIdSuspenseQuery>;
export type GetScheduleByIdQueryResult = Apollo.QueryResult<GetScheduleByIdQuery, GetScheduleByIdQueryVariables>;
export const GetSchedulesDocument = gql`
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
export function useGetSchedulesQuery(baseOptions?: Apollo.QueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
      }
export function useGetSchedulesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
        }
export function useGetSchedulesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSchedulesQuery, GetSchedulesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSchedulesQuery, GetSchedulesQueryVariables>(GetSchedulesDocument, options);
        }
export type GetSchedulesQueryHookResult = ReturnType<typeof useGetSchedulesQuery>;
export type GetSchedulesLazyQueryHookResult = ReturnType<typeof useGetSchedulesLazyQuery>;
export type GetSchedulesSuspenseQueryHookResult = ReturnType<typeof useGetSchedulesSuspenseQuery>;
export type GetSchedulesQueryResult = Apollo.QueryResult<GetSchedulesQuery, GetSchedulesQueryVariables>;