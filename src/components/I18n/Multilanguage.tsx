// import * as React from "react";
// import t from './language';
// import { MultilanguageState } from './MultilanguageState';
// import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// // import { Label } from 'office-ui-fabric-react/lib/Label';
// // import { Icon } from 'office-ui-fabric-react/lib/Icon';
// // import {
// //   PivotItem,
// //   IPivotItemProps,
// //   Pivot
// // } from 'office-ui-fabric-react/lib/Pivot';

// export interface MultilanguageProps { compiler: string; framework: string; }

// // 'MultilanguageProps' describes the shape of props.
// // State is never set so we use the 'undefined' type.
// export class Multilanguage extends React.Component<MultilanguageProps, MultilanguageState> {

//     public constructor(props: MultilanguageProps, state: MultilanguageState) {
//         super(props);

//         this.state = {
//             status: '',
//             currentLanguage: 0,
//         };

//         //this._getErrorMessage = this._getErrorMessage.bind(this);
//     }

//     public async componentWillMount() {
//         console.log("componentWillMount!!");
//         // get favorite language
//         let favoriteLanguage = 'en'; //this.getUrlQueryString('SPLanguage');
//         if (favoriteLanguage.search(/en/i) > -1) {
//             this.setState({
//                 currentLanguage: 0
//             });
//         } else {
//             this.setState({
//                 currentLanguage: 1
//             });
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <FormGroup controlId="formControlsSelect">
//                     <FormControl componentClass="select" placeholder="select">
//                         <option value="select">select</option>
//                         <option value="other">...</option>
//                     </FormControl>
//                 </FormGroup>
//                 <h1>{t[this.state.currentLanguage].welcome} {this.props.compiler} {this.props.framework} App!</h1>
//                 <h2>{t[this.state.currentLanguage].description}</h2>
//             </div>
//         );
//     }

//     public onLinkClick(item: PivotItem): void {
//         console.log(item.props.linkText);
//         let languageSelected = 0;
//         switch (item.props.itemKey) {
//             case "de":
//                 languageSelected = 1;
//                 break;
//             case "it":
//                 languageSelected = 2;
//                 break;
//             case "es":
//                 languageSelected = 3;
//                 break;
//         }
//         this.setState({
//             currentLanguage: languageSelected
//         })
//     }
// }