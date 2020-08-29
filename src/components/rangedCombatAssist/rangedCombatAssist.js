import React from 'react';
import { useSelector } from 'react-redux';
import RangeList from './rangeList/rangeList';
import SituationModifiers from './situationModifiers/situationModifiers';
import ResolveAttack from './resolveAttack/resolveAttack';
import ResolveDodge from './resolveDodge/resolveDodge';
import ResolveDamageResistance from './resolveDamageResistance/resolveDamageResistance';
import ResolveDamage from './resolveDamage/resolveDamage';
import './rangedCombatAssist.scss';

export default function RangedCombatAssist() {
    const menuList = [
        RangeList,
        SituationModifiers,
        ResolveAttack,
        ResolveDodge,
        ResolveDamageResistance,
        ResolveDamage
    ];
    const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
    const CurrentMenu = menuList[currentMenuIndex];

    return(
        <React.Fragment>
            <CurrentMenu />
        </React.Fragment>
    )
}