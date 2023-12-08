import classes from './DealList.module.css';

function DealListHeader() {

  const onClickAddDeal = () => {
    
  }

  return (
    <header className={classes.header}>
      <div>
        Сделки
      </div>
      <button>
        Добавить сделку
      </button>
    </header>
  );
}

export default DealListHeader;
