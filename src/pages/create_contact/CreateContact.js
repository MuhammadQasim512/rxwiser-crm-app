import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"


const CreateContact = () => {
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

                                <a href="invoices.html" className="dashboard-nav-dropdown-item">
                                    Invoice
                                </a>
                                <a href="payment_received.html" className="dashboard-nav-dropdown-item">
                                    Payments
                                </a>
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
                                <a
                                    href="notes.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("notes.html") ? "active" : ""}`}
                                >
                                    Notes
                                </a>
                                <a
                                    href="record_files.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("record_files.html") ? "active" : ""}`}
                                >
                                    Files
                                </a>
                                <a
                                    href="correspondence.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("correspondence.html") ? "active" : ""}`}
                                >
                                    Correspondence
                                </a>
                                <a
                                    href="client_diagnoses.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("client_diagnoses.html") ? "active" : ""}`}
                                >
                                    Diagnoses
                                </a>
                            </div>
                        </div>
                        <div
                            className={`dashboard-nav-dropdown ${activeDropdown === "communication" ? "show" : ""}`}
                        >
                            <a
                                href="#!"
                                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
                                onClick={toggleDropdown("communication")}
                            >
                                Communication{" "}
                            </a>
                            <div className="dashboard-nav-dropdown-menu">
                                <a
                                    href="communication_activity.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("communication_activity.html") ? "active" : ""}`}
                                >
                                    Activity
                                </a>
                                <a
                                    href="create_sms.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("create_sms.html") ? "active" : ""}`}
                                >
                                    New SMS
                                </a>
                                <a
                                    href="new_email.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("new_email.html") ? "active" : ""}`}
                                >
                                    New Email
                                </a>
                                <a
                                    href="create_letter.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("create_letter.html") ? "active" : ""}`}
                                >
                                    New Letter
                                </a>
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
                                <a
                                    href="admin_notes.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("admin_notes.html") ? "active" : ""}`}
                                >
                                    Admin Notes
                                </a>
                                <a
                                    href="admin_files.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("admin_files.html") ? "active" : ""}`}
                                >
                                    Admin Files
                                </a>
                                <a
                                    href="admin_form.html"
                                    className={`dashboard-nav-dropdown-item ${window.location.pathname.includes("admin_form.html") ? "active" : ""}`}
                                >
                                    Admin Forms
                                </a>
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
                            <form action="#" method="post">
                                <div className="panel-body">
                                    <h3 className="profile-det">Create Contact</h3>
                                    <hr />
                                    <div className="row mt20">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="form-group row mb15">
                                                <label className="form-control-label col-lg-4 col-12 pt5">
                                                    Relationship
                                                </label>
                                                <div className="col-10 col-lg-8">
                                                    <div className="input-group">
                                                        <select
                                                            className="form-control"
                                                            id="RelationshipTypeId"
                                                            name="RelationshipTypeId"
                                                        >
                                                            <option value="">Select a relationship...</option>
                                                            <option value={4}>Child</option>
                                                            <option value={5}>Employer</option>
                                                            <option value={1}>Father</option>
                                                            <option value={6}>Insurer</option>
                                                            <option value={2}>Mother</option>
                                                            <option value={3}>Partner</option>
                                                        </select>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text input-group-addon-gray">
                                                                of Faiz Khan
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="text-primary float-right fsize11"
                                                        style={{ fontWeight: 800 }}
                                                    >
                                                        Manage Relationships
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="form-group row mt-2">
                                                <h3 className="section-heading col-12">
                                                    Identifying Information
                                                </h3>
                                            </div>
                                            <div className="form-group row mb10 mt-2">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Salutation
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                    >
                                                        <option value="">No Salutation</option>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Ms">Ms</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Miss">Miss</option>
                                                        <option value="Mx">Mx</option>
                                                        <option value="Master">Master</option>
                                                        <option value="Dr">Dr</option>
                                                        <option value="Prof">Prof</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb10 mt-2">
                                                <label className="form-control-label col-lg-4 col-12">Name</label>
                                                <div className="col-lg-4 col-6 pr-1">
                                                    <input
                                                        className="form-control medicare-first-name"
                                                        data-val="true"
                                                        placeholder="First Name"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <label className="sr-only">Middle Name</label>
                                                <div className="col-lg-4 col-6 pl-2">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Middle Name"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Last Name
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control medicare-last-name"
                                                        placeholder="Last Name"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Preferred Name
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input className="form-control" type="text" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb20">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Date of Birth
                                                </label>
                                                <div className="col-lg-8 col-sm-12 col-12">
                                                    <div className="input-group date bs-datepicker">
                                                        <input
                                                            className="form-control datetimepicker flatpickr-input"
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
                                                </div>
                                            </div>
                                            <div className="form-group row mt-4">
                                                <h3 className="section-heading col-12">
                                                    Gender, Sex, and Pronouns
                                                </h3>
                                            </div>
                                            <div className="form-group row mb10 mt-2">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Sex and Gender
                                                </label>
                                                <div className="col-lg-4 col-6 pr-1">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="">Unspecified</option>
                                                        <option value="">Intersex</option>
                                                        <option value="">Male</option>
                                                        <option value="">Female</option>
                                                    </select>
                                                    <span className="fsize11">Sex</span>
                                                </div>
                                                <div className="col-lg-4 col-6 pl-2">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="">Unspecified</option>
                                                        <option value="">Bigender</option>
                                                        <option value="">Agender</option>
                                                        <option value="">Non-binary</option>
                                                        <option value="">Male</option>
                                                        <option value="">Female</option>
                                                    </select>
                                                    <span className="fsize11">Gender Identity</span>
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <div className="col-lg-4 col-12">
                                                    <label className="form-control-label">Pronouns</label>
                                                    <span id="preferred-pronouns-icon">
                                                        <span data-test-id="span_popup_component">
                                                            <svg
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fas"
                                                                data-icon="circle-info"
                                                                className="svg-inline--fa fa-circle-info PopupTip_infoButton__+INqi"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512"
                                                                data-test-id="span_popup_component_info_icon"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="col-lg-8 col-12">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value={1}>she/her</option>
                                                        <option value={2}>he/him</option>
                                                        <option value={3}>they/them</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb20">
                                                <div className="col-lg-4 col-12">
                                                    <label className="form-control-label">Identity</label>
                                                    <span id="identity-note-icon">
                                                        <span data-test-id="span_popup_component">
                                                            <svg
                                                                aria-hidden="true"
                                                                focusable="false"
                                                                data-prefix="fas"
                                                                data-icon="circle-info"
                                                                className="svg-inline--fa fa-circle-info PopupTip_infoButton__+INqi"
                                                                role="img"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 512 512"
                                                                data-test-id="span_popup_component_info_icon"
                                                            >
                                                                <path
                                                                    fill="currentColor"
                                                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input className="form-control" type="text" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="form-group row mt-4">
                                                <h3 className="section-heading col-12">Contact Details</h3>
                                            </div>
                                            <div className="form-group row mb10 mobile-number-group mt-2">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Mobile Number
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input className="form-control" type="text" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Telephone
                                                </label>
                                                <div className="col-lg-4 col-6 pr-1">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Work Phone"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                    <span className="fsize11">Work</span>
                                                </div>
                                                <div className="col-lg-4 col-6 pl-2">
                                                    <label className="sr-only" htmlFor="PhoneView_HomePhone">
                                                        Home Phone
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Home Phone"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                    <span className="fsize11 ">Home</span>
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Email
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input className="form-control" type="text" defaultValue="" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Business Name
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input className="form-control" type="text" defaultValue="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb20 border-left">
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Address
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <textarea className="form-control" rows={2} defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">City</label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Suburb/Town"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    State
                                                </label>
                                                <div className="col-lg-4 col-6 pr-1">
                                                    <input
                                                        className="form-control"
                                                        placeholder="State"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div className="col-lg-4 col-6 pl-2">
                                                    <label className="sr-only" htmlFor="AddressView_Postcode">
                                                        Postcode
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Postcode"
                                                        type="text"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row mb10">
                                                <label className="form-control-label col-lg-4 col-12">
                                                    Country
                                                </label>
                                                <div className="col-sm-12 col-lg-8">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                    >
                                                        <option value="">Select a Country...</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AX">Åland Islands</option>
                                                        <option value="AL">Albania</option>
                                                        <option value="DZ">Algeria</option>
                                                        <option value="AS">American Samoa</option>
                                                        <option value="AD">Andorra</option>
                                                        <option value="AO">Angola</option>
                                                        <option value="AI">Anguilla</option>
                                                        <option value="AQ">Antarctica</option>
                                                        <option value="AG">Antigua And Barbuda</option>
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AW">Aruba</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="AT">Austria</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BS">Bahamas</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BB">Barbados</option>
                                                        <option value="BY">Belarus</option>
                                                        <option value="BE">Belgium</option>
                                                        <option value="BZ">Belize</option>
                                                        <option value="BJ">Benin</option>
                                                        <option value="BM">Bermuda</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="BO">Bolivia</option>
                                                        <option value="BQ">Bonaire, Sint Eustatius And Saba</option>
                                                        <option value="BA">Bosnia And Herzegovina</option>
                                                        <option value="BW">Botswana</option>
                                                        <option value="BV">Bouvet Island</option>
                                                        <option value="BR">Brazil</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="BN">Brunei Darussalam</option>
                                                        <option value="BG">Bulgaria</option>
                                                        <option value="BF">Burkina Faso</option>
                                                        <option value="BI">Burundi</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CM">Cameroon</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="CV">Cape Verde</option>
                                                        <option value="KY">Cayman Islands</option>
                                                        <option value="CF">Central African Republic</option>
                                                        <option value="TD">Chad</option>
                                                        <option value="CL">Chile</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos (Keeling) Islands</option>
                                                        <option value="CO">Colombia</option>
                                                        <option value="KM">Comoros</option>
                                                        <option value="CG">Congo</option>
                                                        <option value="CD">
                                                            Congo, The Democratic Republic Of The
                                                        </option>
                                                        <option value="CK">Cook Islands</option>
                                                        <option value="CR">Costa Rica</option>
                                                        <option value="CI">Côte D'Ivoire</option>
                                                        <option value="HR">Croatia</option>
                                                        <option value="CU">Cuba</option>
                                                        <option value="CW">Curaçao</option>
                                                        <option value="CY">Cyprus</option>
                                                        <option value="CZ">Czech Republic</option>
                                                        <option value="DK">Denmark</option>
                                                        <option value="DJ">Djibouti</option>
                                                        <option value="DM">Dominica</option>
                                                        <option value="DO">Dominican Republic</option>
                                                        <option value="EC">Ecuador</option>
                                                        <option value="EG">Egypt</option>
                                                        <option value="SV">El Salvador</option>
                                                        <option value="GQ">Equatorial Guinea</option>
                                                        <option value="ER">Eritrea</option>
                                                        <option value="EE">Estonia</option>
                                                        <option value="ET">Ethiopia</option>
                                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                                        <option value="FO">Faroe Islands</option>
                                                        <option value="FJ">Fiji</option>
                                                        <option value="FI">Finland</option>
                                                        <option value="FR">France</option>
                                                        <option value="GF">French Guiana</option>
                                                        <option value="PF">French Polynesia</option>
                                                        <option value="TF">French Southern Territories</option>
                                                        <option value="GA">Gabon</option>
                                                        <option value="GM">Gambia</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="GH">Ghana</option>
                                                        <option value="GI">Gibraltar</option>
                                                        <option value="GR">Greece</option>
                                                        <option value="GL">Greenland</option>
                                                        <option value="GD">Grenada</option>
                                                        <option value="GP">Guadeloupe</option>
                                                        <option value="GU">Guam</option>
                                                        <option value="GT">Guatemala</option>
                                                        <option value="GG">Guernsey</option>
                                                        <option value="GN">Guinea</option>
                                                        <option value="GW">Guinea-Bissau</option>
                                                        <option value="GY">Guyana</option>
                                                        <option value="HT">Haiti</option>
                                                        <option value="HM">Heard Island And Mcdonald Islands</option>
                                                        <option value="VA">Holy See (Vatican City State)</option>
                                                        <option value="HN">Honduras</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="HU">Hungary</option>
                                                        <option value="IS">Iceland</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran, Islamic Republic Of</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IE">Ireland</option>
                                                        <option value="IM">Isle Of Man</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="IT">Italy</option>
                                                        <option value="JM">Jamaica</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JE">Jersey</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KE">Kenya</option>
                                                        <option value="KI">Kiribati</option>
                                                        <option value="KP">
                                                            Korea, Democratic People'S Republic Of
                                                        </option>
                                                        <option value="KR">Korea, Republic Of</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">Lao People's Democratic Republic</option>
                                                        <option value="LV">Latvia</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="LS">Lesotho</option>
                                                        <option value="LR">Liberia</option>
                                                        <option value="LY">Libya</option>
                                                        <option value="LI">Liechtenstein</option>
                                                        <option value="LT">Lithuania</option>
                                                        <option value="LU">Luxembourg</option>
                                                        <option value="MO">Macao</option>
                                                        <option value="MK">
                                                            Macedonia, The Former Yugoslav Republic Of
                                                        </option>
                                                        <option value="MG">Madagascar</option>
                                                        <option value="MW">Malawi</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="ML">Mali</option>
                                                        <option value="MT">Malta</option>
                                                        <option value="MH">Marshall Islands</option>
                                                        <option value="MQ">Martinique</option>
                                                        <option value="MR">Mauritania</option>
                                                        <option value="MU">Mauritius</option>
                                                        <option value="YT">Mayotte</option>
                                                        <option value="MX">Mexico</option>
                                                        <option value="FM">Micronesia, Federated States Of</option>
                                                        <option value="MD">Moldova, Republic Of</option>
                                                        <option value="MC">Monaco</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="ME">Montenegro</option>
                                                        <option value="MS">Montserrat</option>
                                                        <option value="MA">Morocco</option>
                                                        <option value="MZ">Mozambique</option>
                                                        <option value="MM">Myanmar</option>
                                                        <option value="NA">Namibia</option>
                                                        <option value="NR">Nauru</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="NL">Netherlands</option>
                                                        <option value="NC">New Caledonia</option>
                                                        <option value="NZ">New Zealand</option>
                                                        <option value="NI">Nicaragua</option>
                                                        <option value="NE">Niger</option>
                                                        <option value="NG">Nigeria</option>
                                                        <option value="NU">Niue</option>
                                                        <option value="NF">Norfolk Island</option>
                                                        <option value="MP">Northern Mariana Islands</option>
                                                        <option value="NO">Norway</option>
                                                        <option value="OM">Oman</option>
                                                        <option selected="selected" value="PK">
                                                            Pakistan
                                                        </option>
                                                        <option value="PW">Palau</option>
                                                        <option value="PS">Palestinian Territory, Occupied</option>
                                                        <option value="PA">Panama</option>
                                                        <option value="PG">Papua New Guinea</option>
                                                        <option value="PY">Paraguay</option>
                                                        <option value="PE">Peru</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="PN">Pitcairn</option>
                                                        <option value="PL">Poland</option>
                                                        <option value="PT">Portugal</option>
                                                        <option value="PR">Puerto Rico</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="RE">Réunion</option>
                                                        <option value="RO">Romania</option>
                                                        <option value="RU">Russian Federation</option>
                                                        <option value="RW">Rwanda</option>
                                                        <option value="BL">Saint Barthélemy</option>
                                                        <option value="SH">
                                                            Saint Helena, Ascension And Tristan Da Cunha
                                                        </option>
                                                        <option value="KN">Saint Kitts And Nevis</option>
                                                        <option value="LC">Saint Lucia</option>
                                                        <option value="MF">Saint Martin (French Part)</option>
                                                        <option value="PM">Saint Pierre And Miquelon</option>
                                                        <option value="VC">Saint Vincent And The Grenadines</option>
                                                        <option value="WS">Samoa</option>
                                                        <option value="SM">San Marino</option>
                                                        <option value="ST">Sao Tome And Principe</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SN">Senegal</option>
                                                        <option value="RS">Serbia</option>
                                                        <option value="SC">Seychelles</option>
                                                        <option value="SL">Sierra Leone</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="SX">Sint Maarten (Dutch Part)</option>
                                                        <option value="SK">Slovakia</option>
                                                        <option value="SI">Slovenia</option>
                                                        <option value="SB">Solomon Islands</option>
                                                        <option value="SO">Somalia</option>
                                                        <option value="ZA">South Africa</option>
                                                        <option value="GS">
                                                            South Georgia And The South Sandwich Islands
                                                        </option>
                                                        <option value="SS">South Sudan</option>
                                                        <option value="ES">Spain</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SD">Sudan</option>
                                                        <option value="SR">Suriname</option>
                                                        <option value="SJ">Svalbard And Jan Mayen</option>
                                                        <option value="SZ">Swaziland</option>
                                                        <option value="SE">Sweden</option>
                                                        <option value="CH">Switzerland</option>
                                                        <option value="SY">Syrian Arab Republic</option>
                                                        <option value="TW">Taiwan, Province Of China</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TZ">Tanzania, United Republic Of</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TL">Timor-Leste</option>
                                                        <option value="TG">Togo</option>
                                                        <option value="TK">Tokelau</option>
                                                        <option value="TO">Tonga</option>
                                                        <option value="TT">Trinidad And Tobago</option>
                                                        <option value="TN">Tunisia</option>
                                                        <option value="TR">Turkey</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="TC">Turks And Caicos Islands</option>
                                                        <option value="TV">Tuvalu</option>
                                                        <option value="UG">Uganda</option>
                                                        <option value="UA">Ukraine</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="GB">United Kingdom</option>
                                                        <option value="US">United States</option>
                                                        <option value="UY">Uruguay</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VU">Vanuatu</option>
                                                        <option value="VE">Venezuela, Bolivarian Republic Of</option>
                                                        <option value="VN">Viet Nam</option>
                                                        <option value="VG">Virgin Islands, British</option>
                                                        <option value="VI">Virgin Islands, U.S.</option>
                                                        <option value="WF">Wallis And Futuna</option>
                                                        <option value="EH">Western Sahara</option>
                                                        <option value="YE">Yemen</option>
                                                        <option value="ZM">Zambia</option>
                                                        <option value="ZW">Zimbabwe</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb20">
                                                <div className="col text-right">
                                                    <button
                                                        className="btn btn-success btn-xs shadow"
                                                        type="button"
                                                        id="copy-address-from-client"
                                                        title="Copy the address from the client"
                                                    >
                                                        Copy from Client
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="form-group row mb20 mt-4">
                                                <label
                                                    htmlFor="EmergencyContact"
                                                    className="form-control-label col-lg-4 col-3"
                                                >
                                                    Emergency Contact
                                                </label>
                                                <div className="col-3 col-lg-1">
                                                    <div className="form-check form-switch d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switchClient"
                                                        />
                                                    </div>
                                                </div>
                                                <label
                                                    htmlFor="Disclosure"
                                                    className="form-control-label col-lg-3 col-3 text-lg-right"
                                                >
                                                    Disclosure Level
                                                </label>
                                                <div className="col-3 col-lg-4">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        style={{ fontSize: 12, color: "#707f94" }}
                                                    >
                                                        <option selected="selected" value="None">
                                                            None
                                                        </option>
                                                        <option value="Partial">Partial</option>
                                                        <option value="Full">Full</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb20 mt-4">
                                                <label className="form-control-label col-lg-4 col-3">
                                                    Portal Appointments
                                                </label>
                                                <div className="col-3 col-lg-1">
                                                    <div className="form-check form-switch d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switchClient"
                                                        />
                                                    </div>
                                                </div>
                                                <label className="form-control-label col-lg-7 col-6">
                                                    Can make appointments on the client portal for syed shah
                                                </label>
                                            </div>
                                            <div className="form-group row mb20 mt-4">
                                                <label
                                                    htmlFor="IsSendReminder"
                                                    className="form-control-label col-lg-4 col-3 pr0"
                                                >
                                                    Appointment Reminders
                                                </label>
                                                <div className="col-3 col-lg-1">
                                                    <div className="form-check form-switch d-flex align-items-center">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            id="switchClient"
                                                        />
                                                    </div>
                                                </div>
                                                <label
                                                    htmlFor="IsSendReminder"
                                                    className="form-control-label col-lg-7 col-6"
                                                >
                                                    Send reminders about all appointments for syed shah
                                                </label>
                                            </div>
                                            <div className="form-group row mb20 mt-4">
                                                <label className="form-control-label col-12">Notes</label>
                                                <div className="col-12">
                                                    <textarea
                                                        className="form-control"
                                                        cols={8}
                                                        id="Notes"
                                                        name="Notes"
                                                        rows={6}
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <div className="d-flex">
                                        <div className="ml-auto">
                                            <button
                                                type="submit"
                                                id="action-save-contact"
                                                className="btn btn-success shadow w90 mr5 mb5 action-form"
                                            >
                                                <i className="fa fa-margin fa-check mr5" />
                                                Save
                                            </button>
                                            <a
                                                id="action-cancel-contact"
                                                href="#"
                                                className="btn btn-gray shadow w90 mr5 mb5"
                                            >
                                                <i className="fa fa-margin fa-times mr5" />
                                                Cancel
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
}
export default CreateContact;