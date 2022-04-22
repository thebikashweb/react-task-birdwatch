## Bird Watch web app - React coding task for Junior Developer

## [Video Tutorial](https://youtu.be/3kNpIbTEuos)

## [Demo link ](https://bw-birdwatch.netlify.app)

### Tasks Description

Your local bird watching association needs a brand new application where users can share their observations to
other users. These observations include name of the species, rarity, notes and timestamp. They also wish that user
could include geolocations, pictures, video, sound etc. to the observation. Because observations are usually done in
areas where network connection is limited user should be able to record observations while offline.
Acceptance Criteria
### Main view should include a dynamic list of observations
- Observations should be ordered by timestamp
- Observation should display name of species, rarity, excerpt of notes, and date and time
### Main view should include a button for adding new observation
- Clicking the button should navigate user to observation form view
### In observation form view user should be able to add a new observation
- User should be able to input name of the species and notes
- User should be able to select rarity from predefined list (common, rare, extremely rare)
- User should be able to save the observation
- Timestamp should be created when observation is saved
- User should be able to cancel the new entry. Any data entered by the user will be discarded and the
observation will not be saved.

### All observations should be saved locally on the device
- Saved observations should be persisted when application is closed

## Tech stacks

- React
- CSS
- library moment.js

### Run Locally

- Clone this Repository or download the Repository
- Run `yarn install` (Assuming you have node installed, yarn ready to use)
- Run `yarn start`
