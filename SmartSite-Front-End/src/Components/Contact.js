import React , {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import InstagramIcon from '@material-ui/icons/Instagram';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import "./RateusComp.css"

function RateusComp() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <div>
        <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active href="/rateus" >Contact Us</Breadcrumb.Item>
            </Breadcrumb>
        <div className="contacttt">
          <div className="contactt">
            <h5>Contact Us </h5>
            <div>
              <div className="personall">
                        <PhoneIcon color="primary" />
                        <h6>+14 65558555</h6>
              </div>
              <div className="personall">
                   <EmailIcon color="secondary" />
                  <h6>we5plusu@gmail.com</h6>
              </div>
              <div className="personall">
                  <InstagramIcon style={{color : "#C13584"}}/>
                  <h6>shyam._.sundar</h6>
              </div>
              <div className="personall">
                  <InstagramIcon style={{color : "#C13584"}}/>
                  <h6>ramprakash_1024</h6>
              </div>
              <div className="personall">
                  <LinkedInIcon color="primary" />
                  <h6 style={{marginBottom : "40px"}}>Shyam Sundar B</h6>
              </div>
              <div className="personall">
                  <LinkedInIcon color="primary" />
                  <h6 style={{marginBottom : "40px"}}>Ramprakash N</h6>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }

export default RateusComp;
