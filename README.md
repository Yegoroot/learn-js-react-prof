https://coursehunters.net/course/prodvinutyy-kurs-po-react-js  // первый урок установки от сюда

## Различные компоненты
Обычно в разных файлах redux всего приложения: __action__ отдельно, __reducer__   в сторонке отдельно
__action creators__ отдельно. И чтоб не дробить так на части используем [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
Ducks позволяет нам:
- Константы, sagas и reducerы храним в одном месте - и получаеться полноценный виджет, который содержит все необходимое
- И появляется возможность поместить такой виджет в отдельную библиотеку и использовать в различных проектах 


## Так же подключены плагин
- router 
- redux 
- saga 
- redux 
- loader
- redux-thunk
- redux-form  https://redux-form.com/8.0.4/docs/gettingstarted.md/
- immutable
- connected-react-router - для хранения роутов в redux
    // мы сделали эту связку для того чтоб декларативно описывать управление роутером
    // не императивно, вызываем а декларативно например команда push
- reselect - так как в firebase runTime нет коллекций (пока я только так знаю), то мы подключаем rsselect https://www.npmjs.com/package/reselect
    // это selector с мемоизацией (memoized), позволяют удобно доставать из стора данные и при этом не делать кучу пересчетов каждый раз если ничего не поменялось, то селектор не будет ничего пересчитывать просто вернет те данные которые он запомнил


## Best practics
// в реакте не существует bestPractcs это не java c многолетней историей