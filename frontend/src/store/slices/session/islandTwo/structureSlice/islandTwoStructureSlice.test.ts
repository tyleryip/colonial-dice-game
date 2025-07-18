import { test, expect } from 'vitest'
import reducer, { islandTwoBuildStructure, islandTwoResetStructures } from './islandTwoStructureSlice'
import { StructureState } from '../../shared/structureSlice'

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
    const result = reducer(previousState, islandTwoBuildStructure(1))

    // Assert
    expect(result.isBuilt[1]).toEqual(true)
    expect(result.isBuilt.slice(2, 29).every(built => built == false))
})

test('should reset structures', () => {
    // Arrange
    const previousState: StructureState = {
        isBuilt: new Array(28).fill(true)
    }

    // Act
    const result = reducer(previousState, islandTwoResetStructures())

    // Assert
    expect(result).toEqual(getInitialState())
})

// Helper functions

const getInitialState = (): StructureState => {
    const isBuilt = new Array(28).fill(false);
    isBuilt[0] = true; // Starting road is always already built

    return {
        isBuilt: isBuilt
    }
}