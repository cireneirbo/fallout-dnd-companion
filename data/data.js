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
  const ballisticPistols = [
    ["Name", "Cost (Caps)", "Damage", "Range", "Weight", "Ammo", "Mag", "Properties", "Appearances"],
    [".22 Pistol (Silenced)", "25", "1d4-1", "40/80", "3 lb.", ".22 Caliber", "16", "Silenced, Holdout", "NV"],
    [".32 Revolver", "30", "1d6", "30/120", "1.5 lb.", ".32 Magnum", "5", "None", "3"],
    [".357 Revolver", "40", "1d6", "50/150", "2.5 lb.", ".357 Magnum", "6", "None", "NV"],
    [".44 Revolver", "65", "2d6", "60/120", "3 lb.", ".44 Magnum", "6", "None", "2, Tactics, 3, NV, 4, 76"],
    ["Single Action Revolver", "70", "2d10", "80/120", "3 lb.", ".45 Auto", "6", "Long reload", "76"],
    [".50 Revolver", "150", "6d6", "80/140", "6 lb.", ".50 MG", "6", "None", "Van Buren"],
    [".44 Pistol (Desert Eagle)", "60", "2d8", "30/120", "4 lb.", ".44 Magnum", "8", "None", "1, 2,"],
    [".45 Auto Pistol (Colt)", "70", "2d4", "90/180", "2.5 lb.", ".45 Auto", "7", "None", "Tactics, NV"],
    ["9mm Pistol", "40", "1d6", "50/100", "2 lb.", "9mm", "13", "None", "Tactics, NV"],
    ["9mm Mauser (Chinese Pistol)", "25", "1d4", "30/160", "2 lb.", "9mm", "9", "None", "3, NV"],
    ["10mm Pistol", "50", "2d4", "50/150", "3 lb.", "10mm", "12", "None", "1, 2, 3, NV, 4, 76"],
    ["5.56mm Pistol (.223 Pistol)", "60", "2d6", "50/200", "5 lb.", "5.56mm", "5", "None", "1, 2, NV"],
    ["12.7mm Pistol (14mm Pistol)", "90", "2d8", "90/120", "3.5 lb.", "12.7mm", "6", "None", "1, 2, NV"],
    ["Black Powder Pistol", "110", "2d12", "90/120", "3 lb.", ".50 Ball", "1", "Long Reload", "76"],
    ["Gauss Pistol", "100", "3d6", "90/180", "5 lb.", "2mm EC", "12", "None", "2"],
    ["Hunting Revolver", "80", "2d10", "50/200", "4 lb.", ".45-75 Gov", "5", "Scope", "NV"],
    ["Pipe .38 Pistol", "20", "1d4", "20/80", "2.5 lb.", ".38 Caliber", "13", "None", "4, 76"],
    ["Pipe .45 Revolver", "30", "1d6", "30/90", "4 lb.", ".45 Caliber", "6", "None", "4, 76"],
    ["Pipe .308 Bolt-Action Pistol", "30", "1d8", "40/120", "3.5 lb.", ".308 Caliber", "6", "None", "4, 76"],
    ["Police Pistol", "75", "1d12", "90/120", "3 lb.", ".357 Magnum", "6", "Holdout", "NV"],
    ["Ranger Sequoia", "90", "3d10", "50/200", "4 lb.", ".45-75 Gov", "5", "Holdout", "NV"],
    ["Zip Gun", "45", "1d6", "60/120", "1 lb.", "10mm", "1", "None", "2(Cut), Tactics"],
    ["Needler Pistol", "60", "2d8+1", "50/150", "4 lb.", "Hypo Cartridge", "10", "None", "2, Tactics"]
  ];
  const pistols = [];
  const explosivePistols = [];
  const meleePistols = [];
  
  
  const weapons = [
    ballisticPistols,
    pistols,
    explosivePistols,
    meleePistols,  
    

  ];
  const medicalSupplies = [];
  const weaponAndArmorMods = []; 
  const junkAndGears = [];
  const currencies = [
    ["Currency Name to Compare Other Currencies Against", "Bottlecap",	"Clean Water",	"Brotherhood Script",	"Denarius",	"Aureus",	"$5 NCR",	"$20 NCR", "$100 NCR"],
    ["Cap(s)",	"1",	"1/20",	"1/10",	"1/4",	"1/100",	"1/2",	"1/8",	"1/40"],
    ["Clean Water",	"20",	"1",	"1/2",	"5",	"1/5",	"4",	"2.5",	"1/2"],
    ["Brotherhood Script",	"10",	"2",	"1",	"2.5",	"1/10",	"5",	"1.25",	"1/4"],
    ["Denarius",	"4",	"1/5",	"2.5",	"1",	"1/25",	"2",	"1/2",	"1/20"],
    ["Aureus",	"100",	"5",	"10",	"25",	"1",	"50",	"12.5",	"2.5"],
    ["5$ NCR",	"2",	"1/10",	"1/2",	"1/2",	"1/50",	"1",	"1/4",	"1/20"],
    ["20$ NCR",	"8",	"2/5",	"4/5",	"100",	"2",	"4",	"1",	"1/5"],
    ["100$ NCR",	"40",	"2",	"4",	"10",	"2/5",	"20",	"5",	"1"],
    ["GP",	"2",	"1/10",	"1/5",	"1/2",	"1/50",	"1",	"1/4",	"1/20"],
    
  ];

  return [armors, powerArmors, weapons, medicalSupplies, weaponAndArmorMods, junkAndGears, currencies];
}
