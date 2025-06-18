import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectMute, selectEffectiveVolume, toggleMute } from '../../../store/slices/settingsSlice/settingsSlice'
import SpeakerMutedIcon from '/assets/settings/volume/speaker-muted.png'
import SpeakerNoBarsIcon from '/assets/settings/volume/speaker-no-bars.png'
import SpeakerOneBarIcon from '/assets/settings/volume/speaker-one-bar.png'
import SpeakerTwoBarsIcon from '/assets/settings/volume/speaker-two-bars.png'
import StyledVolumeButton from './styles/StyledVolumeButton'
import StyledVolumeIcon from './styles/StyledVolumeIcon'

const VolumeButton = () => {
    // Constants

    const mute = useAppSelector(state => selectMute(state))
    const volume = useAppSelector(state => selectEffectiveVolume(state)) * 100

    // Dispatch

    const dispatch = useAppDispatch()

    // Conditional rendering

    const getIcon = (): string => {
        if (mute) {
            return SpeakerMutedIcon
        }

        if (volume == 0 && !mute) {
            return SpeakerNoBarsIcon
        }

        if (volume > 0 && volume <= 50 && !mute) {
            return SpeakerOneBarIcon
        }

        if (volume > 50 && !mute) {
            return SpeakerTwoBarsIcon
        }

        return ""
    }

    const tooltip = mute
        ? "Unmute volume"
        : "Mute volume"

    // Event handlers

    const handleClick = () => {
        dispatch(toggleMute())
    }

    return (
        <StyledVolumeButton title={tooltip} onClick={handleClick}>
            <StyledVolumeIcon src={getIcon()} />
        </StyledVolumeButton>
    )
}

export default VolumeButton
