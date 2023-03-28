import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

export default function RuTimeline() {
    return (
        <div className="div-resume-component">
            <Timeline
                sx={{
                    [`& .${timelineOppositeContentClasses.root}`]: {
                    },
                }}

                style={{ alignContent: "center" }}
            >
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        SEPT 2021 - Current
                        <h6 style={{ letterSpacing: "0.1rem" }}>
                            Full Stack Developer
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h4 style={{ position: "relative", top: "-1.25rem", fontSize: "1rem" }}>GOVE ENTERPRISES</h4>
                        <p style={{ fontSize: "0.75rem", position: "relative", top: "-2rem" }}>
                            Worked in React.js, Next js frameworks.
                            Developed inhouse product in transportation & task management concept
                            Collabrated with architecture team on creating reusable react components
                        </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        OCT 2020 - SEPT 2021
                        <h6 style={{ letterSpacing: "0.1rem" }}>
                            Backend Software Developer
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h4 style={{ position: "relative", top: "-1.25rem", fontSize: "1rem" }}>GOVE ENTERPRISES</h4>
                        <p style={{ fontSize: "0.75rem", position: "relative", top: "-2rem" }}>
                            Worked in enterprise inhouse product REST API development using Java Spring Boot.
                            Backend service integration with internal bulk data processing software.
                        </p>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </div>
    );
}
