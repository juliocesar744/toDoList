import { Check, Trash } from "phosphor-react";
import { useState } from "react";

import styles from './Checkbox.module.css'

function Checkbox() {
    const [checked, setChecked] = useState(false);

    return (
        <div className={styles.checkbox}>
            <label className={styles.label}>
                <input type="checkbox"
                    className={styles.checkboxClick}
                    defaultChecked={checked}
                    checked={checked}                    
                    onChange={() => setChecked(!checked)}
                />
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </label>
            <Trash className={styles.trash} size={30}  color="#808080"/>
        </div>
    )
}

export default Checkbox;