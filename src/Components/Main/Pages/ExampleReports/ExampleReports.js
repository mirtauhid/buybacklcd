import React from 'react';
import ReportPdf from '../../../../Images/BB_report.pdf';
import report from '../../../../Images/BB_report.png';
import './ExampleReports.css';

const ExampleReports = () => {
    return (
        <main id="ex-report" >
            <div className="ex-report-wrapper">
                <div className="ex-report-wrapper">
                    <h1 style={{letterSpacing: '2px'}}>EXAMPLE REPORT</h1>
                    <br />
                    <form style={{textAlign: 'center'}} action={ReportPdf}>
                        <input className="btn btn-primary" type="submit" value="Download" />
                    </form>
                    <div className="photo-frame">
                        <img style={{width: '100%'}} src={report} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExampleReports;