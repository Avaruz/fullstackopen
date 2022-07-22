export const Total = (props) => {
    console.log(props);
    const parts = props.parts;
    const total = parts.reduce((acc, part) => acc + part.exercises, 0);

    return <p>Number of exercises {total}</p>;
};
