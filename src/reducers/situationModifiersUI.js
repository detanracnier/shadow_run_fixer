const SituationModifiersUIReducer = (state = {
    targetCover: false,
    recoilMultiplier: false,
    lowLight: false,
    thermographic: false,
    smartlink: false,
    smartgoggles: false,
    lasersight: false,
    recoilDropdown: "You have no recoil",
    attackerMovementDropdown: "You are not moving",
    attackerStunDropdown: "You are not stunned",
    attackerWoundDropdown: "You are not wounded",
    attackerMeleeDropdown: "You are not in melee combat",
    attackerAimDropdown: "You are not aiming",
    targetMovementDropdown: "Target is stationary",
    visibilityDropdown: "You can see your target",
}, action) => {
    switch(action.type){
        case "RECOIL_DROPDOWN_CHANGED":
            return {
                ...state,
                recoilDropdown: action.payload.recoilDropdown
            }
        case "RECOIL_MULTIPLIER_CLICKED":
            return {
                ...state,
                recoilMultiplier: !state.recoilMultiplier
            }
        case "ATTACKER_MOVEMENT_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerMovementDropdown: action.payload.attackerMovementDropdown
            }
        case "ATTACKER_STUN_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerStunDropdown: action.payload.attackerStunDropdown
            }
        case "ATTACKER_WOUND_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerWoundDropdown: action.payload.attackerWoundDropdown
            }
        case "ATTACKER_MELEE_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerMeleeDropdown: action.payload.attackerMeleeDropdown
            }
        case "ATTACKER_AIM_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerAimDropdown: action.payload.attackerAimDropdown
            }
        case "TARGET_COVER_CLICKED":
            return {
                ...state,
                targetCover: !state.targetCover
            }
        case "TARGET_MOVEMENT_DROPDOWN_CHANGED":
            return {
                ...state,
                targetMovementDropdown: action.payload.targetMovementDropdown
            }
        case "VISIBILITY_DROPDOWN_CHANGED":
            return {
                ...state,
                visibilityDropdown: action.payload.visibilityDropdown
            }
        case "LOW_LIGHT_CLICKED":
            return {
                ...state,
                lowLight: !state.lowLight
            }
        case "THERMOGRAPHIC_CLICKED":
            return {
                ...state,
                thermographic: !state.thermographic
            }
        case "SMARTLINK_CLICKED":
            return {
                ...state,
                smartlink: !state.smartlink
            }
        case "SMARTGOGGLES_CLICKED":
            return {
                ...state,
                smartgoggles: !state.smartgoggles
            }
        case "LASERSIGHT_CLICKED":
            return {
                ...state,
                lasersight: !state.lasersight
            }
        default:
            return state;
    }
}
export default SituationModifiersUIReducer