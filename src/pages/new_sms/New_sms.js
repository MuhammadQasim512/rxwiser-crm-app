import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"

const New_sms = () => {


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
                                    to="/notes"
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
                                    to="/correspondence"
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
                                    to="/new_email"
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
                            <div className="form-section-titles mt20">New SMS</div>
                            <hr />
                            <div style={{ padding: 20, marginTop: "-6%" }}>
                                <div className="panel-body bg-transparent msg-content">
                                    <div className="panel-group">
                                        <div id="tsx-client-message">
                                            <form>
                                                <div className="col-12">
                                                    <div className="row mt-4">
                                                        <div className="pl-0 pr-0 col-12 col-lg-6 offset-lg-3">
                                                            <div>
                                                                <div className="form-group row mb15 mt-2">
                                                                    <label className="col-12 col-form-label pr0 pt0">
                                                                        To
                                                                    </label>
                                                                    <div className="col-12 mt10">
                                                                        {" "}
                                                                        <select
                                                                            className="form-select"
                                                                            aria-label="Default select example"
                                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                                        >
                                                                            <option value="">Select Recipient...</option>
                                                                            <option value="">syed shah - 2340987651</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row mb15">
                                                                <label className="col-12 col-form-label pr0 pt0">
                                                                    Related Appointment
                                                                </label>
                                                                <div className="col-12 mt10">
                                                                    {" "}
                                                                    <select
                                                                        className="form-select"
                                                                        aria-label="Default select example"
                                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                                    >
                                                                        Please Select an Appointment...
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row mb15">
                                                                <label className="col-12 col-form-label pr0 pt0">
                                                                    Template
                                                                </label>
                                                                <div className="col-12 mt10">
                                                                    <select
                                                                        className="form-select"
                                                                        aria-label="Default select example"
                                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                                    >
                                                                        <option value={-1}>No templates</option>
                                                                        <option value="">
                                                                            (!) Appointment Created by User Notification To
                                                                            Practitioner (SMS)
                                                                        </option>
                                                                        <option value="">
                                                                            (!) Appointment Follow Up
                                                                        </option>
                                                                        <option value="">
                                                                            (!) Appointment Reminder (SMS)
                                                                        </option>
                                                                        <option value="">
                                                                            SMS Happy Birthday Template
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row mt-2">
                                                                <label className="col-sm-9 col-12 col-form-label pr0">
                                                                    Save to the{" "}
                                                                    <span
                                                                        className="has-tooltip"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Keep a record of this message beyond 1 year."
                                                                    >
                                                                        Permanent
                                                                    </span>
                                                                    Correspondence Record
                                                                </label>
                                                                <div className="text-left col-sm-2 col-12">
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
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="pl-0 pr-0 col-lg-6 offset-lg-3">
                                                            <div className="">
                                                                <textarea
                                                                    className="form-control"
                                                                    rows={10}
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                            <div className="row mt-4">
                                                                <div className="col-auto text-left pr-0">
                                                                    <div>
                                                                        <a
                                                                            id="estimated-sms-number"
                                                                            className="text-primary fsize12 semibold pr5"
                                                                            target="_blank"
                                                                            href='#"'
                                                                            data-original-title="This is an estimate of the number of standard text messages required to send this SMS. Please note that if emojis are used, this may be more."
                                                                            data-placement="top"
                                                                        >
                                                                            Estimated number of messages:
                                                                        </a>
                                                                        <span
                                                                            className="badge badge-secondary"
                                                                            title="Number of standard text messages required for this message."
                                                                        >
                                                                            0
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <div className="d-flex">
                                                                        <div className="ml-auto">
                                                                            <button
                                                                                type="submit"
                                                                                id="action-save-contact"
                                                                                className="btn btn-success shadow w50 mr5 mb5 action-form"
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
                                                                                Save as DRAFT
                                                                            </button>
                                                                            <button
                                                                                type="submit"
                                                                                id="action-save-contact"
                                                                                className="btn btn-success shadow w50 mr5 mb5 action-form"
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
                                                                                SAVE AND SEND
                                                                            </button>
                                                                        </div>
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
            </div>

        </>
    )
}
export default New_sms;