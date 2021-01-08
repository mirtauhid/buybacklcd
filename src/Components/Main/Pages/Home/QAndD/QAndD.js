import React from 'react';
import './QAndD.css';

const QAndD = () => {
    return (
        <section id="quality-section">
            <div className="row qd-wrapper">
                <div className="heading-part">
                    <h1>How We Classify LCDs</h1>
                </div>
                <div className="col-md-6 ab-part">
                    <h3>A / B Category</h3>
                    <br />
                    <p>Absolutely no damage or little amount of damage in LCD or Backlight which satisfies:
                    - 1 to 2 dots (dead pixels).
                    - Slight signs of aging (red screen or yellow border).
                    - Light burn-in.
                      Touch must function properly.</p>
                </div>
                <div className="col-md-6 c-part">
                    <h3>C Category</h3>
                    <br />
                    <p>Working LCD but have more than two minor issues.
                        Like more than 2 dead pixels, light water damage and pressure damage (yellow spot / line under the crack).</p>
                </div>
            </div>

        </section>
    );
};

export default QAndD;