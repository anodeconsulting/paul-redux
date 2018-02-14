import React, {Component} from 'react';
import './Rightbox.css';

class RightBox extends Component {
    render() {
        return (
            <div>
                <div className="right-box">
                    <i className="fa fa-caret-right right-box-arrow" aria-hidden="true"></i>
                    <h4 className="right-box-content">Recomendaciones de Seguridad</h4>
                </div>
                <div className="right-box">
                    <i className="fa fa-caret-right right-box-arrow" aria-hidden="true"></i>
                    <h4 className="right-box-content">¿Necesitas Ayuda?</h4>
                </div>
                <div className="right-box">
                    <i className="fa fa-caret-right right-box-arrow" aria-hidden="true"></i>
                    <h4 className="right-box-content">Sucursales y Cajeros Automáticos</h4>
                </div>
                <div className="right-box">
                    <i className="fa fa-caret-right right-box-arrow" aria-hidden="true"></i>
                    <h4 className="right-box-content">Contáctanos</h4>
                </div>
            </div>
        );
    }
}



export default RightBox ;