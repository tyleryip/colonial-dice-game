import { test, expect } from 'vitest'
import reducer, { buildStructure, resetStructures, StructureState } from './structureSlice'

test('should return the initial state', () => {
    // Act
    const result = reducer(undefined, { type: 'unknown' })

    // Assert

    expect(result).toEqual(getInitialState())
})

test('should build structure', () => {
    // Arrange
    const previousState = getInitialState()

    // Act
    const result = reducer(previousState, buildStructure(1))

    // Assert
    expect(result.isBuilt[1]).toEqual(true)
    expect(result.isBuilt.slice(2, 28).every(built => built == false))
})

test('should reset structures', () => {
    // Arrange
    const previousState: StructureState = {
        isBuilt: new Array(27).fill(true)
    }

    // Act
    const result = reducer(previousState, resetStructures())

    // Assert
    expect(result).toEqual(getInitialState())
})

// Helper functions

const getInitialState = (): StructureState => {
    const isBuilt = new Array(27).fill(false);
    isBuilt[0] = true; // Starting road is always already built

    return {
        isBuilt: isBuilt
    }
}