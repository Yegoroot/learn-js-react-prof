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


## ДЗ 
- реализовать логику signIn
- покрыть тестами логику Auth
- при успешной записи человка в стор - чистить форму в /people