import {useState} from 'react';
import DatePicker from 'react-datepicker';
import '../css/dichvu.css'
import 'react-datepicker/dist/react-datepicker.css';


function Datepicker() {
  const handleDateChange = (date: Date | null) => {
    if (date instanceof Date) {
      setSelectedDate(date);
    } else if (date === null) {
      setSelectedDate(null);
    }
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  return(
<div className=''>
    <DatePicker className='datepicker'
          selected={selectedDate}
          onChange={date => handleDateChange(date)}
           showIcon
        />
    </div>
    
  );
};
export default Datepicker