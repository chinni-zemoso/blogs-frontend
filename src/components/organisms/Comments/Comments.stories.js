import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import Comments from "./Comments";

export default {
  title: "organisms/Comments",
  decorators: [withKnobs],
  argTypes: { onClick: { action: "clicked" } },
};

export const Basic = () => {
  const name = text("Name", "Ramu");
  const email = text("EMail", "ramu.minla@gmail.com");
  const body = text(
    "Body",
    "Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible."
  );
  const image = text("AvatarUrl", "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50");
  
  const comments = [
    {
      id: "2",
      name: `${name}`,
      email: `${email}`,
      body: `${body}`,
      image: `${image}`,
    },
  ];
  return <Comments comments={comments} />;
};
