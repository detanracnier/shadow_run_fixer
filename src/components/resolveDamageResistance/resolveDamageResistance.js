import React from 'react';
import weaponByRange from '../../data/weaponByRange.json';
import modifiersRecoilList from '../../data/modifiersRecoil.json';
import './resolveDamageResistance.scss';
import '../combatAssist/combatAssist.scss';
import { combatAssistMenuButtonClicked } from '../../actions/combatAssist'
import { ResolveDamageResistanceWeaponChanged } from '../../actions/resolveDamageResistance';
import { useDispatch, useSelector } from 'react-redux';

export default function ResolveDamageResistance () {
    const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
	const dispatch = useDispatch();
	const dodgeSuccess = useSelector(state => state.resolveCombat.dodgeSuccess);
    const attackerSuccess = useSelector(state => state.resolveCombat.attackerSuccess);
    const tagretDodged = (attackerSuccess-dodgeSuccess>0 ? false : true);
    const weaponTypeSelected = useSelector(state => state.rangeList.weapon);
    const weaponList = weaponByRange.filter(list => list.type === weaponTypeSelected);
    const damageChart = ["L","M","S","D"];
    const weaponPower = useSelector(state => state.resolveCombat.weaponPower);
    const fireMode = useSelector(state => state.modifiersUI.recoilDropdown)
    const recoilSelected = modifiersRecoilList.filter(modifier => modifier.description === fireMode)
    const resistanceTargetNumber = () => {
        const power = weaponPower ? weaponPower : "power of weapon"

        if (Number.isInteger(power)){
            return power + recoilSelected[0].weapon_power_increase;
        } else {
            return power + " + " + recoilSelected[0].weapon_power_increase;
        }
    }

	return(
		<React.Fragment>
            <div className="menu_button" onClick={() => {
                dispatch(combatAssistMenuButtonClicked(currentMenuIndex - 1))
            }}>
                &lt;&lt;Previous
            </div>
            <div className="menu_button_disabled" onClick={() => {
                dispatch(combatAssistMenuButtonClicked(currentMenuIndex + 1))
            }}>
                Next&gt;&gt;
            </div>
            <div className={tagretDodged ? "instructions" : "hidden"} >The targets {dodgeSuccess} {dodgeSuccess>1 ? "successes" : "success"} cancel out your {attackerSuccess} {attackerSuccess>1 ? "successes" : "success"}. <br />The target has dodged your attack!</div>

            <div className={tagretDodged ? "hidden" : ""} >
                <div className="instructions">Target rolls dice equal to their body rating<br />
                add any combat pool dice</div>

                <form className="weaponByRange_form">
                    <select className="weaponByRange_dropdown_list" onChange={(event) => {
                        const weaponSelected = event.currentTarget.value
                        if (weaponSelected !== "SELECT WEAPON"){
                            const weapon = weaponList[0].weapon_list.filter(weapon => weapon.label === weaponSelected);
                            dispatch(ResolveDamageResistanceWeaponChanged(weapon))
                        } else {
                            const genericWeapon = [{
                                "label":"No weapon selected",
                                "power": false,
                                "damage": false
                            }]
                            dispatch(ResolveDamageResistanceWeaponChanged(genericWeapon))
                        }
                    }}>
                        <option value="SELECT WEAPON" >-Select a weapon-</option>
                        <option value="SELECT WEAPON" >-I don't see my weapon-</option>
                        {weaponList[0].weapon_list.map(weapon => {
                            return(
                                <option
                                value={weapon.label}
                                key={weapon.label}
                            >{weapon.label} -- {weapon.power}({damageChart[weapon.damage]})</option>
                            )
                        })}
                    </select>
                </form>
                <div className="resolve_damage_target_number_container">
					<div className="resolve_damage_target_number_label">Target Number</div>
					<div className="resolve_damage_target_number">{resistanceTargetNumber()}</div>
				</div>

            </div>
		</React.Fragment>
	)
}