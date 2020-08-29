import React from 'react';
import '../rangedCombatAssist.scss';
import TargetNumber from '../targetNumber/targetNumber';
import weaponTypeList from '../../../data/weaponTypeList.json';
import { ResolveAttackDecreaseButtonClicked, ResolveAttackIncreaseButtonClicked } from '../../../actions/resolveAttack';
import { rangedCombatAssistMenuButtonClicked, rangedCombatAssistResetButtonClicked } from '../../../actions/rangedCombatAssist';
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
			<div className="menu_nav">
				<div className="menu_button" onClick={() => {
					dispatch(rangedCombatAssistMenuButtonClicked(currentMenuIndex - 1))
				}}>
					&lt;&lt;Previous
				</div>
				<div className="menu_button" onClick={() => {
					dispatch(rangedCombatAssistResetButtonClicked())
				}}>
					Reset
				</div>
				<div className="menu_button" onClick={() => {
					dispatch(rangedCombatAssistMenuButtonClicked(currentMenuIndex + 1))
				}}>
					Next&gt;&gt;
				</div>
			</div>
			<div className="instructions_container">
                <p className="instructions">Roll dice equal to your combat skill ({weaponSkill})<br />
				add any combat pool dice</p>
				<TargetNumber />
			</div>
			<div className="instructions_container">
                <p className="instructions">How many successes did you get?</p>
			</div>
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