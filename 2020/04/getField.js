const getField = (fieldId, passeport) => {
    const re = new RegExp(fieldId + ":(\\S+)", "gmu");
    const matches = [...passeport.matchAll(re)];
    if( matches.length ){
        return matches[0][1];
    } else {
        return '';
    }
    
  };

module.exports = getField;
