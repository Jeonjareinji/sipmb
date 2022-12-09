DELIMITER $$
CREATE PROCEDURE dummy() 
BEGIN

    DECLARE i,n INT;
    DECLARE jalur_id INT;
    DECLARE no_pendaftar varchar(20);
    DECLARE nama varchar(100);
    DECLARE nisn varchar(15);
    DECLARE nik varchar(20);
    DECLARE tempat_lahir varchar(60);
    DECLARE tanggal_lahir date;
    DECLARE jenis_kelamin varchar(30);
    DECLARE no_hp varchar(20);
    DECLARE alamat text;
    DECLARE agama varchar(25);
    DECLARE idp1 int(11);
    DECLARE idp2 int(11);
    DECLARE nominal_bayar varchar(15);
    DECLARE id_bank int(11);
    DECLARE isb int(11);
    
    DECLARE pendaftar_id INT;
    DECLARE tingkat_prestasi VARCHAR(30);
    DECLARE nama_prestasi VARCHAR(255);
    DECLARE tahun int;
    DECLARE url_dokumen VARCHAR(100);

SET i = 0;
SET n = 1000;
while i < n DO

    SET jalur_id = (SELECT id_jalur FROM jalur_masuk ORDER BY RAND() LIMIT 1);
    SET no_pendaftar = (SELECT CONCAT('P',YEAR(CURRENT_DATE()),jalur_id , (i+1)));
    SET nama = (SELECT CONCAT('Luthfi Rachman ', (i+1)));
    SET nisn = (SELECT CONCAT('1311945', (i+1)));
    SET nik = (SELECT CONCAT('1675820', (i+1)));
    SET tempat_lahir = 'Tangerang';
    SET tanggal_lahir = (SELECT '2001-12-31'- INTERVAL FLOOR(RAND() * 30) DAY);
    SET jenis_kelamin = 'Laki-Laki';
    SET no_hp = (SELECT CONCAT('0851720231', (i+1)));
    SET alamat = (SELECT CONCAT('Jl. Krakatau ', (i+1)));
    SET agama = 'Islam';
    SET idp1 = (SELECT id_prodi FROM prodi ORDER BY RAND() LIMIT 1);
    SET idp2 = (SELECT id_prodi FROM prodi ORDER BY RAND() LIMIT 1);
    SET nominal_bayar = 1500000;
    SET id_bank = (SELECT id_bank FROM bank ORDER BY RAND() LIMIT 1);
    SET isb = 1;
    
    IF jalur_id = 1 THEN
    SET nominal_bayar = null;
        SET nominal_bayar = null;
        SET isb = 1;
    END IF;

	IF (i+1) % 5 = 0 THEN
    SET jenis_kelamin = 'Perempuan';
        SET tempat_lahir = 'Bekasi';
    END IF;
    
    IF (i+1) % 3 = 0 THEN
    SET isb = 0;
    END IF;

 
    INSERT INTO pendaftar (id_jalur, no_pendaftar, nama, nisn, nik, tempat_lahir, tanggal_lahir, jenis_kelamin, no_hp, alamat, agama, id_prodi1, id_prodi2, nominal_bayar, id_bank, is_bayar)
    VALUES (jalur_id, no_pendaftar, nama, nisn, nik, tempat_lahir, tanggal_lahir, jenis_kelamin, no_hp, alamat, agama, idp1, idp2, nominal_bayar, id_bank, isb);

        SET pendaftar_id = (SELECT LAST_INSERT_ID());

        if jalur_id = 3 THEN
        SET tingkat_prestasi = 'NASIONAL';
        SET tahun = (SELECT YEAR(CURRENT_DATE()));

        if (1+i) % 6 = 0 THEN
        	SET tingkat_prestasi = 'INTERNASIONAL';
        	SET tahun = (SELECT YEAR(CURRENT_DATE()));
        END if;
        SET nama_prestasi = (SELECT CONCAT('Prestasi ', tingkat_prestasi,' ', nama));
        SET url_dokumen = (SELECT CONCAT('public/uploads/prestasi/', pendaftar_id)); 
        
        INSERT INTO pendaftar_prestasi (id_pendaftar, tingkat_prestasi, nama_prestasi, tahun, url_dokumen)
        VALUES(pendaftar_id, tingkat_prestasi, nama_prestasi, tahun, url_dokumen);
        
        END IF;
        SET i = i + 1;
END WHILE;
END
$$


CALL dummy();