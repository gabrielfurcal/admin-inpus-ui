export type TRAINS_TYPE = {
    trains: Train[]
    trainById: Train
}

export type Train = {
    id?: number,
    type?: string,
    capacity?: number,
    maxSpeed?: number
}