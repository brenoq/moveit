import { CountdownContext } from '../contexts/CountdownContext';
import { useContext } from 'react';

import styles from '../styles/components/Countdown.module.css';

import { FcOk } from 'react-icons/fc';
import { BsX, BsPlayFill } from "react-icons/bs";

export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown 
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? ( /* if ternário {condição ? if : else} // {condição && if}*/
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                    <FcOk size={20} className={styles.iconFc} />
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                            <BsX size={20} className={styles.icon} />
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <BsPlayFill size={20} className={styles.icon} />
                        </button>
                    )}
                </>
            )}
        </div>
    );
}