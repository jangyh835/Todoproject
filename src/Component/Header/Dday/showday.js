import React,{useState, useEffect} from "react";


export default function Showday({props}){
    const { dDayName, date } = props;
  const [days, setDays] = useState(0);
    useEffect(() => {
        const today = new Date();
        const dday = new Date(`${date} 00:00:00`);
        const gapNum = dday - today;
        setDays(Math.ceil(gapNum / (1000 * 60 * 60 * 24)));
    }, [date]);
  return (
    <>
    <div
      id={props.id}
      onClick={props.delete}>

          <div>{dDayName}</div>
          <div>{date}</div>
          <span>
            D{days >= 0 ? '-' : '+'}
            {days === 0 ? 'day' : Math.abs(days)}
            <br />
          </span>
    </div>
    </>
  );
}