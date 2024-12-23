import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"

export default function Notes() {
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
                <div className="dashboard-nav">
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
                            <div className="form-section-titles mt20">Notes</div>
                            <hr />
                            <div className="panel-body">
                                <div className="row mb15">
                                    <div id="client-customForms-toolbar" className="col-12">
                                        <div className="row align-items-center justify-content-between g-2 ">
                                            <div className="col col-auto">
                                                <div className="d-flex align-items-center">
                                                    <div className="form-group has-search position-relative">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Name..."
                                                        />
                                                        <svg
                                                            className="svg-inline--fa fa-magnifying-glass form-control-feedback"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="magnifying-glass"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                                            />
                                                        </svg>
                                                        {/* <span class="fa fa-search form-control-feedback"></span> Font Awesome fontawesome.com */}
                                                    </div>
                                                    <div className="ml-4" style={{ marginLeft: 12 }}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#topSlideOutModal"
                                                        >
                                                            <svg
                                                                className="svg-inline--fa fa-plus mr5"
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fas"
                                                                data-icon="plus"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 448 512"
                                                                data-fa-i2svg=""
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                                                                />
                                                            </svg>
                                                             {/* <i class="fa fa-add mr5"></i> Font Awesome fontawesome.com  */}
                                                            <span>ADD REFERRAL</span>
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="form-check form-switch"
                                                        style={{ marginLeft: 12 }}
                                                    >
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
                                            <div className="col-auto">
                                                {/* <div class="d-flex align-items-center">
                                              <div class="form-group">
                                                  <div class="form-check form-switch">
                                                      <input class="form-check-input" type="checkbox" role="switch"
                                                          id="switchClient" checked>
                                                      <label class="d-inline ml10 form-control-label form-check-label"
                                                          for="switchClient">
                                                          <span style="font-size: 14px;">Client</span>
                                                      </label>
                                                  </div>
                                              </div>
                                          </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-6">
                                    <div
                                        id="client-customForm-edit-ui-wrapper"
                                        className="col-12 order-1"
                                    >
                                        <div
                                            id="customForm-container-editor"
                                            className="customForm-container-editor"
                                        >
                                            <div id="customForm-editor-scroll-wrapper">
                                                <div id="client-customForm-editor">
                                                    <div className="customForm-container mt-0">
                                                        <div className="customForm-title-bar">
                                                            <span className="customForm-title">Edit</span>
                                                            <button className="close">
                                                                <i className="fa fa-times" />
                                                            </button>
                                                            <span className="badge badge-info customForm-status text-uppercase fsize11 float-right mr-3">
                                                                Edit Draft
                                                            </span>
                                                            <div className="customForm-tools float-right" />
                                                        </div>
                                                      
                                                            <form style={{ padding: '16px ' }}>
                                                                <div className="customForm-edit-form">
                                                                    <div className="form-group row">
                                                                        <label className="col-12 col-lg-3 col-form-label">
                                                                            Date
                                                                        </label>
                                                                        <div className="col-12 col-lg-5">
                                                                            <div className="">
                                                                                <div className="date bs-datepicker input-group">
                                                                                    <input type="date" id="messageDate" className="form-control" />
                                                                                    <div className="input-group-append input-group-addon">
                                                                                        {/* <span className="input-group-text input-group-addon-gray">
                                                                                            <i className="far fa-calendar-alt" />
                                                                                        </span> */}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                       
                                                        <form style={{ padding: "16px" }}>
                                                            <div className="customForm-template-selector">
                                                                <div className="form-group row mb-3">
                                                                    <label className="col-12 col-lg-3 col-form-label">
                                                                        Template
                                                                    </label>
                                                                    <div className="col-12 col-lg-5">
                                                                        <select
                                                                            className="form-select"
                                                                            aria-label="Default select example"
                                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                                        >
                                                                            <option selected="selected" value="">
                                                                                Prime Care Movers
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-12 col-lg-4 pl-lg-0 choose-date-link">
                                                                        <a
                                                                            href="#"
                                                                            className="text-primary"
                                                                            style={{ fontSize: 13, fontWeight: 700 }}
                                                                        >
                                                                            Manage templates
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label className="col-12 col-lg-3 col-form-label">
                                                                        Name
                                                                    </label>
                                                                    <div className="col-12 col-lg-8">
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            maxLength={100}
                                                                            id="customForm-name"
                                                                            defaultValue="Physiotherapy - Detailed Initial Assessment (Example)"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <div className="compo mode-DataEntry">
                                                            <form style={{ padding: "16px" }}>
                                                                <div className="com-section-list">
                                                                    <div className="com-section">
                                                                        <div className="com-section-header clearfix">
                                                                            <div className="com-section-title">
                                                                                Physiotherapy Initial Assessment
                                                                            </div>
                                                                        </div>
                                                                        <div className="com-field-list mt-3">
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Consent to Assessment / Treatment?
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        className="form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text mt-2">
                                                                                <div className="com-field-title">
                                                                                    Consent to perform Acupuncture?
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        className="form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text mt-2">
                                                                                <div className="com-field-title">
                                                                                    Consent to Tape (leuko, KT)?
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        className="form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea mt-2">
                                                                                <div className="com-field-title">
                                                                                    Presenting Complaint/s
                                                                                </div>
                                                                                <div id="toolbar">
                                                                                    <button className="ql-bold" />
                                                                                    <button className="ql-italic" />
                                                                                    <button className="ql-underline" />
                                                                                    <button className="ql-align" value="" />
                                                                                    <button
                                                                                        className="ql-align"
                                                                                        value="center"
                                                                                    />
                                                                                    <button
                                                                                        className="ql-align"
                                                                                        value="right"
                                                                                    />
                                                                                </div>
                                                                                {/* Text editor */}
                                                                                <div id="editor-container" />
                                                                            </div>
                                                                            <div className="com-field field__drawing ">
                                                                                <div className="com-field-title">
                                                                                    Body Chart
                                                                                </div>
                                                                                <div className="drawings-main">
                                                                                    <div
                                                                                        className=""
                                                                                        style={{ position: "relative" }}
                                                                                    >
                                                                                        <div>
                                                                                            <div
                                                                                                className="konvajs-content"
                                                                                                role="presentation"
                                                                                                style={{
                                                                                                    position: "relative",
                                                                                                    userSelect: "none",
                                                                                                    width: 1,
                                                                                                    height: 1
                                                                                                }}
                                                                                            >
                                                                                                <canvas
                                                                                                    width={1}
                                                                                                    height={1}
                                                                                                    style={{
                                                                                                        padding: 0,
                                                                                                        margin: 0,
                                                                                                        border: 0,
                                                                                                        background: "transparent",
                                                                                                        position: "absolute",
                                                                                                        top: 0,
                                                                                                        left: 0,
                                                                                                        width: 1,
                                                                                                        height: 1,
                                                                                                        display: "block"
                                                                                                    }}
                                                                                                />
                                                                                                <canvas
                                                                                                    width={1}
                                                                                                    height={1}
                                                                                                    style={{
                                                                                                        padding: 0,
                                                                                                        margin: 0,
                                                                                                        border: 0,
                                                                                                        background: "transparent",
                                                                                                        position: "absolute",
                                                                                                        top: 0,
                                                                                                        left: 0,
                                                                                                        width: 1,
                                                                                                        height: 1,
                                                                                                        display: "block"
                                                                                                    }}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="com-section">
                                                                        <div className="com-section-header clearfix">
                                                                            <div className="com-section-title">
                                                                                Red Flags
                                                                            </div>
                                                                        </div>
                                                                        <div className="com-field-list">
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Dysphagia
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[0].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Dysarthria
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[1].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Dizziness
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[2].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Drop Attacks
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[3].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Double Vision
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[4].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Bilateral arm/leg pain &amp; weakness
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[5].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Bowel/bladder dysfunction
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[6].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Saddle anaesthesia
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[7].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Major Trauma
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[8].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Night Pain
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[9].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Unexplained weight loss
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[1].fields[10].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__select ">
                                                                                <div className="com-field-title">
                                                                                    VAS Pain Scale 0-10
                                                                                </div>
                                                                                <div>
                                                                                    <div className="com-select-field-items">
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_0"
                                                                                                        defaultValue="No Pain 0"
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_0" />
                                                                                                </div>
                                                                                                No Pain 0
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_1"
                                                                                                        defaultValue={1}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_1" />
                                                                                                </div>
                                                                                                1
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_2"
                                                                                                        defaultValue={2}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_2" />
                                                                                                </div>
                                                                                                2
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_3"
                                                                                                        defaultValue={3}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_3" />
                                                                                                </div>
                                                                                                3
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_4"
                                                                                                        defaultValue={4}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_4" />
                                                                                                </div>
                                                                                                4
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_5"
                                                                                                        defaultValue={5}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_5" />
                                                                                                </div>
                                                                                                5
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_6"
                                                                                                        defaultValue={6}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_6" />
                                                                                                </div>
                                                                                                6
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_7"
                                                                                                        defaultValue={7}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_7" />
                                                                                                </div>
                                                                                                7
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_8"
                                                                                                        defaultValue={8}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_8" />
                                                                                                </div>
                                                                                                8
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_9"
                                                                                                        defaultValue={9}
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_9" />
                                                                                                </div>
                                                                                                9
                                                                                            </label>
                                                                                        </div>
                                                                                        <div className="answer-item ">
                                                                                            <label className="d-inline-block">
                                                                                                <div className="custom-radio mr-2 d-inline-block switch-sm">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        name="sections[1].fields[11].options"
                                                                                                        id="sec_1_11_10"
                                                                                                        defaultValue="10 Worst Imaginable Pain"
                                                                                                    />
                                                                                                    <label htmlFor="sec_1_11_10" />
                                                                                                </div>
                                                                                                10 Worst Imaginable Pain
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Aggravating Factors
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-2"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-2"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-2"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-2"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-2"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-2"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-2"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-2"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-2"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-2"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-2"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-2"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-2"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-2"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-2"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-2"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-2"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Alleviating Factors
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-3"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-3"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-3"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-3"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-3"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-3"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-3"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-3"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-3"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-3"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-3"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-3"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-3"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-3"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-3"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-3"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-3"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="com-section">
                                                                        <div className="com-section-header clearfix">
                                                                            <div className="com-section-title">
                                                                                Medical History
                                                                            </div>
                                                                        </div>
                                                                        <div className="com-field-list">
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Diabetes
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[0].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">Asthma</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[1].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">Cancer</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[2].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">Smoking</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[3].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">CAD</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[4].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">HTN</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[5].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Steroids
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[6].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Pacemaker
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[7].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Implants
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[8].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Surgeries
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[9].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Fractures
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[10].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">OP</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[11].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    Arthritis
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[2].fields[12].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Observations
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-4"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-4"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-4"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-4"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-4"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-4"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-4"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-4"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-4"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-4"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-4"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-4"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-4"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-4"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-4"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-4"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-4"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div className="fr-wrapper" dir="auto">
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>Gait</div>
                                                                                                <div>Other</div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">ROM</div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-5"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-5"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-5"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-5"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-5"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-5"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-5"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-5"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-5"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-5"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-5"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-5"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-5"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-5"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-5"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-5"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-5"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div className="fr-wrapper" dir="auto">
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>AROM</div>
                                                                                                <div>PROM</div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Functional Tests
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-6"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-6"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-6"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-6"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-6"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-6"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-6"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-6"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-6"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-6"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-6"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-6"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-6"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-6"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-6"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-6"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-6"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div className="fr-wrapper" dir="auto">
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>Squat</div>
                                                                                                <div>Single Leg Squat</div>
                                                                                                <div>Single Leg Balance</div>
                                                                                                <div>Core Activation</div>
                                                                                                <div>Other</div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    PAMs/PAIVMs
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-7"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-7"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-7"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-7"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-7"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-7"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-7"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-7"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-7"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-7"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-7"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-7"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-7"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-7"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-7"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-7"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-7"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div className="fr-wrapper" dir="auto">
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>Cervical Spine</div>
                                                                                                <div>Thoracic Spine</div>
                                                                                                <div>Lumbar Spine</div>
                                                                                                <div>Peripheral Joint</div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">PIVMs</div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-8"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-8"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-8"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-8"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-8"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-8"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-8"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-8"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-8"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-8"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-8"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-8"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-8"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-8"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-8"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-8"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-8"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="com-section">
                                                                        <div className="com-section-header clearfix">
                                                                            <div className="com-section-title">
                                                                                Myotomes/Dermatomes
                                                                            </div>
                                                                        </div>
                                                                        <div className="com-field-list">
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">C1/2</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[0].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">C3</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[1].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">C4</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[2].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">C5</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[3].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">C6</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[4].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">C7</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[5].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">C8</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[6].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">T1</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[7].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    C2-T1 clear
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[8].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">L2</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[9].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">L3</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[10].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">L4</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[11].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">L5</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[12].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">S1</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[13].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">S2</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[14].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">
                                                                                    L2-S2 clear
                                                                                </div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[15].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Special Tests
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-9"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-9"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-9"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-9"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-9"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-9"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-9"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-9"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-9"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-9"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-9"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-9"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-9"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-9"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-9"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-9"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-9"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div className="fr-wrapper" dir="auto">
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>Spine</div>
                                                                                                <div>Upper Extremity</div>
                                                                                                <div>Lower Extremity</div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Palpation
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-10"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-10"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-10"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-10"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-10"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-10"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-10"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-10"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-10"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-10"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-10"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-10"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-10"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-10"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-10"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-10"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-10"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Treatment
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-11"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-11"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-11"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-11"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-11"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-11"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-11"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-11"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-11"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-11"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-11"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-11"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-11"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-11"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-11"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-11"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-11"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Education
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-12"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-12"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-12"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-12"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-12"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-12"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-12"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-12"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-12"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-12"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-12"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-12"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-12"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-12"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-12"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-12"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-12"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Home Exercise Program
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-13"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-13"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-13"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-13"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-13"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-13"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-13"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-13"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-13"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-13"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-13"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-13"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-13"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-13"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-13"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-13"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-13"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">
                                                                                    Analysis
                                                                                </div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-14"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-14"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-14"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-14"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-14"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-14"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-14"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-14"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-14"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-14"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-14"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-14"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-14"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-14"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-14"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-14"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-14"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__textarea ">
                                                                                <div className="com-field-title">Plan</div>
                                                                                <div>
                                                                                    <div
                                                                                        className="fr-box pd-html-editor fr-basic fr-top"
                                                                                        role="application"
                                                                                    >
                                                                                        <div className="fr-toolbar fr-desktop fr-top fr-basic">
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="bold-15"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Bold (Ctrl+B)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="bold"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M15.25,11.8h0A3.68,3.68,0,0,0,17,9a3.93,3.93,0,0,0-3.86-4H6.65V19h7a3.74,3.74,0,0,0,3.7-3.78V15.1A3.64,3.64,0,0,0,15.25,11.8ZM8.65,7h4.2a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61,2.23,2.23,0,0,1-.63.09H8.65Zm4.6,10H8.65V13h4.6a2.09,2.09,0,0,1,2,1.3,2.09,2.09,0,0,1-1.37,2.61A2.23,2.23,0,0,1,13.25,17Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Bold
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="italic-15"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Italic (Ctrl+I)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="italic"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M11.76,9h2l-2.2,10h-2Zm1.68-4a1,1,0,1,0,1,1,1,1,0,0,0-1-1Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Italic
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="underline-15"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-pressed="false"
                                                                                                    title="Underline (Ctrl+U)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="underline"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M19,20v2H5V20Zm-3-6.785a4,4,0,0,1-5.74,3.4A3.75,3.75,0,0,1,8,13.085V5.005H6v8.21a6,6,0,0,0,8,5.44,5.851,5.851,0,0,0,4-5.65v-8H16ZM16,5v0h2V5ZM8,5H6v0H8Z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Underline
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatOL-15"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatOL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M2.5,16h2v.5h-1v1h1V18h-2v1h3V15h-3Zm1-7h1V5h-2V6h1Zm-1,2H4.3L2.5,13.1V14h3V13H3.7l1.8-2.1V10h-3Zm5-5V8h14V6Zm0,12h14V16H7.5Zm0-5h14V11H7.5Z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Ordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatOLOptions-15"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatOLOptions-15"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Ordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatOLOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatOLOptions-15"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatOLOptions-15"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-alpha"
                                                                                                                            title="Lower Alpha"
                                                                                                                        >
                                                                                                                            Lower Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-greek"
                                                                                                                            title="Lower Greek"
                                                                                                                        >
                                                                                                                            Lower Greek
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="lower-roman"
                                                                                                                            title="Lower Roman"
                                                                                                                        >
                                                                                                                            Lower Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-alpha"
                                                                                                                            title="Upper Alpha"
                                                                                                                        >
                                                                                                                            Upper Alpha
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatOL"
                                                                                                                            data-param1="upper-roman"
                                                                                                                            title="Upper Roman"
                                                                                                                        >
                                                                                                                            Upper Roman
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="fr-btn-wrap">
                                                                                                    <button
                                                                                                        id="formatUL-15"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn"
                                                                                                        data-cmd="formatUL"
                                                                                                    >
                                                                                                        <svg
                                                                                                            className="fr-svg"
                                                                                                            focusable="false"
                                                                                                            viewBox="0 0 24 24"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                        >
                                                                                                            <path d="M4,10.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,10.5,4,10.5z M4,5.5C3.2,5.5,2.5,6.2,2.5,7  S3.2,8.5,4,8.5S5.5,7.8,5.5,7S4.8,5.5,4,5.5z M4,15.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S4.8,15.5,4,15.5z   M7.5,6v2h14V6H7.5z M7.5,18h14v-2h-14V18z M7.5,13h14v-2h-14V13z"></path>
                                                                                                        </svg>
                                                                                                        <span className="fr-sr-only">
                                                                                                            Unordered List
                                                                                                        </span>
                                                                                                    </button>
                                                                                                    <button
                                                                                                        id="formatULOptions-15"
                                                                                                        type="button"
                                                                                                        tabIndex={-1}
                                                                                                        role="button"
                                                                                                        aria-controls="dropdown-menu-formatULOptions-15"
                                                                                                        aria-expanded="false"
                                                                                                        aria-haspopup="true"
                                                                                                        title="Unordered List"
                                                                                                        className="fr-command fr-btn fr-dropdown fr-options"
                                                                                                        data-cmd="formatULOptions"
                                                                                                    />
                                                                                                    <div
                                                                                                        id="dropdown-menu-formatULOptions-15"
                                                                                                        className="fr-dropdown-menu"
                                                                                                        role="listbox"
                                                                                                        aria-labelledby="formatULOptions-15"
                                                                                                        aria-hidden="true"
                                                                                                    >
                                                                                                        <div
                                                                                                            className="fr-dropdown-wrapper"
                                                                                                            role="presentation"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="fr-dropdown-content"
                                                                                                                role="presentation"
                                                                                                            >
                                                                                                                <ul
                                                                                                                    className="fr-dropdown-list"
                                                                                                                    role="presentation"
                                                                                                                >
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="default"
                                                                                                                            title="Default"
                                                                                                                        >
                                                                                                                            Default
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="circle"
                                                                                                                            title="Circle"
                                                                                                                        >
                                                                                                                            Circle
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="disc"
                                                                                                                            title="Disc"
                                                                                                                        >
                                                                                                                            Disc
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                    <li role="presentation">
                                                                                                                        <a
                                                                                                                            className="fr-command"
                                                                                                                            tabIndex={-1}
                                                                                                                            role="option"
                                                                                                                            data-cmd="formatUL"
                                                                                                                            data-param1="square"
                                                                                                                            title="Square"
                                                                                                                        >
                                                                                                                            Square
                                                                                                                        </a>
                                                                                                                    </li>
                                                                                                                </ul>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <button
                                                                                                    id="indent-15"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Increase Indent (Ctrl+])"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="indent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,9v6l3-3L3,9z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Increase Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="outdent-15"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    title="Decrease Indent (Ctrl+[)"
                                                                                                    className="fr-command fr-btn"
                                                                                                    data-cmd="outdent"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M3,12l3,3V9L3,12z M3,19h18v-2H3V19z M3,7h18V5H3V7z M9,11h12V9H9V11z M9,15h12v-2H9V15z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Decrease Indent
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-btn-grp fr-float-left">
                                                                                                <button
                                                                                                    id="undo-15"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Undo (Ctrl+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="undo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M10.4,9.4c-1.7,0.3-3.2,0.9-4.6,2L3,8.5v7h7l-2.7-2.7c3.7-2.6,8.8-1.8,11.5,1.9c0.2,0.3,0.4,0.5,0.5,0.8l1.8-0.9  C18.9,10.8,14.7,8.7,10.4,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Undo
                                                                                                    </span>
                                                                                                </button>
                                                                                                <button
                                                                                                    id="redo-15"
                                                                                                    type="button"
                                                                                                    tabIndex={-1}
                                                                                                    role="button"
                                                                                                    aria-disabled="true"
                                                                                                    title="Redo (Ctrl+Shift+Z)"
                                                                                                    className="fr-command fr-btn fr-disabled"
                                                                                                    data-cmd="redo"
                                                                                                >
                                                                                                    <svg
                                                                                                        className="fr-svg"
                                                                                                        focusable="false"
                                                                                                        viewBox="0 0 24 24"
                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                    >
                                                                                                        <path d="M13.6,9.4c1.7,0.3,3.2,0.9,4.6,2L21,8.5v7h-7l2.7-2.7C13,10.1,7.9,11,5.3,14.7c-0.2,0.3-0.4,0.5-0.5,0.8L3,14.6  C5.1,10.8,9.3,8.7,13.6,9.4z"></path>
                                                                                                    </svg>
                                                                                                    <span className="fr-sr-only">
                                                                                                        Redo
                                                                                                    </span>
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="fr-newline"></div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="fr-wrapper show-placeholder"
                                                                                            dir="auto"
                                                                                        >
                                                                                            <div
                                                                                                className="fr-element fr-view"
                                                                                                dir="auto"
                                                                                                contentEditable="true"
                                                                                                style={{ minHeight: 100 }}
                                                                                                aria-disabled="false"
                                                                                                spellCheck="true"
                                                                                            >
                                                                                                <div>
                                                                                                    <br />
                                                                                                </div>
                                                                                            </div>
                                                                                            <span
                                                                                                className="fr-placeholder"
                                                                                                style={{
                                                                                                    fontSize: 14,
                                                                                                    lineHeight: "16.1px",
                                                                                                    marginTop: 0,
                                                                                                    paddingTop: 20,
                                                                                                    paddingLeft: 20,
                                                                                                    marginLeft: 0,
                                                                                                    paddingRight: 20,
                                                                                                    marginRight: 0,
                                                                                                    textAlign: "left"
                                                                                                }}
                                                                                            >
                                                                                                Type something
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className="fr-second-toolbar"></div>
                                                                                    </div>
                                                                                    <textarea
                                                                                        style={{ display: "none" }}
                                                                                        defaultValue={""}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="com-field field__signature ">
                                                                                <div className="com-field-title">
                                                                                    Signature
                                                                                    <span
                                                                                        className="d-inline-block text-primary ml-1"
                                                                                        data-toggle="tooltip"
                                                                                        data-original-title="Signature is required"
                                                                                    >
                                                                                        *
                                                                                    </span>
                                                                                </div>
                                                                                <input
                                                                                    name="sections[3].fields[23].text"
                                                                                    className="signature form-control "
                                                                                    placeholder="Please type your full name here to sign this document."
                                                                                    type="text"
                                                                                    autoComplete="new-password"
                                                                                    defaultValue=""
                                                                                />
                                                                            </div>
                                                                            <div className="com-field field__text ">
                                                                                <div className="com-field-title">Date:</div>
                                                                                <div>
                                                                                    <input
                                                                                        name="sections[3].fields[24].text"
                                                                                        className="undefined form-control "
                                                                                        type="text"
                                                                                        defaultValue=""
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="row mb-3 mt-1">
                                                            <div className="col-12 text-right">
                                                                <div className="customForm-actions">
                                                                    <label
                                                                        className="bold text-default position-relative mr-3 mt-2 ml-3"
                                                                        data-selenium-id="customFormEditSavingLabel"
                                                                    >
                                                                        Saved
                                                                    </label>
                                                                    <button className="btn btn-sm btn-gray mr-1">
                                                                        Save as draft
                                                                    </button>
                                                                    <button className="btn btn-sm btn-green">
                                                                        Save and Complete
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="customForm-tools bottom-tools">
                                                                    <label
                                                                        data-toggle="tooltip"
                                                                        title=""
                                                                        className="fsize11 text-default customForm-status mr-3"
                                                                        data-original-title="Created by"
                                                                    >
                                                                        mwaqasdgk789@gmail.com
                                                                    </label>
                                                                    <a
                                                                        href="#"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Upload Files"
                                                                    >
                                                                        <i className="fa fa-paperclip" />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Print"
                                                                    >
                                                                        <i className="fa fa-print" />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Send As Attachment"
                                                                    >
                                                                        <i className="fas fa-envelope" />
                                                                    </a>
                                                                    <a
                                                                        href="#"
                                                                        data-toggle="tooltip"
                                                                        data-original-title="Delete"
                                                                    >
                                                                        <i className="fa fa-trash" />
                                                                    </a>
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
                </div>
            </div>

        </>
    )
}
