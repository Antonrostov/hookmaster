import Form from "components/Form";
import Button from "components/Button";
import { useGraph } from "components/FormBuilder/GraphUtils";
export default function FormBuilder(props) {
  const { config, initialState, ...other } = props;
  const { ui, runChanges } = useGraph(config);
  function onSubmit(state, errors) {
    console.log("form", state);
    console.log("errors", errors);
    alert("Check the developer console!");
  }
  return (
    <Form
      onChange={(newState, changes) => {
        runChanges(changes);
      }}
      onSubmit={onSubmit}
      data={initialState}
      {...other}
    >
      {ui}
      <Button btnType="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
