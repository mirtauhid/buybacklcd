import React from 'react';
import './Requirements.css';

const Requirements = () => {
    return (
        <main id="requirements">
            <div className="req-container">
                <div className="req-wrapper">
                    <h1>REQUIREMENTS</h1>
                    <br />
                    <br />
                    <h3>Our costs excl. VAT</h3>
                    <br />
                    <table cellPadding={0} cellSpacing={0}>
                        <tbody><tr>
                            <th>NO of LCDs</th>
                            <th>Test Cost</th>
                            <th>Packaging Cost</th>
                            <th>Shipping Cost</th>
                        </tr>
                            <tr>
                                <td className="name">Sample</td>
                                <td className="company">Sample</td>
                                <td className="phone">Sample</td>
                                <td className="email">Sample</td>
                            </tr>
                            <tr>
                                <td className="name">Sample</td>
                                <td className="company">Sample</td>
                                <td className="phone">Sample</td>
                                <td className="email">Sample</td>
                            </tr>
                            <tr>
                                <td className="name">Sample</td>
                                <td className="company">Sample</td>
                                <td className="phone">Sample</td>
                                <td className="email">Sample</td>
                            </tr>
                            <tr>
                                <td className="name">Sample</td>
                                <td className="company">Sample</td>
                                <td className="phone">Sample</td>
                                <td className="email">Sample</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default Requirements;