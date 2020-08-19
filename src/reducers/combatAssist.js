const CombatAssistReducer = (state = {
    activeMenuIndex: 0,
}, action) => {
    switch(action.type){
        case "COMBATASSIST_MENU_BUTTON_CLICKED":
            return {
                ...state,
                activeMenuIndex: action.payload.menuIndex,
            }
        default:
            return state;
    }
}
export default CombatAssistReducer