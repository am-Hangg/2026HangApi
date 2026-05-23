import Event from 'events';
const eventEmitter = new Event();

eventEmitter.on("greet", () => {
  console.log ("hello nepal");
});

eventEmitter.emit("greet");
