import React, {Component} from 'react'
import './Footer.css';

class Footer extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="footer">
                 <div className='address'>
                    <h6 className="address_title">Our Address:</h6>
                    <p className="address_name">
                        101/23, Beverly Hills,
                        Los Angeles County,
                        California
                    </p>
                    <p className="zip_code">
                        Zip Code: 90209–90213
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;