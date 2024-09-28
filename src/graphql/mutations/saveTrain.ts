import { gql } from "@apollo/client";

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