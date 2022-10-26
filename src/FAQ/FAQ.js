import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
const FAQ = () => {
    return (
        <div>
            <h3 className='pb-2'>Frequently Asked Questions</h3>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What is node? How it works?</Accordion.Header>
        <Accordion.Body>
        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
        <br></br>
        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. what is cors?</Accordion.Header>
        <Accordion.Body>
        CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
        <br></br>
1. Scale across multiple databases: With Firebase Realtime Database on the Blaze pricing plan, you can support your app's data needs at scale by splitting your data across multiple database instances in the same Firebase project. Streamline authentication with Firebase Authentication on your project and authenticate users across your database instances. Control access to the data in each database with custom Firebase Realtime Database Rules for each database instance.
<br></br>
2. Accessible from Client Devices: The Firebase Realtime Database can be accessed directly from a mobile device or web browser; there’s no need for an application server. Security and data validation are available through the Firebase Realtime Database Security Rules, expression-based rules that are executed when data is read or written.
<br></br>
3. Realtime: Instead of typical HTTP requests, the Firebase Realtime Database uses data synchronization—every time data changes, any connected device receives that update within milliseconds. Provide collaborative and immersive experiences without thinking about networking code.
<br></br>
4. Offline: Firebase apps remain responsive while offline.

<br ></br>
5 Common Authentication Types
<br></br>
Password-based authentication. 
<br></br>
Multi-factor authentication.
<br></br>
Certificate-based authentication.
<br></br>
Biometric authentication.
<br></br>
Token-based authentication.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4. How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default FAQ;