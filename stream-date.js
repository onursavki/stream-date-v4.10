document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
    const titleEl = document.getElementById('calendar-title');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const todayBtn = document.getElementById('today-btn'); // Bugüne Dön butonunu seçiyoruz
    const daysElements = document.querySelectorAll('#weekdays .days'); // Haftanın günlerini seçiyoruz

    const today = new Date();
    let currentMonth = today.getMonth(); // Şu anki ay
    let currentYear = today.getFullYear(); // Şu anki yıl

    today.setHours(0, 0, 0, 0); // Saat bilgilerini sıfırla, yalnızca tarih karşılaştırması için

    // Notlar: Tarihe göre notlar ve saatler burada tanımlanır
    const notes = {
      	// KASIM 2024
        "2024-11-28": { note: "KICK CANLI YAYIN TEST YAYINI.<br/>Euro Truck Simulator 2.", time: "22:00" },
        "2024-11-29": { note: "CANLI YAYIN TEKNİK SORUN NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
      
      	// ARALIK 2024
        "2024-12-02": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>Euro Truck Simulator 2.", time: "21:00" },
        "2024-12-03": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>Euro Truck Simulator 2.", time: "21:00" },
        "2024-12-04": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>Train Sim World® 4.", time: "21:00" },
      
        "2024-12-10": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>Euro Truck Simulator 2.", time: "21:00" },
        "2024-12-11": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>Euro Truck Simulator 2.", time: "21:00" },
        "2024-12-12": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>Euro Truck Simulator 2,<br/>Train Sim World® 4.", time: "21:00" },
      
        "2024-12-15": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>Train Sim World® 4.", time: "21:00" },
        "2024-12-16": { note: "CANLI YAYIN TEKNİK SORUN NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
      
        "2024-12-18": { note: "KICK Canlı Yayın.<br/>Müzik,<br/>Sohbet,<br/>Yılbaşı Etkinliği,<br/>Euro Truck Simulator 2.", time: "21:00" },
      
        "2024-12-22": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "21:00" },
        "2024-12-23": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "21:00" },
      
        "2024-12-25": { note: "CANLI YAYIN TEKNİK SORUN NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
        "2024-12-26": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "21:00" },
        "2024-12-27": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "20:00" },
      
        "2024-12-30": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "21:00" },
      
      	// OCAK 2025
        "2025-01-02": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "21:00" },
      
        "2025-01-10": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "22:00" },
      
        "2025-01-16": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "22:00" },
      
        "2025-01-19": { note: "KICK Canlı Yayın.<br/>Müzik, Sohbet,<br/>ProMods & TruckersMP,<br/>Euro Truck Simulator 2.", time: "21:00" },
      
      	// ŞUBAT 2025
        "2025-02-07": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-02-08": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
      
        "2025-02-13": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-02-14": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
      
        "2025-02-18": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-02-19": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-02-20": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },      
        "2025-02-21": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-02-22": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
      
        "2025-02-25": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-02-26": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-02-27": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
      
        "2025-02-28": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
      
      	// MART 2025
        "2025-03-01": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
      
        "2025-03-02": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-03": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-04": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-05": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-06": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-07": { note: "CANLI YAYIN İFTAR DAVETİ NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
        "2025-03-08": { note: "CANLI YAYIN İFTAR DAVETİ NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
      
        "2025-03-09": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-10": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-11": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-12": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-13": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-14": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-15": { note: "CANLI YAYIN İFTAR DAVETİ NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
      
        "2025-03-16": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-17": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        "2025-03-19": { note: "CANLI YAYIN İFTAR DAVETİ NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
        "2025-03-20": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>Red Dead Redemption.", time: "21:00" },
        "2025-03-21": { note: "CANLI YAYIN İFTAR DAVETİ NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
        "2025-03-22": { note: "CANLI YAYIN İFTAR DAVETİ NEDENİ İLE İPTAL EDİLDİ.", time: "21:00" },
      
        "2025-03-24": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>Red Dead Redemption.", time: "21:00" },
        "2025-03-25": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>Red Dead Redemption.", time: "21:00" },
        "2025-03-26": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>Red Dead Redemption.", time: "21:00" },
        "2025-03-27": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>Red Dead Redemption.", time: "21:00" },
        //"2025-03-28": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
        //"2025-03-29": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },
      
        //"2025-03-30": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>PUBG Mobile.", time: "21:00" },      	
      	
        "2025-04-03": { note: "KICK Canlı Yayın.<br/>Sohbet,<br/>Red Dead Redemption.", time: "21:00" },
    };
