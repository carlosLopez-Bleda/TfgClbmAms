// types
import { type Metadata, type Viewport } from 'next';

// styles
import './styles/ui.css';
import './styles/site.css';

// variables
export const runtime = 'edge';

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => (
  <html lang='es'>
    <body>{children}</body>
  </html>
);

const title = 'StreamEvents – Eventos de streamers en un solo lugar';
const canonical = 'https://streamevents.app';
const description =
  'Descubre y sigue todos los eventos de tus streamers favoritos. Encuentra fechas, lugares y compra entradas para La Velada del Año, El Partidazo de Youtubers y más.';

export const viewport: Viewport = {
  width: 'device-width',
  themeColor: '#121212',
  initialScale: 1,
};

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'streamers, eventos, twitch, streamevents, la velada del año, el partidazo de youtubers, entradas, directos',
  robots: 'index, follow', // ✅ Producción lista
  alternates: { canonical },
  metadataBase: new URL(canonical),
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
    shortcut: '/logo192.png',
  },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'StreamEvents',
    images: '/logo192.png',
  },
};

export default RootLayout;
