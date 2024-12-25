import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"


const BillingSetup = () => {
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
                            <div className="panel-body">
                                <h3 className="profile-det">Billing Setup</h3>
                                <hr />
                                <div className="row mb0">
                                    <div className="col-lg-6 col-sm-12 col-12 mt20 mb20">
                                        <div className="form-block form-block-xl">
                                            <div className="">
                                                <div className="form-group row mb20">
                                                    <label className="form-control-label text-left col-4">
                                                        Bill To
                                                    </label>
                                                    <div className="col-8">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            <optgroup label="Self">
                                                                <option value="">Self</option>
                                                            </optgroup>
                                                            <optgroup label="Third Party">
                                                                <option value={17906538}>
                                                                    web owner (ada baloch khan)
                                                                </option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label className="col-4 col-form-label">
                                                        <span
                                                            className="has-tooltip"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            data-original-title="Remove the client's name & appointment time."
                                                        >
                                                            De-Identify Invoices
                                                        </span>
                                                    </label>
                                                    <div className="col-8">
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
                                            <div className="form-group row mb20 mt-4">
                                                <label className="form-control-label text-left col-4">
                                                    Extra Invoice Info
                                                </label>
                                                <div className="col-8">
                                                    <textarea
                                                        className="form-control"
                                                        data-val="true"
                                                        data-val-maxlength="The field BillToExtraInfo must be a string or array type with a maximum length of '200'."
                                                        data-val-maxlength-max={200}
                                                        data-val-regex="This field can't have HTML."
                                                        data-val-regex-pattern="^(?![\s\S]*(<([\s\S]*)>))[\s\S]*"
                                                        id="BillToExtraInfo"
                                                        maxLength={200}
                                                        name="BillToExtraInfo"
                                                        rows={4}
                                                        defaultValue={""}
                                                    />
                                                    <span
                                                        className="field-validation-valid"
                                                        data-valmsg-for="BillToExtraInfo"
                                                        data-valmsg-replace="true"
                                                    />
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="form-group row mb20 mt-4">
                                                    <label className="form-control-label col-4">
                                                        Preferred Service Or Pack
                                                    </label>
                                                    <div className="col-8">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            <option value="">Select a Service or Pack</option>
                                                            <optgroup label="Services">
                                                                <option value="">Initial Consultation</option>
                                                                <option value="">Standard Consultation</option>
                                                            </optgroup>
                                                            <optgroup label="Session Pack Templates">
                                                                <option value="">Generic Pack</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row mb20 mt-4">
                                                    <label className="form-control-label col-4">Discount</label>
                                                    <div className="col-auto">
                                                        <div className="input-group">
                                                            <input
                                                                type="text"
                                                                className="form-control text-right w70"
                                                                name="discount_mask"
                                                            />
                                                            <div
                                                                className="input-group-append btn-group-active-highlight pl-3"
                                                                style={{ marginLeft: 4 }}
                                                            >
                                                                <div
                                                                    className="radio radio-inline custom-radio d-inline-flex align-self-center pr-3"
                                                                    data-toggle="tooltip"
                                                                    title=""
                                                                    data-original-title="Percentage"
                                                                >
                                                                    <input
                                                                        defaultChecked="checked"
                                                                        data-val="true"
                                                                        data-val-required="The DiscountType field is required."
                                                                        id="Percentage"
                                                                        name="DiscountType"
                                                                        type="radio"
                                                                        defaultValue="Percentage"
                                                                    />
                                                                    <label
                                                                        htmlFor="Percentage"
                                                                        className="fsize14 bold text-gray"
                                                                    >
                                                                        %
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    className="radio radio-inline custom-radio d-inline-flex align-self-center"
                                                                    data-toggle="tooltip"
                                                                    title=""
                                                                    data-original-title="Amount"
                                                                >
                                                                    <input
                                                                        id="Currency"
                                                                        name="DiscountType"
                                                                        type="radio"
                                                                        defaultValue="Currency"
                                                                    />
                                                                    <label
                                                                        htmlFor="Currency"
                                                                        className="fsize14 bold text-gray"
                                                                    >
                                                                        Rs
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-12 mt20">
                                        <div className="form-block form-block-xl">
                                            <div className="">
                                                <div className="form-group row mb20">
                                                    <div className="panel no-border col-12">
                                                        <div className="col-11">
                                                            <div
                                                                id="bank-account"
                                                                className="form-group row row-bordered font-weight-bold col"
                                                            >
                                                                <div className="col-5 pl-0">
                                                                    <label
                                                                        className="form-control-label font-weight-bold"
                                                                        style={{ fontWeight: 800, fontSize: 13 }}
                                                                    >
                                                                        Bank Account{" "}
                                                                    </label>
                                                                </div>
                                                                <div className="col-7 text-right pr-0">
                                                                    <a
                                                                        href="#"
                                                                        id="button-bank-details"
                                                                        className="text-primary"
                                                                        data-toggle="collapse"
                                                                        data-target="#section-bank-details"
                                                                    >
                                                                        <i className="fa fa-credit-card" />
                                                                        <span
                                                                            id="button-bank-details-add-text"
                                                                            style={{ fontWeight: 800, fontSize: 13 }}
                                                                        >
                                                                            Add A Bank Account
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-11 pt-5">
                                                <div className="form-group row row-bordered font-weight-bold col">
                                                    <div className="col-8 pl-0">
                                                        <label
                                                            className="form-control-label"
                                                            style={{ fontWeight: 800, fontSize: 13 }}
                                                        >
                                                            Saved Card Details
                                                        </label>
                                                    </div>
                                                    <div className="col-4 text-right pr-0">
                                                        <a
                                                            href="#"
                                                            id="add-credit-card-account"
                                                            className="text-primary"
                                                        >
                                                            <i className="fa fa-plus" />{" "}
                                                            <span
                                                                id="stripe-button-text"
                                                                style={{ fontWeight: 800, fontSize: 13 }}
                                                            >
                                                                Add Card
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id="credit-card-accounts" className="pb-5 pl-0 mt-4"></div>
                                            </div>
                                            <div className=" mt20 pt-5">
                                                <div className="form-group row mb20">
                                                    <label className="col-4 col-form-label">Membership</label>
                                                    <div className="col-8">
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
                                                <div className="">
                                                    <div className="internal-title text-uppercase pt0">
                                                        Statement Settings
                                                    </div>
                                                    <div className="alert alert-primary semibold mb-4">
                                                        <i className="fas fa-exclamation-circle text-primary fsize20 float-left mr-2" />
                                                        To enable these settings you first need to update the
                                                        automatic Statement options under Settings / Configuration /
                                                        Invoices
                                                    </div>
                                                    <div className="form-group row mb20">
                                                        <div className="col-md-6">
                                                            <div className="row">
                                                                <label className="col-8 col-form-label">
                                                                    Automatically Generate Monthly Statements
                                                                </label>
                                                                <div className="col-4">
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
                                                        <div className="col-md-6">
                                                            <div className="row">
                                                                <label className="col-8 col-form-label">
                                                                    {" "}
                                                                    Email Automatically Generated Statements{" "}
                                                                </label>
                                                                <div className="col-4">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-footer">
                                <div className="mt-4">
                                    <div className="d-flex">
                                        <div className="ml-auto">
                                            <button
                                                type="submit"
                                                id="action-save-contact"
                                                className="btn btn-success shadow w90 mr5 mb5 action-form"
                                            >
                                                <i className="fa fa-check" style={{ marginRight: 3 }} />
                                                Save
                                            </button>
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
export default BillingSetup;