const SituationModifiersReducer = (state = {
    recoil: 0,
    attackerMovement: 0,
    attackerStun: 0,
    attackerWound: 0,
    attackerMelee: 0,
    attackerAim: 0,
    targetMovement: -1,
    visibility: 0,
}, action) => {
    switch(action.type){
        case "RECOIL_DROPDOWN_CHANGED":
            return {
                ...state,
                recoil: action.payload.recoil,
            }
        case "ATTACKER_MOVEMENT_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerMovement: action.payload.attackerMovement,
            }
        case "ATTACKER_STUN_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerStun: action.payload.attackerStun,
            }
        case "ATTACKER_WOUND_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerWound: action.payload.attackerWound,
            }
        case "ATTACKER_MELEE_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerMelee: action.payload.attackerMelee,
            }
        case "ATTACKER_AIM_DROPDOWN_CHANGED":
            return {
                ...state,
                attackerAim: action.payload.attackerAim,
            }
        case "TARGET_MOVEMENT_DROPDOWN_CHANGED":
            return {
                ...state,
                targetMovement: action.payload.targetMovement,
            }
        case "VISIBILITY_DROPDOWN_CHANGED":
            return {
                ...state,
                visibility: action.payload.visibility,
            }
        case "LOW_LIGHT_CLICKED":
                return {
                    ...state,
                    visibility: action.payload.visibility,
                }
        case "THERMOGRAPHIC_CLICKED":
            return {
                ...state,
                visibility: action.payload.visibility,
            }
        default:
            return state;
    }
}
export default SituationModifiersReducer