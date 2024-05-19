import './calendar.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";

const Calendar = () =>{
    return (
        <div className="Calendar">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                className="rounded-table"
                events={[
                    {
                        title: 'event 1',
                        date: '2023-10-15',
                    },
                    {
                        title: 'event 2',
                        date: '2023-10-20',
                    },
                ]}
            />
        </div>
    )
}

export default Calendar;