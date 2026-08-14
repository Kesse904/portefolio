export const profile = {
  name: "Kesse Gondo Firmin",
  role: "Administrateur Réseaux & Systèmes",
  location: "Abidjan, Yopougon — Côte d'Ivoire",
  phone: "+225 07 77 62 95 88",
  phoneHref: "tel:+2250777629588",
  email: "firminkesse904@gmail.com",
  linkedin: "https://www.linkedin.com/in/gondo-firmin-kesse-629934187",
  portfolio: "https://portfolio-kgf.lovable.app",
  cv: "./CV_Kesse_Gondo_Firmin.pdf",
  cvWord: "./CV_Kesse_Gondo_Firmin.docx",
  photo: "./photo.png",
  tagline:
    "Je conçois, sécurise et supervise des infrastructures réseau fiables pour des entreprises multi-sites.",
  about: [
    "Technicien Réseaux & Systèmes motivé et rigoureux, avec plus de 6 ans d'expérience dans la gestion, la configuration et la maintenance d'infrastructures informatiques.",
    "Spécialisé dans l'administration de serveurs Windows/Linux, la virtualisation, la sécurité et la supervision réseau. J'interviens aussi bien sur la conception d'architectures multi-sites que sur l'automatisation des sauvegardes et la mise en place d'outils de gestion du parc informatique.",
    "Mon objectif : rejoindre une entreprise innovante afin de contribuer à la fiabilité, la performance et la sécurité de ses systèmes informatiques.",
  ],
};

export const stats = [
  { value: "6+", label: "Années d'expérience" },
  { value: "69", label: "Utilisateurs supportés" },
  { value: "4", label: "Sites administrés" },
  { value: "~55", label: "Tickets traités / mois" },
];

export const skills = [
  {
    title: "Réseaux",
    icon: "network",
    items: ["TCP/IP", "DNS", "DHCP", "VLAN", "VPN", "MikroTik", "Cisco"],
  },
  {
    title: "Systèmes",
    icon: "server",
    items: ["Windows Server 2012/2016", "Linux Ubuntu", "Active Directory", "GPO"],
  },
  {
    title: "Virtualisation",
    icon: "layers",
    items: ["VMware", "VirtualBox"],
  },
  {
    title: "Sécurité & Sauvegarde",
    icon: "shield",
    items: ["Kaspersky", "Acronis Backup", "CZ Backup", "OpenVPN", "Pare-feu"],
  },
  {
    title: "Supervision",
    icon: "activity",
    items: ["Zabbix", "Wireshark", "Fing"],
  },
  {
    title: "Outils & Gestion",
    icon: "tool",
    items: ["GLPI", "Microsoft 365", "Sage 100 Premium", "OneDrive"],
  },
];

export const experience = [
  {
    role: "Administrateur Systèmes & Réseaux",
    company: "KAMA-SA",
    place: "Abidjan, Côte d'Ivoire",
    period: "Décembre 2024 — Présent",
    current: true,
    tasks: [
      "Gestion et support de 69 utilisateurs répartis sur 4 sites : Abidjan (Marcory, Vridi) et Yamoussoukro (Le Parc, centre emplisseur).",
      "Administration de serveurs Windows Server 2012/2016 et Linux Ubuntu.",
      "Virtualisation sous VMware et VirtualBox.",
      "Gestion des sauvegardes via Acronis Backup, CZ Backup et OneDrive.",
      "Supervision et maintenance du pare-feu/routeur MikroTik L009 (NAT, VPN, filtrage du trafic).",
      "Administration du système de ticketing GLPI : installation, configuration et formation des utilisateurs.",
      "Segmentation VLAN pour isoler les départements sensibles et renforcer la sécurité.",
      "Supervision et analyse du trafic réseau avec Zabbix, Wireshark et Fing.",
      "Traitement d'environ 55 tickets par mois (incidents, accès, assistance).",
      "Création d'un script automatisé de sauvegarde quotidienne des données utilisateurs.",
      "Maintenance préventive et curative mensuelle sur postes, serveurs et caméras de surveillance.",
      "Coordination technique avec les filiales de Guinée, Mali, Sénégal et Maroc.",
    ],
    tags: ["Windows Server", "Linux", "MikroTik", "VMware", "GLPI", "Zabbix"],
  },
  {
    role: "Technicien Informatique",
    company: "Abidjan",
    place: "Koumassi, Côte d'Ivoire",
    period: "Avril 2020 — Décembre 2024",
    current: false,
    tasks: [
      "Dépannage matériel et logiciel des postes utilisateurs.",
      "Gestion du câblage réseau, des baies de brassage et des points d'accès.",
      "Suivi des mises à jour systèmes et antivirus.",
      "Installation de routeurs et configuration d'accès Internet pour le personnel.",
    ],
    tags: ["Support N1/N2", "Câblage", "Routeurs", "Antivirus"],
  },
];

export const projects = [
  {
    title: "Structuration du réseau & automatisation des sauvegardes",
    client: "TAJPLAST",
    icon: "database",
    diagram: "lan",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Baie de serveurs et câblage réseau structuré",
    context:
      "Infrastructure réseau simple pour une trentaine d'utilisateurs, aucune solution de sauvegarde centralisée et équipements peu interconnectés.",
    actions: [
      "Intégration d'une photocopieuse multifonction Canon IR2425 au réseau avec accès partagé.",
      "Déploiement d'un nouveau réseau câblé complet dans le bâtiment des collaborateurs étrangers.",
      "Installation d'un switch alimentant plusieurs répéteurs Wi-Fi pour une couverture stable.",
      "Conception d'un script de sauvegarde automatisé exécuté quotidiennement selon la politique interne.",
    ],
    results: [
      "Connectivité et productivité des collaborateurs nettement améliorées",
      "Données critiques sécurisées par une stratégie de sauvegarde régulière",
      "Réduction des interventions manuelles et des risques de perte de données",
      "Disponibilité optimisée des services d'impression et du réseau",
    ],
    tags: ["Câblage", "Switch", "Wi-Fi", "Scripting", "Backup"],
  },
  {
    title: "Optimisation & redondance réseau multi-liens",
    client: "Site de Yamoussoukro — MikroTik L009",
    icon: "router",
    diagram: "failover",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Équipement réseau et routeur en salle technique",
    context:
      "Interruptions fréquentes d'accès Internet, imprimantes réseau mal adressées, box 4G Orange limitée en administration et absence de fibre optique.",
    actions: [
      "Étude de la situation et proposition d'une solution économique avec le routeur MikroTik L009.",
      "Configuration complète : DHCP statique et dynamique, supervision du trafic, pare-feu intégré.",
      "Mise en place d'une seconde box MTN 4G en redondance (failover) pour la continuité de service.",
      "Accès et gestion à distance du routeur pour un suivi proactif des performances.",
    ],
    results: [
      "Réseau local stabilisé, problèmes d'imprimantes et d'accès Internet résolus",
      "Disponibilité Internet continue grâce à la redondance des liens",
      "Temps d'intervention réduits et meilleure visibilité sur le trafic",
      "Productivité et satisfaction des utilisateurs en hausse sur site",
    ],
    tags: ["MikroTik", "Failover", "DHCP", "Pare-feu", "Supervision"],
  },
];

projects.push(
  {
    title: "Accès distant sécurisé inter-sites (VPN OpenVPN)",
    client: "Abidjan ↔ Yamoussoukro",
    icon: "lock",
    diagram: "vpn",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Sécurité informatique et connexion chiffrée",
    context:
      "L'entreprise dépendait d'un prestataire externe pour son VPN, ce qui représentait un coût récurrent important pour la direction.",
    actions: [
      "Création d'une machine virtuelle sous VMware dédiée à l'hébergement du serveur VPN.",
      "Installation et configuration d'Ubuntu Server comme serveur OpenVPN.",
      "Déploiement du client OpenVPN sur les postes des collaborateurs distants.",
      "Stratégie GPO sur Windows Server 2016 restreignant l'accès au seul ERP Sage 100 Premium.",
      "Tests de connectivité, d'authentification et de performance du tunnel VPN.",
    ],
    results: [
      "Suppression du coût récurrent lié au prestataire VPN externe",
      "Accès sécurisé et stable à distance entre les deux sites",
      "Productivité et collaboration inter-sites améliorées",
      "Sécurité réseau renforcée par le chiffrement et le contrôle d'accès GPO",
    ],
    tags: ["OpenVPN", "Ubuntu Server", "VMware", "GPO", "Sage 100"],
  },
  {
    title: "Gestion des incidents & du parc informatique (GLPI)",
    client: "KAMA-SA",
    icon: "ticket",
    diagram: "tickets",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Technicien IT responsable de la gestion du parc informatique",
    imagePos: "50% 22%",
    context:
      "Gestion informelle des demandes informatiques (messages, appels, visites spontanées), manque de visibilité sur le parc et faible traçabilité des interventions.",
    actions: [
      "Installation, configuration et hébergement en ligne de la solution GLPI.",
      "Création des catégories de tickets, niveaux de priorité et workflow de validation.",
      "Formation des utilisateurs à l'ouverture, au suivi et à la clôture des demandes.",
      "Intégration du parc informatique complet : postes, imprimantes, serveurs.",
    ],
    results: [
      "Visibilité accrue sur l'état du parc et les interventions en cours",
      "Temps moyen de traitement réduit grâce à la priorisation automatique",
      "Meilleure traçabilité et répartition de la charge dans l'équipe IT",
      "Gain notable en efficacité et satisfaction des utilisateurs internes",
    ],
    tags: ["GLPI", "ITSM", "Ticketing", "Inventaire", "Formation"],
  }
);

export const education = [
  {
    title: "BTS Informatique — Développement d'Applications",
    school: "EST-LOKO, Abidjan",
    period: "2016 — 2018",
  },
  {
    title: "Baccalauréat Série D",
    school: "Lycée Moderne Abobo",
    period: "2012 — 2015",
  },
];

export const certifications = [
  "Certification en Maintenance Informatique",
  "Certificat en Réseau Informatique",
  "Certificat en CCNA",
  "RHCSA — en cours",
];

export const languages = [{ name: "Français", level: "Courant", pct: 100 }];

export const interests = ["Veille technologique", "Sports", "Lecture"];

export const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];
