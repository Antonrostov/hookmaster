import EditableList from "components/EditableList";
import GlanceItems from "components/GlanceItems";
import Form from "components/Form";
import FormInput from "components/FormInput";
import FormCheckbox from "components/FormCheckbox";
import FormRadio from "components/FormRadio";
export default function AgendaPage() {
  const initialState = {
    one: "hello",
    two: "world"
  };
  async function onChange(oldState, newState) {
    if (!oldState["check_3"] && newState["check_3"]) {
      delete newState["check_1"];
      delete newState["check_2"];
    } else if (
      oldState["check_3"] &&
      (newState["check_1"] || newState["check_2"])
    ) {
      delete newState["check_3"];
    }
    console.log(newState);
    return Promise.resolve(newState);
  }
  function onSubmit(state) {
    console.log("form", state);
  }
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
        <Form onChange={onChange} onSubmit={onSubmit} data={initialState}>
          <FormInput name="one" validate="number" />
          <FormInput name="two" validate="number" />
          <FormCheckbox name="check_1" />
          <FormCheckbox name="check_2" />
          <FormCheckbox name="check_3" />
          <FormRadio id="radio_female" name="radio_1" value="female" />
          <FormRadio id="radio_male" name="radio_1" value="male" />
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </Form>
      </div>
      <div>
        <h2>Standalone</h2>
        <FormInput onChange={standaloneOnChange} validate={customValidate} />
      </div>
    </div>
  );
}
