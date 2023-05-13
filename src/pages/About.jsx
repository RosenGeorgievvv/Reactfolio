import React from 'react'
import {
  VerticalTimeline, VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


function Experience() {
  return (
    <div className="experience">
      <h2 style={{display:"flex", justifyContent:'center', color: "#003644"}}>Education</h2>
      <VerticalTimeline lineColor="#003644">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2016"
          iconStyle={{ background: "#16b005", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
            PGEHT "Prof.Asen Zlatarov - Pleven"
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#16b005", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            D. A. Academy of Economics - Svishtov
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Computer Science</p>
        </VerticalTimelineElement>
        </VerticalTimeline>
        <h2 style={{display:"flex", justifyContent:'center', color: "#003644"}}>Work Experience</h2>
        <VerticalTimeline lineColor="#003644">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#003644", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Support Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tek-Experts
          </h4>
          <h5>Sofia,Bulgaria</h5>
          <p>Supporting clients through technical issues with product that we deliver. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#003644", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Software Support Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tek-Experts
          </h4>
          <h5>Sofia, Bulgaria</h5>
          <p>
            Main point of contact for dedicated customers for complex technical issues.
            Actively collaborating with R&D department and proactively involvment in code related issues.
          </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
}

export default Experience