import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ProductService } from "../service/ProductService";

const OverlayDemo = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [products, setProducts] = useState(null);
    const op = useRef(null);
    const op2 = useRef(null);
    const toast = useRef(null);


    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const basicDialogFooter = <Button type="button" label="Kembali" onClick={() => setDisplayBasic(false)}className="p-button-secondary" />;

    return (
        <>
            <Toast ref={toast} />
            <div className="grid">
                <div className="col-12 lg:col-6">
                    <div className="card p-fluid">
                        <h5><center>HUKUM PERUSAHAAN</center></h5>
                        <Dialog header="HUKUM PERUSAHAAN" visible={displayBasic} style={{ width: "30vw" }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <img src="images/nature/perusahaan.png" alt="Nature" class="responsive" />
                            <p>
                                Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan,
                                perjanjian kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                            </p>
                        </Dialog>
                        <div className="grid">
                            <div className="col-12">
                                <Button type="button" label="Baca Selengkapnya" onClick={() => setDisplayBasic(true)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-12 lg:col-6">
                    <div className="card p-fluid">
                        <h5><center>HUKUM PERUSAHAAN</center></h5>
                        <Dialog header="HUKUM PERUSAHAAN" visible={displayBasic} style={{ width: "30vw" }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <img src="images/nature/perusahaan.png" />
                            <p>
                                Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan,
                                perjanjian kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                            </p>
                        </Dialog>
                        <div className="grid">
                            <div className="col-12">
                                <Button type="button" label="Baca Selengkapnya" onClick={() => setDisplayBasic(true)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-12 lg:col-6">
                    <div className="card p-fluid">
                        <h5><center>HUKUM PERUSAHAAN</center></h5>
                        <Dialog header="HUKUM PERUSAHAAN" visible={displayBasic} style={{ width: "30vw" }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <img src="images/nature/perusahaan.png" />
                            <p>
                                Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan,
                                perjanjian kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                            </p>
                        </Dialog>
                        <div className="grid">
                            <div className="col-12">
                                <Button type="button" label="Baca Selengkapnya" onClick={() => setDisplayBasic(true)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-12 lg:col-6">
                    <div className="card p-fluid">
                        <h5><center>HUKUM PERUSAHAAN</center></h5>
                        <Dialog header="HUKUM PERUSAHAAN" visible={displayBasic} style={{ width: "30vw" }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <img src="images/nature/perusahaan.png" />
                            <p>
                                Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan,
                                perjanjian kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                            </p>
                        </Dialog>
                        <div className="grid">
                            <div className="col-12">
                                <Button type="button" label="Baca Selengkapnya" onClick={() => setDisplayBasic(true)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-12 lg:col-6">
                    <div className="card p-fluid">
                        <h5><center>HUKUM PERUSAHAAN</center></h5>
                        <Dialog header="HUKUM PERUSAHAAN" visible={displayBasic} style={{ width: "30vw" }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <img src="images/nature/perusahaan.png" />
                            <p>
                                Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan,
                                perjanjian kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                            </p>
                        </Dialog>
                        <div className="grid">
                            <div className="col-12">
                                <Button type="button" label="Baca Selengkapnya" onClick={() => setDisplayBasic(true)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-12 lg:col-6">
                    <div className="card p-fluid">
                        <h5><center>HUKUM PERUSAHAAN</center></h5>
                        <Dialog header="HUKUM PERUSAHAAN" visible={displayBasic} style={{ width: "30vw" }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <img src="images/nature/perusahaan.png" />
                            <p>
                                Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan,
                                perjanjian kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                            </p>
                        </Dialog>
                        <div className="grid">
                            <div className="col-12">
                                <Button type="button" label="Baca Selengkapnya" onClick={() => setDisplayBasic(true)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-12 lg:col-6">
                    <div className="card p-fluid">
                        <h5><center>HUKUM PERUSAHAAN</center></h5>
                        <Dialog header="HUKUM PERUSAHAAN" visible={displayBasic} style={{ width: "30vw" }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <img src="images/nature/perusahaan.png" />
                            <p>
                                Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan,
                                perjanjian kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                            </p>
                        </Dialog>
                        <div className="grid">
                            <div className="col-12">
                                <Button type="button" label="Baca Selengkapnya" onClick={() => setDisplayBasic(true)} />
                            </div>
                        </div>
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
