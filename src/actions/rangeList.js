export const rangeButtonClicked = (id, rangeModifier,weapon) => {
    return {
        type: "RANGE_BUTTON_CLICKED",
        payload: {
            id,
            rangeModifier,
            weapon
        }
    }
}

export const rangeHeaderClicked = (header) => {
    return {
        type: "RANGE_HEADER_CLICKED",
        payload: {
            header
        }
    }
}

export const strengthInputChanged = (strength) => {
    return {
        type: "STRENGTH_INPUT_CHANGED",
        payload: {
            strength
        }
    }
}