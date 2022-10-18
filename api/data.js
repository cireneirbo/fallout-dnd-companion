export default function returnEquipment() {

  const armors = [];
  const powerArmors = [
    ["Name", "Radiation", "Price(caps)", "AC", "Carry Weight(lbs)"],
    ["t-10", 10, 750, "+2", 1000],
    ["t-9", 12, 500, "+1", 1000],
    ["t-45", 40, 500, "+1", 500],
    ["t-45b", 45, 600, "+2", 750],
    ["t-45f", 50, 700, "+3", 1000],
    ["NCR t-45", 15, 450, "+1", 250],
    ["NCR t-45b", 20, 550, "+2", 500],
    ["NCR t-45f", 25, 650, "+3", 750],
    ["t-51", 60, 600, "+2", 750],
    ["t-51b", 70, 700, "+3", 1000],
    ["t-51f", 80, 800, "+4", 1250],
    ["t-60mk1", 90, 750, "+3", 1150],
    ["t-60mk2", 100, 850, "+4", 1400],
    ["t-60mk3", 110, 950, "+5", 1650],
    ["X-01", 100, 900, "+3", 1000],
    ["X-02", 120, 1000, "+4", 1250],
    ["X-03 'Hellfire'", 140, 1200, "+5", 1500], 		
  ];
  const weapons = [];
  const medicalSupplies = [];
  const weaponAndArmorMods = []; 
  const junkAndGears = [];
  const currencies = [];

  return [armors, powerArmors, weapons, medicalSupplies, weaponAndArmorMods, junkAndGears];
}
