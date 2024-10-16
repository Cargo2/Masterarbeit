import {Order} from './app/shared/models/Orders';

export const sampleOrders: Order[] = [

        {
            id: '1',
            headerText: 'User-Exit Einrichtung',
            description: 'Für ein Projekt im SAP-Bereich wird ein User Exit zwischen den Modulen SD (Sales and Distribution) und FI (Financial Accounting) benötigt. Die Anforderung besteht darin, eine automatisierte Übertragung kundenspezifischer Felder aus dem SD-Modul in das FI-Modul zu implementieren. Konkret soll bei der Erstellung einer Kundenrechnung im SD-Modul eine zusätzliche Validierung erfolgen, um buchhalterische Informationen, wie z. B. spezifische Buchungsschlüssel oder Kostenstellen, korrekt und automatisch in das FI-Modul zu überführen. Ziel ist es, manuelle Eingriffe zu minimieren und die Datenintegrität zwischen den Modulen zu gewährleisten. Die Implementierung soll sicherstellen, dass die relevanten Felder bei der Fakturierung vollständig und korrekt übernommen werden. ',
            module: ['SD', 'FI'],
            spro: ['spro1', 'spro2'],
            stack: 'ABAP',
            conditions: 'conditions1',
            usecase: 'usecase1',
            orderType: 'assets/workbench.png',
            dueDate: new Date(),
            communcation: ['communication1', 'communication2'],
            remote: 1,
            contactdirect: 'Holger Bathke',
            expense: 'expense1',
            startDate: '01.01.2025'
        },
        {
            id: '2',
            headerText: 'ArcLink Einrichtung Archivierung',
            description: 'Es soll die Implementierung einer Archivierungslösung für Bestellanforderungen in MM umgesetzt werden. Ältere Bestellanforderungen, die bereits abgeschlossen oder storniert wurden, sollen automatisch archiviert werden, um die Systemperformance zu verbessern und die Datenbank zu entlasten. Dabei soll sichergestellt werden, dass archivierte Bestellanforderungen dennoch bei Bedarf einfach und schnell wiederhergestellt oder eingesehen werden können (Arclink Verbindung ist erwünscht). Ziel ist es, den laufenden Betrieb durch Reduzierung der gespeicherten Datenmengen zu optimieren, ohne die Verfügbarkeit historischer Daten zu gefährden. Die Archivierung muss mit den bestehenden Compliance- und Audit-Anforderungen im Unternehmen übereinstimmen und in regelmäßigen Abständen automatisch durchgeführt werden. ',
            module: ['Basis', 'Einkauf'],
            spro: ['spro1', 'spro2'],
            stack: 'Basis',
            conditions: 'conditions1',
            usecase: 'usecase1',
            orderType: 'assets/customizing.jpg',
            dueDate: new Date(),
            communcation: ['communication1', 'communication2'],
            remote: 1,
            contactdirect: 'Vin Diesel',
            expense: 'expense1',
            startDate: '24.12.2024'
        },
        {
            id: '3',
            headerText: 'Migration SAP-Script zu SmartForms',
            description: ' Ein bestehendes SAP-Script soll auf die SAP Forms-Technologie migriert werden. Dabei ist sicherzustellen, dass das aktuelle Formular in seinem Layout und seiner Funktionalität vollständig erhalten bleibt, während die modernere SAP Forms-Technologie eingeführt wird. Es soll mit Komponenten gearbeitet werden, ein interner Entwickler steht zur Verfügung. Es muss gewährleistet sein, dass alle relevanten Daten korrekt auf dem neuen Formular abgebildet werden und die bestehenden Druck- und Versandprozesse weiterhin reibungslos funktionieren. Besondere Aufmerksamkeit gilt der Layout-Anpassung und der vollständigen Integration in die bestehenden Abläufe. ',
            module: ['WM', 'HCM'],
            spro: ['spro1', 'spro2'],
            stack: 'SAP-SCRIPT/SmartForms',
            conditions: 'conditions1',
            usecase: 'usecase1',
            orderType: 'assets/customizing.jpg',
            dueDate: new Date(),
            communcation: ['communication1', 'communication2'],
            remote: 1,
            contactdirect: 'contactdirect1',
            expense: 'expense1',
            startDate: '16.02.2025'
        },
        {
            id: '4',
            headerText: 'Lieferscheinerstellung',
            description: 'Es wird eine Anpassung des Lieferscheins im SD benötigt. Die Anforderung besteht darin, zusätzliche kundenspezifische Informationen auf dem Lieferschein abzubilden. Dazu soll ein kundenspezifisches Feld, das während der Auftragserfassung erfasst wird, im Drucklayout des Lieferscheins sichtbar gemacht werden. Die Anpassung soll sicherstellen, dass das Feld sowohl im Standarddruck des SAP-Lieferscheins als auch in der elektronischen Version korrekt angezeigt wird. Ziel ist es, die Kommunikation mit dem Kunden zu verbessern, indem alle relevanten Informationen auf dem Dokument klar dargestellt werden. Die Implementierung muss gewährleisten, dass das neue Feld im bestehenden Prozessablauf korrekt integriert und problemlos abrufbar ist.   ',
            module: ['SD', 'MM'],
            spro: ['spro1', 'spro2'],
            stack: 'Layout/ABAP',
            conditions: 'conditions1',
            usecase: 'usecase1',
            orderType: 'assets/customizing.jpg',
            dueDate: new Date(),
            communcation: ['communication1', 'communication2'],
            remote: 1,
            contactdirect: 'contactdirect1',
            expense: 'expense1',
            startDate: '01.03.2025'
        }
]

