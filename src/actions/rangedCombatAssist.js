export const rangedCombatAssistMenuButtonClicked = (menuIndex) => {
    return {
        type: "RANGEDCOMBATASSIST_MENU_BUTTON_CLICKED",
        payload: {
            menuIndex,
        }
    }
}

export const rangedCombatAssistResetButtonClicked = () => {
    return {
        type: "RANGEDCOMBATASSIST_RESET_BUTTON_CLICKED",
        payload: {

        }
    }
}