import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"


const CreateInvoice = () => {
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
                            <div className="panel panel-default">
                                <div className="panel-heading panel-heading-mega-menu panel-heading-invoice panel-heading">
                                    <div className="panel-title">
                                        <div className="row align-items-center">
                                            <div className="col-md-auto col-12 pt-2 mt-3">
                                                <span className="form-section-titles mt20">Invoice #1003</span>
                                                <hr />
                                            </div>
                                            <div className="col-md-auto col-12 ml-auto p-0">
                                                <div className="navbar navbar-expand-md">
                                                    <div
                                                        className="collapse navbar-collapse"
                                                        id="navbarToggleButtons"
                                                    >
                                                        <a
                                                            className="btn btn-sm shadow mt-2 mt-md-0 btn-primary mr-2"
                                                            id="previous-invoice"
                                                            data-toggle="tooltip"
                                                            data-title="Previous Invoice"
                                                            href="#"
                                                            style={{ marginRight: "4px !important" }}
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            <i className="fa fa-caret-left " /> Prev
                                                        </a>
                                                        <a
                                                            className="btn btn-sm shadow mt-2 mt-md-0 btn-primary"
                                                            id="next-invoice"
                                                            data-toggle="tooltip"
                                                            data-title="Next Invoice"
                                                            href="#"
                                                            style={{ marginRight: "28px !important" }}
                                                            data-original-title=""
                                                            title=""
                                                        >
                                                            Next <i className="fa fa-caret-right ml-1" />
                                                        </a>
                                                        <br className="d-block d-md-none" />
                                                        <a
                                                            id="print-invoice"
                                                            className="btn btn-sm shadow mt-2 mt-md-0 btn-info ml-md-2"
                                                            data-toggle="tooltip"
                                                            title=""
                                                            href="#"
                                                            style={{ marginRight: "4px !important" }}
                                                            data-original-title="Print Invoice"
                                                        >
                                                            <i className="fas fa-print" /> Print
                                                        </a>
                                                        <a
                                                            id="email-invoice"
                                                            href="#"
                                                            className="btn btn-sm shadow mt-2 mt-md-0 btn-green ml-2 mr-2"
                                                            data-toggle="tooltip"
                                                            title=""
                                                            data-original-title="Email Invoice"
                                                        >
                                                            <i className="fas fa-envelope" /> Email
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body mb0">
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 mt5">
                                                <div className="row form-group">
                                                    <div className="col-4">
                                                        <label className="col-form-label">
                                                            <span
                                                                className="has-tooltip"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                data-original-title="Who were the services and products provided to?"
                                                            >
                                                                Provided To
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="col-form-label client-profile-menu">
                                                            <div>
                                                                <div className="css-9sqakh">
                                                                    <div className="dropdown mega-menu blue-trigger">
                                                                        <a href="#">
                                                                            <span className="display-name ">
                                                                                <span>Faiz Khan</span>
                                                                            </span>
                                                                            <span className="icon fsize13 ml-2">
                                                                                <i className="fa fa-caret-down" />
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-group">
                                                    <label className="col-4 col-form-label">Sold By</label>
                                                    <div className="col-8">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                        >
                                                            <option selected="selected" value={181607}>
                                                                Muhammad
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row form-group mt-2">
                                                    <label className="col-12 col-sm-4 col-form-label">
                                                        Invoice Date
                                                    </label>
                                                    <div className="col-12 col-sm-5">
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
                                                <div className="row form-group mt-2">
                                                    <label className="col-12 col-sm-4 col-form-label">
                                                        Location
                                                    </label>
                                                    <div className="col-12 col-sm-8">
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
                                                <div className="row form-group">
                                                    <label className="col-4 col-form-label">Emailed</label>
                                                    <div className="col-8">
                                                        <div className="col-form-label"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6 mt5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div
                                                            className="validation-summary-valid"
                                                            data-valmsg-summary="true"
                                                        >
                                                            <ul>
                                                                <li style={{ display: "none" }} />
                                                            </ul>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-12 col-sm-4">
                                                                <label className="col-form-label">
                                                                    <span
                                                                        className="has-tooltip"
                                                                        data-toggle="tooltip"
                                                                        data-placement="top"
                                                                        data-original-title="Who will pay this invoice?"
                                                                    >
                                                                        Payable By
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className="col-12 col-sm-8">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    style={{ fontSize: 12, color: "#707f94" }}
                                                                >
                                                                    <optgroup label="Client">
                                                                        <option value="">Client</option>
                                                                    </optgroup>
                                                                    <optgroup label="Third Party">
                                                                        <option value={17906538}>
                                                                            web owner (ada baloch khan)
                                                                        </option>
                                                                    </optgroup>
                                                                </select>
                                                                <a
                                                                    className="modal-link manage-link"
                                                                    href="#"
                                                                    data-modal-dialog-class="modal-dialog-centered center"
                                                                >
                                                                    New Third Party
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-12 col-sm-4">
                                                                <label className="col-form-label">Referral</label>
                                                            </div>
                                                            <div className="col-12 col-sm-8">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    style={{ fontSize: 12, color: "#707f94" }}
                                                                >
                                                                    <option value="">
                                                                        None - Select a Client Referral
                                                                    </option>
                                                                </select>
                                                                <a className="manage-link" href="#">
                                                                    Manage Referrals
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="insurers">
                                                            <div className="row form-group entity-node mb10">
                                                                <div className="col-12 col-sm-4">
                                                                    <label className="col-form-label">Insurance</label>
                                                                </div>
                                                                <div className="col-12 col-sm-8" id="insurances-point">
                                                                    <div className="hidden" />
                                                                    <div className="input-group ">
                                                                        <select
                                                                            className="form-select"
                                                                            aria-label="Default select example"
                                                                            style={{ fontSize: 12, color: "#707f94" }}
                                                                        >
                                                                            <option value={-1}>Select Insurance</option>
                                                                        </select>
                                                                    </div>
                                                                    <a className="manage-link" href="#">
                                                                        Manage Insurance
                                                                    </a>
                                                                    <a
                                                                        className="manage-link float-right"
                                                                        href="#"
                                                                        style={{ display: "inline" }}
                                                                    >
                                                                        + Add Another Insurer
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-4">
                                                                <label className="col-form-label pt-0">
                                                                    <span
                                                                        className="has-tooltip"
                                                                        data-toggle="tooltip"
                                                                        data-placement="top"
                                                                        data-original-title="Remove the client's name and the appointment date from the invoice"
                                                                    >
                                                                        De-identify
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className="col-8 align-self-center">
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
                                                        <div className="row form-group mt-2">
                                                            <label className="col-12 col-sm-4 col-form-label">
                                                                Tax Usage
                                                            </label>
                                                            <div className="col-12 col-sm-8">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    style={{ fontSize: 12, color: "#707f94" }}
                                                                >
                                                                    <option selected="selected" value={0}>
                                                                        Price Includes Tax
                                                                    </option>
                                                                    <option value={1}>Price Excludes Tax</option>
                                                                    <option value={2}>No Tax</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12">
                                                <div className="form-section-title no-border fsize16">
                                                    Invoice Items
                                                    <div
                                                        id="add-item-button-portal"
                                                        className="add-button-portal float-right"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invoice-items-table" id="template-form-container">
                                            <div>
                                                <div className="panel-group mt-4">
                                                    <div className="table-caption text-center text-uppercase">
                                                        Invoice Items
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
                                                                            ITEM
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent"
                                                                            data-sort="email"
                                                                        >
                                                                            QTY
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent desc"
                                                                            data-sort="age"
                                                                        >
                                                                            CODE
                                                                        </th>
                                                                        <th className="sort border-top border-translucent">
                                                                            DESCRIPTION
                                                                        </th>
                                                                        <th className="sort border-top border-translucent">
                                                                            PRICE RS
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent desc"
                                                                            data-sort="age"
                                                                        >
                                                                            DISCOUNT
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent desc"
                                                                            data-sort="age"
                                                                        >
                                                                            TAX(%)
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent desc"
                                                                            data-sort="age"
                                                                        >
                                                                            TOTAL RS
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
                                                <div className="row mt-2">
                                                    <div className="col-12">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary valid"
                                                            aria-invalid="false"
                                                        >
                                                            Add Item
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row mt-2">
                                            <div className="col-12">
                                                <div className="form-section-title no-border fsize16">
                                                    Invoice Payments
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="invoice-payments-table"
                                            id="template-form-container-payments"
                                        >
                                            <div>
                                                <div className="panel-group mt-4">
                                                    <div className="table-caption text-center text-uppercase">
                                                        PAYMENTS
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
                                                                            ITEM
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent"
                                                                            data-sort="email"
                                                                        >
                                                                            QTY
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent desc"
                                                                            data-sort="age"
                                                                        >
                                                                            CODE
                                                                        </th>
                                                                        <th className="sort border-top border-translucent">
                                                                            DESCRIPTION
                                                                        </th>
                                                                        <th className="sort border-top border-translucent">
                                                                            PRICE RS
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent desc"
                                                                            data-sort="age"
                                                                        >
                                                                            DISCOUNT
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent desc"
                                                                            data-sort="age"
                                                                        >
                                                                            TAX(%)
                                                                        </th>
                                                                        <th
                                                                            className="sort border-top border-translucent desc"
                                                                            data-sort="age"
                                                                        >
                                                                            TOTAL RS
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
                                                <div className="row mt-2">
                                                    <div className="col-12">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary valid"
                                                            aria-invalid="false"
                                                        >
                                                            Add Payment
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-0">
                                            <div className="mb-3 mb-lg-0">
                                                <table className="w-100">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-auto" />
                                                            <td className="summary-cell">
                                                                <div
                                                                    className="text-right bold mb-1"
                                                                    style={{
                                                                        fontSize: 15,
                                                                        fontWeight: 800,
                                                                        color: "#707f94"
                                                                    }}
                                                                    id="tax-total-entire"
                                                                >
                                                                    <span>Tax Total</span>
                                                                    <span id="tax-total" className="w90 d-inline-block">
                                                                        Rs0.00
                                                                    </span>
                                                                </div>
                                                                <div
                                                                    className="text-right bold mb-1"
                                                                    style={{
                                                                        fontSize: 15,
                                                                        fontWeight: 800,
                                                                        color: "#707f94"
                                                                    }}
                                                                >
                                                                    <span>Balance</span>
                                                                    <div className="w90 d-inline-block">
                                                                        <span
                                                                            id="total-balance"
                                                                            className="w90 d-inline-block"
                                                                        >
                                                                            Rs0.00
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="text-right bold mb-1"
                                                                    style={{
                                                                        fontSize: 15,
                                                                        fontWeight: 800,
                                                                        color: "#707f94"
                                                                    }}
                                                                >
                                                                    <a
                                                                        href="#"
                                                                        id="account-balance-link"
                                                                        className="account-balance-link text-danger"
                                                                    >
                                                                        <span>Account Balance</span>
                                                                        <span
                                                                            id="account-balance"
                                                                            className="w90 d-inline-block"
                                                                            data-balance-without-owing={0}
                                                                        >
                                                                            Rs0.00
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td style={{ width: 35 }} />
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-section-title no-border fsize16">
                                                    <label className="col-form-label">
                                                        <span className="has-tooltip">Invoice Notes</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className=" col-md-12">
                                                <textarea
                                                    className="form-control"
                                                    data-val="true"
                                                    data-val-length="Invoice Notes must be less than or equal to 2000 characters"
                                                    data-val-length-max={2000}
                                                    id="internalNotes"
                                                    maxLength={2000}
                                                    name="Invoice.InternalNotes"
                                                    placeholder="Add comments for internal use. Comments will not be displayed on the invoice."
                                                    rows={4}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <button
                                                className="btn btn-danger btn-sm shadow mt-4"
                                                data-href="/Profile/8/Invoice/Delete/81462037"
                                                id="action-invoice-delete"
                                            >
                                                <i className="fa fa-margin fa-trash" /> Delete Invoice
                                            </button>
                                            <button
                                                id="save-invoice"
                                                className="btn btn-primary shadow mt-4 float-right"
                                            >
                                                <i className="fa fa-check" /> Save Invoice
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-right mt-3 fsize13">
                                            <a
                                                href="#"
                                                className="text-primary semibold"
                                                data-toggle="modal"
                                                data-target="#activity-log-modal"
                                                data-modal-dialog-class="modal-dialog-centered center"
                                            >
                                                <span>View</span> Activity Log
                                            </a>
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
export default CreateInvoice;