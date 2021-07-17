import React, { useCallback, useEffect, useState } from "react";
import { ModalContent } from "../../src/components/Modal/Modal";

import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";

const FullCalendarTest = ({ setFieldValue, value }) => {
  const [events, setEvents] = useState([]);
  const handleDateClick = (arg) =>
    setFieldValue("weddingDate", arg.dateStr );

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://cmusy-dev.space/api/v1/weddings`
      );
      setEvents(
        data.map(({ date }) => ({ date, title: 'Зайнято' }))
      );
    } catch (error) {
      setEvents([]);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ModalContent>
      <FullCalendar
        locale="uk"
        selectable
        dayCount
        dateClick={handleDateClick}
        eventTimeFormat={{
          hour: "numeric",
          minute: "2-digit",
          meridiem: false,
        }}
        events={[...events, { date: value }]}
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGrid"
      />
    </ModalContent>
  );
};

export default FullCalendarTest;
