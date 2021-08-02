import DatePicker from "react-datepicker";
import {useState} from "react";
import {ErrorMessage, useField, useFormikContext} from "formik";

const CalendarField = (props) => {
    const { values: {plan}, setFieldValue } = useFormikContext();
    // const {values: {plan, weddingDate}, setFieldValue} = useFormikContext();
    const [field] = useField(props);
    const {label, required, name} = props;
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        // switch(selectedDate.getDay()){
        //     case 0:
        //
        // }
        return currentDate.getTime() < selectedDate.getTime();
    };
    return (
        <>
            <label className="form-label">Оберіть дату одруження</label>
            <DatePicker
                selected={new Date()}
                onChange={val => {
                    setFieldValue(field.name, val);
                }}
                minDate={new Date()}
                showTimeSelect
                className="text-field"
                filterTime={filterPassedTime}
                withPortal
            />
            {/*<DatePicker*/}
            {/*    {...field}*/}
            {/*    {...props}*/}
            {/*    className="text-field"*/}
            {/*    showTimeSelect*/}
            {/*    selected={(field.value && new Date(field.value)) || null}*/}
            {/*    onChange={val => {*/}
            {/*        setFieldValue(field.name, val);*/}
            {/*    }} />*/}

        </>
    );
};

export default CalendarField;