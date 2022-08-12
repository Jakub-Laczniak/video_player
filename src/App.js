import React from 'react'
import './App.scss';

import SidebarVideo from './components/SidebarVideo';

function App() {

  const videosArray = [
    {title: "The Lord of the Rings - Best Scene of the movie (HD)", duration: "2:41", views: "8,204,301"},
    {title: "LOTR: The Two Towers - The Battle of the Hornburg", duration: "4:38", views: "3,857,112"},
    {title: "Lord of The Rings - Battle of Helms Deep Opening", duration: "6:38", views: "3,642,730"}
  ];
  const videoTitle = `Lord of the Rings: The Fellowship of the Ring (official trailer)`;
  const videoDescription = `The Lord of the Rings is an epic high-fantasy novel written by English author J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.`;


  return (
      <main className='mainContainer'>
        
        <article className='videoBox'>
          <section className='videoBox__video'>
            <div className='video__icons'></div>
            <div className='video__control'></div>
          </section>
          <section className='videoBox__description'>
            <h1 className='description__title'>{videoTitle}</h1>
            <p className='description__text'>{videoDescription}</p>
            <div className='description__icons'>
              <div className='icons__wrapper'>
                <div className='icons__iconWrapper view'/>
                <p>12,434,934</p>
              </div>
              <div className='icons__wrapper'>
                <div className='icons__iconWrapper heart'/>
                <p>6,563</p>
              </div>
              <div className='icons__wrapper'>
                <div className='icons__iconWrapper comment'/>
                <p>831</p>
              </div>
            </div>
          </section>
          <section className='videoBox__footer'>
            <div className='footer__socialMedia'>
              <div className='socialMedia__portrait'/>
              <div className='socialMedia__userData'>
                <p className='userData__name'>Sara Jameson</p>
                <p className='userData__followers'>12,353 followers</p>
              </div>
              <div className='socialMedia__button'>
                <div className='button__cross'/><p>Follow</p>
              </div>
            </div>
            <div className='footer__date'>
                <p className='date__head'>Uploaded:</p>
                <p className='date'>8 March, 2007</p>
            </div>
          </section>
        </article>

        <aside className='sidebar'>
          <div className='sidebar__header'>
            <p>Related Videos</p>
          </div>
          <div className='sidebar__content'>
            {videosArray.map(data => <SidebarVideo data={data}/>)}
          </div>
        </aside>
      </main>
  );
}

export default App;
