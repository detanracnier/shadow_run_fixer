import React from 'react';
import { useSelector } from 'react-redux';
import MeleeAttackerSuccess from './meleeAttackerSuccess/meleeAttackerSuccess';
import MeleeDefenderSuccess from './meleeDefenderSuccess/meleeDefenderSuccess';
import DetermineDamage from './determineDamage/determineDamage';
import ResistDamage from './resistDamage/resistDamage';
import ResolveDamage from './resolveDamage/resolveDamage';
import './meleeCombatAssist.scss';

export default function MeleeCombatAssist() {
    const menuList = [
        MeleeAttackerSuccess,
        MeleeDefenderSuccess,
        DetermineDamage,
        ResistDamage,
        ResolveDamage,
    ];
    const currentMenuIndex = useSelector(state => state.meleeCombatAssist.activeMenuIndex)
    const CurrentMenu = menuList[currentMenuIndex];

    return(
        <React.Fragment>
            <CurrentMenu />
        </React.Fragment>
    )
}