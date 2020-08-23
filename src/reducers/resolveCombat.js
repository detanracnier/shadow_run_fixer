const ResolveCombatReducer = (state = {
    attackerSuccess: 0,
    dodgeSuccess: 0,
    resistDamageSuccess: 0,
    weaponSelected: "",
    weaponPower: false,
}, action) => {
    switch(action.type){
        case "RESOLVE_ATTACK_DECREASE_BUTTON_CLICKED":
            return {
                ...state,
                attackerSuccess: state.attackerSuccess-1
            }
        case "RESOLVE_ATTACK_INCREASE_BUTTON_CLICKED":
            return {
                ...state,
                attackerSuccess: state.attackerSuccess+1
            }
        case "RESOLVE_DODGE_DECREASE_BUTTON_CLICKED":
            return {
                ...state,
                dodgeSuccess: state.dodgeSuccess-1
            }
        case "RESOLVE_DODGE_INCREASE_BUTTON_CLICKED":
            return {
                ...state,
                dodgeSuccess: state.dodgeSuccess+1
            }
        case "RESOLVE_DAMAGE_RESISTANCE_WEAPON_CHANGED":
            return {
                ...state,
                weaponPower: action.payload.weapon.power,
                weaponSelected: action.payload.weapon.label
            }
        default:
            return state;
    }
}
export default ResolveCombatReducer