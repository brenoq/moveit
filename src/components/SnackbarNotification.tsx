import styles from '../styles/components/SnackbarNotification.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext, useState } from 'react';

export function SnackbarNotification() {
    const { amount } = useContext(ChallengesContext);

    return(
        <div className={styles.container}>
            <div>
            <img src="favicon.png" alt="icone"/>
            </div>
            
            <div>
                <h3>Novo desafio 🎉</h3>
                <p>Valendo {amount} xp</p>
            </div>
        </div>
    );
}