import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "HackBot",
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm here to talk about your hackaton experience. What's up?",
      {
        widget: "learningOptions"
      }
    )
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E"
    },
    chatButton: {
      backgroundColor: "#376B7E"
    }
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: props => <LearningOptions {...props} />
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "...and no kidding! This is aweful for your body!",
            url: "https://chinmay.audio/blog/hackathons-are-bad-for-you",
            id: 1
          },
          {
            text: "Take a break, and read this.",
            url: "https://spssi.onlinelibrary.wiley.com/doi/10.1111/josi.12289",
            id: 2
          },
          {
            text: "Go get some sleep!",
            url: "https://www.youtube.com/watch?v=1bLTSokZHsU",
            id: 3
          }
        ]
      }
    },
    {
      widgetName: "labourLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "I could make a lot more working for them...",
            url:
              "https://www.payscale.com/research/CA/Employer=Novartis/Salary",
            id: 1
          },
          {
            text: "Is my work their innovation?",
            url:
              "https://www.wired.com/2013/07/your-friendly-neighborhood-hackathon-might-not-be-so-open-after-all/",
            id: 2
          },
          {
            text: "There is a thin line between passion and exploitation...",
            url: "https://phys.org/news/2019-05-job-advantage.html",
            id: 3
          }
        ]
      }
    },
    {
      widgetName: "ethicLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "I want to take time to co-create with my users",
            url: "https://www.feminist.ai/thoughtful-voice-design",
            id: 1
          },
          {
            text: "I want to use representative and consensual data in my work",
            url:
              "https://carolinesinders.com/wp-content/uploads/2020/05/Feminist-Data-Set-Final-Draft-2020-0517.pdf",
            id: 2
          },
          {
            text: "but I only have time to copy some code...",
            url:
              "https://journals.sagepub.com/doi/pdf/10.1177/1461444811422887?casa_token=eIMYT6_HCZcAAAAA:k2b2bY8-fB7b3M2Nujr03j7zZJ9F8BS0x5vF5sY5lCJGYvCqdY1WXXjHhD7ZXh2NYmUB6Gj7LUc1Vks",
            id: 3
          }
        ]
      }
    },
    {
      widgetName: "environmentLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Tech is so bad for the environment...",
            url:
              "https://theconversation.com/for-a-greener-future-we-must-accept-theres-nothing-inherently-sustainable-about-going-digital-128125",
            id: 1
          },
          {
            text: "Like, depressingly bad...",
            url:
              "https://www.jstor.org/stable/pdf/j.ctv65swcp.5.pdf?refreqid=excelsior%3A7a398bfeade51c32661587ed87c986a6",
            id: 2
          },
          {
            text:
              "And materials are often mined on indigenous land, or come from conflict minerals",
            url:
              "https://www.washingtonpost.com/graphics/business/batteries/congo-cobalt-mining-for-lithium-ion-battery/",
            id: 3
          }
        ]
      }
    },
    {
      widgetName: "understandLinks",
      widgetFunc: props => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "And it can be hard to fit in...",
            url: "https://dl.acm.org/doi/pdf/10.1145/3328778.3366792",
            id: 1
          },
          {
            text: "But there so many issues with copying black-box code...",
            url:
              "https://journals.sagepub.com/doi/pdf/10.1177/1461444811422887?casa_token=eIMYT6_HCZcAAAAA:k2b2bY8-fB7b3M2Nujr03j7zZJ9F8BS0x5vF5sY5lCJGYvCqdY1WXXjHhD7ZXh2NYmUB6Gj7LUc1Vks",
            id: 2
          }
        ]
      }
    }
  ]
};

export default config;
