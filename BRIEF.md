# BRIEF — Bourges Guêpes

## Client
- **Nom commercial :** Bourges Guêpes
  (nom complet sur la fiche Google : « BOURGES GUEPES — Entreprise destruction nids de
  guêpes frelons, Cher 18, 7j/7, Agréé CERTIBIOCIDE, Devis gratuit »)
- **Métier :** destruction de nids de guêpes, de frelons européens et de frelons asiatiques
- **Ville :** Bourges — zone d'intervention : Bourges et tout le Cher (18)
- **Cibles :** particuliers, gîtes et locations, exploitations agricoles, collectivités
- **Arguments centraux :** agréé **Certibiocide**, **7 j/7 de 8h à 21h**, **devis gratuit
  par téléphone**, intervention le jour même, matériel pour les nids en hauteur.

## Coordonnées
| | |
|---|---|
| Téléphone | 06 38 05 46 33 |
| Adresse | 8 rue Franklin, 18000 Bourges |
| Google | 5,0 ★ sur 14 avis |

**Horaires :** 7 jours sur 7, 08:00–21:00.

> ⚠️ L'adresse et la note Google ont été **relevées sur la fiche Google le 23/07/2026**
> (l'adresse apparaît dans la carte intégrée de la section Contact) — **à faire confirmer
> par le client**. L'adresse n'est affichée **nulle part** sur le site : c'est un métier où
> c'est l'artisan qui se déplace. Elle est gardée dans `src/data/site.ts` pour mémoire et
> pour la future passe SEO.

## Tier
**Non défini.** Comme pour France Nuisibles, le volet SEO est écarté de ce premier jet
(CLAUDE.md §7). Le périmètre livré correspond au rendu visuel et au contenu ; le tier se
tranchera au moment de la passe SEO / déploiement.

## Demande de Benjamin
> « Reprends le site de France Nuisibles en adaptant le contenu et la palette de couleurs,
> garde les mêmes sections. J'ai pas grand-chose sur eux, invente-leur une vie. »

Les six sections de `ser_fr_nuisibles` sont donc reprises à l'identique en structure, avec
un contenu entièrement réécrit pour le métier « nids de guêpes / frelons » et une palette
jaune-noir-rouge.

## Sections
1. **Hero** — photo plein écran (intervention réelle sur toiture) au lieu de la vidéo de
   France Nuisibles : le client n'a fourni aucune vidéo.
   Accroche : « Un nid de guêpes ou de frelons ? On s'en occupe aujourd'hui. »
   CTA principal = **le numéro de téléphone** (métier d'urgence, c'est l'appel qui convertit)
   · CTA secondaire → réalisations · trois preuves courtes sous les boutons.
2. **À propos** — identification des espèces, agrément, non-destruction des abeilles.
3. **Réalisations** — 3 interventions en carrousel à flèches (volet roulant, frelons
   asiatiques en hauteur, charpente de ferme).
4. **Protocole** — **3 étapes** (au téléphone / sur place / après) au lieu des 2 passages de
   France Nuisibles : un nid ne se traite pas comme une infestation de cafards.
5. **Avis** — section maison (colonnes défilantes) + pastille 5,0 ★ · 14 avis Google.
6. **Contact** — formulaire, carte Google, téléphone, horaires.

## Charte
Palette fournie par Benjamin :

| Rôle | HEX | Usage sur le site |
|---|---|---|
| Jaune principal | `#FFD700` | aplats, boutons secondaires, accents sur fond sombre |
| Noir profond | `#212121` | texte principal, boutons noirs |
| Gris anthracite | `#424242` | rayures du filet sur fond sombre, bordures |
| Rouge d'urgence | `#DC3545` | CTA principal (appel), badges, encadré d'alerte |
| Gris clair neutre | `#F5F5F5` | arrière-plan général |
| Jaune pâle | `#FFFACD` | pastilles, survol du menu mobile |

**Trois couleurs ajoutées** (la charte ne couvrait pas tous les états d'interface) :
- `#E6C000` **jaune foncé** — survol des boutons jaunes (sans lui, aucun retour visuel).
- `#B02A37` **rouge foncé** — survol des boutons rouges **et** couleur des petits intitulés
  sur fond clair. Le rouge `#DC3545` ne fait que 4,15:1 sur `#F5F5F5`, sous le seuil de
  lisibilité ; le rouge foncé monte à 5,96:1.
- `#141414` **nuit** — fond des bandes sombres, pour se distinguer du noir du texte.

**Règle qui structure tout le site :** le jaune `#FFD700` ne sert **jamais** de couleur de
texte sur fond clair (1,3:1, illisible). Il sert d'**aplat** avec du texte noir (11,5:1) ou
de **texte sur fond sombre** (13:1).

## Typographie
**Anton + Switzer**, auto-hébergées — les mêmes que France Nuisibles, puisque la demande
était de reprendre ce site. Anton (display condensé type affiche) colle particulièrement
bien au registre « alerte / danger » du métier. À changer si Benjamin veut différencier
visuellement les deux clients.

## Fournis par Benjamin
- `logo.png` — pastille carrée, guêpe barrée d'un rond rouge, sur fond blanc
- `exterminateur.png` — technicien sur toiture, traitement sous les tuiles (photo réelle)
- `nid_guepes.png` — gros nid de frelons asiatiques sous une panne de charpente (photo réelle)

## Produits pour la maquette (⚠️ à remplacer)
Le client n'ayant que trois visuels, trois images ont été **générées** (Higgsfield) pour
tenir la maquette. Elles sont dans `generes/` et **doivent être remplacées par de vraies
photos du client avant mise en ligne** :
- `volet.png` → réalisation « coffre de volet roulant »
- `arbre.png` → réalisation « frelons asiatiques à onze mètres »
- `technicien.png` → portrait de la section À propos

Les six témoignages de la section Avis sont également **des exemples rédigés**, pas de vrais
avis clients (drapeau `avisReels = false` dans `src/data/site.ts`).

## Manque encore
- **E-mail du client** → pour générer la clé Web3Forms et activer le formulaire.
- **Vraies photos d'intervention** → pour remplacer les trois visuels générés.
- **Vrais avis clients** → 14 avis existent sur la fiche Google, il suffit de les recopier.
- Confirmation de l'adresse et du nom exact à afficher.
- Nom de domaine.
