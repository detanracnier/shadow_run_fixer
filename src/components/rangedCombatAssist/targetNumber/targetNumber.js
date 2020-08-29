import React from 'react';
import { useSelector } from 'react-redux';

export default function TargetNumber() {
    const rangeModifier = useSelector(state => state.rangeList.rangeModifier);
    const recoil = useSelector(state => state.modifiers.recoil);
    const recoilMultiplier = useSelector(state => state.modifiersUI.recoilMultiplier);
    const totalRecoil = recoil*(recoilMultiplier ? 2 : 1);
    const attackerMovement = useSelector(state => state.modifiers.attackerMovement);
    const attackerStun = useSelector(state => state.modifiers.attackerStun);
    const attackerWound = useSelector(state => state.modifiers.attackerWound);
    const attackerMelee = useSelector(state => state.modifiers.attackerMelee);
    const attackerAim = useSelector(state => state.modifiers.attackerAim);
    const targetMovement = useSelector(state => state.modifiers.targetMovement);
    const targetCover = useSelector(state => state.modifiersUI.targetCover);
    const visibility = useSelector(state => state.modifiers.visibility);
    const smartlink = useSelector(state => state.modifiersUI.smartlink);
    const smartgoggles = useSelector(state => state.modifiersUI.smartgoggles);
    const lasersight = useSelector(state => state.modifiersUI.lasersight);

    const targetNumber =
        parseInt(rangeModifier)+
        parseInt(totalRecoil)+
        parseInt(attackerMovement)+
        parseInt(attackerStun)+
        parseInt(attackerWound)+
        parseInt(attackerMelee)+
        parseInt(attackerAim)+
        parseInt(targetMovement)+
        (targetCover ? 4 : 0)+
        parseInt(visibility)+
        (smartlink ? -2 : 0)+
        (smartgoggles ? -1 : 0)+
        (lasersight ? -1 : 0);

    return(
        <React.Fragment>
            <div className="target_number_container">
                <div className="target_number_label">Target Number</div>
                <div className="target_number">{targetNumber}</div>
            </div>
        </React.Fragment>
    )
}