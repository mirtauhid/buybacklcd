import React from 'react';
import './PackagingTips.css';

const PackagingTips = () => {
    return (
        <main id="packaging">
            <div className="packaging-wrapper">
                <h1>LCD Packaging Instruction</h1>
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
                                        <p>
                                            Insert all LCDs into bubble wrap bags. Ensure the flex cables are not bent.
                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Wrap stacks of five LCDs with a rubber band.
                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Place a layer of filler inside the box, making sure to cover the sides.
                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Lay your stacks of LCDs with the flex cables facing inward (towards the middle of the box).
                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Stuff filler into any gaps
                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Add a few layers of filler on top to fill the box.
                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Lay your packaging slip inside.
                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Before sealing the box, close the lid and give it a hard shake. If you notice anything moving around, add more filler.
                            </p>
                                    </li>
                                    <li>
                                        <p>
                                            Before sealing the box, close the lid and give it a hard shake. If you notice anything moving around, add more filler.
                            </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div id="tab-body-2" className="tab-body">
                            <div className="methodTwo">
                                <h3>Packing without Bubble Bag</h3>
                                <br />
                                <ol>
                                    <li><p>
                                        Lay a sheet of bubble wrap down and place two LCDs face down two inches from the edge. Make sure the flex cables are not bent and facing inward.
                        </p></li>
                                    <li><p>
                                        Fold the extra two inches of bubble wrap over the screens.
                        </p></li>
                                    <li><p>
                                        Fold once and add LCDs face down on top.
                        </p></li>
                                    <li><p>
                                        Continue until you have a total of 10 LCDs (5 LCDs on each side). It''s not recommended to wrap more than 10 LCDs due to a higher possibility of being damaged while in transit.
                        </p></li>
                                    <li><p>
                                        Wrap at least two layers of additional bubble wrap around the collection of LCDs. Secure the collection with a rubber band on each side.
                        </p></li>
                                    <li><p>
                                        Place a layer of filler inside the box, making sure to cover the sides. Examples: paper, packing peanuts, newspaper, bubble wrap, etc.
                        </p></li>
                                    <li><p>
                                        Lay your collection of LCDs towards the middle of the box (away from the sides).
                        </p></li>
                                    <li><p>
                                        Stuff filler into any gaps. Examples: paper, packing peanuts, newspaper, bubble wrap, etc.
                        </p></li>
                                    <li><p>
                                        Add a few layers of filler on top to fill the box. Examples: paper, packing peanuts, newspaper, bubble wrap, etc.
                        </p></li>
                                    <li><p>
                                        For tracking purposes, lay your packaging slip inside.
                        </p></li>
                                    <li><p>
                                        Before sealing the box, close the lid and give it a hard shake. If you notice anything moving around, add more filler.
                        </p></li>
                                    <li><p>
                                        Close the lid and secure with packing tape. It is good practice to tape the edges. Don't forget to put the shipping label on the box!
                        </p></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PackagingTips;