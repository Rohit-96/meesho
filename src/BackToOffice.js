import logo from './logo.svg';
import './App.css';
import { Button, Card, CardBody, CardHeader, CardFooter, CardImg } from 'reactstrap';
import QRCode from 'qrcode.react';


function BackToOffice() {
    const websiteUrl = 'https://www.google.com';

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
            style={{height: "80px", width: "100px", marginLeft: "49px", marginTop: "35px"}}
            // alt=
            src = "../images/meesho_logo.png"
            layout="fill"
            top
            />
        </CardHeader>
        <hr style={{width: "100%", color: "white"}}/>

        <CardBody style={{minHeight: "78vh", marginLeft: "100px", marginTop: "50px"}}>
            <div style={{display:"flex"}}>
                <div>
                    <h2>Guidelines for posting on Linkedin</h2>
                    <ol style={{lineHeight: "35px"}}>
                        <li>Copy the text by clicking on "Copy to Clipboard."</li>
                        <li>Select "Share on LinkedIn"</li>
                        <li>Choose "Share in a post"</li>
                        <li>Paste the copied text and make any desired edits</li>
                        <li>Finally, click on "Post" to share your content.</li>
                    </ol>
                </div>

                {/* <div style={{marginLeft: "30%"}}>
                    <h1>Generate QR Code for My Webpage</h1>
                    <QRCode value={websiteUrl} />
                </div> */}
            </div>

          <div style={{marginTop: "20px", marginLeft: "20px"}}>
            <Button 
              style={{marginRight: "20px", height: "40px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: "#9ff111", border: "none", borderRadius: "5px"}}
              onClick={handleCopyToClipboard}
            >
              Copy to Clipboard
            </Button>
            <a href="https://www.linkedin.com/sharing/share-offsite/"
            target='_blank'
            >
              <Button 
                style={{height: "40px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: " #1d7adc", border: "none", borderRadius: "5px", color: "white"}}
              >
                Share on LinkedIn
              </Button>
            </a>
          </div>

          <div style={{marginLeft: "10px", marginTop: "70px"}}>
            <h3 style={{marginLeft: "10px"}}>Text that will be coppied</h3>
            <p id='content' style={{marginLeft: "10px"}}>The past week at @meesho has been filled with joyful reunions, catching up on stories, and embracing the sense of togetherness that we've missed!<br /><br />
              Exciting times as we all finally return to the office! <br /><br />
              #LifeAtMeesho #BacktoOffice
            </p> <br />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default BackToOffice;
