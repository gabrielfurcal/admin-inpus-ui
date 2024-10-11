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