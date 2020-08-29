const RangeListReducer = (state = {
    activeRange: '',
    weapon: 'SELECT WEAPON',
    rangeModifier: 0,
    playerStrength: 0,
    activeWeaponList: 'Firearms',
}, action) => {
    switch(action.type){
        case "RANGEDCOMBATASSIST_RESET_BUTTON_CLICKED":
            return {
                ...state,
                activeRange: '',
                weapon: 'SELECT WEAPON',
                rangeModifier: 0,
                playerStrength: 0,
                activeWeaponList: 'Firearms',
            }
        case "RANGE_BUTTON_CLICKED":
            return {
                ...state,
                activeRange: action.payload.id,
                rangeModifier: action.payload.rangeModifier,
                weapon: action.payload.weapon
            }
        case "RANGE_HEADER_CLICKED":
            return {
                ...state,
                activeWeaponList: action.payload.header
            }
        case "STRENGTH_INPUT_CHANGED":
            return {
                ...state,
                playerStrength: action.payload.strength
            }
        default:
            return state;
    }
}
export default RangeListReducer