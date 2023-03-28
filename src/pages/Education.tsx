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

export default function Education() {
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
                        2016 - 2020
                        <h6 style={{ letterSpacing: "0.1rem" }}>
                            B.E. Mechanical Engineering 
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h4 style={{ position: "relative", top: "-1.25rem", fontSize: "1rem" }}>Velammal College of Engineering & Technology</h4>
                        <p style={{ fontSize: "0.75rem", position: "relative", top: "-2rem" }}>
                            Madurai.
                        </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        2015 - 2016
                        <h6 style={{ letterSpacing: "0.1rem" }}>
                            Higher Secondary
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h4 style={{ position: "relative", top: "-1.25rem", fontSize: "1rem" }}>Thiagrajar Model Higher Secondary School</h4>
                        <p style={{ fontSize: "0.75rem", position: "relative", top: "-2rem" }}>
                            Madurai.
                        </p>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        2013 - 2014
                        <h6 style={{ letterSpacing: "0.1rem" }}>
                            State Board
                        </h6>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h4 style={{ position: "relative", top: "-1.25rem", fontSize: "1rem" }}>Thiagrajar Model Higher Secondary School</h4>
                        <p style={{ fontSize: "0.75rem", position: "relative", top: "-2rem" }}>
                            Madurai.
                        </p>
                    </TimelineContent>
                </TimelineItem>

            </Timeline>
        </div>
    )
}