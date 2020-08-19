import React from 'react';
import { useSelector } from 'react-redux';
import { combatAssistMenuButtonClicked } from '../../actions/combatAssist';
import MenuBar from '../menuBar/menuBar';
import RangeList from '../rangeList/rangeList';
import SituationModifiers from '../situationModifiers/situationModifiers';
import ResolveAttack from '../resolveAttack/resolveAttack';
import './combatAssist.scss';

export default function RangedCombatAssist() {
    const menuList = [
        RangeList,
        SituationModifiers,
        ResolveAttack
    ];
    const currentMenuIndex = useSelector(state => state.combatAssist.activeMenuIndex)
    const CurrentMenu = menuList[currentMenuIndex];

    return(
        <React.Fragment>
            <MenuBar menuButtonClicked={combatAssistMenuButtonClicked} currentMenuIndex={currentMenuIndex} menuList={menuList} />
            <CurrentMenu />
        </React.Fragment>
    )
}