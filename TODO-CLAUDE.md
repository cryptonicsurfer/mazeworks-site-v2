# TODO: Optimera animationer

## Bakgrund
Detta är en kopia av mazeworks-site. Originalversionen har 3D-animationer och effekter som är tunga för systemet och kan bli "hackiga" på vissa datorer.

## Uppgift
Skapa alternativa, lättare animationer som:
- Är mindre CPU/GPU-krävande
- Fungerar smidigt på svagare hårdvara
- Behåller en snygg och professionell känsla

## Filer att fokusera på
- `components/QuantumScene.tsx` - 3D hero scenes med Three.js
- `components/Diagrams.tsx` - Interaktiva diagram med Framer Motion
- `App.tsx` - Eventuella Framer Motion-animationer

## Förslag på optimeringar
1. Ersätt tunga 3D-scener med lättare 2D/CSS-animationer
2. Reducera antal partiklar/objekt i 3D-scener
3. Använd `will-change` och `transform` för GPU-accelerering
4. Minska Framer Motion komplexitet
5. Lägg till `prefers-reduced-motion` stöd
6. Överväg att använda enklare gradient-animationer istället för 3D

## När du börjar
1. Läs igenom befintliga animationskomponenter
2. Identifiera de tyngsta delarna
3. Skapa lättare alternativ som behåller designkänslan
