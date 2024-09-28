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
  distance: Scalars['Float']['output'];
  endStation?: Maybe<Station>;
  id: Scalars['ID']['output'];
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
  routeId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Status>;
  trainId?: Maybe<Scalars['Int']['output']>;
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
  cityId: Scalars['Int']['output'];
  countryCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
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
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  schedules: Array<Schedule>;
};

export type StatusInput = {
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type Train = {
  __typename?: 'Train';
  capacity: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  maxSpeed: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type TrainInput = {
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  maxSpeed?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SaveTrainMutationVariables = Exact<{
  train: TrainInput;
}>;


export type SaveTrainMutation = { __typename?: 'Mutation', saveTrain?: { __typename?: 'Train', id: string, type: string, capacity: number, maxSpeed: number } | null };

export type GetTrainByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTrainByIdQuery = { __typename?: 'Query', trainById?: { __typename?: 'Train', id: string, type: string, capacity: number, maxSpeed: number } | null };

export type GetTrainsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTrainsQuery = { __typename?: 'Query', trains: Array<{ __typename?: 'Train', id: string, type: string, capacity: number, maxSpeed: number }> };


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