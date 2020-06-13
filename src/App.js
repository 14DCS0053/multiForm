import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

function Steps({ stepComplete }) {

  return (<div className="steps">
    <div className={`step ${stepComplete >= 1 ? 'complete' : ''}`}>1</div>
    <div className={`line ${stepComplete >= 1 ? 'complete' : ''}`}></div>
    <div className={`step ${stepComplete >= 2 ? 'complete' : ''}`}>2</div>
    <div className={`line ${stepComplete >= 2 ? 'complete' : ''}`}></div>
    <div className={`step ${stepComplete >= 3 ? 'complete' : ''}`}>3</div>
    <div className={`line ${stepComplete >= 3 ? 'complete' : ''}`}></div>
    <div className={`step ${stepComplete >= 4 ? 'complete' : ''}`}>4</div>
    <div className={`line ${stepComplete >= 4 ? 'complete' : ''}`}></div>
    <div className={`step ${stepComplete >= 5 ? 'complete' : ''}`}>5</div>
    <div className={`line ${stepComplete >= 5 ? 'complete' : ''}`}></div>
    <div className={`step ${stepComplete >= 6 ? 'complete' : ''}`}>6</div>
  </div>)

}

function Form1({ data, changeValue }) {
  const { fname, lname } = data;
  return (<div className="form-grup">

    <div className="form-feild">
      <label for="fname">First Name</label>
      <input type="text" id="fname" placeholder="First Name" value={fname} onChange={(e) => { changeValue('step1', 'fname', e.target.value) }} />
    </div>
    <div className="form-feild">
      <label for="lname">Last Name</label>
      <input type="text" id="lname" placeholder="Last Name" value={lname} onChange={(e) => { changeValue('step1', 'lname', e.target.value) }} />
    </div>
  </div>)
}
function Form2({ data, changeValue }) {
  const { email, phone } = data;
  return (<div className="form-grup">

    <div className="form-feild">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => { changeValue('step2', 'email', e.target.value) }} />
    </div>
    <div className="form-feild">
      <label for="phone">Phone</label>
      <input type="text" id="phone" placeholder="Phone" value={phone} onChange={(e) => { changeValue('step2', 'phone', e.target.value) }} />
    </div>
  </div>)
}
function Form3({ data, changeValue }) {
  const { laddress, paddress } = data;
  return (<div className="form-grup">

    <div className="form-feild">
      <label for="laddress">Local Address</label>
      <input type="text" id="laddress" placeholder="Local Address" value={laddress} onChange={(e) => { changeValue('step3', 'laddress', e.target.value) }} />
    </div>
    <div className="form-feild">
      <label for="paddress">Parmanent Address</label>
      <input type="text" id="paddress" placeholder="Parmanent Address" value={paddress} onChange={(e) => { changeValue('step3', 'paddress', e.target.value) }} />
    </div>
  </div>)
}
function Form4({ data, changeValue }) {
  const { school, schoolper } = data;
  return (<div className="form-grup">

    <div className="form-feild">
      <label for="school">School Name</label>
      <input type="text" id="school" placeholder="School Name" value={school} onChange={(e) => { changeValue('step4', 'school', e.target.value) }} />
    </div>
    <div className="form-feild">
      <label for="schoolper">Percetage in school</label>
      <input type="number" id="schoolper" placeholder="Percetage in school" value={schoolper} onChange={(e) => { changeValue('step4', 'schoolper', e.target.value) }} />
    </div>
  </div>)
}
function Form5({ data, changeValue }) {
  const { college, collegeper } = data;
  return (<div className="form-grup">

    <div className="form-feild">
      <label for="college">College Name</label>
      <input type="text" id="college" placeholder="College Name" value={college} onChange={(e) => { changeValue('step5', 'college', e.target.value) }} />
    </div>
    <div className="form-feild">
      <label for="collegeper">Percentage in college</label>
      <input type="number" id="collegeper" placeholder="Percentage in college" value={collegeper} onChange={(e) => { changeValue('step5', 'collegeper', e.target.value) }} />
    </div>
  </div>)
}
function Form6({ data, changeValue }) {
  const { react, node } = data;
  return (<div className="form-grup">

    <div className="form-feild">
      <label for="react">Experiance in ReactJs in year</label>
      <input type="number" id="react" placeholder="Experiance in ReactJs in year" onChange={(e) => { changeValue('step6', 'react', e.target.value) }} />
    </div>
    <div className="form-feild">
      <label for="node">Experiance in NodeJs in year</label>
      <input type="number" id="node" placeholder="Experiance in NodeJs in year" onChange={(e) => { changeValue('step6', 'node', e.target.value) }} />
    </div>
  </div>)
}
function Result({ formData }) {
  return (<div className="Result">
    <div className="r-group">
      <div className="key">First Name</div>
      <div className="value">{formData.step1.fname}</div>
    </div>
    <div className="r-group">
      <div className="key">Last Name</div>
      <div className="value">{formData.step1.lname}</div>
    </div>
    <div className="r-group">
      <div className="key">Email</div>
      <div className="value">{formData.step2.email}</div>
    </div>
    <div className="r-group">
      <div className="key">Phone no</div>
      <div className="value">{formData.step2.phone}</div>
    </div>
    <div className="r-group">
      <div className="key">Local Address</div>
      <div className="value">{formData.step3.laddress}</div>
    </div>
    <div className="r-group">
      <div className="key">Parmanent Address</div>
      <div className="value">{formData.step3.paddress}</div>
    </div>
    <div className="r-group">
      <div className="key">School name</div>
      <div className="value">{formData.step4.school}</div>
    </div>
    <div className="r-group">
      <div className="key">Percentage in school</div>
      <div className="value">{formData.step4.schoolper}%</div>
    </div>
    <div className="r-group">
      <div className="key">College name</div>
      <div className="value">{formData.step5.college}</div>
    </div>
    <div className="r-group">
      <div className="key">Percentage in college</div>
      <div className="value">{formData.step5.collegeper}%</div>
    </div>
    <div className="r-group">
      <div className="key">Experiance in ReactJs</div>
      <div className="value">{formData.step6.react}Yr</div>
    </div>
    <div className="r-group">
      <div className="key">Experiance in NodeJs</div>
      <div className="value">{formData.step6.node}Yr</div>
    </div>
  </div>)
}
class App extends Component {

  changeValue = (step, field, value) => {
    this.props.changeValue({ step, field, value })
  }
  getFormByStep = step => {
    console.log(this.props.formData, 'formdata');
    const { step1, step2, step3, step4, step5, step6 } = this.props.formData;
    const { currentStep } = this.props;
    switch (currentStep) {
      case 1: return <Form1 changeValue={this.changeValue} data={step1} />
      case 2: return <Form2 changeValue={this.changeValue} data={step2} />
      case 3: return <Form3 changeValue={this.changeValue} data={step3} />
      case 4: return <Form4 changeValue={this.changeValue} data={step4} />
      case 5: return <Form5 changeValue={this.changeValue} data={step5} />
      case 6: return <Form6 changeValue={this.changeValue} data={step6} />
    }
  }
  render() {
    const { next, previous, currentStep, stepComplete, submit, formComplete, formData } = this.props;
    return (
      <div>
        {!formComplete && <h3 style={{ fontWeight: "normal", textAlign: "center" }}><b>Note:</b>Blue circle shows that user has visted atleast one time on that particular form not the current form</h3>}
        {!formComplete && <div className="main-container">
          <Steps stepComplete={stepComplete} />
          <div className="form-box">{this.getFormByStep()}
            <div className="button-area">
              {currentStep > 1 && <button className="previous" onClick={previous}>PREVIOUS</button>}
              {currentStep < 6 && <button className="next" onClick={next}>NEXT</button>}
              {currentStep == 6 && <button className="next" onClick={submit}>Submit</button>}
            </div>
          </div>
        </div> || <Result formData={formData} />}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { formData, currentStep, stepComplete, formComplete } = state;
  return { formData, currentStep, stepComplete, formComplete };
};
const mapDispatchToProps = dispatch => {
  return {
    next: () => dispatch({ type: 'NEXT' }),
    previous: () => dispatch({ type: 'PREVIOUS' }),
    changeValue: (payload) => dispatch({ type: 'CHANGE_VALUE', payload }),
    submit: () => dispatch({ type: 'SUBMIT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
