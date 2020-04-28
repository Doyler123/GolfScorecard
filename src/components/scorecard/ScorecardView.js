import React from 'react';
import '../../styles/scorecard.css';


const ScorecardView = ({courseData, handicap, onChangeHandicap, playerName, setPlayerName, updateScore, calculateTotal, onFocus}) => {
    
    return(
        <div>
            <div className="nine">
                <div className="line">
                    <span className="name">
                        <input onFocus={onFocus} value={playerName} placeholder="Player Name" className="name-box" onChange={(event) => setPlayerName(event.target.value)}/>
                    </span>
                    <span className="hcap">Hcap:</span>
                    <span className="hcap">
                        <input onFocus={onFocus} value={handicap} placeholder="-" type="number" className="score-box" onChange={onChangeHandicap}/>
                    </span>
                </div>
                <div className="line">
                    <span className="hole">Hole</span>
                    <span className="par">Par</span>
                    <span className="index">Index</span>
                    <span className="score">Net</span>
                    <span className="points">S/F</span>
                </div>

                {courseData.holes.slice(0, 9).map((hole, index) => 
                    <div className="line" key={hole.hole} >
                        <span className="hole">{hole.hole}</span>
                        <span className="par">{hole.par}</span>
                        <span className="index">{hole.index}</span>
                        <span className="score">
                            <input onFocus={onFocus} value={hole.score ? hole.score : ""} type="number" className="score-box" onChange={(event) => updateScore((hole.hole - 1), event.target.value)}/>
                        </span>
                        <span className="points">{hole.points ? hole.points : "-"}</span>
                    </div>    
                )}
                
                <div className="line">
                    <span className="hole">Out</span>
                    <span className="par">36</span>
                    <span className="index">&nbsp;</span>
                    <span className="score">{calculateTotal(courseData.holes.slice(0, 9), 'score')}</span>
                    <span className="points">{calculateTotal(courseData.holes.slice(0, 9), 'points')}</span>
                </div>
            </div>
            <div className="nine">
                <div className="line">
                    <span className="hole">Hole</span>
                    <span className="par">Par</span>
                    <span className="index">Index</span>
                    <span className="score">Net</span>
                    <span className="points">S/F</span>
                </div>

                {courseData.holes.slice(9, 18).map((hole, index) => 
                    <div className="line" key={hole.hole} >
                        <span className="hole">{hole.hole}</span>
                        <span className="par">{hole.par}</span>
                        <span className="index">{hole.index}</span>
                        <span className="score">
                            <input onFocus={onFocus} value={hole.score ? hole.score : ""} type="number" className="score-box" onChange={(event) => updateScore((hole.hole - 1), event.target.value)}/>
                        </span>
                        <span className="points">{hole.points ? hole.points : "-"}</span>
                    </div>    
                )}

                <div className="line">
                    <span className="hole">In</span>
                    <span className="par">36</span>
                    <span className="index">&nbsp;</span>
                    <span className="score">{calculateTotal(courseData.holes.slice(0, 9), 'score')}</span>
                    <span className="points">{calculateTotal(courseData.holes.slice(0, 9), 'points')}</span>
                </div>
                <div className="line">
                    <span className="hole">Total</span>
                    <span className="par">72</span>
                    <span className="index">&nbsp;</span>
                    <span className="score">{calculateTotal(courseData.holes, 'score')}</span>
                    <span className="points">{calculateTotal(courseData.holes, 'points')}</span>
                </div>
            </div>
        </div>
    );
};


export default ScorecardView;