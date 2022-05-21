import React from "react";
import hukumperusahaan from "../images/hukumperusahaan.jpg";

const HukumPerusahaan = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <center>
                        <h3>Hukum Perusahaan</h3>
                    </center>
                    <div>
                        <img src={hukumperusahaan} width="193" height={100} />
                    </div>
                    <p>
                        Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan, perjanjian
                        kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                    </p>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(HukumPerusahaan, comparisonFn);
