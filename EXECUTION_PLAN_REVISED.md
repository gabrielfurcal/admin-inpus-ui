# UI Schema Update Execution Plan (REVISED)

## Overview
This document outlines all necessary changes to synchronize the UI with the updated GraphQL schema from the API. The schema has introduced 3 new entity types (Trip, Weekday, Timezone), modified existing types, and added new query/mutation operations.

**Key Principles:**
- Only fetch minimal fields needed (IDs and key properties)
- Use ID fields in inputs (scheduleId, trainId, statusId) NOT nested objects
- Follow existing page structure patterns (see Trains, CreateRoute examples)
- Use Select components for related entity selection
- Keep consistent with existing styling and patterns

---

## CRITICAL: Input Types vs Return Types

GraphQL mutations have TWO different type structures:

1. **INPUT (what you send to the server)** - must match the `*Input` types exactly
   - Example: `ScheduleInput` has `routeId`, `departureWeekdayId`, `arrivalWeekdayId`
   - You construct this from form values (convert id fields)

2. **RETURN/RESPONSE (what you get back from the server)** - defined by the `*` types  
   - Example: `Schedule` type has nested objects: `route`, `departureWeekday`, `arrivalWeekday`
   - The server resolves IDs to full objects automatically

**Critical Rule:**
- Requests are built with InputType structure (use ONLY ID fields listed in `*Input`)
- Responses follow Type structure (receive nested objects back)
- **NOT ALL fields in Type are settable via InputType**
  - Example: `Station` type has `timezone` field, but `StationInput` has NO `timezoneId` field
  - This means timezone is currently read-only for Stations

**ALWAYS check the `*Input` type definition to see what fields you can actually set!**

---

## Phase 1: GraphQL Operations (queries.ts & mutations.ts)

### 1.1 New Queries to Add to `src/graphql/queries.ts`

#### A. Trip Queries (Minimal fields only)
```typescript
export const GET_TRIPS = gql`
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
`

export const GET_TRIP_BY_ID = gql`
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
`
```

#### B. Weekday Queries
```typescript
export const GET_WEEKDAYS = gql`
    query getWeekdays {
        weekdays {
            id
            name
        }
    }
`

export const GET_WEEKDAY_BY_ID = gql`
    query getWeekdayById($id: Int!) {
        weekdayById(id: $id) {
            id
            name
        }
    }
`
```

#### C. Timezone Queries
```typescript
export const GET_TIMEZONES = gql`
    query getTimezones {
        timezones {
            id
            name
            region
        }
    }
`

export const GET_TIMEZONE_BY_ID = gql`
    query getTimezoneById($id: Int!) {
        timezoneById(id: $id) {
            id
            name
            region
        }
    }
`
```

#### D. Updated Schedule Queries (Add weekday fields - minimal)
**REPLACE** existing `GET_SCHEDULE_BY_ID` and `GET_SCHEDULES`:

```typescript
export const GET_SCHEDULE_BY_ID = gql`
    query getScheduleById($id: Int!) {
        scheduleById(id: $id) {
            id
            route {
                id
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
`

export const GET_SCHEDULES = gql`
    query getSchedules {
        schedules {
            id
            route {
                id
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
`
```

#### E. Updated Station Query (Add timezone - minimal)
**REPLACE** existing `GET_STATION_BY_ID`:

```typescript
export const GET_STATION_BY_ID = gql`
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
            }
            city {
                id
            }
        }
    }
`
```

Note: Keep `GET_STATIONS` as is, but verify it matches current usage.

### 1.2 New Mutations to Add to `src/graphql/mutations.ts`

#### A. Trip Mutations (Correct Input Structure)
```typescript
export const SAVE_TRIP = gql`
    mutation saveTrip($trip: TripInput!) {
        saveTrip(trip: $trip) {
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
`

export const DELETE_TRIP = gql`
    mutation deleteTrip($id: Int!) {
        deleteTrip(id: $id)
    }
`
```

**IMPORTANT:** 
- **Input Parameter** (`$trip: TripInput!`): Uses `TripInput` type with ID fields
- **Return Fields** (the `{ ... }` part): Uses `Trip` type with nested objects

The mutation code is CORRECT as shown. The confusion is between:
- **What you send** (TripInput with IDs) vs **What you get back** (Trip with nested objects)

Form must construct `TripInput` with ID fields:
- `scheduleId: number` (from selected schedule)
- `trainId: number` (from selected train)  
- `startTime: string`
- `endTime: string`

#### B. Weekday Mutations
```typescript
export const SAVE_WEEKDAY = gql`
    mutation saveWeekday($weekday: WeekdayInput!) {
        saveWeekday(weekday: $weekday) {
            id
            name
        }
    }
`

export const DELETE_WEEKDAY = gql`
    mutation deleteWeekday($id: Int!) {
        deleteWeekday(id: $id)
    }
`
```

#### C. Timezone Mutations
```typescript
export const SAVE_TIMEZONE = gql`
    mutation saveTimezone($timezone: TimezoneInput!) {
        saveTimezone(timezone: $timezone) {
            id
            name
            region
        }
    }
`

export const DELETE_TIMEZONE = gql`
    mutation deleteTimezone($id: Int!) {
        deleteTimezone(id: $id)
    }
`
```

#### D. Updated Schedule Mutation (Correct Input Structure)
**REPLACE** existing `SAVE_SCHEDULE`:

```typescript
export const SAVE_SCHEDULE = gql`
    mutation saveSchedule($schedule: ScheduleInput!) {
        saveSchedule(schedule: $schedule) {
            id
            route {
                id
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
`
```

**IMPORTANT:** 
- **Input Parameter** (`$schedule: ScheduleInput!`): Uses `ScheduleInput` type with ID fields
- **Return Fields** (the `{ ... }` part): Uses `Schedule` type with nested objects

Form must construct `ScheduleInput` with ID fields:
- `routeId: number` (from selected route)
- `departureWeekdayId: number` (from selected weekday)
- `arrivalWeekdayId: number` (from selected weekday)
- `departureTime: string`
- `arrivalTime: string`

#### E. Updated Station Mutation (Correct Input Structure)
**REPLACE** existing `SAVE_STATION`:

```typescript
export const SAVE_STATION = gql`
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
            city {
                id
            }
            timezone {
                id
                name
            }
        }
    }
`
```

**IMPORTANT:** Form must construct `StationInput` with ID fields:
- `cityId: number` (from selected city)
- `timezoneId: number` (from selected timezone)
- All other fields: name, countryCode, phone, postalCode, latitude, longitude, imageUrl

---

## Phase 2: Create New Pages

### 2.1 Create Trips CRUD Pages
**Location**: `src/pages/Trips/`

**Files to create:**
- `Trips.tsx` - List all trips (show id, schedule id, train type, startTime, endTime, status)
- `CreateTrip.tsx` - Create with selects for Schedule, Train, Status
- `EditTrip.tsx` - Edit existing trip
- `index.ts` - Barrel export

**Form pattern (from CreateRoute.tsx):**
- Use react-hook-form
- Fetch schedules, trains, and statuses using queries
- Map to SelectOption[] format: { key: id, value: displayName }
- Submit with IDs only: { scheduleId, trainId, statusId, startTime, endTime }

### 2.2 Create Weekdays CRUD Pages
**Location**: `src/pages/Weekdays/`

**Files to create:**
- `Weekdays.tsx` - List (id, name columns)
- `CreateWeekday.tsx` - Form with just name input
- `EditWeekday.tsx` - Edit name
- `index.ts` - Barrel export

**Simple form:**
- Text input for name
- No related selections needed

### 2.3 Create Timezones CRUD Pages
**Location**: `src/pages/Timezones/`

**Files to create:**
- `Timezones.tsx` - List (id, name, region columns)
- `CreateTimezone.tsx` - Form with name and region inputs
- `EditTimezone.tsx` - Edit name and region
- `index.ts` - Barrel export

**Simple form:**
- Text input for name
- Text input for region
- No related selections needed

---

## Phase 3: Update Existing Pages

### 3.1 Update `src/pages/Schedules/`

**Schedules.tsx (List page):**
- Add columns for `departureWeekday.name` and `arrivalWeekday.name`
- Display: Route ID | Departure Time | Departure Weekday | Arrival Time | Arrival Weekday | Actions

**CreateSchedule.tsx & EditSchedule.tsx:**
- Load weekdays using `GET_WEEKDAYS` query
- Form fields:
  - Select for route (existing - verify)
  - Text input for departureTime
  - **SELECT for departureWeekday** (fetch from GET_WEEKDAYS)
  - Text input for arrivalTime
  - **SELECT for arrivalWeekday** (fetch from GET_WEEKDAYS)
- Submit with: routeId, departureTime, departureWeekdayId, arrivalTime, arrivalWeekdayId

### 3.2 Update `src/pages/Stations/`

**Stations.tsx (List page):**
- Add timezone.name column (display timezone info)
- Display existing columns + timezone info

**CreateStation.tsx & EditStation.tsx:**
- Load timezones using `GET_TIMEZONES` query
- Form fields (existing):
  - name, countryCode, phone, postalCode, latitude, longitude, imageUrl, city
  - **ADD: SELECT for timezone** (fetch from GET_TIMEZONES)
- Submit with: existing fields + timezoneId (convert from selected timezone)

---

## Phase 4: Update Navigation/Routing

### 4.1 Update App Routing (likely in App.tsx or main routing file)
- Add routes for: `/trips`, `/trips/create`, `/trips/edit/:id`
- Add routes for: `/weekdays`, `/weekdays/create`, `/weekdays/edit/:id`
- Add routes for: `/timezones`, `/timezones/create`, `/timezones/edit/:id`

### 4.2 Update Navigation Components
- Add menu items linking to new pages (Trips, Weekdays, Timezones)
- Keep consistent style with existing nav items

---

## Phase 5: Regenerate GraphQL Types

Once all operations are updated:

```bash
npm run codegen
```

This generates TypeScript types from the updated operations.

---

## Implementation Checklist

### Phase 1: GraphQL Operations
- [ ] Add GET_TRIPS query
- [ ] Add GET_TRIP_BY_ID query
- [ ] Add GET_WEEKDAYS query
- [ ] Add GET_WEEKDAY_BY_ID query
- [ ] Add GET_TIMEZONES query
- [ ] Add GET_TIMEZONE_BY_ID query
- [ ] Update GET_SCHEDULE_BY_ID and GET_SCHEDULES queries
- [ ] Update GET_STATION_BY_ID query
- [ ] Add SAVE_TRIP mutation
- [ ] Add DELETE_TRIP mutation
- [ ] Add SAVE_WEEKDAY mutation
- [ ] Add DELETE_WEEKDAY mutation
- [ ] Add SAVE_TIMEZONE mutation
- [ ] Add DELETE_TIMEZONE mutation
- [ ] Update SAVE_SCHEDULE mutation
- [ ] Update SAVE_STATION mutation
- [ ] Run `npm run codegen`

### Phase 2: New Pages (Trips)
- [ ] Create `src/pages/Trips/index.ts`
- [ ] Create `src/pages/Trips/Trips.tsx`
- [ ] Create `src/pages/Trips/CreateTrip.tsx`
- [ ] Create `src/pages/Trips/EditTrip.tsx`

### Phase 2: New Pages (Weekdays)
- [ ] Create `src/pages/Weekdays/index.ts`
- [ ] Create `src/pages/Weekdays/Weekdays.tsx`
- [ ] Create `src/pages/Weekdays/CreateWeekday.tsx`
- [ ] Create `src/pages/Weekdays/EditWeekday.tsx`

### Phase 2: New Pages (Timezones)
- [ ] Create `src/pages/Timezones/index.ts`
- [ ] Create `src/pages/Timezones/Timezones.tsx`
- [ ] Create `src/pages/Timezones/CreateTimezone.tsx`
- [ ] Create `src/pages/Timezones/EditTimezone.tsx`

### Phase 3: Update Existing Pages
- [ ] Update `src/pages/Schedules/Schedules.tsx`
- [ ] Update `src/pages/Schedules/CreateSchedule.tsx`
- [ ] Update `src/pages/Schedules/EditSchedule.tsx`
- [ ] Update `src/pages/Stations/Stations.tsx`
- [ ] Update `src/pages/Stations/CreateStation.tsx`
- [ ] Update `src/pages/Stations/EditStation.tsx`

### Phase 4: Routing
- [ ] Add routes in main routing file
- [ ] Update navigation menu

### Phase 5: Testing
- [ ] Verify all queries work
- [ ] Verify all mutations work
- [ ] Test Trip CRUD operations
- [ ] Test Weekday CRUD operations
- [ ] Test Timezone CRUD operations
- [ ] Test Schedule form with new weekday selects
- [ ] Test Station form with new timezone select
- [ ] Verify no TypeScript errors
- [ ] Test navigation and menu items

---

## Key Differences from Original Entities

| Field | Trip | Comment |
|-------|------|---------|
| schedule | Required Select | Links to Schedule; only need ID |
| train | Required Select | Links to Train; fetch id and type for display |
| startTime | String | DateTime or time string |
| endTime | String | DateTime or time string |
| status | Required Select | Links to Status |

| Field | Schedule Update | Comment |
|-------|-----------------|---------|
| departureWeekday | NEW Select | Links to Weekday |
| arrivalWeekday | NEW Select | Links to Weekday |
| Other fields | Unchanged | Route, times stay as is |

| Field | Station Update | Comment |
|-------|-----------------|---------|
| timezone | NEW Select | Links to Timezone |
| Other fields | Unchanged | Keep existing fields |

---

## Important Notes

1. **Input Type Fields**: Use ID fields exactly as specified in schema InputTypes
   - TripInput: scheduleId, trainId, statusId, startTime, endTime
   - ScheduleInput: routeId, departureWeekdayId, arrivaldayId (note schema shows "arrivalWeekdayId")
   - StationInput: timezoneId if present, else no timezone field

2. **Select Component Pattern**: 
   - See CreateRoute.tsx for complete example
   - Map entity arrays to SelectOption[] format
   - Use lowercase key property name to ID
   
3. **Page Structure Pattern**:
   - List page: useState, useQuery, useMutation, handleDelete, formatData, render table
   - Create page: react-hook-form, useQuery for selects, useMutation, redirect on success
   - Edit page: load by ID, populate form, update on submit

4. **Timezone in Station**:
   - Check schema.graphqls input type for exact field names
   - May be timezoneId or timezone (likely timezoneId based on convention)

5. **Schedule/Trip Distinction**:
   - Schedule = recurring template (route, times, weekdays)
   - Trip = instance of a schedule with actual train assigned and specific status
