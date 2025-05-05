import { DiceValue } from "./DiceValue"

export type Dice = {
    value: DiceValue,
    spent: boolean,
    locked: boolean
}