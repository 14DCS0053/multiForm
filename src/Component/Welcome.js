import React from 'react';
var detail = { name: "Deepika", l_name: "Patel", email: "abc@gmail.com", city: "Delhi", country: "India" }
function Welcome() {
    return (<div className="Content">
        <h1>My Account</h1>
        <h3>
            Firstname:<span>{detail.name}</span><br />
           Lastname:<span>{detail.l_name}</span><br />
           Email:<span>{detail.email}</span><br />
           City:<span>{detail.city}</span><br />
           Country:<span>{detail.country}</span><br />
        </h3>
    </div>)
}
export default Welcome;
