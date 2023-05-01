//Задача № 1
function cachingDecoratorNew(func) {
    const cache = [];
    return function(...args) {
      const hash = md5(args); 
      const objectInCache = cache.find(
        objectInCache => objectInCache.hash === hash); 
      if (objectInCache) {
        console.log("Из кэша: " + objectInCache.result); 
        return "Из кэша: " + objectInCache.result; 
      }
  
      const result = func(...args);
      cache.push({hash, result});
      const maxCache = 5;
        if(cache.length > maxCache){
        cache.shift();
        }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
}

//Задача № 2
const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0)); 
setTimeout(() => upgradedSendSignal(2, 300), 300); 
setTimeout(() => upgradedSendSignal(3, 900), 900); 
setTimeout(() => upgradedSendSignal(4, 1200), 1200); 
setTimeout(() => upgradedSendSignal(5, 2300), 2300); 
setTimeout(() => upgradedSendSignal(6, 4400), 4400); 
setTimeout(() => upgradedSendSignal(7, 4500), 4500); 

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  function wrapper(...args) {
    clearTimeout(timeoutId);
    if (!timeoutId) {
      func(...args);
      wrapper.count++;
    }  
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
