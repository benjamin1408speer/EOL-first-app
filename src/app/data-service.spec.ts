import { DataService } from './data-service';

// 'describe' definiert eine Test-Suite (eine Gruppe von zusammengehörigen Tests).
describe('DataService', () => {
  let service: DataService;

  // 'beforeEach' wird vor JEDEM einzelnen Test ausgeführt.
  beforeEach(() => {
    // Da der Service keine Abhängigkeiten hat, können wir ihn einfach mit 'new' instanziieren.
    // Das ist schneller und einfacher als TestBed.
    service = new DataService();
  });

  // Ein einzelner Testfall (Unit Test).
  it('sollte erstellt werden', () => {
    expect(service).toBeTruthy();
  });

  it('sollte alle Inhalte zurückgeben', () => {
    // Arrange (Vorbereitung): Wir holen die Daten.
    const alleDaten = service.GetAll();

    // Assert (Prüfung):
    expect(alleDaten).toBeDefined();
    expect(alleDaten.length).toBeGreaterThan(0);
  });

  it('sollte einen spezifischen Ozean anhand der ID finden (z.B. pacific)', () => {
    // Act (Ausführung): Wir suchen nach dem Pazifik.
    const pazifik = service.GetOcean('pacific');

    // Assert (Prüfung):
    expect(pazifik).toBeDefined();
    expect(pazifik?.title).toContain('Pazifik');
  });

  it('sollte undefined zurückgeben, wenn die ID nicht existiert', () => {
    // Act & Assert
    const nichtGefunden = service.GetOcean('gibtEsNicht');
    expect(nichtGefunden).toBeUndefined();
  });
});
