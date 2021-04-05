import React from 'react';
import ../../App.css
import Calendar from 'tui-calendar';
//The path will change after uploading to github
import "tui-calendar/dist/tui-calendar.css";
//Default popups
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

var calendar = new Calendar('#calendar', {
defaultView: 'month',
taskView: true,
template: {
monthDayname: function(dayname){
return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
}
}
});


export default function Calendar(){
return <h1 className='calendar'>Calendar</h1>
<body>
<div id="calendar" style="height: 800px;"?</div>
</body>
}

files/folders needed:
tui-date-picker.css
tui-time-picker.css
tui-calendar.css