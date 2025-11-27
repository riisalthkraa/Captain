# 🎓 Cap'taine V2.0 - Guide de Test

## 🚀 Système Multi-tenant Implémenté !

### ✅ Ce qui a été développé

#### 1. **Base de Données V2** (`src/services/databaseV2.ts`)
- ✅ Tables complètes : Classroom, Student, Teacher, Lesson, Exercise, Homework, Submission, Analytics
- ✅ Méthodes CRUD pour toutes les entités
- ✅ Indexes optimisés pour performances
- ✅ Support complet du workflow Prof ↔ Élève

#### 2. **Système d'Authentification** (`src/services/auth.ts`)
- ✅ Login Élève (prénom + code classe)
- ✅ Login Professeur (email + mot de passe)
- ✅ Inscription Professeur
- ✅ Gestion de session (localStorage)
- ✅ Hash de mot de passe (SHA-256, à remplacer par bcrypt en prod)

#### 3. **Stores Zustand**
- ✅ `useAuthStore`: Gestion de l'authentification
- ✅ `useClassroomStore`: Gestion des classes, élèves, devoirs

#### 4. **Interfaces Utilisateur**
- ✅ `LoginScreen`: Écran de connexion unifié Élève/Prof
- ✅ Routing automatique basé sur l'auth
- ✅ Bouton de déconnexion dans la sidebar

---

## 🧪 Comment Tester (Étape par Étape)

### **ÉTAPE 1: Lancer l'application**

```bash
npm run dev
```

L'app devrait s'ouvrir et afficher **l'écran de login** au lieu du chat habituel.

---

### **ÉTAPE 2: Créer des données de démo**

1. **Ouvrir la console navigateur** (F12 ou Ctrl+Shift+I)

2. **Exécuter le script de démo** :
   ```javascript
   await createDemoData()
   ```

3. **La console affichera** :
   ```
   [Demo] ✅ Demo data created successfully!
   [Demo] -----------------------------------------
   [Demo] 👨‍🏫 PROFESSEUR:
   [Demo]    Email: marie.dupont@ecole.fr
   [Demo]    Mot de passe: password123
   [Demo] -----------------------------------------
   [Demo] 👤 ÉLÈVES:
   [Demo]    Prénom: theo (ou emma, lucas, lea, hugo, etc.)
   [Demo]    Code classe: PIRATES2024
   [Demo] -----------------------------------------
   ```

---

### **ÉTAPE 3: Tester le Login ÉLÈVE** 👤

1. **Sur l'écran de login**, cliquer sur l'onglet **"Élève"** (déjà sélectionné par défaut)

2. **Entrer les informations** :
   - **Prénom** : `theo` (ou n'importe quel prénom créé : emma, lucas, lea, hugo, chloe, nathan, manon, tom, lily)
   - **Code classe** : `PIRATES2024`

3. **Cliquer sur "Se connecter"**

4. **RÉSULTAT ATTENDU** :
   - ✅ Connexion réussie
   - ✅ L'interface principale s'affiche
   - ✅ Dans la sidebar, on voit "Théo - 👤 Élève"
   - ✅ Chat disponible (existant)
   - ✅ Bouton "Déconnexion" visible

5. **Tester la déconnexion** :
   - Cliquer sur "Déconnexion"
   - → Retour à l'écran de login

---

### **ÉTAPE 4: Tester le Login PROFESSEUR** 👨‍🏫

1. **Sur l'écran de login**, cliquer sur l'onglet **"Professeur"**

2. **Entrer les informations** :
   - **Email** : `marie.dupont@ecole.fr`
   - **Mot de passe** : `password123`

3. **Cliquer sur "Se connecter"**

4. **RÉSULTAT ATTENDU** :
   - ✅ Connexion réussie
   - ✅ L'interface principale s'affiche
   - ✅ Dans la sidebar, on voit "Marie Dupont - 👨‍🏫 Professeur"
   - ✅ Interface complète disponible

---

### **ÉTAPE 5: Tester l'Inscription PROFESSEUR** ✨

1. **Sur l'écran de login**, onglet **"Professeur"**

2. **Cliquer sur** "Pas encore de compte ? Inscrivez-vous"

3. **Remplir le formulaire** :
   - **Prénom** : Jean
   - **Nom** : Martin
   - **Email** : jean.martin@ecole.fr
   - **Mot de passe** : test123

4. **Cliquer sur "Créer mon compte"**

5. **RÉSULTAT ATTENDU** :
   - ✅ Compte créé
   - ✅ Connexion automatique
   - ✅ Interface principale affichée
   - ✅ "Jean Martin - 👨‍🏫 Professeur" dans la sidebar

---

## 🔍 Vérifications dans la Console

### **Vérifier les données en base**

```javascript
// Voir toutes les classes
await dbV2.classrooms.toArray()

// Voir tous les élèves
await dbV2.students.toArray()

// Voir tous les professeurs
await dbV2.teachers.toArray()

// Voir une classe spécifique
await dbV2.getClassroomByAccessCode('PIRATES2024')

// Voir les élèves d'une classe
const classroom = await dbV2.getClassroomByAccessCode('PIRATES2024')
await dbV2.getClassroomStudents(classroom.id)
```

---

## 🐛 Problèmes Potentiels & Solutions

### **❌ "Prénom ou code classe incorrect"**
**Cause** : Les données de démo n'ont pas été créées ou ont été supprimées

**Solution** :
```javascript
// Nettoyer la base
await dbV2.delete()
location.reload()

// Puis recréer les données
await createDemoData()
```

---

### **❌ L'écran de login ne s'affiche pas**
**Cause** : Une ancienne session est encore active

**Solution** :
```javascript
// Forcer la déconnexion
useAuthStore.getState().logout()
location.reload()
```

---

### **❌ Erreur TypeScript lors de la compilation**
**Cause** : Imports manquants ou types non reconnus

**Solution** :
```bash
# Vérifier que tous les packages sont installés
npm install

# Redémarrer le serveur de dev
npm run dev
```

---

## 📋 Checklist de Test Complet

### **✅ Authentification**
- [ ] Login élève fonctionne
- [ ] Login prof fonctionne
- [ ] Inscription prof fonctionne
- [ ] Déconnexion fonctionne
- [ ] Session persiste après rechargement de page
- [ ] Erreurs de login affichent un message clair

### **✅ Base de Données**
- [ ] Classe créée avec code d'accès
- [ ] Élèves créés avec username
- [ ] Professeur créé avec hash de mot de passe
- [ ] Données persistent après rechargement

### **✅ Interface**
- [ ] Écran de login bien stylé
- [ ] Switch entre onglets Élève/Prof fluide
- [ ] Messages d'erreur affichés correctement
- [ ] Interface principale s'affiche après login
- [ ] Bouton déconnexion visible et fonctionnel
- [ ] Info utilisateur affichée dans sidebar

---

## 🎯 Prochaines Étapes

### **Phase 2 - Interface Professeur** (À développer)
1. Dashboard "Ma Classe"
   - Liste des classes du prof
   - Création de nouvelle classe
   - Vue d'ensemble de la classe

2. Gestion des élèves
   - Ajouter/Supprimer des élèves
   - Voir le détail d'un élève
   - Tableau des faiblesses

3. Création de devoirs
   - Sélection d'exercices
   - Configuration (date limite, aide autorisée)
   - Publication

4. Analytics
   - Heatmap des compétences
   - Élèves en difficulté
   - Rapports PDF

### **Phase 3 - Interface Élève** (À adapter)
1. Mes Devoirs
   - Liste des devoirs à faire
   - Devoirs en cours
   - Devoirs terminés

2. Ma Progression
   - Dashboard personnel
   - Graphiques de progression
   - Points forts/faibles

---

## 💡 Notes de Développement

### **Sécurité (À améliorer pour Production)**
- [ ] Remplacer SHA-256 par bcrypt pour les mots de passe
- [ ] Ajouter validation côté serveur
- [ ] Implémenter rate limiting
- [ ] Ajouter CSRF protection
- [ ] Sanitizer les inputs

### **Performance**
- [ ] Implémenter pagination pour grandes classes
- [ ] Optimiser requêtes Dexie avec indexes
- [ ] Lazy loading des analytics
- [ ] Cache des données fréquentes

### **UX**
- [ ] Loading states pendant les requêtes
- [ ] Animations de transition
- [ ] Feedback visuel sur actions
- [ ] Gestion d'erreurs plus détaillée

---

## 🔧 Commandes Utiles (Console)

```javascript
// Reset complet de la base de données
await dbV2.delete()
location.reload()

// Voir toutes les tables
console.log(await dbV2.classrooms.toArray())
console.log(await dbV2.students.toArray())
console.log(await dbV2.teachers.toArray())

// Forcer déconnexion
useAuthStore.getState().logout()

// Voir la session actuelle
useAuthStore.getState().session

// Créer une nouvelle classe manuellement
await dbV2.createClassroom({
  name: "CE2-B",
  level: "CE2",
  accessCode: "JUNGLE2024",
  teacherId: "tchr_001",
  teacherName: "Marie Dupont",
  subjects: ["Mathématiques", "Français"],
  schoolYear: "2024-2025",
  isArchived: false
})
```

---

## 🎉 Félicitations !

Si tous les tests passent, **le système d'authentification multi-tenant est opérationnel** !

On peut maintenant passer à la construction des interfaces Professeur (Dashboard, Gestion de classe, Création de devoirs, Analytics).

**Prochaine étape** : Builder le Dashboard Professeur "Ma Classe" 🚀
