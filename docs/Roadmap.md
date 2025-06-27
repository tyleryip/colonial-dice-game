# Feature List

## Phase 1 - MVP

### Functional Requirements

- [x] Gameboard
  - [x] Rendering
    - [x] Hexagons rendering
    - [x] Resource jokers rendering
    - [x] Knights rendering
    - [x] Roads rendering
    - [x] Settlements rendering
    - [x] Cities rendering
  - [x] Correct icons display based on structure state from store
- [x] Dice
  - [x] Rolling functionality
  - [x] Locking functionality
  - [x] Resource state based on roll results
- [x] Scoreboard
  - [x] Scoreboard rendering
  - [x] Score tracking functionality
  - [x] Score resetting functionality
- [ ] Gameplay
  - [x] Game state flows properly
  - [x] Rolling state
    - [x] Roll counter state
  - [x] Building state
    - [x] Maintain structure state
    - [x] Evaluating whether user can build a specific structure based on resources
    - [x] Evaluating whether user can build based on prerequisite structures
    - [x] Adjusting resources after building
    - [x] Show building cost on structure hover
    - [x] User can trade gold when they have more than 2 gold
    - [x] User can spend a resource joker and set a dice of their choice
  - [x] Scoring functionality
    - [x] Score is added correctly for new structures
    - [x] Score is added correctly for no structures
    - [x] Total score is calculated upon completion
- [x] Navbar
  - [x] Add How to Play modal
  - [x] Add Settings modal
- [x] Instructions modal
  - [x] GIFs in modal to show gameplay
- [x] Settings modal
  - [x] Add reset game button
- [x] End of game modal
  - [x] Show scoreboard results
  - [x] Play again button
- [x] Use session storage to store game state

### Non-Functional Requirements

- [x] App is responsive
  - [x] App fits most mobile devices
  - [x] App fits most laptop screens
  - [x] App fits most widescreen monitors
- [x] Unit tests
  - [x] Unit tests for each slice/reducer functions
- [x] CICD integration with GitHub Actions
  - [x] Automatic test run on PR
  - [x] Automatic deployments via Netlify

## Phase 2 - Enhancements

### Functional Requirements

- [x] Sound effects
  - [x] Dice sound effect on roll
  - [x] Building sound effect
  - [x] Trading/resource joker sound effect
- [x] Instructions text
  - [x] Trading gold
  - [x] Tap to build structures
  - [x] Setting resource jokers
- [ ] End of game modal enhancements
  - [ ] Show statistics button
- [ ] Scoreboard enhancements
  - [ ] Show what things gave points on each filled scoreboard
- [x] Settings modal
  - [x] Allow muting and volume adjustment
- [x] Leaderboard
  - [x] Add "save to leaderboard" button to end of game modal
  - [x] Add leaderboard modal to navbar
  - [x] Add leaderboard to store
  - [x] Display leaderboard from store in leaderboard modal

### Non-Functional Requirements

- [x] Responsive design overhaul
  - [x] Better support for Safari browser
  - [x] Better layout for desktop
- [ ] Mobile compatibility
  - [ ] Use tooltip on press and build on long press
- [ ] README

## Phase 3 - Island 2

### Functional Requirements

- [ ] Island 2
  - [ ] Navbar tabs for Island 1 and Island 2
  - [ ] Gameboard adjustments for Island 2
  - [ ] Scoreboard adjustments for Island 2
  - [ ] Longest road/largest army checkboxes
  - [ ] Refactor state to support both islands

## Phase 4 - Enhancements

- [ ] AI plays Catan Dice game
