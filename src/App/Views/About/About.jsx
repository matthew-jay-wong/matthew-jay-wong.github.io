import React from 'react';

import './About.css';
import ExternalLink from '../../Common/ExternalLink';

export default function About() {
  return (
    <div 
      className="about"
      id="about"
    >
      <h2>About Me</h2>
      <p>
        Like I said before, My name is Matt and I am a full-stack developer with a strong focus on building maintainable and scalable applications geared towards providing users with excellent experiences. 
        Above all things I value collaboration, communication, and flexibility the most. 
        As a developer I know that success in our field is directly related to one’s ability to listen to feedback and work in tandem with other teams and/or departments. 
        Whether it’s designers, engineers, the marketing team, or front-line operations – a positive attitude combined with great interpersonal skills are the strongest indicators of any development team’s success. 
        I see my ideal workplace as having an appreciation for quality (and the commitment/dedication it demands), constructive criticism, discussing potential solutions before writing code, and most of all, a culture that promotes a healthy work/life balance.
      </p>
      <p>
        I am in my final year at UofT studying computer science currently working full-time at TD Securities while finishing the last bit of my degree part-time, 
      </p>
      <p>
        If you or anyone you know has a cool project or gig in mind that you think I would be perfect for, 
        defenitely send me an <a href="mailto:matthew.jay.wong@gmail.com">email</a> or look me up on <ExternalLink url="https://www.linkedin.com/in/matthew-jay-wong/">LinkedIn</ExternalLink>. 
        My resume can also be found <ExternalLink url={`${process.env.PUBLIC_URL}/software_developer_resume.pdf`}>here</ExternalLink>!
      </p>
    </div>
  )
}
