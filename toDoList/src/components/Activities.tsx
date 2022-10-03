import { ClipboardText, PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import styles from './Activities.module.css'
import Checkbox from "./Checkbox";

interface Tasks {
    name: string;
    checked: boolean;
}

function Activities (){
    const [newTask, setNewTask] = useState<Tasks[]>([]);
    const [text, setNewText] = useState("");
    const [newTaskLenght, setNewTaskLenght] = useState(0);

    function handleNewTask() {
        let newTaskValue = {} as Tasks;
        newTaskValue.name = text;
        newTaskValue.checked = false;

        if (text !== ""){
            console.log(text)
            setNewTask([...newTask, newTaskValue]);
        }
        setNewText("");
    }

    function handleChange(event : ChangeEvent<HTMLInputElement>) {
        setNewText(event.target.value);
    }   

    function handleDelete(name: string) {
        let taskToDelete = newTask.filter(e => e.name !== name)
        setNewTask(taskToDelete);
    }

    function countTasks(name: string) {
        let index = newTask.findIndex(object => {
            return object.name === name;
          });
          
        if (index !== -1) {
            newTask[index].checked = !newTask[index].checked;
        }

        setNewTaskLenght(newTask.filter(x => x.checked === true).length);
    }

    return (
        <>
            <div className={styles.button}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    id="task" 
                    name="task_name" 
                    value={text}
                    onChange={(e) => handleChange(e)}
                    className={styles.textArea}
                />
                <button className={styles.buttonCreate} onClick={handleNewTask}>
                    Criar
                    <PlusCircle size={24} />
                </button>

            </div>
            <div className={styles.tarefasText}>
                <div className={styles.tarefasCriadas}>
                        <p style={{color: "#4EA8DE"}}>Tarefas criadas</p>
                        <div className={styles.qtdPrimeira}>
                            <p>{newTask.length}</p>
                        </div>
                    
                    <div className={styles.tarefasConcluidas}>
                        <p style={{color: "#8284FA"}}>Concluídas</p>
                        <div className={styles.qtd}>
                            <p>{newTaskLenght} de {newTask.length}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.tasks}>
            {newTask.length == 0 ?
                <div className={styles.semTarefas}>
                    <div className={styles.line}/>

                    <ClipboardText color={"#808080"} size={47} />
                    <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div> 
                : 
            <div className={styles.tarefas}>
                       
                {newTask.map(x => {
                    return (
                        <div className={styles.checkbox} key={x.name}>
                            <Checkbox 
                                name={x.name} 
                                handleDelete={handleDelete} 
                                checked={x.checked} 
                                newTask={newTask}
                                countTasks={countTasks}
                            />
                        </div>
                    )
                })}
                </div>

                }
            </div>
        </>
    )
}

export default Activities;