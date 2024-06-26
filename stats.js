/**
 * Tug
 * 36=weak
 * 37=strong
 * 38=legendary
 * 
 * BaitItemId
 * 20676=Blue Bobbit
 * 
 * FishingSpotId
 * 197=Shirogane
 * 
 * CatchItemId
 * 20092=Grinning Anchovy
 * 20110=Glass Tuna
 * 20112=Ruby Shrimp
 * 20113=Striped Fugu
 * 23064=The Gambler
 * 0=[Uncaught]
 **/

const unslapped = require('./unslapped.json');
const slapped = require('./slapped.json');

const unslappedTotalCount = unslapped.length;
const slappedTotalCount = slapped.length;

const unslappedWeakTugTotalCount = unslapped.filter(item => item.Tug === 36).length;
const unslappedStrongTugTotalCount = unslapped.filter(item => item.Tug === 37).length;
const unslappedLegendaryTugTotalCount = unslapped.filter(item => item.Tug === 38).length;
const unslappedWeakTugUncaughtCount = unslapped.filter(item => item.Tug === 36 && item.CatchItemId === 0).length;
const unslappedStrongTugUncaughtCount = unslapped.filter(item => item.Tug === 37 && item.CatchItemId === 0).length;
const unslappedLegendaryTugUncaughtCount = unslapped.filter(item => item.Tug === 38 && item.CatchItemId === 0).length;
const unslappedTunaCount = unslapped.filter(item => item.CatchItemId === 20110).length;
const unslappedFuguCount = unslapped.filter(item => item.CatchItemId === 20113).length;
const unslappedAnchovyCount = unslapped.filter(item => item.CatchItemId === 20092).length;
const unslappedShrimpCount = unslapped.filter(item => item.CatchItemId === 20112).length;
const unslappedGamblerCount = unslapped.filter(item => item.CatchItemId === 23064).length;

const slappedWeakTugTotalCount = slapped.filter(item => item.Tug === 36).length;
const slappedStrongTugTotalCount = slapped.filter(item => item.Tug === 37).length;
const slappedLegendaryTugTotalCount = slapped.filter(item => item.Tug === 38).length;

console.log('Unslapped Data:');
console.log(`Grinning Anchovy total: ${unslappedAnchovyCount}`);
console.log(`Grinning Anchovy ratio: ${unslappedAnchovyCount / unslappedTotalCount}`);
console.log(`Glass Tuna total: ${unslappedTunaCount}`);
console.log(`Glass Tuna ratio: ${unslappedTunaCount / unslappedTotalCount}`);
console.log(`Ruby Shrimp total: ${unslappedShrimpCount}`);
console.log(`Ruby Shrimp ratio: ${unslappedShrimpCount / unslappedTotalCount}`);
console.log(`Striped Fugu total: ${unslappedFuguCount}`);
console.log(`Striped Fugu ratio: ${unslappedFuguCount / unslappedTotalCount}`);
console.log(`The Gambler total: ${unslappedGamblerCount}`);
console.log(`The Gambler ratio: ${unslappedGamblerCount / unslappedTotalCount}`);
console.log(`Uncaught weak bite total: ${unslappedWeakTugUncaughtCount}`);
console.log(`Uncaught strong bite total: ${unslappedStrongTugUncaughtCount}`);
console.log(`Uncaught legendary bite total: ${unslappedLegendaryTugUncaughtCount}`);
console.log('---');
console.log(`All weak bite total: ${unslappedWeakTugTotalCount}`);
console.log(`All weak bite ratio: ${unslappedWeakTugTotalCount / unslappedTotalCount}`);
console.log(`All strong bite total: ${unslappedStrongTugTotalCount}`);
console.log(`All strong bite ratio: ${unslappedStrongTugTotalCount / unslappedTotalCount}`);
console.log(`All legendary bite total: ${unslappedLegendaryTugTotalCount}`);
console.log(`All legendary bite ratio: ${unslappedLegendaryTugTotalCount / unslappedTotalCount}`);
console.log('');
console.log('Slapped data:');
console.log(`All weak bite total: ${slappedWeakTugTotalCount}`);
console.log(`All weak bite ratio: ${slappedWeakTugTotalCount / slappedTotalCount}`);
console.log(`All strong bite total: ${slappedStrongTugTotalCount}`);
console.log(`All strong bite ratio: ${slappedStrongTugTotalCount / slappedTotalCount}`);
console.log(`All legendary bite total: ${slappedLegendaryTugTotalCount}`);
console.log(`All legendary bite ratio: ${slappedLegendaryTugTotalCount / slappedTotalCount}`);
