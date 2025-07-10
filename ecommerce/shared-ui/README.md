# Shared Design System

Ein **framework-agnostisches Design System** für die E-Commerce Microfrontend-Architektur. Basiert auf CSS Custom Properties für maximale Kompatibilität zwischen Angular, React und Vue.

## 🎯 Zweck

Dieses Design System gewährleistet **einheitliches Design** über alle Microfrontends hinweg, obwohl verschiedene Teams mit unterschiedlichen Frameworks arbeiten.

## 🎨 Design-Grundlagen

### Farbpalette

- **Primary:** Lila (`#8b5cf6`) - Hauptfarbe für alle Aktionselemente
- **Semantic:** Grün (Erfolg), Orange (Warnung), Rot (Fehler)
- **E-Commerce:** Spezielle Farben für Preise, Rabatte, Lagerbestände

### Layout

- **Container:** 1440px maximale Breite für Desktop
- **Grid:** CSS Grid für E-Commerce Layout (Header, Katalog, Empfehlungen, Warenkorb)
- **Spacing:** Konsistente 4px-basierte Abstände

## 📦 Verwendung in Microfrontends

### Angular

```scss
// styles.scss
@import 'shared-ui/src/index.css';
```

### React

```jsx
// App.jsx
import 'shared-ui/src/index.css';
```

### Vue

```vue
<!-- App.vue -->
<style>
@import 'shared-ui/src/index.css';
</style>
```

## 🧱 Komponenten

### Buttons

```html
<!-- Primary Button (Lila) -->
<button class="btn btn-primary">Speichern</button>

<!-- Add to Cart Button -->
<button class="btn btn-add-to-cart">In Warenkorb</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Abbrechen</button>
```

### Product Cards

```html
<div class="product-card">
  <img src="product.jpg" class="product-image" alt="Produkt" />
  <div class="product-info">
    <h3 class="product-name">iPhone 15</h3>
    <p class="product-description">Das neueste iPhone mit...</p>
    <div class="product-price">
      <span class="price-current">999€</span>
      <span class="price-original">1099€</span>
      <span class="price-discount">-9%</span>
    </div>
    <div class="product-actions">
      <button class="btn btn-add-to-cart">In Warenkorb</button>
    </div>
  </div>
</div>
```

### Layout

```html
<!-- E-Commerce Hauptlayout -->
<div class="ecommerce-layout">
  <header class="header-area">Header Microfrontend</header>
  <main class="catalog-area">Produktkatalog Microfrontend</main>
  <aside class="recommendations-area">Empfehlungen Microfrontend</aside>
  <aside class="cart-area">Warenkorb Microfrontend</aside>
</div>
```

## 🎨 Design Tokens

### Farben

```css
var(--color-primary)        /* #8b5cf6 - Lila */
var(--color-success)        /* #10b981 - Grün */
var(--color-error)          /* #ef4444 - Rot */
var(--color-gray-900)       /* #111827 - Dunkelgrau */
```

### Typography

```css
var(--font-size-lg)         /* 1.125rem */
var(--font-weight-semibold) /* 600 */
var(--font-family-sans)     /* Inter */
```

### Spacing

```css
var(--spacing-4)            /* 1rem (16px) */
var(--spacing-6)            /* 1.5rem (24px) */
var(--spacing-8)            /* 2rem (32px) */
```

## 🔧 Framework-Integration

### Styling-Strategien

**Angular:**

```scss
// Globale Styles in styles.scss
@import 'shared-ui/src/index.css';

// Komponenten-spezifisch
.my-component {
  .custom-button {
    @extend .btn;
    @extend .btn-primary;
  }
}
```

**React:**

```jsx
// Global import in index.js
import 'shared-ui/src/index.css';

// Komponenten verwenden CSS-Klassen
function ProductCard() {
  return <button className="btn btn-add-to-cart">In Warenkorb</button>;
}
```

**Vue:**

```vue
<!-- Global in main.js -->
import 'shared-ui/src/index.css';

<!-- Komponenten nutzen CSS-Klassen -->
<template>
  <button class="btn btn-primary">{{ text }}</button>
</template>
```

## 🚀 Architektur-Vorteile

### Framework-Agnostik

- ✅ **CSS Custom Properties** funktionieren überall
- ✅ **Keine JavaScript-Abhängigkeiten**
- ✅ **Standard CSS-Imports**

### Konsistenz

- ✅ **Gleiche Farben** in allen Microfrontends
- ✅ **Identische Hover-Effekte**
- ✅ **Einheitliche Abstände**

### Performance

- ✅ **Kleine Dateigröße** (nur CSS)
- ✅ **Cacheable** zwischen Microfrontends
- ✅ **Keine Runtime-Overhead**

## 📋 Entwicklung

### Struktur

```
src/
├── tokens/          # Design Tokens (Farben, Typography, Spacing)
├── components/      # UI-Komponenten (Button, Card, Layout)
└── index.css        # Zentraler Einstiegspunkt
```

### Erweiterung

Neue Komponenten hinzufügen:

1. CSS-Datei in `src/components/` erstellen
2. In `src/index.css` importieren
3. In allen Microfrontends verfügbar

## 🎓 Bachelorarbeit - Beweis

Dieses Design System beweist:

- **Coherent Design** trotz Framework-Heterogenität
- **Team-Autonomie** bei technischen Entscheidungen
- **Einheitliche UX** ohne Flickenteppich-Effekt
