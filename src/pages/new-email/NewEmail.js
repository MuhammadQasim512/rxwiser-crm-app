import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const New_email = () => {


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
                            <div className="form-section-titles mt20">New Email</div>
                            <hr />
                            <div style={{ padding: 20, marginTop: "-4%" }}>
                                <div className="panel-body">
                                    <div className="panel-group">
                                        <div id="tsx-client-message">
                                            <form>
                                                <div className="col-12">
                                                    <div className="row mt-4">
                                                        <div className="pl-0 pr-0 col-md-5 offset-md-1 col-12 pr-md-2">
                                                            <div>
                                                                <div className="form-group row mb15">
                                                                    <label className="col-12 col-form-label pr0 pt0">
                                                                        To
                                                                    </label>
                                                                    <div className="col-12 mt10">
                                                                        <select
                                                                            className="form-select"
                                                                            aria-label="Default select example"
                                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                                        >
                                                                            Select Recipient...
                                                                            <option value="">Faiz Khan</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row mb15">
                                                                <label className="col-12 col-form-label pr0 pt0">
                                                                    Cc
                                                                </label>
                                                                <div className="col-12 mt10">
                                                                    <select
                                                                        className="form-select"
                                                                        aria-label="Default select example"
                                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                                    >
                                                                        <option value="" />
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group row mb15">
                                                                <label className="col-12 col-form-label pr0 pt0">
                                                                    Related Appointment
                                                                </label>
                                                                <div className="col-12 mt10">
                                                                    <select
                                                                        className="form-select"
                                                                        aria-label="Default select example"
                                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                                    >
                                                                        <option value="">
                                                                            Please Select an Appointment...
                                                                        </option>
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
                                                                        <option value={1204894}>
                                                                            All Future Appointments
                                                                        </option>
                                                                        <option value={1204895}>
                                                                            All Past Appointments
                                                                        </option>
                                                                        <option value={1204906}>
                                                                            (!) Appointment Created by User Notification To
                                                                            Practitioner
                                                                        </option>
                                                                        <option value={1204890}>
                                                                            (!) Appointment Reminder (Email)
                                                                        </option>
                                                                        <option value={1204913}>
                                                                            Automation Unpaid Invoice Email
                                                                        </option>
                                                                        <option value={1204896}>
                                                                            (!) Client Portal - Appt Cancelled Notification
                                                                            to Client
                                                                        </option>
                                                                        <option value={1204897}>
                                                                            (!) Client Portal - Appt Cancelled Notification
                                                                            to User
                                                                        </option>
                                                                        <option value={1204899}>
                                                                            (!) Client Portal - Appt Created Notification to
                                                                            Client
                                                                        </option>
                                                                        <option value={1204898}>
                                                                            (!) Client Portal - Appt Created Notification to
                                                                            User
                                                                        </option>
                                                                        <option value={1204900}>
                                                                            Client Portal - New Registration Notification to
                                                                            Client
                                                                        </option>
                                                                        <option value={1204901}>
                                                                            Client Portal - New Registration Notification to
                                                                            User
                                                                        </option>
                                                                        <option value={1204914}>
                                                                            Client Portal - Registration for Existing
                                                                            Clients
                                                                        </option>
                                                                        <option value={1204912}>Form Email</option>
                                                                        <option value={1204893}>
                                                                            Invoice &amp; Statement Email
                                                                        </option>
                                                                        <option value={1204911}>Note Email</option>
                                                                        <option value={1204889}>Receipt Email</option>
                                                                        <option value={1204908}>Statement Email</option>
                                                                    </select>
                                                                    <span
                                                                        className="field-validation-valid"
                                                                        data-valmsg-for="TemplateId"
                                                                        data-valmsg-replace="true"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row mb15">
                                                                <label className="col-12 col-form-label pr0 pt0">
                                                                    Subject
                                                                </label>
                                                                <div className="col-12 mt10">
                                                                    <input
                                                                        type="text"
                                                                        className="valid form-control "
                                                                        name="Subject"
                                                                        defaultValue=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row mt-3">
                                                                <label className="col-sm-9 col-12 col-form-label pr0">
                                                                    Save to the Correspondence Record
                                                                </label>
                                                                <div className="text-left col-sm-2 col-12">
                                                                    <div className="mt5">
                                                                        <div className="form-check form-switch d-flex align-items-center">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                role="switch"
                                                                                id="switchClient"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-5 col-12 pl-0 pr-0 pl-md-5">
                                                            <div className="form-group row mb15">
                                                                <label className="col-12 col-form-label pr0">
                                                                    From Email
                                                                </label>
                                                                <div className="col-12 mt5">
                                                                    <input
                                                                        type="text"
                                                                        className="valid form-control "
                                                                        name="FromAddress"
                                                                        id="FromAddress"
                                                                        data-val="true"
                                                                        data-val-required="From Email is required"
                                                                        defaultValue=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row mb15">
                                                                <label className="col-12 col-form-label pr0">
                                                                    From Name
                                                                </label>
                                                                <div className="col-12 mt5">
                                                                    <input
                                                                        type="text"
                                                                        className="valid form-control "
                                                                        name="FromName"
                                                                        id="FromName"
                                                                        defaultValue=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="pl-0 pr-0 col-md-12 col-xl-10 offset-xl-1">
                                                            <div className="row mt-4">
                                                                <div className="col-auto text-left pr-0" />
                                                                <div className="actionButtons col-auto ml-auto text-right pl-0 mt-3 mt-md-0">
                                                                    <button
                                                                        type="button"
                                                                        id="save-message"
                                                                        data-selenium-id="save-message-database"
                                                                        className="btn btn-sm btn-green shadow"
                                                                    >
                                                                        <span>Save as Draft</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        id="send-message"
                                                                        className="btn btn-sm btn-success shadow ml-1"
                                                                        data-toggle="tooltip"
                                                                        data-original-title=""
                                                                    >
                                                                        <span>Save and Send</span>
                                                                    </button>
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
export default New_email;