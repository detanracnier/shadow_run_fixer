import React from 'react';
import weaponByRange from '../../../data/weaponByRange.json';
import modifiersRecoilList from '../../../data/modifiersRecoil.json';
import '../rangedCombatAssist.scss';
import { rangedCombatAssistMenuButtonClicked, rangedCombatAssistResetButtonClicked } from '../../../actions/rangedCombatAssist';
import {
    ResolveDamageResistanceWeaponChanged,
    ResolveDamageResistanceArmorChanged,
    ResolveDamageResistanceDecreaseButtonClicked,
    ResolveDamageResistanceIncreaseButtonClicked } from '../../../actions/resolveDamageResistance';
import { useDispatch, useSelector } from 'react-redux';

export default function ResolveDamageResistance () {
    const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
	const dispatch = useDispatch();
	const dodgeSuccess = useSelector(state => state.resolveCombat.dodgeSuccess);
    const attackerSuccess = useSelector(state => state.resolveCombat.attackerSuccess);
    const tagretDodged = (attackerSuccess-dodgeSuccess>0 ? false : true);
    const weaponSelected = useSelector(state => state.resolveCombat.weaponSelected);
    const weaponTypeSelected = useSelector(state => state.rangeList.weapon);
    const weaponList = weaponByRange.filter(list => list.type === weaponTypeSelected);
    const damageChart = ["L","M","S","D"];
    const weaponPower = useSelector(state => state.resolveCombat.weaponPower);
    const fireMode = useSelector(state => state.modifiersUI.recoilDropdown)
    const recoilSelected = modifiersRecoilList.filter(modifier => modifier.description === fireMode)
    const damageType = useSelector(state => state.rangeList.activeWeaponList);
    const targetArmor = useSelector(state => state.resolveCombat.targetArmor);
    const resistDamageSuccess = useSelector(state => state.resolveCombat.resistDamageSuccess);
    const strength = useSelector(state => state.rangeList.playerStrength);

    const resistanceTargetNumber = () => {
        const power = weaponPower ? weaponPower : "power of weapon"


        if (Number.isInteger(power)){
            return parseInt(power) +
            parseInt(recoilSelected[0].weapon_power_increase)-
            parseInt(targetArmor);
        } else if (power==="Attackers strength") {
            return parseInt(strength) +
            parseInt(recoilSelected[0].weapon_power_increase)-
            parseInt(targetArmor);
        } else if (power==="Attackers strength + 2") {
            return parseInt(strength) + 2 +
            parseInt(recoilSelected[0].weapon_power_increase)-
            parseInt(targetArmor);
        } else {
            return power +
            " + " +
            (parseInt(recoilSelected[0].weapon_power_increase) - parseInt(targetArmor));
        }
    }

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
            <div className={tagretDodged ? "instructions_container" : "hidden"} >
                <p className="instructions">The targets {dodgeSuccess} {dodgeSuccess>1 ? "successes" : "success"} cancel out your {attackerSuccess} {attackerSuccess>1 ? "successes" : "success"}. <br />
                The target has dodged your attack!</p>
            </div>
            <div className={tagretDodged ? "hidden" : ""} >
                <div className="instructions_container">
                    <p className="instructions">Target rolls dice equal to their body rating<br />
                    add any combat pool dice</p>
                    <div className="target_number_container">
					    <div className="target_number_label">Target Number</div>
					    <div className="target_number">{resistanceTargetNumber()}</div>
				    </div>
                </div>
                <div className="resolve_damage_input_container">
                    <form>
                        <select className="display_inline_block large_text" onChange={(event) => {
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
                            <option value="SELECT WEAPON" selected={"SELECT WEAPON" === weaponSelected ? true : false}>-I don't see my weapon-</option>
                            {weaponList[0].weapon_list.map(weapon => {
                                return(
                                    <option
                                    selected={weapon.label === weaponSelected ? true : false}
                                    value={weapon.label}
                                    key={weapon.label}
                                >{weapon.label} -- {weapon.power}({damageChart[weapon.damage]})</option>
                                )
                            })}
                        </select>
                    </form>
                    <label className="resolve_damage_input_label">Targets armor rating VS {damageType === "Projectiles" ? "impact" : "balistic"}: </label>
                        <input className="input_text" type="text" id="armorInput" name="armor" value={targetArmor} onChange={(event) => {
                            const value = event.target.value;
                            if(!isNaN(value)){
                                dispatch(ResolveDamageResistanceArmorChanged(value))
                            }
                        }}/>
                </div>
                <div className="instructions_container">
					<p className="instructions">How many successes did they get?</p>
                </div>
                <div className="success_container">
					<div className="decrease_button" style={{pointerEvents: resistDamageSuccess>0?"all":"none"}} onClick={() => {
						dispatch(ResolveDamageResistanceDecreaseButtonClicked())
					}}>&dArr;</div>
					<div className="success_label">{resistDamageSuccess}</div>
					<div className="increase_button" onClick={() => {
						dispatch(ResolveDamageResistanceIncreaseButtonClicked())
					}}>&uArr;</div>
				</div>

            </div>
		</React.Fragment>
	)
}