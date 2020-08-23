import React from 'react';
import './resolveAttack.scss';
import '../combatAssist/combatAssist.scss';
import TargetNumber from '../targetNumber/targetNumber';
import weaponTypeList from '../../data/weaponTypeList.json';
import { ResolveAttackDecreaseButtonClicked, ResolveAttackIncreaseButtonClicked } from '../../actions/resolveAttack';
import { combatAssistMenuButtonClicked } from '../../actions/combatAssist'
import { useDispatch, useSelector } from 'react-redux';

export default function ResolveAttack () {
	const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
	const dispatch = useDispatch();
	const activeWeapon = useSelector(state => state.rangeList.weapon);
	const attackerSuccess = useSelector(state => state.resolveCombat.attackerSuccess);

	const handleWeaponSkill = () => {
		var weaponSkill = "pick a weapon";
		weaponTypeList.forEach(weaponList => {
			weaponList.list.forEach(weapon => {
				if(weapon===activeWeapon){
					weaponSkill= weaponList.type;
				}
			})
		})
		return weaponSkill
	}
	const weaponSkill = handleWeaponSkill();

	return(
		<React.Fragment>
			<div className="menu_button" onClick={() => {
                dispatch(combatAssistMenuButtonClicked(currentMenuIndex - 1))
            }}>
                &lt;&lt;Previous
            </div>
            <div className="menu_button" onClick={() => {
                dispatch(combatAssistMenuButtonClicked(currentMenuIndex + 1))
            }}>
                Next&gt;&gt;
            </div>
			<div className="instructions">Roll dice equal to your combat skill ({weaponSkill})<br />
			add any combat pool dice</div>
			<TargetNumber />
			<div className="instructions">How many successes did you get?</div>
			<div className="success_container">
				<div className="decrease_button" style={{pointerEvents: attackerSuccess>0?"all":"none"}} onClick={() => {
					dispatch(ResolveAttackDecreaseButtonClicked())
				}}>&dArr;</div>
				<div className="success_label">{attackerSuccess}</div>
				<div className="increase_button" onClick={() => {
					dispatch(ResolveAttackIncreaseButtonClicked())
				}}>&uArr;</div>
			</div>
		</React.Fragment>
	)
}