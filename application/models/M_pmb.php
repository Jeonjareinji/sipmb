<?php
class M_pmb extends CI_Model
{
    public function listPendaftar()
    {
        return $this->db->get('pendaftar')->result_array();
    }

    public function listProdi()
    {
        return $this->db->get('prodi')->result_array();
    }

    public function listPendaftarPrestasi()
    {
        return $this->db->get('pendaftar_prestasi')->result_array();
    }

    public function listJalurMasuk()
    {
        return $this->db->get('jalur_masuk')->result_array();
    }

    public function listBank()
    {
        return $this->db->get('bank')->result_array();
    }


    public function jumlahPendaftarProdi1()
    {

        return $this->db->query('SELECT count(id_prodi1) AS prodi1, nama_prodi FROM prodi AS p, pendaftar pf WHERE
        p.id_prodi=pf.id_prodi1 GROUP BY nama_prodi')->result_array();

    }

    public function jumlahPendaftarProdi2()
    {
        return $this->db->query('SELECT count(id_prodi2) AS prodi2, nama_prodi FROM prodi AS p, pendaftar pf WHERE
        p.id_prodi=pf.id_prodi2 GROUP BY nama_prodi')->result_array();
    }

    public function jumlahPendaftarPrestasi()
    {

        return $this->db->query('SELECT count(id_pendaftar) as jumlah_pendaftar, tingkat_prestasi
        FROM pendaftar_prestasi GROUP BY tingkat_prestasi')->result_array();

    }

    public function jumlahPendaftarJalurMasuk()
    {
        return $this->db->query('SELECT count(id_pendaftar) as jumlah4, nama_jalur
        FROM pendaftar AS p, jalur_masuk AS j WHERE p.id_jalur=j.id_jalur GROUP BY nama_jalur')->result_array();

    }

    public function jumlahPendapatanBank()
    {

        return $this->db->query('SELECT sum(nominal_bayar) as jumlah5, nama_bank
        FROM bank as a, pendaftar as b WHERE a.id_bank=b.id_bank GROUP BY nama_bank')->result_array();
         
    }

    public function jumlahSpPendaftar($sp)
    {
        $result = 0;
        $this->db->where('id_bank', $sp);
        $data = $this->db->get('bank')->result_array();
        if (!empty($data)) {
            $result = count($data);
        }
        return $result;
    }
}
