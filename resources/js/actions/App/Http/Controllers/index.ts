import ProfilController from './ProfilController'
import PejabatController from './PejabatController'
import BeritaController from './BeritaController'
import PengumumanController from './PengumumanController'
import KegiatanController from './KegiatanController'
import SitemapController from './SitemapController'
import InformasiController from './InformasiController'
import AduanController from './AduanController'
import Admin from './Admin'
import Settings from './Settings'
const Controllers = {
    ProfilController: Object.assign(ProfilController, ProfilController),
PejabatController: Object.assign(PejabatController, PejabatController),
BeritaController: Object.assign(BeritaController, BeritaController),
PengumumanController: Object.assign(PengumumanController, PengumumanController),
KegiatanController: Object.assign(KegiatanController, KegiatanController),
SitemapController: Object.assign(SitemapController, SitemapController),
InformasiController: Object.assign(InformasiController, InformasiController),
AduanController: Object.assign(AduanController, AduanController),
Admin: Object.assign(Admin, Admin),
Settings: Object.assign(Settings, Settings),
}

export default Controllers