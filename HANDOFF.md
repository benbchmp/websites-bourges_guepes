# HANDOFF — Bourges Guêpes

**Dernière session : 24/07/2026.** Site en ligne sur Railway. Hero refondu et contenu
repassé (règles d'écriture ci-dessous).

> ⚠️ **La version en ligne est en retard d'un cran sur le local.** Les modifications du
> 24/07 (hero + tirets) sont commitées en local mais **pas poussées** : pousser déclenche
> un déploiement automatique, et Benjamin n'a pas encore dit go.

## Session du 24/07 : hero et règles d'écriture

**Hero refondu**, à la demande de Benjamin :

| | Avant | Après |
|---|---|---|
| Accroche | « Un nid de guêpes ou de frelons ? / On s'en occupe aujourd'hui. » | « Ils sont déjà chez vous. / **Vous allez les laisser faire ?** » |
| Bouton principal | le numéro de téléphone | « **Reprenez le contrôle** » (lien `tel:` inchangé) |
| Pastille « zone · 7 j/7 » au-dessus du titre | présente | **supprimée** |
| Bande « ✓ 7 j/7 ✓ Certibiocide ✓ Devis gratuit » sous les boutons | présente | **supprimée** |

Ces deux suppressions sont désormais des **interdits catégoriques sur tous les sites**,
inscrits dans `_shared/design-system.md` et `CLAUDE.md` §3. L'export `garanties` de
`src/data/site.ts` a été retiré (il ne servait qu'à cette bande).

Le numéro reste visible en permanence dans la barre de navigation (en toutes lettres sur
ordinateur, en bouton icône sur mobile), donc rien n'est perdu en le retirant du hero.

**Tirets bannis.** Plus aucun `—` au milieu d'une phrase dans le contenu visible ; remplacés
par `:`, `;`, `( )` ou un point. Neuf occurrences corrigées (accroches de sections, textes
des réalisations et du protocole, texte d'aide du formulaire, `alt` et `aria-label`, titre
de la page). Contrôle : `grep -o ".\{50\}[—–].\{50\}" dist/index.html` ne doit plus ressortir
que les intervalles d'horaires.

Vérifié au rendu réel (captures 1440 px et 390 px) : aucune erreur console, aucun
débordement horizontal, Anton chargée, tous les blocs `.reveal` révélés.

---

**Session du 23/07/2026.** Premier jet livré, vérifié en local. Dépôt Git initialisé
et poussé sur GitHub.

---

## État : v1 complète, en attente de retour

Site **une page**, Astro 5 + Tailwind 4, statique. Les six sections de `ser_fr_nuisibles`
sont reprises et adaptées, vérifiées au rendu réel (captures headless en 1440 px et 390 px) :
**aucune erreur console, aucun débordement horizontal**, la carte Google charge, les polices
se chargent, tous les blocs `.reveal` apparaissent bien.

```
cd ser_bourges_guepes/site
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

---

## Ce qui a changé par rapport à France Nuisibles

| | France Nuisibles | Bourges Guêpes |
|---|---|---|
| Hero | vidéo de fond 4 Mo | **photo** plein écran (pas de vidéo fournie) |
| CTA principal du hero | → section contact | → **le numéro de téléphone** |
| Protocole | 2 passages | **3 étapes** (téléphone / sur place / après) |
| Pied de page | fond clair | **fond sombre** (usage prévu par la charte) |
| Logo | bloc horizontal recomposé en PNG | pastille + **nom en HTML** (net à toute taille) |
| Accent de marque | bleu | **jaune** — mais uniquement en aplat, jamais en texte clair |
| Filet de section | trait bicolore bleu/rouge | **rayures jaune/noir** (abdomen de la guêpe du logo) |

Le reste — grille, rythme des sections, carrousel, colonnes d'avis, formulaire, script
d'apparition au défilement — est repris tel quel.

---

## Décisions prises (et pourquoi)

**Pas de SEO.** Aucun JSON-LD, aucun sitemap, aucune méta travaillée — consigne de Benjamin,
inscrite dans `CLAUDE.md` §7.

**Le jaune ne fait jamais office d'encre.** `#FFD700` sur fond clair, c'est 1,3:1 : illisible.
Toute la palette du site découle de cette contrainte — le jaune est un aplat (texte noir
dessus, 11,5:1) ou une couleur de texte sur fond sombre (13:1). Les petits intitulés de
section sur fond clair prennent donc un **rouge foncé `#B02A37`** (5,96:1) et non le rouge
d'urgence `#DC3545` de la charte, qui ne fait que 4,15:1. Détail complet en tête de
`src/styles/global.css`.

**Le hero appelle, il ne renvoie pas vers un formulaire.** C'est un métier d'urgence : le
bouton principal du premier écran est le numéro de téléphone, pas « demander un devis ».
Le formulaire reste en bas de page pour ceux qui ne veulent pas appeler.

**Filet rayé jaune/noir** (`.rule-guepe`) comme signature graphique, en remplacement du trait
bicolore de France Nuisibles. Il reprend l'abdomen de la guêpe du logo et, accessoirement, le
code universel du danger. Version éclaircie (`.rule-guepe-clair`) sur la bande sombre, où le
noir des rayures disparaîtrait.

**Logo.** Fourni en pastille carrée sur fond blanc. Fond détouré par remplissage par diffusion
**depuis les bords** — un simple « supprimer le blanc » aurait percé les ailes et les yeux de
la guêpe, qui sont blancs eux aussi. Le nom « BOURGES GUÊPES » est posé en HTML à côté de la
pastille plutôt que recomposé en image : net à toutes les tailles, et lisible par un lecteur
d'écran.

**Note Google (5,0 ★ · 14 avis) et adresse** trouvées dans la fiche affichée par la carte
Google intégrée, pas fournies par le client. À faire confirmer. Si un jour ces valeurs sont
remises à `null` dans `src/data/site.ts`, la pastille de notation se remplace automatiquement
par un simple lien « Voir nos avis sur Google » — on n'affiche jamais une note inventée.

**Abeilles.** Le site annonce explicitement qu'on ne détruit pas les essaims d'abeilles et
qu'on oriente vers un apiculteur. C'est vrai du métier, ça rassure, et ça distingue d'un
désinsectiseur pressé.

---

## ⚠️ Bloquants avant mise en ligne

1. **Trois visuels sur cinq sont générés par IA.** `generes/volet.png`, `generes/arbre.png` et
   `generes/technicien.png` (donc les deux premières réalisations et le portrait de la section
   À propos) sont des **illustrations de maquette**, pas des photos du client. **À remplacer
   par de vraies photos d'intervention avant publication.** Les deux autres — le hero et la
   troisième réalisation — sont les photos réelles fournies par Benjamin.
2. **Les témoignages sont des exemples, pas de vrais avis.** Ils sont dans `src/data/site.ts`
   sous un bandeau d'avertissement, avec un drapeau `avisReels = false`. Le client a **14 vrais
   avis Google** : il suffit de les recopier, puis de passer le drapeau à `true`.
3. **Le formulaire n'envoie rien.** `web3formsKey` vaut `null` : le formulaire s'affiche et se
   valide, mais au clic il affiche « le formulaire n'est pas encore activé, appelez-nous ».
   Pour l'activer : créer une clé gratuite sur web3forms.com **avec l'e-mail du client**, la
   coller dans `web3formsKey`. Rien d'autre à faire.
4. **Adresse et note Google à faire confirmer** par le client.

---

## À faire ensuite

- [ ] Vraies photos d'intervention → remplacer les 3 visuels générés
- [ ] Vrais avis Google (ils existent, 14) → `avisReels = true`
- [ ] E-mail du client → clé Web3Forms
- [ ] Passe SEO dédiée (JSON-LD `LocalBusiness`, métas, sitemap, audit `seo-geo-aeo`)
- [x] ~~Déploiement Railway~~ → en ligne le 24/07/2026
- [ ] Nom de domaine personnalisé (Settings → Networking → Custom Domain)
- [ ] Renommer le projet Railway `wonderful-enjoyment` → `BOURGES GUEPES` (cohérence avec
      les autres projets : AIGLE D'ORIENT, MEKONG, REFLEX ARCHI…)

---

## Déploiement

Le dépôt est prêt : `railway.json` est **à la racine** (pas dans `site/`) et `serve` est dans
les `dependencies` de `site/package.json`.

**Le seul réglage à faire dans l'interface Railway : Root Directory = `/site`.**
Railway le met à `/` par défaut et le build échoue sans ça.

**Projet Railway : `wonderful-enjoyment` · service `websites-bourges_guepes`.**

### ✅ EN LIGNE depuis le 24/07/2026

**https://websites-bourgesguepes-production.up.railway.app**

Vérifié en ligne : HTML (bon titre, bon contenu), CSS, les 4 polices woff2, les images
WebP et le favicon répondent tous en **200**. Build Railway identique au build local
(1 page, 19 images optimisées).

Configuration finale — **aucune variable d'environnement**, un seul réglage manuel :

| | |
|---|---|
| Root Directory (interface Railway) | `/site` |
| `railway.json` | à la **racine** du dépôt |
| `buildCommand` | `npm run build` **seul** |
| `startCommand` | `npx serve dist -l tcp://0.0.0.0:${PORT:-8080}` |
| `site/.node-version` | `22` |

### Ce qui a coûté 6 builds ratés (et qui est maintenant documenté)

1. **`npm: not found` (exit 127)** — Railpack n'installait aucun Node. Le signe : le plan de
   build n'affiche **aucune section `Packages`**. Corrigé par Root Directory `/site`
   + `site/.node-version`.
2. **`EBUSY: rmdir '/app/node_modules/.astro'` (exit 240)** — le `buildCommand` contenait
   `npm ci && npm run build`. Railpack fait **déjà** l'installation ; le second `npm ci`
   tentait d'effacer un `node_modules` monté en cache.
3. **Un « Redeploy » ne relit pas le dépôt** — Railway réutilise l'instantané (archive de
   taille strictement identique d'un build à l'autre). Après un changement de réglage,
   il faut **pousser un commit**.

La recette complète, réutilisable pour tous les clients, est dans
**`_shared/deploiement-railway.md`**, et les points essentiels sont remontés dans
`CLAUDE.md` §7.

Testé en local — c'est exactement ce que Railway servira :
```bash
cd site && npm run build && npx serve dist -l tcp://0.0.0.0:4399
```

---

## Structure

```
ser_bourges_guepes/                ← racine du dépôt Git
├─ BRIEF.md · HANDOFF.md
├─ railway.json                    ← config Railway (RESTE ici, ne pas déplacer dans site/)
├─ logo.png · exterminateur.png · nid_guepes.png   ← sources fournies par Benjamin
├─ generes/                        ← visuels générés (⚠️ maquette, à remplacer)
└─ site/
   ├─ public/fonts/      4 woff2 auto-hébergés (Anton, Switzer)
   ├─ public/logo.png    favicon
   ├─ src/assets/        images optimisées par Astro au build
   ├─ src/data/site.ts   ← TOUT le contenu éditable est ici
   ├─ src/styles/        global.css (jetons + règles de contraste) + fonts.css
   └─ src/components/    Nav · Hero · APropos · Realisations · Processus · Avis · Contact · Footer
```

---

## Détails d'implémentation utiles

- **Carrousel réalisations** : défilement natif avec accrochage CSS (`snap-x`), piloté par les
  flèches, les pastilles et les touches ←/→. Reste utilisable sans JavaScript.
- **Horaires** : le jour courant est mis en évidence et un badge « Ouvert maintenant / Fermé »
  est calculé côté client à partir des plages de `src/data/site.ts`. Vérifié : à 23h un jeudi,
  le badge affiche bien « Fermé ».
- **Classes maison** (`.overline`, `.rule-guepe`, `.reveal`) : déclarées dans
  `@layer components`. Important — hors calque, elles gagneraient contre les utilitaires
  Tailwind et toute surcharge locale (`tracking-[…]`, `text-[…]`) resterait sans effet.
- **Photo du hero** en `loading="eager"` + `fetchpriority="high"` : c'est la plus grande image
  du premier écran, c'est elle qui fixe la vitesse perçue du site.
- **Piège de capture headless à connaître** : `scroll-behavior: smooth` sur `html` fait que des
  `window.scrollTo()` successifs s'annulent — la page ne descend pas, les blocs `.reveal`
  restent invisibles et la capture pleine page ressort avec des sections vides. Neutraliser
  `scrollBehavior` le temps du parcours avant de capturer.
