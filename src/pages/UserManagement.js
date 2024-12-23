import React from "react";


const UserManagement = () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div style={{ marginTop: "-3%" }}>
                            <div className="form-section-titles mt20">User Management</div>
                        </div>
                        <hr />
                        {/* Show All */}
                        <div id="search-location">
                            <div className="panel panel-default">
                                <div className="panel-group mt-4">
                                    <div className="row align-items-center justify-content-between g-2 ">
                                        <div className="col col-auto">
                                            <div className="d-flex align-items-center">
                                                <div className="export-options float-left text-center text-sm-left">
                                                    {/* <button id="report-print-main" class="btn btn-primary shadow mr10"
                                              type="button">
                                              <i class="fa fa-add mr5"></i>
                                              <span>ADD LOCATION</span>
                                          </button> */}
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#topSlideOutModal"
                                                    >
                                                        <i className="fa fa-add mr5" />
                                                        <span>ADD NEW USER</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="d-flex align-items-center">
                                                <div className="form-group">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switchClient"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="d-inline ml10 form-control-label form-check-label"
                                                            htmlFor="switchClient"
                                                        >
                                                            <span style={{ fontSize: 14 }}>Client</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-group mt-4">
                                    <div className="table-caption text-center text-uppercase">
                                        USERS LIST
                                    </div>
                                    <div id="tableExample">
                                        <div
                                            className="table-responsive"
                                            style={{
                                                border: "2px solid #d7e3e8 !important",
                                                borderRadius: "2px 2px 8px 8px"
                                            }}
                                        >
                                            <table className="table table-sm fs-9 mb-0">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            className="sort border-top border-translucent ps-3"
                                                            data-sort="name"
                                                        >
                                                            Name
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent"
                                                            data-sort="email"
                                                        >
                                                            ADDRESS
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="locality"
                                                        >
                                                            PRACTITIONER
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="town"
                                                        >
                                                            USER NAME
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="colour"
                                                        >
                                                            2FA
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="default"
                                                        >
                                                            PERMISSIONS
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="default"
                                                        >
                                                            ACTIVE
                                                        </th>
                                                        <th
                                                            className="sort text-end align-middle pe-0 border-top border-translucent"
                                                            scope="col"
                                                        >
                                                            ACTION
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list">
                                                    <tr>
                                                        <td className="align-middle ps-3 name">Janessa Mann</td>
                                                        <td className="align-middle email">
                                                            janessa@example.com
                                                        </td>
                                                        <td className="align-middle age">65</td>
                                                        <td className="align-middle ps-3 name">Janessa Mann</td>
                                                        <td className="align-middle email">
                                                            <span style={{ color: "red" }}>.</span>
                                                        </td>
                                                        <td className="align-middle age">65</td>
                                                        <td className="align-middle white-space-nowrap text-end pe-0">
                                                            <div className="btn-reveal-trigger position-static">
                                                                <button
                                                                    className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal fs-10"
                                                                    type="button"
                                                                    data-bs-toggle="dropdown"
                                                                    data-boundary="window"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                    data-bs-reference="parent"
                                                                >
                                                                    <svg
                                                                        className="svg-inline--fa fa-ellipsis fs-10"
                                                                        aria-hidden="true"
                                                                        focusable="false"
                                                                        data-prefix="fas"
                                                                        data-icon="ellipsis"
                                                                        role="img"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 448 512"
                                                                        data-fa-i2svg=""
                                                                    >
                                                                        <path
                                                                            fill="currentColor"
                                                                            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                                        ></path>
                                                                    </svg>
                                                                    {/* <span class="fas fa-ellipsis-h fs-10"></span> Font Awesome fontawesome.com */}
                                                                </button>
                                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                                    <a className="dropdown-item" href="#!">
                                                                        View
                                                                    </a>
                                                                    <a className="dropdown-item" href="#!">
                                                                        Export
                                                                    </a>
                                                                    <div className="dropdown-divider" />
                                                                    <a className="dropdown-item text-danger" href="#!">
                                                                        Remove
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="topSlideOutModal"
                tabIndex={-1}
                aria-labelledby="topSlideOutModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-dialog-slideout"
                    style={{ maxWidth: 800, width: "100%" }}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="topSlideOutModalLabel">
                                User Management
                            </h5>
                            <button
                                className="btn btn-close p-1"
                                type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div
                            className="modal-body"
                            style={{ padding: "10px !important", backgroundColor: "#fff" }}
                        >
                            <div className="panel-body">
                                <div
                                    className="panel-group"
                                    id="accordion"
                                    role="tablist"
                                    aria-multiselectable="true"
                                >
                                    <div id="template-form-container">
                                        <div className="MuiScopedCssBaseline-root css-9sqakh">
                                            <div>
                                                <div
                                                    className="panel actionFormContainer"
                                                    id="action-form-container"
                                                >
                                                    <form
                                                        data-no-bind-invalid-form-validate="true"
                                                        className="collapse show"
                                                        noValidate="novalidate"
                                                        style={{}}
                                                    >
                                                        <div className="internal-title text-uppercase">
                                                            Add User
                                                        </div>
                                                        <div className="well well-form-dotted">
                                                            <div className="form-block form-block-lg mb20 mt20 pl10 pr10">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <div className="form-section-title mt10 mb30">
                                                                            User Details
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-12 mt-4">
                                                                        <div className="form-group row mb20">
                                                                            <label
                                                                                className="col-sm-4 col-12 col-form-label pr0"
                                                                                htmlFor="Name"
                                                                            >
                                                                                Name
                                                                            </label>
                                                                            <div className="col-sm-8 col-12">
                                                                                <input
                                                                                    className="form-control"
                                                                                    data-lpignore="true"
                                                                                    data-val="true"
                                                                                    data-val-required="The Name field is required."
                                                                                    id="Name"
                                                                                    name="Name"
                                                                                    type="text"
                                                                                    defaultValue=""
                                                                                />
                                                                                <span
                                                                                    className="field-validation-valid"
                                                                                    data-valmsg-for="Name"
                                                                                    data-valmsg-replace="true"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row mb20 mt-4">
                                                                            <label
                                                                                className="col-sm-4 col-12 col-form-label pr0"
                                                                                htmlFor="Email"
                                                                            >
                                                                                Email (used as Username)
                                                                            </label>
                                                                            <div className="col-sm-8 col-12">
                                                                                <input
                                                                                    className="form-control"
                                                                                    data-lpignore="true"
                                                                                    id="Email"
                                                                                    name="Email"
                                                                                    type="email"
                                                                                    defaultValue=""
                                                                                />
                                                                                <span
                                                                                    className="field-validation-valid"
                                                                                    data-valmsg-for="Email"
                                                                                    data-valmsg-replace="true"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <input
                                                                            data-val="true"
                                                                            data-val-remote="Sorry, that username is not available. Please choose a different one."
                                                                            data-val-remote-additionalfields="*.UserName,*.SupplierGroupUserId,*.UserName"
                                                                            data-val-remote-type="POST"
                                                                            data-val-remote-url="/User/IsUserNameAvailable"
                                                                            data-val-required="The User Name field is required."
                                                                            id="UserName"
                                                                            name="UserName"
                                                                            type="hidden"
                                                                            defaultValue=""
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 col-12 mt-4">
                                                                        <div className="form-group row mb20">
                                                                            <div className="col-sm-4 col-12 col-form-label pr0">
                                                                                <label htmlFor="SupplierId">
                                                                                    Default Practitioner Profile
                                                                                </label>
                                                                                <span id="default-practitioner-profile-icon" />
                                                                            </div>
                                                                            <div className="col-sm-8 col-12">
                                                                                <select
                                                                                    className="form-select"
                                                                                    aria-label="Default select example"
                                                                                    style={{ fontSize: 12, color: "#707f94" }}
                                                                                >
                                                                                    <option value="">
                                                                                        Select Practitioner...
                                                                                    </option>
                                                                                    <option value={181607}>Muhammad</option>
                                                                                </select>
                                                                                <span
                                                                                    className="field-validation-valid"
                                                                                    data-valmsg-for="SupplierId"
                                                                                    data-valmsg-replace="true"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row mb20">
                                                                            <label
                                                                                htmlFor="UserAccessType"
                                                                                className="col-sm-4 col-12 col-form-label pr0"
                                                                            >
                                                                                <span
                                                                                    className="has-tooltip"
                                                                                    data-toggle="tooltip"
                                                                                    data-placement="top"
                                                                                    data-original-title="Clinical access can view clinical notes, forms, files, and correspondence for the clients linked to their default practitioner profile. Administrative access will not see the clinical information by default unless granted permission to view it for all clients, but will have access to the client profiles and calendar for the default practitioner profile."
                                                                                >
                                                                                    Access Level
                                                                                </span>
                                                                            </label>
                                                                            <div className="col-md-8 col-12">
                                                                                <div className="radio custom-radio d-inline-block pt10 mr5">
                                                                                    <input
                                                                                        defaultChecked="checked"
                                                                                        data-val="true"
                                                                                        data-val-required="The Access Level field is required."
                                                                                        id="a3a7aae4-fe93-4556-9b7a-e75ae680b257"
                                                                                        name="UserAccessType"
                                                                                        type="radio"
                                                                                        defaultValue="Administrative"
                                                                                    />
                                                                                    <label htmlFor="a3a7aae4-fe93-4556-9b7a-e75ae680b257">
                                                                                        Administrative
                                                                                    </label>
                                                                                </div>
                                                                                <div className="radio custom-radio d-inline-block pt10 mr5">
                                                                                    <input
                                                                                        id="7e8872b0-8eda-4305-aa07-099c95bd3b24"
                                                                                        name="UserAccessType"
                                                                                        type="radio"
                                                                                        defaultValue="Clinical"
                                                                                    />
                                                                                    <label htmlFor="7e8872b0-8eda-4305-aa07-099c95bd3b24">
                                                                                        Clinical
                                                                                    </label>
                                                                                </div>
                                                                                <span
                                                                                    className="field-validation-valid"
                                                                                    data-valmsg-for="UserAccessType"
                                                                                    data-valmsg-replace="true"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <div className="form-section-title mt10 mb30">
                                                                            Permissions
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        People Menu
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Communication Menu
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Access All Reports
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Setup and Configure Power Diary
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Access all Clinical Client Notes/Forms
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Delete Appointments
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Access all Client File Uploads
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Access Client Invoices and Payments
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Allow Draft Session Notes
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Show All Appointments
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Access all Calendars
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Edit Appointments
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Allow Client List Generation and Export
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Allow Data Export
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Access all Client Correspondence
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Edit Appointments: Invoice Charges
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Can see all Tasks
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Allow User to Unlock Their Own Completed
                                                                                        Notes
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        View all Users Notes
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Edit Note and Form Templates
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Access Waitlist
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Connect to own Stripe account
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Access Practice Dashboard
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-12 mt-4">
                                                                        <div className="form-group">
                                                                            <div className="form-check form-switch">
                                                                                <input
                                                                                    className="form-check-input"
                                                                                    type="checkbox"
                                                                                    role="switch"
                                                                                    id="switchClient"
                                                                                />
                                                                                <label
                                                                                    className="d-inline ml10 form-control-label form-check-label"
                                                                                    htmlFor="switchClient"
                                                                                >
                                                                                    <span style={{ fontSize: 14 }}>
                                                                                        Can Change Assigned Practitioners for all
                                                                                        Clients
                                                                                    </span>
                                                                                </label>
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
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">
                                Send Invitation Email
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default UserManagement;
