import { PlusCircle } from "phosphor-react";

import styles from './Activities.module.css'

function Activities (){ 
    return (
        <div className={styles.button}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                id="task" 
                name="task_name" 
                className={styles.textArea}
            />
            <button className={styles.buttonCreate}>
                Criar
                <PlusCircle size={24} />
            </button>
        </div>
    )
}

export default Activities;