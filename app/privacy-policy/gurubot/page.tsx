import type { Metadata } from "next";
import { BookOpen, Camera, CheckCircle2, ChevronRight, ExternalLink, Mail, Phone, ShieldCheck, Smartphone } from "lucide-react";

export const metadata: Metadata = {
    title: "Kebijakan Privasi GURUBOT",
    description: "Kebijakan Privasi aplikasi pembelajaran literasi dan numerasi GURUBOT untuk Android dan iOS.",
};

const sections = [
    "Informasi yang Kami Proses",
    "Cara Kami Memperoleh Informasi",
    "Tujuan Penggunaan Informasi",
    "Privasi Anak",
    "Penyimpanan pada Perangkat",
    "Penyedia Layanan dan Pengungkapan Informasi",
    "Pemindahan Data",
    "Keamanan Data",
    "Retensi dan Penghapusan Data",
    "Hak dan Pilihan Pengguna",
    "Perubahan Kebijakan Privasi",
    "Hubungi Kami",
];

const BulletList = ({ children }: { children: React.ReactNode }) => (
    <ul className="mt-4 space-y-3 text-sm leading-7 text-white/65 sm:text-base">
        {children}
    </ul>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <ChevronRight className="mt-1.5 size-4 shrink-0 text-accent" aria-hidden="true" />
        <span>{children}</span>
    </li>
);

const PolicySection = ({
    number,
    title,
    children,
}: {
    number: number;
    title: string;
    children: React.ReactNode;
}) => (
    <section
        id={`bagian-${number}`}
        className="scroll-mt-28 border-b border-white/10 py-9 last:border-b-0 sm:py-11"
    >
        <div className="mb-5 flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent font-bold text-primary">
                {String(number).padStart(2, "0")}
            </span>
            <h2 className="pt-1 text-xl font-semibold leading-snug text-white sm:text-2xl">
                {title}
            </h2>
        </div>
        <div className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            {children}
        </div>
    </section>
);

export default function GurubotPrivacyPolicy() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-primary text-white">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,238,0,0.12),transparent_58%)]"
                aria-hidden="true"
            />
            <div className="container relative mx-auto px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 xl:pb-28">
                <header className="mx-auto max-w-4xl text-center">
                    <div className="mx-auto mb-7 flex size-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 shadow-[0_0_50px_rgba(255,238,0,0.08)]">
                        <ShieldCheck className="size-8 text-accent" aria-hidden="true" />
                    </div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm">
                        GURUBOT
                    </p>
                    <h1 className="text-3xl font-bold leading-tight sm:text-5xl xl:text-6xl">
                        Kebijakan Privasi
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                        GURUBOT adalah aplikasi pembelajaran literasi dan numerasi untuk siswa.
                        Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
                        menyimpan, melindungi, dan menghapus informasi pengguna.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-white/65 sm:text-sm">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                            <Smartphone className="size-4 text-accent" aria-hidden="true" />
                            Android &amp; iOS
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                            <BookOpen className="size-4 text-accent" aria-hidden="true" />
                            Literasi &amp; Numerasi
                        </span>
                    </div>
                </header>
                <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:mt-20 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
                    <aside className="lg:sticky lg:top-8">
                        <nav
                            aria-label="Daftar isi kebijakan privasi"
                            className="rounded-2xl border border-white/10 bg-[#232329]/80 p-5 backdrop-blur"
                        >
                            <p className="mb-4 text-sm font-semibold text-white">Daftar isi</p>
                            <ol className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
                                {sections.map((section, index) => (
                                    <li key={section}>
                                        <a
                                            href={`#bagian-${index + 1}`}
                                            className="flex gap-3 rounded-lg px-3 py-2 text-xs leading-5 text-white/50 transition-colors hover:bg-white/5 hover:text-accent"
                                        >
                                        <span className="shrink-0 text-white/30">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span>{section}</span>
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </aside>
                    <article className="rounded-2xl border border-white/10 bg-[#232329]/70 px-5 shadow-2xl shadow-black/10 sm:px-9 lg:px-12">
                        <div className="border-b border-white/10 py-9 sm:py-11">
                            <p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                                Dengan menggunakan GURUBOT, pengguna, orang tua/wali, atau pihak
                                sekolah menyatakan telah membaca dan memahami Kebijakan Privasi ini.
                            </p>
                        </div>
                        <PolicySection number={1} title={sections[0]}>
                            <p>Sesuai fitur yang digunakan, GURUBOT dapat memproses informasi berikut:</p>
                            <h3 className="mt-7 font-semibold text-white">a. Informasi profil</h3>
                            <BulletList>
                                <Bullet>Nama atau nama panggilan siswa;</Bullet>
                                <Bullet>Usia;</Bullet>
                                <Bullet>Jenis kelamin;</Bullet>
                                <Bullet>Avatar dan warna latar yang dipilih;</Bullet>
                                <Bullet>Peran pengguna, seperti siswa, orang tua, atau pengajar/sekolah.</Bullet>
                            </BulletList>
                            <h3 className="mt-7 font-semibold text-white">b. Informasi akun dan autentikasi</h3>
                            <BulletList>
                                <Bullet>Kode kelas dan kode unik siswa;</Bullet>
                                <Bullet>Identitas akun yang diberikan oleh sekolah atau pengajar;</Bullet>
                                <Bullet>Token autentikasi yang diperlukan agar pengguna tetap masuk ke aplikasi.</Bullet>
                            </BulletList>
                            <h3 className="mt-7 font-semibold text-white">c. Informasi aktivitas pembelajaran</h3>
                            <BulletList>
                                <Bullet>Materi, level, dan tantangan yang dikerjakan;</Bullet>
                                <Bullet>Kemajuan, pencapaian, energi, atau hasil aktivitas belajar;</Bullet>
                                <Bullet>Informasi kelas dan pengumuman yang berkaitan dengan kegiatan belajar.</Bullet>
                            </BulletList>
                            <h3 className="mt-7 font-semibold text-white">d. Informasi teknis</h3>
                            <BulletList>
                                <Bullet>Versi aplikasi;</Bullet>
                                <Bullet>Jenis sistem operasi dan informasi perangkat yang diperlukan untuk kompatibilitas, keamanan, pemecahan masalah, dan pengelolaan versi aplikasi;</Bullet>
                                <Bullet>Alamat IP dan catatan teknis lain yang secara otomatis dapat diproses oleh server atau penyedia layanan kami ketika aplikasi terhubung ke internet.</Bullet>
                            </BulletList>
                            <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-5 sm:p-6">
                                <h3 className="flex items-center gap-3 font-semibold text-white">
                                    <Camera className="size-5 text-accent" aria-hidden="true" />
                                    e. Akses kamera
                                </h3>
                                <p className="mt-3">
                                    GURUBOT meminta izin kamera hanya untuk membantu pengguna memindai kode QR saat masuk. Tampilan kamera diproses untuk menjalankan fungsi pemindaian. Kami tidak menggunakan kamera untuk periklanan dan tidak menjual rekaman kamera. GURUBOT tidak akan mengakses kamera apabila izin tidak diberikan oleh pengguna.
                                </p>
                            </div>
                        </PolicySection>
                        <PolicySection number={2} title={sections[1]}>
                            <p>Kami memperoleh informasi:</p>
                            <BulletList>
                                <Bullet>Langsung dari pengguna, orang tua/wali, pengajar, atau sekolah;</Bullet>
                                <Bullet>Dari aktivitas pengguna saat memakai fitur pembelajaran;</Bullet>
                                <Bullet>Secara otomatis dari aplikasi dan perangkat untuk menjalankan, mengamankan, dan memperbarui layanan;</Bullet>
                                <Bullet>Dari sekolah atau pengajar yang membuat atau mengelola akun dan kelas pengguna.</Bullet>
                            </BulletList>
                        </PolicySection>
                        <PolicySection number={3} title={sections[2]}>
                            <p>Kami menggunakan informasi hanya untuk tujuan yang relevan dengan layanan GURUBOT, termasuk:</p>
                            <BulletList>
                                <Bullet>Membuat, mengenali, dan mengelola profil pengguna;</Bullet>
                                <Bullet>Memverifikasi kode kelas atau kode unik siswa;</Bullet>
                                <Bullet>Menyediakan materi literasi, numerasi, tantangan, dan fitur pembelajaran;</Bullet>
                                <Bullet>Menampilkan dan menyinkronkan kemajuan belajar;</Bullet>
                                <Bullet>Memungkinkan pengajar atau sekolah mengelola aktivitas dan pengumuman kelas;</Bullet>
                                <Bullet>Menjaga keamanan akun dan mencegah penyalahgunaan;</Bullet>
                                <Bullet>Memperbaiki gangguan serta meningkatkan kinerja dan pengalaman aplikasi;</Bullet>
                                <Bullet>Menyampaikan pembaruan penting, termasuk informasi versi aplikasi;</Bullet>
                                <Bullet>Memenuhi kewajiban hukum yang berlaku.</Bullet>
                            </BulletList>
                            <p className="mt-6 font-medium text-white/85">
                                Kami tidak menjual atau menyewakan data pribadi pengguna dan tidak menggunakan data anak untuk iklan berbasis minat atau pelacakan lintas aplikasi.
                            </p>
                        </PolicySection>
                        <PolicySection number={4} title={sections[3]}>
                            <div className="space-y-4">
                                <p>GURUBOT dirancang untuk mendukung kegiatan belajar anak. Pembuatan dan penggunaan akun anak harus berada di bawah arahan atau persetujuan orang tua/wali atau sekolah yang berwenang.</p>
                                <p>Kami berupaya membatasi pengumpulan data anak pada informasi yang diperlukan untuk menyediakan layanan pembelajaran. Kami tidak secara sengaja meminta informasi kontak langsung anak, data lokasi presisi, data pembayaran, atau konten yang tidak diperlukan untuk fungsi pembelajaran.</p>
                                <p>Orang tua/wali dapat meminta akses, koreksi, atau penghapusan data anak dengan menghubungi kami melalui informasi kontak pada bagian 12. Kami dapat meminta informasi yang wajar untuk memverifikasi identitas dan kewenangan pemohon sebelum menindaklanjuti permintaan.</p>
                                <p>Jika kami mengetahui bahwa data anak diperoleh tanpa persetujuan atau kewenangan yang semestinya, kami akan mengambil langkah yang wajar untuk menghapus data tersebut.</p>
                            </div>
                        </PolicySection>
                        <PolicySection number={5} title={sections[4]}>
                            <div className="space-y-4">
                                <p>GURUBOT dapat menyimpan preferensi bahasa, informasi sesi, token autentikasi, dan data aplikasi lain secara lokal pada perangkat. Informasi tersebut digunakan agar aplikasi dapat mengingat pilihan pengguna dan menjaga sesi masuk.</p>
                                <p>Sebagian data lokal dapat terhapus ketika pengguna keluar, menghapus data aplikasi, atau menghapus aplikasi dari perangkat. Menghapus aplikasi tidak selalu menghapus data yang telah tersimpan pada server kami; permintaan penghapusan data server dapat diajukan melalui kontak pada bagian 12.</p>
                            </div>
                        </PolicySection>
                        <PolicySection number={6} title={sections[5]}>
                            <p>Kami dapat menggunakan penyedia layanan yang membantu pengoperasian GURUBOT, antara lain:</p>
                            <BulletList>
                                <Bullet>Google Firebase, termasuk Firebase Remote Config, untuk mengambil konfigurasi aplikasi dan informasi versi;</Bullet>
                                <Bullet>Penyedia infrastruktur server, penyimpanan, keamanan, atau dukungan teknis yang kami gunakan untuk menjalankan layanan.</Bullet>
                            </BulletList>
                            <div className="mt-6 space-y-4">
                                <p>Penyedia layanan hanya diperbolehkan memproses informasi sesuai instruksi kami dan untuk tujuan penyediaan layanan. Mereka diwajibkan memberikan perlindungan data yang sesuai dengan fungsi dan kewajiban yang berlaku.</p>
                                <p>Kami juga dapat mengungkapkan informasi apabila diwajibkan oleh hukum, diperlukan untuk melindungi keselamatan pengguna, atau diperlukan untuk menjaga hak dan keamanan GURUBOT. Jika layanan dikelola bersama sekolah, data siswa yang relevan dapat tersedia bagi pengajar atau administrator sekolah yang berwenang.</p>
                            </div>
                        </PolicySection>
                        <PolicySection number={7} title={sections[6]}>
                            <p>Sebagian penyedia layanan dapat memproses data pada server yang berada di luar wilayah tempat pengguna tinggal. Jika terjadi pemindahan data lintas batas, kami akan menerapkan perlindungan yang wajar dan mematuhi ketentuan hukum yang berlaku.</p>
                        </PolicySection>
                        <PolicySection number={8} title={sections[7]}>
                            <div className="space-y-4">
                                <p>Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi informasi dari akses, penggunaan, perubahan, kehilangan, atau pengungkapan tanpa izin. Langkah tersebut dapat mencakup pembatasan akses, autentikasi, komunikasi terenkripsi, dan evaluasi keamanan.</p>
                                <p>Meskipun demikian, tidak ada metode pengiriman atau penyimpanan elektronik yang sepenuhnya bebas risiko. Pengguna, orang tua/wali, dan sekolah juga bertanggung jawab menjaga kerahasiaan kode kelas, kode unik, dan akses perangkat.</p>
                            </div>
                        </PolicySection>
                        <PolicySection number={9} title={sections[8]}>
                            <div className="space-y-4">
                                <p>Kami menyimpan data pribadi hanya selama diperlukan untuk menyediakan layanan, menjaga keamanan, memenuhi kewajiban hukum, atau menyelesaikan perselisihan.</p>
                                <p>Apabila akun tidak lagi digunakan atau sekolah mengakhiri layanan, data akan dihapus atau dianonimkan sesuai jadwal retensi operasional kami, kecuali penyimpanan lebih lama diwajibkan oleh hukum. Permintaan penghapusan yang telah diverifikasi akan kami proses dalam waktu yang wajar. Salinan yang berada dalam cadangan terenkripsi dapat tetap tersimpan sementara sampai siklus pencadangan berakhir.</p>
                            </div>
                        </PolicySection>
                        <PolicySection number={10} title={sections[9]}>
                            <p>Sesuai hukum yang berlaku, pengguna atau orang tua/wali dapat meminta untuk:</p>
                            <BulletList>
                                <Bullet>Mengetahui dan memperoleh akses terhadap data pribadi yang kami proses;</Bullet>
                                <Bullet>Memperbaiki atau memperbarui data yang tidak akurat;</Bullet>
                                <Bullet>Menarik persetujuan yang sebelumnya diberikan;</Bullet>
                                <Bullet>Menghapus data atau akun;</Bullet>
                                <Bullet>Membatasi atau mengajukan keberatan atas pemrosesan tertentu;</Bullet>
                                <Bullet>Memperoleh salinan data apabila berlaku.</Bullet>
                            </BulletList>
                            <div className="mt-6 space-y-4">
                                <p>Izin kamera dapat dinonaktifkan kapan saja melalui pengaturan perangkat. Penonaktifan izin dapat membuat fitur pemindaian QR tidak tersedia.</p>
                                <p>Permintaan terkait hak privasi dapat dikirim melalui kontak pada bagian 12. Kami dapat meminta verifikasi identitas dan hubungan orang tua/wali atau kewenangan sekolah sebelum memenuhi permintaan.</p>
                            </div>
                        </PolicySection>
                        <PolicySection number={11} title={sections[10]}>
                            <p>Kami dapat memperbarui Kebijakan Privasi ini untuk menyesuaikan perubahan fitur, praktik pengelolaan data, atau ketentuan hukum. Versi terbaru akan ditampilkan pada halaman ini dengan tanggal pembaruan. Apabila perubahan bersifat penting, kami dapat memberikan pemberitahuan tambahan melalui aplikasi atau saluran lain yang sesuai.</p>
                        </PolicySection>
                        <PolicySection number={12} title={sections[11]}>
                            <p>Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait privasi dan penghapusan data, hubungi:</p>
                            <div className="mt-6 rounded-2xl border border-white/10 bg-primary/60 p-5 sm:p-7">
                                <p className="text-lg font-semibold text-white">Muhammad Arif Ilham</p>
                                <div className="mt-5 flex flex-col gap-3">
                                    <a
                                        href="mailto:marifilham999@gmail.com"
                                        className="group flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-accent sm:text-base"
                                    >
                                        <Mail className="size-5 text-accent" aria-hidden="true" />
                                        <span className="break-all">marifilham999@gmail.com</span>
                                        <ExternalLink className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                                    </a>
                                    <a
                                        href="tel:+6287875686342"
                                        className="group flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-accent sm:text-base"
                                    >
                                        <Phone className="size-5 text-accent" aria-hidden="true" />
                                        <span>+62 878 7568 6342</span>
                                        <ExternalLink className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </PolicySection>
                    </article>
                </div>
                <footer className="mx-auto mt-8 max-w-6xl rounded-2xl border border-accent/20 bg-accent/5 px-5 py-6 text-center text-sm leading-7 text-white/60 sm:px-8">
                    Kebijakan Privasi ini berlaku untuk aplikasi <strong className="font-semibold text-white">GURUBOT</strong> pada Android dan iOS.
                </footer>
            </div>
        </main>
    );
}
