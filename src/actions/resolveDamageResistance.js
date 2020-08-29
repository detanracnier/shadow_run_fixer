export const ResolveDamageResistanceDecreaseButtonClicked = () => {
    return {
        type: "RESOLVE_DAMAGE_RESISTANCE_DECREASE_BUTTON_CLICKED",
        payload: {

        }
    }
}

export const ResolveDamageResistanceIncreaseButtonClicked = () => {
    return {
        type: "RESOLVE_DAMAGE_RESISTANCE_INCREASE_BUTTON_CLICKED",
        payload: {

        }
    }
}

export const ResolveDamageResistanceWeaponChanged = (weapon) => {
    return {
        type: "RESOLVE_DAMAGE_RESISTANCE_WEAPON_CHANGED",
        payload: {
            weapon: weapon[0]
        }
    }
}

export const ResolveDamageResistanceArmorChanged = (armor) => {
    return {
        type: "RESOLVE_DAMAGE_RESISTANCE_ARMOR_CHANGED",
        payload: {
            armor
        }
    }
}