import { expect, test } from "vitest"
import reducer, { clearResourceJokerFlag, DiceState, resetDice, resetDiceLocks, rollDice, setDice, setDiceSpent, setResourceJokerFlag, setRollCount, setWildcardJokerFlag, spendDice, toggleDiceLock } from "./diceSlice"
import { ResourceType } from "../../../constants/resources"

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should clear resource joker flag', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, clearResourceJokerFlag())

    // Assert
    expect(result).toEqual({
        dice: new Array(6).fill({
            value: null,
            locked: false,
            spent: false
        }),
        rollCount: 0,
        resourceJokerFlag: null,
        wildcardJokerFlag: null
    })
})

test('should clear wildcard joker flag', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, clearResourceJokerFlag())

    // Assert
    expect(result).toEqual({
        dice: new Array(6).fill({
            value: null,
            locked: false,
            spent: false
        }),
        rollCount: 0,
        resourceJokerFlag: null,
        wildcardJokerFlag: null
    })
})

test('should roll all dice', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, rollDice())

    // Assert
    expect(result.dice.every(dice => dice.value != null))
    expect(result.rollCount).toEqual(1)
})

test('should roll all dice except locked', () => {
    // Arrange
    const previousState = getInitialState()

    // Lock first 3 dice
    previousState.dice = [
        {
            value: 1,
            locked: true,
            spent: false
        },
        {
            value: 1,
            locked: true,
            spent: false
        },
        {
            value: 1,
            locked: true,
            spent: false
        },
        {
            value: 1,
            locked: false,
            spent: false
        },
        {
            value: 1,
            locked: false,
            spent: false
        },
        {
            value: 1,
            locked: false,
            spent: false
        }
    ]

    // Act
    const result = reducer(previousState, rollDice())

    // Assert
    expect(result.dice.every(dice => dice.value != null))
    expect(result.dice[0].value).toEqual(1)
    expect(result.dice[1].value).toEqual(1)
    expect(result.dice[2].value).toEqual(1)
    expect(result.rollCount).toEqual(1)
})

test('should roll all dice except locked', () => {
    // Arrange
    const previousState: DiceState = {
        dice: [
            {
                value: 0,
                locked: true,
                spent: false
            },
            {
                value: 1,
                locked: true,
                spent: false
            },
            {
                value: 2,
                locked: true,
                spent: false
            },
            {
                value: 3,
                locked: false,
                spent: false
            },
            {
                value: 4,
                locked: false,
                spent: false
            },
            {
                value: 5,
                locked: false,
                spent: false
            }
        ],
        rollCount: 2,
        resourceJokerFlag: null,
        wildcardJokerFlag: null
    }

    // Act
    const result = reducer(previousState, resetDice())

    // Assert
    expect(result).toEqual(getInitialState())
})

test('should set dice', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, setDice({
        id: 0,
        value: 1
    }))

    // Assert
    expect(result.dice[0].value).toEqual(1)
})

test('should set roll count', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, setRollCount(1))

    // Assert
    expect(result.rollCount).toEqual(1)
})

test('should set dice spent', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, setDiceSpent(0))

    // Assert
    expect(result.dice[0].spent).toEqual(true)
})

test('should set resource joker flag', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, setResourceJokerFlag(0))

    // Assert
    expect(result.resourceJokerFlag).toEqual(0)
})

test('should set wildcard joker flag', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, setWildcardJokerFlag(0))

    // Assert
    expect(result.wildcardJokerFlag).toEqual(0)
})

test('should spend dice', () => {
    // Arrange
    const previousState = getInitialState()

    previousState.dice = [
        {
            value: 0,
            locked: true,
            spent: true
        },
        {
            value: 0,
            locked: true,
            spent: true
        },
        {
            value: 1,
            locked: true,
            spent: true
        },
        {
            value: 0,
            locked: false,
            spent: false
        },
        // First unspent wheat should be set to spent
        {
            value: 1,
            locked: false,
            spent: false
        },
        {
            value: 0,
            locked: false,
            spent: false
        }
    ]

    // Act
    const result = reducer(previousState, spendDice(JSON.stringify(ResourceType.WHEAT)))

    // Assert
    expect(result.dice[4].spent).toEqual(true)
})

test('should throw no unspent resource found error', () => {
    // Arrange
    const previousState = getInitialState()

    // No gold available to spend
    previousState.dice = [
        {
            value: 0,
            locked: true,
            spent: true
        },
        {
            value: 0,
            locked: true,
            spent: true
        },
        {
            value: 1,
            locked: true,
            spent: true
        },
        {
            value: 0,
            locked: false,
            spent: false
        },
        {
            value: 1,
            locked: false,
            spent: false
        },
        {
            value: 0,
            locked: false,
            spent: false
        }
    ]

    // Act
    const result = () => reducer(previousState, spendDice(JSON.stringify(ResourceType.GOLD)))

    // Assert
    expect(result).toThrowError();
})

test('should toggle dice lock', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, toggleDiceLock(0))

    // Assert
    expect(result.dice[0].locked).toEqual(true)
})

test('should reset all dice locks', () => {
    // Arrange
    const previousState = getInitialState()

    // Mix of locked and unlocked
    previousState.dice = [
        {
            value: 0,
            locked: true,
            spent: false
        },
        {
            value: 0,
            locked: true,
            spent: false
        },
        {
            value: 1,
            locked: true,
            spent: false
        },
        {
            value: 0,
            locked: false,
            spent: false
        },
        {
            value: 1,
            locked: true,
            spent: false
        },
        {
            value: 0,
            locked: false,
            spent: false
        }
    ]

    // Act
    const result = reducer(previousState, resetDiceLocks())

    // Assert
    expect(result.dice.every(dice => dice.locked == false))
})

// Helper functions

const getInitialState = (): DiceState => {
    return {
        dice: new Array(6).fill({
            value: null,
            locked: false,
            spent: false
        }),
        rollCount: 0,
        resourceJokerFlag: null,
        wildcardJokerFlag: null
    }
}