import React from 'react';
import './resolveAttack.scss';
import '../combatAssist/combatAssist.scss';
import TargetNumber from '../targetNumber/targetNumber';
import weaponTypeList from '../../data/weaponTypeList.json';
import { useDispatch, useSelector } from 'react-redux';

export default function ResolveAttack () {
	const dispatch = useDispatch();
	const activeWeapon = useSelector(state => state.rangeList.weapon);

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
			<div className="instructions">Roll dice equal to your combat skill ({weaponSkill})<br />
			add any combat pool dice</div>
			<TargetNumber />
		</React.Fragment>
	)
}