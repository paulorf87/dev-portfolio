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
      { id: "4", title: "Apollo-Client" },
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
      { id: "2", title: "Express" },
      { id: "3", title: "NoSQL" },
      { id: "4", title: "SQL" },
      { id: "5", title: "REST" },
      { id: "6", title: "GraphQL" },
      { id: "7", title: "NodeRED" },
      { id: "8", title: "JavaScript" },
      { id: "9", title: "C++" },
      { id: "10", title: "Python" },
    ],
  },
  cloudServices: {
    title: "Cloud Computing Services",
    img: <CloudIcon className="card-icon" />,
    data: [
      { id: "1", title: "AWS Amplify" },
      { id: "2", title: "AWS Lambda" },
      { id: "3", title: "AWS Route53" },
      { id: "4", title: "AWS API Gateway" },
      { id: "5", title: "AWS DynamoDB" },
      { id: "6", title: "AWS RDS" },
    ],
  },
};
