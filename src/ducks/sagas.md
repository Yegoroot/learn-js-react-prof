put         - выполнить actions
takeEvery   - прослушивать actions и выполнить нужный 
call        - (для того чтоб разнести выполнение и описание этого выполнения) // вызвать декларативную ф-ию и передать в нее парметры это хорошо для тестирования
            // за место того чтоб самому вызывать ф-ию, мы передаем ее саге 
apply	    - apply, call можно провести аналогию с нативным js, (передаем аргументы привязываем контекст)
all         - все запустить / или объеденить
take        - выбрать какие то actions / отфильтровать take(*)  take(REQUEST_SIGNUP)
            // у take больше контроля
cps         - позволяет работать с колбэками в node овском стиле

когда наш генератор кончается мы не можем вызвать yield и тогда мы прибегаем к лайфхаку и оборачиваем в while(true)