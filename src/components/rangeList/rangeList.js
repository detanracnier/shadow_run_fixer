import React from 'react';
import firearmsRangeList from '../../data/firearmsRangeList.json';
import heavyweaponsRangeList from '../../data/heavyweaponsRangeList.json';
import impactRangeList from '../../data/impactRangeList.json';
import TargetNumber from '../targetNumber/targetNumber';
import { useSelector, useDispatch } from 'react-redux';
import { rangeButtonClicked, rangeHeaderClicked, strengthInputChanged } from '../../actions/rangeList';
import { combatAssistMenuButtonClicked } from '../../actions/combatAssist'
import './rangeList.scss';
import '../combatAssist/combatAssist.scss';

export default function RangeList() {
    const currentMenuIndex = useSelector(state => state.rangedCombatAssist.activeMenuIndex)
    const activeRange = useSelector(state => state.rangeList.activeRange);
    const playerStrength = useSelector(state => state.rangeList.playerStrength);
    const activeWeaponList = useSelector(state => state.rangeList.activeWeaponList);
    const dispatch = useDispatch();

    const createRanges = (range, name) => {
        return(
            <td className={activeRange === name + range.type ? 'active' : ''} key={name + range.type}>
                <button className="rangelist_button" onClick={() => {
                    dispatch(rangeButtonClicked(name + range.type, getRangeModifier(range.type),name))
                }}>{range.min} - {range.max}</button>
            </td>
        )
    }

    const createRangesProjectile = (range, name) => {
        return(
            <td className={activeRange === name + range.type ? 'active' : ''} key={name + range.type}>
                <button className="rangelist_button" onClick={() => {
                    dispatch(rangeButtonClicked(name + range.type, getRangeModifier(range.type)))
                }}>{range.min * playerStrength === 0 ? 0 : range.min * playerStrength + 1} - {range.max * playerStrength}</button>
            </td>
        )
    }

    const getRangeModifier = (range) => {
        switch(range){
            case "short": return 4
            case "medium": return 5
            case "long": return 6
            case "extreme": return 7
            default: return 0
        }
    }
    return(
        <React.Fragment>
            <div className="menu_button_disabled">
                &lt;&lt;Previous
            </div>
            <div className={activeRange === '' ? "menu_button_disabled" : "menu_button"} onClick={() => {
                dispatch(combatAssistMenuButtonClicked(currentMenuIndex + 1))
            }}>
                Next&gt;&gt;
            </div>
            <div className="instructions">Select your targets range</div>
            <TargetNumber />
            <div className='contact'>
                <p>Range Modifiers</p>
                <table className="rangelist_table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>(4) Short</th>
                            <th>(5) Medium</th>
                            <th>(6) Long</th>
                            <th>(7) Extreme</th>
                        </tr>
                    </thead>
                    <tbody className="rangelist_table_body">
                        <tr>
                            <td colSpan='3' className='keep-left'>
                                <div className={activeWeaponList === "Firearms" ? "active_tab" : "range_list_tab"} onClick={() => {
                                    dispatch(rangeHeaderClicked("Firearms"))
                                }}>
                                    <strong>Firearms</strong>
                                </div>
                                <div className={activeWeaponList === "Heavy Weapons" ? "active_tab" : "range_list_tab"} onClick={() => {
                                    dispatch(rangeHeaderClicked("Heavy Weapons"))
                                }}>
                                    <strong>Heavy Weapons</strong>
                                </div>
                                <div className={activeWeaponList === "Projectiles" ? "active_tab" : "range_list_tab"} onClick={() => {
                                    dispatch(rangeHeaderClicked("Projectiles"))
                                }}>
                                    <strong>Projectiles</strong>
                                </div>
                            </td>
                            <td colSpan='2'>
                                <label><span className="tiny_text">For projectiles</span><br />Input your strength: </label>
                                <input className="input_text" type="text" id="strengthInput" name="strength" value={playerStrength} onChange={(event) => {
                                    const value = event.target.value;
                                    if(!isNaN(value)){
                                        dispatch(strengthInputChanged(value))
                                    }
                                }}/>
                            </td>
                        </tr>
                            {firearmsRangeList.map(weapon => {
                                return(
                                    <tr className={activeWeaponList === "Firearms" ? "" : "hidden"} key={weapon.label + "row"}>
                                        <td className='keep-left' key={weapon.label}>{weapon.label}</td>
                                        {weapon.rangeList.map(range => createRanges(range,weapon.label))}
                                    </tr>
                                )
                            })}
                        <tr></tr> {/* filler row so css for every odd row color change stays the same for each tab */}
                            {heavyweaponsRangeList.map(weapon => {
                                return(
                                    <tr className={activeWeaponList === "Heavy Weapons" ? "" : "hidden"} key={weapon.label + "row"}>
                                        <td className='keep-left' key={weapon.label}>{weapon.label}</td>
                                        {weapon.rangeList.map(range => createRanges(range,weapon.label))}
                                    </tr>
                                )
                            })}
                            {impactRangeList.map(weapon => {
                                return(
                                    <tr className={activeWeaponList === "Projectiles" ? "" : "hidden"} key={weapon.label + "row"}>
                                        <td className='keep-left' key={weapon.label}>{weapon.label}</td>
                                        {weapon.rangeList.map(range => createRangesProjectile(range,weapon.label))}
                                    </tr>
                                )
                            })}

                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}