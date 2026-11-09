const T = "#149183";
const DIM = "#9fb2c4";
const TXT = "#5b7186";

const box = {
  fill: "rgba(20,145,131,.07)",
  stroke: T,
  strokeWidth: 1.3,
  rx: 5,
};

const wire = { stroke: DIM, strokeWidth: 1.4, fill: "none" };
const live = { stroke: T, strokeWidth: 1.6, fill: "none" };

function Label({ x, y, children, anchor = "middle", size = 8 }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={size}
      fill={TXT}
      fontFamily="ui-monospace, monospace"
      letterSpacing="0.3"
    >
      {children}
    </text>
  );
}

function Dash({ d, dur = "2.4s" }) {
  return (
    <path d={d} {...live} strokeDasharray="4 6" opacity="0.9">
      <animate attributeName="stroke-dashoffset" from="20" to="0" dur={dur} repeatCount="indefinite" />
    </path>
  );
}

/* 1. TAJPLAST — cabling, switch, Wi-Fi, backup script */
function LanBackup() {
  return (
    <>
      <rect x="118" y="18" width="64" height="24" {...box} />
      <Label x={150} y={33}>INTERNET</Label>
      <path d="M150 42v16" {...wire} />

      <rect x="112" y="58" width="76" height="26" {...box} />
      <Label x={150} y={74}>SWITCH 24P</Label>

      <path d="M150 84v14M150 98H48M150 98h104M48 98v12M252 98v12M150 98v12" {...wire} />

      <rect x="22" y="110" width="52" height="26" {...box} />
      <Label x={48} y={126} size={7}>POSTES</Label>
      <rect x="124" y="110" width="52" height="26" {...box} />
      <Label x={150} y={126} size={7}>CANON</Label>
      <rect x="226" y="110" width="52" height="26" {...box} />
      <Label x={252} y={126} size={7}>AP WI-FI</Label>

      <g opacity="0.55">
        <path d="M244 108a12 12 0 0 1 16 0" {...live} />
        <path d="M239 102a20 20 0 0 1 26 0" {...live} />
      </g>

      <Dash d="M48 136v22h204v-22" />
      <rect x="196" y="158" width="112" height="24" {...box} fill="rgba(65,191,176,.14)" />
      <Label x={252} y={173} size={7}>BACKUP AUTO 22:00</Label>
      <circle cx="207" cy="170" r="2.6" fill={T}>
        <animate attributeName="opacity" values="1;.25;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </>
  );
}

/* 2. MikroTik L009 — dual WAN failover */
function Failover() {
  return (
    <>
      <rect x="20" y="16" width="92" height="26" {...box} />
      <Label x={66} y={32} size={7}>ORANGE 4G</Label>
      <rect x="188" y="16" width="92" height="26" {...box} stroke={DIM} fill="rgba(61,90,114,.14)" />
      <Label x={234} y={32} size={7}>MTN 4G · SECOURS</Label>

      <Dash d="M66 42v28h84" />
      <path d="M234 42v28h-84" {...wire} strokeDasharray="3 5" />

      <Label x={110} y={64} size={6.5} anchor="end">PRIMAIRE</Label>
      <Label x={192} y={64} size={6.5} anchor="start">FAILOVER</Label>

      <rect x="94" y="70" width="112" height="30" {...box} fill="rgba(65,191,176,.16)" />
      <Label x={150} y={89} size={7.5}>MIKROTIK L009</Label>

      <g>
        <rect x="94" y="106" width="112" height="20" {...box} strokeDasharray="2 3" />
        <Label x={150} y={120} size={6.5}>DHCP · NAT · PARE-FEU</Label>
      </g>

      <path d="M150 126v14M60 140h180M60 140v14M150 140v14M240 140v14" {...wire} />

      <rect x="34" y="154" width="52" height="24" {...box} />
      <Label x={60} y={169} size={7}>LAN</Label>
      <rect x="124" y="154" width="52" height="24" {...box} />
      <Label x={150} y={169} size={7}>IMPR.</Label>
      <rect x="214" y="154" width="52" height="24" {...box} />
      <Label x={240} y={169} size={7}>WI-FI</Label>

      <circle cx="104" cy="85" r="2.6" fill={T}>
        <animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </>
  );
}

/* 3. OpenVPN site-to-site */
function VpnTunnel() {
  return (
    <>
      <rect x="14" y="52" width="94" height="76" rx="7" fill="rgba(20,145,131,.04)" stroke={DIM} strokeWidth="1.1" strokeDasharray="3 4" />
      <Label x={61} y={44} size={7}>ABIDJAN · SIÈGE</Label>
      <rect x="26" y="64" width="70" height="24" {...box} />
      <Label x={61} y={79} size={7}>SRV 2016</Label>
      <rect x="26" y="96" width="70" height="24" {...box} fill="rgba(65,191,176,.14)" />
      <Label x={61} y={111} size={6.5}>SAGE 100</Label>

      <rect x="192" y="52" width="94" height="76" rx="7" fill="rgba(20,145,131,.04)" stroke={DIM} strokeWidth="1.1" strokeDasharray="3 4" />
      <Label x={239} y={44} size={7}>YAMOUSSOUKRO</Label>
      <rect x="204" y="64" width="70" height="24" {...box} />
      <Label x={239} y={79} size={7}>POSTES</Label>
      <rect x="204" y="96" width="70" height="24" {...box} />
      <Label x={239} y={111} size={6.5}>CLIENT VPN</Label>

      <path d="M108 90h84" stroke={T} strokeWidth="7" opacity="0.14" strokeLinecap="round" />
      <Dash d="M108 90h84" dur="1.8s" />

      <rect x="122" y="20" width="56" height="20" {...box} fill="rgba(65,191,176,.16)" />
      <Label x={150} y={34} size={6.5}>OPENVPN</Label>
      <path d="M150 40v14" {...wire} strokeDasharray="2 3" />

      <g transform="translate(143 82)">
        <rect x="0" y="4" width="14" height="10" rx="2" fill="#ffffff" stroke={T} strokeWidth="1.2" />
        <path d="M3.5 4V2.2a3.5 3.5 0 0 1 7 0V4" fill="none" stroke={T} strokeWidth="1.2" />
      </g>

      <rect x="98" y="140" width="104" height="20" {...box} strokeDasharray="2 3" />
      <Label x={150} y={154} size={6.5}>GPO · ACCÈS RESTREINT</Label>
    </>
  );
}

/* 4. GLPI ticket flow */
function TicketFlow() {
  return (
    <>
      <rect x="14" y="72" width="62" height="30" {...box} />
      <Label x={45} y={91} size={7}>UTILISATEUR</Label>

      <Dash d="M76 87h34" />

      <rect x="110" y="60" width="80" height="54" {...box} fill="rgba(65,191,176,.14)" />
      <Label x={150} y={82} size={8}>GLPI</Label>
      <Label x={150} y={97} size={6}>TICKETING</Label>

      <Dash d="M190 87h34" dur="2.8s" />

      <rect x="224" y="72" width="62" height="30" {...box} />
      <Label x={255} y={91} size={7}>ÉQUIPE IT</Label>

      <path d="M150 60V38M92 38h116M92 38v10M150 38v10M208 38v10" {...wire} />
      <rect x="66" y="48" width="52" height="0" />
      <g>
        <rect x="66" y="16" width="52" height="20" {...box} stroke="#e2685f" fill="rgba(226,104,95,.12)" />
        <Label x={92} y={30} size={6.5}>URGENT</Label>
        <rect x="124" y="16" width="52" height="20" {...box} stroke="#e0a23c" fill="rgba(224,162,60,.12)" />
        <Label x={150} y={30} size={6.5}>NORMAL</Label>
        <rect x="182" y="16" width="52" height="20" {...box} />
        <Label x={208} y={30} size={6.5}>BAS</Label>
      </g>

      <path d="M150 114v14M60 128h180M60 128v10M150 128v10M240 128v10" {...wire} />
      <rect x="30" y="138" width="60" height="22" {...box} strokeDasharray="2 3" />
      <Label x={60} y={152} size={6.5}>POSTES</Label>
      <rect x="120" y="138" width="60" height="22" {...box} strokeDasharray="2 3" />
      <Label x={150} y={152} size={6.5}>IMPRIMANTES</Label>
      <rect x="210" y="138" width="60" height="22" {...box} strokeDasharray="2 3" />
      <Label x={240} y={152} size={6.5}>SERVEURS</Label>

      <Label x={150} y={176} size={6.5}>PARC INVENTORIÉ</Label>
    </>
  );
}

/* 5. Attendance — biometric terminals to dashboard */
function Attendance() {
  return (
    <>
      <rect x="14" y="30" width="72" height="24" {...box} />
      <Label x={50} y={45} size={6.5}>POINTEUSE 1</Label>
      <rect x="14" y="66" width="72" height="24" {...box} />
      <Label x={50} y={81} size={6.5}>POINTEUSE 2</Label>
      <rect x="14" y="102" width="72" height="24" {...box} />
      <Label x={50} y={117} size={6.5}>POINTEUSE N</Label>
      <Label x={50} y={142} size={6}>EMPREINTE</Label>

      <path d="M86 42h20v36M86 78h34M86 114h20V78" {...wire} />
      <Dash d="M106 78h14" />
      <Label x={103} y={68} size={5.5}>ISAPI</Label>

      <rect x="120" y="54" width="70" height="48" {...box} fill="rgba(65,191,176,.16)" />
      <Label x={155} y={75} size={8}>FASTAPI</Label>
      <Label x={155} y={89} size={6}>PRÉSENCES</Label>

      <path d="M155 102v30" {...wire} />
      <rect x="120" y="132" width="70" height="24" {...box} />
      <Label x={155} y={147} size={7}>MARIADB</Label>

      <path d="M190 78h16M206 42v108M206 42h12M206 96h12M206 150h12" {...wire} />
      <Dash d="M190 78h16" dur="1.8s" />

      <rect x="218" y="30" width="70" height="24" {...box} fill="rgba(65,191,176,.14)" />
      <Label x={253} y={45} size={6.5}>DASHBOARD</Label>
      <rect x="218" y="84" width="70" height="24" {...box} stroke="#e0a23c" fill="rgba(224,162,60,.12)" />
      <Label x={253} y={99} size={6.5}>ALERTES EMAIL</Label>
      <rect x="218" y="138" width="70" height="24" {...box} />
      <Label x={253} y={153} size={6.5}>EXCEL · PDF</Label>
    </>
  );
}

const MAP = {
  lan: LanBackup,
  failover: Failover,
  vpn: VpnTunnel,
  tickets: TicketFlow,
  attendance: Attendance,
};

export default function Diagram({ name, className = "" }) {
  const C = MAP[name];
  if (!C) return null;
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-paper-300 bg-paper-100 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,36,56,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,36,56,.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <svg viewBox="0 0 300 190" className="relative block w-full" role="img">
        <C />
      </svg>
    </div>
  );
}
