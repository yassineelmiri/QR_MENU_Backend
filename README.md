# QR_MENU_Backend

![image](https://github.com/user-attachments/assets/6825a23d-dc20-4cdb-82d8-aaf16171479a)


QR_MENU_Backend est un projet Node.js permettant la gestion d'un système de menus QR pour les restaurants. Ce backend gère plusieurs fonctionnalités telles que la création d'utilisateurs, l'ajout de menus, la génération de QR codes, la gestion des migrations de base de données, et la génération de fichiers PDF pour les menus.

## Fonctionnalités
- **Gestion des utilisateurs** : Création, modification et suppression des utilisateurs.
- **Gestion des menus** : Ajout, modification et suppression de menus pour les restaurants.
- **QR Codes** : Génération de QR codes pour chaque menu, permettant aux utilisateurs de consulter les menus via leur téléphone.
- **Templates PDF** : Génération de fichiers PDF des menus pour impression ou téléchargement.
- **Migrations de base de données** : Mise à jour de la structure de la base de données avec des migrations.
- **Routes RESTful** : API pour gérer les utilisateurs, les menus et les QR codes.

## Technologies
- **Node.js** : Environnement d'exécution pour le backend.
- **Sequelize** : ORM pour gérer les interactions avec la base de données.
- **PostgreSQL** : Base de données relationnelle utilisée pour stocker les informations.
- **JWT (JSON Web Tokens)** : Pour la gestion des sessions et l'authentification des utilisateurs.
- **QR Code** : Génération de QR codes pour les menus.
- **PDF Generation** : Génération de templates PDF pour les menus.

## Structure du projet
Voici un aperçu de la structure du projet :

```
QR_MENU_Backend/
├── config/                 # Configuration de l'application
│   └── config.js           # Paramètres de connexion et autres configurations
├── database/               # Gestion de la connexion à la base de données
│   └── connection.js       # Connexion à la base de données
├── migrations/             # Fichiers de migration pour la base de données
│   ├── 20200701215417-create_users_table.js
│   ├── 20200701220558-create_menu_table.js
│   └── 20200706203848-qr.js
├── models/                 # Modèles de données pour Sequelize
│   ├── index.js            # Initialisation des modèles
│   ├── MenuItem.js         # Modèle pour les éléments du menu
│   ├── Qr.js               # Modèle pour les QR codes
│   └── User.js             # Modèle pour les utilisateurs
├── pdf/                    # Templates PDF pour les menus
│   ├── template.js         # Script pour générer les templates PDF
│   └── template.html       # Structure HTML pour les PDF
├── routes/                 # Définition des routes de l'API
│   ├── menu.js             # Routes pour gérer les menus
│   ├── restaurant.js       # Routes pour gérer les restaurants
│   └── users.js            # Routes pour gérer les utilisateurs
├── server.js               # Point d'entrée du serveur
├── package.json            # Dépendances du projet
├── package-lock.json       # Lock des dépendances
└── README.md               # Documentation du projet
```

## Installation
### Prérequis
Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/en/) (version 14.x ou supérieure)
- [PostgreSQL](https://www.postgresql.org/) (ou une autre base de données supportée)

### Étapes d'installation
1. Clonez le repository depuis GitHub :

   ```bash
   git clone https://github.com/yassineelmiri/QR_MENU_Backend
   cd QR_MENU_Backend
   ```

2. Installez les dépendances avec npm :

   ```bash
   npm install
   ```

3. Configurez votre base de données et les paramètres dans `config/config.js`.

4. Lancez les migrations pour mettre à jour la base de données :

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Démarrez le serveur :

   ```bash
   npm start
   ```

Le serveur sera maintenant disponible à l'adresse [http://localhost:3000](http://localhost:3000).

## Configuration
Vous devez configurer les paramètres suivants dans `config/config.js` :
- **Base de données** : Assurez-vous que les informations de connexion à votre base de données sont correctes.
- **JWT secret** : La clé secrète utilisée pour signer les tokens JWT pour l'authentification.

## Utilisation
- **Endpoints de l'API** : 
    - `POST /api/users` : Créer un nouvel utilisateur.
    - `GET /api/menus` : Récupérer tous les menus.
    - `POST /api/qr` : Générer un QR code pour un menu.
    - `GET /api/menus/:id/pdf` : Générer un PDF du menu spécifié.

- **QR Code** : Pour chaque menu créé, un QR code est généré, pointant vers le menu accessible via un lien unique.

- **Templates PDF** : Les utilisateurs peuvent télécharger un fichier PDF représentant le menu.

## Tests
Les tests sont inclus dans le projet. Pour exécuter les tests, vous pouvez utiliser la commande suivante :

```bash
npm test
```

## Contributeurs
Si vous souhaitez contribuer au projet, n'hésitez pas à créer un pull request ou à ouvrir une issue pour discuter des améliorations ou des corrections.
yassine elmiri
