
//------------------------------------Задача 1 ---------------------------------------//

function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        const hash = args.join(','); // получаем правильный хэш
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
        if (objectInCache) { // если элемент найден
            console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + objectInCache.value;
        }
    
        let result = func(...args); // в кэше результата нет - придётся считать
        cache.push({hash: hash, value: result}); // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }
    
    const addThree = (a, b, c) => a + b + c;
    const upgradedAddThree = cachingDecoratorNew(addThree);

//------------------------------------Задача 2 ---------------------------------------//


    const debounceDecoratorNew = (f, ms) => {
      let timerId;
      let firstStart = true;
      return function(...args) {
    
        if (firstStart) {
          f.apply(this, args);
          console.timeLog("time")
          console.log('Первый старт!')
          firstStart = false;
          return;
        }
    
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          f.apply(this, args);
          console.timeLog("time")
        }, ms);
    
      };
    };
    const showCoords = (x, y) => console.log(`Клик:(${x},${y})`);
    const showCoordsDebounced = debounceDecoratorNew(showCoords, 2000);


    //------------------------------------Задача 3---------------------------------------//


    const debounceDecorator2 = (f, ms) => {
      let timerId;
      let firstStart = true;
      wrapper.count = 0;
      function wrapper(...args) {
        wrapper.count++;
        console.log('Старт - ' + wrapper.count);
        if (firstStart) {
          f.apply(this, args);
          console.timeLog("time");
          console.log('Первый старт!');
          firstStart = false;
          return;
        }
    
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          f.apply(this, args);
          console.timeLog("time")
        }, ms);
      };
      return wrapper;
    };
    const showCoords2 = (x, y) => console.log(`Клик:(${x},${y})`);
    const showCoordsDebounced2 = debounceDecorator2(showCoords2, 2000);
    
    console.time("time"); //(1)
    setTimeout(() => showCoordsDebounced2(10, 5));
    setTimeout(() => showCoordsDebounced2(20, 10), 100);
    setTimeout(() => showCoordsDebounced2(40, 40), 200);