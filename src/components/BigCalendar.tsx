"use client";

import { useState } from 'react';
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data';

const localizer = momentLocalizer(moment)

import "react-big-calendar/lib/css/react-big-calendar.css";

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);
    
    const handleChange = (selectedView: View) => {
        setView(selectedView)
    }

    return (
        <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        onView={handleChange}
        style={{ height: "98%" }}
        min={new Date(2029, 1, 0, 8, 0, 0)}
        max={new Date(2029, 1, 0, 17, 0, 0)}
        />
    )
}
export default BigCalendar;