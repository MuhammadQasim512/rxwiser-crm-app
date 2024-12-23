import React from "react";


const Practioners = () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div style={{ marginTop: "-3%" }}>
                            <div className="form-section-titles mt20">Dr Ramesh SHankar Weekly Availability</div>
                        </div>
                        <hr />

                        <form action="#" data-prompt-unsaved="" method="post">
                            <div className="panel-body">
                                <div className="form-section-title">
                                    <span className="mt5 text-uppercase">
                                        Weekly Availability Configuration
                                    </span>
                                </div>
                                <div className="row main-form mt20">
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                        <div className="form-group row">
                                            <label className="col-lg-4 col-12 col-form-label">From</label>
                                            <div className="col-lg-8 col-12">
                                                <div className="input-group date" id="datepicker">
                                                    <input
                                                        className="form-control datetimepicker"
                                                        id="datepicker"
                                                        type="text"
                                                        placeholder="dd/mm/yyyy"
                                                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                                                    />
                                                    <span className="input-group-append">
                                                        <span className="input-group-text bg-light d-block">
                                                            <i className="fa fa-calendar" />
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label className="col-lg-4 col-12 col-form-label">To</label>
                                            <div className="col-lg-8 col-12">
                                                <div className="input-group date" id="datepicker">
                                                    <input
                                                        className="form-control datetimepicker"
                                                        id="datepicker"
                                                        type="text"
                                                        placeholder="dd/mm/yyyy"
                                                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                                                    />
                                                    <span className="input-group-append">
                                                        <span className="input-group-text bg-light d-block">
                                                            <i className="fa fa-calendar" />
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label className="col-lg-4 col-12 col-form-label">Description</label>
                                            <div className="col-lg-8 col-12">
                                                <textarea
                                                    className="form-control notes"
                                                    data-val="true"
                                                    data-val-length="Description must be less than or equal to 300 characters"
                                                    data-val-length-max={300}
                                                    id="Notes"
                                                    name="Notes"
                                                    rows={4}
                                                    defaultValue={""}
                                                />
                                                <span
                                                    className="field-validation-valid"
                                                    data-valmsg-for="Notes"
                                                    data-valmsg-replace="true"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                        <div className="form-group row">
                                            <label className="col-12 col-lg-4 col-form-label">Location</label>
                                            <div className="col-12 col-lg-8">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    style={{ fontSize: 12, color: "#707f94" }}
                                                >
                                                    <option selected="selected" value={369883}>
                                                        Prime Care Movers
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label className="col-12 col-lg-4 col-form-label">Recurs Every</label>
                                            <div className="col-12 col-lg-8">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    style={{ fontSize: 12, color: "#707f94" }}
                                                >
                                                    <option value="Weekly">1 Week</option>
                                                    <option value="EverySecond">2 Weeks</option>
                                                    <option value="EveryThird">3 Weeks</option>
                                                    <option value="EveryFourth">4 Weeks</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-group mt20">
                                    <div className="panel">
                                        <div className="form-section-title">
                                            <span className="panel-title" id="headingOne">
                                                DAYS AND TIMES
                                            </span>
                                        </div>
                                        <div className="panel-collapse">
                                            <div className="panel-body p-0 pt-3 pb-3">
                                                <div
                                                    className="row day-time"
                                                    role="tablist"
                                                    aria-multiselectable="true"
                                                >
                                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                                        <div className="">
                                                            <div className="entity-node">
                                                                <input
                                                                    data-period="True"
                                                                    data-val="true"
                                                                    data-val-required="The RosterPeriodId field is required."
                                                                    id="Monday_RosterPeriodId"
                                                                    name="Monday.RosterPeriodId"
                                                                    type="hidden"
                                                                    defaultValue={0}
                                                                />
                                                                <input
                                                                    data-val="true"
                                                                    data-val-required="The WeekDay field is required."
                                                                    data-weekday="True"
                                                                    id="Monday_WeekDay"
                                                                    name="Monday.WeekDay"
                                                                    type="hidden"
                                                                    defaultValue="Mon"
                                                                />
                                                                <table className="table table-time">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="text-uppercase">Mon</th>
                                                                            <th className="text-right">
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    className="text-primary action-add-timespan"
                                                                                >
                                                                                    + Add Availability
                                                                                </a>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>
                                                                                <div className="time-span-entity">
                                                                                    <div className="form-group mb0 mt10 d-flex align-items-top justify-content-end">
                                                                                        <a href="#">
                                                                                            <i
                                                                                                className="fa fa-margin fa-trash"
                                                                                                style={{
                                                                                                    color: "#e5546a!important",
                                                                                                    fontSize: "12px !important",
                                                                                                    margin: "10px 6px 6px 8px"
                                                                                                }}
                                                                                            />
                                                                                        </a>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                        <span
                                                                                            className="mt5"
                                                                                            style={{
                                                                                                margin: "5px 8px 4px 7px",
                                                                                                color: "#a2adbf"
                                                                                            }}
                                                                                        >
                                                                                            To
                                                                                        </span>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="form-group mt-2 text-right"
                                                                                        style={{
                                                                                            display: "flex",
                                                                                            justifyContent: "flex-end",
                                                                                            alignItems: "center",
                                                                                            gap: 10
                                                                                        }}
                                                                                    >
                                                                                        <div className="form-check form-switch d-flex align-items-center">
                                                                                            {/* Label */}
                                                                                            <label
                                                                                                className="form-control-label form-check-label"
                                                                                                htmlFor="switchClient"
                                                                                                style={{
                                                                                                    margin: "2px 46px 2px 2px",
                                                                                                    fontSize: 14
                                                                                                }}
                                                                                            >
                                                                                                Clients can book online
                                                                                            </label>
                                                                                            {/* Checkbox */}
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                role="switch"
                                                                                                id="switchClient"
                                                                                                defaultChecked=""
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="entity-node">
                                                                <table className="table table-time">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="text-uppercase">Tue</th>
                                                                            <th className="text-right">
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    className="text-primary action-add-timespan"
                                                                                >
                                                                                    + Add Availability
                                                                                </a>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>
                                                                                <div className="time-span-entity">
                                                                                    <div className="form-group mb0 mt10 d-flex align-items-top justify-content-end">
                                                                                        <a href="#">
                                                                                            <i
                                                                                                className="fa fa-margin fa-trash"
                                                                                                style={{
                                                                                                    color: "#e5546a!important",
                                                                                                    fontSize: "12px !important",
                                                                                                    margin: "10px 6px 6px 8px"
                                                                                                }}
                                                                                            />
                                                                                        </a>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                        <span
                                                                                            className="mt5"
                                                                                            style={{
                                                                                                margin: "5px 8px 4px 7px",
                                                                                                color: "#a2adbf"
                                                                                            }}
                                                                                        >
                                                                                            To
                                                                                        </span>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="form-group mt-2 text-right"
                                                                                        style={{
                                                                                            display: "flex",
                                                                                            justifyContent: "flex-end",
                                                                                            alignItems: "center",
                                                                                            gap: 10
                                                                                        }}
                                                                                    >
                                                                                        <div className="form-check form-switch d-flex align-items-center">
                                                                                            {/* Label */}
                                                                                            <label
                                                                                                className="form-control-label form-check-label"
                                                                                                htmlFor="switchClient"
                                                                                                style={{
                                                                                                    margin: "2px 46px 2px 2px",
                                                                                                    fontSize: 14
                                                                                                }}
                                                                                            >
                                                                                                Clients can book online
                                                                                            </label>
                                                                                            {/* Checkbox */}
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                role="switch"
                                                                                                id="switchClient"
                                                                                                defaultChecked=""
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="entity-node">
                                                                <table className="table table-time">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="text-uppercase">Wed</th>
                                                                            <th className="text-right">
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    className="text-primary action-add-timespan"
                                                                                >
                                                                                    + Add Availability
                                                                                </a>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>
                                                                                <div className="time-span-entity">
                                                                                    <div className="form-group mb0 mt10 d-flex align-items-top justify-content-end">
                                                                                        <a href="#">
                                                                                            <i
                                                                                                className="fa fa-margin fa-trash"
                                                                                                style={{
                                                                                                    color: "#e5546a!important",
                                                                                                    fontSize: "12px !important",
                                                                                                    margin: "10px 6px 6px 8px"
                                                                                                }}
                                                                                            />
                                                                                        </a>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                        <span
                                                                                            className="mt5"
                                                                                            style={{
                                                                                                margin: "5px 8px 4px 7px",
                                                                                                color: "#a2adbf"
                                                                                            }}
                                                                                        >
                                                                                            To
                                                                                        </span>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="form-group mt-2 text-right"
                                                                                        style={{
                                                                                            display: "flex",
                                                                                            justifyContent: "flex-end",
                                                                                            alignItems: "center",
                                                                                            gap: 10
                                                                                        }}
                                                                                    >
                                                                                        <div className="form-check form-switch d-flex align-items-center">
                                                                                            {/* Label */}
                                                                                            <label
                                                                                                className="form-control-label form-check-label"
                                                                                                htmlFor="switchClient"
                                                                                                style={{
                                                                                                    margin: "2px 46px 2px 2px",
                                                                                                    fontSize: 14
                                                                                                }}
                                                                                            >
                                                                                                Clients can book online
                                                                                            </label>
                                                                                            {/* Checkbox */}
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                role="switch"
                                                                                                id="switchClient"
                                                                                                defaultChecked=""
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="entity-node">
                                                                <table className="table table-time">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="text-uppercase">Thu</th>
                                                                            <th className="text-right">
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    className="text-primary action-add-timespan"
                                                                                >
                                                                                    + Add Availability
                                                                                </a>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>
                                                                                <div className="time-span-entity">
                                                                                    <div className="form-group mb0 mt10 d-flex align-items-top justify-content-end">
                                                                                        <a href="#">
                                                                                            <i
                                                                                                className="fa fa-margin fa-trash"
                                                                                                style={{
                                                                                                    color: "#e5546a!important",
                                                                                                    fontSize: "12px !important",
                                                                                                    margin: "10px 6px 6px 8px"
                                                                                                }}
                                                                                            />
                                                                                        </a>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                        <span
                                                                                            className="mt5"
                                                                                            style={{
                                                                                                margin: "5px 8px 4px 7px",
                                                                                                color: "#a2adbf"
                                                                                            }}
                                                                                        >
                                                                                            To
                                                                                        </span>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="form-group mt-2 text-right"
                                                                                        style={{
                                                                                            display: "flex",
                                                                                            justifyContent: "flex-end",
                                                                                            alignItems: "center",
                                                                                            gap: 10
                                                                                        }}
                                                                                    >
                                                                                        <div className="form-check form-switch d-flex align-items-center">
                                                                                            {/* Label */}
                                                                                            <label
                                                                                                className="form-control-label form-check-label"
                                                                                                htmlFor="switchClient"
                                                                                                style={{
                                                                                                    margin: "2px 46px 2px 2px",
                                                                                                    fontSize: 14
                                                                                                }}
                                                                                            >
                                                                                                Clients can book online
                                                                                            </label>
                                                                                            {/* Checkbox */}
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                role="switch"
                                                                                                id="switchClient"
                                                                                                defaultChecked=""
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                                                        <div className="">
                                                            <div className="entity-node">
                                                                <table className="table table-time">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="text-uppercase">Fri</th>
                                                                            <th className="text-right">
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    className="text-primary action-add-timespan"
                                                                                >
                                                                                    + Add Availability
                                                                                </a>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}>
                                                                                <div className="time-span-entity">
                                                                                    <div className="form-group mb0 mt10 d-flex align-items-top justify-content-end">
                                                                                        <a href="#">
                                                                                            <i
                                                                                                className="fa fa-margin fa-trash"
                                                                                                style={{
                                                                                                    color: "#e5546a!important",
                                                                                                    fontSize: "12px !important",
                                                                                                    margin: "10px 6px 6px 8px"
                                                                                                }}
                                                                                            />
                                                                                        </a>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                        <span
                                                                                            className="mt5"
                                                                                            style={{
                                                                                                margin: "5px 8px 4px 7px",
                                                                                                color: "#a2adbf"
                                                                                            }}
                                                                                        >
                                                                                            To
                                                                                        </span>
                                                                                        <span className="time-span mr5 text-left">
                                                                                            <div
                                                                                                id="start-timepicker-9bdad740-8d10-4371-8a55-d94d0cba7f44"
                                                                                                className="input-group"
                                                                                            >
                                                                                                <div className="pf-c-date-picker powerdiary-timepicker">
                                                                                                    <input
                                                                                                        className="form-control datetimepicker"
                                                                                                        id="timepicker1"
                                                                                                        type="text"
                                                                                                        placeholder="hour : minute"
                                                                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}'
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="form-group mt-2 text-right"
                                                                                        style={{
                                                                                            display: "flex",
                                                                                            justifyContent: "flex-end",
                                                                                            alignItems: "center",
                                                                                            gap: 10
                                                                                        }}
                                                                                    >
                                                                                        <div className="form-check form-switch d-flex align-items-center">
                                                                                            {/* Label */}
                                                                                            <label
                                                                                                className="form-control-label form-check-label"
                                                                                                htmlFor="switchClient"
                                                                                                style={{
                                                                                                    margin: "2px 46px 2px 2px",
                                                                                                    fontSize: 14
                                                                                                }}
                                                                                            >
                                                                                                Clients can book online
                                                                                            </label>
                                                                                            {/* Checkbox */}
                                                                                            <input
                                                                                                className="form-check-input"
                                                                                                type="checkbox"
                                                                                                role="switch"
                                                                                                id="switchClient"
                                                                                                defaultChecked=""
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="entity-node">
                                                                <table className="table table-time">
                                                                    <thead style={{ backgroundColor: "none !important" }}>
                                                                        <tr>
                                                                            <th className="text-uppercase">Sat</th>
                                                                            <th className="text-right">
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    className="text-primary action-add-timespan"
                                                                                >
                                                                                    + Add Availability
                                                                                </a>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="entity-node">
                                                                <table className="table table-time">
                                                                    <thead style={{ background: "none !important" }}>
                                                                        <tr>
                                                                            <th className="text-uppercase">Sun</th>
                                                                            <th className="text-right">
                                                                                <a
                                                                                    href="javascript:;"
                                                                                    className="text-primary action-add-timespan"
                                                                                >
                                                                                    + Add Availability
                                                                                </a>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={2}></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 mt-4">
                                                    <button
                                                        type="submit"
                                                        id="btnSubmit"
                                                        className="float-right btn btn-lg btn-green save validate-form action-form"
                                                    >
                                                        <i
                                                            className="fa fa-check"
                                                            style={{ fontSize: 14, marginRight: 12 }}
                                                        />
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default Practioners;
