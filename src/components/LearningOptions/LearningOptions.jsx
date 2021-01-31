// in src/components/LearningOptions/LearningOptions.jsx

import React from "react";

import "./LearningOptions.css";

const LearningOptions = props => {
  const options = [
    {
      text: "I've been coding for hours and my brain hurts",
      handler: props.actionProvider.handleJavascriptList,
      id: 1
    },
    {
      text: "These companies are taking my free labour :/",
      handler: props.actionProvider.handleLabourList,
      id: 2
    },
    {
      text: "I don't have time to create an ethical project",
      handler: props.actionProvider.handleEthicList,
      id: 3
    },
    {
      text:
        "I'm mad about the lack of a tech-specific land and environment acknowledgment",
      handler: props.actionProvider.handleEnvironmentList,
      id: 4
    },
    {
      text: "I don't really understand the code I am using...",
      handler: props.actionProvider.handleUnderstandList,
      id: 5
    }
  ];

  const optionsMarkup = options.map(option => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
