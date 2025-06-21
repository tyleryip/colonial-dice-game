import { Form } from 'react-bootstrap'
import StyledSettings from './styles/StyledSettings'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectMute, selectEffectiveVolume, setVolume, selectShowInstructions, toggleShowInstructions } from '../../store/slices/settingsSlice/settingsSlice'
import { ChangeEvent } from 'react'
import VolumeButton from '../Buttons/VolumeButton/VolumeButton'
import StyledSettingsRow from './styles/StyledSettingsRow'
import StyledSettingsLabel from './styles/StyledSettingsLabel'
import instructions_icon from '/assets/settings/instructions/instructions.png';
import StyledSettingsIcon from './styles/StyledSettingsIcon'

const Settings = () => {
    // Constants

    const mute = useAppSelector(state => selectMute(state));

    // Scale volume between 0 and 100 for the input control
    const volume = useAppSelector(state => selectEffectiveVolume(state)) * 100

    const showInstructions = useAppSelector(state => selectShowInstructions(state))

    // Dispatch

    const dispatch = useAppDispatch();

    // Event handlers

    const onVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Normalize volume between 0 and 1 for the redux store
        const newVolume = parseInt(event.target.value) / 100
        dispatch(setVolume(newVolume))
    }

    const onHideInstructionsChange = () => {
        dispatch(toggleShowInstructions())
    }

    return (
        <StyledSettings>
            <StyledSettingsRow >
                <StyledSettingsLabel>
                    Volume
                </StyledSettingsLabel>
                <VolumeButton />
                <Form.Range
                    disabled={mute}
                    min={0}
                    max={100}
                    step={5}
                    value={volume}
                    onChange={onVolumeChange} />
            </StyledSettingsRow>
            <StyledSettingsRow>
                <StyledSettingsLabel>
                    Hide Instructions
                </StyledSettingsLabel>
                <StyledSettingsIcon src={instructions_icon} $width={6} />
                <Form.Check
                    type="switch"
                    reverse
                    checked={!showInstructions}
                    onChange={onHideInstructionsChange}
                />
            </StyledSettingsRow>
        </StyledSettings>
    )
}

export default Settings
