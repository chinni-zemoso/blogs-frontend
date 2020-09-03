import React from "react";
import CustomButton from "../CustomButton";
import { text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "molecules/Buttons/CustomButton",
  decorators: [withKnobs],
};

export const Basic = () => {
  return <CustomButton label={text("Label", "Type here...")} />;
};

export const Submit = () => {
  return (
    <CustomButton variant="contained" color="primary" label={text("Label", "Submit")} onClick={action("Submitted")} />
  );
};
