import React, {Component} from 'react';
import './Rightbox.css';

class RightBox extends Component {
    constructor(){
        super();
        this.state = {recommendExpand:true,
            contactExpand: true
        }
    }

    changeRecommend(){
        this.setState({recommendExpand : !this.state.recommendExpand})
    }

    changeContact(){
        this.setState({contactExpand : !this.state.contactExpand})
    }

    render() {
        let loginPage;

        if(this.props.location.pathname === "/"){
            this.state.recommendExpand = false;
            this.state.contactExpand = false;

            loginPage =  <div className="right-box">
                                <div className="row">
                                    <div className="col-sm-1" >
                                        <i className="fa fa-caret-right right-box-arrow" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-sm-11">
                                        <h4 className="right-box-content">¿Necesitas Ayuda?</h4>
                                    </div>
                                </div>
                        </div>;
        }


        return (
            <div>
                <div className="right-box">
                    <div className="row" onClick={this.changeRecommend.bind(this)}>
                        <div className="col-sm-1" >
                            <i className="fa fa-caret-down right-box-arrow" aria-hidden="true" style={{display: this.state.recommendExpand? 'block' : 'none'}} ></i>
                            <i className="fa fa-caret-right right-box-arrow" aria-hidden="true" style={{display: this.state.recommendExpand? 'none' : 'block'}}></i>
                        </div>
                        <div className="col-sm-11">
                            <h4 className="right-box-content">Recomendaciones de Seguridad</h4>
                        </div>
                    </div>
                    <div style={{display: this.state.recommendExpand? 'block' : 'none'}} >
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fa fa-lock right-box-lock" aria-hidden="true"></i>
                            </div>
                            <div className="col-sm-11">
                                <h4 className="right-box-content">Estamos comprometidos a mantener tu información financiera segura y protegida.</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-11">
                                <h4 className="right-box-content">Leer más</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {loginPage}
                <div className="right-box">
                    <div className="row">
                        <div className="col-sm-1">
                            <i className="glyphicon glyphicon-map-marker right-box-map" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-11">
                            <h4 className="right-box-content">Sucursales y Cajeros Automáticos</h4>
                        </div>
                    </div>

                </div>
                <div className="right-box" onClick={this.changeContact.bind(this)}>
                    <div className="row">
                        <div className="col-sm-1">
                            <i className="fa fa-caret-down right-box-arrow" aria-hidden="true" style={{display: this.state.contactExpand? 'block' : 'none'}} ></i>
                            <i className="fa fa-caret-right right-box-arrow" aria-hidden="true" style={{display: this.state.contactExpand? 'none' : 'block'}}></i>
                        </div>
                        <div className="col-sm-11">
                            <h4 className="right-box-content">Contáctanos</h4>
                        </div>
                    </div>
                    <div style={{display: this.state.contactExpand? 'block' : 'none'}} >
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="fa fa-home right-box-lock" aria-hidden="true"></i>
                            </div>
                            <ul className="col-sm-11 contact">
                                <li className="right-box-content">Aiara Alexandra Osses Vicencio</li>
                                <li className="right-box-content">OFICINA CENTRO</li>
                                <li className="right-box-content">AIARA.OSSES@SCOTIABANK.CL</li>
                                <li className="right-box-content">+56 60 067 5500</li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                <i className="glyphicon glyphicon-earphone right-box-phone" aria-hidden="true"></i>
                            </div>
                            <div className="col-sm-11">
                                <p className="right-box-content">Llámanos al  600 6 700 500</p>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-sm-1">
                                <i className="fa fa-comment right-box-lock" aria-hidden="true"></i>
                            </div>
                            <div className="col-sm-11">
                                <h4 className="right-box-content">Comentarios Generales</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default RightBox ;

