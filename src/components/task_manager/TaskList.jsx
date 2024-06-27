export default function TaskList(props) {
  const { tasks } = props;
  return (
    <div>
      {tasks.map((task) => (
        <h1>{task.title}</h1>
      ))}
    </div>
  );
}
