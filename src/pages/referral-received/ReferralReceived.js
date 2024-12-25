import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"


const ReferralReceived = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // Track the currently active dropdown
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Function to toggle the dropdown menu
    const toggleDropdown = (dropdown) => (e) => {
        e.preventDefault();
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown)); // Toggle the clicked dropdown
    };

    // Function to toggle the sidebar menu
    const toggleSidebar = (e) => {
        e.preventDefault();
        setSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar if screen size increases
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 990) {
                setSidebarOpen(false); // Hide sidebar on larger screens
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="dashboard">
                <div className={`dashboard-nav ${isSidebarOpen ? "mobile-show" : ""}`}>
                    <header>
                        <a href="#!" className="menu-toggle" onClick={toggleSidebar}>
                            <i className="fas fa-bars" />
                        </a>
                        <div className="column-title">
                            <span id="menu-header-title">
                                <span className="sr-only">Profile Menu:</span>
                                <div className="client-profile-menu">
                                    <div className="MuiScopedCssBaseline-root css-9sqakh">
                                        <div className="dropdown mega-menu undefined">
                                            <a
                                                data-selenium-id="client-megamenu"
                                                className="menu-trigger highlighted-link"
                                                href="#"
                                                aria-label="Client Menu"
                                            >
                                                <span className="display-name">
                                                    <span>Muhammad Waqas</span>
                                                </span>
                                                <span className="icon fsize13 ml-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <small>
                                (3)&nbsp;
                                <a className="roleLink client" href="#">
                                    Client
                                </a>
                            </small>
                        </div>
                    </header>
                    <nav className="dashboard-nav-list">
                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "profile" ? "show" : ""
                                }`}
                        >
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("profile")}
                            >
                                Profile{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <NavLink
                                    to="/profile_client"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Details
                                </NavLink>

                                <NavLink
                                    to="/client_contact"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Contacts
                                </NavLink>

                                <NavLink
                                    to="/referral-received"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Referrals
                                </NavLink>
                                <NavLink
                                    to="/appoinments-remindar"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Appointment Reminders
                                </NavLink>
                                <NavLink to="/client-task" className={({ isActive }) =>
                                    `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                } >  Tasks </NavLink>
                            </div>
                        </div>

                        <div className={`dashboard-nav-dropdown ${activeDropdown === "appointments" ? "show" : ""
                            }`}
                        >
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("appointments")}
                            >
                                Appointments{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <NavLink
                                    to="/appoinments_client"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Appointments
                                </NavLink>
                                <NavLink
                                    to="/appointment_statistics"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </div>
                        </div>

                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "billing" ? "show" : ""}`}
                        >
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("billing")}
                            >
                                Billing{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <NavLink
                                    to="/billing_setup"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Billing Setup
                                </NavLink>

                                <NavLink
                                    to="/insurance" className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Insurance
                                </NavLink>

                                <NavLink
                                    to="/invoices" className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Invoice
                                </NavLink>
                                <NavLink
                                    to="/payment_received" className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Payments
                                </NavLink>
                            </div>
                        </div>
                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "records" ? "show" : ""}`}
                        >
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("records")}
                            >
                                Records{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <NavLink
                                    to="notes"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Notes
                                </NavLink>
                                <NavLink
                                    to="/record_files"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Files
                                </NavLink>
                                <NavLink
                                    to="correspondence"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Correspondence
                                </NavLink>
                                <NavLink
                                    to="/client_diagnoses"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Diagnoses
                                </NavLink>
                            </div>
                        </div>
                        <div className={`dashboard-nav-dropdown ${activeDropdown === "communication" ? "show" : ""}`}>
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("communication")}
                            >
                                Communication{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <NavLink
                                    to="/communication_activity"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Activity
                                </NavLink>
                                <NavLink
                                    to="/create_sms"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    New SMS
                                </NavLink>
                                <NavLink
                                    to="new_email"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    New Email
                                </NavLink>
                                <NavLink
                                    to="/create_letter"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    New Letter
                                </NavLink>
                            </div>
                        </div>
                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "admin" ? "show" : ""}`}
                        >
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("admin")}
                            >
                                Admin{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <NavLink
                                    to="/admin_manage"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Manage
                                </NavLink>
                                <NavLink
                                    to="admin_notes"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Admin Notes
                                </NavLink>
                                <NavLink
                                    to="/admin_files"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Admin Files
                                </NavLink>
                                <NavLink
                                    to="/admin_form"
                                    className={({ isActive }) =>
                                        `dashboard-nav-dropdown-item ${isActive ? "active" : ""}`
                                    }>
                                    Admin Forms
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="dashboard-app">
                    <header className="dashboard-toolbar">
                        <a href="#!" className="menu-toggle" onClick={toggleSidebar}>
                            <i className="fas fa-bars" />
                        </a>

                    </header>
                    <div className="dashboard-content">
                        <div className="card">
                            <div className="form-section-titles mt20">Referrals Received</div>
                            <hr />
                            <div style={{ padding: 20 }}>
                                {/* Show All */}
                                <div id="search-option-all" style={{ marginTop: "-4%" }}>
                                    <div className="panel panel-default hidden" id="client-list">
                                        <div className="panel-group mt-4">
                                            <div className="row align-items-center justify-content-between g-2 ">
                                                <div className="col col-auto">
                                                    <div className="d-flex align-items-center">
                                                        <div className="export-options float-left text-center text-sm-left">

                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#topSlideOutModal"
                                                            >
                                                                <i className="fa fa-add mr5" />
                                                                <span>ADD REFERRAL</span>
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="panel-group mt-4">
                                            <div className="table-caption text-center text-uppercase">
                                                Referral List
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
                                                                    Start
                                                                </th>
                                                                <th
                                                                    className="sort border-top border-translucent"
                                                                    data-sort="email"
                                                                >
                                                                    End
                                                                </th>
                                                                <th
                                                                    className="sort border-top border-translucent desc"
                                                                    data-sort="age"
                                                                >
                                                                    Is Default
                                                                </th>
                                                                <th className="sort border-top border-translucent">
                                                                    Show On Invoice Print
                                                                </th>
                                                                <th className="sort border-top border-translucent">
                                                                    Notes
                                                                </th>
                                                                <th
                                                                    className="sort border-top border-translucent desc"
                                                                    data-sort="age"
                                                                >
                                                                    Referer Name
                                                                </th>
                                                                <th
                                                                    className="sort border-top border-translucent desc"
                                                                    data-sort="age"
                                                                >
                                                                    Action
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="list">
                                                            <tr>
                                                                <td className="align-middle ps-3 name">Empty</td>
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
                                        Referrals Received
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
                                    style={{ padding: "10px", backgroundColor: "#fff" }}
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
                                                                    Add Referral
                                                                </div>
                                                                <div
                                                                    className="well well-form-dotted"
                                                                    style={{ padding: "16px" }}
                                                                >
                                                                    <div className="form-block form-block-lg mb20 mt20">
                                                                        <div className="form-group row">
                                                                            <label
                                                                                htmlFor="Referrer Search"
                                                                                className="col-sm-4 col-12 col-form-label "
                                                                            >
                                                                                Referrer Search:
                                                                            </label>
                                                                            <div className="col-sm-7 col-12">
                                                                                <div className="form-group has-search position-relative">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        placeholder="Name..."
                                                                                    />
                                                                                    <span className="fa fa-search form-control-feedback" />
                                                                                </div>
                                                                                <div className="fsize12 text-gray">
                                                                                    <a
                                                                                        href="#"
                                                                                        className="float-right text-right"
                                                                                        data-selenium-id="add-new-referrer"
                                                                                    >
                                                                                        Add a new referrer
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label
                                                                            htmlFor="Start"
                                                                            className="col-sm-4 col-12 col-form-label pr0"
                                                                        >
                                                                            Start:
                                                                        </label>
                                                                        <div className="col-sm-8 col-12">
                                                                            <div
                                                                                className="date bs-datepicker input-group"
                                                                                style={{ width: "66%" }}
                                                                            >
                                                                                <input
                                                                                    className="form-control datetimepicker flatpickr-input active"
                                                                                    id="datepicker"
                                                                                    type="text"
                                                                                    placeholder="dd/mm/yyyy"
                                                                                    data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                                                                                    readOnly="readonly"
                                                                                />
                                                                                <div className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text input-group-addon-gray">
                                                                                        <i className="far fa-calendar-alt" />
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <span
                                                                                className="field-validation-valid"
                                                                                data-valmsg-for="Start"
                                                                                data-valmsg-replace="true"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label
                                                                            htmlFor="End"
                                                                            className="col-sm-4 col-12 col-form-label pr0"
                                                                        >
                                                                            End:
                                                                        </label>
                                                                        <div className="col-sm-8 col-12">
                                                                            <div
                                                                                className="date bs-datepicker input-group "
                                                                                style={{ width: "66%" }}
                                                                            >
                                                                                <input
                                                                                    className="form-control datetimepicker flatpickr-input active"
                                                                                    id="datepicker"
                                                                                    type="text"
                                                                                    placeholder="dd/mm/yyyy"
                                                                                    data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                                                                                    readOnly="readonly"
                                                                                />
                                                                                <div className="input-group-append input-group-addon">
                                                                                    <span className="input-group-text input-group-addon-gray">
                                                                                        <i className="far fa-calendar-alt" />
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-2" style={{ width: "66%" }}>
                                                                                <select
                                                                                    className="form-select"
                                                                                    aria-label="Default select example"
                                                                                    style={{ fontSize: 12, color: "#707f94" }}
                                                                                >
                                                                                    <option value="">Select period</option>
                                                                                    <option value={0}>Indefinite</option>
                                                                                    <option value={1}>1 Month</option>
                                                                                    <option value={2}>2 Months</option>
                                                                                    <option value={3}>3 Months</option>
                                                                                    <option value={4}>4 Months</option>
                                                                                    <option value={5}>5 Months</option>
                                                                                    <option value={6}>6 Months</option>
                                                                                    <option value={7}>7 Months</option>
                                                                                    <option value={8}>8 Months</option>
                                                                                    <option value={9}>9 Months</option>
                                                                                    <option value={10}>10 Months</option>
                                                                                    <option value={11}>11 Months</option>
                                                                                    <option value={12}>12 Months</option>
                                                                                    <option value={18}>18 Months</option>
                                                                                    <option value={24}>24 Months</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group row mt-4">
                                                                        <label
                                                                            htmlFor="Is Default"
                                                                            className="col-sm-4 col-12 col-form-label pr0"
                                                                        >
                                                                            Is Default:
                                                                        </label>
                                                                        <div className="col-sm-8 col-12">
                                                                            <div className="mt5">
                                                                                <div className="form-check form-switch d-flex align-items-center">
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
                                                                    </div>
                                                                    <div className="form-group row mt-2">
                                                                        <label
                                                                            htmlFor="Show On Invoice Print"
                                                                            className="col-sm-4 col-12 col-form-label pr0"
                                                                        >
                                                                            Show On Invoice Print:
                                                                        </label>
                                                                        <div className="col-sm-8 col-12">
                                                                            <div className="mt5">
                                                                                <div className="form-check form-switch d-flex align-items-center">
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
                                                                    </div>
                                                                    <div className="form-group row">
                                                                        <label
                                                                            htmlFor="Notes"
                                                                            className="col-sm-4 col-12 col-form-label pr0"
                                                                        >
                                                                            Notes:
                                                                        </label>
                                                                        <div className="col-sm-6 col-12">
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
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group text-right row mt20 mb10 mt-4">
                                                                        <div className="mt-4">
                                                                            <div className="d-flex">
                                                                                <div className="ml-auto">
                                                                                    <button
                                                                                        type="submit"
                                                                                        id="action-save-contact"
                                                                                        className="btn btn-success shadow w90 mr5 mb5 action-form"
                                                                                    >
                                                                                        <svg
                                                                                            className="svg-inline--fa fa-check mr5"
                                                                                            aria-hidden="true"
                                                                                            focusable="false"
                                                                                            data-prefix="fas"
                                                                                            data-icon="check"
                                                                                            role="img"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            viewBox="0 0 448 512"
                                                                                            data-fa-i2svg=""
                                                                                        >
                                                                                            <path
                                                                                                fill="currentColor"
                                                                                                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                                                                            ></path>
                                                                                        </svg>
                                                                                        {/* <i class="fa fa-margin fa-check mr5"></i> Font Awesome fontawesome.com */}
                                                                                        Save
                                                                                    </button>
                                                                                    <a
                                                                                        id="action-cancel-contact"
                                                                                        href="#"
                                                                                        className="btn btn-gray shadow w90 mr5 mb5"
                                                                                    >
                                                                                        <svg
                                                                                            className="svg-inline--fa fa-xmark mr5"
                                                                                            aria-hidden="true"
                                                                                            focusable="false"
                                                                                            data-prefix="fas"
                                                                                            data-icon="xmark"
                                                                                            role="img"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            viewBox="0 0 384 512"
                                                                                            data-fa-i2svg=""
                                                                                        >
                                                                                            <path
                                                                                                fill="currentColor"
                                                                                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                                                                            ></path>
                                                                                        </svg>
                                                                                        {/* <i class="fa fa-margin fa-times mr5"></i> Font Awesome fontawesome.com */}
                                                                                        Cancel
                                                                                    </a>
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
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}
export default ReferralReceived;