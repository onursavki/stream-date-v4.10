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

    // Özel günleri ve doğum günlerini tanımlayın
    function addPublicHolidays() {
        const today = new Date();
        const currentYear = today.getFullYear();

        // Özel günler listesi
        const specialDays = [
            { month: 0, day: 1, note: "Yılbaşı", type: "special" },
            { month: 0, day: 28, note: "Yayıncı Doğum Günü", type: "birthday" },
            { month: 1, day: 14, note: "Sevgililer Günü", type: "special" },
            { month: 2, day: 8, note: "Dünya Kadınlar Günü", type: "special" },
            { month: 3, day: 7, note: "EkipGames Kuruluş", type: "birthday" },
            { month: 3, day: 23, note: "Ulusal Egemenlik ve Çocuk Bayramı", type: "special" },
            { month: 4, day: 1, note: "Emek ve Dayanışma Günü", type: "special" },
            { month: 4, day: 19, note: "Atatürk'ü Anma, Gençlik ve Spor Bayramı", type: "special" },
            { month: 6, day: 3, note: "Dünya Makinistler Günü", type: "special" },
            { month: 6, day: 15, note: "Demokrasi ve Milli Birlik Günü", type: "special" },
            { month: 7, day: 30, note: "Zafer Bayramı", type: "special" },
            { month: 9, day: 29, note: "Cumhuriyet Bayramı", type: "special" },
            { month: 10, day: 10, note: "Atatürk'ü Anma Günü", type: "special" },
            { month: 10, day: 24, note: "Öğretmenler Günü", type: "special" },
            { month: 11, day: 25, note: "Noel", type: "special" },
        ];

        // Özel günleri geçmiş 10 yıl ve gelecek 10 yıl dahil olacak şekilde ekle
        for (let year = currentYear - 10; year <= currentYear + 10; year++) {
            specialDays.forEach(day => {
                const date = new Date(year, day.month, day.day);
                const dateKey = date.toISOString().split('T')[0];

                // Sembollerle düzenle
                const symbol = day.type === "special" ? "✪" : "❖";
                const styledNote = `<span style="font-size: 13px;position: relative;top: 1px;">${symbol}</span> ${day.note}`;

                // Eğer aynı gün zaten bir not varsa, özel günü mevcut notların ÜSTÜNE ekle
                if (notes[dateKey]) {
                    notes[dateKey].note = ` 
                        <span style="display: block; border-bottom: 1px solid #4a4a4a; padding-bottom: 5px; margin-bottom: 5px;top: -1px;position: relative;line-height: 12px;color:#919191">
                            ${styledNote}
                        </span>
                        ${notes[dateKey].note}`;
                } else {
                    // Eğer o gün için not yoksa, yeni bir not oluştur
                    notes[dateKey] = {
                        note: `<span style="display: block; border-bottom: 1px solid #4a4a4a; padding-bottom: 5px; margin-bottom: 5px;top: -1px;position: relative;line-height: 12px;">
                                    ${styledNote}
                               </span>`,
                        time: ""
                    };
                }
            });
        }
    }

    // Dinamik olarak çağır ve güncelle
    addPublicHolidays();

    function getMonthDays(year, month) {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    const monthNames = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    function renderCalendar(year, month) {
        const days = getMonthDays(year, month);
        const firstDayOfWeek = (days[0].getDay() + 6) % 7;
        const lastDayOfMonth = days[days.length - 1].getDate();

        calendarEl.innerHTML = '';
        titleEl.textContent = `${monthNames[month]} ${year}`;

        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day empty';
            emptyCell.style.border = 'none';
            calendarEl.appendChild(emptyCell);
        }

        days.forEach(day => {
            const dayEl = document.createElement('div');
            const dateKey = day.toISOString().split('T')[0];
            const noteData = notes[dateKey];

            let textColor = '#a0a0a0';
            let dayClass = 'empty';
            let dotEmoji = '';
            let opacity = 1;
            let showTime = true;
            let backgroundColor = ''; // Arka plan rengini burada belirle

            const now = new Date();

            // Bugün için arka plan rengini ve özel gün rengini her zaman ayarlıyoruz
			if (day.toISOString().split('T')[0] === today.toISOString().split('T')[0]) {
			    backgroundColor = '#313131'; // Bugün için arkaplan rengi
			    textColor = '#00d26a'; // Bugün için metin rengi
			    dayClass = 'today';
			    dotEmoji = '<span class="dot blink" style="color: #00d26a;">🟢</span>'; // Yeşil nokta

			    // Eğer bugün bir özel günse, not rengini de yeşil yap
			    if (notes[dateKey]) {
			        notes[dateKey].note = notes[dateKey].note.replace(
			            /color:\s*#[a-fA-F0-9]{3,6}/g, // Mevcut renkleri temizle
			            'color: #00d26a' // Yeni rengi yeşil olarak ayarla
			        );
			    }

			    setTimeout(() => {
			        document.querySelectorAll('.today .time').forEach(el => {
			            el.style.color = '#757575'; // Saat rengini yeşil yap
			        });
			    }, 0);
			} else if (day > today) {
			    // Gelecek tarihli özel günleri sarı renge ayarla
			    if (notes[dateKey]) {
			        notes[dateKey].note = notes[dateKey].note.replace(
			            /color:\s*#[a-fA-F0-9]{3,6}/g, // Mevcut renkleri temizle
			            'color: #fcd53f' // Yeni rengi sarı olarak ayarla
			        );
			    }
			}

            if (noteData) {
                const noteText = noteData.note.toLocaleLowerCase('tr-TR');
                const [noteHour, noteMinute] = noteData.time.split(':').map(Number);
                const eventTime = new Date(day.getFullYear(), day.getMonth(), day.getDate(), noteHour, noteMinute);
                // const eventEndTime = new Date(eventTime.getTime() + 9 * 60 * 60 * 1000); // 9 saat sonra görünmez olacak

                if (noteText.includes("iptal")) {
                    if (day < today) { // Tarih geçmişse
                        dotEmoji = '⚪';
                    	textColor = '#ff3547';
                    	opacity = 0.5;
                    } else { // Tarih geçmemişse / gelecekse
                        dotEmoji = '🔴';
                        textColor = '#ff3547';
                    }
                    dayClass = 'has-note';
                } else if (day < today) {
                    dayClass = 'has-note past';
                    dotEmoji = '⚪';
                    opacity = 0.5;
                } else if (day > today) {
                    dotEmoji = '🟡';
                    textColor = '#fcd53f';
                    dayClass = 'future';
                }

                // Yayına Git butonunu ekleme koşulu
                const sixHoursLater = new Date(eventTime.getTime() + 6 * 60 * 60 * 1000); // Etkinlik saatinden 6 saat sonra
				const showLiveButton = now >= eventTime && now < sixHoursLater && !noteText.includes("iptal");

                const liveButtonHtml = showLiveButton
                    ? `<button class="live-button" onclick="window.open('https://kick.com/ekipgamestv', '_blank')">YAYINDA</button>`
                    : '';

                // Sadece "iptal" olan etkinliklerde saati ve saatin solundaki ikonu kaldırıyoruz
    			const timeHtml = !noteText.includes("iptal") && noteData.time
    			    ? `<div class="time">
    			            <span data-uk-icon="icon: clock" class="time-icon"></span> ${noteData.time}
    			       </div>`
    			    : '';

    			dayEl.innerHTML = `
    			    <span class="date">${day.getDate()}</span>
    			    <div class="dot" style="opacity: ${opacity};">${dotEmoji}</div>
    			    <div class="notes">
    			        ${noteData.note}
    			        ${liveButtonHtml}
    			    </div>
    			    ${timeHtml}
    			`;
			} else {
			    dayEl.innerHTML = `
			        <span class="date">${day.getDate()}</span>
			    `;
			}

            dayEl.className = `day ${dayClass}`;
            dayEl.style.color = textColor;
            if (backgroundColor) {
                dayEl.style.backgroundColor = backgroundColor; // Her zaman bugünün arkaplan rengini uygula
            }

            calendarEl.appendChild(dayEl);
        });

        const totalCells = firstDayOfWeek + days.length;
        const totalRows = Math.ceil(totalCells / 7);
        const totalCellsRequired = totalRows * 7;

        for (let i = totalCells; i < totalCellsRequired; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'day empty';
            emptyCell.style.border = 'none';
            calendarEl.appendChild(emptyCell);
        }

        // Haftanın günlerini kontrol et ve uygun arka plan rengini değiştir
        const currentDay = today.getDay(); // Haftanın günü (0 = Pazar, ..., 6 = Cumartesi)

		daysElements.forEach((dayEl, index) => {
		    // Sadece bugünün arka planını mevcut ayda ayarla
		    if (currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
		        if (index === (currentDay === 0 ? 6 : currentDay - 1)) {
		            dayEl.style.backgroundColor = '#313131'; // Bugünün arka plan rengi
		            dayEl.style.color = '#00d26a'; // Bugünün metin rengi
		        } else {
		            dayEl.style.backgroundColor = ''; // Diğer günleri sıfırla
		            dayEl.style.color = ''; // Diğer günleri sıfırla
		        }
		    } else {
		        // Ay değiştirilmişse, stilleri tamamen sıfırla
		        dayEl.style.backgroundColor = '';
		        dayEl.style.color = '';
		    }
		});

        // Bugüne dön butonunu göster/gizle
        toggleTodayButtonVisibility(year, month);
    }

    function toggleTodayButtonVisibility(year, month) {
        // Bugüne dön butonunun görünür olup olmaması
        if (year === today.getFullYear() && month === today.getMonth()) {
            todayBtn.style.display = 'none'; // Bugünse butonu gizle
        } else {
            todayBtn.style.display = 'block'; // Farklı ayda butonu göster
        }
    }

    renderCalendar(currentYear, currentMonth);

    prevMonthBtn.addEventListener('click', () => {
        currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        if (currentMonth === 11) currentYear--;
        renderCalendar(currentYear, currentMonth);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        if (currentMonth === 0) currentYear++;
        renderCalendar(currentYear, currentMonth);
    });

    todayBtn.addEventListener('click', () => {
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        renderCalendar(currentYear, currentMonth);
    });
});
