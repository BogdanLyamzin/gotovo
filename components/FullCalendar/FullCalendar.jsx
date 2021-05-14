import React from "react";
import { ModalContent } from "../../shared/components/Modal/Modal";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const FullCalendarTest = () => {
  return (
    <ModalContent>
      <FullCalendar
        locale="uk"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </ModalContent>
  );
};

export default FullCalendarTest;