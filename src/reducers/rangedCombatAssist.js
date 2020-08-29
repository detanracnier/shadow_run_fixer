const RangedCombatAssistReducer = (state = {
    activeMenuIndex: 0,
}, action) => {
    switch(action.type){
        case "RANGEDCOMBATASSIST_RESET_BUTTON_CLICKED":
            return {
                ...state,
                activeMenuIndex: 0,
            }
        case "RANGEDCOMBATASSIST_MENU_BUTTON_CLICKED":
            return {
                ...state,
                activeMenuIndex: action.payload.menuIndex,
            }
        default:
            return state;
    }
}
export default RangedCombatAssistReducer