export const combatAssistMenuButtonClicked = (menuIndex) => {
    return {
        type: "COMBATASSIST_MENU_BUTTON_CLICKED",
        payload: {
            menuIndex,
        }
    }
}