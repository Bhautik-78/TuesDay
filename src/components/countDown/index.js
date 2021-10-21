import React, {useState, useEffect} from 'react';
import moment from 'moment';

// endDate is a timestamp
const CountDown = ({endTime}) => {
    const [startTime, setStartTime] = useState(moment());
    useEffect(() => {
        const interval = setInterval(() => {
            setStartTime(moment());
        }, 100);
        return () => clearInterval(interval);
    }, []);
    const end = moment.utc(endTime);
    const diff = moment.utc(moment.duration(end.diff(startTime)).asMilliseconds());
    const days = diff.format("DDD");
    const hours = diff.format("HH");
    const mins = diff.format("mm");
    const secs = diff.format("ss");
    return (
        <div className="countdown-wrapper d-flex color-black align-items-center">
            <div className="circle d-flex flex-column justify-content-center align-items-center">
                <div className="label color-gray-2">DAYS</div>
                <div className="value ft-weight-bold">{days}</div>
            </div>
            <div className="colon p-2 color-primary">:</div>
            <div className="circle d-flex flex-column justify-content-center align-items-center">
                <div className="label color-gray-2">HRS</div>
                <div className="value ft-weight-bold">{hours}</div>
            </div>
            <div className="colon p-2 color-primary">:</div>
            <div className="circle d-flex flex-column justify-content-center align-items-center">
                <div className="label color-gray-2">MINS</div>
                <div className="value ft-weight-bold">{mins}</div>
            </div>
            <div className="colon p-2 color-primary">:</div>
            <div className="circle d-flex flex-column justify-content-center align-items-center">
                <div className="label color-gray-2">SEC</div>
                <div className="value ft-weight-bold">{secs}</div>
            </div>
        </div>
    );
};

export default CountDown;
