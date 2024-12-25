import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const AddContact = () => {
    const [modal, setModal] = useState(true);
    const navigate = useNavigate(); // Initialize navigate
    const toggle = () => setModal(!modal);

    // Handle the Next button click to navigate to the profile page
    const handleNext = () => {
        // Close the modal
        setModal(false);
        // Navigate to the profile page
        navigate('/profile');
    };

    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> Add New</ModalHeader>
                <ModalBody>
                    <div
                        className="modal-body"
                        style={{ padding: "50px !important", backgroundColor: "#fff" }}
                    >
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="modal-title md-top" id="exampleModalLabel">
                                    Profile Type
                                </h5>
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    {/* Client Switch */}
                                    <div className="col-md-4 col-6 mt10">
                                        <div className="form-group">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switchClient"
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
                                    {/* Shared Switch */}
                                    <div className="col-md-4 col-6 mt10">
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
                                                    <span style={{ fontSize: 14 }}>Shared</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Contact Switch */}
                                    <div className="col-md-4 col-6 mt10">
                                        <div className="form-group">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switchContact"
                                                />
                                                <label
                                                    className="d-inline ml10 form-control-label form-check-label"
                                                    htmlFor="switchContact"
                                                >
                                                    <span style={{ fontSize: 14 }}>Contact</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Referrer Switch */}
                                    <div className="col-md-4 col-6 mt10">
                                        <div className="form-group">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switchReferrer"
                                                />
                                                <label
                                                    className="d-inline ml10 form-control-label form-check-label"
                                                    htmlFor="switchReferrer"
                                                >
                                                    <span style={{ fontSize: 14 }}>Referrer</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Third Party Switch */}
                                    <div className="col-md-4 col-6 mt10">
                                        <div className="form-group">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="switchThirdParty"
                                                />
                                                <label
                                                    className="d-inline ml10 form-control-label form-check-label"
                                                    htmlFor="switchThirdParty"
                                                >
                                                    <span style={{ fontSize: 14 }}>Third Party</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="row align-items-center g-3 mt-2">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <label className="lb">Name</label>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-8">
                                <input className="form-control" type="text" placeholder="First Name" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <input className="form-control" type="text" placeholder="Middle" />
                            </div>
                        </div>
                        <div className="row align-items-center g-3 mt-1">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <label className="lb">Last Name</label>
                            </div>
                            <div className="col-lg-8 col-md-4 col-sm-8">
                                <input className="form-control" type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="row align-items-center g-3 mt-1">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <label className="lb">Mobile Number</label>
                            </div>
                            <div className="col-lg-8 col-md-4 col-sm-8">
                                <input
                                    className="form-control"
                                    type="number"
                                    placeholder="Mobile Number"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center g-3 mt-1">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <label className="lb">Email</label>
                            </div>
                            <div className="col-lg-8 col-md-4 col-sm-8">
                                <input className="form-control" type="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row align-items-center g-3 mt-1">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <label className="lb">Primary practitioner</label>
                            </div>
                            <div className="col-lg-8 col-md-4 col-sm-8">
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    style={{ fontSize: 12, color: "#707f94" }}
                                >
                                    <option selected="selected" value="">
                                        Select option
                                    </option>
                                    <option value="Mr">Mr</option>
                                    <option value="Ms">Ms</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Footer with Next button */}
                    <div className="border-wrapper" style={{ backgroundColor: "#fff" }}>
                        <div className="modal-footer">
                            <button
                                id="savenewclient"
                                className="btn btn-success shadow validate-form save"
                                type="button"
                                onClick={handleNext} // Call handleNext on click
                            >
                                <i className="fa fa-check" /> Next
                            </button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};

export default AddContact;
