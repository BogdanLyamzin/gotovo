import React from "react";
import { ModalContent } from "../../shared/components/Modal/Modal";

import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const FullCalendarTest = ({ setFieldValue, value }) => {
  const handleDateClick = (arg) =>
    setFieldValue("weddingDate", { date: arg.dateStr });
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
        events={[value]}
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGrid"
      />
    </ModalContent>
  );
};

export default FullCalendarTest;
