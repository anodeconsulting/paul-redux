import React, {Component} from 'react';
import './Transaction.css';
import { Button, Alert } from 'react-bootstrap';
import button1 from '../../assets/images/button1.png';
import Table from "../Table/Table";
import RightBox from "../Rightbox/Rightbox";
import TopBox from "../Topbox/Topbox";

class PayTransaction extends Component {
     //Constructor 
     constructor(props) {
        super(props);
        // Assign state itself, and a default value for items
        this.state = {
            show: true
        };
        this.handleDismiss = this.handleDismiss.bind(this);
    }

    handleDismiss(){
      this.setState({ show: false });
    }

    render() {
      let moduleAlert = null;
      if (this.state.show) {
         moduleAlert = 
         <div >
                    <Alert bsStyle="success" onDismiss={this.handleDismiss}>
                        <span className="alert-icon"></span>
                        <h4>¡Realizado!</h4>
                        <p>
                        Tu Inversión Nro 8997 por $ 1.000.000 fue tomado con éxito el día 17/01/2017 a la(s) 3:20 PM. 
                        Recibirás un comprobante de aporte firmado en forma física o electrónica, 
                        al domicilio o correo electrónico registrado, dentro de los próximos 30 días.         
                        </p>  
                        <p className="pushMid">
                          <Button bsStyle="default">Nueva Inversión</Button>
                          <Button bsStyle="default">Imprimir</Button>
                          <Button bsStyle="default">Descargar</Button>
                        </p>                     
                    </Alert>
        </div>
      }
        return (
          <div>
            {moduleAlert}
            <section>           
        <div className="pushBottom">
          {/* for topbox */}
          <TopBox/>
        </div>
        <div className="row main2">
          <div className="col-md-9 pushRight">
            <div>
            <div className="RUIFW-row mrgn-btm-10 row">
                        <div className="RUIFW-col-6 col-sm-6">
                            <h5 className="mrgn-btm-5 mrgn-top-5">Mis Destinatarios  (2)</h5>
                        </div>
                        <div className="RUIFW-col-6 txt-right col-sm-6">
                            <span><img width="70" src={button1} alt="scotia button1" /></span>   
                        </div>
                    </div><br />
              <div id="Body">  
                {/* react bootstrap table */}
                <Table items={this.state.items}/>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            {/* for right box */}
            <RightBox location = {this.props.location}/>
          </div>
        </div>       
    </section>
    </div>
        );
    }
}

export default PayTransaction;