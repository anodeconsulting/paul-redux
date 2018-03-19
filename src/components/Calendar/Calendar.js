import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import events from './events'
import moment from 'moment';
import './react-big-calendar.css';
import './Calendar.css';
import {Tab, Tabs} from "react-tabs";
import TabList from "react-tabs/esm/components/TabList";
import TabPanel from "react-tabs/esm/components/TabPanel";
import TableCalendar from "../Table/TableCalendar";
import CustomEvent from "./CustomEvent";
import { FormattedMessage } from 'react-intl';

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
let tableItems = [{"de":"Cuenta Corriente *** 0002","transaction_id":877932002,"posted_date":"2017-05-31","original_date":"2017-05-31","description":"PAGO DIV. HIPOTEC. POR WEB","transaction_amount":{"currency_code":"CLP","amount":-258046},"running_balance":{"currency_code":"CLP","amount":2483367.96},"id":1,"dataSaldo":2483367.96,"dataMonto":-258046},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877931988,"posted_date":"2017-05-31","original_date":"2017-05-31","description":"PAGO DIV. HIPOTEC. POR WEB","transaction_amount":{"currency_code":"CLP","amount":-258046},"running_balance":{"currency_code":"CLP","amount":2741413.96},"id":2,"dataSaldo":2741413.96,"dataMonto":-258046},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877931974,"posted_date":"2017-05-31","original_date":"2017-05-31","description":"TRANSF. A CTA.CTE POR WEB","transaction_recipient":"973033220 ","transaction_type":"TPTON","transaction_amount":{"currency_code":"CLP","amount":-111},"running_balance":{"currency_code":"CLP","amount":2999459.96},"id":3,"dataSaldo":2999459.96,"dataMonto":-111},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877931973,"posted_date":"2017-05-31","original_date":"2017-05-31","description":"TEF bco consorcio","transaction_recipient":"12","transaction_type":"TPTOFF","transaction_amount":{"currency_code":"CLP","amount":-222},"running_balance":{"currency_code":"CLP","amount":2999570.96},"id":4,"dataSaldo":2999570.96,"dataMonto":-222},
    {"posted_date":"2017-05-31","original_date":"2017-05-30","description":"TEF bco consorcio","transaction_amount":{"currency_code":"CLP","amount":-89},"running_balance":{"currency_code":"CLP","amount":2999792.96},"id":5,"dataSaldo":2999792.96,"dataMonto":-89},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854559,"posted_date":"2017-05-30","original_date":"2017-05-29","description":"TEF bco consorcio","transaction_amount":{"currency_code":"CLP","amount":-88},"running_balance":{"currency_code":"CLP","amount":2999881.96},"id":6,"dataSaldo":2999881.96,"dataMonto":-88},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854556,"posted_date":"2017-05-29","original_date":"2017-05-29","description":"ABONO A L.CREDITO POR WEB","transaction_recipient":"710000435748 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":-10},"running_balance":{"currency_code":"CLP","amount":2999969.96},"id":7,"dataSaldo":2999969.96,"dataMonto":-10},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854545,"posted_date":"2017-05-29","original_date":"2017-05-29","description":"ABONO A L.CREDITO POR WEB","transaction_recipient":"710000435748 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":-10},"running_balance":{"currency_code":"CLP","amount":2999979.96},"id":8,"dataSaldo":2999979.96,"dataMonto":-10},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854520,"posted_date":"2017-05-29","original_date":"2017-05-29","description":"TEF bco consorcio","transaction_amount":{"currency_code":"CLP","amount":-10},"running_balance":{"currency_code":"CLP","amount":2999989.96},"id":9,"dataSaldo":2999989.96,"dataMonto":-10},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854486,"posted_date":"2017-05-29","original_date":"2017-05-29","description":"TRANSF. DE T.JOVEN POR WEB","transaction_recipient":"782190105 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":3000000},"running_balance":{"currency_code":"CLP","amount":2999999.96},"id":10,"dataSaldo":2999999.96,"dataMonto":3000000},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854484,"posted_date":"2017-05-29","original_date":"2017-05-29","description":"TRANSF. A T.JOVEN POR WEB","transaction_recipient":"310001707530 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":-3342990},"running_balance":{"currency_code":"CLP","amount":-0.04},"id":11,"dataSaldo":-0.04,"dataMonto":-3342990},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854478,"posted_date":"2017-05-29","original_date":"2017-05-29","description":"TRANSF. A cta cte","transaction_recipient":"000973033220 ","transaction_type":"TPTON","transaction_amount":{"currency_code":"CLP","amount":-9},"running_balance":{"currency_code":"CLP","amount":3342989.96},"id":12,"dataSaldo":3342989.96,"dataMonto":-9},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854356,"posted_date":"2017-05-29","original_date":"2017-05-29","description":"TRANSF. A CTA.CTE POR WEB","transaction_recipient":"973033220 ","transaction_type":"TPTON","transaction_amount":{"currency_code":"CLP","amount":-11},"running_balance":{"currency_code":"CLP","amount":3342998.96},"id":13,"dataSaldo":3342998.96,"dataMonto":-11},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877854355,"posted_date":"2017-05-29","original_date":"2017-05-29","description":"TRANSF. A CTA.CTE POR WEB","transaction_recipient":"973033220 ","transaction_type":"TPTON","transaction_amount":{"currency_code":"CLP","amount":-111},"running_balance":{"currency_code":"CLP","amount":3343009.96},"id":14,"dataSaldo":3343009.96,"dataMonto":-111},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877822971,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"TRANSF. A cta cte","transaction_recipient":"000973033220 ","transaction_type":"TPTON","transaction_amount":{"currency_code":"CLP","amount":-111},"running_balance":{"currency_code":"CLP","amount":3343120.96},"id":15,"dataSaldo":3343120.96,"dataMonto":-111},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877822933,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"TRANSF. DE T.JOVEN POR WEB","transaction_recipient":"782190105 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":3400000},"running_balance":{"currency_code":"CLP","amount":3343231.96},"id":16,"dataSaldo":3343231.96,"dataMonto":3400000},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877822873,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"TRANSF. A T.JOVEN POR WEB","transaction_recipient":"310001707530 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":-14000},"running_balance":{"currency_code":"CLP","amount":-56768.04},"id":17,"dataSaldo":-56768.04,"dataMonto":-14000},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877822860,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"TRANSF. DE T.JOVEN POR WEB","transaction_recipient":"782190105 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":27000},"running_balance":{"currency_code":"CLP","amount":-42768.04},"id":18,"dataSaldo":-42768.04,"dataMonto":27000},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877822838,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"TRANSF. A cta cte","transaction_recipient":"000973033220 ","transaction_type":"TPTON","transaction_amount":{"currency_code":"CLP","amount":-13000},"running_balance":{"currency_code":"CLP","amount":-69768.04},"id":19,"dataSaldo":-69768.04,"dataMonto":-13000},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877822837,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"TRANSF. A T.JOVEN POR WEB","transaction_recipient":"310001707530 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":-2000000},"running_balance":{"currency_code":"CLP","amount":-56768.04},"id":20,"dataSaldo":-56768.04,"dataMonto":-2000000},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877822819,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"TRANSF. DE T.JOVEN POR WEB","transaction_recipient":"782190105 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":2000000},"running_balance":{"currency_code":"CLP","amount":1943231.96},"id":21,"dataSaldo":1943231.96,"dataMonto":2000000},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877822817,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"TRANSF. A T.JOVEN POR WEB","transaction_recipient":"310001707530 ","transaction_type":"FUNDTRANSFER","transaction_amount":{"currency_code":"CLP","amount":-3458845},"running_balance":{"currency_code":"CLP","amount":-56768.04},"id":22,"dataSaldo":-56768.04,"dataMonto":-3458845},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877823111,"posted_date":"2017-05-26","original_date":"2017-05-26","description":"PAGO CUOTA 001 DE 710052544480","transaction_amount":{"currency_code":"CLP","amount":-56768},"running_balance":{"currency_code":"CLP","amount":3402076.96},"id":23,"dataSaldo":3402076.96,"dataMonto":-56768},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877791140,"posted_date":"2017-05-26","original_date":"2017-05-25","description":"TEF cta vista ob datapower","transaction_amount":{"currency_code":"CLP","amount":-222},"running_balance":{"currency_code":"CLP","amount":3458844.96},"id":24,"dataSaldo":3458844.96,"dataMonto":-222},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877790846,"posted_date":"2017-05-26","original_date":"2017-05-25","description":"TEF bco consorcio","transaction_amount":{"currency_code":"CLP","amount":-111},"running_balance":{"currency_code":"CLP","amount":3459066.96},"id":25,"dataSaldo":3459066.96,"dataMonto":-111},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877790758,"posted_date":"2017-05-26","original_date":"2017-05-25","description":"TEF bco consorcio","transaction_amount":{"currency_code":"CLP","amount":-100},"running_balance":{"currency_code":"CLP","amount":3459177.96},"id":26,"dataSaldo":3459177.96,"dataMonto":-100},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877790717,"posted_date":"2017-05-26","original_date":"2017-05-25","description":"TEF bco consorcio","transaction_amount":{"currency_code":"CLP","amount":-100},"running_balance":{"currency_code":"CLP","amount":3459277.96},"id":27,"dataSaldo":3459277.96,"dataMonto":-100},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877790565,"posted_date":"2017-05-26","original_date":"2017-05-25","description":"TEF cta vista ob datapower","transaction_amount":{"currency_code":"CLP","amount":-51},"running_balance":{"currency_code":"CLP","amount":3459377.96},"id":28,"dataSaldo":3459377.96,"dataMonto":-51},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877790369,"posted_date":"2017-05-26","original_date":"2017-05-25","description":"TEF bco consorcio","transaction_amount":{"currency_code":"CLP","amount":-111},"running_balance":{"currency_code":"CLP","amount":3459428.96},"id":29,"dataSaldo":3459428.96,"dataMonto":-111},
    {"de":"Cuenta Corriente *** 0002","transaction_id":877790279,"posted_date":"2017-05-26","original_date":"2017-05-25","description":"TEF bco consorcio","transaction_amount":{"currency_code":"CLP","amount":-100},"running_balance":{"currency_code":"CLP","amount":3459539.96},"id":30,"dataSaldo":3459539.96,"dataMonto":-100}];
// let Calendar2 = () => (
//
//     <div className="calendar-border" >
//         <div>
//             <h2 className="account-title"> Transacciones Programadas</h2>
//         </div>
//         <div>
//             <select placeholder="select" className="calendar-select form-control">
//                 <option value="Todos los Productos">Todos los Productos</option>
//                 <option value="Cuenta Corriente *** 0001">Cuenta Corriente *** 0001</option>
//                 <option value="Cuenta de Ahorro *** 0002">Cuenta de Ahorro *** 0002</option>
//                 <option value="Cuenta Vista *** 0003">Cuenta Vista *** 0003</option>
//                 <option value="Tarjeta Joven *** 0004">Tarjeta Joven *** 0004</option>
//             </select>
//         </div>
//
//         <div className="tab-container">
//             <Tabs defaultIndex={1}>
//                 <TabList>
//                     <Tab><i className="fa fa-bars"></i></Tab>
//                     <Tab><i className="fa ">&#xf073;</i></Tab>
//                 </TabList>
//
//                 <TabPanel>
//                     <div className="table-calendar">
//                         <TableCalendar items={tableItems}/>
//                     </div>
//                 </TabPanel>
//                 <TabPanel>
//                     <div className="calendar">
//                     <BigCalendar
//                     events={events}
//                     views={allViews}
//                     step={60}
//                     showMultiDayTimes
//                     defaultDate={new Date()}
//                     onSelectEvent={(event, e) => {console.log(event);console.log(this)}}
//                     />
//                     </div>
//                 </TabPanel>
//             </Tabs>
//         </div>
//     </div>
//
// );

// export default Calendar


class Calendar extends Component {
    constructor(){
        super();

    }

    clickhandler(event){
        let node = document.getElementsByClassName("rbc-event")[0];
        node.setAttribute("data-toggle", "tooltip");
        node.setAttribute("data-placement", "top");
        console.log(event)
        console.log(node)
    }


    render(){

        return (
        <div className="calendar-border" >
            <div>
                <h2 className="account-title"> <FormattedMessage id='calendar.title' /></h2>
            </div>
            <div>
                <select placeholder="select" className="calendar-select form-control">
                    <option value="Todos los Productos">Todos los Productos</option>
                    <option value="Cuenta Corriente *** 0001">Cuenta Corriente *** 0001</option>
                    <option value="Cuenta de Ahorro *** 0002">Cuenta de Ahorro *** 0002</option>
                    <option value="Cuenta Vista *** 0003">Cuenta Vista *** 0003</option>
                    <option value="Tarjeta Joven *** 0004">Tarjeta Joven *** 0004</option>
                </select>
            </div>

            <div className="tab-container">
                <Tabs defaultIndex={1}>
                    <TabList>
                        <Tab><i className="fa fa-bars"></i></Tab>
                        <Tab><i className="fa ">&#xf073;</i></Tab>
                    </TabList>

                    <TabPanel>
                        <div className="table-calendar">
                            <TableCalendar items={tableItems}/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="calendar">
                            <BigCalendar
                                components={{event:CustomEvent}}
                                events={events}
                                // views={allViews}
                                views={['month', 'day']}
                                step={60}
                                showMultiDayTimes
                                defaultDate={new Date()}
                            />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
        )
    }

}
export default Calendar