import React, { useState, useEffect } from 'react';
import ScorecardView from './ScorecardView';
import testGolfClub from '../../data/testGolfClub';

const Scorecard = () => {

    let [courseData, setCourseData] = useState(testGolfClub);
    let [playerName, setPlayerName] = useState();
    let [handicap, setHandicap] = useState();

    useEffect(() => {
        setCourseData({
            ...setCourseData,
            holes: courseData.holes.map((hole, index) => {return {...hole, score: hole.score, points: calculatePoints(hole.score, hole.par, hole.index)}} )
        })
    }, [handicap]);

    const calculatePoints = (score, par, index) => {
        if(score){
            let hcap = parseInt(handicap);
            let shotsOnHole = 0;
            while(hcap > -18){
                if(hcap >= 0){
                    if(parseInt(index) <= hcap){
                        shotsOnHole++;
                    }
                }else{
                    if(shotsOnHole === 0 && parseInt(index) >= (19 + hcap)){
                        shotsOnHole--;
                    }
                }
                hcap -= 18;
            }
            
            let points = (parseInt(par) + 2) - (parseInt(score) - shotsOnHole);
    
            return points = points < 0 ? 0 : points;
        }

        return 0;
    }

    const updateScore = (holeIndex, score) => {
        setCourseData({
            ...courseData,
            holes: courseData.holes.map((hole, index) => holeIndex === index ? {...hole, score: score, points: calculatePoints(score, hole.par, hole.index)} : hole)
        });
    }

    const calculateTotal = (holes, prop) => {
       let total = holes.reduce((total, hole) => {
            let value = parseInt(hole[prop] ? hole[prop] : 0);
            return total + value;
        }, 0);
       return total <= 0 ? "-" : total;
    }

    const onFocus = event => event.target.select();

    const onChangeHandicap = event => {
        if(!isNaN(event.target.value)){
            let hcap = parseInt(event.target.value);
            if(hcap < -17){
                hcap = -17;
                event.target.value = hcap;
            }else if (hcap > 99){
                hcap = 99;
                event.target.value = hcap;
            }
            setHandicap(hcap);
        }
        setHandicap(event.target.value);
    }

    return(
        <ScorecardView 
            courseData={courseData}
            handicap={handicap}
            onChangeHandicap={onChangeHandicap}
            playerName={playerName}
            setPlayerName={setPlayerName}
            updateScore={updateScore}
            calculateTotal={calculateTotal}
            onFocus={onFocus}
        />
    );

};

export default Scorecard;