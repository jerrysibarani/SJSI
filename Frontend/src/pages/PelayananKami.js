import React from "react";
import {Link} from "react-router-dom";
import hukumperusahaan from "../images/hukumperusahaan.jpg";
import hakkekayaanintelektual from "../images/hakkekayaanintelektual.jpg";
import ketenagakerjaan from "../images/ketenagakerjaan.jpg";
import hukumperorangan from "../images/hukumperorangan.jpg";
import penangananutangpiutang from "../images/penangananutangpiutang.jpg";
import hukumpertahanan from "../images/hukumpertahanan.jpg";
import jasahukumlainnya from "../images/jasahukumlainnya.jpg";

const PelayananKami = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <center>
                        <h3>Pelayanan Kami</h3>
                    </center>
                    <p>
                        <div></div>
                        <h5>
                         <b> Hukum Perusahaan :</b>
                        </h5>
                        <img className="img-responsive" src={hukumperusahaan} width={"100%"} height="50%" />
                        {/* <ul>
                        <li>
                        <Link to="/HukumPerusahaan">Lihat Selengkapnya</Link>
                        </li>
                        </ul> */}
                        <p>
                            Pendirian Perusahaan Asing (Penanaman Modal Asing), Pendirian perusahaan umum, (local), RUPS Biasa dan RUPS Luar Biasa, pembelian/akuisisi Perusahaan, merger, legal due diligence (uji tuntas dari segi hukum), jual beli saham, perubahan anggaran dasar Perusahaan,
                            perjanjian kerja sama, draft dan analisa kontrak, restrukturisasi Perusahaan, pengurusan legalitas Perusahan, penutupan & likuidasi Perusahaan, pendampingan Perusahan baik posisinya sebagai Penggugat maupun sebagai Tergugat atau Turut Tergugat, Kepailitan.
                        </p>
                    </p>
                    <p>
                        <div></div>
                        <h5>
                            <b>Hak Kekayaan Intelektual :</b>
                        </h5>
                        <img className="img-responsive" src={hakkekayaanintelektual} width={"100%"} height="50%" />
                        <p>
                            Pendaftaran Merek, Hak Cipta, Desain Industri, Paten Biasa, Paten Sederhana, Rahasia Dagang, penelusuran merek, Desain Industri, Paten Biasa, Paten Sederhana, Rahasia Dagang; Pengurusan perubahan alamat pemilik Merek, Hak Cipta, Desain Industri, Paten Biasa, Paten
                            Sederhana, Rahasia Dagang; Pengalihan Hak Cipta, Desain Industri, Paten Biasa, Paten Sederhana, Rahasia Dagang; Perpanjangan Merek, oposisi, tanggapan, sanggahan, monitoring.
                        </p>
                    </p>
                    <p>
                        <div></div>
                        <h5>
                            <b>Ketenagakerjaan :</b>
                        </h5>
                        <img className="img-responsive" src={ketenagakerjaan} width={"100%"} height="50%" />
                        <p>
                            Penanganan Ketenagakerjaan berdasarkan Undang-Undang Cipta Kerja, Perjanjian Kerja/Kontrak Kerja, Peraturan Perusahaan, Perjanjian Kerja Bersama, pendampingan Bipartit, Tripartit, Wajib Lapor, legalitas tenaga kerja asing, Pemutusan Hubungan Kerja (PHK), Sengketa Hak
                            antara Pengusaha dengan dengan Karyawan, Sengketa Kepentingan dalam Perjanjian Kerja Bersama (PKB), Sengketa di Pengadilan Hubungan Industrial.
                        </p>
                    </p>
                    <p>
                        <div></div>
                        <h5>
                            <b>Hukum Perorangan (Hukum Keluarga) :</b>
                        </h5>
                        <img  className="img-responsive"src={hukumperorangan} width={"100%"} height="50%" />
                        <p>Perjanjian Kawin, Penguruan Perceraian baik sebagai Penggugat maupun Tergugat, Pengurusan Akta Perceraian di Dinas Kependudukan dan Catatan Sipil, Kekerasan Dalam Rumah Tangga (KDRT), Hak Asuh Anak, Harta Bersama, Warisan, Wasiat.</p>
                    </p>
                    <p>
                        <div></div>
                        <h5>
                            <b>Penanganan Utang Piutang :</b>
                        </h5>
                        <img className="img-responsive" src={penangananutangpiutang} width={"100%"} height="50%" />
                        <p>
                            Pengurusan restrukturisasi utang, memberikan Somasi/Surat Peringatan Hukum, melakukan negosiasi & mediasi dengan pihak lawan, Pelaporan Pidana Penipuan/Penggelapan ke Kepolisian, Pengajuan Gugatan Perdata ke Pengadilan Negeri atas utang piutang, Pengajuan Gugatan
                            Kepailitan ke Pengadilan Niaga.
                        </p>
                    </p>
                    <p>
                        <div></div>
                        <h5>
                            <b>Hukum Agraria (Pertanahan) :</b>
                        </h5>
                        <img className="img-responsive" src={hukumpertahanan} width={"100%"} height="50%" />
                        <p>Pengurusan kasus pembebasan tanah, pengurusan peningkatan hak tanah, sengketa jual beli tanah, sewa menyewa tanah dan bangunan, eksekusi jaminan utang.</p>
                    </p>
                    <p>
                        <div>
                        </div>
                        <h5>
                            <b>Jasa Hukum Lainnya</b>
                        </h5>
                        <img className="img-responsive" src={jasahukumlainnya} width={"100%"} height="50%" />
                        <p>Dalam melengkapi jasa hukum kami juga menyediakan berbagai jasa hukum pendukung lainnya, yang meliputi :</p>

                        <p>
                            <b>A. Penelitian/Kajian,</b>analisa terhadap Putusan-Putusan Mahkamah Agung dan/atau Mahkamah Konstitusi, Analisa dan/atau Membuat rancangan Kebijakan, Kajian Hukum untuk mendukung studi kelayakan, Penelitian hukum untuk strategi bisnis, Kajian dampak peraturan
                            perundang-undangan, membuat rancangan Perundang-undangan dan/atau turunannya.
                        </p>
                        <p>
                            <b>B. Pembiayaan dan Perbankan,</b>memberikan pendapat hukum terkait penyelesaian kredit macet, menganalisa jaminan dan membantu bank untuk mengatur skema penyelesaian utang, Penyelesaian sengketa-litigasi maupun non litigasi termasuk mediasi (pendampingan di Pengadilan
                            dan di luar Pengadilan baik posisi sebagai Kreditur maupun Debitur), menyediakan bantuan hukum apabila muncul masalah hukum dan membutuhkan penyelsaian melalui proses litigasi maupun penyelesaian sengketa alternative, pemasalahan fintech.
                        </p>
                        <p>
                            <b>C. Penyelesaian Sengketa,</b>penyelesaian Sengketa Alternatif – Arbitrase, Mediasi dan Negosiasi, Litigasi Umum, Perdata dan Sengketa Perjanjian, Uji Materi.
                        </p>
                        <p>
                            <b>D. Pelatihan Hukum,</b> Pelatihan Hukum kepada Perusahaan dan juga Pelatihan Hukum sesuai kebutuhan yang diperlukan
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(PelayananKami, comparisonFn);
