export const Game = () => {


  return (
  <div id="game">
    <div className="container">
      <div className="game">
          <div className="game--board">
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
            <div className="game--board__card"></div>
          </div>
          <div className="game--date">
            <h3>Wordle #195</h3>
            <h3>{new Intl.DateTimeFormat('Ru-ru').format(new Date())}</h3>
          </div>
      </div>
    </div>
  </div>);
};
