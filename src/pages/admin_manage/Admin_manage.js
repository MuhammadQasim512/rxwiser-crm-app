import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"


const Admin_manage = () => {
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
                                    to="insurance.html" className={({ isActive }) =>
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
                                    to="notes.html"
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
                                    to="/admin_notes"
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
                            <form action="/Profile/5/Admin" method="post">
                                <div className="panel-body">
                                    <h3 className="profile-det">Admin Settings</h3>
                                    <hr />
                                    <div className="col-lg-12">
                                        <div className="form-section-title mb10 mt10">Roles</div>
                                        <div className="row">
                                            <div className="col-md-3 col-6 mt10">
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
                                            <div className="col-md-3 col-6 mt10">
                                                <div className="form-group">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switchShared"
                                                        />
                                                        <label
                                                            className="d-inline ml10 form-control-label form-check-label"
                                                            htmlFor="switchShared"
                                                        >
                                                            <span style={{ fontSize: 14 }}>Referrer</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6 mt10">
                                                <div className="form-group">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switchShared"
                                                        />
                                                        <label
                                                            className="d-inline ml10 form-control-label form-check-label"
                                                            htmlFor="switchShared"
                                                        >
                                                            <span style={{ fontSize: 14 }}>Contact</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-6 mt10">
                                                <div className="form-group">
                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switchShared"
                                                        />
                                                        <label
                                                            className="d-inline ml10 form-control-label form-check-label"
                                                            htmlFor="switchShared"
                                                        >
                                                            <span style={{ fontSize: 14 }}>Third Party</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr
                                            style={{
                                                borderBottom: "hsl(210, 35%, 87.1568627451%) 2px solid",
                                                fontSize: 11
                                            }}
                                        />
                                        <div className="row  mb10">
                                            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                                <div className="form-group row mb20">
                                                    <label
                                                        className="form-control-label col-12 col-sm-4"
                                                        htmlFor="PreferredSupplierID"
                                                    >
                                                        Primary Practitioner
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            <option value="">Please select...</option>
                                                            <option selected="selected" value={181607}>
                                                                Muhammad
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label className="form-control-label col-12 col-sm-4">
                                                        <span>Assigned Practitioners</span>
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            Users with Access
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label
                                                        className="form-control-label col-12 col-sm-4"
                                                        htmlFor="NewAppointmentMessage"
                                                    >
                                                        <span
                                                            className="has-tooltip"
                                                            data-toggle="tooltip"
                                                            data-original-title="Automatically shown when new appointments are created."
                                                        >
                                                            Alert Notes
                                                        </span>
                                                        <i className="fa fa-exclamation-triangle text-highlight mt-1" />
                                                    </label>
                                                    <div className="col-11 col-sm-7">
                                                        <textarea
                                                            className="form-control"
                                                            data-val="true"
                                                            data-val-maxlength="The field Client Alert Notes must be a string or array type with a maximum length of '500'."
                                                            data-val-maxlength-max={500}
                                                            id="NewAppointmentMessage"
                                                            maxLength={500}
                                                            name="NewAppointmentMessage"
                                                            rows={3}
                                                            defaultValue={"                                "}
                                                        />
                                                        <input
                                                            data-val="true"
                                                            data-val-required="The AddAlert field is required."
                                                            id="AddAlert"
                                                            name="AddAlert"
                                                            type="hidden"
                                                            defaultValue="False"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label
                                                        className="form-control-label col-12 col-sm-4"
                                                        htmlFor="ClientNewAppointmentStatus"
                                                    >
                                                        New Appointments
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            <option value={0}>New Appointments Blocked</option>
                                                            <option selected="selected" value={1}>
                                                                New Appointments Allowed
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label
                                                        className="form-control-label col-12 col-sm-4"
                                                        htmlFor="AppointmentFlagId"
                                                    >
                                                        Default Appointment Flag
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            <option value="">Select a Flag</option>
                                                            <option value={232870}>Final Appointment</option>
                                                            <option value={232871}>Initial Appointment</option>
                                                        </select>
                                                        <input
                                                            data-val="true"
                                                            data-val-required="The ChangeDefaultAppointmentFlag field is required."
                                                            id="ChangeDefaultAppointmentFlag"
                                                            name="ChangeDefaultAppointmentFlag"
                                                            type="hidden"
                                                            defaultValue="False"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label
                                                        htmlFor="PortalPasswordReset"
                                                        className="form-control-label col-12 col-sm-4"
                                                    >
                                                        <span
                                                            className="has-tooltip"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            data-original-title='Click "send; to email the client this link so they can either set up or reset their portal login information'
                                                        >
                                                            Portal Password Reset
                                                        </span>
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <button
                                                            type="button"
                                                            id="showPortalPasswordModal"
                                                            className="btn btn-primary"
                                                            data-toggle="modal"
                                                            data-target="#portalPasswordResetModal"
                                                        >
                                                            Send Password Reset Link
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label
                                                        htmlFor="WarnSupplier"
                                                        className="form-control-label col-12 col-sm-4"
                                                    >
                                                        <span
                                                            className="has-tooltip"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            data-original-title="Displays a warning icon on diary."
                                                        >
                                                            Appointment Warnings
                                                        </span>
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <div className="form-group">
                                                            <div className="form-check form-switch">
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
                                                <div className="form-group row mb20 mt-4">
                                                    <label
                                                        className="form-control-label col-12 col-sm-4"
                                                        htmlFor="XeroContactId"
                                                    >
                                                        Xero Contact Id
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <input
                                                            className="form-control"
                                                            id="XeroContactId"
                                                            name="XeroContactId"
                                                            type="text"
                                                            defaultValue=""
                                                        />
                                                        <span
                                                            className="field-validation-valid"
                                                            data-valmsg-for="XeroContactId"
                                                            data-valmsg-replace="true"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row mb20 mt-4">
                                                    <div>
                                                        <h3 className="section-heading col-12">
                                                            <span
                                                                className="has-tooltip"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                data-original-title="If users do not have the access 'view all users notes' to see notes written by other users, use this setting to grant a user access to view another user's notes in this client profile."
                                                            >
                                                                Override User Access to Notes
                                                            </span>
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div
                                                    id="clientNoteAccessOverrideTemplate"
                                                    className="client-note-access-override mb20"
                                                    style={{ display: "none" }}
                                                    data-id={-1}
                                                >
                                                    <div className="form-group row">
                                                        <div className="col-11">
                                                            <label className="form-control-label">
                                                                Notes written by this user:
                                                            </label>
                                                            <select
                                                                className="form-control"
                                                                id="clientNoteAccessOverride_NoteAuthorSupplierGroupUserId"
                                                                name="clientNoteAccessOverride.NoteAuthorSupplierGroupUserId"
                                                            >
                                                                <option value="" />
                                                                <option value={135566}>Muhammad Waqas</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-11">
                                                            <label className="form-control-label">
                                                                Can be viewed by this user:
                                                            </label>
                                                            <div className="d-flex align-items-center">
                                                                <select
                                                                    className="form-control"
                                                                    id="clientNoteAccessOverride_NoteViewerSupplierGroupUserId"
                                                                    name="clientNoteAccessOverride.NoteViewerSupplierGroupUserId"
                                                                >
                                                                    <option value="" />
                                                                </select>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-link delete-client-note-access-override"
                                                                    title="Delete"
                                                                >
                                                                    <i
                                                                        className="fa fa-trash"
                                                                        style={{ color: "gray" }}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20">
                                                    <div className="col">
                                                        <a href="javascript:void(0);" id="addNewRecordLink">
                                                            + Add Access Override
                                                        </a>
                                                    </div>
                                                </div>
                                                <input
                                                    id="ClientNoteAccessOverridesJson"
                                                    name="ClientNoteAccessOverridesJson"
                                                    type="hidden"
                                                    defaultValue="[]"
                                                />
                                            </div>
                                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                                <div className="form-group row mb20">
                                                    <label
                                                        className="form-control-label col-12 col-lg-4"
                                                        htmlFor="IsMarketingOptIn"
                                                    >
                                                        <span
                                                            className="has-tooltip"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            data-original-title="Use this field to filter bulk send lists for clients that have opted to receive marketing communication."
                                                        >
                                                            Receives Marketing Communication
                                                        </span>
                                                    </label>
                                                    <div className="col-sm-4 col-8">
                                                        <div className="pt5">
                                                            <div className="form-group">
                                                                <div className="form-check form-switch">
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
                                                <div className="form-group row mb20 mt-4">
                                                    <label
                                                        className="form-control-label col-12 col-sm-4"
                                                        htmlFor="ReceivesSmsStatus"
                                                    >
                                                        <span
                                                            className="has-tooltip"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            data-original-title="This allows your client to receive SMS from your account."
                                                        >
                                                            Receives SMS
                                                        </span>
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            <option selected="selected" value={0}>
                                                                Subscribed
                                                            </option>
                                                            <option value={1}>Unsubscribed</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label
                                                        className="form-control-label col-12 col-sm-4"
                                                        htmlFor="PersonalDataConsent"
                                                    >
                                                        Personal Data
                                                        <span
                                                            className="has-tooltip"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            data-original-title="Record if a client has provided consent for you to collect, store and process their personal data. (May apply where a client lives in the EU and are subject to the GDPR.)"
                                                        >
                                                            Consent
                                                        </span>
                                                    </label>
                                                    <div className="col-12 col-sm-7">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            <option selected="selected" value={0}>
                                                                Not Requested
                                                            </option>
                                                            <option value={1}>Granted</option>
                                                            <option value={2}>Withdrawn</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="mt20">
                                                    <div className="well well-form">
                                                        <div id="render-profile-admin-buttons">
                                                            <div className="d-grid gap-2">
                                                                <button className="btn btn-primary" type="button">
                                                                    <i className="fa fa-margin fa-exchange mr5" />
                                                                    <span style={{ marginLeft: 5 }}>
                                                                        Merge with another profile
                                                                    </span>
                                                                </button>
                                                                <button className="btn btn-warning" type="button">
                                                                    <i className="fa fa-margin fa-archive mr5" />
                                                                    <span style={{ marginLeft: 5 }}>ARCHEIVE</span>
                                                                </button>
                                                                <button className="btn btn-danger" type="button">
                                                                    <i className="fa fa-margin fa-trash mr5" />
                                                                    <span style={{ marginLeft: 5 }}>DELETE</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <button
                                        type="submit"
                                        className="float-right btn btn-green save-client-action"
                                        id="btn-save-client-admin-settings"
                                    >
                                        <i className="fa fa-check fa-margin" />
                                        SAVE CHANGES
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Admin_manage;