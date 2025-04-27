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
    - [ ] Rolling functionality
    - [ ] Locking functionality
    - [ ] Resource state based on roll results
- [ ] Scoreboard
    - [ ] Scoreboard rendering
    - [ ] Score tracking functionality
    - [ ] Score reseting functionality
- [ ] Gameplay
    - [ ] Game state flows properly
    - [ ] Rolling state
         - [ ] Roll counter state
    - [ ] Building state
        - [ ] Maintain structure state
        - [ ] Evaluating whether user can build a specific structure based on resources
        - [ ] Evaluating whether user can build based on prerequisite structures
        - [ ] Adjusting resources after building
        - [ ] Show building cost on structure hover
    - [ ] Scoring state
        - [ ] Score is added correctly for new structures
        - [ ] Score is added correctly for no structures
        - [ ] Total score is calcualted upon completion
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

## Phase 2 - Enhancements

- [ ] Instructions modal
    - [ ] GIFs in modal to show gameplay 
