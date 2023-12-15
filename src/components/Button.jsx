export default function Button(props) {
  return (
    <button
      className={props.color}
      onClick={() => {
        props.setColor(props.color);
      }}
    ></button>
  );
}
