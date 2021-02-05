import React from 'react';
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
                    <h1>Verpackungstipps</h1>
                </div>
                <br />
                <br />
                <div className="methodOne">
                    <ol>
                        <li>
                            <div className="article d-flex flex-row justify-space-between">
                                <div>
                                    <img style={{ width: '100px', height: '100px' }} src={one} alt="" />
                                </div>
                                <div>
                                    <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                        Versuchen Sie jedes einzelne LCD in eine Luftpolsterfolie zu verpacken



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
                                        Die Flex-Kabel weisen dabei in Richtung des offenen Endes der Luftpolstertasche


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
                                        Nehmen Sie Sets von jeweils 10 Displays und binden Sie ein Gummiband darum. Achten Sie darauf, dass das Gummiband nicht zu straff sitzt, damit die Displays nicht beschädigt werden.
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
                                        Legen Sie die Sets danach auf eine Schicht aus zerknülltem Papier in den Transportkarton und füllen Sie den Karton an den Seiten und oben mit zerknülltem Papier, um ein Verrutschen des Inhalts zu verhindern.
                                            </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 style={{ fontWeight: "500" }} className="text-center">Standardregeln bezüglich dem Verpacken der LCDS</h1>
                <br/>
                <div className="methodTwo text-left">
                    <ol>
                        <li>
                            <div className="article d-flex flex-row justify-space-between">
                                <div>
                                    <img style={{ width: '100px', height: '100px' }} src={one} alt="" />
                                </div>
                                <div>
                                    <p style={{ color: '#616160' }} className="pt-0 pl-4 fs-4">
                                        Vor dem Zukleben des Kartons: Schließen Sie den Deckel und schütteln Sie den Karton fünf Sekunden lang. Wenn Sie fühlen, dass der Inhalt verrutscht, befüllen Sie den Karton mit zusätzlichem Verpackungsmaterial.



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
                                        Wählen Sie einen Karton, der zur Menge der Displays passt, die Sie versenden möchten. Überprüfen Sie bei wiederverwendeten Kartons, ob diese stabil genug und unbeschädigt sind.


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
                                        Wir empfehlen nachdrücklich, nicht mehr als 350–400 LCDs bzw. max. 15,5 kg in einem Karton zu versenden. Vergewissern Sie sich, dass der Karton das zugelassene Maximalgewicht nicht übersteigt.
                                    <br />
                                    <br/>
                                    Wenn auf allen Seiten des Kartons deutlich und in Großbuchstaben „ZERBRECHLICH – GLAS“ vermerkt ist, behandelt der Spediteur das Paket vorsichtiger.
                                            </p>
                                </div>
                            </div>
                        </li>
                        <li>
                        </li>
                    </ol>
                </div>
            </div>
        </main >
    );
};

export default PackagingTips;