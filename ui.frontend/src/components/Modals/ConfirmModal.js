import React, { Component } from "react";
require("./confirm-modal.css");

class ConfirmModal extends Component {
  closeModal = () => {
    // alert("close")
    document.getElementById("mcontainer").style.display = "none";
    var c = this.props.openConfirmModal;
    console.log(this.props.openConfirmModal);

  };

  render() {
    document.addEventListener("mouseup", function (e) {
      // alert("MUO")
      document.getElementById("mcontainer").style.display = "none";
      // this.props.openConfirmModal
    });
    return (
      <div>
        <div className="modal-container" id="mcontainer">
          <div>
            <div className="title-container">
              <h2 className="title">Delete</h2>

              {/* <h4 className="close-btn" onClick={this.closeModal}>Close</h4> */}
              <h4 className="close-btn" onClick={this.closeModal}>
                Close
              </h4>
            </div>
            <div>
              <hr
                style={{
                  background: "black",
                  color: "black",
                  borderColor: "black",
                  height: "2px",
                }}
              />
            </div>
          </div>
          <div style={{ padding: "10px" }}>
            <p>Are You Sure to Delete?</p>
          </div>
          <div>
            <hr
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "1px",
              }}
            />
          </div>
          <div className="decision-btn-contsiner">
            <button className="btn btn-danger dbtn">Delete</button>
            <button
              onClick={this.closeModal}
              className="btn btn-secondary dbtn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmModal;
