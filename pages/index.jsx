import EditableList from "components/EditableList";
import GlanceItems from "components/GlanceItems";
import FormBuilder from "components/FormBuilder";
import FormInput from "components/FormInput";
import FormCheckbox from "components/FormCheckbox";
import FormRadio from "components/FormRadio";
import Graph from "components/FormBuilder/Graph";
export default function AgendaPage() {
  const initialState = {
    one: "hello",
    two: "world",
    check_1: false,
    check_2: false,
    check_3: true,
    radio_1: "male"
  };
  const graph = new Graph([
    {
      name: "one",
      component: FormInput,
      props: { name: "one", validate: "number" }
    },
    {
      name: "two",
      component: FormInput,
      props: { name: "two", validate: "number" }
    },
    { name: "check_1", component: FormCheckbox, props: { name: "check_1" } },
    { name: "check_2", component: FormCheckbox, props: { name: "check_2" } },
    { name: "check_3", component: FormCheckbox, props: { name: "check_3" } },
    {
      name: "radio_1",
      component: FormRadio,
      props: { name: "radio_1", value: "female", id: "radio_female" }
    },
    {
      name: "radio_1",
      component: FormRadio,
      props: { name: "radio_1", value: "male", id: "radio_male" }
    }
  ]);
  graph
    .getNode("check_1")
    .to(graph.getNode("check_3"), (oldState, newState) => {
      if (oldState["check_3"] && newState["check_1"]) {
        newState["check_3"] = false;
      }
      return newState;
    });
  graph
    .getNode("check_2")
    .to(graph.getNode("check_3"), (oldState, newState) => {
      if (oldState["check_3"] && newState["check_2"]) {
        newState["check_3"] = false;
      }
      return newState;
    });
  graph
    .getNode("check_3")
    .to(graph.getNode("check_1"), (oldState, newState) => {
      if (!oldState["check_3"] && newState["check_3"]) {
        newState["check_1"] = false;
      }
      return newState;
    });
  graph
    .getNode("check_3")
    .to(graph.getNode("check_2"), (oldState, newState) => {
      if (!oldState["check_3"] && newState["check_3"]) {
        newState["check_2"] = false;
      }
      return newState;
    });
  function standaloneOnChange(e) {
    console.log("standalone", e.target.value);
  }
  function customValidate(value) {
    if (value !== "boo") {
      return "Value is not boo";
    } else {
      return null;
    }
  }
  return (
    <div>
      <GlanceItems />
      <EditableList />
      <div>
        <h2>Form</h2>
        <FormBuilder config={graph} initialState={initialState} />
      </div>
      <div>
        <h2>Standalone</h2>
        <FormInput onChange={standaloneOnChange} validate={customValidate} />
      </div>
    </div>
  );
}
