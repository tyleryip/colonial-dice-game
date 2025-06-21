import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectMute, selectEffectiveVolume, toggleMute } from '../../../store/slices/settingsSlice/settingsSlice'
import speaker_muted from '/assets/settings/volume/speaker-muted.png'
import speaker_no_bars from '/assets/settings/volume/speaker-no-bars.png'
import speaker_one_bar from '/assets/settings/volume/speaker-one-bar.png'
import speaker_two_bars from '/assets/settings/volume/speaker-two-bars.png'
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
            return speaker_muted
        }

        if (volume == 0) {
            return speaker_no_bars
        }

        if (volume > 0 && volume <= 50) {
            return speaker_one_bar
        }

        return speaker_two_bars
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
