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