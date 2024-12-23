import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"


const PaymentReceived = () => {
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
                            <div className="form-section-titles mt20">Payments Received</div>
                            <hr />
                            <div className="panel-body">
                                <form action="#" id="get-payments-id" method="post">
                                    <div className="row mt20">
                                        <div className="col-md-6 col-12 mb20">
                                            <div className="row mt20 mb20">
                                                <div className="col-12">
                                                    <div className="form-block">
                                                        <div className="form-group row">
                                                            <label className="col-sm-3 col-12 col-form-label pr0">
                                                                Start Date:
                                                            </label>
                                                            <div className="col-sm-9 col-12">
                                                                <div className="input-group date bs-datepicker">
                                                                    <input
                                                                        className="form-control datetimepicker"
                                                                        id="datepicker"
                                                                        type="text"
                                                                        placeholder="dd/mm/yyyy"
                                                                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                                                                    />
                                                                    <div className="input-group-append input-group-addon">
                                                                        <span className="input-group-text input-group-addon-gray">
                                                                            <i className="far fa-calendar-alt" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mt-2">
                                                            <label className="col-sm-3 col-12 col-form-label pr0">
                                                                End Date:
                                                            </label>
                                                            <div className="col-sm-9 col-12">
                                                                <div className="input-group date bs-datepicker">
                                                                    <input
                                                                        className="form-control datetimepicker"
                                                                        id="datepicker"
                                                                        type="text"
                                                                        placeholder="dd/mm/yyyy"
                                                                        data-options='{"disableMobile":true,"dateFormat":"d/m/Y"}'
                                                                    />
                                                                    <div className="input-group-append input-group-addon">
                                                                        <span className="input-group-text input-group-addon-gray">
                                                                            <i className="far fa-calendar-alt" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="row justify-content-center mt20 mb20">
                                                <div className="col-12">
                                                    <div className="form-block">
                                                        <div className="form-group row">
                                                            <label
                                                                htmlFor="Name"
                                                                className="col-sm-4 col-12 col-form-label pr0"
                                                            >
                                                                Location Type::
                                                            </label>
                                                            <div className="col-sm-8 col-12">
                                                                {" "}
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    style={{ fontSize: 12, color: "#707f94" }}
                                                                >
                                                                    <option selected="selected" value="">
                                                                        Select option{" "}
                                                                    </option>
                                                                    <option value="Mr">Mr</option>
                                                                    <option value="Ms">Ms</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mt-2">
                                                            <label className="col-sm-4 col-12 form-control-label pr0">
                                                                Include All Prepayments:
                                                            </label>
                                                            <div className="col-sm-8 col-12">
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="switchClient"
                                                                        defaultChecked=""
                                                                    />
                                                                    <label htmlFor="IncludeAllPrepayments" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center justify-content-between g-2 mt-4">
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
                                                        <span>NEW PAYMENT</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="d-flex align-items-center">
                                                <div className="form-group">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#topSlideOutModal"
                                                    >
                                                        <i className="fa fa-search mr5" />
                                                        <span>SEARCH</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="panel-group mt-6">
                                    <div className="table-caption text-center text-uppercase">
                                        Drag a column here to group by that column
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
                                                            data-sort="date"
                                                        >
                                                            DATE
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent"
                                                            data-sort="received"
                                                        >
                                                            RECEIVED FORM
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="practitioner"
                                                        >
                                                            PRACTITIONERS
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="location"
                                                        >
                                                            LOCATION
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="payment method"
                                                        >
                                                            PAYMENT METHOD
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="notes"
                                                        >
                                                            NOTES
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="amount"
                                                        >
                                                            AMOUNT
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="unallocated"
                                                        >
                                                            UNALLOCATED
                                                        </th>
                                                        <th
                                                            className="sort text-end align-middle pe-0 border-top border-translucent"
                                                            scope="col"
                                                        >
                                                            ACTIONS
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="list">
                                                    <tr>
                                                        <td className="align-middle ps-3 name">EMPTY</td>
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


        </>
    )
}
export default PaymentReceived;