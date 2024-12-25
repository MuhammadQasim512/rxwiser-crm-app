import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"


const AppoinmentsClient = () => {
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
                            <div className="panel-body">
                                <form action="#" id="appoitmentfilterform" method="post">
                                    <h3 className="profile-det">Appointments</h3>
                                    <hr />
                                    <div className="form-group d-flex flex-wrap mt10 mb10 justify-content-end align-items-center text-right">
                                        <div className="w150">
                                            <div className="form-check form-switch d-flex align-items-center">
                                                {/* Label */}
                                                <label
                                                    className="form-control-label form-check-label"
                                                    htmlFor="switchClient"
                                                    style={{ margin: "7px 46px 2px 2px", fontSize: 14 }}
                                                >
                                                    Show Deleted
                                                </label>
                                                {/* Checkbox */}
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switchClient"
                                                />
                                            </div>
                                        </div>
                                        <div className="ml10 w250">
                                            <div className="form-check form-switch d-flex align-items-center">
                                                {/* Label */}
                                                <label
                                                    className="form-control-label form-check-label"
                                                    htmlFor="switchClient"
                                                    style={{ margin: "7px 46px 2px 2px", fontSize: 14 }}
                                                >
                                                    Show only Future Appointments:
                                                </label>
                                                {/* Checkbox */}
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switchClient"
                                                />
                                            </div>
                                        </div>
                                        <div className="ml10 w150">
                                            <div className="form-check form-switch d-flex align-items-center">
                                                {/* Label */}
                                                <label
                                                    className="form-control-label form-check-label"
                                                    htmlFor="switchClient"
                                                    style={{ margin: "7px 46px 2px 2px", fontSize: 14 }}
                                                >
                                                    Include classes:
                                                </label>
                                                {/* Checkbox */}
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switchClient"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="panel-group mt-4">
                                    <div className="table-caption text-center text-uppercase">
                                        Appointments List
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
                                                            DATE
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent"
                                                            data-sort="email"
                                                        >
                                                            PRACTITIONER
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="age"
                                                        >
                                                            WHERE
                                                        </th>
                                                        <th className="sort border-top border-translucent">
                                                            SERVICE
                                                        </th>
                                                        <th className="sort border-top border-translucent">STATUS</th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="age"
                                                        >
                                                            SESSION NOTE
                                                        </th>
                                                        <th
                                                            className="sort border-top border-translucent desc"
                                                            data-sort="age"
                                                        >
                                                            INFO
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


        </>
    )
}
export default AppoinmentsClient;