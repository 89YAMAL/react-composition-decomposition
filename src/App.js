import React from 'react';
import './App.css';
import News from './components/news/News';
import ExchangeRates from './components/exchange/Exchange';
import WorkOnBugs from './components/workonbugs/WorkOnBugs';
import SearchMenu from './components/search/SearchMenu';
import SearchBar from './components/search/SearchBar';
import Banner from './components/search/Banner';
import WeatherWidget from './components/widgets/WeatherWidget';
import PopularWidget from './components/widgets/PopularWidget';
import Widget from './components/widgets/Widget';
import TvWidget from './components/widgets/TvWidget';
import TvWidgetOnline from './components/widgets/TvWidgetOnline';



const news = [
  {link: '#', icon: require("./Media/twitter.png"), text: "Самая главная новость к этому часу"},
  {link: '#', icon: require("./Media/twitter.png"), text: "Главная новость к этому часу"},
  {link: '#', icon: require("./Media/twitter.png"), text: "Новость к этому часу"},
  {link: '#', icon: require("./Media/twitter.png"), text: "Караул!!! Бегите все...."},
  {link: '#', icon: require("./Media/twitter.png"), text: "Шутка!!!"}
]

const rates = [
  {link: '#', currency: 'USD MOEX', rate: 78.05, change: "-1.15"},
  {link: '#', currency: 'EUR MOEX', rate: 86.18, change: "-1.54"},
  {link: '#', currency: 'НЕФТЬ', rate: 75.17, change: "-0.27%"}
  
]

const searchMenuItems = [
  {link: '#', name: 'Видео'},
  {link: '#', name: 'Картинки'},
  {link: '#', name: 'Новости'},
  {link: '#', name: 'Карты'},
  {link: '#', name: 'Маркет'},
  {link: '#', name: 'Переводчик'},
  {link: '#', name: 'Эфир'},
]

const popular = [
  {theme: "Недвижимость", text: "о сталинках", link: "#"},
  {theme: "Маркет", text: "люстры и светильники", link: "#"},
  {theme: "Авто.ру", text: "привод 4х4 до 500 000", link: "#"}
]

const tv = [
  {time: "02:00", programm: "THT. Best", channel: "THT International", link: "#"},
  {time: "02:15", programm: "Джинглики", channel: "Карусель Int", link: "#"},
  {time: "02:25", programm: "Наедине со всеми", channel: "Первый", link: "#"}
]

const tvOnline = [
  {icon: require("./Media/play.png"), programm: "THT. Best", channel: "THT International", link: "#"},
  {icon: require("./Media/play.png"), programm: "Джинглики", channel: "Карусель Int", link: "#"},
  {icon: require("./Media/play.png"), programm: "Наедине со всеми", channel: "Первый", link: "#"}
]

function App() {
  return (
    <>
      <header className='header'>
        <div className='newsPanel'>
          <News news={news} />
          <ExchangeRates rates={rates} /> 
        </div>
        <WorkOnBugs title='Работа над ошибками' text='Смотрите на Яндексе и запоминайте' image={require("./Media/error.jpeg")} link='#' />
      </header>
      <div className='searchBox'>
        <SearchMenu searchMenuItems={searchMenuItems} />
        <SearchBar />
        <Banner image={require("./Media/furious.jpeg")} />
      </div>
      <footer className='footer'>
        <div>
          <WeatherWidget icon={require("./Media/rain_weather_icon_151998.png")} mailLink="#" mainTemp="+17" upLink="#" upName="Утром" upTemp="+17" downLink="#" downName="Днем" downTemp="+20"/>
          <PopularWidget popular={popular} />
        </div>
        <div>
          <Widget title="Карта России" link="#"><a href="#">Расписания</a></Widget>
          <TvWidget tv={tv} />
        </div>
        <div>
          <TvWidgetOnline tvOnline={tvOnline} />
        </div>
       
        
      </footer>
    </>
  );
}

export default App;
