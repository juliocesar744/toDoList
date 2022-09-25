import { ClipboardText } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tasks.module.css'


function Tasks() {
    return (
        <>
            <div className={styles.tarefas}>
                <div className={styles.tarefasCriadas}>
                        <p style={{color: "#4EA8DE"}}>Tarefas criadas</p>
                        <div className={styles.qtd}>
                            <p>0</p>
                        </div>
                    
                    <div className={styles.tarefasConcluidas}>
                        <p style={{color: "#8284FA"}}>Concluídas</p>
                        <div className={styles.qtd}>
                            <p>0</p>
                        </div>
                    </div>
                </div>
                <div className={styles.semTarefas}>
                    <ClipboardText color={"#808080"} size={47} />
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </>
    )
}

export default Tasks;