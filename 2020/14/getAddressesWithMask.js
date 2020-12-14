const getAddressesWithMask = (address, mask) => {
  // console.log("---- getAddressesWithMask", address);
  let newAddress = parseInt(address, 10)
    .toString(2)
    .padStart(36, "0")
    .split("");

  // // console.debug("newAddress", newAddress);
  let addresses = new Array(newAddress);
  // // console.debug("addresses", JSON.stringify(addresses));
  for (let i = 0; i < newAddress.length; i++) {
    if (mask[i] == "1") {
      addresses = JSON.parse(
        JSON.stringify(
          addresses.map((addr) => {
            addr[i] = "1";
            return addr;
          })
        )
      );
      // console.debug("1", "index", i, "addresses", addresses);
    } else if (mask[i] == "X") {
      const addresses0 = JSON.parse(
        JSON.stringify(
          addresses.map((addr) => {
            addr[i] = "0";
            return addr;
          })
        )
      );
      // console.debug("X", "index", i, "addresses0", addresses0);
      const addresses1 = JSON.parse(
        JSON.stringify(
          addresses.map((addr) => {
            addr[i] = "1";
            return addr;
          })
        )
      );
      // console.debug("X", "index", i, "addresses1", addresses1);
      addresses = [...addresses0, ...addresses1];
      // console.debug("X", "index", i, "addresses", addresses);
    }
  }

  addresses = addresses.map((addr) => parseInt(addr.join(""), 2));
  // console.log('getAddressesWithMask', addresses);
  return addresses;
};

module.exports = getAddressesWithMask;
