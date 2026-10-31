type TrafficLight = "red" | "yellow" | "green";

function getAction(light: TrafficLight): string {
  if (light === "red") return "Stop";
  if (light === "yellow") return "Slow down";
  return "Go";
}

console.log(getAction("red"));
console.log(getAction("yellow"));
console.log(getAction("green"));