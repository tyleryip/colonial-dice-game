# Feature List

## Phase 1 - MVP

### Functional Requirements

- [ ] Gameboard
    - [x] Rendering
        - [x] Hexgons rendering
        - [x] Resource jokers rendering
        - [x] Knights rendering
        - [x] Roads rendering
        - [x] Settlements rendering
        - [x] Cities rendering
    - [ ] Correct icons display based on structure state from store
- [ ] Dice
    - [x] Rolling functionality
    - [x] Locking functionality
    - [ ] Resource state based on roll results
    - [ ] Play rolling sound effect on roll
- [ ] Scoreboard
    - [x] Scoreboard rendering
    - [x] Score tracking functionality
    - [x] Score reseting functionality
- [ ] Gameplay
    - [ ] Game state flows properly
    - [ ] Rolling state
         - [x] Roll counter state
    - [ ] Building state
        - [x] Maintain structure state
        - [ ] Evaluating whether user can build a specific structure based on resources
        - [x] Evaluating whether user can build based on prerequisite structures
        - [ ] Adjusting resources after building
        - [ ] Show building cost on structure hover
    - [ ] Scoring state
        - [ ] Score is added correctly for new structures
        - [ ] Score is added correctly for no structures
        - [ ] Total score is calculated upon completion
- [ ] Instructions modal
    - [ ] Build costs shown in instruction modal

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

- [ ] Instructions modal
    - [ ] GIFs in modal to show gameplay
- [ ] AI plays Catan Dice game
- [ ] Store local user high-score in cookies
- [ ] Island 2