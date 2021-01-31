class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("not much")) {
      this.actionProvider.cool();
    }

    if (lowerCaseMessage.includes("good")) {
      this.actionProvider.cool();
    }

    if (lowerCaseMessage.includes("sad")) {
      this.actionProvider.sad();
    }

    if (lowerCaseMessage.includes("hours")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("tired")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("exhausted")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("sick")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("work")) {
      this.actionProvider.handleLabourList();
    }

    if (lowerCaseMessage.includes("labour")) {
      this.actionProvider.handleLabourList();
    }

    if (lowerCaseMessage.includes("exploit")) {
      this.actionProvider.handleLabourList();
    }

    if (lowerCaseMessage.includes("ethic")) {
      this.actionProvider.handleEthicList();
    }

    if (lowerCaseMessage.includes("collaboration")) {
      this.actionProvider.handleEthicList();
    }

    if (lowerCaseMessage.includes("feminist")) {
      this.actionProvider.handleEthicList();
    }

    if (lowerCaseMessage.includes("environment")) {
      this.actionProvider.handleEnvironmentList();
    }

    if (lowerCaseMessage.includes("colonial")) {
      this.actionProvider.handleEnvironmentList();
    }

    if (lowerCaseMessage.includes("earth")) {
      this.actionProvider.handleEnvironmentList();
    }

    if (lowerCaseMessage.includes("mine")) {
      this.actionProvider.handleEnvironmentList();
    }

    if (lowerCaseMessage.includes("planet")) {
      this.actionProvider.handleEnvironmentList();
    }

    if (lowerCaseMessage.includes("racism")) {
      this.actionProvider.handleEnvironmentList();
    }

    if (lowerCaseMessage.includes("confused")) {
      this.actionProvider.handleUnderstandList();
    }

    if (lowerCaseMessage.includes("understand")) {
      this.actionProvider.handleEnvironmentList();
    }

    if (lowerCaseMessage.includes("not working")) {
      this.actionProvider.handleEnvironmentList();
    }

    if (lowerCaseMessage.includes("frustrated")) {
      this.actionProvider.handleEnvironmentList();
    }
  }
}

export default MessageParser;
