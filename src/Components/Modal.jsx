import React from 'react'
import ReactModal from 'react-modal'
import { Twitter, Facebook, Linkedin, Whatsapp } from 'react-social-sharing'
import ShareBtn from './../resources/sharebtn.png'

export default class ExampleApp extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };


    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <img id="share-btn" className={/CriOS/i.test(navigator.userAgent) &&
                /iphone|ipod|ipad/i.test(navigator.userAgent) ? "share-btn-ip" : "share-btn"} src={ShareBtn} onClick={this.handleOpenModal} alt="share"/>
                

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(253, 242, 209, 0.45)'
                        },
                        content: {
                            position: 'absolute',
                            textAlign:'center',
                            display:'flex',
                            flexDirection:'column',
                            top: '10px',
                            left: '15px',
                            right: '15px',
                            bottom: '10px',
                            border: '0px solid #ccc',
                            background: 'transparent',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                        }
                    
                    
                    }}
                >

                <button style={{marginLeft:'auto',marginRight:'5%',width:'30px',backgroundColor:'white',border:'0px'}} onClick={this.handleCloseModal}>X</button>
                <div className="modal-container">
                    <h1 style={{textAlign:'center',color:'white'}}>Share!</h1>
                    <Twitter link="https://whattookyousolong.com/experience" />
                    <Facebook link="https://whattookyousolong.com/experience" />
                    <Whatsapp link="https://whattookyousolong.com/experience" />
                    <Linkedin link="https://whattookyousolong.com/experience" />
                </div>

                </ReactModal>
            </div>
        );
    }
}
