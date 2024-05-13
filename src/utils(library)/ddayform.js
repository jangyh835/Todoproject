import React, {useState} from "react";


export default function Dayforms1(){
    const startDate = new Date();
    const endDate = new Date('2024-05-14');
    const day = startDate.getTime() - endDate.getTime();
    const dday = Math.trunc(Math.abs(day / (1000 * 3600 * 24)));
    const [isSubmit, setIsSubmit] = useState(false);
    const [list, setList] = useState([]);
    const [userInputs, setUserInputs] = useState({
        dDayName: '',
        date: '',
    });
    const handleChange = (e) => {
        setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInputs.dDayName === '' || userInputs.date === '') {
      return;
    } else {
      setIsSubmit(true);
      setList([...list, userInputs]);
    }
    for (let i = 0; i < 2; i++) {
      e.target[i].value = '';
    }
    setUserInputs({ dDayName: '', date: '' });
  };
  const deleteItem = (e) => {
    const key = e.target.id;
    list.splice(key, 1);
    setList([...list]);
  };

return(

<>
      <form name='isSubmit' onSubmit={handleSubmit}>
        <input
          name='dDayName'
          type='text'
          placeholder="What's your D-day?"
          onChange={handleChange}
        />
        <input name='date' type='date' onChange={handleChange} />
        <isSubmit type='submit' value='+' />
      </form>
      {/* <DDayStyle>
        {isSubmit &&
          list
            .map((d, idx) => (
              <Dday info={d} key={idx} id={idx} delete={deleteItem} />
            ))
            .reverse()}
      </DDayStyle> */}
    </>
    );
}