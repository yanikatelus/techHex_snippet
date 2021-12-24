import React from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Modal

} from 'react-bootstrap'
import {
    faCalendar,
    faList,
    faUser,
    faClock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CalendarComponent} from '@syncfusion/ej2-react-calendars';
import './Walkin.css';
import moment from 'moment';


var linkSytles = {
    color: "#fff",
    textDecoration: "none"

}

class WalkInScreen extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            status: false,
            isOpen: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleChange(e){
        // this.setState((prevState)) => {
        //     return {
        //         ...prevState,
        //         status: !prevState.status
        //     }
        // }
        this.setState({
            status: true
        });
       
    }

    openModal() {
        this.setState({
            isOpen: true
        });
    }

    closeModal() {
        this.setState({
            isOpen: false
        });
    }

    render() {
        let currTime = moment()

        // var cardClassName =  this.state.status ? 'advisor-card-select' : 'advisor-card';
        // var advisorClassName = this.state.status ?  'advisor-name-select' : 'advisor-name';
        // var durClassName = this.state.status ? 'dur-select' : 'dur';
        // var iconClassName = this.state.status ?'fa-color-select' : 'fa-color';

        let calender = (
            <React.Fragment>
                {/* className="calender" */}
                <div className="walkin-header">
                    <div className="walkin-header-icon">
                        <FontAwesomeIcon icon={faCalendar} color="#0888ff"></FontAwesomeIcon>
                    </div>
                     <h6 className="header-card-title">Date</h6>
                </div>

                <CalendarComponent className="calender"></CalendarComponent>
            </React.Fragment>
        )

        let appointmentReason = (
         <React.Fragment>
             <div className="walkin-header">
             <div className="walkin-header-icon">
                    <FontAwesomeIcon icon={faList} color="#0888ff"></FontAwesomeIcon>
                </div>
                <h6 className="header-card-title">Select Walk-in Reason</h6>
               
             </div> 
           
          <Card className="reason-card">
            <Form className="reason-form">
                 <div className="left">
                    <Form.Check type="checkbox" label="Freshman/Transfer"></Form.Check>
                    <Form.Check type="checkbox" label="Second Year"></Form.Check>
                    <Form.Check type="checkbox" label="Academic Success/Support"></Form.Check>
                    <Form.Check type="checkbox" label="Considering Course Withdrawal"></Form.Check>
                </div>
                  <div className="right">
                    <Form.Check type="checkbox" label="Mid-Degree"></Form.Check>
                    <Form.Check type="checkbox" label="Academic Planning/Registration"></Form.Check>
                    <Form.Check type="checkbox" label="Considering Chang of Major"></Form.Check>
                    <Form.Check type="checkbox" label="Co-op/Internship/Study Abroad"></Form.Check>
                </div>
            </Form>
            </Card>
            </React.Fragment>
        )

        let advisors = (
          <React.Fragment>
               {/* className="advisor-section" */}
                <div className="walkin-header">
                         <div className="walkin-header-icon">
                            <FontAwesomeIcon icon={faUser} color="#0888ff"></FontAwesomeIcon>
                        </div>
                            <h6 className="header-card-title">Select Advisor </h6>
                    </div>
            <Row>
                <Col md={6}>
                   
                 <div className="advisor">
                   <div className="advisor-info">
                       <Card className="advisor-card">
                            <div className="advisor-details">
                                <div className="advisor-img-box">
                                  {/* <img src={Avatar} alt="advisor image"></img> */}
                                  <FontAwesomeIcon icon={faUser} className="fa-color"></FontAwesomeIcon>
                                </div>
                                <div className="advisor-contact-info">
                                  <h6 className="advisor-name">Jennifer Frantz</h6>
                                  <FontAwesomeIcon icon={faClock} color="#0888ff"></FontAwesomeIcon>
                                  <span className="dur">12 min</span>
                                  <Form>
                                    <Form.Check className="choose-advisor" type="checkbox" label="" onChange={this.handleChange}></Form.Check>
                                </Form>
                                </div>
                                
                            </div>
                       </Card>
                 </div>
              </div>

              <div className="advisor">
                   <div className="advisor-info">
                       <Card className="advisor-card">
                            <div className="advisor-details">
                                <div className="advisor-img-box">
                                  {/* <img src={Avatar} alt="advisor image"></img> */}
                                  <FontAwesomeIcon icon={faUser} className="fa-color"></FontAwesomeIcon>
                                </div>
                                <div className="advisor-contact-info">
                                  <h6 className="advisor-name">Meslissa Hanna</h6>
                                  <FontAwesomeIcon icon={faClock} color="#0888ff"></FontAwesomeIcon>
                                  <span className="dur">12 min</span>
                                  <Form>
                                    <Form.Check className="choose-advisor" type="checkbox" label="" onChange={this.handleChange}></Form.Check>
                                </Form>
                                </div>
                                
                            </div>
                       </Card>
                 </div>
              </div>
            </Col>
            <Col md={6}>
            <div className="advisor">
                   <div className="advisor-info">
                       <Card  className="advisor-card">
                            <div className="advisor-details">
                                <div className="advisor-img-box">
                                  {/* <img src={Avatar} alt="advisor image"></img> */}
                                  <FontAwesomeIcon icon={faUser} className="fa-color"></FontAwesomeIcon>
                                </div>
                                <div className="advisor-contact-info">
                                  <h6 className="advisor-name">Betty Hillman</h6>
                                  <FontAwesomeIcon icon={faClock} color="#0888ff"></FontAwesomeIcon>
                                  <span className="dur">12 min</span>
                                  <Form>
                                    <Form.Check className="choose-advisor" type="checkbox" label="" onChange={this.handleChange}></Form.Check>
                                </Form>
                                </div>
                                
                            </div>
                       </Card>
                 </div>
              </div>

              <div className="advisor">
                   <div className="advisor-info">
                       <Card  className="advisor-card">
                            <div className="advisor-details">
                                <div className="advisor-img-box">
                                  {/* <img src={Avatar} alt="advisor image"></img> */}
                                  <FontAwesomeIcon icon={faUser} className="fa-color"></FontAwesomeIcon>
                                </div>
                                <div className="advisor-contact-info">
                                  <h6 className="advisor-name">Melody Klein</h6>
                                  <FontAwesomeIcon icon={faClock} color="#0888ff"></FontAwesomeIcon>
                                  <span className="dur">12 min</span>
                                  <Form>
                                    <Form.Check className="choose-advisor" type="checkbox" label="" onChange={this.handleChange}></Form.Check>
                                </Form>
                                </div>
                                
                            </div>
                       </Card>
                 </div>
              </div>
            </Col>
            <Button onClick={this.openModal} size="lg">Check-in</Button>
          </Row>
         </React.Fragment>
          
        )
        
        return (
           
            <Container>
                <div className="walkin-section">
                {/* <Form>
                   <Row className="mb-3">
                        <Form.Group as={Col} id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Freshman/Transfer"></Form.Check>
                            <Form.Check type="checkbox" label="Second Year"></Form.Check>
                            <Form.Check type="checkbox" label="Academic Success/Support"></Form.Check>
                            <Form.Check type="checkbox" label="Considering Course Withdrawal"></Form.Check>
                        </Form.Group>
                        <Form.Group as={Col} id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Mid-Degree"></Form.Check>
                            <Form.Check type="checkbox" label="Academic Planning/Registration"></Form.Check>
                            <Form.Check type="checkbox" label="Considering Chang of Major"></Form.Check>
                            <Form.Check type="checkbox" label="Co-op/Internship/Study Abroad"></Form.Check>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <CalendarComponent></CalendarComponent>
                        </Form.Group>
                   </Row>
                   <Row>
                       <Form.Group as={Col} id="formGridCheckbox">
                           <Card>
                                <Form.Check className="check-form" type="checkbox" label="Jennifer Frantz"></Form.Check>
                            </Card>
                            <Card>
                                <Form.Check className="check-form" type="checkbox" label="Meslissa Hanna"></Form.Check>
                            </Card>
                       </Form.Group>
                       <Form.Group as={Col} id="formGridCheckbox">
                           <Card>
                            <Form.Check className="check-form" type="checkbox" label="Melody Klein"></Form.Check>
                            </Card>
                            <Card>
                                <Form.Check className="check-form" type="checkbox" label="Betty Hillman"></Form.Check>
                           </Card>
                       </Form.Group>
                       
                   </Row>
               </Form> */}
                <Row>
                    <Col md={3}>
                        {calender}
                    </Col>
                    <Col md={9}>
                         {appointmentReason}
                    </Col>
                </Row>
                <div className="walkin-availability">
                        {advisors}
                </div> 
                </div>
                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                <Modal.Header closeButton>
                                        <Modal.Title>All Set</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Appointment Scheduled at {currTime.format("hh:mm")}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={this.closeModal}>
                                        <a style={linkSytles} href="/">End</a></Button>
                                </Modal.Footer>
                            </Modal>
            </Container>
        );

    }
}

export default WalkInScreen;
