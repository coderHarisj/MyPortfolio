import { textAlign } from '@mui/system';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import RuTimeline from '../component/Timeline.tsx';
import Education from './Education.tsx';

export default function Resume() {
    const animation = useSpring({
        opacity: 1,
        transform: 'translate3d(0, 0, 0) 1s',
        from: { opacity: 0, transform: 'translate3d(0, 20%, 0)' },
        config: { duration: 500 },
    });
    return (
        <>
            <animated.div style={animation}>
                <RuTimeline />
            </animated.div>
            <animated.div style={animation}>
                <hr></hr>
                <h1 className="h1-resume" style={{ textAlign: "center" }}>Education</h1>
                <hr></hr>
            </animated.div>
            <animated.div style={animation}>
                <Education />
            </animated.div>
        </>
    );
}
