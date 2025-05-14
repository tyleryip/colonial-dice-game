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
- [ ] Dice
  - [x] Rolling functionality
  - [x] Locking functionality
  - [x] Resource state based on roll results
- [ ] Scoreboard
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

- [ ] App is responsive
  - [ ] App fits most mobile devices
  - [ ] App fits most laptop screens
  - [ ] App fits most widescreen monitors
- [ ] Unit tests
  - [ ] Unit tests for each slice/reducer functions
- [ ] CICD integration with GitHub Actions
  - [ ] Automatic test run on PR
  - [ ] Automatic deployments via Netlify

## Phase 2 - Enhancements

- [ ] AI plays Catan Dice game
- [ ] Store local user high-score in cookies
- [ ] Island 2
- [ ] Sound effects
  - [ ] Dice sound effect on roll
  - [ ] Building sound effect
  - [ ] Trading/resource joker sound effect
- [ ] End of game modal
  - [ ] Show statistics button
- [ ] Settings modal
  - [ ] Allow muting and volume adjustment
