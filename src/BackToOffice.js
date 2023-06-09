import logo from './logo.svg';
import './App.css';
import { Button, Card, CardBody, CardHeader, CardFooter, CardImg } from 'reactstrap';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

function BackToOffice() {
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
            style={{height: "80px", width: "90px", marginTop: "35px"}}
            // alt=
            src = "../images/meesho_logo.png"
            layout="fill"
            top
            />
        </CardHeader>
        <hr style={{width: "100%", color: "white"}}/>

        <CardBody style={{minHeight: "78vh", marginLeft: "30px", marginTop: "50px", marginRight: "30px"}}>

            <div style={{display:"flex"}}>
                <div className='guidelines'>
                    <h2>Guidelines for posting on Linkedin</h2>
                    {/* <ol style={{lineHeight: "35px"}}> */}
                        <p>Copy the text by clicking on "Copy to Clipboard."</p>
                        <p>Select "Share on LinkedIn"</p>
                        <p>Choose "Share in a post"</p>
                        <p>Paste the copied text and make any desired edits</p>
                        <p>Finally, click on "Post" to share your content.</p>
                    {/* </ol> */}
                </div>

                {/* <div style={{marginLeft:"60%"}}>
                    <Button style={{height: "40px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: "#34495e", border: "none", borderRadius: "5px"}}>
                        <Link style={{textDecoration: "none", color: "white"}} to="/">Best Performer Page</Link>
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

          <div style={{marginTop: "70px"}}>
            <h3>Text that will be copied</h3>
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
