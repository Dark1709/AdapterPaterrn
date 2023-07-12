import Adaptee from './adapter/adaptee.js';
import Target from './adapter/target.js';
import Adapter from './adapter/adapter.js';
//4to. Aquí utilizamos el patrón adapter para adaptar la interfaz del Adaptee al Target


const target = new Target();
console.log(target.request());

console.log('-------------------');

const adaptee = new Adaptee();
console.log(adaptee.specificRequest());

console.log('-------------------');

const adapter = new Adapter(adaptee);
console.log(adapter.request());
