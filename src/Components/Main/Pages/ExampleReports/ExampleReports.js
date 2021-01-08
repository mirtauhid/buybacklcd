import React from 'react';
import { default as report, default as ReportPdf } from '../../../../Images/blank report.jpg';
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
                        <img style={{width: '60vw', height: '50vw'}} src={report} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExampleReports;