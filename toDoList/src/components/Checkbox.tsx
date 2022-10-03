import { Trash } from "phosphor-react";
import { useState } from "react";

import styles from './Checkbox.module.css'

interface Tasks {
    name: string;
    checked: boolean;
}

interface Checkbox {
    name: string;
    checked: boolean;
    handleDelete: (name: string) => void;
    countTasks: (name: string) => void;
    newTask: Tasks[];
}

function Checkbox( { name, checked, handleDelete, newTask, countTasks }: Checkbox) {

    const [selected, setSelected] = useState(checked)

    return (
        <div className={styles.checkbox}>
            <label className={selected == false ? styles.label : styles.labelTrue}>
                <input type="checkbox"
                    className={styles.checkboxClick}
                    checked={selected}
                    onChange={() => { countTasks(name); setSelected(!selected); } }
                />
                {name}
            </label>
            <button className={styles.buttonTrash}>
                <Trash
                    className={styles.teste}
                    size={24}
                    onClick={(e) => handleDelete(name)}
                />
            </button>
        </div>
    )
}

export default Checkbox;