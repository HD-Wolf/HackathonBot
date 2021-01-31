class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage("Hey");
    this.updateChatbotState(greetingMessage);
  }

  cool() {
    const coolMessage = this.createChatBotMessage("Cool, cool.");
    this.updateChatbotState(coolMessage);
  }

  sad() {
    const sadMessage = this.createChatBotMessage("I'm sorry about that...");
    this.updateChatbotState(sadMessage);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage("Same, same... ;n;", {
      widget: "javascriptLinks"
    });

    this.updateChatbotState(message);
  };

  handleLabourList = () => {
    const message = this.createChatBotMessage(
      "Right? I don't think a t-shirt is worth all this work...",
      {
        widget: "labourLinks"
      }
    );

    this.updateChatbotState(message);
  };

  handleEthicList = () => {
    const message = this.createChatBotMessage(
      "I know, it takes time to build a thoughtful project...",
      {
        widget: "ethicLinks"
      }
    );

    this.updateChatbotState(message);
  };

  handleEnvironmentList = () => {
    const message = this.createChatBotMessage("Me too :(", {
      widget: "environmentLinks"
    });

    this.updateChatbotState(message);
  };

  handleUnderstandList = () => {
    const message = this.createChatBotMessage(
      "Yeah CS can be so confusing...",
      {
        widget: "understandLinks"
      }
    );

    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.

    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
