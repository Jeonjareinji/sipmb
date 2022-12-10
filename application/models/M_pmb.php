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

    public function jumlahPendaftarProdi1($ip1)
    {
        $result = 0;
        $this->db->where('id_prodi1', $ip1);
        $data = $this->db->get('pendaftar')->result_array();
        if (!empty($data)) {
            $result = count($data);
        }
        return $result;
    }

    public function jumlahPendaftarProdi2($ip2)
    {
        $result = 0;
        $this->db->where('id_prodi2', $ip2);
        $data = $this->db->get('pendaftar')->result_array();
        if (!empty($data)) {
            $result = count($data);
        }
        return $result;
    }

    public function jumlahPendaftarPrestasi($tp)
    {
        $result = 0;
        $this->db->group_by('tingkat_prestasi', $tp);
        $data = $this->db->get('pendaftar_prestasi')->result_array();
        if (!empty($data)) {
            $result = count($data);
        }
        return $result;
    }

    public function jumlahPendaftarJalurMasuk($idj)
    {
        $result = 0;
        $this->db->where('id_jalur', $idj);
        $data = $this->db->get('pendaftar')->result_array();
        if (!empty($data)) {
            $result = count($data);
        }
        return $result;
    }
}
