<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Index extends BaseController
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('M_pmb', 'm_pmb');
    }

    public function index()
    {
        $data['title'] = 'Dashboard';
        $this->render('index/index', $data);
    }

    public function pendaftarprodi1()
    {
        $data['title'] = 'Grafik Berdasarkan Prodi 1';
        $prodi = $this->m_pmb->listProdi();
        foreach ($prodi as $key => $p1) {
            $prodi[$key]['jumlah'] = $this->m_pmb->jumlahPendaftarProdi1($p1['id_prodi']);
            $prodi[$key]['size'] = rand(10, 30);
        }

        //grafik pertama
        $result = null;
        foreach ($prodi as $p1 => $prod) {
            $result[$p1] = [
                "name"  => $prod['nama_prodi'],
                "jumlah" => $prod['jumlah'],
                "y"     => $prod['size'],
                // "sliced" => $sliced,
                // 'selected' => $selected
            ];
        }

        $data['pendaftar'] = $prodi;
        $data['grafik1'] = json_encode($result);
        $this->render('index/grafik_satu', $data);
    }

    public function pendaftarprodi2()
    {
        $data['title'] = 'Grafik Berdasarkan Prodi 2';
        $prodi = $this->m_pmb->listProdi();
        foreach ($prodi as $key => $p2) { 
            $prodi[$key]['jumlah2'] = $this->m_pmb->jumlahPendaftarProdi2($p2['id_prodi']);
            $prodi[$key]['size'] = rand(10, 30);
        }

        //grafik kedua
        $hasil = null;
        foreach ($prodi as $p2 => $prod) {
            $hasil[$p2] = [
                "name"  => $prod['nama_prodi'],
                "jumlah" => $prod['jumlah2'],
                "y"     => $prod['size'],
                // "sliced" => $sliced,
                // 'selected' => $selected
            ];
        }

        $data['pendaftar'] = $prodi;
        $data['grafik2'] = json_encode($hasil);
        $this->render('index/grafik_dua', $data);
    }

    public function pendaftartingkatprestasi()
    {
        $data['title'] = 'Grafik Berdasarkan Prestasi';
        $prestasi = $this->m_pmb->listPendaftarPrestasi();
        foreach ($prestasi as $key => $ps) {
            $prestasi[$key]['jumlah3'] = $this->m_pmb->jumlahPendaftarPrestasi($ps['tingkat_prestasi']);
            $prestasi[$key]['size'] = rand(10, 30);
        }

        //grafik kedua
        $hasil = null;
        foreach ($prestasi as $ps => $pres) {
            $hasil[$ps] = [
                "name"  => $pres['tingkat_prestasi'],
                "jumlah" => $pres['jumlah3'],
                "y"     => $pres['size'],
                // "sliced" => $sliced,
                // 'selected' => $selected
            ];
        }

        $data['pendaftar_prestasi'] = $prestasi;
        $data['grafik3'] = json_encode($hasil);
        $this->render('index/grafik_tiga', $data);
    }

    public function pendaftarjalurmasuk()
    {
        $data['title'] = 'Grafik Berdasarkan Jalur Masuk';
        $jalurmasuk = $this->m_pmb->listJalurMasuk();
        foreach ($jalurmasuk as $key => $pjm) {
            $jalurmasuk[$key]['jumlah4'] = $this->m_pmb->jumlahPendaftarJalurMasuk($pjm['id_jalur']);
            $jalurmasuk[$key]['size'] = rand(10, 30);
        }

        //grafik kedua
        $hasil = null;
        foreach ($jalurmasuk as $pjm => $jalurmas) {
            $hasil[$pjm] = [
                "name"  => $jalurmas['nama_jalur'],
                "jumlah" => $jalurmas['jumlah4'],
                "y"     => $jalurmas['size'],
                // "sliced" => $sliced,
                // 'selected' => $selected
            ];
        }

        $data['pendaftar'] = $jalurmasuk;
        $data['grafik4'] = json_encode($hasil);
        $this->render('index/grafik_empat', $data);
    }

    public function pendapatanbank()
    {
        $data['title'] = 'Grafik Pendapatan dari Masing-masing Bank';
        $pndtbank = $this->m_pmb->listBank();
        foreach ($pndtbank as $key => $bnk) {
            $pndtbank[$key]['jumlah5'] = $this->m_pmb->jumlahPendapatanBank($bnk['id_bank']);
            $pndtbank[$key]['size'] = rand(10, 30);
        }

        //grafik kedua
        $hasil = null;
        foreach ($pndtbank as $bnk => $bnka) {
            $hasil[$bnk] = [
                "name"  => $bnka['nama_bank'],
                "jumlah" => $bnka['jumlah5'],
                "y"     => $bnka['size'],
                // "sliced" => $sliced,
                // 'selected' => $selected
            ];
        }

        $data['pendaftar'] = $pndtbank;
        $data['grafik5'] = json_encode($hasil);
        $this->render('index/grafik_lima', $data);
    }

    public function jumlahstatusbayarbank()
    {
        $data['title'] = 'Grafik Status Pembayaran Pendaftar (Belum dan Sudah) Berdasarkan Masing-masing Bank';
        $jmlspp = $this->m_pmb->listBank();
        foreach ($jmlspp as $key => $jlspp) {
            $jmlspp[$key]['jumlah6'] = $this->m_pmb->jumlahSpPendaftar($jlspp['id_bank']);
            $jmlspp[$key]['size'] = rand(10, 30);
        }

        //grafik kedua
        $hasil = null;
        foreach ($jmlspp as $jlspp => $spp) {
            $hasil[$jlspp] = [
                "name"  => $spp['nama_bank'],
                "jumlah" => $spp['jumlah6'],
                "y"     => $spp['size'],
                // "sliced" => $sliced,
                // 'selected' => $selected
            ];
        }

        $data['pendaftar'] = $jmlspp;
        $data['grafik6'] = json_encode($hasil);
        $this->render('index/grafik_enam', $data);
    }
}
