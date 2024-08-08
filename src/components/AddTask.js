export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleSubmit = (event) => {
     event.preventDefault();

     if(task.id){
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) => (
        todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
      ));
      setTasklist(updatedTasklist);
      setTask({});
     } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit} >
        <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="add task" maxLength="25" onChange={event => setTask({...task, name: event.target.value})}/>
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}
