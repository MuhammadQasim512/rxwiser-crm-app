import React, { useState } from 'react';

const AddNewModal = () => {
  // Modal ki visibility ko manage karne ke liye useState hook ka use
  const [showModal, setShowModal] = useState(false);

  // Modal ko toggle karne ke liye function
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Button jo modal ko open karega */}
      <button type="button" className="btn btn-primary" onClick={toggleModal}>
        Add New
      </button>

      {/* Modal ka code */}
      {showModal && (
        <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '600px', width: '100%' }}>
            <div className="modal-content bg-body-highlight">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New</h5>
                <button className="btn btn-close p-1" type="button" onClick={toggleModal} aria-label="Close"></button>
              </div>

              <div className="modal-body" style={{ padding: '16px', backgroundColor: '#fff' }}>
                <div className="row">
                  <div className="col-md-4">
                    <h5 className="modal-title md-top" id="exampleModalLabel">Profile Type</h5>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {/* Client Switch */}
                      <div className="col-md-4 col-6 mt10">
                        <div className="form-group">
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="switchClient" checked />
                            <label className="d-inline ml10 form-control-label form-check-label" htmlFor="switchClient">
                              <span style={{ fontSize: '14px' }}>Client</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Other switches */}
                      {/* ... (same structure for other switches) */}
                    </div>
                  </div>
                </div>

                {/* Form fields */}
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
                {/* Other form fields */}
                {/* ... (same structure for other fields like Last Name, Mobile Number, etc.) */}
              </div>

              <div className="border-wrapper" style={{ backgroundColor: '#fff' }}>
                <div className="modal-footer">
                  <button id="savenewclient" className="btn btn-success shadow validate-form save" type="button">
                    <i className="fa fa-check"></i> Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewModal;
