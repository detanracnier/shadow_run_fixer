export const recoilDropdownChanged = (recoil, recoilDropdown) => {
    return {
        type: "RECOIL_DROPDOWN_CHANGED",
        payload: {
            recoil,
            recoilDropdown
        }
    }
}

export const recoilMultiplierClicked = () => {
    return {
        type: "RECOIL_MULTIPLIER_CLICKED",
        payload: {
        }
    }
}

export const attackerMovementDropdownChanged = (attackerMovement, attackerMovementDropdown) => {
    return {
        type: "ATTACKER_MOVEMENT_DROPDOWN_CHANGED",
        payload: {
            attackerMovement,
            attackerMovementDropdown
        }
    }
}

export const attackerStunDropdownChanged = (attackerStun, attackerStunDropdown) => {
    return {
        type: "ATTACKER_STUN_DROPDOWN_CHANGED",
        payload: {
            attackerStun,
            attackerStunDropdown
        }
    }
}

export const attackerWoundDropdownChanged = (attackerWound, attackerWoundDropdown) => {
    return {
        type: "ATTACKER_WOUND_DROPDOWN_CHANGED",
        payload: {
            attackerWound,
            attackerWoundDropdown
        }
    }
}

export const attackerMeleeDropdownChanged = (attackerMelee, attackerMeleeDropdown) => {
    return {
        type: "ATTACKER_MELEE_DROPDOWN_CHANGED",
        payload: {
            attackerMelee,
            attackerMeleeDropdown
        }
    }
}

export const attackerAimDropdownChanged = (attackerAim, attackerAimDropdown) => {
    return {
        type: "ATTACKER_AIM_DROPDOWN_CHANGED",
        payload: {
            attackerAim,
            attackerAimDropdown
        }
    }
}

export const targetCoverClicked = () => {
    return {
        type: "TARGET_COVER_CLICKED",
        payload: {
        }
    }
}

export const targetMovementDropdownChanged = (targetMovement,targetMovementDropdown) => {
    return {
        type: "TARGET_MOVEMENT_DROPDOWN_CHANGED",
        payload: {
            targetMovement,
            targetMovementDropdown
        }
    }
}

export const visibilityDropdownChanged = (visibility,visibilityDropdown) => {
    return {
        type: "VISIBILITY_DROPDOWN_CHANGED",
        payload: {
            visibility,
            visibilityDropdown
        }
    }
}

export const lowLightClicked = (visibility) => {
    return {
        type: "LOW_LIGHT_CLICKED",
        payload: {
            visibility
        }
    }
}

export const thermographicClicked = (visibility) => {
    return {
        type: "THERMOGRAPHIC_CLICKED",
        payload: {
            visibility
        }
    }
}

export const smartlinkClicked = () => {
    return {
        type: "SMARTLINK_CLICKED",
        payload: {
        }
    }
}

export const smartgogglesClicked = () => {
    return {
        type: "SMARTGOGGLES_CLICKED",
        payload: {
        }
    }
}

export const lasersightClicked = () => {
    return {
        type: "LASERSIGHT_CLICKED",
        payload: {
        }
    }
}