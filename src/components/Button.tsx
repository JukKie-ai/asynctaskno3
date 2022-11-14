type MyCompType = {
    value: string;
    item: any;
    handleClick: any;
    id: any;
    stat: boolean;
}

const Button = (props: MyCompType) => {

  return (
    <button style={ props.stat ? {backgroundColor: props.value}: {backgroundColor: 'gray'}} value={props.value} onClick={() => props.handleClick(props.id)}>
    </button>
  )
}

export default Button