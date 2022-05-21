import React from "react";

const Kontak = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h3>Kontak</h3>
                    <p>
                        <b>Frederick Duma & Partners Advocates & Legal Consultants</b>
                    </p>
                    <p>Serpong Paradise City, Cluster Voyage P 17/6, Tangerang Selatan</p>
                    <p>Tlp. 0812-9728-6545, 0812-8064-8537</p>
                    <p>Email : frederickdumalawoffice@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Kontak, comparisonFn);
