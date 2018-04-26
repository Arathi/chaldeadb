module.exports = (sequelize, DataTypes) => {
  var Servant = sequelize.define('Servant', {
    id:            { type: DataTypes.INTEGER, primaryKey: true },
    name_jp:       { type: DataTypes.STRING },
    name_cn:       { type: DataTypes.STRING },
    name_en:       { type: DataTypes.STRING },
    class:         { type: DataTypes.STRING },
    rarity:        { type: DataTypes.INTEGER },
    cost:          { type: DataTypes.INTEGER },
    buster_card:   { type: DataTypes.INTEGER },
    arts_card:     { type: DataTypes.INTEGER },
    quick_card:    { type: DataTypes.INTEGER },
    buster_hits:   { type: DataTypes.INTEGER },
    arts_hits:     { type: DataTypes.INTEGER },
    quick_hits:    { type: DataTypes.INTEGER },
    ex_hits:       { type: DataTypes.INTEGER },
    np_charge_atk: { type: DataTypes.FLOAT(10,4) },
    np_charge_def: { type: DataTypes.FLOAT(10,4) },
    death_rate:    { type: DataTypes.FLOAT(10,4) },
    star_abs:      { type: DataTypes.INTEGER },
    star_gen:      { type: DataTypes.FLOAT(10,4) },
    attribute:     { type: DataTypes.STRING },
    alignments:    { type: DataTypes.STRING },
    gender:        { type: DataTypes.INTEGER },
    appmedia_id:   { type: DataTypes.INTEGER },
    avatar:        { type: DataTypes.STRING }
  }, {
    tableName: 'servants',
    timestamps: false
  });
  
  return Servant;
};
