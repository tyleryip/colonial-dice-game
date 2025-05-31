import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectMute, selectEffectiveVolume, toggleMute } from '../../../store/slices/settingsSlice/settingsSlice'
import MuteIcon from '../../Icons/Volume/MuteIcon'
import SpeakerNoBarsIcon from '../../Icons/Volume/SpeakerNoBarsIcon'
import SpeakerOneBarIcon from '../../Icons/Volume/SpeakerOneBarIcon'
import SpeakerTwoBarsIcon from '../../Icons/Volume/SpeakerTwoBarsIcon'
import StyledVolumeButton from './styles/StyledVolumeButton'

const VolumeButton = () => {
    // Constants

    const mute = useAppSelector(state => selectMute(state))
    const volume = useAppSelector(state => selectEffectiveVolume(state)) * 100

    // Dispatch

    const dispatch = useAppDispatch()

    // Conditional rendering

    const showSpeakerNoBars = volume == 0 && !mute
    const showSpeakerOneBar = volume > 0 && volume <= 50 && !mute
    const showSpeakerTwoBar = volume > 50 && !mute

    const tooltip = mute
        ? "Unmute volume"
        : "Mute volume"

    // Event handlers

    const handleClick = () => {
        dispatch(toggleMute())
    }

    return (
        <StyledVolumeButton title={tooltip} onClick={handleClick}>
            {mute && <MuteIcon />}
            {showSpeakerNoBars && <SpeakerNoBarsIcon />}
            {showSpeakerOneBar && <SpeakerOneBarIcon />}
            {showSpeakerTwoBar && <SpeakerTwoBarsIcon />}
        </StyledVolumeButton>
    )
}

export default VolumeButton
