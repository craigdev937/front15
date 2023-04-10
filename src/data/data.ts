import { DBASE } from "../models/Interface";
import Grow from "@public/grow.svg";
import Flow from "@public/flowing.svg";
import User from "@public/users.svg";

export const dBase: DBASE[] = [
    {
        id: 1,
        title: "Grow Together",
        paragraph:
            "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
        imageSVG: Grow,
        imageToRight: true,
    },
    {
        id: 2,
        title: "Flowing Conversations",
        paragraph:
            "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        imageSVG: Flow,
        imageToRight: false,
    },
    {
        id: 3,
        title: "Your Users",
        paragraph:
            "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        imageSVG: User,
        imageToRight: true,
    },
];



