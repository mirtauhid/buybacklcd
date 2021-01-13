import React from 'react';
import { default as report, default as ReportPdf } from '../../../../Images/blank report.jpg';
import './ExampleReports.css';

const ExampleReports = () => {
    return (
        <main id="ex-report" >
            <div className="ex-report-wrapper">
                <div className="ex-report-wrapper">
                    <div className="header-banner-er">
                        <h1 >EXAMPLE REPORT</h1>
                    </div>
                    <br />
                    <form style={{ textAlign: 'center', marginTop:'30px' }} action={ReportPdf}>
                        <input className="btn btn-primary" type="submit" value="Download" />
                    </form>
                    <div className="photo-frame">
                        <img style={{ width: '60vw', height: '50vw' }} src={report} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExampleReports;