import React from "react";
import { ModalContent } from "../../shared/components/Modal/Modal";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FullCalendarTest = () => {
  return (
    <ModalContent>
      <FullCalendar
        locale="uk"
        selectable
        dayCount
        select={(info) => {
          console.log(info);
        }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </ModalContent>
  );
};

export default FullCalendarTest;
