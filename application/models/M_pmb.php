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

    public function jumlahPendaftarPrestasi()
    {

        return $this->db->query('SELECT count(id_pendaftar) as jumlah_pendaftar, tingkat_prestasi
        FROM pendaftar_prestasi GROUP BY tingkat_prestasi')->result_array();

    }

    public function jumlahPendaftarJalurMasuk()
    {
        $this->db->select(['count(id_pendaftar) as jumlah4', 'pendaftar.id_jalur', 'j.nama_jalur']);
        $this->db->join('jalur_masuk as j', 'pendaftar.id_jalur = j.id_jalur');
        $this->db->group_by('pendaftar.id_jalur');
        $result = $this->db->get('pendaftar')->result_array();
        return $result;
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
