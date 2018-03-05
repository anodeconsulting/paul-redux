import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from './events'
import moment from 'moment';
import './react-big-calendar.css';
import './Calendar.css';
import {Tab, Tabs} from "react-tabs";
import TabList from "react-tabs/esm/components/TabList";
import TabPanel from "react-tabs/esm/components/TabPanel";


BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);


let Calendar = () => (

    <div className="calendar-border" >
        <div>
            <h2 className="account-title"> Transacciones Programadas</h2>
        </div>
        <div>
            <select placeholder="select" className="calendar-select  form-control">
                <option value="Todos los Productos">Todos los Productos</option>
                <option value="Cuenta Corriente *** 0001">Cuenta Corriente *** 0001</option>
                <option value="Cuenta de Ahorro *** 0002">Cuenta de Ahorro *** 0002</option>
                <option value="Cuenta Vista *** 0003">Cuenta Vista *** 0003</option>
                <option value="Tarjeta Joven *** 0004">Tarjeta Joven *** 0004</option>
            </select>
            <FormControl value={this.state.value} className="col-sm-9 inputWidth" componentClass="select" placeholder="select" onChange={this.onChange.bind(this)}>
                {options.map(option => {
                    return <option value={option} key={option} >{option}</option>
                })}

            </FormControl>
        </div>

        <div className="tab-container">
            <Tabs defaultIndex={1}>
                <TabList>
                    <Tab><i className="fa fa-bars"></i></Tab>
                    <Tab><i className="fa ">&#xf073;</i></Tab>
                </TabList>

                <TabPanel>This is tab B</TabPanel>
                <TabPanel>
                    <div className="calendar">
                    <BigCalendar
                    events={events}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(2018, 2, 1)}
                    onSelectEvent={(event: Object, e: SyntheticEvent) => {console.log("haha");alert("you are dead")}}
                    />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    </div>

);

export default Calendar