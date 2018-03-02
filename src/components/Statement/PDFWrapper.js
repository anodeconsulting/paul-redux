import React,{Component} from 'react';
import myPdf from '../../assets/pdf/statement022016.pdf';
import PDF from 'react-pdf-js-infinite';

class PDFWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1
        };
    }

    onDocumentLoad({numPages}) {
        this.setState({numPages});
    }

    render() {
        let module = null;
        if(myPdf){
          module = 
          
            <PDF file={myPdf} scale={1.5} />
         
        }else{
            "File Not Exists"
        }
        const {pageNumber, numPages} = this.setState;
        return (
          <div>
            <section>{module}</section>
        </div>
        );
    }
}

export default PDFWrapper;