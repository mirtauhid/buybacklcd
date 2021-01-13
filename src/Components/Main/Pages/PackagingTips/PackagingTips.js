import React from 'react';
import newTwo from '../../../../Images/Buyback_Verpakkingstip2.png';
import newThree from '../../../../Images/Buyback_Verpakkingstip3.png';
import newFour from '../../../../Images/Buyback_Verpakkingstip4.png';
import newFive from '../../../../Images/Buyback_Verpakkingstip5.png';
import two from '../../../../Images/number (1).png';
import three from '../../../../Images/number (2).png';
import four from '../../../../Images/number (3).png';
import one from '../../../../Images/number.png';
import './PackagingTips.css';

const PackagingTips = () => {
    return (
        <main id="packaging">
            <div className="packaging-wrapper">
                <div className="packaging-heading">
                    <h1>LCD Packaging Instruction</h1>
                </div>
                <br />
                <br />
                <div className="tabs-wrapper">
                    <input type="radio" name="tab" id="tab1" className="tab-head1" defaultChecked="checked" />
                    <label htmlFor="tab1">PACKING WITH BUBBLE BAG</label>
                    <input type="radio" name="tab" id="tab2" className="tab-head2" />
                    <label htmlFor="tab2">PACKING WITHOUT BUBBLE BAG</label>
                    <div className="tab-body-wrapper">
                        <div id="tab-body-1" className="tab-body">
                            <div className="methodOne">
                                <h3>Packing with Bubble Bag</h3>
                                <br />
                                <ol>
                                    <li>
                                        <div className="article d-flex flex-row justify-space-between">
                                            <div>
                                                <img style={{ width: '100px', height: '100px' }} src={one} alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                                    It is best to use the air cushion bags in which your LCD screens are supplied. The steps for shipping are almost the same as the non-bubble bag method.

                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="article d-flex flex-row justify-space-between">
                                            <div>
                                                <img style={{ width: '100px', height: '100px' }} src={two} alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                                    Place the broken LCD screens in bubble bags with the flex cables facing the open side of the bag.
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="article d-flex flex-row justify-space-between">
                                            <div>
                                                <img style={{ width: '100px', height: '100px' }} src={three} alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                                    Make sets of 10 screens and hold the sets together with an elastic band. Make sure the elastic is not so tight that it can damage the screens.
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="article d-flex flex-row justify-space-between">
                                            <div>
                                                <img style={{ width: '100px', height: '100px' }} src={four} alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                                    Place the sets in the shipping box on a layer of paper plugs and also fill the sides and top of the box with paper plugs to prevent the contents from moving.
                                            </p>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div id="tab-body-2" className="tab-body">
                            <div className="methodTwo">
                                <h3>Packing without Bubble Bag</h3>
                                <br />
                                <ol>
                                    <li>
                                        <div className="article d-flex flex-row justify-space-between">

                                        </div>
                                    </li>
                                    <li>
                                        <img style={{ width: '100px', height: '100px' }} src={newTwo} alt="" />
                                        <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                            Place two sets of 2 pieces back to back (back-to-back)

                                            </p>
                                    </li>
                                    <li>
                                        <img style={{ width: '100px', height: '100px' }} src={newThree} alt="" />
                                        <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                            Make a stack of five pairs of LCD screens (so a total of 10 screens). Wrap each stack in bubble wrap.
                                            Seal the bubble wrap with tape so that it does not open during shipping. Fill the box with packaging chips; these act as shock absorbers.
                                            </p>
                                    </li>
                                    <li>
                                        <img style={{ width: '100px', height: '100px' }} src={newFour} alt="" />
                                        <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                            Place the bubble wrap sets in the packaging chips, ensuring that the sets are surrounded by the packaging chips. If you want to send multiple layer sets, protect the layers eg with a padded envelope so that the sets cannot move.

                                            </p>
                                    </li>
                                    <li>
                                        <img style={{ width: '100px', height: '100px' }} src={newFive} alt="" />
                                        <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                            Apply packaging chips around the packed LCD screens and along the inner sides of the box. This prevents slipping and minimizes the risk of damage. Seal the box tightly with tape so that it does not open accidentally.


                                            </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default PackagingTips;