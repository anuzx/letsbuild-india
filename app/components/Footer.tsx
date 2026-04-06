'use client';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [time, setTime] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);

      const hr = now.getHours();
      if (hr >= 5 && hr < 12) setGreeting('Good Morning');
      else if (hr >= 12 && hr < 18) setGreeting('Good Afternoon');
      else setGreeting('Good Evening');
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const linkClass = "relative w-fit text-[#f0f0f0] transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:w-0 after:h-[1px] after:-bottom-[2px] after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";
  const titleClass = "font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#737373] mb-6";

  return (
    <div
      className="relative w-full bg-[#050505] text-[#f0f0f0] font-sans antialiased overflow-hidden border-t border-[#262626] bg-[radial-gradient(circle_at_50%_0%,_#111_0%,_transparent_50%)]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
        
        @keyframes squiggly {
          from { transform: translateX(0); }
          to { transform: translateX(-20px); }
        }
        .animate-squiggly {
          animation: squiggly 2s linear infinite;
        }
        
        /* Apply fonts imported above */
        .font-sans { font-family: 'Inter', -apple-system, sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="px-6 py-6 md:px-12 md:py-8 max-w-screen-2xl mx-auto text-[0.85rem] leading-relaxed">

        {/* --- First Row --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-6 relative">
          <div className="text-[#f0f0f0]">
            <path d="M0 15.5838V0.143357H2.53664V13.3339H9.17603V15.5838H0Z" fill="currentColor"></path>
            <path d="M14.9146 0.0772386V9.03269C14.9146 10.4885 15.2014 11.584 15.7749 12.3193C16.3484 13.0399 17.238 13.4001 18.4439 13.4001C19.6644 13.4001 20.5614 13.0399 21.1349 12.3193C21.7231 11.584 22.0172 10.4885 22.0172 9.03269V0.0772386H24.5539V8.90035C24.5539 11.1061 24.0318 12.7825 22.9878 13.9295C21.9584 15.0765 20.4438 15.65 18.4439 15.65C16.4587 15.65 14.9514 15.0765 13.922 13.9295C12.8926 12.7825 12.378 11.1061 12.378 8.90035V0.0772386H14.9146Z" fill="currentColor"></path>
            <path d="M30.2484 10.5657C30.3219 11.4774 30.6895 12.2127 31.3512 12.7715C32.0277 13.3156 32.9026 13.5876 33.9761 13.5876C34.9172 13.5876 35.6746 13.3891 36.2481 12.9921C36.8363 12.5803 37.1304 12.0142 37.1304 11.2936C37.1304 10.7789 36.9686 10.3745 36.6451 10.0804C36.3363 9.77162 35.9098 9.53634 35.3658 9.37458C34.8217 9.21283 34.057 9.04372 33.0717 8.86725C32.0718 8.69079 31.2115 8.46286 30.491 8.18346C29.7851 7.88936 29.2043 7.4482 28.7484 6.86C28.3073 6.27179 28.0867 5.49977 28.0867 4.54393C28.0867 3.66162 28.3146 2.87489 28.7705 2.18375C29.241 1.49261 29.8881 0.955867 30.7116 0.573532C31.5498 0.191198 32.5056 3.05176e-05 33.5791 3.05176e-05C34.682 3.05176e-05 35.6672 0.205903 36.5348 0.617648C37.4024 1.02939 38.0862 1.59554 38.5862 2.3161C39.0862 3.03665 39.3582 3.86014 39.4023 4.78657H36.9098C36.8216 3.99249 36.476 3.35281 35.8731 2.86754C35.2702 2.38227 34.5055 2.13963 33.5791 2.13963C32.6821 2.13963 31.9615 2.33815 31.4174 2.73519C30.888 3.11753 30.6233 3.66162 30.6233 4.36747C30.6233 4.86744 30.7777 5.26448 31.0865 5.55859C31.4101 5.85269 31.8365 6.07327 32.3659 6.22032C32.8953 6.36737 33.6526 6.52913 34.6379 6.70559C35.6378 6.88205 36.4981 7.11734 37.2186 7.41144C37.9392 7.70554 38.5274 8.13935 38.9832 8.71285C39.4391 9.28635 39.667 10.0437 39.667 10.9848C39.667 11.8965 39.4244 12.7127 38.9391 13.4332C38.4538 14.1538 37.7774 14.7199 36.9098 15.1317C36.0422 15.5287 35.0569 15.7272 33.9541 15.7272C32.7335 15.7272 31.6601 15.5066 30.7336 15.0655C29.8072 14.6243 29.0793 14.0141 28.5499 13.2347C28.0352 12.4406 27.7705 11.5362 27.7558 10.5216L30.2484 10.5657Z" fill="currentColor"></path>
            <path d="M42.869 0.143357H45.4056V15.5838H42.869V0.143357Z" fill="currentColor"></path>
            <path d="M63.6068 7.86361C63.6068 9.36354 63.2906 10.7091 62.6583 11.9002C62.026 13.0913 61.1363 14.0251 59.9893 14.7015C58.857 15.378 57.5629 15.7162 56.1071 15.7162C54.6513 15.7162 53.3499 15.378 52.2029 14.7015C51.0706 14.0251 50.1883 13.0913 49.556 11.9002C48.9236 10.7091 48.6075 9.36354 48.6075 7.86361C48.6075 6.36368 48.9236 5.01816 49.556 3.82704C50.1883 2.63592 51.0706 1.70214 52.2029 1.0257C53.3499 0.349263 54.6513 0.011044 56.1071 0.011044C57.5629 0.011044 58.857 0.349263 59.9893 1.0257C61.1363 1.70214 62.026 2.63592 62.6583 3.82704C63.2906 5.01816 63.6068 6.36368 63.6068 7.86361ZM51.2103 7.86361C51.2103 8.93709 51.4162 9.90763 51.8279 10.7752C52.2397 11.6281 52.8132 12.2972 53.5484 12.7825C54.2984 13.2531 55.1513 13.4883 56.1071 13.4883C57.063 13.4883 57.9085 13.2531 58.6438 12.7825C59.3937 12.2972 59.9746 11.6281 60.3863 10.7752C60.7981 9.90763 61.004 8.93709 61.004 7.86361C61.004 6.79013 60.7981 5.82694 60.3863 4.97404C59.9746 4.10644 59.3937 3.43735 58.6438 2.96679C57.9085 2.48151 57.063 2.23888 56.1071 2.23888C55.1513 2.23888 54.2984 2.48151 53.5484 2.96679C52.8132 3.43735 52.2397 4.10644 51.8279 4.97404C51.4162 5.82694 51.2103 6.79013 51.2103 7.86361Z" fill="currentColor"></path>
            <path d="M66.8088 15.5838V0.143357H69.1248L76.6465 11.084V0.143357H79.1391V15.5838H76.823L69.3013 4.64314V15.5838H66.8088Z" fill="currentColor"></path>
            <path d="M88.2112 2.17131C87.1305 2.17131 86.2544 3.04737 86.2544 4.12805C86.2544 5.20873 87.1305 6.08479 88.2112 6.08479C89.2918 6.08479 90.1679 5.20873 90.1679 4.12805C90.1679 3.04737 89.2918 2.17131 88.2112 2.17131Z" fill="currentColor"></path>
            <path d="M88.2112 9.64249C87.1305 9.64249 86.2544 10.5186 86.2544 11.5992C86.2544 12.6799 87.1305 13.556 88.2112 13.556C89.2918 13.556 90.1679 12.6799 90.1679 11.5992C90.1679 10.5186 89.2918 9.64249 88.2112 9.64249Z" fill="currentColor"></path>
            <path d="M97.2833 0.143387H99.4891V13.378H97.2833V0.143387Z" fill="currentColor"></path>
            <path d="M99.4891 15.5838L99.4891 13.378L108.312 13.378V15.5838H99.4891Z" fill="currentColor"></path>
            <path d="M118.131 0.143417H115.926V2.34919H118.131V0.143417Z" fill="currentColor"></path>
            <path d="M115.926 2.34919L113.72 2.34918V4.55496H115.926L115.926 2.34919Z" fill="currentColor"></path>
            <path d="M118.131 2.34919L120.337 2.34918V4.55496H118.131L118.131 2.34919Z" fill="currentColor"></path>
            <path d="M113.72 4.55496L111.514 4.55498V15.5838H113.72V11.1723H120.337L120.337 15.5838H122.543V4.55498L120.337 4.55496L120.337 8.96649L113.72 8.96651L113.72 4.55496Z" fill="currentColor"></path>
            <path d="M134.568 0.143417V2.34919H127.951V6.76071L134.568 6.76075V8.96653L127.951 8.96649V13.378H134.568V15.5838H125.745V0.143417H134.568Z" fill="currentColor"></path>
            <path d="M136.774 2.34918L134.568 2.34919V6.76075L136.774 6.76076V2.34918Z" fill="currentColor"></path>
            <path d="M134.568 8.96653L136.774 8.96655V13.3781L134.568 13.378V8.96653Z" fill="currentColor"></path>
            <path d="M148.799 0.143417V2.34919H142.182V6.76071H148.799V8.96649H142.182L142.182 6.76071L139.976 6.76076V2.34918L142.182 2.34919L142.182 0.143417H148.799Z" fill="currentColor"></path>
            <path d="M142.182 11.1723H139.976V13.3781H142.182V15.5838H148.799V13.378L142.182 13.3781L142.182 11.1723Z" fill="currentColor"></path>
            <path d="M151.005 2.34918L148.799 2.34919L148.799 4.55496H151.005V2.34918Z" fill="currentColor"></path>
            <path d="M148.799 8.96649L151.005 8.96651V13.3781L148.799 13.378V8.96649Z" fill="currentColor"></path>
          </div>

          <div>
            <div className={titleClass}>labs area</div>
            <div className="flex flex-col gap-2 lowercase">
              <span>play ground</span>
              <span>r&amp;d collection</span>
              <span>experiments</span>
            </div>
          </div>

          <div>
            <div className={titleClass}>follow</div>
            <div className="flex flex-col gap-2 lowercase">
              <a className={linkClass} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/lusionltd/">linkedin</a>
              <a className={linkClass} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lusionltd/">instagram</a>
              <a className={linkClass} target="_blank" rel="noopener noreferrer" href="https://twitter.com/lusionltd">twitter</a>
            </div>
          </div>

        </div>

        {/* --- Contact Row --- */}
        <div className="mb-6">
          <div className={titleClass}>contact</div>
          <a className={linkClass} href="mailto:letsbuildindia@gmail.com">letsbuildindia@gmail.com</a>
        </div>

        {/* --- Third Row --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0 mt-8">

          <span className="text-[#737373]">©2026</span>

          <div className="flex flex-wrap items-center gap-3 text-[#737373]">
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex w-[60px] overflow-hidden items-center opacity-50">
                <svg className="animate-squiggly" width="823" height="7" viewBox="0 0 823 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3.5C5.2.2 9.4.2 13.7 3.5c4.2 3.3 8.4 3.3 12.6 0C30.6.2 34.8.2 39 3.5c4.2 3.3 8.5 3.3 12.7 0C55.9.2 60 .2 64.3 3.5c4.3 3.3 8.5 3.3 12.7 0 4.2-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.3 3.3 8.5 3.3 12.7 0 4.2-3.3 8.4-3.3 12.7 0 4.2 3.3 8.4 3.3 12.6 0 4.3-3.3 8.5-3.3 12.7 0 4.2 3.3 8.5 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.3 3.3 8.5 3.3 12.7 0 4.2-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.2 3.3 8.5 3.3 12.7 0 4.2-3.3 8.4-3.3 12.7 0 4.2 3.3 8.4 3.3 12.6 0 4.3-3.3 8.5-3.3 12.7 0 4.2 3.3 8.5 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.3 3.3 8.5 3.3 12.7 0 4.2-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.2 3.3 8.5 3.3 12.7 0 4.2-3.3 8.4-3.3 12.7 0 4.2 3.3 8.4 3.3 12.6 0 4.3-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.3 3.3 8.5 3.3 12.7 0 4.2-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.2 3.3 8.5 3.3 12.7 0 4.2-3.3 8.4-3.3 12.7 0 4.2 3.3 8.4 3.3 12.6 0 4.3-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.3 3.3 8.5 3.3 12.7 0 4.2-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.6 0 4.3-3.3 8.5-3.3 12.7 0 4.2 3.3 8.5 3.3 12.7 0 4.2-3.3 8.4-3.3 12.7 0 4.2 3.3 8.4 3.3 12.6 0 4.3-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.7 0 4.2-3.3 8.4-3.3 12.6 0 4.3 3.3 8.5 3.3 12.7 0 4.2-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.6 0 4.3-3.3 8.5-3.3 12.7 0 4.2 3.3 8.5 3.3 12.7 0 4.2-3.3 8.4-3.3 12.7 0 4.2 3.3 8.4 3.3 12.6 0 4.2-3.3 8.5-3.3 12.7 0 4.2 3.3 8.4 3.3 12.7 0m-15.2 0c4.2-3.3 8.4-3.3 12.6 0 4.3 3.3 8.5 3.3 12.7 0" stroke="currentColor"></path>
                </svg>
              </div>
              <div className="flex items-center gap-1 text-[#f0f0f0]">
                <svg width="1.25rem" height="1.25rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z" fill="currentColor"></path>
                  <path d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25L12 4.75ZM6 3.25C5.58579 3.25 5.25 3.58579 5.25 4C5.25 4.41421 5.58579 4.75 6 4.75L6 3.25ZM12 3.25L6 3.25L6 4.75L12 4.75L12 3.25Z" fill="currentColor"></path>
                  <path d="M12.5303 4.53033C12.8232 4.23744 12.8232 3.76256 12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L12.5303 4.53033ZM3.46967 11.4697C3.17678 11.7626 3.17678 12.2374 3.46967 12.5303C3.76256 12.8232 4.23744 12.8232 4.53033 12.5303L3.46967 11.4697ZM11.4697 3.46967L3.46967 11.4697L4.53033 12.5303L12.5303 4.53033L11.4697 3.46967Z" fill="currentColor"></path>
                </svg>
                <a className={linkClass} target="_blank" rel="noopener noreferrer" href="https://lusion.co/">LetsBuildIndia</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end font-mono text-[0.75rem]">
            <span>{time}</span>
            <span className="text-[#737373] uppercase text-[0.65rem] mt-1">{greeting}</span>
          </div>



        </div>
      </div>
    </div >
  );
}
