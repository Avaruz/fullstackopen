import Header from "./components/Header";

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log(props);
  const parts = props.parts;
  return (
    <div>
      {parts.map((element) => (
        <Part name={element.name} exercises={element.exercises}></Part>
      ))}
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  const parts = props.parts;
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  );
};

export default App;
