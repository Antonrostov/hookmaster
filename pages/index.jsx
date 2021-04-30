import EditableList from "components/EditableList";
import GlanceItems from "components/GlanceItems";
import FormBuilder from "components/FormBuilder";
import FormInput from "components/FormInput";
import getFormConfig, { getLargeConfig } from "./getFormConfig";
export default function AgendaPage() {
  const config = getLargeConfig();
  const initialState = {};
  Object.keys(config.nodes).forEach(k => {
    initialState[k] = "";
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
        <FormBuilder config={config} initialState={initialState} />
      </div>
      <div>
        <h2>Standalone</h2>
        <FormInput onChange={standaloneOnChange} validate={customValidate} />
      </div>
    </div>
  );
}
