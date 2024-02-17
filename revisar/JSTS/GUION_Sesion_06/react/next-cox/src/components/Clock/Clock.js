import { useEffect, useState } from 'react';

import styles from './Clock.module.css';


const Word = ({ value, hidden = false }) => {
    const getStyle = ()=> {
      return {
        visibility:  hidden ? 'hidden' : 'visible'
      }
    }
    return (
      <div className={styles.digital}>
        <p>{value}</p>
        <p style={getStyle()}>{value}</p>
      </div>
    )

}


const Number = ({value = 0}) => {
    const result = String(value).padStart(2, "0");
    return (
        <div className={styles.digital}>
          <p>88</p>
          <p>{result}</p>
        </div>
    )
  }

const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB']; 

export function Clock(props) {

    const [hour  , setHour  ] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [day   , setDay   ] = useState(0);
    const [pm    , setPm    ] = useState(false);

    useEffect(()=> {

        const update = () => {
            const date = new Date();
            let hour = date.getHours();
            if(!props.h24) {
                hour = (hour % 12) || 12;
            }
            setHour(hour);
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
            setDay(date.getDay());
            setPm(date.getHours() >= 12);
        }

        update();

        const interval = setInterval(()=> {
            update();
        }, 1000);

        return ()=>clearInterval(interval);
    }, []);

    return (
    <div className={styles.clock}>
        <div className={styles.calendar}>
            {
                days.map((value, index)=>(<Word key={value} value={value} hidden={index != day}/>))
            }
        </div>
        <div className={styles.row}>
            <div className={styles.hour}>
                <Number value={hour}/>
                <Word value={':'} />
                <Number value={minute}/>
                <Word value={':'} />
                <Number value={second}/>
            </div>
            <div className={styles.ampm}>
                <Word value={'AM'} hidden={ pm} />
                <Word value={'PM'} hidden={!pm} />
            </div>
        </div>
    </div>

    )


}