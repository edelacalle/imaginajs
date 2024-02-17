export class EventBus {
    constructor() {
      // Inicializo la cola de eventos
      this.eventObject = {};
    }
    // Publicamos un evento
    publish(eventName,payload) {
      // Get all the callback functions of the current event
      const callbackList = this.eventObject[eventName];
  
      // eslint-disable-next-line no-undef
      if (!callbackList) return console.warn(eventName + " not found!");
  
      // execute each callback function
      for (let callback of callbackList) {
        callback(payload);
      }
    }
    // Subscribe to events
    subscribe(eventName, callback) {
      // initialize this event
      if (!this.eventObject[eventName]) {
        this.eventObject[eventName] = [];
      }
  
      // store the callback function of the subscriber
      this.eventObject[eventName].push(callback);
    }
  }