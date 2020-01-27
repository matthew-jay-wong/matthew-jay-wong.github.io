import React from 'react';
 
import '../App.css';
 
const PROJECT_LIST = [
  'Project 1',
  'Project 2',
  'Project 3',
];
 
const ProjectList = () => PROJECT_LIST.map((project) => <li key={project}>{project}</li>);
 
export default function Projects() {
  return (
    <div className="PageItem">
      <h1>Projects</h1>
      <ul>
        <ProjectList />
      </ul>
    </div>
  );
}
