// Configuration object for easy maintenance
const CONFIG = {
    baseUrl: 'https://siakad.polinema.ac.id',
    selectors: {
        scheduleTable: '#mytable',
        paymentTable: '.table_data',
        attendanceDiv: '#scrDataPresensiPerSemester',
        semesterSelect: '#idThnSem',
        studentName: '.username',
        studentId: '.page-title',
        pageContent: '#portlet-sub-page-body'
    },
    endpoints: {
        schedule: '/mahasiswa/jadwal/index',
        payment: '/mahasiswa/pembayaran/index/gm/ukt',
        attendance: '/mahasiswa/presensi/load_DataPresensiPerSemester/',
        presensi: '/mahasiswa/presensi/index'
    },
    menuItems: [
        { icon: 'fa-calendar', title: 'Jadwal', url: '/mahasiswa/jadwal/index', colorKey: 'jadwal' },
        { icon: 'fa-file-text', title: 'KRS', url: '/mahasiswa/krs/index', colorKey: 'krs' },
        { icon: 'fa-graduation-cap', title: 'Nilai', url: '/mahasiswa/akademik/index', colorKey: 'nilai' },
        { icon: 'fa-money', title: 'UKT', url: '/mahasiswa/pembayaran/index/gm/ukt', colorKey: 'ukt' },
        { icon: 'fa-user', title: 'Biodata', url: '/mahasiswa/biodata/index/gm/general', colorKey: 'biodata' },
        { icon: 'fa-book', title: 'LMS', url: '/mahasiswa/slc/index', colorKey: 'lms' },
        { icon: 'fa-check-square-o', title: 'Presensi', url: '/mahasiswa/presensi/index', colorKey: 'presensi' },
        { icon: 'fa-envelope-o', title: 'Surat', url: '/mahasiswa/persuratan/index/gm/surat-sp-%26-sp-kuesioner', colorKey: 'surat' }
    ]
    // defaultSemesters: [
    //     { value: 'MsTh202501002', text: '2024/2025 Genap' },
    //     { value: 'MsTh202403001', text: '2024/2025 Ganjil' },
    //     { value: 'MsTh202401001', text: '2023/2024 Genap' },
    //     { value: '20231', text: '2023/2024 Ganjil' },
    //     { value: '20222', text: '2022/2023 Genap' },
    //     { value: 'MsTh202204001', text: '2022/2023 Ganjil' }
    // ]
};

// Make CONFIG available globally
window.CONFIG = CONFIG;
