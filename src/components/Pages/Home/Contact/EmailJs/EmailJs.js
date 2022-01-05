import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './EmailJs.css';
import TextField from '@mui/material/TextField';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('tonmoyTalukderPortfolio', 'template_hrct93w', e.target, 'user_9DXt402nj8SuhnT0EdU5l')
      .then((result) => {
          alert("Successfully Email Sent")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
            <div className="">
                <div className="" style={{marginBottom: "3%"}}>
                        <TextField
                            id="filled-multiline-flexible"
                            label="Name"
                            multiline
                            maxRows={4}
                            // value={value}
                            // onChange={handleChange}
                            variant="filled"
                            className="inputStyle"
                            style={{width: '50vw', height: '5vh', marginTop: '10px'}} type="text" className="formStyle"  name="name" required
                        />
                    {/* <input style={{width: '50vw', height: '5vh', marginTop: '10px'}} type="text" className="formStyle" placeholder="Name" name="name" required/> */}
                </div>
                <div className="" style={{marginBottom: "3%"}}>
                        <TextField
                            id="filled-multiline-flexible"
                            label="Email"
                            multiline
                            maxRows={4}
                            // value={value}
                            // onChange={handleChange}
                            variant="filled"
                            style={{width: '50vw', height: '5vh', marginTop: '10px'}} type="email" className="" placeholder="Email Address" name="email" required
                        />
                    {/* <input style={{width: '50vw', height: '5vh', marginTop: '10px'}} type="email" className="" placeholder="Email Address" name="email" required/> */}
                </div>
                <div className="" style={{marginBottom: "3%"}}>
                        <TextField
                            id="filled-multiline-flexible"
                            label="Subject"
                            multiline
                            maxRows={4}
                            // value={value}
                            // onChange={handleChange}
                            variant="filled"
                            style={{width: '50vw', height: '5vh', marginTop: '10px'}} type="text" className="" placeholder="Subject" name="subject"
                        />
                    {/* <input style={{width: '50vw', height: '5vh', marginTop: '10px'}} type="text" className="" placeholder="Subject" name="subject"/> */}
                </div>
                <div className="" style={{marginBottom: "10%"}}>
                    <TextField
                        id="filled-multiline-static"
                        label="Your message"
                        multiline
                        rows={2}
                        // defaultValue="Default Value"
                        variant="filled"
                        style={{width: '50vw', height: '5vh', marginTop: '10px'}} className="" id="" cols="30" rows="8" placeholder="Your message" name="message" required
                    />
                    {/* <textarea style={{width: '50vw', height: '5vh', marginTop: '10px'}} className="" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea> */}
                </div>
                <div className=""  style={{marginTop: "190px"}}>
                    <input type="submit" style={{backgroundColor:'gray', color: 'white', padding: '10px', borderRadius: '4px', marginBottom: ''}} value="Send Message"></input>
                </div>
        </div>
    </form>
  );
};