import React from 'react';
import './CodeSnippet.css';

const CodeSnippet = () => {
  const animatedLine = "I am MERN Stack developer";
  const restOfCode = `
function greet(name) {
  console.log("Hello, " + name + "!");
}
const user = {
  name: "Mesfin",
  skills: ["React", "Node", "JavaScript"],
  hireable: true
};
greet(user.name);
  `.trim();

  return (
    <div className="code-card">
      <div className="code-header">
        <span className="circle red"></span>
        <span className="circle yellow"></span>
        <span className="circle green"></span>
      </div>
      <pre>
        <code>
          <span className="typewriter-line">{animatedLine}</span>
          {"\n"}{restOfCode}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
