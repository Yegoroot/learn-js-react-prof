https://coursehunters.net/course/prodvinutyy-kurs-po-react-js  // первый урок установки от сюда
>  Установки
    - router 
    - redux 
    - saga 
    - redux 
    - loader
    - redux-thunk
    - redux-form  https://redux-form.com/8.0.4/docs/gettingstarted.md/


## Различные компоненты
Обычно в разных файлах redux всего приложения: __action__ отдельно, __reducer__   в сторонке отдельно
__action creators__ отдельно. И чтоб не дробить так на части используем [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
- Константы, sagas и reducerы храним в одном месте - и получаеться полноценный виджет, который содержит все необходимое
- И появляется возможность поместить такой виджет в отдельную библиотеку и использовать в различных проектах 

```node
npm i immutable
```