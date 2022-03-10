import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import CloudIcon from "@mui/icons-material/Cloud";

export const skills = {
  frontEnd: {
    title: "FrontEnd Development",
    img: <CodeIcon className="card-icon" />,
    data: [
      { id: "1", title: "JavaScript" },
      { id: "2", title: "React JS" },
      { id: "3", title: "React Native" },
      { id: "4", title: "Angular" },
      { id: "5", title: "HTML + CSS" },
      { id: "6", title: "SASS" },
      { id: "7", title: "Bootstrap" },
      { id: "8", title: "Material UI" },
      { id: "9", title: "Figma" },
    ],
  },
  backEnd: {
    title: "BackEnd Development",
    img: <ApiIcon className="card-icon" />,
    data: [
      { id: "1", title: "NodeJS" },
      { id: "2", title: "NoSQL" },
      { id: "3", title: "SQL" },
      { id: "4", title: "GraphQL" },
      { id: "5", title: "REST API" },
      { id: "6", title: "MERN Stack" },
      { id: "7", title: "JavaSript" },
      { id: "8", title: "C++" },
      { id: "9", title: "Python" },
    ],
  },
  cloudServices: {
    title: "Cloud Computing Services",
    img: <CloudIcon className="card-icon" />,
    data: [
      { id: "1", title: "AWS DynamoDB" },
      { id: "2", title: "AWS Lambda" },
      { id: "3", title: "AWS Amplify" },
      { id: "4", title: "AWS API Gateway" },
      { id: "5", title: "Google Firestore" },
    ],
  },
};
