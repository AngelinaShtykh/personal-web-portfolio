import github from '../assets/img/github.svg'
import link from '../assets/img/portfolio/link.svg'
import mySite from '../assets/img/portfolio/mySite.png'
import quizzical from '../assets/img/portfolio/quizzical.png'
import tenzies from '../assets/img/portfolio/tenzies.png'

const uaData = {
  "change": "eng",
  "nav": {
    "home": "Головна",
    "about": "Про мене",
    "portfolio": "Портфоліо",
    "contacts": "контакти"
  },
  "home": {
    "title": "Добрий день, everybody!",
    "text": "Рада бачити вас на своєму сайті",
    "todo": "Давайте трохи познайомимось, в меню ви можете побачити розділи з інформацією"
  },
  "about": {
    "title": "ТРОХИ ПРО МЕНЕ",
    "name": "Аліна",
    "country": "Україна",
    "city": "Київ",
    "more": "Люблю програмувати, слухати музику, читати та дізнаватися нове. Обожнюю тварит. В сімʼї живе 2 собаки та кішка. Чи ми всі живемо у кішки, ну ви знаєте :)",
    "btn": {"skills": "Навички", "personal": "Персональне"}
  },
  "contacts": {
    "title": "ЗВʼЯЖІТЬСЯ ЗІ МНОЮ",
    "link": "посилання на мій"
  },
  "portfolio": {
    "title": "МОЇ РОБОТИ",
    "subtitle": "*щоб побачити інформацію про проєкт - просто натисніть на зображення"
  },
  "footer": {
    "text": "Зроблено з любовʼю",
    "name": "Аліна Штих"  
  },
  "projects-data": [
    {
      "key": 1,
      "title": "Персональний сайт",
      "description": "Сайт-портфоліо на React, виконаний в стилі single-page application(SPA)",
      "coverImg": mySite,
      "github": {"icon": github, "link": "https://github.com/"},
      "link": {"icon": link, "link": "#"}
    },
    {
      "key": 2,
      "title": "Гра Quizzical",
      "description": "Гра quizze на React. Самостійний проект з сайту Scrimba. Я використовувала: trivia database API, nanoid, react create app, react hooks, SASS",
      "coverImg": quizzical,
      "github": {"icon": github, "link": "https://github.com/AngelinaShtykh/quizzical-game"},
      "link": {"icon": link, "link": "https://remarkable-sable-3880a9.netlify.app/"}
    },
    {
      "key": 3,
      "title": "Гра Tenzies",
      "description": "Класична гра tenzi на React. Самостійний проект із Scrimba. Я додала таймер, рахунок та кращий результат зі зберіганням у localStorage.",
      "coverImg": tenzies,
      "github": {"icon": github, "link": "https://github.com/"},
      "link": {"icon": link, "link": "https://tubular-pithivier-27409e.netlify.app/"}
    }
  ]
}

export default uaData

