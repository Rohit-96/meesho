import logo from './logo.svg';
import './App.css';
import './index.css'
import { 
  Button, Card, CardBody, CardHeader, CardFooter, CardImg, Modal, ModalHeader, ModalBody, ModalFooter, Navbar,
} from 'reactstrap';
import QRCode from 'qrcode.react';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function BestPerformer() {
    // const websiteUrl = 'https://www.google.com';

    const handleCopyToClipboard = async()=> {
        let text = document.getElementById("content").innerText
        try {
        await navigator.clipboard.writeText(text);
        alert("copied to clipboard")
        } catch (error) {
        console.error('Error copying text to clipboard:', error);
        }
    }

  return (
    <div>

      <Card style={{backgroundColor: "#F8E8EE"}}>
        <CardHeader style={{minHeight: "15vh"}} className='App'>
          <CardImg
            style={{height: "80px", width: "100px", marginTop: "35px"}}
            // alt=
            src = "../images/meesho_logo.png"
            layout="fill"
            top
          />
        </CardHeader>
        <hr style={{width: "100%", color: "white"}}/>

        <CardBody style={{minHeight: "78vh", marginLeft: "30px", marginTop: "50px", marginRight: "30px"}}>

            <div style={{display:"flex"}}>
                <div>
                    <h2>Guidelines for posting on Linkedin</h2>
                    {/* <ol style={{lineHeight: "35px"}}> */}
                        <p>1. Copy the text by clicking on "Copy to Clipboard."</p>
                        <p>2. Select "Share on LinkedIn"</p>
                        <p>3. Choose "Share in a post"</p>
                        <p>4. Paste the copied text and make any desired edits</p>
                        <p>5. Finally, click on "Post" to share your content.</p>
                    {/* </ol> */}
                </div>

                {/* <div style={{marginLeft: "60%"}}>
                  <Button style={{height: "40px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: "#34495e", border: "none", borderRadius: "5px"}}>
                    <Link style={{textDecoration: "none", color: "white"}} to="/backtooffice">Back to Office Page</Link>
                  </Button>
                </div> */}

                {/* <div style={{marginLeft: "30%"}}>
                    <h1>Generate QR Code for My Webpage</h1>
                    <QRCode value={websiteUrl} />
                </div> */}
            </div>

          <div style={{marginTop: "20px"}}>
            <Button 
              style={{marginRight: "20px", height: "40px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: "#566573", border: "none", borderRadius: "5px", color: "white"}}
              onClick={handleCopyToClipboard}
            >
              Copy to Clipboard
            </Button>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A//printo-cloudinary.mobimedia.ai/dxivtqnri/image/upload/c_fill%2Cf_auto%2Cg_auto%2Cw_640/v1676229010/New-B2B-Home-Page/New-October-2022/Joining_Kits_OP-1_1.jpg"
            target='_blank'
            >
              <Button 
                style={{height: "40px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: " #1d7adc", border: "none", borderRadius: "5px", color: "white"}}
              >
                Share on LinkedIn
              </Button>
            </a>
          </div>

          <div style={{marginTop: "70px"}}>
            <h3>Text that will be copied</h3>
            <p id='content' style={{marginLeft: "10px"}}>Thrilled to share that our awesome team just won the "Star Team of the Quarter" as part of Panchayat Quarterly Awards at @Meesho!<br /><br />
              Huge shoutout to every team member for their incredible dedication, collaboration, and hard work. <br /><br />
              Let's continue to conquer new milestones together! <br /><br />
              #LifeAtMeesho #PanchayatJFM2023
            </p> <br />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default BestPerformer;
