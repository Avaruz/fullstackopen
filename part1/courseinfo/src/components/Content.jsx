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

export default Content;