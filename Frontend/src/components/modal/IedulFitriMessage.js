import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";

const OverlayDemo = () => {
    const [displayBasic, setDisplayBasic] = useState(false);

    useEffect(() => {
        setDisplayBasic(true);
    }, []);

    return (
        <>
            <div >
                <div >
                    <div>
                        <Dialog header="" visible={displayBasic} style={{ width: 800, height: 600 }} onHide={() => setDisplayBasic(false)}>
                            <img src="images/nature/gambar.png" />
                            <p>
                                <h5>
                                    <center>Semoga Allah melimpahkan hidup kita dengan berkah dan kasih-Nya.</center>
                                </h5>
                            </p>
                            <p>
                                <h5>
                                    <center>Kami ucapkan selamat hari raya Idul Fitri kepada Anda dan keluarga.</center>
                                </h5>
                            </p>
                        </Dialog>
                    </div>
                </div>
            </div>
        </>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(OverlayDemo, comparisonFn);
