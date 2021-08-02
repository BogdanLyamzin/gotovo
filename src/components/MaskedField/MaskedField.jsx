import {ErrorMessage, Field} from "formik";
import React from "react";
import MaskedInput from "react-text-mask";

const MaskedField = ({label, type = "text", placeholder = "", name, mask, required = false}) => {
    return (
        <>
            {label && <label className="form-label">{label}</label>}
            <Field
                render={({ field, handleChange, handleBlur }) => (
                    <MaskedInput
                        {...field}
                        mask={mask}
                        className="text-field"
                        placeholder={placeholder}
                        type={type}
                        guide={false}
                        keepCharPositions={true}
                        showMask={true}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                )}
                name={name}
            />
            {required && <ErrorMessage
                className="form-error"
                component="p"
                name={name}
            />}
        </>
    )
};

export default MaskedField;