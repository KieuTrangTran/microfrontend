// Import Shared Design System für einheitliches Styling
import '../../shared-ui/src/index.css';

// Shell-Initialisierung
console.log('🚀 MicroStore Shell gestartet');
console.log('📦 Shared Design System geladen');

// Design System Debug-Info aus dem gemeinsamen Design System
const debugElement = document.createElement('div');
debugElement.className = 'design-system-debug';
debugElement.textContent = '🎯 Design System aktiv: Lila Primary loaded';
document.body.appendChild(debugElement);

// Module Federation-Vorbereitung (später implementiert)
// TODO: Microfrontend-Loading Logic hier hinzufügen
