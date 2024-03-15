import { School } from '@mui/icons-material'
import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

const Experience = () => {
  return (
    <div className='Experience'>
      <VerticalTimeline lineColor="#3e497a" >
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{background:"#e9d35b", color:"#fff"}}
        icon={<School/>} >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
         <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{background:"#3e4972", color:"#fff"}}
        icon={<School/>} >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
         <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{background:"#e9d35b", color:"#fff"}}
        icon={<School/>} >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
         <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2010 - 2014"
        iconStyle={{background:"#3e4972", color:"#fff"}}
        icon={<School/>} >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
         <p>High School Diploma</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience
