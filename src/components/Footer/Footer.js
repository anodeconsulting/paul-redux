import React, {Component} from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
      return (
        <footer className="RUIFW-page-footer noprint main-footer">
          <div className="footerWrap">Infórmese sobre el límite de garantía estatal a los depósitos en su banco o en <a href="/"> www.sbif.cl </a></div>
          <div className="RUIFW-row noprint row-margin row row">
              <ul className="RUIFW-nav-footer RUIFW-col-6 col-sm-6 col-sm-6">
                  <li><a href="javascript:undefined;">Privacidad</a></li>
                  <li className="separator">&nbsp;</li>
                  <li><a href="javascript:undefined;">Seguridad</a></li>
                  <li className="separator">&nbsp;</li>
                  <li><a href="javascript:undefined;">Canales de Atención</a></li>
              </ul>
              <ul className=" RUIFW-nav-footer RUIFW-col-6 col-sm-6 col-sm-6 text-right">
                  <li className="copyright">©<script type="text/javascript">document.write(new Date().getFullYear());</script>2018 Scotiabank Todos los derechos reservados</li>
              </ul>
          </div>

        </footer>
      );
    }
  }
  
  export default Footer;