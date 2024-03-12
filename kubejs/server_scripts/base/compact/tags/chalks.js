ServerEvents.tags("item", (event) => {
  event.add("kubejs:chalk/broken", [
    "kubejs:not_chalk_white_dust",
    "kubejs:not_chalk_gold_dust",
    "kubejs:not_chalk_purple_dust",
    "kubejs:not_chalk_red_dust",
  ]);
  event.add("kubejs:chalk", [
    "occultism:chalk_white",
    "occultism:chalk_gold",
    "occultism:chalk_purple",
    "occultism:chalk_red",
  ]);
});
