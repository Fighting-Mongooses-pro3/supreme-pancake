// function to capitalize first letter 

export default function UpperCase(props) {
  return props.string.charAt(0).toUpperCase() + props.string.slice(1);
}
