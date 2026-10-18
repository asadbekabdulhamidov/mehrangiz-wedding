export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    groomFull: string;
    brideFull: string;
    quote: string;
    subtitle: string;
    parentsInvitation: string;
  };
  event: {
    date: string; // ISO date string: YYYY-MM-DDTHH:mm:ss
    displayDate: string;
    displayDay: string;
    displayTime: string;
    calendarSummary: string;
    calendarDescription: string;
  };
  venue: {
    name: string;
    hall: string;
    landmark: string;
    address: string;
    city: string;
    googleMapsUrl: string;
    yandexMapsUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  timeline: Array<{
    time: string;
    title: string;
    description: string;
    icon: 'welcome' | 'bride' | 'ceremony' | 'feast' | 'cake' | 'sparkle';
  }>;
  audio: {
    title: string;
    artist: string;
    src: string;
    fallbackSrc?: string;
  };
  contacts: {
    phoneGroom: string;
    phoneBride: string;
    telegramUsername?: string;
  };
}

export const weddingData: WeddingConfig = {
  couple: {
    groom: "Jamshidbek",
    bride: "Mehrangis",
    groomFull: "Jamshidbek",
    brideFull: "Mehrangis",
    quote: "Muhabbat — ikki qalbning bir butunga aylanishi va umrbod birga urishidir.",
    subtitle: "BAXT TO'YI MAROSIMI",
    parentsInvitation: "Aziz va qadrli mehmonimiz! Sizni aziz farzandlarimiz Jamshidbek va Mehrangisning qutlug' visol oqshomi — baxt to'yiga lutfan taklif etamiz. Ushbu unutilmas quvonchli kunimizda davramiz fayzi bo'lishingiz biz uchun cheksiz sharafdir.",
  },
  event: {
    date: "2026-11-01T10:00:00",
    displayDate: "1-Noyabr, 2026-yil",
    displayDay: "Yakshanba",
    displayTime: "10:00",
    calendarSummary: "Jamshidbek & Mehrangis To'y Marosimi",
    calendarDescription: "Jamshidbek va Mehrangisning baxt to'yi marosimi. Sizni soat 10:00 da ko'rishdan bag'oyat mamnunmiz!",
  },
  venue: {
    name: '"Zamin" Tantanalar Saroyi',
    hall: "Asosiy Tantanalar Zali",
    landmark: "Mo'ljal: Tibbiyot kolleji ro'parasida",
    address: 'Bahor MFY, "Zamin" tantanalar saroyi (Mo\'ljal: Tibbiyot kolleji ro\'parasida)',
    city: "Bahor MFY",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zamin+tantanalar+saroyi+Bahor",
    yandexMapsUrl: "https://yandex.com/maps/?text=Zamin+tantanalar+saroyi+Bahor",
    coordinates: {
      lat: 41.3,
      lng: 69.2,
    },
  },
  timeline: [
    {
      time: "10:00",
      title: "Tantanali To'y Marosimi",
      description: "Qadrli mehmonlarimizni soat 10:00 da 'Zamin' tantanalar saroyida qutlug' to'yimizning fayzli dasturxoni va tantanali marosimiga taklif etamiz.",
      icon: "ceremony",
    },
  ],
  audio: {
    title: "Mubarakun Zawjaha",
    artist: "To'y Marosimi Navosi",
    src: "/audio/music.mp3",
    fallbackSrc: "https://cdn.pixabay.com/download/audio/2022/05/16/audio_c8901cb188.mp3?filename=romantic-piano-112199.mp3",
  },
  contacts: {
    phoneGroom: "+998 90 123 45 67",
    phoneBride: "+998 90 765 43 21",
    telegramUsername: "jamshidbek_wedding",
  },
};
