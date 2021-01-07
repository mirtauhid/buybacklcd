import React from 'react';
import './QAndD.css';

const QAndD = () => {
    return (
        <section id="quality-section">
            <div className="row qd-wrapper">
                <div className="heading-part">
                    <h1>Quality definitions of broken LCDs</h1>
                </div>
                <div className="col-md-6 ab-part">
                    <h3>A / B Quality</h3>
                    <br />
                    <p>No or small imperfections on the LCD or backlight. This includes:
                    - 1 to 2 dots (dead pixels).
                    - Slight signs of aging (red screen or yellow border).
                    - Light burn-in.
                      Touch must function properly.</p>
                </div>
                <div className="col-md-6 c-part">
                    <h3>C Quality</h3>
                    <br />
                    <p>LCD still works, but has more than 2 minor imperfections.
                        This includes: more than 2 dead pixels, light water damage and pressure damage (yellow spot / line under the crack).</p>
                </div>
            </div>

        </section>
    );
};

export default QAndD;