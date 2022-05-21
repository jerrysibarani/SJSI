import React from "react";
import home from "../images/home.jpg";
// import styled from "styled-components";




const EmptyPage = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h2>
                        <center>
                            FREDERICK DUMA & PARTNERS<p>ADVOCATES & LEGAL CONSULTANTS</p>{" "}
                        </center>
                    </h2>

                    <div >
                        {/* styled={{padding: 6, height: 10, Width: 100 }} */}
                        <img src={home} alt="home" width={"100%"} height="100%"  />
                    </div>
                    <p>
                        <h7>
                            adalah sebuah kantor hukum dan konsultan hukum yang didirikan dan berkedudukan di Tangerang Selatan untuk memberikan jasa pelayanan hukum kepada masyarakat maupun badan hukum , baik yang bersifat litigasi maupun non litigasi kepada klien secara cepat, tanggap, praktis
                            serta efisien yang menekankan pada etos kerja yang tinggi, profesionalitas, integritas dan bertanggung jawab. Prinsip utama kami adalah menjaga kepercayaan dan kepuasan klien. Kami berkomitmen untuk selalu siap mendedikasikan diri dalam membantu siapapun yang mencari
                            keadilan baik indvidu maupun badan hukum serta mempertahankan hak-hak serta kepentingan hukumnya selaku pemberi kuasa sebagaimana dengan Undang-undang Nomor 18 Tahun 2003 tentang Advokat.

                        </h7>
                    </p>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(EmptyPage, comparisonFn);
