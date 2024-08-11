// This code is basically a switch table that switches the view that is shown

import '../scss/Calendar.scss';
import DayView from './DayView';
import MonthView from './MonthView';
import WeekView from './WeekView';
import YearView from './YearView';

const Calendar = ({ viewIndex }: { viewIndex: number }) => {
	if (viewIndex === 0) return <DayView />;
	else if (viewIndex === 1) return <WeekView />;
	else if (viewIndex === 2) return <MonthView />;
	else if (viewIndex === 3) return <YearView />;
};

export default Calendar;
